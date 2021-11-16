---
# Publication title
title: "Winkle: foiling long-range attacks in proof-of-stake systems"

# Website post date
# format YYYY-MM-DD
date: 2020-10-21

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "AFT '20: 2nd ACM Conference on Advances in Financial Technologies"

# Venue Location
venue_location: New York, NY, USA

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2020-10-21

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - sarah-azouvi
  - "George Danezis"
  - "Valeria Nikolaenko"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

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

Winkle protects any validator-based byzantine fault tolerant consensus mechanisms, such as those used in modern Proof-of-Stake
blockchains, against long-range attacks where old validators’ signature keys get compromised. Winkle is a decentralized secondary
layer of client-based validation, where a client includes a single additional field into a transaction that they sign: a hash of the
previously sequenced block. The block that gets a threshold of signatures (confirmations) weighted by clients’ coins is called a “confirmed”
checkpoint. We show that under plausible and flexible security assumptions about clients the confirmed checkpoints can not be
equivocated. We discuss how client key rotation increases security, how to accommodate for coins’ minting and how delegation
allows for faster checkpoints. We evaluate checkpoint latency experimentally using Bitcoin and Ethereum transaction graphs, with
and without delegation of stake.
