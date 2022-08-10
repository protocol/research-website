---
title: Power fault tolerance
date: 2017-07-27

publishDate: 2017-07-27

doi:

publication_types:
  - report
authors:
  - "Protocol Labs"
groups:
  - cryptonet
  - cryptocomputelab
categories:
  -
areas:
  - cryptography
  - distributed-systems

journal:

venue:
venue_location:

resources:
  - src: protocollabs2017.pdf
  - src: cite.bib
---
Byzantine Fault Tolerance (BFT) accounts for faults as the number of faulty nodes and is thus cumbersome to apply to many modern decentralized systems. We introduce the Power Fault Tolerance (PFT) model, which reframes BFT in terms of participants' influence over the outcome of a protocol, instead of the number of nodes. In PFT, n is the total power, and f is the fraction of power controlled by faulty or adversarial participants. This work: (a) provides a formal definition and properties for PFT; (b) generalizes Byzantine Consensus (BC) protocols of different classes (permissioned, permissionless, and federated) into a single class of Power Consensus (PC); (c) explores new directions for PC protocols, particularly for blockchains, and protocols that can detect and make progress during catastrophic network partitions.
