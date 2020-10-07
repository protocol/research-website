---
# Publication title
title: "GossipSub: Attack-resilient message propagation in the Filecoin and ETH2.0 networks"

# Website post date
# format YYYY-MM-DD
date: 2020-07-06

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
  - Dimitris Vyzovitis
  - Yusef Napora
  - Dirk McCormick
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
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

Permissionless blockchain environments necessitate the use of a fast and attack-resilient message propagation protocol for Block and Transaction messages to keep nodes synchronised and avoid forks. We present GossipSub, a gossip-based pubsub protocol, which, in contrast to past pubsub protocols, incorporates resilience against a wide spectrum of attacks. Firstly, GossipSub's mesh construction implements an eager push model keeps the fan-out of the pubsub delivery low and balances excessive bandwidth consumption and fast message propagation throughout the mesh. Secondly, through gossip dissemination, GossipSub realises a lazy-pull model to reach nodes far-away or outside the mesh. Thirdly, through constant observation, nodes maintain a score profile for the peers they are connected to, allowing them to choose the most well-behaved nodes to include in the mesh. Finally, and most importantly, a number of tailor-made mitigation strategies designed specifically for these three components make GossipSub resilient against the most challenging Sybil-based attacks. We test GossipSub in a testbed environment involving more than 5000 VM nodes deployed on AWS and show that it stays immune to all considered attacks. GossipSub is currently being integrated as the main messaging layer protocol in the Filecoin and the Ethereum 2.0 (ETH2.0) blockchains.
