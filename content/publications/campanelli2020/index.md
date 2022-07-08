---
title: Incrementally aggregatable vector commitment techniques and applications to verifiable decentralized storage

# Website post date
date: 2020-12-05
# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Publication Name (not used)
# journal:

# Venue Name
venue: Advances in Cryptology – ASIACRYPT 2020

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
venue_date: 2020-12-05

# Digital Object Identifier
doi:

resources:
  - src: campanelli2020.pdf
  - src: cite.bib

# Taxonomies:
# delete all but one
publication_types:
  - report

authors:
  - "Matteo Campanelli"
  - "Dario Fiore"
  - nicola-greco
  - "Dimitris Kolonelos"
  - luca-nizzardo

tags:
  -

categories:
  - conference paper

areas:
  - cryptography
  - distributed-systems

groups:
  - cryptonet

featured: false

# Icon must match a known icon in /static/icons
# links:
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

Vector commitments with subvector openings (SVC) [Lai-Malavolta, Boneh-Bunz-Fisch; CRYPTO’19] allow one to open a committed vector at a set of positions with an opening of size independent of both the vector’s length and the number of opened positions.

We continue the study of SVC with two goals in mind: improving their efficiency and making them more suitable to decentralized settings. We address both problems by proposing a new notion for VC that we call incremental aggregation and that allows one to merge openings in a succinct way an unbounded number of times. We show two applications of this property. The first one is immediate and is a method to generate openings in a distributed way. The second application is an algorithm for faster generation of openings via preprocessing.

We then proceed to realize SVC with incremental aggregation. We provide two constructions in groups of unknown order that, similarly to that of Boneh et al. (which supports aggregating only once), have constant-size public parameters, commitments and openings. As an additional feature, for the first construction we propose efficient arguments of knowledge of subvector openings which immediately yields a keyless proof of storage with compact proofs.

Finally, we address a problem closely related to that of SVC: storing a file efficiently in completely decentralized networks. We introduce and construct verifiable decentralized storage (VDS), a cryptographic primitive that allows to check the integrity of a file stored by a network of nodes in a distributed and decentralized way. Our VDS constructions rely on our new vector commitment techniques.
