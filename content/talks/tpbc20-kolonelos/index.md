---
# Talk title
title: "Vector commitment techniques and applications to verifiable decentralized storage"

# Website post date
# format YYYY-MM-DD
date: 2020-07-01

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: Theory and Practice of Blockchains 2020

# Venue link
venue_url: https://eventum.upf.edu/51585/detail/theory-and-practice-of-blockchains-online-weekly-seminar-series-.html

# Venue date (defaults to date)
# format YYYY-MM-DD
venue_date:

# Venue location
venue_location:

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Matteo Campanelli"
  - "Dario Fiore"
  - nicola-greco
  - luca-nizzardo    
  - "Dimitris Kolonelos"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

# Name the cover image featured.jpg
resources:
  - title: featured-image
    src: featured.jpg

# Short abstract
# Describe talk here
abstract: "Vector commitments with subvector openings (SVC) allow one to open a committed vector at a set of positions with an opening of size independent of both the vector's length and the number of opened positions. We continue the study of SVC with two goals in mind: improving their efficiency and making them more suitable to decentralized settings. We address both problems by proposing a new notion for VC that we call incremental aggregation and that allows one to merge openings in a succinct way an unbounded number of times. This property leads to faster generation of openings via preprocessing and a method to generate openings in a distributed way. We then proceed to realize SVC with incremental aggregation. We provide two constructions in groups of unknown order. The first one, similarly to that of Boneh et al. (which supports only one-hop aggregation), has constant-size public parameters, commitments and openings. As an additional feature for this construction we propose efficient arguments of knowledge of subvector openings which immediately yields a keyless proof of storage with compact proofs. For our second construction, we propose an incremental aggregation method for the SVC of Lai-Malavolta; this has linear-size parameters but faster openings. Finally, we address a problem closely related to that of SVC: storing a file efficiently in completely decentralized networks. We introduce and construct verifiable decentralized storage (VDS), a cryptographic primitive that allows to check the integrity of a file stored by a network of nodes in a distributed and decentralized way. Our VDS constructions rely on our new vector commitment techniques."
---

{{< youtube MFJMWA0Pk1s >}}
