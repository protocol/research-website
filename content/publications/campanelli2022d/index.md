---
# Publication title
title: "Curve trees: Practical and transparent zero-knowledge accumulators"

# Website post date
# format YYYY-MM-DD
date: 2022-09-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-08

# Venue Name
venue:

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - report

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - matteo-campanelli
  - "Mathias Hall-Andersen"

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
#

# Not generally used
# featured: false

# Not generally used
#categories:
#  -

# Icon must match a known icon in /static/icons
# links:
#  - name: Cryptology ePrint Archive
#    url: https://eprint.iacr.org/2022/756
#    icon: link
#  - name: Download PDF
#    url: https://eprint.iacr.org/2022/756.pdf
#    icon: download

---

In this work we propose a new accumulator construction and efficient ways to prove knowledge of some element in a set without leaking anything about the element. This problem arises in several applications including privacy-preserving distributed ledgers (e.g., Zcash) and anonymous credentials. Our approaches do not require a trusted setup and significantly improve on the efficiency state of the of the art.
We introduce new techniques inspired by commit-and-prove techniques and combine shallow Merkle trees, 2-cycles of elliptic curves to obtain constructions that are highly practical. Our basic construction—which we dub Curve Trees—is completely transparent (does not require a trusted setup) and is based on simple standard assumptions (DLOG and Random Oracle Model). It has small proofs and commitments and very efficient proving and verification time.
Curve trees can be instantiated to be efficient in practice: the commitment to a set (accumulator) is 256 bits for any set size; for a set of size 232 a proof is approximately 2KB, a verifier runs in ≈160ms (easily parallelizable to ≈80ms) and a prover in ≈3.6s on an ordinary laptop.
Using our construction as a building block we can construct a simple and concretely efficient anonymous cryptocurrency with full anonymity set.
We estimate the verification time to be ≈320ms (and trivially parallelizable to run in ≈160ms) or <10 ms when batch-verifying multiple (>100) transactions simultaneously. Transaction sizes are <3KB. Our timings are competitive with those of the approach in Zcash Sapling and trade slightly larger proofs (proofs in Zcash are 0.2KB) for a completely transparent setup.
