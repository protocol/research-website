---
# Blog post title
title: The road to Lurk

# Website post date
# format YYYY-MM-DD
date: 2023-03-24

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - chhimed-kunzang

# If applicable
categories:
  -

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Not used
draft: false

summary: "Today is my last day at Protocol Labs, after which I am moving on to be the CTO of [Lurk Lab](https://lurk-lab.com/). The last five years have gone by in the blink of an eye. As is common in transition, I find myself reflecting on how the past became the present and on the future to come. This post is a whirlwind summary of some of the highlights of my research/development work at Protocol Labs."

---

# <font color=purple>(begin</font>


In early 2018, I joined the Filecoin team at Protocol Labs as a contractor. I was fascinated by the promise of
decentralized storage and the possibility of consensus based on storage power. I eagerly devoured the [Filecoin
whitepaper](/publications/filecoin-a-decentralized-storage-network/) and puzzled over how the proofs were supposed to
*actually work*. Sufficiently persistent enthusiasm paid off, and I ended up joining Protocol Labs full-time to lead the
Filecoin Proofs implementation.

Today is my last day at Protocol Labs, after which I am moving on to be the CTO of [Lurk Lab](https://lurk-lab.com/).
The last five years have gone by in the blink of an eye. As is common in transition, I find myself reflecting on how the
past became the present and on the future to come. This post is a whirlwind summary of some of the highlights of my
research/development work at Protocol Labs. Because this has been a period of intense and fruitful focus, a narrative
thread also emerges.

This post is several things:
- <font color=teal>A retrospective tour of some things I worked on while at PL, providing some insight into how the sausage is made.</font>
- <font color=#E69500>A summary of the latest state of the VDF project and a first look at some related research outputs.</font>
- <font color=purple>The (eponymous) road to Lurk.</font>

## <font color=teal>Filecoin</font>

<font color=teal>

Much has been written about Filecoin and the [Filecoin Proofs](https://github.com/filecoin-project/rust-fil-proofs). Here are a few notes about lesser corners of the work that went into arriving where we did.

- One of the earliest abstractions we adopted was embodied in the [`CompoundProof` trait](https://github.com/filecoin-project/rust-fil-proofs/blob/963eb08e55b9700657d8533418bf6332ac77d197/storage-proofs-core/src/compound_proof.rs). I am both proud and horrified that I broke ground on what would become a central part of our proofs implementation while simultaneously learning Rust and the underlying cryptography: research development at its ~~finest~~ fastest. More seriously, though, `CompoundProof` formalized a relationship between 'vanilla' proofs and their zk-SNARK counterparts, initializing a <font color=purple>thread of investigation eventually leading to Lurk</font>.
- On the way to mainnet, we needed a way to model the many parameters associated with the network and especially candidate proof constructions. Hence was born [Orient](https://github.com/filecoin-project/orient) (<font color=purple>a relational language for expressing systems of bi-directional arithmetic constraints, implemented in Common Lisp</font>).
- From this, we built the Filecoin [Ubercalc](https://github.com/filecoin-project/orient/blob/master/ubercalc/ubercalc.org). Though crude, it proved powerful and flexible enough to interactively model the characteristics of proposed candidates and their parameterizations in order to make difficult time-critical decisions about what we could deploy on time, with acceptable performance, and without sacrificing network security.
- One thing that became clear in the Ubercalc analyses was that none of our then-current candidate hashes struck the right balance of performance inside and outside arithmetic circuits. Whereas several years earlier, we had ruled out [Poseidon](https://www.poseidon-hash.info/) as being 'too new', we decided making <font color=purple>a (hedged) bet on SNARK-friendly hashing</font> was our best option. To that end, I created [Neptune](https://github.com/filecoin-project/neptune), one of the first production implementations of Poseidon, and as far as I know, the first to tackle the [sparse matrix optimizations](https://github.com/lurk-lab/neptune/pull/4) enabling best non-circuit performance for higher arity hashes.
  - Because we needed to build Merkle trees as fast as possible, that included a GPU implementation ([Triton](https://github.com/filecoin-project/neptune-triton)).
    - Don't get me wrong, the initial GPU implementation was nowhere near as performant as possible -- though [Supranational](https://www.supranational.net/) has more recently done tremendous work to squeeze out the best performance. Rather, it was 'fast to build' for someone who didn't know GPU programming. I used [Futhark](https://futhark-lang.org/) -- a purely-functional GPU programming language ([Retrospective on an implementation of the Poseidon hash function in Futhark](https://futhark-lang.org/blog/2020-09-27-poseidon-retrospective.html)).
    - Sometimes research engineering demands a dose of self-medicated rabbit-holing, and the requisite implementation of [Finite Fields for Futhark](https://github.com/filecoin-project/fut-ff) helped me through those dark days.
- Along the way, a number of long-running [SNARK engineering research](https://github.com/filecoin-project/research/blob/master/SNARK/SNARK.md) projects allowed us to scout optimal paths,
- In the end, we managed to launch in 2020 with what soon became the largest and most performant SNARK deployment ever (at least at the time we published [zk-SNARKs for the world!](/sites/snarks/)).
</font>

## <font color=teal>VDF</font>

<font color=teal>
After mainnet launch, I transitioned away from maintenance of the Filecoin proofs to focus on accelerating usability of
verifiable delay functions. There were several potential use cases for VDFs in Filecoin, and my aim was to help make a
viable implementation available to such downstream applications. As long as it remained a 'someday' technology,
practical research and development could not assume it.

<font color=purple>As importantly, in targeting this project as a means to drive SNARK research, I identified VDFs as an
optimal test case for recursive SNARK technology generally. The extreme simplicity of an iterative algorithm like a VDF
would allow us to push proving system design and implementation forward as rapidly as possible -- if only by providing
demand and supporting early adoption. By focusing on an almost trivial computational problem, we incidentally ensured
that success in proving would accrue almost entirely to the underlying proving system.

At the same time, this focus on ultimate simplicity in the circuit to be proved exerted a profound influence on the
work (see below) which would become Lurk.</font>
</font>

### <font color=teal>Computational VDF</font>

<font color=teal>
The dominant approach to VDFs involves functions that are slow to compute but fast to verify for computational reasons.

- To that end, in November 2021, I organized a collaboration to build a [Practical SNARK-based VDF](https://zkproof.org/2021/11/24/practical-snark-based-vdf/).
- I built and maintained an initial [VDF prototype](https://github.com/protocol/vdf), allowing iteration on the design and coordination between the hardware, algorithmic, and proof design -- including [explorations of optimal parallelism for min-root](https://github.com/protocol/vdf/blob/3534a193a662203b5c487fe81560057ecfd9632c/src/lib.rs#L15-L23) informing the eventual evaluator ASIC design (see below).
  - In [Open VDF: Accelerating the Nova SNARK-based VDF](https://medium.com/supranational/open-vdf-accelerating-the-nova-snark-based-vdf-2d00737029bd), [Supranational](https://www.supranational.net/) writes:
    <font color=#E69500>
    > 'Approximately one year ago, we [announced a collaboration](https://zkproof.org/2021/11/24/practical-snark-based-vdf/) with the Ethereum Foundation, Filecoin Foundation, Supranational, Microsoft, and the Electric Coin Company to improve the performance of SNARKs, and to make SNARK-based [Verifiable Delay Functions](https://eprint.iacr.org/2018/601.pdf) (VDFs) practical. VDFs have the potential to improve the security, privacy, and scalability of blockchain platforms and are being evaluated by a number of blockchain platforms, including Ethereum, Filecoin, Tezos, and Zcash. Over the past year, we have collectively made a huge amount of progress towards that goal, including an [ASIC implementation](https://github.com/supranational/minroot_hardware) of the [MinRoot algorithm](https://eprint.iacr.org/2022/1626.pdf), <font color=purple>implementation of a [recursion-enabled proof system](https://github.com/microsoft/Nova) (Nova), and [support for GPU accelerated proof generation](https://github.com/microsoft/Nova/commit/8308c29f948f7a44bb145485920a28bc2cd6755b). While we have laid the groundwork to make SNARK-based VDFs practical, these developments will have much wider-ranging implications. For instance, through the development of a performance approach to [incrementally verifiable computation](https://iacr.org/archive/tcc2008/49480001/49480001.pdf), we have made practical novel and powerful use cases such as true zero-knowledge VMs like [Lurk](https://lurk-lang.org/).</font>
    >
    > Furthermore, in addition to these SW developments, earlier this year we received initial prototypes of the MinRoot ASIC design, manufactured on 12 nm technology. Over the coming months, we will integrate the MinRoot ASIC with the Nova proof system and produce an end-to-end implementation of SNARK-based VDFs. Once this is complete, we will be sharing this implementation with the community and are excited to see how this new cryptographic primitive can improve the security and scalability of blockchain networks.'
    </font>

</font>

### <font color=teal>Fundamental Latency VDF</font>

<font color=teal>

Although computational VDFs are marvelous, they suffer one significant problem. Their performance on the key metric of
VDFs ($A_{max}$) depends on engineering attempts to implement an evaluator which is as fast as possible. This fails to
whatever extent an attacker can accelerate the computation. In practice, this means computational VDFs with an $A_{max}$
very close to 1 are not realistic.

What this means is that a single VDF computation cannot be used as fine-grained timer for applications that require
high assurance that no attacker can obtain the result with less delay than an honest party. Some of the motivating
Filecoin applications required this property in order to satisfy their economic requirements (essentially the $A_{max}$
acted as a cost multiplier).

In the spirit of stimulating the otherwise impossible (it was part of a post-mainnet vibe that possessed me), it
occurred to me that communication latency *does* indeed allow for uncheatable minimum times (with the speed of light
famously providing a universal speed limit).

- I wrote up my initial, partially-baked thoughts in a starry-eyed document titled [SpaceVDF](https://docs.google.com/document/d/1hfbCxjGzJ12UtroZvC4ED9TZHLyQWimT-cFFZ0zHkSk/edit#heading=h.1mcarb88lx1h).
- The ideas were promising enough that I followed up with [Cryptosat](https://www.cryptosat.io/), and after some discussion, we comissioned a system-level trade study.
- <font color=#E69500>I'm excited to announce publication of the [SpaceVDF White Paper](/publications/spacevdf-verifiable-delay-functions-using-cryptographic-satellites/).
  >'In this document we aim to evaluate how VDF algorithms based on physical limits can be implemented in satellites
  and which physical properties / or roles of physics we can utilize to guarantee the passage of time. The goal of
  this study is to perform principal system analysis, identify main issues and risks, propose a path for derisking and
  come up with a budget and timeline for a suitable satellite (or satellite constellation).'
  </font>
- Just as my seed ideas were only suggestive of the actual engineering that would be required for any real-world deployment of a SpaceVDF, the cryptographic constructs imagined were also vague and incomplete. To that end, I connected with [Bernardo David](https://www.bmdavid.com/), who agreed the core ideas were interesting enough to develop further.
- <font color=#E69500>We sponsored Bernardo and his co-authors to put meat on the bone, and the result has just been released as an eprint: [CaSCaDE: (Time-Based) Cryptography from Space Communications DElay](https://eprint.iacr.org/2023/405)
  >'In this work, we investigate how to construct time-based cryptographic primitives from communication delay, which
has a known lower bound given the physical distance between devices: the speed of light. In order to obtain high delays,
we explore the sequential communication delay that arises when sending a message through a constellation of satellites.
This has the advantage that distances between protocol participants are guaranteed as positions of satellites are
observable, so delay lower bounds can be easily computed. At the same time, building cryptographic primitives for this
setting is challenging due to the constrained resources of satellites and possible corruptions of parties within the
constellation.

  > We address these challenges by constructing efficient proofs of sequential communication delay to
convince a verifier that a message has accrued delay by traversing a path among satellites. As part of this
construction, we propose the first ordered multisignature scheme with security under a version of the the discrete
logarithm assumption, which enjoys constant-size signatures and, modulo preprocessing, computational complexity
independent of the number of signers. Building on our proofs of sequential communication delay, we show new
constructions of Publicly Verifiable TLPs and VDFs whose delay guarantees are rooted on physical communication delay
lower bounds. Our protocols as well as the ordered multisignature are analysed in the Universal Composability framework
using novel models for sequential communication delays and (ordered) multisignatures. A direct application of our
results is a randomness beacon that only accesses expensive communication resources in case of cheating.'
  </font>

</font>

## <font color=teal>Lurk</font>

<font color=teal>

Of the potential applications in which VDFs might play a critical role, one of the most interesting was Hierarchical Consensus (which has since been re-branded[^1] as [Interplanetary Consensus](https://ipc.space/)). However, following a worrisome trend, the more I pondered it, the less obvious it became that the application would be straightforward. Whereas the VDF (see above) represented the simplest possible proof statement, it seemed more elaborate statements would need to be proved in order to serve the needs of substantial applications like hierarchical consensus.

I wrote [Hierarchical Consensus with VDFs and/or Turing-Complete SNARKs](https://notion.so/lurk-lab/Hierarchical-Consensus-with-VDFs-and-or-Turing-Complete-SNARKs-f8f674118c024e1197dd99682ec4dab6) before Chat GPT came along, so the concept of LLM hallucination was not yet widespread. Nevertheless, it would not be too far off to view this document and the prompt that is its epigraph to be a fever dream. Please note that it was written in mid-2021 and predated current work on IPC, so nothing about that project should be inferred from its first-principle extrapolations. </font><font color=purple>As it turns out, the Turing-Complete SNARKs part may indeed provide high value to IPC (or a system like it), even if the VDFs prove dispensable.

Gripped by further self-medication of research development fever, I saw fit to focus on what seemed another missing piece to be forced into existence ahead of its time, leading to the [MetaProof](https://notion.so/lurk-lab/MetaProof-0596cab81ccd457ebf475d62222420a5?pvs=4) project -- described as follows:

>'The first step of the MetaProof project follows the shortest path to Turing complete SNARKs via recursive computation. We design a minimal Lisp-family language using SNARK-friendly hashing for memory access — and implement an arithmetic circuit proving one reduction step of this language's expression evaluator. Combined with any IVC-like construction (including SnarkPack + input aggregation), this will allow succinct proofs of arbitrary computation from a single circuit. In addition to the operational benefits of avoiding the research/development lifecycle associated with new circuits (potentially including trusted setup), this will allow entirely new categories of computations to be proved.'

One thing led to another, and [Lurk](https://github.com/lurk-lab/lurk-rs) was born.

In house style, implementation led articulation, but now we have an articulate explanation as well: [LURK: Lambda, the Ultimate Recursive Knowledge](/publications/lurk-lambda-the-ultimate-recursive-knowledge/).


>'We introduce Lurk, a new LISP-based programming language for zk-SNARKs. Traditional approaches to programming over zero-knowledge proofs require compiling the desired computation into a flat circuit, imposing serious constraints on the size and complexity of computations that can be achieved in practice. Lurk programs are instead provided as data to the universal Lurk interpreter circuit, allowing the resulting language to be Turing-complete without compromising the size of the resulting proof artifacts. Our work describes the design and theory behind Lurk, along with detailing how its implementation of content addressing can be used to sidestep many of the usual concerns of programming zero-knowledge proofs.
'

And that brings us up to the edge of the present.

[Lurk Lab](https://lurk-lab.com/) calls.

PL has partnered with Lurk Lab to bring general-purpose zero-knowledge proofs to Filecoin, and is our largest investor.

Here's a brief (if imperfect) [Lurk demo](https://www.youtube.com/watch?v=RpCIIiauUP4).

{{< youtube RpCIIiauUP4 >}}
<br>

This post focused mostly on the intertwined narratives of 'my time at PL' and 'how Lurk came to be'. Frequently, the accomplishments I cite as 'mine' were the result of collaboration. Astute readers will detect that some recurring stylistic mishaps cannot be blamed on others, however.
</font>

# <font color=teal>) 'And death i think is [no parenthesis](https://dailypoetry.me/e-e-cummings/since-feeling-is-first/)'</font>

<font color=teal>
-- Chhi'mèd Künzang, 24 March 2023
</font>

[^1]: Technically, "brought into the light of the solar system," per [@jsoares](/authors/jorge-soares/).
