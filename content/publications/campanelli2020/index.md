---
title: Vector Commitment Techniques and Applications to Verifiable Decentralized Storage

# Website post date
date: 2020-02-17
# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Publication Name (not used)
# journal:

# Venue Name
venue:

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
venue_date:

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
  -

areas:
  - cryptography
  - distributed-systems

groups:
  - filecoin-research

featured: false

# Icon must match a known icon in /static/icons
# links:
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

Vector commitments with subvector openings (SVC) [Lai-Malavolta and Boneh-Bunz-Fisch, CRYPTO'19] allow one to open a committed vector at a set of positions with an opening of size independent of both the vector's length and the number of opened positions.

We propose a new SVC construction in groups of unknown order that, similarly to that of Boneh et al. has constant-size public parameters, commitments and openings, but in addition enjoys new features. First, our SVC has incremental aggregation: one can merge openings in a succinct way an unbounded number of times. Thanks to incremental aggregation we obtain: faster generation of openings via preprocessing, and a method to generate openings in a distributed way. Second, we propose efficient arguments of knowledge of subvector openings for our SVC, which immediately yields a keyless proof of storage with compact proofs.

Finally, we introduce and contruct Verifiable Decentralized Storage (VDS), a cryptographic primitive that allows to check the integrity of a file stored by a network of nodes in a distributed and decentralized way.
