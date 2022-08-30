---
title: "Encryption to the future: A paradigm for sending secret messages to future (anonymous) committees"

# Website post date
date: 2022-08-30
# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Publication Name (not used)
# journal: (not used)

# Venue Name
venue: Asiacrypt 2022

# Venue Location
venue_location: Taipei, Taiwan

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
venue_date: 2022-12-05

# Digital Object Identifier
doi:

resources:
  - src: campanelli2022c.pdf

# Taxonomies:
# delete all but one
publication_types:
  - conference-paper

authors:
  - matteo-campanelli
  - "Bernardo David"
  - "Hamidreza Khoshakhlagh"
  - "Anders Konring"
  - "Jesper Buus Nielsen"

tags:
  -

categories:
  - 

areas:
  - cryptography

groups:
  - cryptonet

featured: false

# Icon must match a known icon in /static/icons
# links:
#  - name: Publisher
#    url: link to publisher
#    icon: link
#  - name: Download PDF
#    url: external pdf url
#    icon: download
---

A number of recent works have constructed cryptographic protocols with flavors of adaptive security by having a randomly-chosen anonymous committee run at each round. Since most of these protocols are stateful, transferring secret states from past committees to future, but still unknown, committees is a crucial challenge. Previous works have tackled this problem with approaches tailor-made for their specific setting, which mostly rely on using a blockchain to orchestrate auxiliary committees that aid in state hand-over process. In this work, we look at this challenge as an important problem on its own and initiate the study of Encryption to the Future (EtF) as a cryptographic primitive. First, we define a notion of a _non-interactive_ EtF scheme where time is determined with respect to an underlying blockchain and a lottery selects parties to receive a secret message at some point in the future. While this notion seems overly restrictive, we establish two important facts: 1. if used to encrypt towards parties selected in the "far future", EtF implies witness encryption for NP over a blockchain; 2. if used to encrypt only towards parties selected in the "near future", EtF is not only sufficient for transferring state among committees as required by previous works, but also captures previous tailor-made solutions. To corroborate these results, we provide a novel construction of EtF based on witness encryption over commitments (cWE), which we instantiate from a number of standard assumptions via a construction based on generic cryptographic primitives. Finally, we show how to use "near future" EtF to obtain "far future" EtF with a protocol based on an auxiliary committee whose communication complexity is _independent_ of the length of plaintext messages being sent to the future.

