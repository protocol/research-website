---
# Publication title
title: "Private attacks in longest chain proof-of-stake protocols with single secret leader elections"

# Website post date
# format YYYY-MM-DD
date: 2021-11-16

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "AFT '21: 3rd ACM Conference on Advances in Financial Technologies"

# Venue Location
#venue_location: New York, NY, USA

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2021-09-28

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - sarah-azouvi
  - "Daniele Cappelletti"

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

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

Single Secret Leader Elections have recently been proposed as an improved leader election mechanism for proof-of-stake (PoS) blockchains. However, the security gain they provide has not been quantified. In this work, we present a comparison of PoS longest-chain protocols that are based on Single Secret Leader Elections (SSLE) - that elect exactly one leader per round - versus those based on Probabilistic Leader Elections (PLE) - where one leader is elected on expectation. Our analysis shows that when considering the private attack - the worst attack on longest-chain protocols - the security gained from using SSLE is substantial: the settlement time is decreased by roughly 25% for a 33% or 25% adversary. Furthermore, when considering grinding attacks, we find that the security threshold is increased by 10% (from 0.26 in the PLE case to 0.36 inthe SSLE case) and the settlement time is decreased by roughly 70% for a 20% adversary in the SSLE case.
