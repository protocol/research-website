---
# Publication title
title: "Decentralized hole punching"

# Website post date
# format YYYY-MM-DD
date: 2022-09-28

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: DINPS 2022

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
  - marten-seemann
  - "Max Inden"
  - "Dimitris Vyzovitis"

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

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

We present a decentralized hole punching mechanism built into the peer-to-peer networking library libp2p. Hole punching is crucial for peer-to-peer networks, enabling each participant to directly communicate to any other participant, despite being separated by firewalls and NATs. The decentralized libp2p hole punching protocol leverages protocols similar to STUN (RFC 8489), TURN (RFC 8566) and ICE (RFC 8445), without the need for any centralized infrastructure. Specifically, it doesn’t require any previous knowledge about network participants other than at least one (any arbitrary) node to bootstrap peer discovery. The key insight is that the protocols used for hole punching, namely address discovery and relaying protocols, can be built such that their resource requirements are negligible. This makes it feasible for any participant in the network to run these, thereby enabling the coordination of hole punch attempts, assuming that at least a small fraction of nodes is not located behind a firewall or a NAT.
