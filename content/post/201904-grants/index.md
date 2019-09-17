---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Announcing Protocol Labs Grants"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2019-04-16T01:15:02+01:00
lastmod: 2019-04-16T01:15:02+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Last year, we announced the launch of our [grant program](https://protocol.ai/blog/ann-research-rfp/) through which we fund cutting-edge research endeavors relevant to our mission.  The first few Requests for Proposals (RFPs) focused on problems we discovered and formulated while designing and building Filecoin and IPFS.  

In two months, we received eleven strong proposals in response to our five RFPs, as well as multiple additional proposals addressing other exciting research problems.   Although there were many ambitious and promising directions proposed, we had to prioritize the works most strongly aligned with our project objectives and applied rigorous evaluation criteria.

We chose to award five grants to proposals addressing our RFPs in mid 2018 with a total amount in excess of $300,000:

- **Prof. Claudio Orlandi, Dr. Chaya Ganesh, and Prof.  Ivan Damgard**  
 For their prior and continuing work on Proofs-of-Replication.

- **Prof. Giuseppe Ateniese, Dr. Mohammad Etemad, and Prof. Qiang Tang**  
 A Proof-of-Spacetime requires a prover P to convince a verifier V that certain outsourced data are not only properly stored/replicated but also stored for a given number of time slots. Trivial solutions that require P and V to periodically execute a proof-of-storage protocol cause large communication overhead, whereas sequentially producing all the verifier challenges from a seed (to reduce the number of proof-of-storage protocol invocations) may be vulnerable to prover pre-computation and/or prover outsourcing attacks. To address the above challenges, we will leverage recently proposed proof-of-delay functions, probabilistic proof checking, and algebraic properties to aggregate the proofs such that the verifier can be convinced that the data is indeed properly stored at the end of each time slot and the total proof size will still be sublinear in the number of time slots.

- **Prof. Dario Fiore and Dr. Matteo Campanelli**  
 Proofs-of-Spacetime (PoSt) allow a user to show she has been storing a file for a certain amount of time. They are an important building block of the FileCoin protocol. Current constructions for PoST are based on the following paradigm: iterate a Proof-of-Replication (PoRep) and prove that all the repetitions  are correct through a SNARK system. Unfortunately, applying even a state-of-the-art general purpose SNARK would result in PoST with impractical performances on the prover’s side.  Our project aims to obtain fast PoSTs by developing new SNARKs that are especially tailored to Proofs-of-Replication and their iteration. This methodology is part of a larger project that aims to build a framework for “composable proofs” where SNARKs tailored to specific computations can be linked efficiently through a Commit & Prove methodology.

- **Ethan Cecchetti, Dr. Ian Miers, and Prof. Ari Juels, in collaboration with Ben Fisch**  
 We propose to construct efficient, provably secure PoReps by combining Depth-Robust Graphs (DRGs) with Butterfly Hourglass Functions (BHFs) (and other graphs in a more general class). DRGs are DAGs that contain a long path even when a fraction of nodes is removed. BHFs are DAG-based file transformations that achieve a goal similar to PoReps: They ensure that an economically rational adversary will store only an encoded file (e.g., one encrypted using a key managed by the adversary) rather than an unencoded version. BHFs have two important properties: every output depends upon every input and recomputation of outputs cannot be significantly accelerated by storing distinguished points. They do not provide security, however, against an adversary with arbitrary parallelism in block retrievals. Our key observation is that, by combining the two types of graphs in a multilayered construction, it is possible to obtain a file encoding that has zero file expansion and that requires an adversarial file holder to perform a long sequential computation to reconstruct an encoded file blocks it has failed to store. By generalizing the described construction, our intention is to provide the community with a family of practical, easy-to-implement cryptographic primitives that can be used in PoRePs and other applications.

- **Dr. Victor Grishchenko, Oleg Lebedev, Yuri Syrovetskiy and Nikita Prokopov**  
 CRDT is a data replication/synchronization technology that needs no central "master" replica. As such, it is often considered an essential building block for distributed/decentralized systems. While the core principles of CRDT are clear, there is certainly a gap between theory and practice. Our research addresses the gap by focusing on the following topics: 1. log-structured (aka operational) CRDTs that can "switch gears" between op-based, patch-based, and state-based modes of operation (corresponding to real-time sync, periodic sync and full reconciliation); 2. minimizing metadata overhead by employing chain structures, achieving an effect similar to the block-based approach but retaining a simple core model; 3. a formal ACID 2.0 (associative, commutative, idempotent, distributed) framework to mix different RDTs in the same environment; 4. unifying Causal and Merkle structures (CRDTs and a common blockchain primitive). That work is divided into three layers: an op-based formal data model and protocol (Replicated Object Notation), replicated data types (RDTs) based on the RON model, and, on top of that, the (database) replication part. For each of the layers, we provide a formal specification, algorithms with pragmatic complexity bounds, and a reference implementation. Overall, the aim of our work is to make CRDTs a simple universal instrument within the reach of every developer.

Congratulations to the grantees!  We are really excited to support and collaborate with our grantees. We hope that you are also excited by the results their work will generate, which will be fully open-source.

We extend our most sincere gratitude to all applicants. All interested individuals can follow our active research efforts in [IPFS](https://github.com/ipfs/research), [Filecoin](https://github.com/filecoin-project/research) ([update](https://filecoin.io/blog/update-2018-q3-q4/#4-filecoin-research-update)), and [PL generally](https://github.com/protocol/research). We look forward to your future proposals and contributions.

Current RFPs can be found at https://github.com/protocol/research-RFPs.
