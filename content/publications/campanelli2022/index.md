---
title: "Witness-authenticated key exchange revisited: Improved models, simpler constructions, extensions to groups"

# Website post date
date: 2022-04-08
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
  - src: campanelli2022.pdf

# Taxonomies:
# delete all but one
publication_types:
  - report

authors:
  - matteo-campanelli
  - rosario-gennaro
  - "Kelsey Melissaris"
  - luca-nizzardo

tags:
  -

categories:
  - report

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

We revisit the notion of Witness Authenticated Key Exchange (WAKE) where a party can be authenticated through a generic witness to an NP statement. We point out shortcomings of previous definitions, protocols and security proofs in Ngo et al. (Financial Cryptography 2021) for the (unilaterally-authenticated) two-party case. In order to overcome these limitations we introduce new models and protocols, including the first definition in literature of group witness-authenticated key exchange. We provide simple constructions based on (succinct) signatures of knowledge. Finally, we discuss their concrete performance for several practical applications in highly decentralized networks.
