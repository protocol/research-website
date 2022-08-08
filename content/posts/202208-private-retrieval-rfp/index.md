---
# Blog post title
title: "Announcing RFP-014: the one with private retrieval"

# Website post date
# format YYYY-MM-DD
date: 2022-08-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - karola-kirsanow
  - will-scott

# If applicable
categories:
  - news
  - grants

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - distributed systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - network-research

# Not used
draft: false



---
Can we speak privately?

Unfortunately, our current options for interactive private communication are limited, hamstrung by their reliance on a single-trusted-origin data publication model, high latencies, and security vulnerabilities.

We think it  is possible to design a scalable system the doesn't sacrifice latency for privacy.

We know that there has been a lot of exciting work improving securty/privacy tradeoffs that has not yet been translated into working technology, and we believe that there is great potential for further progress.

This RFP solicits proposals to explore and develop viable mechanisms for reader-private communications: we intend to fund both both **research** leading to deployment-ready design sketches for private communication mechanisms as well as **development** activities implementing prototypes from existing  designs.

We are interested in funding projects which: 

- Explore new mechanisms for private communication (*e.g.* with cryptographic, information theoretic, or statistical bases)
- Relax the traditional ‘web’ assumptions of a single origin to engage with the possibilities of pre-distributed CDN or content-addressed data.
- Prototype the use of novel network-layer privacy technologies in real systems.

Accepted proposals will receive up to **$300,000** in funding. All work must be released under an open-source license and may find usage in other systems. The first phase of this call will close on **1 March 2023** or earlier if awarded.

We encourage interested researchers to reach out to us  by visiting #private-retrieval in the [Lodestar discord](https://discord.gg/lodestar-network-goods)  For formal questions, please email [research@protocol.ai](mailto:research@protocol.ai). Submit your proposal using our application management system at [grants.protocol.ai](https://grants.protocol.ai/).