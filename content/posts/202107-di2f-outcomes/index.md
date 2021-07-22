---
# Blog post title
title: Decentralising the Internet with IPFS and Filecoin (DI2F) — a report from the trenches

# Website post date
# format YYYY-MM-DD
date: 2021-07-21

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - jorge-soares
  - yiannis-psaras

# If applicable
categories:
  - news
  - events

# Zero or more of the areas in content/areas
areas:
  - networking
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab


# Not used
draft: false

---

The first edition of the DI2F Workshop, which took place on 21 June 2021 and focused on decentralising the Internet with IPFS and Filecoin, has been a phenomenal success! We received more than 20 submissions, out of which 11 were selected to be presented on the day. We were joined by more than 40 participants who were very active in the discussions and gave a vibrant atmosphere to the workshop. The session chairs did a great job of asking the right questions and triggered extensive discussion around the presentations.

The contributions covered a wide range of topics:
- Protocol extensions that are central to the operation of IPFS, such as the DHT and pubsub
- Services built on top of the protocol stack, such as VPNs and federated learning system
- Architecture extensions to enable computing and Solid on top of IPFS
- Decentralized identifiers as a first-class primitive for IPFS content and services

[The program](https://networking.ifip.org/2021/workshops/di2f-decentralising-the-internet-with-ipfs-and-filecoin) also featured an insightful keynote speech from Thibault Maunier, who walked us through the challenges and opportunities of building CDN-scale decentralised technology, as seen by Cloudflare’s deployment of decentralised gateways and name resolvers. Protocol Labs' Zixuan Zhang gave an invited talk during which he walked us through the nuts and bolts of Filecoin’s Storage Economy and the rules that guarantee its stability and robustness.

The hands-on session preceding the workshop featured:
- Alfonso de la Rocha (Protocol Labs), who presented [IPFS Probe](https://github.com/protocol/beyond-bitswap/tree/master/testbed/probe), an experimental tool to play with basic IPFS commands in a testbed environment, interact with other peers, and test and debug improvements to protocols.
Sebastian Henningsen (Weizenbaum Institute, Berlin), who presented an [IPFS Crawler](https://github.com/wiberlin/ipfs-crawler) that can be used to get a better understanding of the size and structure of the IPFS network.
- Spyros Voulgaris (AUEB, Greece), who presented an [IPFS DHT Visualization tool](https://github.com/mmlab-aueb/IPFS), which shows the lifetime of a request in the IPFS network and is very useful tool to understand the internals of the Distributed Hash Table (DHT) by looking at the sequence of steps that a request takes in the IPFS network.

You can find these and other resources in the Workshop’s Handbook.

Last, but certainly not least, we’re happy to announce the winners of the Hackathon Competition, which ran for the three weeks following the workshop:
- Dennis Trautwein, who built the [Nebula Crawler and Monitoring system](https://github.com/dennis-tra/nebula-crawler). Nebula not only crawls the network but also monitors the liveness and availability of peers in the IPFS and Filecoin networks by periodically dialing into every peer in the network — a really useful tool for the Web3.0 stack! There is an extra explainer in the libp2p discussion forum [here](https://discuss.libp2p.io/t/nebula-libp2p-dht-crawler/950).
- Navin Keizer and Puneet Bindlish, who built [Deece](https://github.com/navinkeizer/Deece), an open, collaborative, and decentralised search engine for IPFS. In Deece, any node running the client is able to crawl content on IPFS and add this to the index, which itself is stored in a decentralised manner on IPFS. This allows for decentralised search on decentralised content. A gateway to access functionality is implemented at www.deece.nl/web/. This is another extremely useful tool that has been missing from the IPFS ecosystem!

The winning projects will each receive a $2000 prize, half of which paid in Filecoin. Congratulations to both teams!

We’re looking forward to next year’s event! [Sign up for our newsletter](https://mailchi.mp/protocol/research-newsletter-signup) to stay up to date. If you’re working on Web 3.0 technologies powered by IPFS, Filecoin and decentralised Internet services in general, check out our [Open Research Problems](https://github.com/protocol/ResNetLab), get in touch, and join our research community!
