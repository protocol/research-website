---
title: Proof of replication

date: 2017-07-27

publishDate: 2017-07-27

authors:
  - juan-benet
  - david-dalrymple
  - nicola-greco
publication_types:
  - report
areas:
  - cryptography
  - distributed-systems  
groups:
  - cryptonet
categories:

journal:

venue:
venue_location:

doi:

links:

resources:
  - src: benet2017.pdf
  - src: cite.bib
---
We introduce Proof-of-Replication (PoRep), a new kind of Proof-of-Storage, that can be used to prove that some data D has been replicated to its own uniquely dedicated physical storage. Enforcing unique physical copies enables a verifier to check that a prover is not deduplicating multiple copies of D into the same storage space. This construction is particularly useful in Cloud Computing and Decentralized Storage Networks, which must be transparently verifiable, resistant to Sybil attacks, and unfriendly to outsourcing. This work (a) reviews Proofs-of-Storage and motivates use cases; (b) defines the novel Proofs-of-Replication, which can be publicly verifiable, transparent, authenticated, and time-bounded ; (c) shows how to chain Proofs-of-Replication to establish useful Proofs-of-Spacetime. Work in Progress. This is a work in progress Technical Report from Protocol Labs. Active research is under way, and new versions of this paper will appear.
