---
# Publication title
title: "Design and evaluation of IPFS: A storage layer for the decentralized web"

# Website post date
# format YYYY-MM-DD
date: 2022-07-26

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: ACM SIGCOMM 2022

# Venue Location
venue_location: Amsterdam, The Netherlands

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-08-26

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Dennis Trautwein"
  - "Aravindh Raman"
  - "Gareth Tyson"
  - "Ignacio Castro"
  - will-scott
  - "Moritz Schubotz"
  - "Bela Gipp"
  - yiannis-psaras

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - probelab

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

Recent years have witnessed growing consolidation of web operations. For example, the majority of web traffic now originates from a few organizations, and even micro-websites often choose to host on large pre-existing cloud infrastructures. In response to this, the “Decentralized Web” attempts to distribute ownership and operation of web services more evenly. This paper describes the design and implementation of the largest and most widely used Decentralized Web platform — the InterPlanetary File System (IPFS) — an open-source, content-addressable peer-to-peer network that provides distributed data storage and delivery. IPFS has millions of daily content retrievals and already underpins dozens of thirdparty applications. This paper evaluates the performance of IPFS by introducing a set of measurement methodologies that allow us to uncover the characteristics of peers in the IPFS network. We reveal presence in more than 2700 Autonomous Systems and 152 countries, the majority of which operate outside large central cloud providers like Amazon or Azure. We further evaluate IPFS performance, showing that both publication and retrieval delays are acceptable for a wide range of use cases. Finally, we share our datasets, experiences and lessons learned.
