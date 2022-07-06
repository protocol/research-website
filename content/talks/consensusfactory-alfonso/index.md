---
# Talk title
title: "Hierarchical consensus: A horizontal scaling framework for blockchains"

# Website post date
# format YYYY-MM-DD
date: 2022-06-24

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: ConsensusFactory

# Venue link
venue_url: https://consensus-factory.io/

# Venue date (defaults to date)
# format YYYY-MM-DD
venue_date: 2022-06-22

# Venue location
venue_location:

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - alfonso-delarocha

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Name the cover image featured.jpg
resources:
  - title: featured-image
    src: featured.jpg

# Short abstract
# Describe talk here
abstract: "We present the Filecoin Hierarchical Consensus framework, which aims to overcome the throughput challenges of blockchain consensus by horizontally scaling the network. Unlike traditional sharding designs, based on partitioning the state of the network, our solution centers on the concept of subnets –which are organized hierarchically– and can be spawned on-demand to manage new state. Child subnets are firewalled from parent subnets, have their own specific policies, and run a different consensus algorithm, increasing the network capacity and enabling new applications. Moreover, they benefit from the security of parent subnets by periodically checkpointing state. In this paper, we introduce the overall system architecture, our detailed designs for cross-net transaction handling, and the open questions that we are still exploring."

---


{{< youtube mw1pmzHe9ms >}}
