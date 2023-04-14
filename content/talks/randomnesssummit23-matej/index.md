---
# Talk title
title: "Scalable asynchronous randomized byzantine agreement"

# Website post date
# format YYYY-MM-DD
date: 2023-03-30

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: Randomness Summit 2023

# Venue link
venue_url: https://lu.ma/randomness-summit-tokyo

# Venue date (defaults to date)
# format YYYY-MM-DD
# venue_date: 2022-10-27

# Venue location
venue_location: Tokyo, Japan

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - henrique-moniz
  - matej-pavlovic

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Name the cover image featured.jpg
resources:
  - title: featured-image
    src: featured.png

# Short abstract
# Describe talk here
abstract: "Most algorithms solving Byzantine agreement that are implemented and used in practice today rely on some form of synchrony assumptions. Especially when used in blockchain systems, where scalability is of great importance, purely asynchronous solutions suffer from high message complexity or strong assumptions that weaken the adversary. In particular, an adaptive adversary (roughly translating to DoS attacks in practice) is difficult to overcome without any synchrony assumptions while also keeping message complexity low. We are exploring an idea targeting exactly such an algorithm. Starting from Bracha’s algorithm for randomized Byzantine agreement with quadratic message complexity, we derive a protocol for multi-valued agreement with sub-quadratic message complexity."

---


{{< youtube ktdc22teZxs >}}
