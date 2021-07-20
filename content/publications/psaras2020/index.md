---
# Publication title
title: "Merkle-CRDTs: Merkle-DAGs meet CRDTs"

# Website post date
# format YYYY-MM-DD
date: 2020-04-27

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
  - 


# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Hector Sanjuan"
  - "Samuli Poyhtari"
  - "Pedro Teixeira"
  - yiannis-psaras

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
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

We study Merkle-DAGs as a transport and persistence layer 
for Conflict-Free Replicated Data Types (CRDTs),
coining the term Merkle-CRDTs and providing an overview of
the different concepts, properties, advantages and limitations
involved. We show how Merkle-DAGs can act as logical clocks
giving Merkle-CRDTs the potential to greatly simplify the design
and implementation of convergent data types in systems with
weak messaging layer guarantees and a very large number of
replicas. Merkle-CRDTs can leverage highly scalable distributed
technologies like DHTs and PubSub algorithms running underneath 
to take advantage of the security and de-duplication properties of 
content-addressing. Examples of such contentoriented systems could 
include peer-to-peer content exchange and synchronisation applications 
between opportunistically connected mobile devices, IoT devices 
or user applications running in a web browser.
