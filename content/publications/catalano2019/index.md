---
# Publication title
title: "MonZa: Fast maliciously secure two party computation on Z_{2^k}"

# Website post date
# format YYYY-MM-DD
date: 2020-04-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "IACR International Conference on Practice and Theory of Public-Key Cryptography (PKC)"

# Venue Location
venue_location: "Edinburgh, Scotland"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2020-05-04

# DOI, if available
doi:

# Publication pdf, should be in the same folder
# Name it the same as the folder
resources:
  - src: catalano2019.pdf

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Dario Catalano"
  - "Mario Di Raimondo"
  - "Dario Fiore"
  - irene-giacomelli

# Zero or more of the areas in content/research/areas
areas:
  - cryptography

# Zero or more of the groups in content/research/groups (should match author membership)
groups:
  - cryptonet

# Not generally used
# featured: false

# Not generally used
#categories:
#  -

# Icon must match a known icon in /static/icons
# links:
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

In this paper we present a new 2-party protocol for secure computation over rings of the form Z2k. As many recent efficient MPC protocols supporting dishonest majority, our protocol consists of a heavier (input-independent) pre-processing phase and a very efficient online stage. Our offline phase is similar to BeDOZa (Bendlin et al. Eurocrypt 2011) but employs Joye-Libert (JL, Eurocrypt 2013) as underlying homomorphic cryptosystem and, notably, it can be proven secure without resorting to the expensive sacrifice step. JL turns out to be particularly well suited for the ring setting as it naturally supports Z2k as underlying message space. Moreover, it enjoys several additional properties (such has valid ciphertext-verifiability and efficiency) that make it a very good fit for MPC in general. As a main technical contribution we show how to take advantage of all these properties (and of more properties that we introduce in this work, such as a ZK proof of correct multiplication) in order to design a two-party protocol that is efficient, fast and easy to implement in practice. Our solution is particularly well suited for relatively large choices of k (e.g., k=128), but compares favorably with the state of the art solution of SPDZ2k (Cramer et al. Crypto 2018) already for the practically very relevant case of k=64.
