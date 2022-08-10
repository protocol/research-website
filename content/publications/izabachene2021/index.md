---
# Publication title
title: "MyOPE: Malicious security for oblivious polynomial evaluation"

# Website post date
# format YYYY-MM-DD
date: 2021-09-27

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: SCN 2022

# Venue Location
venue_location: Amalfi, Italy

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-09-12

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Malika Izabachène"
  - anca-nitulescu
  - "Paola de Perthuis"
  - "David Pointcheval"

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

Oblivious Polynomial Evaluation (OPE) schemes are interactive protocols between a
sender with a private polynomial and a receiver with a private evaluation point where the receiver learns the evaluation of the polynomial in their point and no additional information. They are used in Private Set Intersection (PSI) protocols.

We introduce a scheme for OPE in the presence of malicious senders, enforcing honest sender
behavior and consistency by adding verifiability to the calculations. The main tools used are FHE for input privacy and arguments of knowledge for the verifiability property. MyOPE deploys sublinear communication costs in the sender’s polynomial degree and one to five rounds of interaction. In other words, it can be used as a verifiable computation scheme for polynomial evaluation over FHE ciphertexts. While classical techniques in pairing-based settings allow generic succinct proofs for such evaluations, they require large prime order subgroups which highly impact the communication complexity, and prevent the use of FHE with practical parameters. MyOPE builds on generic secure encodings techniques that allow composite integers and enable real-world FHE parameters and even RNS-based optimizations. It is best adapted for the unbalanced setting where the degree of the polynomial and the computing power of the sender are large.

MyOPE can be used as a building block in specialized two-party protocols such as PSI (this use case is hereafter described), oblivious keyword search, set membership and more using the OPE instantiation. As another contribution, our techniques are generalized to applications other than OPE, such as Symmetric Private Information Retrieval (SPIR), to make them secure against a malicious sender.
