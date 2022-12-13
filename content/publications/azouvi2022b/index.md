---
# Publication title
title: "Pikachu: Securing PoS blockchains from long-range attacks by checkpointing into Bitcoin PoW using Taproot"

# Website post date
# format YYYY-MM-DD
date: 2022-12-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "ConsensusDay 22"

# Venue Location
venue_location: "Los Angeles, CA, USA"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-11-07

# DOI, if available
doi: 10.1145/3560829.3563563

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
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

Blockchain systems based on a reusable resource, such as proof-of-stake (PoS), provide weaker security guarantees than those based on proof-of-work. Specifically, they are vulnerable to long-range attacks, where an adversary can corrupt prior participants in order to rewrite the full history of the chain. To prevent this attack on a PoS chain, we propose a protocol that checkpoints the state of the PoS chain to a proof-of-work blockchain such as Bitcoin. Our checkpointing protocol hence does not rely on any central authority. Our work uses Schnorr signatures and leverages Bitcoin recent Taproot upgrade, allowing us to create a checkpointing transaction of constant size. We argue for the security of our protocol and present an open-source implementation that was tested on the Bitcoin testnet.
