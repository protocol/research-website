---
# Publication title
title: "Filecoin Proof of Useful Space"

# Website post date
# format YYYY-MM-DD
date: 2023-08-30

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
  - irene-giacomelli
  - luca-nizzardo
  
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

This document provides a simple formal definition of Proof of Space (taken from the academic literature) and an informal definition of persistent and useful space (needed for Filecoin). It describes construction details and a security proof for the Stacked-DRGs proof of space (SDR), and goes into how SDR is used in Filecoin. In particular, it includes a description and analysis for Filecoin's PoRep, WindowPoSt and WinningPoSt.
