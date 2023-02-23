---
# Publication title
title: "Enriching Kademlia by partitioning"

# Website post date
# format YYYY-MM-DD
date: 2022-12-13

# Publish from this date (defaults to date)
#publishDate: 2022-03-11

# Venue Name
venue: DINPS 22

# Venue Location
venue_location: Bologna, Italy

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-07-10

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper


# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "João Monteiro"
  - "Pedro Ákos Costa"
  - "João Leitão"
  - alfonso-delarocha
  - yiannis-psaras


# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab
  - probelab

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: false

# Publication pdf, should be in the same folder
# No need to fill this out; just name the file the same as the folder
#resources:
#  - src: delarocha2021a.pdf

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

Decentralizing the Web is becoming an increasingly interesting endeavor that aims at improving user security and privacy as well as providing guaranteed ownership of content. One such endeavor that pushes towards this reality, is Protocol Labs' Inter-Planetary File System (IPFS) network, that provides a decentralized large scale file system to support the decentralized Web. To achieve this, the IPFS network leverages the Kademlia DHT to route and store pointers to content stored by network members (i.e., peers). However, due to the large number of network peers, content, and accesses, the DHT routing needs to be efficient and quick to enable a decentralized web that is competitive.

In this paper, we present work in progress that aims at improving the Kademlia DHT performance through the manipulation of DHT identifiers by adding prefixes to identifiers. With this, we are able to bias the DHT topological organization towards locality (which can be either geographical or applicational), which creates partitions in the DHT and enables faster and more efficient query resolution on local content. We designed prototypes that implement our proposal, and performed a first evaluation of our work in an emulated network testbed composed of 5000 nodes. Our results show that our proposal can benefit the DHT look up on data with locality with minimal overhead.
