---
# Publication title
title: "SnarkPack: Practical SNARK aggregation"

# Website post date
# format YYYY-MM-DD
date: 2021-05-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: Financial Cryptography and Data Security 2022

# Venue Location
venue_location: St George's, Grenada

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-05-02

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper


# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - nicolas-gailly
  - "Mary Maller"
  - anca-nitulescu

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: false

# Publication pdf, should be in the same folder
# No need to fill this out; just name the file the same as the folder
#resources:
#  - src: publication-source.pdf

# Not generally used
# featured: false

# Not generally used
#categories:
#  -

# Icon must match a known icon in /static/icons
# links:
#  - name: Publisher
#    url: link to publisher
#    icon: link
#  - name: Download PDF
#    url: external pdf url
#    icon: download

---

 Zero-knowledge SNARKs (zk-SNARKs) are non-interactive proof systems with short and efficiently verifiable proofs. zk-SNARKs are widely used in decentralised systems to address privacy and scalability concerns. One of the main applications is the blockchain, were SNARKs are used to prove computations with private inputs and reduce on-chain footprint verification and transaction sizes.

We design and implement SnarkPack, a new argument that further reduces the size of SNARK proofs by means of aggregation. Our goal is to provide an off-the-shelf solution that is practical in the following sense: (1) it is compatible with existing deployed systems, (2) it does not require any extra setup.

SnarkPack is designed to work with Groth16 scheme and has logarithmic size proofs and a verifier that runs in logarithmic time in the number of proofs to be aggregated. Most importantly, SnarkPack reuses the public parameters from Groth16 system, so it does not require a separate trusted setup ceremony.

The key tool for our construction is a new commitment scheme that uses as public parameters two existing ”powers of tau” ceremony transcripts. The commitment scheme allows us to instantiate the inner product pairing arguments (IPP) of Bünz et al. without additional trusted setup.

SnarkPack can aggregate 8192 proofs in 8.7s and verify them in 33ms, including un-serialization time, yielding a verification mechanism that is exponentially faster than batching and previous solutions in the field.
