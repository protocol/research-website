---
# Publication title
title: Encryption to the future: A paradigm for sending secret messages to future (anonymous) committees

# Website post date
# format YYYY-MM-DD
date: 2022-09-30

# Publish from this date (defaults to date)
# publishDate: 2022-09-30

# Venue Name
venue:

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - report

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - matteo-campanelli
  - "Bernardo David"
  - "Hamidreza Khoshakhlagh"
  - "Anders Konring"
  - "Jesper Buus Nielsen"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: false

# Publication pdf, should be in the same folder
# No need to fill this out; just name the file the same as the folder
#resources:
#  - src: publication-source.pdf

# Not generally used
# featured: false

# Not generally used
#categories:
#  -

# Icon must match a known icon in /static/icons
# links:
#  - name: Publisher
#    url: link to publisher
#    icon: link
#  - name: Download PDF
#    url: external pdf url
#    icon: download

---

A number of recent works have constructed cryptographic protocols with flavors of adaptive security by having a randomly-chosen anonymous committee run at each round. Since most of these protocols are stateful, transferring secret states from past committees to future, but still unknown, committees is a crucial challenge. Previous works have tackled this problem with approaches tailor-made for their specific setting, which mostly rely on using a blockchain to orchestrate auxiliary committees that aid in state hand-over process. In this work, we look at this challenge as an important problem on its own and initiate the study of Encryption to the Future (EtF) as a cryptographic primitive. First, we define a notion of an EtF scheme where time is determined with respect to an underlying blockchain and a lottery selects parties to receive a secret message at some point in the future. While this notion seems overly restrictive, we establish two important facts: 1. if used to encrypt towards parties selected in the ``far future'', EtF implies witness encryption for NP over a blockchain; 2. if used to encrypt only towards parties selected in the ``near future'', EtF is not only sufficient for transferring state among committees as required by previous works, but also captures previous tailor-made solutions. To corroborate these results, we provide a novel construction of EtF based on witness encryption over commitments (cWE), which we instantiate from a number of standard assumptions via a construction based on generic cryptographic primitives. Finally, we show how to use ``near future'' EtF to obtain ``far future'' EtF with a protocol based on an auxiliary committee whose communication complexity is \emph{independent} of the length of plaintext messages being sent to the future.
