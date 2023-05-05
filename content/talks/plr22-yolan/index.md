---
# Talk title
title: "Timelock encryption based on drand"

# Website post date
# format YYYY-MM-DD
date: 2022-09-14

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: Protocol Labs Research Talks

# Venue link
venue_url:

# Venue date (defaults to date)
# format YYYY-MM-DD
# venue_date: 2022-10-27

# Venue location
venue_location: 

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
abstract: "The notion of timelock encryption was first introduced on the Cypherpunks mailing list in 1993 by the founder of the crypto-anarchist movement, Tim May, and to date, while there have been numerous attempts to tackle it, none have been deployed at scale, nor made available to be used in any practical way. We have recently changed this status-quo by releasing a free, open-source tool that can finally achieve the lofty goal of encrypting things that cannot be decrypted until a given time has come in meaningful ways with proper security guarantees. In this talk, we will discover how our practical instantiation is relying on an existing threshold network running to produce distributed randomness, drand. We rely on threshold cryptography and decentralization of trust to exploit the existing League of Entropy in order to achieve our goal. We will first recall what all of this means, we will then proceed to see how these building blocks allow us to deploy a practical timelock service."

---


{{< youtube Zgsv4LY0Sn0 >}}
