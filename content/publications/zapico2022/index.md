---
title: "Caulk: Lookup arguments in sublinear time"

# Website post date
date: 2022-07-06
# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Publication Name (not used)
# journal:

# Venue Name
venue:

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
venue_date:

# Digital Object Identifier
doi:

resources:
  - src: zapico2022.pdf

# Taxonomies:
# delete all but one
publication_types:
  - report

authors:
  - "Arantxa Zapico"
  - "Vitalik Buterin"
  - "Dmitry Khovratovich"
  - "Mary Maller"
  - anca-nitulescu
  - "Mark Simkin"

tags:
  -

categories:
  - report

areas:
  - cryptography

groups:
  - cryptonet

featured: false

# Icon must match a known icon in /static/icons
# links:
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

We present position-hiding linkability for vector commitment schemes: one can prove in zero knowledge that one or m values that comprise commitment cm all belong to the vector of size N committed to in C. Our construction Caulk can be used for membership proofs and lookup arguments and outperforms all existing alternatives in prover time by orders of magnitude.

For both single- and multi-membership proofs Caulk beats SNARKed Merkle proofs by the factor of 100 even if the latter instantiated with Poseidon hash. Asymptotically our prover needs O(m^2 + m.log(N)) time to prove a batch of m openings, whereas proof size is O(1) and verifier time is O(log(log(N))).

As a lookup argument, Caulk is the first scheme with prover time sublinear in the table size, assuming O(N.log(N)) preprocessing time and O(N) storage. It can be used as a subprimitive in verifiable computation schemes in order to drastically decrease the lookup overhead.

Our scheme comes with a reference implementation and benchmarks.
