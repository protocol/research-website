---
# Blog post title
title: "SnarkPack: How to aggregate SNARKs efficiently"

# Website post date
# format YYYY-MM-DD
date: 2021-05-01

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - nicolas-gailly

# If applicable
categories:
  - blog

# If applicable
tags:
  - 

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonetlab

# Not used
draft: false



---

# SnarkPack: How to aggregate SNARKs efficiently

*A guided dive into the cryptographic techniques of SnarkPack*

This post exposes the inner workings of SnarkPack, a practical scheme to aggregate Groth16 proofs, a derivation of the Inner Pairing Product work of [Bunz et al.](https://eprint.iacr.org/2019/1177), and its application to Filecoin. It first explains what are Groth16 proofs, then explains what is the inner product argument, what is the difference between the original IPP [paper](https://eprint.iacr.org/2019/1177) and our modifications. This posts ends by showing the performance of our scheme and all optimizations we made to reach that performance.

**TLDR**: SnarkPack can aggregate 8192 proofs in 12sec, producing a proof which is 38x smaller in size and can be verified in 50ms, including serialization — 11x faster than batch verification. The scheme scales logarithmically, yielding an exponentially faster verification scheme than batching: the more you aggregate, the better.


**Scope**: This post is not for experienced cryptographers; the goal is that
anybody with a high school math level can follow easily. For a more formal
description of the scheme, we refer to our [paper](https://eprint.iacr.org/2021/529).


- [SnarkPack: How to aggregate SNARKs efficiently]
   - [SNARKs & Scalability]
     -  [Groth16 proofs in Filecoin]
    - [Notations]
    - [Inner Pairing Product Argument (IPP)]
       - [Generalized Inner Product Argument (GIPA)]
    - [Trusted Inner Pairing Product (TIPP)]
        - [Commitment Scheme]
        - [Trusted Setup]
        - [Logarithmic Commitment Key Verification]
    - [Multiexponentiation Inner Pairing Product (MIPP)]
    - [Groth16 Aggregation]
        - [Groth16 Proof Verification]
        - [Groth16 Aggregated Verification]
    - [Putting everything together]
        - [Rescaled commitment keys]
        - [Groth16 Aggregation Protocol]
        - [Groth16 Verification]
    - [Performance]
        - [Trusted Setup]
        - [Optimizations]
    - [Conclusion]
    - [Acknowledgements]



## SNARKs & Scalability

SNARKs are *Succinct Non-interactive ARguments of Knowledge*; in short, one can prove to a verifier, in a succinct way, that they executed a computation correctly with the correct inputs . They have *tremendously* impacted the blockchain world by opening multiple uses cases that were previously impracticable, such as anonymous transactions ([Zcash](https://z.cash/)), fast light clients / compact blockchain ([Celo](https://celo.org/), [Mina](https://minaprotocol.com)), and provable decentralized storage such as ([Filecoin](https://www.filecoin.com/)).

The most promiment SNARK system deployed in production is the construction proposed by [Jens Groth in Eurocrypt 2016](https://eprint.iacr.org/2016/260) that showed how to obtain a succinct proof of knowledge with an efficient verifier for any arithmetic circuits. Note that this proof system requires a Structured Reference String, a vectors of elements specially crafted for a specific computation. To generate the SRS, we need to run a trusted setup, a *complicated* setup ceremony run by multiple users to generate keys that provers and verifiers require. It has been implemented in multiple frameworks and programming languages and is the most used SNARK system to this day. To give a sense of proportion, the Filecoin network verifies more than **2 millions Groth16 SNARKs per day** (more info [here](https://spacegap.github.io/#/)) !

Due to its rapid and massive adoption, systems that use SNARKs face a **scalability challenge** similar to [current issues](https://education.district0x.io/general-topics/ethereum-scaling/introduction-to-ethereum-scaling/) Ethereum is facing. The reason is that all the nodes in the network have to process each proof individually to agree on the final state, and thereby this enforces an implicit limit as to how many proofs the network can verify per day. 

There are multiple solutions that came up to face this challenge with respect to SNARKs. The most recent and efficient is based on the notion of *proof carrying data* that enables fully recursive proof system: one proof can verify another proof and the level of recursion is infinite. This is the approach that the [Mina protocol](https://minaprotocol.com) and [Halo2](https://github.com/zcash/halo2) (from Zcash) are currently pursuing. Unfortunately, this approach requires a complete new proof system which is incompatible with the current Groth16 proof system. Ideally we'd like to be able to scale the current proofs that we have now in production.

Fortunately, a [result](https://eprint.iacr.org/2019/1177) that came out in 2019 from Bunz, Maller,  Mishra ,  Tyagi and Vesely showed a rather elegant solution to **aggregate Groth16 proofs** together, giving a logarithmic sized proof and not requiring any change in the proof system itself! In other words, one can aggregate current proofs and bring scalability to the current systems without drastic changes!

After discovering this paper, we started looking to see if it could be applied in Filecoin. We were really excited about the potential scalability it could bring. 

### Groth16 proofs in Filecoin

Filecoin miners need to prove they have encoded a 32GiB portion of storage correctly, i.e. that they reserved 32GiB of storage. That's their stake so they can participate in the consensus and mine blocks. In order to do that, a miner run a special encoding function ([the proof of replication](https://spec.filecoin.io/#section-algorithms.sdr)) which works in several consecutive steps. At each steps, the miner encodes a layer of 2^30 nodes of 32 bytes (2^8 bits) each (leading to 2^38 bits = 32GB) using nodes from previous layer and nodes from the same layer. After each step, it makes a [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree) of all these nodes.
At the end, the prover must create a proof that they did all these computations correctly by giving a Merkle path to random nodes in each layer.

The problem is that there are so many nodes in a layer. Our trusted setup could only go up to 2^27 to be practical (the size of the trusted setup becomes too large to be practical afterwards) so we've had to split our proof of replication SNARK into 10 smallers SNARKs. 
Fortunately, we can verify SNARKs using batch verification. What we will see in this post, however, is that we dramatically reduce the cost of having 10 SNARKs for one proof by being able to aggregate them.

## Notations

We will give a high level overview of how the proof aggregation works but, before that, we need to define some notations (not to worry; these are all usual notations!).
* We work in pairing-equipped curves, such as [BLS12-381](https://electriccoin.co/blog/new-snark-curve/), used by Filecoin and Zcash.
* We have one field called $F_q$ with $q$ prime
    * It simply means we deal with numbers between 0 and $q-1$ 
    * Addition and multiplication are done $\textrm{mod }  q$
    * All scalars in this **field are written in lowercase**
* We have two base groups $\mathbb{G_1}$ and $\mathbb{G_2}$ and one target group $G_t$ **all written in uppercase**.
    * These are the points on the BLS12-381 elliptic curves, for example
    * All groups are of orders $q$ (there are $q$ points on each group)
    * $G$ is a generator of $\mathbb{G_1}$ and $H$ a generator of $\mathbb{G_2}$
* We can do a *scalar multiplication* by multipliying an element from $\mathbb{F_q}$ and an elliptic curve point: $C = A^s$
* Points on the elliptic curve are a group, we can add/substract them. Here we are using the multplicative notation so we say we can multiply / divide them: $C = A * B$
* We have a special function, called bilinear pairing map, defined as $e: \mathbb{G_1} \times \mathbb{G_2} \rightarrow \mathbb{G_t}$ with the following property called *bilinearity*:
    * $e(G^a,H^b) = e(G,H)^{ab}$

The pairing equipped curves (elliptic curves that posses such a pairing map) have had a huge impact on cryptographic schemes over the last 20 years. For example, they enabled constant size SNARKs, short BLS signatures (used in Eth2), and efficient identity management solutions.


## Inner Pairing Product Argument (IPP)

The core of the protocol is the inner pairing product argument, a generalization of the inner product argument from [Bootle et al.](https://eprint.iacr.org/2016/263) in the pairing settings. 
First, let's agree on what the inner product is for two vectors in $\mathbb{F_q^n}$ (vectors of elements in $\mathbb{F_q}$ of length $n$):
$$
\lt \mathbf{a},\mathbf{b} \gt = \sum a_ib_i
$$ 
The inner product argument allows a prover to prove he correctly computed such product to a verifier, **without the verifier to do this computation**. 
Thanks to the IPP paper, we can also prove an inner product relationship *in the exponent*. For example, the following is an inner product "in the exponent" between a vector $\mathbf{C} = \{G^{c_i}\}$ and a vector $\mathbf{r} \in \mathbb{F_q^n}$, which we later call a MIPP relation:
$$
<\mathbf{C},\mathbf{r}> = \prod C_i^{r_i} = \prod G^{c_i r_i} = G^{\sum c_i r_i}
$$
Another example called TIPP, is using the pairing operation so the inner product happens in the exponent between two vectors $\mathbf{A} \in \mathbb{G_1^n}$ and $\mathbf{B} \in \mathbb{G_2^n}$:
$$
\lt \mathbf{A},\mathbf{B} \gt = \prod e(G^a_i,H^b_i) = \prod e(G,H)^{a_i*b_i} = e(G,H)^{\sum a_i*b_i}
$$ 
In fact, the paper generalizes the scheme to allow extended variants of such computations called *inner product maps*, which satisfy the same bilinear properties as the classical inner product over integers: 
$$
<\mathbf{a} + \mathbf{b}, \mathbf{c} + \mathbf{d}> = <\mathbf{a},\mathbf{c}>+<\mathbf{a},\mathbf{d}> + <\mathbf{b},\mathbf{c}> + <\mathbf{b},\mathbf{d}>
$$
The scheme is called GIPA for Generalized Inner Product Argument.


### Generalized Inner Product Argument (GIPA)

Let's first see a small example to understand the principles behind GIPA.

#### Example

The idea at its core,explained in the original paper, is relatively simple. For the sake of simplicity, let's look at an example where vectors are of length $2$. We assume the goal is to convince a verifier that $e(A_1,B_1) * e(A_2,B_2) = c$ such that the verifier doesn't have to compute everything, where $A_i = G^{a_i}$ and $B_i = H^{b_i}$. 

One way do to that is to do an interactive proof over a "cross computation":
* Prover computes 
    * the left cross product $l = e(A_1,B_2) = e(G,H)^{a_1b_2}$
    * the right cross product $r = e(A_2,B_1) = e(G,H)^{a_2b_1}$
    * **Note** how the indices are swapped !
* Verifier samples a random $x$ and sends to verifier 
    * This can be done via a hash function using the Fiat Shamir heuristic.
* Prover outputs 
    * the "compression" of $(A_1,A_2)$ $A' = A_1^x * A_2$ 
    * the "compression" of $(B_1,B_2)$ $B' = B_1^{x^{-1}} * B_2$

Now the verification equation becomes: 
$$
e(A',B') = l^x * c * r^{x^{-1}}
$$
and the verifier only has to do **one pairing operations to verify** that statement, instead of two naively. To understand why it works, let's write what happens in $e(A',B')$, the **left term** of the verification equation:
$$
e(A',B') = e(G^{a_1 x}*G^{a_2},H^{b_1 x^{-1} + b_2} * H^{b_2}) = e(G^{a_1 x + a_2},H^{b_1 x^{-1} + b_2}) \\= e(G,H)^{(a_1 x + a_2) * (b_1 x^{-1} + b_2)}
$$
For the sake of clarity, let's only write the exponents:
$$
 (a_1 x + a_2) * (b_1 x^{-1} + b_2) = a_1b_1 + xa_1b_2 + x^{-1}a_2b_1 + a_2b_2 
$$

We also know that $c = e(A_1,B_1)*e(A_2,B_2) = e(G,H)^{a_1b_1 + a_2b_2}$ - remember $c$ is the value the prover wants to convince the verifier of its validity. Therefore, in the **right term** of the verification equation, we have:
$$
l^x * c * r^{x^{-1}} = (e(G,H)^{a_1b_2})^x * e(G,H)^{a_1b_1 + a_2b_2} * (e(G,H)^{a_2b_1})^{x^{-1}}
$$
For the sake of clarity, let's only write the exponents:
$$
x(a_1b_2) + a_1b_1 + a_2b_2 + x^{-1}(a_2b_1)
$$
which is **exactly** what we have in the left term ! 

We have just roughly shown that the protocol is complete and **enable us to halve the number of pairing operations**. One might ask though why is it secure? The security comes from the fact the prover doesn't know the $x$ in advance when he computes $l$ and $r$ so there is only a negligible probability he can compute these in a malicious way that will make the verification equation pass.

GIPA extends this idea to any *bilinear inner product map* relation between two vectors whose lengths equal a power of two.
Before diving into how GIPA works, we first needs a to define what is an **inner product commitment scheme** as it is an essential requirement of the GIPA protocol.

#### Inner product commitment scheme

First, let me cite Wikipedia on its clear and succinct way to define what is a commitment scheme:
> A commitment scheme allows one to commit to a chosen value (or chosen statement) while keeping it hidden to others, with the ability to reveal the committed value later. Commitment schemes are designed so that a party cannot change the value or statement after they have committed to it: that is, commitment schemes are binding

During the rest of this post, we refer to the commitment as $CM(ck,m)$ where $ck$ is called the *commitment key* (it can be null) and $m$ is the message to commit. Specifically, we say that the commitment is *binding* when it is infeasible to find two messages that maps to the same commitment under the same key. This is an important property to make sure the prover is not able to cheat during proof generation!

However, GIPA requires an inner product commitment scheme $CM$ with the following properties
* A key space $K = K_1 \times K_2 \times K_2$
* A message space $M = M_1 \times M_2 \times M_3$
* The sum of two commitments to *different messages* under the *same commitment key* is equal to a commitment to the *sum of the messages*
    * $CM(ck, M) + CM(ck,M') = CM(ck, M + M')$
* The sum of two commitments to the *same message* under *two different commitment keys* is equal to a commitment of the message under the *sum of the keys*
    * $CM(ck, M) + CM(ck', M) = CM(ck + ck', M)$
* And a *collapsing* property that we for sake of simplicity we will not expose here as it is not important to understand how the scheme works in this context.

For example, one such commitment scheme over vectors of length $n$ can be:
* $ck = (\mathbf{V} \in \mathbb{G_2^n},\mathbf{W} \in \mathbb{G_1^n},1 \in \mathbb{G_t})$
* $m = (\mathbf{A} \in \mathbb{G_1^n},\mathbf{B} \in \mathbb{G_2^n},\prod e(A_i,B_i) \in \mathbb{G_t})$
* $CM(ck,m) = (\prod e(A_i,V_i),\prod e(W_i,B_i), \prod e(A_i,B_i))$

This scheme can be used with GIPA to prove statements like $\prod e(A_i,B_i) = c$ which is the kind of statement we need to prove when aggregating Groth16 proofs !

#### GIPA

Now that we introduced the requirements, let's look at how GIPA works on a high level. This is working very similarly to our preceding example.
We have as inputs:
* Vectors $\mathbf{A}$ and $\mathbf{B}$ of length $n = 2^k$
* Commitment scheme $CM$ with the above properties

Even though GIPA is a generic protocol (it needs to be instantiated using specific commitments), let's define our goal: we (as the prover) want to prove the statement that two committed vector $\mathbf{A}$ and $\mathbf{B}$ have a pairing product $\prod e(A_i,B_i) = C$, which is similar to our example shown in the inner product argument section.

Here is the great diagram made by the authors themselves (prover part is in black, verifier part is in blue):
![](https://i.imgur.com/IzCEDjT.png)

Let's make a few observations from this diagram. 

We can see the protocol runs in a recursive loop. At each step of the loop, $\mathbf{A}$ and $\mathbf{B}$  **and** the **commitment keys size are halving** in size, the variable $m$ tracks the current size. The "compressed" vectors and keys are passed into the same procedure until we reach a length of 1. This explains the logarithmic nature of the scheme (there are $log(2^k)=k$ steps)! 
We can observe similarities with the small example shown in the previous section:
* $z_l =  \lt \mathbf{a}_{[m':]},\mathbf{b}_{[:m']} \gt  = \prod e(A_{m' + i},B_{i})$ is the left cross product $l$
* $z_r = \prod\limits_{i=0}^{m'} e(A_{i},B_{m' + i})$ is the right cross product $r$
* $a' = \sum\limits_{i=0}^{m'} a_{i} + xa_{m' + i}$ is the "compression" of the $\mathbf{A}$ vector (size halves after this step)
* $b' = \sum\limits_{i=0}^{m'} b_{i} + x^{-1}b_{m' + i}$ is the "compression" of the $\mathbf{B}$ vector (size halves after this step)


What GIPA is doing on top is **to commit to both $z_l$ and $z_r$** at each step of the reduction using the commitment scheme provided. Indeed, the prover will return to the verifier all $z_l$, $z_r$, $C_l$ and $C_r$ at each step, so he needs to commit to these values at each step. Given we now use a commitment scheme, we also need to "compress" the commitment keys the same way, that's what $ck_1'$ and $ck_2'$ are doing. 

If you look closely at the verifier computations (ex. $ck_1' = ck_{1,[:m']} + x^{-1}\cdot ck_{1,[m':]}$), you can notice the **verifier is doing a linear amount of work** (the first step operates on $n$-sized keys). This contradicts our goals, however, later on, we will see how to make the prover compute the final commitment keys for the verifier and let the verifier quickly verify their validity. This allows the verifier to only perform a logarithmic number of operations.

#### Non interactive proof

So far GIPA is shown in the interactive setting, where a prover and a verifier interact during the proof. In practice though we want to have a *non-interactive* proof where the prover makes the proof on his side and sends it to the verifier, i.e. a blockchain for example. We can easily do so by making all random challenges $x$ deterministically derived from a hash function (such as SHA256) given the previous computations of the prover and public inputs:
$$
x = Hash(z_l,z_r,C_l,C_r)
$$

This is what is usually called the *[Fiat Shamir heuristic](https://en.wikipedia.org/wiki/Fiat%E2%80%93Shamir_heuristic)* which can turn interactive proofs to non-interactive via the use of hash functions. Usually, using Fiat-Shamir *reduces* the security of the scheme so the security parameters have to be *higher*. It is even more the case in the recursive loops where the reductions in security compound. 

Interestingly, the security proof of this aggregation scheme use a different model (algebraic commitment model) without using the Fiat-Shamir reduction and thereby **does not suffer from the usual reduction in security** !

## Trusted Inner Pairing Product (TIPP)

In this section, we are exploring one instantiation of GIPA called TIPP required to compute a proof of corect Groth16 aggregation. It produces a proof showing the prover correctly computed the pairing product $Z = \prod e(A_i,B_i)$ given a commitment to $\mathbf{A}$ and $\mathbf{B}$. To prove such a statement, we need a commitment scheme suitable for GIPA.

### Commitment Scheme 

Let's present the commitment scheme the original paper presents to be used for TIPP:
$$
ck = (\mathbf{V} = \{H^{\beta^{2i}}\}_{i=0}^{n-1},\mathbf{W} = \{G^{\alpha^{2i}}\}_{i=0}^{n-1},1 \in \mathbb{G_t})\\
m = (\mathbf{A} \in \mathbb{G_1^n},\mathbf{B} \in \mathbb{G_2^n},\prod e(A_i,B_i) \in \mathbb{G_t})\\
CM(ck,m) = (\prod e(A_i,V_i),\prod e(W_i,B_i), \prod e(A_i,B_i))
$$
Note the commitment keys structure: they only contain even powers and the maximum power is therefore $2n-2$.

Lets try to plug this into GIPA verifier code and see the concrete changes from the generic GIPA. For the sake of succintness, we only look at the verifier part here.

Recall that the verifier gets as input the original commitment $C = CM((\mathbf{V},\mathbf{W},1), \mathbf{A},\mathbf{B},\prod e(A_i,B_i)) = (C_1,C_2,C_3)$. There are two main instructions for the verifier. The first one compresses the commitment:
$$
C = C_l^x * C * C_r^{x^{-1}}
$$
(note in the GIPA diagram, they use the additive notation, while we use the multiplicative notation)
This gets changed to
$$
C_1 = C_{1,l}^x * C_1 * C_{1,r}^{x^{-1}} \\
C_2 = C_{2,l}^x * C_2 * C_{2,r}^{x^{-1}} \\
C_3 = C_{3,l}^x * C_3 * C_{3,r}^{x^{-1}}
$$
You can see we are compressing all three elements of the commitment scheme's output.

The final check at the end of the loop is special in our usage:
$$
CM(ck',a,b) == C
$$
becomes
$$
e(A,V) == C_1 \\
e(W,B) == C_2 \\
e(A,B) == C_3
$$
where $A$, $B$ are the last compressed single values of $\mathbf{A}$ and $\mathbf{B}$ and $V$ and $W$ are the last compressed commitment keys (length 1 as well).
The first and second checks are verifying that the commitments to $\mathbf{A}$ and $\mathbf{B}$ have been correctly compressed at each step. The final check is verifying if the inner pairing product have been correctly computed, as in our first toy example!


### Trusted Setup

As you can see, $\mathbf{v}$ and $\mathbf{w}$ depend on two parameters $\alpha$ and $\beta$, but we haven't shown where they come from. As it happens often in cryptography, we simply enforce that they come associated with the scheme as a ***Structured Reference String***. This SRS is to be generated **outside of the protocol** in a one-time manner similar to how trusted setups, or sometimes called powers of tau ceremonies, have been made for regular usage of Groth16 ([Zcash](https://www.zfnd.org/blog/powers-of-tau/), [Filecoin](https://github.com/filecoin-project/powersoftau), [Celo](https://celo.org/plumo)...). During these ceremonies, the $g^\alpha$ and $h^\beta$ are computed via a multi-party computation protocol and the $\alpha$ and $\beta$ are never computed directly.

There is one problem though: **the SRS is not the same as the one for Groth16**!
The Groth16 SRS is quite involved, so we're only showing the relevant part here:
$$ \mathbf{V} = \{H^{\alpha^{i}}\}_{i=0}^{n-1} \space
    \mathbf{W} = \{G^{\alpha^{i}}\}_{i=0}^{n-1}
$$

We can see we only have one "secret" exponent here, $\alpha$ ! However, our commitment scheme requires two "secret" exponents:
* Aggregation proving key: $\mathbf{V} = \{H^{\beta^{2i}}\}_{i=0}^{n-1}$ and $\mathbf{W} = \{G^{\alpha^{2i}}\}_{i=0}^{n-1}$
* Aggregation verifiying key $(H^\alpha,G^\beta)$

Note that it also requires a power twice as high as Groth16's SRS.
We could make of course a new trusted setup, but we wanted to rely on the same security assumptions as of today and running a trusted setup is an expensive and long process we wanted to avoid.

One idea we had is that we could use two Groth16 SRS, for example the one from Filecoin and Zcash together, so we end up with two hidden exponent $\alpha$ and $\beta$. This was actually our first thought but **this would have been totally insecure**! Indeed, with two Groth16 SRS we would have $(G^\beta)^i$ and $(H^\beta)^i$  for $i:0 \rightarrow n$ while in our commitment scheme SRS, the verifying key only contains terms of the form $H^{\beta^{2i}}$, where the exponent of $\beta$ is even.  In other words, given an SRS constructed from two Groth16 SRS, **the binding property is broken**. Let's see an example where we can devise two different messages that map to the same commitment.
The commitment of the vector $\mathbf{A} = \{(G^{\beta^2})^x, G^y\}$ is:
$$
C_{A} = \prod e(A_i,V_i) = e(G^{\beta^2 x},H)e(G^y,H^{\beta^2}) = e(G,H)^{\beta^2 x + \beta^2 y}
$$
The commitment of a second vector $\mathbf{A'} = \{(G^{\beta^2})^y,G^x\}$ is:
$$
C_{A'} = \prod e(A_i',V_i) = e(G^{\beta^2 y},H)e(G^x,H^{\beta^2}) = e(G,H)^{\beta^2 y + \beta^2 x} = C_{A}
$$
Here the prover had access to $G^{\beta^2}$ from the Groth16 SRS which enabled him to break the binding property!

**We needed a new commitment scheme**. Thanks to Mary Maller, we devised a new commitment scheme whose SRS can be constructed from two Groth16 SRS. In other words, we found a commitment scheme that **enable us to aggregate current proofs without changing the proofs or requiring a new trusted setup**

Here is its description:
$$
ck = (\mathbf{V_1},\mathbf{V_2},\mathbf{W_1},\mathbf{W_2}) \textrm{ where} \\
 \mathbf{V_1} = \{H^{\alpha^{i}}\}_{i=0}^{n-1}, \mathbf{V_2} =\{H^{\beta^{i}}\}_{i=0}^{n-1}) \\
\mathbf{W_1} = \{G^{\alpha^{n + i}}\}_{i=0}^{n-1}, \mathbf{W_2} = \{G^{\beta^{n + i}}\}_{i=0}^{n-1}) \\
m = (\mathbf{A} \in \mathbb{G_1^n},\mathbf{B} \in \mathbb{G_2^n},\prod e(A_i,B_i) \in \mathbb{G_t})
$$

The commitment works as follows:
$$
  CM_{t}(ck,m) = \left(
    \begin{array}{l}
      \prod e(A_i,V_{1,i})e(W_{1,i},B_i),\\
      \prod e(A_i,V_{2,i})e(W_{2,i},B_i),\\
      \prod e(A_i,B_i)
    \end{array}
  \right)
$$


We can make a couple of observation here:
1. It requires indeed 4 commitment "keys" $(\mathbf{V_1},\mathbf{V_2},\mathbf{W_1},\mathbf{W_2})$ instead of 2 as in the previous commitment scheme. Both $\mathbf{V_1}$ and $\mathbf{W_1}$ can be created using one transcript of a Groth16 trusted setup and the second pair using another trusted setup transcript. 
2. We commit to $\mathbf{A}$ and $\mathbf{B}$ together, using both pairs of commitment keys. This leads us to use both of the secret exponents from both trusted setup and therefore gains the security property (blinding) of our scheme.
3. The keys $\mathbf{W_1},\mathbf{W_2}$ are *shifted* by $n$, the powers in the exponent go from $n$ to $2n-1$. Note this means both Groth16 transcripts must have *twice the size* of the number of proofs you want to aggregate ($n$) as the exponent goes to $2n-1$. In practice it is not a big deal since the transcripts existing starts at $2^{21}$ (zcash) so the maximum number of proofs we can aggregate using these is more than 1 millions proofs already.
4. Note the third component of the message is also the third component of the commitment scheme output, as it was the case in the first TIPP example.

Even though we can use this scheme directly, we also loose a bit of efficiency as now a prover must run twice more pairings and verifying the opening cost two more pairings (more on that later). However, given the very good performance of the scheme (more on that later as well!), this is an acceptable cost.

Can we use this scheme in GIPA ? Indeed this scheme is doubly homomorphic and uses an inner pairing map, so we're good to go ! I'll leave as an exercise to prove it fulfills the properties we listed before and see how this plugs in GIPA.

### Logarithmic Commitment Key Verification

We have our commitment scheme that we can plug into GIPA, but so far the verifier is still required to perform all the work on the commitment keys themselves and we said this is $O(n)$ work, this doesn't get us far !
The trick to get the verifier to only perform a logarithmic amount of work when verifying the commitment key has first been presented in the [Halo paper](https://eprint.iacr.org/2019/1021.pdf) and has been formalized later on in the [Proof Carrying Data paper](https://eprint.iacr.org/2020/499.pdf).  

To understand the trick let's make a small example. let's define our commitment key as
$$
\mathbf{V} = \{V_1,V_2,V_3,V_4\} = \{H,H^\alpha,H^{\alpha^2},H^{\alpha^3}\} 
$$
We define $n = 4$ and $l = log(n) = 2$. 
Let's run the GIPA loop twice (since $log(n) = 2$). During the first iteration, we derive a challenge $x_0$ and compress $\mathbf{V}$ into:
$$
\mathbf{V'} = \{H * H^{x_0\alpha^2}, H^\alpha  * H^{x_0\alpha^3} \} = \{V_1^{1 + x_0\alpha^2}, V_2^{1 + x_0\alpha^2}\} = \{V_1',V_2'\}
$$
For the second and final iteration, we derive the challenge $x_1$ and compress further:
$$
\mathbf{V'} = V_1' + V_2'^{x_1} = H^{(1 + x_0\alpha^2) + \alpha(1 + x_0\alpha^2)x_1} = H^{1 + x_0\alpha^2 + \alpha x_1 + \alpha^3 x_0x_1 }
$$
The trick is that we can represent **the elements in the exponent into a logarithmically sized product** ! Let's only look at the exponents:
$$
1 + x_0\alpha^2 + \alpha x_1 + \alpha^3 x_0x_1 = (1 + x_1\alpha)(1 + x_0\alpha^2) = \prod_{i=0}^{l-1} (1 + x_{l-i-1}\alpha^{2^i})
$$
Now we have a formula that express the commitment key at the last step computable **in a logarithmic number of steps!** The verifier can evaluate this formula in $O(log(n))$ time. For the more details, you can look how this formula is derived and proven more formally in the paper.

How can we use this trick now ? Well, let's consider the following polynomial, with $l = log(n)$ and $x_i$ being the $i-th$ challenge generated:
$$
f(y) = \prod_{i=0}^{log(n)-1} (1 + (x_{l-i}y)^{2^i})
$$
We just showed that the last commitment key $v$ is equal to $H^{f(\alpha)}$ !
To avoid the verifier to compute the compressed commitment keys at each step (which is linear work), the prover can use **a polyomial commitment scheme!** 

#### Polynomial Commitments

A polynomial commitment is a construction that allows a prover to commit to a polynomial $f(x)$ and then later on reveal $y = f(a)$ with a proof that shows he correctly evaluated the polynomial. In this setting, since we are allowed to use pairings and we have a trusted setup at our disposal, we can use the [KZG](https://pdfs.semanticscholar.org/31eb/add7a0109a584cfbf94b3afaa3c117c78c91.pdf) polynomial commitment scheme, which is used in multiple places, including in state of the art SNARKs systems such as Plonk.
Given there are already lots of ressources on KZG commitments, we invite you to read the excellent and succinct description of Tomescu on KZG polynomial commitments -> [link](https://alinush.github.io/2020/05/06/kzg-polynomial-commitments.html).

To use this trick, the prover perform the following steps: 
1. At the end of GIPA, it derives a random challenge $z$ via a hash function.
    * It hashes the last commitment key value $\mathbf{V}$
3. Computes an KZG opening for $f(z)$. Precisely, it computes $H^{f(alpha) - f(z) / (alpha - z)}$
4. Sends the opening and the last commitment key to the verifier

Normally in KZG the $f(alpha)$ is the commitment to the polynomial. In our case, the commitment **is the last commitment key value** !

The verifier do the following:
1. Verifies all GIPA checks
2. Recompute the challenge $z$ (it can do so because it has the last commitment keys from the prover) 
3. Evaluate $f(z)$ using the formula described at the previous section
4. Verifies the KZG opening at the point $z$ with the basis being the last commitment key $\mathbf{V}$ !

If the opening at a random point verifies, it means that the polynomial $f$ has been computed correctly with high proabibility and therefore that the final commitment keys are correct!

**Note the verifier must do this for both $\mathbf{V_1}$, $\mathbf{V_2}$, $\mathbf{W_1}$ and $\mathbf{W_2}$ for TIPP**; he must verify 4 openings in total for TIPP .

## Multiexponentiation Inner Pairing Product (MIPP)

For Groth16 aggregation, we are going to need to prove the relation $Z = \sum_{i=0}^{n-1} C_i^{r_i}$ which is a multiexponentiation product. We can do this with GIPA simply by changing the commitment scheme!
$$
m = (\mathbf{C} \in \mathbb{G_1^n}, \mathbf{r} \in \mathbb{F_r}, \sum_{i=0}^{n-1} C_i^{r_i}) \\
ck = (\mathbf{V} = \{H^{\alpha^i}\}_{i=0}^{n-1} \in \mathbb{G_2^n}, \mathbf{1} \in \mathbb{F_r^n}, 1 \in \mathbb{G_t}) \\
CM_{m}(ck,m) = (\prod e(C_i,V_i), \mathbf{r}, \sum_{i=0}^{n-1} C_i^{r_i})
$$

Here as well, the prover is already computing the value $Z$ before calling $CM$ except the second commitment key is simply a vector of 1s. The security proof of why this is binding can be found in the paper.
With this commitment scheme, we also need to use the KZG opening proofs to prove the correct construction of the final $V$ key. 


## Groth16 Aggregation

This is all good but our original goal was to be able to aggregate Groth16 proofs. How can GIPA help us do that ?

To answer this question, we must first revisit a little bit the Groth16 verification procedure, don't worry, it's not more complicated than what you've been through until now !

### Groth16 Proof Verification 

A Groth proof is a triplet $(A \in \mathbb{G_1},B \in \mathbb{G_2}, C \in \mathbb{G_t})$ and the verification equation can actually fit in one line:
$$
e(A,B)= e(G^\alpha,H^\beta) \cdot e(\prod_{i} S_i^{a_i},H^\gamma)  \cdot e(C, H^{\delta })
$$

Let's define some of these terms:
* $G^\alpha$ and $H^\beta$ and $H^\delta$ come from the trusted setup. Note we only use the $\alpha$ from the same trusted setup the prover have been using. In our case, these come from the Filecoin power of taus ceremony transcript.
* $a_i$ are all the public inputs provided by the verifier.

### Groth16 Aggregated Verification

We can actually combine multiple verifications, from differents proofs represented as vectors $(\mathbf{A},\mathbf{B}, \mathbf{C})$  and different public inputs $\mathbf{a}$ into one. The way to do this is to make a **random linear combination** of each of the parts of the equation. The reason we must perform a random linear combination is to avoid the aggregator to find some combinations of proof that makes the verification pass while some of them are invalid. By randomizing the combination, probability to pass verification with invalid proofs becomes negligible. It is a common trick in cryptography.

Let's define $\mathbf{r} = (1,r,r^2,r^3,\dots,r^{n-1})$ a structured vector from a random $r$ element. The **randomized verification equation** is:
$$
\prod e(A_i,B_i^{r_i}) = e(G^{\alpha \sum_{i=0}^{n-1} r^i} ,H^\beta)\cdot e(\prod_i S_i^{ \sum_{j=0}^{n-1} a_{i,j}},H^\delta) \cdot e(\prod_i C_i^{r^i}, H^{\delta })
$$

The left part is clearly a random linear combination since each $A_i$ is combined with a $B_i$ scaled by the corresponding $r_i$
The left-most part of the right side is also a random linear combination. Let's look at a simple example. We would like to make a random linear combination of elements of the form $e(G^\alpha,H^\beta)$, we can do so via the vector $\mathbf{r}$ like this
$$
e(G^\alpha,H^\beta)^{r_0} * e(G^\alpha,H^\beta)^{r_1} = e(G,H)^{\alpha r_0 \beta} *e(G,H)^{\alpha r_1 \beta} \textrm{    (1)}\\= e(G,H)^{\alpha r_0 \beta + \alpha r_1 \beta} = e(G,H)^{\alpha (r_0 + r_1)\beta } \textrm{   (2)}= e(G^{\alpha \sum_i r_i},H^\beta)
$$
Two important remarks:
* We use the multiplicative notation because of the group in $\mathbb{G_t}$, so instead of doing $a + b$ we do $a * b$.
* We use the property $e(G^a,H^b) = e(G,H)^{ab}$ of the bilinear map at location $(1)$ and $(2)$ in both directions.

We leave the others parts as exercise to the reader to show they are linear combinations.

## Putting everything together

Finally we are able to put all the pieces together! As you can see there are similarities between what the Groth16 aggregated verification requires and what we've seen we can do with GIPA and TIPP.

Indeed, the prover can prove the value $Z = \prod e(A_i,B_i^{r_i})$ via TIPP using the vectors $\mathbf{A}$ and $\mathbf{B^r}$! 
Wait...where this $\mathbf{r}$ vector comes from ? Because we want this proof to be *non-interactive*, we can't ask the verifier to sample it. Instead, this $r$ is derived from the *commitments of the vectors* $\mathbf{A},\mathbf{B}$ and $\mathbf{C}$, using again the Fiat-Shamir heuristic. 
$$
r = Hash(CM_t(\mathbf{V_1},\mathbf{V_2},\mathbf{W_1},\mathbf{W_2},\mathbf{A},\mathbf{B}),CM_m(\mathbf{V_1},\mathbf{V_2},\mathbf{C})
$$
Note here the third component of the commitment scheme is excluded, since we only want to compute the commitment of the individual vectors, not to their product. See next section for understanding why.

### Rescaled commitment keys

$Z = \prod e(A_i,B_i^{r_i})$ is the third input to the commitment scheme. That means we should also input $\mathbf{B^r}$ as the input vector for TIPP right ? However that causes a problem here:  we can't define $\mathbf{B^r}$ without the commitment of $\mathbf{A}$ and $\mathbf{B}$ necessary to create $r$ and we can't use $\mathbf{B}$ if we use $\mathbf{B^r}$ as the third input...

The solution to that is to use a **rescaled commitment key** $\mathbf{W'} = \mathbf{W^{r^{-1}}}$. Thanks to the property of the commitment scheme, the $r$ component will cancel out. Here is one part of the commitment to show how it behaves:
$$
\prod e(A_i,V_i)e(B_i^{r_i},W_i^{r_i^{-1}}) = \prod e(A_i,V_i)e(B_i,W_i)^{r_ir_i^{-1}} = \prod e(A_i,V_i)e(B_i,W_i)
$$

This solves our problem: we can commit normally to $\mathbf{B}$ and then we use a rescaled commitment key $(\mathbf{w_1^{r^{-1}}},\mathbf{w_2^{r^{-1}}})$ in combination with the $\mathbf{B^r}$ vector in $Z$ for TIPP!

### Groth16 Aggregation Protocol

Let's show the whole prover protocol now:

1. Compute the commitments to $\mathbf{A}$ and $\mathbf{B}$ together using the commitment scheme of TIPP
    +  $(T_{AB}, U_{AB},\perp) = CM_t((\mathbf{V_1},\mathbf{V_2},\mathbf{W_1},\mathbf{W_2},1),\mathbf{A},\mathbf{B},\perp)$ 
2. Compute the commitments to $\mathbf{C}$ using the commitment scheme of MIPP
    + $(T_{C},U_{C},\perp) = CM_m((\mathbf{V_1},\mathbf{V_2},\perp),\mathbf{C},\mathbf{r},\perp)$
3. Derive $r = Hash(T_{AB},U_{AB},T_{C},U_{C})$ and then $\mathbf{r} = (1,r^2,\dots,r^{n-1})$
    * This steps enforce that $r$ is random and therefore the prover can not trick the linear combination.
4. Compute $\mathbf{B^r}$ and $\mathbf{W_1'} = \mathbf{W_1^{r^{-1}}}$ and $\mathbf{W_2'} = \mathbf{W_2^{r^{-1}}}$
5. Compute $Z_{AB} = \prod e(A_i,B_i^{r_i})$ as third input to TIPP
6. Compute $Z_{C} = \prod C_i^{r_i}$
    * Note here we don't need to rescale anything, since $r$ is part of input vectors of the commitment scheme of MIPP
8. Compute the TIPP proof $\pi_t$ with 
    * Inputs $\mathbf{A}$, $\mathbf{B^r}$ and $Z_{AB}$
    * Commitment keys $(\mathbf{V_1},\mathbf{V_2},\mathbf{W_1'},\mathbf{W_2'})$
9. Compute the MIPP proof $\pi_m$ with
    * Inputs $\mathbf{C}$, $\mathbf{r}$ and $Z_C$
    * Commitment keys $(\mathbf{V_1}, \mathbf{V_2})$
10. Output $\pi = (\pi_t, \pi_m, T_{AB},U_{AB}, T_{C},U_{C},Z_{AB}, Z_{C})$
    * The last two elements are required for verifying the Groth16 equation
    * The four previous ones are required for the verifier to derive $r$ 

### Groth16 Verification

The verifier protocol is straightforward:
1. Derive $r$ from $\pi$
2. Verify MIPP proof
3. Verify TIPP proof
4. Verify the Groth16 equation using $Z_{AB}$ and $Z_C$ as the linear combination of the proofs.

That's about it ! 

## Performance

We implemented the scheme in Rust, using our [Bellman fork](https://github.com/zkcrypto/bellman/) called [Bellperson](https://github.com/filecoin-project/bellperson). The implementation is derived from the implementation in [Arkworks](https://github.com/arkworks-rs/ripp/) by the authors of the original paper. All benchmarks were performed on a 64t/32cores with AMD Ryzen Threadripper CPUs. All proofs are Groth16 proofs with 350 public inputs, which is similar to the proofs posted by Filecoin miners.

**TLDR**: We can aggregate more than 8192 proofs in around 12s, aggregated proof take less than 40KB (versus 1.1MB with individual proofs) and can be verified in 48ms, this is including deserialization of the proof (around 20ms) ! We compared the verification time with batch verification of Groth16 (as defined in [zcash specs](https://zips.z.cash/protocol/protocol.pdf)) and aggregation becomes superior from 256 proofs.
![](https://i.imgur.com/4mBHUUj.png)
![](https://i.imgur.com/g2sWBth.png)
![](https://i.imgur.com/hcKPzrP.png)



### Trusted Setup

We created a condensed version of the SRS required for our protocol from the powers of tau transcript of both Zcash and Filecoin. The code to assemble the powers of tau is located in the [taupipp](https://github.com/nikkolasg/taupipp) implementation.  The  SRS  created  allows  to  aggregate  up  to  2^19 proofs.


### Optimizations

#### Multi-core

While this may sound simple, it is not always simple to use multi-threading when implementing cryptographic schemes, even more when there are some sequential steps involved. Even though there are big chunks of the computation that happens sequentially when described on paper, it turns out it is possible to parallelize most of it. For example, the verifier is supposed to perform this operation a logarithmic number of times: 
$$
C = C_{l}^x * C * C_{r}^{x^{-1}}
$$
but it can be computed in parallel and joined at the end. We also verify MIPP / TIPP in parallel with the Groth16 check.
This gave us **orders of magnitude faster verification.**

#### Merging TIPP and MIPP

As you can see, TIPP and MIPP are very similar except for the commitment scheme. Specifically, both $\mathbf{A}$ and $\mathbf{C}$ are committed with respect to the keys $\mathbf{v_1}$ and $\mathbf{v_2}$. Therefore, we can run **one GIPA loop for both TIPP and MIPP**. The crucial point here is to make sure the random challenge depends on both inputs from MIPP and TIPP. By re-using GIPA terminology, our random challenge at the $i$th iteration is now:
As you can see, TIPP and MIPP are very similar except for the commitment scheme. Specifically, both $\mathbf{A}$ and $\mathbf{C}$ are committed with respect to the keys $\mathbf{v_1}$ and $\mathbf{v_2}$. Therefore, we can run **one GIPA loop for both TIPP and MIPP**. The crucial point here is to make sure the random challenge depends on both inputs from MIPP and TIPP. By re-using GIPA terminology, our random challenge at the $i$th iteration is now:
$$
 x_i = Hash(TIPP(z_l,z_r,C_l,C_r),MIPP(z_l,z_r,C_l,C_r))
$$
The advantage is that it allows us to re-use the *same KZG opening proof* for both TIPP and MIPP. In other words the proof is shorter by 2 opening proof and saves 4 pairings checks for the verifier.
During our benchmarks, we observed a **gain of 20-30% percent in verification time**.

#### Compressing $\mathbb{G_t}$ elements

The proof contains mostly $\mathbb{G_t}$ elements, which are the largest elements, currently 288 bytes. We implemented compressions on those points using algorithms derived from Diego F. Aranha's [RELIC library](https://github.com/relic-toolkit/relic) which gives us a 50% size reduction. The cost of unserializing increases a bit but is negligible when verifiying the proof. You can find the specific implementation in this [branch](https://github.com/filecoin-project/blstrs/compare/feat-compression). This  led to a **40% reduction in proof size**. 

#### Compressing Pairing Checks

A pairing check is when one must compute two pairings and verify if they are equal:
$$
e(A,B) == e(C,D)
$$

However, a pairing is actually two algorithms run consecutively:
$$
e(A,B) = FinalExponentation(MillerLoop(A,B))
$$

The Miller loop returns a point on $\mathbb{F_{p^{12}}}$, and is able to do the
computation on any number of *pairs* of points at once. FinalExponentiation maps
the $\mathbb{F_{p^{12}}}$ point to the right subgroup called $G_t$. As it turns
out, **the most expensive operation is the final exponentation** because the
exponent is large. For the rest of the document, $FE$ represents the
FinalExponentiation and $ML$ the MillerLoop.

One easy way to reduce the computation required for a pairing check is to (1)
use the *negation* of one side and (2) perform the MillerLoop on both pairs of
points, then the FinalExponentiation on the result. We can easily then check if
the result is "one":

$$
e(A,B)\cdot e(-C,D) == e(A,B)\cdot e(C,D)^{-1} == FE(ML((A,B),(-C,D))) == 1
$$

This allows us to only perform one Miller loop and one FinalExponentation
instead of two.

We can actually generalize this trick to any number of pairing checks. Let's
suppose we have the following checks to do:
* $e(A,B) = e(C,D)$ which is equivalent to $e(A,B)e(-C,D) = 1$
* $e(E,F) = T$ for a given value $T \in \mathbb{G_t}$

We could write directly:
$$
e(A,B)e(-C,D)e(E,F) == 1 * T <=> FE(ML((A,B),(-C,D),(E,F))) == T
$$
We can see here that we do only one miller loop and one final exponentiation !
However, this would be **insecure** as the prover might be able to pick values $E$ and
$F£ such that $e(A,B)e(-C,D)e(E,F) == T$ where the individual values don't
satisfy the original equations we wanted to check !
The usual way to solve this problem, as in the Groth16 aggregation, is to use a
random linear combination ! We scale each pairing check by a random element $r$
chosen by the verifier, during verification time:
$$
e(A,B)e(-C,D)(e(E,F))^r == 1 * T^r  <=> e(A,B)e(-C,D)e(E^r,F) == T^r \\
FE(ML((A,B),(-C,D)) * ML(E^r,F)) == T^r
$$

You can see here we scale the second check by $r$: the point $E$ is scaled by
$r$ since it is much more efficient to do scalar multiplication in
$\mathbb{G_1}$ than in $\mathbb{G_t}$. As well we split into two MillerLoop
since it is not parallelizable so we prefer to run all these one in parallel and
perform the FinalExponentiation at the end.
Using such randomization, the attacker has a negligible probability of finding
points that satisfy $e(A,B)e(-C,D) == e(E,F)^r$ since he doesn't know $r$ in
advance - he never knows it, it's a locally generated random element by the
verifier. 

At the end of the verification routine, the **verifier only performs one
FinalExponentation, instead of 14**. We were able to significantly gain hundreds
of ms thanks to these optimizations. You can find the general logic in the
`PairingCheck` [struct](https://github.com/filecoin-project/bellperson/blob/feat-aggregation/src/groth16/aggregate/accumulator.rs).

One important consideration here is to note that we need the randomness of the
verifier to be sampled locally, and to be unpredictable in the sense the prover
should not be able to guess what values the verifier is gonna use to aggregate
the checks. In the implementation, verifier samples from `/dev/urandom`. 

## Conclusion

We have now seen how can we prove an inner product in an efficient manner, and how this is used to aggregate Groth16 proofs. Our implementation is efficient and is being implemented in Filecoin (FIP 13 is [opened](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md)!). If you're interested in learning more, have insightful comments, or are  interested in learning more about what we do at Protocol Labs research, check out our [CryptoNetLab page](/groups/cryptonetlab), join the discussion in our [GitHub forum](https://github.com/protocol/CryptoNetLab/discussions) or reach out via [email](mailto:research@protocol.ai").


## Acknowledgements

Thank you to Marry Maller, Benedikt Bunz, Pratyush Mishra and Noah Vesely for insightful discussion and helping us understand their scheme.  Thank you to Anca & Porcuquine whose insightful comments improved this post. Thank you dignifiedquire, whose help on the Rust implementation has led to substantial gains and new Rust knowledge for myself.

