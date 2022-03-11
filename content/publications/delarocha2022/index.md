---
# Publication title
title: "Hierarchical consensus: A horizontal scaling framework for blockchains"

# Website post date
# format YYYY-MM-DD
date: 2022-03-11

# Publish from this date (defaults to date)
#publishDate: 2022-03-11

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
  - "Lefteris Kokoris-Kogias"
  - jorge-soares
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

We present the Filecoin Hierarchical Consensus framework, which aims to overcome the throughput challenges of blockchain consensus by horizontally scaling the network. Unlike traditional sharding designs, based on partitioning the state of the network, our solution centers on the concept of subnets --which are organized hierarchically-- and can be spawned on-demand to manage new state.  Child subnets are firewalled from parent subnets, have their own specific policies, and run a different consensus algorithm, increasing the network capacity and enabling new applications. Moreover, they benefit from the security of parent subnets by periodically checkpointing state. In this paper, we introduce the overall system architecture, our detailed designs for cross-net transaction handling, and the open questions that we are still exploring.
