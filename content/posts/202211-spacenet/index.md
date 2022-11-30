---
# Blog post title
title: "The Filecoin Spacenet goes live"

# Website post date
# format YYYY-MM-DD
date: 2022-11-30

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - jorge-soares

# If applicable
categories:
  - news
  - events

# If applicable
tags:


# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Not used
draft: false

---

For all of the past year, our team at [ConsensusLab](/groups/consensuslab) has been hard at work pushing the boundaries of Filecoin scalability and devising a framework for horizontal scaling that allows for the seamless spawning of interoperable subnets, as well as a reference implementation of a consensus algorithm suitable for running said subnets.

We are pleased to announce that, as of Monday, the first phase of the [Interplanetary Consensus (IPC)](https://github.com/protocol/ConsensusLab/blob/main/specs/hierarchical_consensus.md) project is available for public testing, with the launch of the Filecoin Spacenet. Spacenet is a new test network for IPC, which will initially provide a platform for builders to experiment with [Trantor consensus](https://github.com/protocol/ConsensusLab/blob/main/specs/trantor.md).

[(F)EVM](https://fvm.filecoin.io/) support is expected in the coming weeks, unleashing the potential for novel applications and use cases that require lower latency than provided by Filecoin mainnet consensus, and support for subnets will be added next year, enabling elastic capacity and paving the road for deployment in the main network.

We invite you to visit the newly launched [Scaling Filecoin website (**fil.space**)](https://fil.space/), as well as the [Spacenet repository](https://github.com/consensus-shipyard/spacenet). If you need funds, head to the [Spacenet faucet](https://spacenet.consensus.ninja/). Please [reach out](https://forms.gle/b1bKWonBEsnCS7pv8) if you'd like to get involved, be it by operating a node, deploying an application, building tooling, or anything else! Development discussions take place on #spacenet ([Filecoin Slack](https://filecoin.io/slack)).

Oh, one last note! If you'd like to learn more about IPC and Trantor, the [recordings from the recent ConsensusLab Summit](https://www.consensuslabsummit.io/videos) are now available, and cover these and other projects in detail.
