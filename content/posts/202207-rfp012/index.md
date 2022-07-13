---
# Blog post title
title: "The Pikachu RFP: Checkpointing Filecoin onto Bitcoin"

# Website post date
# format YYYY-MM-DD
date: 2022-07-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
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

Blockchains based on a reusable resource (such as proof-of-stake or proof-of-space) are not as secure as those based on proof-of-work. Specifically, they are vulnerable to long-range attacks (LRA), where an adversary can create a long fork very cheaply.

With [Project Pikachu](https://github.com/protocol/ConsensusLab/issues/5), we proposed a checkpointing mechanism that allows Filecoin to leverage the security of proof-of-work by anchoring state onto the Bitcoin blockchain. In the case of long-range attacks, the Bitcoin chain can be used to determine the honest chain. In short, we came up with a design that leverages Schnorr threshold signatures supported by the 2021 Bitcoin Taproot upgrade.

However, our prototype solution does not scale to the full Filecoin network, which features thousands of miners/validators. We're therefore launching a new **funding programme** to scale checkpointing to large blockchain networks. Under [RFP-012](https://github.com/protocol/research-grants/blob/master/RFPs/rfp-012-checkpointing-fil-into-btc.md), we invite proposals to address checkpointing scalability, including:
* Non-interactive DKG schemes
* Weighted threshold DKG and Schnorr signing schemes
* Parallelized/nested DKG schemes
* Efficient share aggregation mechanisms
* Sampling mechanisms

Accepted proposals will receive up to $100,000 in funding. The work, as usual, must be released under an open-source license and may find usage in other blockchains or systems. This call will close on on **September 30, 2022** or earlier if awarded.

We encourage interested researchers to reach out to us using our [discussion forum](https://github.com/protocol/ConsensusLab/discussions) or by visiting #consensus in the [Filecoin Slack workspace](https://filecoin.io/slack). For formal questions, please email research@protocol.ai. Submit your proposal using our application management system at [grants.protocol.ai](https://grants.protocol.ai/.).
