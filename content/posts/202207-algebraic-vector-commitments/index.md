---
# Blog post title
title: "On algebraic vector commitments"

# Website post date
# format YYYY-MM-DD
date: 2022-07-05

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - rosario-gennaro

# If applicable
categories:
  - blog

# If applicable
tags:


# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

# Not used
draft: false

---

In this post, we discuss a recent result from [Cryptonet](/groups/cryptonetlab/) about the impossibility of succinct vector commitments in groups of known prime order.

<!--more-->

Paper: [Catalano, D., Fiore, D., Gennaro, R. and Giunta, E., 2022. On the Impossibility of Algebraic Vector Commitments in Pairing-Free Groups. Cryptology ePrint Archive.](/publications/on-the-impossibility-of-algebraic-vector-commitments-in-pairing-free-groups/)

A *[Vector Commitment (VC)](https://eprint.iacr.org/2011/495)* is a commitment scheme to a vector of $n$ elements, such that the following two properties are satisfied:
- *Position Binding*: Given a commitment $C$ to a vector $V=[v_1 \ldots v_n]$ there is only one way to open the element $v_i$ for each $i=1\ldots n$
- *Succinctness*: The size of the commitment and of the opening are "small" (in the original definition, this was intended strictly as constant, but $O(\log n)$ is also acceptable)

Note that secrecy of the elements is not required (i.e. information about $v_i$ can be revealed by the commitment string and the openings of $v_j$ for $j \neq i$), though it can be formalized as an additional requirement.

A recent paper co-authored by CryptoNet member [Rosario Gennaro](/authors/rosario-gennaro/) together with CryptoNet advisors [Dario Catalano](https://catalano.dmi.unict.it/) and [Dario Fiore](https://www.dariofiore.it/) and their student Emanuele Giunta, was prompted by the following question: all known vector commitments (VC) that use algebraic structures are based on pairings, groups of unknown order, or lattices; what we don't have are *algebraic* VCs based on one of the simplest structures that cryptographers use: prime-order groups without pairings.

In such groups, we can build generic Merkle Trees using a collision-resistant hash function based on discrete logarithms, but then we need to use non-algebraic operations to map the output of each layer of the MT back into the input of the next layer. Similarly, we can use a generalized Pedersen commitment to obtain a succinct commitment string: the opening is linear in $n$ but one can use Bulletproof arguments to reduce the opening to $O(\log n)$. Here too, however, there are non-algebraic computations in the opening step, due to the use of the random oracle to make the [Bulletproof](https://eprint.iacr.org/2017/1066) argument non-interactive.

Apart from the theoretical curiosity as to why purely algebraic VCs are not known in these groups, there is a practical motivation: all known constant-size VCs are algebraic and it would be very desirable to build a constant-size VC on such simple groups.

Unfortunately, as shown in the paper, this is, in some sense, impossible. The paper proves that, in pairing-free groups of known order, it is impossible to construct vector commitments that make black-box use of the group and are both position-binding and succinct. More precisely, such VCs would require that $|C| * |opn|=\Omega(n)$ (where $opn$ is the opening string — this matches a 2-dimensional [construction](http://www0.cs.ucl.ac.uk/staff/J.Groth/MinimalShuffle.pdf) that uses generalized Pedersen’s commitments with commitment and opening size $O(\sqrt n)$)

The proof of this result starts from the observation that VCs seem intuitively related to signature schemes: the idea being that by committing to $n$ random elements (this would be the public key of the signature scheme), one can consider the opening of $v_i$ as a signature for message $i$. This intuition is true if the VC has the secrecy property we referred to earlier, as the public key and the signatures of message $j\neq i$ does not help in producing the signature of message $i$. But what about generic VCs that do not guarantee secrecy? In this case, the proof uses the succinctness of the VC to prove that the above signature scheme has some basic unforgeability property. At this point, the paper extends some [recent results](https://eprint.iacr.org/2021/738) on the impossibility of algebraic signature schemes in groups of known order to achieve the desired lower bound.
