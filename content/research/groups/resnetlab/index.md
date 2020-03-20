---
title: ResNetLab
date: 2019-09-02T14:20:06+01:00

type: research_groups
taxonomyName: resnetlab
summary: "The mission of the Resilient Networks Lab is to build resilient distributed systems, by creating and operating a platform where researchers can collaborate openly and asynchronously on deep technical work."
---

<center>{{< figure src="resnetlab_logo_blue.svg" width="250px" >}}</center>

A resilient system or network is fundamentally uncompromised by an isolated failure or network split. The system is malleable, adaptable to different conditions and capable of evolving to meet new requirements over time. That said, resilience here identifies also as a characteristic against changing system or network conditions, i.e., the system's core operating principles adjust so that *performance* remains when the system scales up to serve increasing demand from more users. Building resilience into foundational infrastructure is the key in building a computing and networking fabric for human knowledge.

## Mission & Vision

The mission of the Resilient Networks Lab is to build resilient distributed systems, by creating and operating a platform where researchers can collaborate openly and asynchronously on deep technical work.

## Motivation & Description

The lab's genesis comes from a need present in the IPFS and libp2p projects to amp their research efforts to tackle the critical challenges of scaling up networks to planet scale and beyond. The Lab is designed to take ownership of the earlier stages on the research pipeline, from ideas to specs and to code.

![](/images/resnetlab/research-pipeline-map.png)


## Research Endeavours

* [Preserve users' privacy when providing and fetching content](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/PRESERVE_USER_PRIVACY.md): How to ensure that the user's of the IPFS network can collect and provide information while mainting their full anonymity.
* [Mutable data (naming, real-time, guarantees)](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/MUTABLE_DATA.md): Enabling a multitude of different patterns of interactions between users, machines and both. In other words, what are the essential primitives that must be provided for dynamic applications to exist, what are the guarantees they require (consistency, availability, persistence, authenticity, etc) from the underlying layer in order create powerful and complete applications in the Distributed Web.
* [Human-readable naming](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/HUMAN_READABLE_NAMING.md): You can only have two of three properties for a name: human-meaningful, secure, decentralized. This is Zooko's Trilemma. Can we have all 3, or even more? Can context related to some data help solve this problem?
* [Enhanced bitswap/graphsync with more network smarts](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/ENHANCED_BITSWAP_GRAPHSYNC.md): Bitswap is a simple protocol and it generally works. However, we feel that its performance can be substantially improved. One of the main factors that hold performance back is the fact that a node cannot request a subgraph of the DAG and results in many round-trips in order to “walk down” the DAG. The current operation of bitswap is also very often linked to duplicate transmission and receipt of content which overloads both the end nodes and the network.
* [Routing at scale (1M, 10M, 100M, 1B.. nodes)](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md): Content-addressable networks face the challenge of routing scalability, as the amount of addressable elements in the network rises by several orders of magnitude compared to the host-addressable Internet of today.
* [PubSub at scale (1M, 10M, 100M, 1B.. nodes)](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/PUBSUB_AT_SCALE.md): As the IPFS system is evolving and growing, communicating new entries to the IPNS is becoming an issue due to the increased network and node load requirements. The expected growth of the system to multiple millions of nodes is going to create significant performance issues, which might render the system unusable. Despite the significant amount of related literature on the topic of pub/sub, very few systems have been tested to that level of scalability, while those that have been are mostly cloud-based, managed and structured infrastructures.
* [Improved layouts to represent data in hash-linked graphs (using IPLD)](https://github.com/ipfs/notes/pull/394): Future™


## Team

- [David Dias](http://daviddias.me)
- [Yiannis Psaras](https://www.ee.ucl.ac.uk/~uceeips)
