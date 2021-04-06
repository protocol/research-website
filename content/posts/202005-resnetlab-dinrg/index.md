---
# Blog post title
title: "IPFS talk at the IRTF Decentralised Internet Infrastructure Research Group meeting"

# Website post date
# format YYYY-MM-DD
date: 2020-06-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - david-dias
  - yiannis-psaras

# If applicable
categories:
  - Talks

tags:
  - resnetlab-on-tour

# Zero or more of the areas in content/research/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/research/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false


---

[ResNetLab](/research/groups/resnetlab/) was invited to meet with the Decentralised Internet Infrastructure Research Group [(DINRG)](https://datatracker.ietf.org/rg/dinrg/about/) of the Internet Research Task Force [(IRTF)](https://irtf.org/) to present and discuss the Software Architecture of the [IPFS](https://ipfs.io/) protocol.


There were a total of [4 talks at the meeting](https://datatracker.ietf.org/meeting/interim-2020-dinrg-01/materials/agenda-interim-2020-dinrg-01-dinrg-01.html). Ours was titled “High-Level Overview of the IPFS Architecture”. The presentation covered what happens when **importing, naming, finding, and fetching** content on IPFS, and was followed by some great questions from the 29 participants that attended in real time. You can watch the [full recording](https://www.youtube.com/watch?v=K4Usud4g4iY&feature=youtu.be&t=1008) and check the [slide deck](https://datatracker.ietf.org/meeting/interim-2020-dinrg-01/materials/slides-interim-2020-dinrg-01-sessa-an-overview-of-the-interplanetary-file-system-ipfs.pdf).


New to DINRG? The Decentralized Internet Infrastructure Group (DINRG) is part of the Internet Research Task Force (IRTF), which is part of the Internet Engineering Task Force (IETF) - the main standardisation body for Internet protocols. The IRTF is its research arm, and its task is to “promote research of importance to the evolution of Internet protocols”. While the IETF focuses on short-term engineering, the IRTF looks at longer-term issues relating to Internet protocols, architecture and applications. IRTF groups often proceed to become standards groups in the IETF.

Within the IRTF, the DINRG is investigating issues related to the decentralisation of core Internet infrastructure and related protocols. As such, the DINRG group’s vision is very aligned with many of our projects at Protocol Labs. Apart from distributed-ledger and issues related to blockchains, the DINRG is interested in general-purpose protocols that can contribute to the decentralisation of Internet services and architectures.

The DINRG meets at least three times a year as part of the main IETF meetings. For this edition, the meeting was held remotely as the world readjusts to the disruption caused by the COVID-19 pandemic. We appreciate the support and hard work that went into preparing this event - it was great to discuss new ideas and solicit feedback on our work from this group.

## Questions that came up during the talk

We got a few great questions during the talk that we wanted to write down for others to find. Enjoy!

**Q: How well does Kademlia work with Disconnected applications?**

A: Kademlia (and IPFS) can work without problems in disconnected LAN scenarios. In this case, the local DHT is not part of the mainnet DHT and vice versa (i.e. content stored in one cannot be found from the other). There is significant interest within the IPFS ecosystem in supporting fully offline communication: companies such as [Berty](https://berty.tech) are working towards Bluetooth-based transports for libp2p to enable local, offline device interactions.  Communication in these types of environments will likely not use the DHT as the content routing infrastructure, due to the high levels of node mobility and small network scale, which the DHT is not optimised to handle.

**Q: In a non-local network, with occasional connectivity, how can you differentiate failure from longer disconnection periods?**

A: You don’t necessarily need to differentiate between the two. What is important is for the network to know what content is available and where. In IPFS, provider records are the main mechanism by which providers let the network know of content they store/cache. Provider records have to be refreshed, i.e. sent periodically to the DHT to keep up-to-date information. You could still provide content locally, even when a node is disconnected from the DHT (e.g. via Bluetooth). Such mechanisms would be built as separate transports within libp2p.

**Q: How do you manage the ID space in an offline case?**

A: In LAN-based disconnected scenarios, where the DHT is not connected to the main, public DHT, the Peer ID space can be managed the same way as in the online/connected case, where each node on the network is represented as a leaf of a binary tree. According to Kademlia, the position of a node on the tree is determined by the shortest unique prefix of its ID. PeerIDs in the libp2p KAD-DHT use 256-bit keys, as opposed to 160-bit keys as suggested in the original Kademlia paper.

**Q: Are real-time, interactive applications supported by IPFS?**

A: Absolutely! IPFS provides a messaging layer (through libp2p PubSub) and a name system (IPNS) that enables applications to support update broadcasts and mutable pointers. There are several distributed and real-time applications using IPFS today; some highlights are [PeerPad](https://peerpad.net)  (a real-time, P2P collaborative editor that does not use or depend on any central server), [Orbit.chat](https://orbit.chat/) (a real-time chat platform), [OpenBazaar](https://openbazaar.org/) (a P2P e-commerce market), Filecoin, the Distributed Storage Market), and in the near future, ETH2.0. If you want to know more, we recommend the following talks and demos:
- [Introduction to libp2p](https://www.youtube.com/watch?v=CRe_oDtfRLw) (the network layer that supports these interactions)
- [Tutorial on how to use libp2p PubSub](https://www.youtube.com/watch?v=Nv_Teb--1zg) (build an app in less than 10 minutes)
- [Enter Gossipsub](https://www.youtube.com/watch?v=APVp-20ATLk&feature=youtu.be&t=3612) (the scalable message layer of libp2p)
- The [libp2p PubSub interface spec](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub)

Thank you to everyone that attended the talk and to the DINRG for organizing this event and inviting us. We look forward to future editions! If you’re interested in working on large scale P2P Research Problems, check our [RFPs](https://github.com/protocol/research-rfps) and [Open Positions](https://jobs.lever.co/protocol?department=Research).




<center>{{< figure src="/images/resnetlab/resnetlab_logo_red.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>
