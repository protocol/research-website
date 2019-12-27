---
title: ResNetLab
date: 2019-09-02T14:20:06+01:00

type: research-groups
taxonomyName: resnetlab

resources:
  - src: icon.jpg
---

A resilient system or network is fundamentally uncompromised by an isolated failure or network split. The system is malleable, adaptable to different conditions and capable of evolving to meet new requirements over time. That said, resilience here identifies also as a characteristic against changing system or network conditions, i.e., the system's core operating principles adjust so that *performance* remains when the system scales up to serve increasing demand from more users. Building resilience into foundational infrastructure is the key in building a computing and networking fabric for human knowledge.

<!--more-->

## Mission & Vision

<br/>
<p align="center">
  <strong>The Resilient Networks Lab mission</strong> is to <strong>build resilient distributed systems</strong>, by creating and operating a platform where researchers can <strong>collaborate openly and asynchronously deep technical work.</strong>
</p>
<br/>

## Motivation & Description

The lab's genesis comes from a need present in the IPFS and libp2p projects to amp their research efforts to tackle the critical challenges of scaling up networks to planet scale and beyond. The Lab is designed to take ownership of the earlier stages on the research pipeline, from ideas, to specs, to code.

![](/images/posts/research-pipeline-map.png)

## Research Endeavours

<table>
  <tr>
    <th><b>Open Problem</b></th>
    <th><b>Description</b></th>
    <th><b>RFPs</b></th>
  </tr>

  <tr>
    <td><b><a href="https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/PRESERVE_USER_PRIVACY.md">Preseve full users' privacy when providing and fetching Content</a></b></td>
    <td>How to ensure that the user's of the IPFS network can collect and provide information while mainting their full anonymity.</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/MUTABLE_DATA.md">Mutable Data (Naming, Real-Time, Guarantees)</a></b></td>
    <td>Enabling a multitude of different patterns of interactions between users, machines and both. In other words, what are the essential primitives that must be provided for dynamic applications to exist, what are the guarantees they require (consistency, availability, persistancy, authenticity, etc) from the underlying layer in order create powerful and complete applications in the Distributed Web.</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/HUMAN_READABLE_NAMING.md">Human Readable Naming</a></b></td>
    <td>You can only have two of three properties for a name: Human-meaningful, Secure and/or Decentralized. This is Zooko's Trilemma. Can we have all 3, or even more? Can context related to some data help solve this problem?</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/ENHANCED_BITSWAP_GRAPHSYNC.md">Enhanced Bitswap/GraphSync with more Network Smarts </a></b></td>
    <td>Bitswap is a simple protocol and it generally works. However, we feel that its performance can be substantially improved. One of the main factors that hold performance back is the fact that a node cannot request a subgraph of the DAG and results in many round-trips in order to “walk down” the DAG. The current operation of bitswap is also very often linked to duplicate transmission and receipt of content which overloads both the end nodes and the network.</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md">Routing at Scale (1M, 10M, 100M, 1B.. nodes)</a></b></td>
    <td>Content-addressable networks face the challenge of routing scalability, as the amount of addressable elements in the network rises by several orders of magnitude compared to the host-addressable Internet of today.</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/PUBSUB_AT_SCALE.md">PubSub at Scale (1M, 10M, 100M, 1B.. nodes)</a></b></td>
    <td>As the IPFS system is evolving and growing, communicating new entries to the IPNS is becoming an issue due to the increased network and node load requirements. The expected growth of the system to multiple millions of nodes is going to create significant performance issues, which might render the system unusable. Despite the significant amount of related literature on the topic of pub/sub, very few systems have been tested to that level of scalability, while those that have been are mostly cloud-based, managed and structured infrastructures.</td>
    <td><a href="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>

  <tr>
    <td><b><a href="https://github.com/ipfs/notes/pull/394">Improved layouts to represent data in hash-linked graphs (using IPLD) </a></b></td>
    <td>Future™ ⚙️</td>
    <td><a hred="https://github.com/protocol/ResNetLab/issues/15">⚙️</a></td>
  </tr>
</table>

## Team

- [David Dias](http://daviddias.me)
- [Yiannis Psaras](https://www.ee.ucl.ac.uk/~uceeips)
