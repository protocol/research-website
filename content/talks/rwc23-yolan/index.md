---
# Talk title
title: "tlock: Practical timelock encryption based on threshold BLS"

# Website post date
# format YYYY-MM-DD
date: 2023-03-29

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: Real World Crypto 23

# Venue link
venue_url:

# Venue date (defaults to date)
# format YYYY-MM-DD
# venue_date: 2022-10-27

# Venue location
venue_location: Tokyo, Japan

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - yolan-romailler

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Name the cover image featured.jpg
resources:
  - title: featured-image
    src: featured.png

# Short abstract
# Describe talk here
abstract: "We present a practical construction and implementation of timelock encryption, in which a ciphertext is guaranteed to be decryptable only after some specified time has passed. We employ an existing threshold network, the League of Entropy, implementing threshold BLS in the context of Boneh and Franklin's identity-based encryption (IBE) At present this threshold network broadcasts BLS signatures over each round number, equivalent to the current time interval, and as such can be considered a decentralised key holder periodically publishing private keys for the IBE where identities are the round numbers. A noticeable advantage of this scheme is that only the encryptors and decryptors are required to perform any additional cryptographic operations; the threshold network can remain unaware of the TLE and does not have to change to support the scheme. We also release an open-source implementation of our scheme and a live web page that can be used in production now relying on the existing League of Entropy network acting as a distributed public randomness beacon service using threshold BLS signatures."

---


{{< youtube Xh849Ij3lhU >}}
