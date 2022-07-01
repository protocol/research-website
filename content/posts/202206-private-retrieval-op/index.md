---
# Blog post title
title: New open problems in private data retrieval 

# Website post date
# format YYYY-MM-DD
date: 2022-06-30

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - will-scott
  - karola-kirsanow

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
  - network-goods

# Not used
draft: false



---

*tl;dr: We'd like to develop additional protocol-compatible primitives allowing users to interact privately with Web3 content.*


Central to the Web3 vision of an open, permissionless, and decentralized internet is the ability of parties to interact directly and *privately* with each other while retaining ownership of their data. 

We believe that the creation of more viable mechanisms for private communications, as part of a focused research effort on privacy-preserving communication, will lead to better options for reader private access to the content stored in the interplanetary network and content-addressed-data more broadly.

Right now, the strongest privacy guarantees for accessing content stored on IPFS or Filecoin come through a gateway: only the gateway learns the data requestor's IP address, but the entire network can observe several  aspects of metadata associated with the request. 

We'd like to implement trustless and intermediary-free access to Web3 data where communication is low latency and reader-private, but we are not aware of a present system design that meets all of these criteria.

So we're posting an [Open Problem](https://github.com/protocol/research) to stimulate research and development of interactive private communication mechanisms -- you can  read the full details in the Open Problem Statement posted in the public PL research github repo. While we haven't found a full solution yet, the Open Problem Statement cites some of the exciting research in this area that we believe will be a useful touchpoint in creating novel designs.

One welcome response to an Open Problem Statement is a *better-formulated problem*: if you have ideas about how to clarify or refactor the problem or would like to suggest additional designs or projects in the space that we should investigate, please join the [discussion](https://github.com/protocol/research/discussions/63). 

We plan to develop this open problem into an RFP and are excited to sponsor research projects within its scope -- stay tuned for more details!


<br> </br>
<br> </br>

<center>{{< figure src="/images/network-goods/networkgoods_primary_color.png" alt="Network Goods" link="/groups/network-goods/" width="100px" >}}</center>

<center style=font-size:11pt><i> Do you want to be part of the conversation? Join us on our Discord <a href="https://discord.gg/lodestar-network-goods">(invite link)</a>, and follow the PL Research Twitter <a href="https://twitter.com/ProtoResearch"> @Protoresearch</a>. Active researchers may also be interested in our <a href="https://github.com/protocol/research-grants"> open RFPs </a> and other<a href="https://grants.protocol.ai"> funding opportunities. </a></i></center>
