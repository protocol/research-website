---
title: Single secret leader election

# Conference date
date: 2020-01-15
# Website date (defaults to date)
# publishDate: 2020-01-15

# Publication Name (not used)
journal:

# Venue Name
venue: ACM Advances in Financial Technologies 2020

# Venue Location
venue_location:

venue_date: 2020-10-21

# Digital Object Identifier
doi:

resources:
  - src: boneh2020.pdf
  - src: cite.bib

# Taxonomies:
# use only one!
publication_types:
  - conference-paper

authors:
  - "Dan Boneh"
  - "Saba Eskandarian"
  - "Lucjan Hanzlik"
  - nicola-greco

tags:
  -

categories:
  -

areas:
  - cryptography

groups:
  - cryptonet

featured: false

---

In a Single Secret Leader Election (SSLE), a group of participants aim to randomly choose exactly one leader from the group with the restriction that the identity of the leader will be known to the chosen leader and nobody else. At a later time, the elected leader should be able to publicly reveal her identity and prove that she has won the election. The election process itself should work properly even if many registered users are passive and do not send any messages. Among the many applications of SSLEs, their potential for enabling more efficient proof-of-stake based cryptocurrencies have recently received increased attention.

This paper formally defines SSLE schemes and presents three constructions that provide varying security and performance properties. First, as an existence argument, we show how to realize an ideal SSLE using indistinguishability obfuscation. Next, we show how to build SSLE from low-depth threshold fully homomorphic encryption (TFHE) via a construction which can be instantiated with a circuit of multiplicative depth as low as 10, for realistically-sized secret leader elections. Finally, we show a practical scheme relying on DDH that achieves a slightly relaxed notion of security but which boasts extremely lightweight computational requirements.
