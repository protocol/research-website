---
# Publication title
title: "PASTRAMI: Privacy-preserving, auditable, scalable & trustworthy auctions for multiple items"

# Website post date
# format YYYY-MM-DD
date: 2020-12-07

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: Middleware '20

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
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Michał Król"
  - "Alberto Sonnino"
  - "Argyrios Tasiopoulos"
  - yiannis-psaras
  - "Etienne Rivière"

# Zero or more of the areas in content/areas
areas:
  - distributed systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

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

Decentralised cloud computing platforms enable individuals
to offer and rent resources in a peer-to-peer fashion. They
must assign resources from multiple sellers to multiple buyers
and derive prices that match the interests and capacities of
both parties. The assignment process must be decentralised,
fair and transparent, but also protect the privacy of buyers.

We present PASTRAMI, a decentralised platform enabling
trustworthy assignments of items and prices between a large
number of sellers and bidders, through the support of multi-item 
auctions. PASTRAMI uses threshold blind signatures and commitment 
schemes to provide strong privacy guarantees while making bidders 
accountable. It leverages the Ethereum blockchain for auditability, 
combining efficient off-chain computations with novel, on-chain 
proofs of misbehaviour. Our evaluation of PASTRAMI using Filecoin 
workloads show its ability to efficiently produce trustworthy 
assignments between thousands of buyers and sellers.
