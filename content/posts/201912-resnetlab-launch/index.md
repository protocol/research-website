---
title: "A New Lab for Resilient Networks Research"

date: 2019-12-30T08:30:00+01:00
lastmod: 2019-12-30T08:30:00+01:00

# Taxonomies
authors:
  - david-dias
  - yiannis-psaras
tags: Networks, Research
categories:
  - news
research_areas:
  - distributed-systems
research_groups:
  - resnetlab

---

Resiliency is at the core of systems that are capable of standing the test of time, providing unshakable access for the many generations to come. A resilient system or network is fundamentally uncompromised by an isolated failure or network split. The system is malleable, adaptable to different conditions, and capable of evolving to meet new requirements over time. **Building resilience into foundational infrastructure is key to building a computing and networking fabric for humanity’s information**.

That’s why we are beyond excited to share with you a new research group at Protocol Labs: the Resilient Networks Lab, or ResNetLab for short.

**The mission of the Resilient Networks Lab** is to **build resilient distributed systems** by creating and operating a platform where researchers can **collaborate openly and asynchronously on deep technical work**.

## The motivation for ResNetLab

We’re forming this lab in response to a growing need to tackle open problems that surfaced with the wild adoption of IPFS and libp2p, taking the challenge of providing a better fabric for human knowledge to a whole new scale.

IPFS & libp2p were born out of research, being the distilled result of decades of innovation in networking protocols and distributed systems. Since the projects’ nucleation, we have continued to invest in improving those same ideas and took them through [Protocol Labs’ innovation pipeline](https://protocol.ai/blog/protocol-labs-creating-new-networks/), deploying them to users and granting new superpowers. You can learn about the many great achievements of [IPFS & libp2p in their yearly report](https://blog.ipfs.io/weekly-72).

Furthermore, the increasing momentum towards **decentralisation of Internet services** is calling for new features to be inherently integrated into the networking protocols stack. Despite decades of research on topics close to IPFS and libp2p, the values of **decentralisation and privacy-preserving communication** were, for the most part, either treated as an afterthought or not considered at all. At ResNetLab, those issues are at the forefront of the protocol design process.

To proactively solve this, we created the ResNetLab to focus on the ideation, research, and prototyping phases of the innovation pipeline, while the IPFS & libp2p project teams will be focused on the deployment phase (i.e. implementation, adoption, and reach).

![](/images/resnetlab/research-pipeline-map.png)

The lab is designed to promote collaborative research: the output will always stem from a combination of our internal resources with work done by our partners through research grants, requests for proposals, sponsored MSc, PhD, and postdoc fellowships, and more.

Below, you can find some of the outputs produced to date. We’ve been hard at work and there’s much more to come!

## Open problems and RFPs

We focus on designing protocols that will be useful for past, current and future applications and we will drive wide adoption of the protocols incubated within ResNetLab within [Protocol Labs projects](https://protocol.ai/projects/). As such, we have drafted formal descriptions of the open problems that are challenging projects such as IPFS, libp2p, and IPLD. Today, we are publishing the first six open problems with more to follow in the coming months:

- [PubSub at Scale](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/PUBSUB_AT_SCALE.md)
- [Routing at Scale](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md)
- [Enhanced Bitswap/GraphSync with more Network Smarts](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/ENHANCED_BITSWAP_GRAPHSYNC.md)
- [Human Readable Naming](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/HUMAN_READABLE_NAMING.md)
- [Mutable Data](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/MUTABLE_DATA.md)
- [Preserve Users Privacy](https://github.com/ipfs/notes/blob/master/OPEN_PROBLEMS/PRESERVE_USER_PRIVACY.md)

The description of the open problems has been intentionally left wide in terms of nature and scope in order to allow for far-reaching research and experimentation.

Out of the open problems above, we have carefully crafted three requests for proposals (RFPs). In contrast to the open problem statements, the scope of the RFPs is narrow and targeted. This is also intentional as an attempt to attack the open problems from different angles and deliver complete solutions. We are publishing two RFPs:

- [RFP: Multi-Level DHT Design and Evaluation](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-7-MLDHT.md)
- [RFP: Scalability Bounds of P2P Pub/Sub (libp2p floodsub, gossipsub and episub)](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-8-pubsub.md)

The ResNetLab RFP scheme intends to be a low-friction, high-quality funding scheme for targeted solutions to the open problems of content-addressable networks. We want to keep the application overhead low, but will strive to keep the quality of awarded projects high. That said, individuals, university labs, or teams applying to our RFPs are encouraged to highlight the novelty of their proposed solution or approach to solve the problem in question.

Last, but not least, it is worth noting that our first RFPs only address a small subset of the identified open problems, and those open problems a tiny subset of the challenges that future protocols have to address in order to become content-centric, decentralised, and privacy preserving. We are, therefore, open to new ideas and proposals for collaborations; reach out to us at [research@protocol.ai](mailto:research@protocol.ai).

## Publications and Talks

As we make progress and create contributions, we will update the [ResNetLab page at research.protocol.ai](https://research.protocol.ai/research/groups/resnetlab/). Today, we are thrilled to share with you the lastest ones:

- [Workshop: A Brief History of Information-Centric Networks (2019.07.31)](https://github.com/protocol/research/issues/14)
  - [Recording](https://www.youtube.com/watch?v=rbLioc1h9dg)
  - [Slides](https://drive.google.com/a/protocol.ai/file/d/1IQL2S9TREjpMTwfsJO0-dYNR9LQdZCAq/view)
- [ACM ICN Macau, IPFS & libp2p Tutorial (2019.09.24)](https://conferences.sigcomm.org/acm-icn/2019/tutorial-IPFS.php)
  - Recordings will be published on the ACM ICN Macau website.
  - [Slides](https://drive.google.com/drive/u/1/folders/1PJ3oK_jLxnIRxwj-ucTmDhQObisIcIoz)
- [A first draft of the upcoming GossipSub Paper](PL-TechRep-gossipsub-v0.1-Dec30.pdf)
- [An augmented version of the MerkleCRDT Technical Report](PL-TechRep-merkleCRDT-v0.1-Dec30.pdf)

## We’re looking for brave research engineers!

The lab has a growing team. We are looking for a [Research Engineer](https://jobs.lever.co/protocol/f39f7fe0-1805-40d2-9453-90fd25c72bc3) with a strong passion for building future-proof systems.

We are enthusiastic for the future to come and for the many collaborations with the research community.

For now, we bid you an excellent day, a joyful holiday season, and a great kick-off for 2020.

The ResNetLab Team,

David Dias & Yiannis Psaras
