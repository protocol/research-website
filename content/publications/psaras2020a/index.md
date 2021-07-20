---
# Publication title
title: "Rewarding relays for decentralised NAT traversal using smart contracts"

# Website post date
# format YYYY-MM-DD
date: 2020-10-11

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: Mobihoc '20

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
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Navin V. Keizer"
  - "Onur Ascigil"
  - yiannis-psaras
  - "George Pavlou"

# Zero or more of the areas in content/areas
areas:
  - distributed systems
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

Traversing NAT’s remains a big issue in P2P networks, and many of
the previously proposed solutions are incompatible with truly 
decentralised emerging applications. Such applications need a 
decentralised NAT traversal solution without trusted centralised servers.

In this paper we present a decentralised, relay-based NAT traversal 
system, where any reachable node is able to assist an unreachable
node in NAT traversal. Smart contracts on the Ethereum blockchain
are used to ensure fair rewards. Besides !nancial incentives, a 
reputation system based on transactions on-chain is used to mitigate
against malicious behaviour, and guide peer discovery.

Evaluation of our system shows that a combination of historic
performance metrics leads to an optimal scoring function, that the
system takes little time to reach stability from inception, and that
the system is resilient against various attacks. Implementation of the
smart contract shows that the cost for participants is manageable.
