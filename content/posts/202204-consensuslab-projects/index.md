---
# Blog post title
title: The first graduating class of ConsensusLab projects

# Website post date
# format YYYY-MM-DD
date: 2022-04-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - sarah-azouvi
  - alfonso-delarocha
  - denis-kolegov
  - jorge-soares  


# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Not used
draft: false

---

When ConsensusLab launched last year, we published a roadmap covering our first 18 months. We are still working towards that same [roadmap](https://app.zenhub.com/workspaces/consensuslab-60f84a7fa2395a0011e4134c/roadmap?invite=true), with minor adjustments over time to accommodate the changing landscape and externalities.

As we close Q1, we’re pleased to ship the first batch of completed projects, all coming to an end around this time.

#### 🎄 B1: Hierarchical Consensus MVP

We kicked off the B1 project at the end of 2021 with the aim of building an MVP of Hierarchical Consensus (HC), an architectural evolution that aims to overcome the throughput challenges of blockchain consensus by horizontally scaling the network. We are proud to have just completed this first project in the HC workstream and now have:

* An [MVP implementation of HC integrated into Eudico](https://github.com/filecoin-project/eudico/) (our fork of Lotus), with which you can run your own network with HC! You can spawn your own subnets with their own consensus protocols, send messages within a subnet as well as to other subnets, and even run executions using state hosted in multiple subnets with atomicity guarantees.
* [A paper](/publications/hierarchical-consensus-a-horizontal-scaling-framework-for-blockchains/) with a description of the architecture of the HC protocol (submitted to [DINPS’22](/sites/dinps/))
* [Eudico Garden](https://github.com/filecoin-project/eudico/tree/eudico/eudicogarden), a set of basic scripts to spawn your own deployment of Eudico in AWS
* [And lots of talks and demos!](https://github.com/protocol/ConsensusLab/issues/4)

#### ⚡ B2 (Pikachu): Checkpointing state onto Bitcoin

The aim of project Pikachu is to secure any blockchain based on a reusable resource (such as proof-of-space or proof-of-stake) by checkpointing it to the Bitcoin blockchain, thus leveraging the stronger security guarantees afforded by proof-of-work. Our solution leverages the recent Taproot update in Bitcoin and uses threshold multi-signature. We produced:

* [A proof-of-concept](https://github.com/filecoin-project/eudico/tree/B2-with-failure) working on the Eudico blockchain and checkpointing onto the Bitcoin testnet
* A [research paper](https://www.overleaf.com/read/vxqhmvfzgqkb) detailing the solution, arguing for its security and measuring its performance (to be submitted to [AFT'22](https://aft.acm.org/aft22/index.html))
* [And lots of talks and demos](https://github.com/protocol/ConsensusLab/issues/5)

#### 🌿 Y5: Tendermint BFT as a subnet consensus PoC

Y5 is a project about using a BFT-style consensus protocol in the "Consensus as a Service" model in a Filecoin HC subnet. Tendermint Core was chosen as such protocol, and is the first practical consensus implementation inside HC.  In this service model, an HC subnet running Tendermint consensus makes use of parallel Tendermint nodes that return ordered Filecoin messages.

* [A working implementation](https://github.com/filecoin-project/eudico/tree/eudico/chain/consensus/tendermint) of Tendermint as a subnet consensus mechanism, merged into mainline Eudico
* [And — you guessed it — talks and demos!](https://github.com/protocol/ConsensusLab/issues/14)

#### What's next?

We have a number of other ongoing lines of research, including the recently started [project Y3](https://github.com/protocol/consensuslab/issues/9), which will look at implementing [MirBFT](https://github.com/hyperledger-labs/mirbft) in Eudico, enabling its use in subnet consensus.

If you want to know more about ConsensusLab's work, visit our [GitHub repository](https://github.com/protocol/ConsensusLab/), where you'll find our [roadmap](https://app.zenhub.com/workspaces/consensuslab-60f84a7fa2395a0011e4134c/roadmap?invite=true), [projects](https://github.com/protocol/ConsensusLab/issues?q=is%3Aopen+is%3Aissue+label%3A%22%F0%9F%9A%A7+Project%22), and [discussions](https://github.com/protocol/ConsensusLab/discussions), or come talks to us in #consensus, in the [Filecoin Slack workspace](https://filecoin.io/slack).
