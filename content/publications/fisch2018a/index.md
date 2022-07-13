---
title: "PoReps: Proofs of space on useful data"
date: 2018-07-14

publishDate: 2018-07-14

doi: ""

publication_types:
  - report
authors:
  - ben-fisch
groups:
  - cryptonet
  - cryptocomputelab
categories:
areas:
  - cryptography
  - distributed-systems

journal:

venue:
venue_location:

url_source: https://eprint.iacr.org/2018/678

resources:
  - src: fisch2018a.pdf
  - src: cite.bib
---
A proof-of-replication (PoRep) is an interactive proof system in which a prover defends a publicly verifiable claim that it is dedicating unique resources to storing one or more retrievable replicas of a data file. In this sense a PoRep is both a proof of space (PoS) and a proof of retrievability (PoR). This paper is a foundational study of PoReps, exploring both their capabilities and their limitations. While PoReps may unconditionally demonstrate possession of data, they fundamentally cannot guarantee that the data is stored redundantly. Furthermore, as PoReps are proofs of space, they must rely either on rational time/space tradeoffs or timing bounds on the online prover's runtime. We introduce a rational security notion for PoReps called epsilon-rational replication based on the notion of an epsilon-Nash equilibrium, which captures the property that a server does not gain any significant advantage by storing its data in any other (non-redundant) format. We apply our definitions to formally analyze two recently proposed PoRep constructions based on verifiable delay functions and depth robust graphs.
