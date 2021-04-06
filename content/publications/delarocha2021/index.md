---
# Publication title
title: "Accelerating content routing with Bitswap: A multi-path file transfer protocol in IPFS and Filecoin"

# Website post date
# format YYYY-MM-DD
date: 2021-01-14

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
  - alfonso-delarocha
  - david-dias
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

Bitswap   is   a   Block   Exchange   protocol   designed for  P2P  Content  Addressable  Networks.  It  leverages  merkle-linked graphs in order to parallelize retrieval and verify content integrity. Bitswap is being used in the InterPlanetary File System architecture  as  the  main  content  exchange  protocol,  as  well  as in  the  Filecoin  network  as  part  of  the  block  synchronisation protocol. In this work, we present Bitswap’s baseline design and then  apply  several  new  extensions  with  the  goal  of  improving Bitswap’s  efficiency and  efficacy  and  minimizing  its  bandwidth  fingerprint. Most importantly, our extensions result in a substantial increase to the protocol’s content discovery rate. This is achieved by  using  the  wealth  of  information  that  the  protocol  acquires from  the  content  routing  subsystem  to  make  smarter  decisions on  where  to  fetch  the  content  from.
