---
# Publication title
title: "Rinocchio: SNARKs for ring arithmetic"

# Website post date
# format YYYY-MM-DD
date: 2021-03-18

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

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
  - "Chaya Ganesh"
  - anca-nitulescu
  - "Eduardo Soria-Vazquez"

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

Succinct non-interactive arguments of knowledge (SNARKs) enable non-interactive efficient verification of NP computations and admit short proofs. However, all current SNARK constructions assume that the statements to be proven can be efficiently represented as either Boolean or arithmetic circuits over finite fields. For most constructions, the choice of the prime field $F_p$ is limited by the existence of groups of matching order for which secure bilinear maps exist.

In this work, we overcome such restrictions and enable verifying computations over rings. We construct the first designated-verifier SNARK for statements which are represented as circuits over a broader kind of commutative rings, namely those containing big enough *exceptional set*. Exceptional sets consist of elements such that their pairwise differences are invertible. Our contribution is threefold: We first introduce Quadratic Ring Programs (QRPs) as a characterization of NP where the arithmetic is over a ring and we generalize pre-existent assumptions employed in field-restricted SNARKs to the ring context.

We construct ring SNARKs from framework based on encodings, inspired by the Pinocchio. Our scheme is modular, based on generic encodings over rings and allows for various instantiations in order to adapt to different settings. Finally, we propose two applications for our SNARKs. In the first one, we instantiate our construction for the Galois Rings $GR(2^k,d)$, i.e. the degree-*d* Galois extension of  $Z_{2^k}$. This allows us to naturally prove statements about circuits over  $Z_{2^{64}}$, which closely matches real-life computer architectures such as standard CPUs. Our second application is verifiable computation over encrypted data, specifically for evaluations of Ring-LWE-based homomorphic encryption schemes.
