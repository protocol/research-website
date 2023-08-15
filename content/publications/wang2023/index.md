---
# Publication title
title: "Security analysis of Filecoin's Expected Consensus in the Byzantine vs honest model"

# Website post date
# format YYYY-MM-DD
date: 2023-08-14

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: AFT 2023

# Venue Location
venue_location: Princeton, NJ, USA

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2023-10-23

# DOI, if available
doi: 

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - xuechao-wang
  - sarah-azouvi
  - marko-vukolic

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
#  - src: 119.pdf

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

Filecoin is the largest storage-based open-source blockchain, both by storage capacity (>11EiB) and market capitalization. This paper provides the first formal security analysis of Filecoin's consensus (ordering) protocol, Expected Consensus (EC). Specifically, we show that EC is secure against an arbitrary adversary that controls a fraction β of the total storage for βm<1−e−(1−β)m, where m is a parameter that corresponds to the expected number of blocks per round, currently m=5 in Filecoin. We then present an attack, the n-split attack, where an adversary splits the honest miners between multiple chains, and show that it is successful for βm≥1−e−(1−β)m, thus proving that βm=1−e−(1−β)m is the tight security threshold of EC. This corresponds roughly to an adversary with 20% of the total storage pledged to the chain. Finally, we propose two improvements to EC security that would increase this threshold. One of these two fixes is being implemented as a Filecoin Improvement Proposal (FIP).
