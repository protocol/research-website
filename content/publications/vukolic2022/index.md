---
# Publication title
title: "Mir-BFT: Scalable and robust BFT for decentralized networks"

# Website post date
# format YYYY-MM-DD
date: 2022-10-24

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: Journal of Systems Research

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: "10.5070/SR32159278"

# Type of publication
# delete all but one
publication_types:
  - journal-article

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Chrysoula Stathakopoulou"
  - "David Tudor"
  - matej-pavlovic
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

This paper presents Mir-BFT, a robust Byzantine fault-tolerant (BFT) total order broadcast protocol aimed at maximizing throughput on wide-area networks (WANs), targeting deployments in decentralized networks, such as permissioned and Proof-of-Stake permissionless blockchain systems.

Mir-BFT is the first BFT protocol that allows multiple leaders to propose request batches independently (i.e., parallel leaders), while effectively precluding performance degradation due to request duplication by rotating the assignment of a partitioned request hash space to leaders. As this mechanism removes the single-leader bandwidth bottleneck and exposes a computation bottleneck related to authenticating clients even on a WAN, our protocol further boosts through-put using a client signature verification sharding optimization. Our evaluation shows that Mir-BFT outperforms state-of-the-art single-leader protocols and orders more than 60000 signed Bitcoin-sized (500-byte) transactions per second on a widely distributed setup (100 nodes, 1 Gbps WAN) with typical latencies of few seconds. Moreover, our evaluation exposes the impact of duplicate requests on parallel leader protocols which Mir-BFT eliminates. We also evaluate Mir-BFT un-der different crash and Byzantine faults, demonstrating its performance robustness.

Mir-BFT relies on classical BFT protocol constructs, which simplifies reasoning about its correctness. Specifically, Mir-BFT is a generalization of the celebrated and scrutinized PBFT protocol. In a nutshell, Mir-BFT follows PBFT “safety-wise”, with changes needed to accommodate novel features restricted to PBFT liveness.
