---
title: "Proof of Replication"
date: 2017-01-01
publishDate: 2019-08-29T15:40:12.718310Z
authors: ["Juan Benet", "David Dalrymple", "Nicola Greco"]
publication_types: ["4"]
abstract: "We introduce Proof-of-Replication (PoRep), a new kind of Proof-of-Storage, that can be used to prove that some data D has been replicated to its own uniquely dedicated physical storage. Enforcing unique physical copies enables a verifier to check that a prover is not deduplicating multiple copies of D into the same storage space. This construction is particularly useful in Cloud Computing and Decentralized Storage Networks, which must be transparently verifiable, resistant to Sybil attacks, and unfriendly to outsourcing. This work (a) reviews Proofs-of-Storage and motivates use cases; (b) defines the novel Proofs-of-Replication, which can be publicly verifiable, transparent, authenticated, and time-bounded ; (c) shows how to chain Proofs-of-Replication to establish useful Proofs-of-Spacetime. Work in Progress. This is a work in progress Technical Report from Protocol Labs. Active research is under way, and new versions of this paper will appear. For comments and suggestions, contact us at research@filecoin.io 1 Motivation and Background on Proofs-of-Storage This section provides backgrounds and classifications of different Proofs-of-Storage and related proofs, and motivates the need for Proofs-of-Replication. Throughout this section, we explain the distinction between different proofs using a prover, P, that is attempting to convince a verifier, V, that P is storing some data, D. V issues a challenge, c, to P who answers it with a corresponding proof $π$ c , according to the scheme in question. Proof schemes vary in their properties, their utility, and in whether D is useful outside the protocol or is a random string with no external utility."
featured: false
publication: ""
url_pdf: "https://filecoin.io/proof-of-replication.pdf"
---

