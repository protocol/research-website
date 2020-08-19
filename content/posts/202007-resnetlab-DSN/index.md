---
# Blog post title
title: "IEEE/IFIP DSN 2020 - The InterPlanetary File System and the Filecoin Network"

# Website post date
# format YYYY-MM-DD
date: 2020-07-01

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - yiannis-psaras
  - david-dias

# If applicable
categories:
  - Talks

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

---

[ResNetLab](https://research.protocol.ai/research/groups/resnetlab/) was invited to present “The InterPlanetary File System and the Filecoin Network” in a 3-hour tutorial at the [IEEE/IFIP co-sponsored conference on Dependable Systems and Networks](https://dsn2020.webs.upv.es/)! The conference, now in its 50th edition, has an established track record of top-quality research contributions, and is one of the oldest conferences in its subject area.

We would like to thank the conference organizers for including our tutorial in the conference, and for the great organization of the conference in general and our tutorial in particular!  Here we present some of the questions we received after our presentation as a reference for future readers:

*Q: There has been lots of research in the past on DHTs. What percentage of your design builds on those past proposals and which parts did you have to build from scratch?*

A: The main ideas that led to the early development of IPFS and libp2p were derived from research and from academic papers. Since then, we’ve been iterating our designs to be able to overcome the challenges of deploying them in a live network at scale. One thing that often doesn’t get discussed in P2P research is the challenge of deploying real-world systems, since most simulations assume homogeneous computing environments with close to perfect connectivity. Solving this challenge has been key for enabling our networks to grow.

*Q: As networks evolve and you expanding your network to different devices, which devices and which environments do you think will be the most challenging?*

A: Mobile and IoT offer the most interesting challenges as they, by design, offer the most adverse situation for any kind of routing protocol that benefits from stability. These include intermittent connectivity, constant roaming, low computing resources, and limited power/battery that has to be shared with other applications. At the same time, the world is more mobile than ever and routing protocols need to accommodate these constraints in a way that is gracious towards the users.


*Q: You do lots of caching. Do you have any mechanisms to guarantee cache consistency?*

A: Caching within the IPFS network is not managed. The IPFS system does not include mechanisms to orchestrate caching. Content is not proactively replicated across other peers’ devices who don’t request the content. Instead, caching happens on devices after they request the content for the first time. These copies are maintained and verified by checking their cryptographic hash (which is also their address). 

*Q: In your Gossipsub Evaluation, why do you have a 6 second deadline for block propagation in the Filecoin Network?*

A: The Filecoin Network operates in block epochs of 30 sec. This means that every 30 sec new block(s) are generated to extend the blockchain. A deadline of 6 seconds means that miners have 24 sec to validate cryptographic signatures and carry out other validation tasks before they can add new blocks to the blockchain. Although the 6-second deadline was initially chosen experimentally, it has proven to be a successful setting that leaves miners with just about enough time to carry out all the required tasks before the end of the epoch.

*Q: Have you considered close-sourcing your protocols as a commercial entity/company?*

A: We believe in open protocols. We’ve both committed to not close/monetize our protocols directly through licencing and made a pledge to add the [Permissive License Stack](https://protocol.ai/blog/announcing-the-permissive-license-stack/) to all our tech. Protocol Labs is in the business of making significant technological breakthroughs and we believe that open collaboration is essential to achieve those aims.
