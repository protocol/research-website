---
# Blog post title
title: Announcing the first award for RFP-011,"Changing the Internet"

# Website post date
# format YYYY-MM-DD
date: 2022-07-25

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - karola-kirsanow

# If applicable
categories:
  - blog

# If applicable
tags:
  - news

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - network-research

# Not used
draft: false



---

PL Research is  pleased to announce the first research project funded as part of the *Changing the Internet* Initiative: a project by [Scott Shenker](https://www2.eecs.berkeley.edu/Faculty/Homepages/shenker.html) of ICSI and UC Berkeley, [Arvind Krishnamurthy](https://www.cs.washington.edu/people/faculty/arvind) of the University of Washington, [James McCauley](https://www.mtholyoke.edu/people/james-mccauley) of Mount Holyoke College, and  [Aurojit Panda](https://cs.nyu.edu/~apanda/) of NYU  to improve acess to Web3 services by creating a better client interface and user experience for accessing Web3 content.  This project, which builds on the work of the team’s larger effort to create the [Extensible Internet](https://www.icsi.berkeley.edu/icsi/groups/extensible-internet), addresses the [third challenge](https://github.com/protocol/research-grants/blob/master/RFPs/rfp-011-changing-the-internet.md#problem-statement) of the RFP Problem Statement: architecture for service introduction.

The Extensible Internet (EI) model envisions an interposition layer between L3 (the network layer) and L4 (the transport layer) where new in-network services can be placed, allowing the internet's service model to be continually extended as novel services are developed. The EI architecture is designed to be backwards-compatible and incrementally deployable, reducing the costs associated with rollout.

The  development of the Extensible Internet is motivated by the desire to *maintain  the public internet's role  as an open and neutral platform for innovation* by enhancing its competitiveness vis-à-vis the large private networks that carry a significant fraction of the modern internet's transit traffic. EI is intended to enable the public internet to keep pace with performance-enhancing innovations in private networks, avoiding relegation to merely serving as a carrier for the last mile and incentivizing continued innovation -- and access to innovation -- in a free and open internet.

Protocol Labs  is supporting the team's work to incorporate Web3 into the EI framework, including implementing new functionality  to perform address resolution and access data stored on the blockchain and on peer nodes in Web3 protocols like IPFS, with the goal of developing and delivering a prototype that can be incrementally deployed anywhere in the interet.  

PL Research is excited to participate in work on new ideas for building the next generation of the internet.  The [*Changing the Internet* RFP](https://github.com/protocol/research-grants/blob/master/RFPs/rfp-011-changing-the-internet.md#problem-statement) will remain open until **30 August 2022**. We encourage interested researchers to reach out to us via email with any questions at [research@protocol.ai](mailto:research@protocol.ai), and to discuss the problems presented in the RFP in our [discussion forum](https://github.com/protocol/research/discussions). Submit your proposal using our application management system at [https://grants.protocol.ai/](https://grants.protocol.ai/).
