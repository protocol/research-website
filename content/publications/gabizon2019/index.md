---
title: "AuroraLight: Improved prover efficiency and SRS size in a Sonic-like system"
date: 2019-05-29

publishDate: 2019-05-29

doi:

journal:

publication_types:
  - report
authors:
  - ariel-gabizon
tags:
groups:
  - cryptonet
  - cryptocomputelab
categories:
areas:
  - cryptography

url_source: https://eprint.iacr.org/2019/601

venue:
venue_location:

resources:
  - src: gabizon2019.pdf
  - src: cite.bib
---
Using ideas from the recent Aurora zk-STARK of Ben-Sasson et al. [BCR + 19], we present a zk-SNARK with a universal and updatable SRS similar to the recent construction of Maller et al. [MBKM19], called Sonic. Compared to Sonic, our construction achieves significantly better prover run time (less than half) and smaller SRS size (one sixth). However, we only achieve amortized succinct verification time for batches of proofs, either when the proofs are generated in parallel or in [MBKM19]'s helper setting, and our proofs are longer than those of [MBKM19] (but still contain a constant number of field and group elements).
