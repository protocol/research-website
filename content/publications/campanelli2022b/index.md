---
title: "Linear-map vector commitments and their practical applications"

# Website post date
date: 2022-07-06
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
  - src: campanelli2022b.pdf

# Taxonomies:
# delete all but one
publication_types:
  - report

authors:
  - matteo-campanelli
  - anca-nitulescu
  - "Carla Ràfols"
  - "Alexandros Zacharakis"
  - "Arantxa Zapico"

tags:
  -

categories:
  - report

areas:
  - cryptography

groups:
  - cryptonet

featured: false

# Icon must match a known icon in /static/icons
# links:
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

Vector commitments (VC) are a cryptographic primitive that allow one to commit to a vector and then “open” some of its positions efficiently. Vector commitments are increasingly recognized as a central tool to scale highly decentralized networks of large size and whose content is dynamic. In this work, we examine the demands on the properties that an ideal vector commitment should satisfy in the light of the emerging plethora of practical applications and propose new constructions that improve the state-of-the-art in several dimensions and offer new tradeoffs. We also propose a unifying framework that captures several constructions and show how to generically achieve some properties from more basic ones. On the practical side, we focus on building efficient schemes that do not require new trusted setup (we can reuse existing ceremonies for pairing-based “powers of tau” run by real-world systems such as ZCash or Filecoin). Our (in-progress) implementation demonstrates that our work over-performs in efficiency prior schemes with same properties.
