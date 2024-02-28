---
# Publication title
title: "A finality calculator for Filecoin’s Expected Consensus"

# Website post date
# format YYYY-MM-DD
date: 2024-02-01

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: 

# Venue Location
venue_location: 

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
#venue_date: 

# DOI, if available
doi: 

# Type of publication
# delete all but one
publication_types:
  - report

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - guy-goren
  - jorge-soares

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

We propose a finality calculator for Filecoin’s Expected consensus that considers what takes place during epochs and can
attain, under normal operating conditions, an error probability of 2^(−30) in 30 epochs (15 minutes) - a 30x improvement
over the current 900-epoch threshold. It depends only on a node’s local view and can be implemented without protocol
changes.