---
# Blog post title
title: "ConsensusLab: supercharging our consensus research"

# Website post date
# format YYYY-MM-DD
date: 2021-07-30

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - jorge-soares
  - marko-vukolic
  - sarah-azouvi

# If applicable
categories:
  - news

# If applicable
tags:


# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Not used
draft: false


---

We are excited to announce the launch of [ConsensusLab](/groups/consensuslab/), a new research group focused on scalable consensus for decentralised systems and a part of Protocol Labs Research.

Consensus — loosely defined as global agreement on the state of a decentralised network across its mutually untrusting participants — has been known to be at the heart of decentralised systems ever since the inception of [Nakamoto’s Proof-of-Work (PoW) consensus](https://bitcoin.org/bitcoin.pdf). At the same time, the scalability of consensus has been the Achilles' heel of decentralised systems, all this despite it being a very active area of research.

Intuitively, scaling consensus is challenging as it inherently brings a number of tradeoffs to a decentralised system, revolving around its performance, its security, and its very level of decentralisation.

We see a number of fragmented R&D efforts aiming at scaling a given blockchain network X to have better performance than another blockchain network Y, usually targeting the range of  10s to 100s of thousands of transactions per second. These targets, which appear ambitious in the light of the performance of PoW-based blockchains and are sometimes motivated by the throughput of payment processors like Visa, have little meaning without context on the security provided by the system or the implications on its level of (de)centralisation.

Yet even such target performance numbers can be seen as modest, rather than ambitious. Suppose that, instead of building a decentralised Visa, we instead aim at bringing traditional web workloads (Web2) to the decentralised web (Web3). In this scenario, we should be designing for billions of transactions per second, large volumes of data, complex workloads and applications, not to mention keeping an eye on the latency in addition to throughput. And we should be doing all of this while maximising decentralisation and security.

**Enter ConsensusLab.**


## Our vision

ConsensusLab’s vision is to be the go-to place for scalable decentralised consensus research. In the true spirit of Protocol Labs Research, we aim to become a hub for the collaborative advancement of human knowledge on this challenging topic. Together with a wide network of academic and industry partners, and in collaboration with other open projects, our **Research Scientists** and **Research Engineers** ([we’re hiring!](https://jobs.lever.co/protocol?team=Research%20Development)) will be building an engine for the decentralised web.


## Problems of interest

The work areas and problems of interest for ConsensusLab are driven and practically defined by its motivating use case: being the driving engine behind Web3. These led us to identify three vertical pillars of ConsensusLab research: **scaling by sharding, scaling consensus proper, and scalable execution**. These are supported by research considerations that are pervasive in all of our work: **security, decentralisation, and correctness of design and implementation**.


### Work Area 1: Sharding

Assuming a future Web3 handling Web2-sized workloads, one cannot rely on a single blockchain network to “rule them all”, much like today’s web workloads are not executed on any single centralised machine.

This immediately brings sharding to the picture, i.e. the horizontal scaling of decentralised systems. At ConsensusLab, we work at the intersection of classical distributed computing and database problems related to concurrency — such as cross-shard transaction semantics and shard state management — and Web3-specific security challenges.

Sharding challenges are complemented by low-level interoperability challenges among consensus protocols of different families. Not precluding alternative designs, we envision a world of hierarchical shards in which shards at a “higher” level leverage consensus protocols with stronger security and possibly weaker performance than shards on a “lower” level.  


### Work Area 2: Consensus proper

In this work area, we focus on consensus protocols within a single shard. In a possible hierarchical approach, different consensus protocols will be applicable to different shards and use cases.

We aim at identifying the “best” consensus protocol within a given security and scalability context, applicable to a single shard. Different consensus protocols may be relevant, targeting distinct sybil attack protection mechanisms, participating population size, performance, and security guarantees.

We pay particular attention to the tradeoffs between ease of design, maintainability, and system guarantees.


### Work Area 3: Parallel execution

Advances in scaling through sharding and scaling consensus are insufficient without considering the scalability of application execution. Existing blockchain systems largely follow, within a single shard, a classical order-execute architecture in which sequential execution of applications (e.g. smart contracts or payment scripts) follows prior ordering of transactions. This introduces severe performance bottlenecks, which have been the target of decades of research in databases, multi-core processors, and distributed systems.

We revisit the parallel execution problem through the prism of existing decentralised applications (based on dedicated smart-contract VMs) but also aim at accommodating larger-scale general-purpose scale computations, including federated machine learning workloads or computations over large data (perhaps stored on IPFS!).

We also explore alternative application programming models which support better efficiency of parallel execution (e.g. CRDTs).


## Impact on Filecoin

Beyond cutting edge research, our goal at ConsensusLab is to deliver practical impact to the Filecoin network and the larger Web3 ecosystem. We seek to transform the outcomes of our research into tangible impact on real-world systems. Our natural focal point is the Filecoin network, which will be the first beneficiary of our novel scalable consensus architecture.

The Filecoin-IPFS-IPLD-libp2p-drand ecosystem, which includes modular building blocks for Web3, is the perfect home for ConsensusLab and will enable us to deliver the greatest impact. We couldn’t be more excited to embark on this journey! If you are too, [get in touch with us](mailto:research@protocol.ai), have a look at our [open roles](https://jobs.lever.co/protocol?team=Research%20Development), and stay tuned for more information on the upcoming **ConsensusDay 21** workshop.
