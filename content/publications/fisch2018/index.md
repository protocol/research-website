---
title: Scaling proof-of-replication for Filecoin mining
date: 2018-10-15
publishDate: 2018-10-15

doi:

publication_types:
  - report
authors:
  - ben-fisch
  - joseph-bonneau
  - nicola-greco
  - juan-benet

groups:
  - cryptonet

categories:

areas:
  - cryptography
  - distributed-systems

venue:
venue_location:

resources:
  - src: fisch2018.pdf
  - src: cite.bib

---
A proof-of-replication (PoRep) is a proof system that a server can use to demonstrate to a network in a publicly verifiable way that it is dedicating unique resources to storing one or more replicas of a data file. While it is not possible for PoReps to guarantee cryptographically that the prover's storage format is redundant, PoReps do guarantee that: (a) The prover must be using as much space to produce the proof as replicas it claims to store (it is a proof of space) (b) The prover can retrieve a committed data file (it is a proof of retrievability) (c) The prover can use the space to store this file without any overhead In this sense a PoRep is a useful proof of space. It is uniquely suited to replace proof-of-work in Nakamoto consensus as a Sybil resistance mechanism, while simultaneously incen-tivizing and subsidizing the cost of file storage. Technical report This is a short technical report on our constructions. A more detailed paper is forthcoming with information about our prototype implementation of PoReps.
