---
# Blog post title
title: Private retrieval grant 2023 roundup 

# Website post date
# format YYYY-MM-DD
date: 2023-06-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - will-scott

# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - 

# Not used
draft: false


 
---

We have concluded the initial round of funding decisions for RFP014, a research initiative in collaboration with [Arcological](https://arcological.xyz/), focused on exploring mechanisms for private data retrieval. The objective of RFP014 is to foster the advancement of private communication methods. We are excited to support the researchers who are discovering and defining novel techniques to improve both scale and efficiency of solutions to this problem.

In our first cohort, we extended a total of $750,000 in funding to 6 teams or individuals.
* 3 are investigating the scalability of "private information retrieval" techniques
* 3 are investigating applications of threshold or multi-party computation
* 3 are investigating mechanism designs involving multiple hops - across DHTs or mixnets.
* 3 are investigating the use of homomorphic encryption.

Many of the projects we are supporting advance multiple categories.


## State of the Field

There are many ways to divide up the distributed systems problems that are referred to collectively as private data retrieval. We tend to segment the problem by the cryptographic building blocks that are used.

### Homomorphic Computational Private Information Retrieval
[Spiral](https://eprint.iacr.org/2022/368) recently demonstrated a single server PIR server holding millions of database items that can reach a throughput of 2GB/s. This system has great demos both for [ENS resolution](https://sprl.it/) and [wikipedia](https://spiralwiki.com/). This work is being commercialized as a hosted service, [Blyss](https://blyss.dev/). There are also active investigations further scaling and improving the performance of this technique.

### Multiparty Computation
[Medusa](https://medusanet.xyz/) provides a building block for a threshold encryption networks. There are system designs using the MPC primitive for unlinking queries, and for re-encryption. Distributed key generation algorithms and threshold cryptography are continuing to increased scale, with threshold key generations for web 3 projects now reaching thousands of participants.

### Mixnets
[Nym](https://nymtech.net/) is an active experiment in the effectivness of incentivization of a mixnet system. The ability to reimburse infrastructure operators without deanonymizing traffic adds a new dimension. We are interested to see if incentivization can help overcome one of the major stumbling blocks for this construction: that lots of cover traffic is needed relative to any message being anonymized.


### Zero-Knowledge Systems
Zero Knowledge Proof systems have been advancing rapidly across hardware acceleration, compilation primitives, and efficiency. There are direct applications for advances to ZKPs in the blockchain industry, which is already effective in incentivizing development here. Increased efficiency of ZKPs may become sufficiently cheap to support validation of messages within private retrieval constructions. We already see increasing use of the construct in PIR systems.

### Oblivious Pseudorandom Functions
Oblivious techniques describe a structure for access or interaction that protects a piece of information. OPRFs allow masking functions and have been applied in PIR and PSI contexts. The sizes and efficiency of these constructions are being scaled through their usage in PAKE's - password authenticated key exchanges.

## What's next?

* We will be iterating on our application process, with an aim to review applications faster. We expect to launch the next iteration of RFP014 in the summer of 2023.
* We are invested in this problem ourselves, and will be following the work done by grantees. We will be providing a yearly summary of the maturity, performance, scalability, and opportunities for metadata-private data retrieval.

## Supported Projects

The full list of grantees of our first round of funding is:
* Private Information Retrieval for IPFS - Miti Mazmudar (University of Waterloo)
* Private information retrieval with access control - Sebastian Angel (University of Pennsylvania)
* Scalable Private Information Retrieval Protocols using Lattices - David Wu (Univsersity of Texas at Austin)
* Private retrieval of data (single-server TreePIR) - Arthur Lazzaretti (Yale University)
* PIR on the mixnet - masala (Katzenpost) 
* Secret Recovery Service - Kevin Wellenzohn, Stefan Hechenberger (Blockshake GmBh)
