---
# Publication title
title: "tlock: Practical timelock encryption from threshold BLS"

# Website post date
# format YYYY-MM-DD
date: 2023-02-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

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
  - nicolas-gailly
  - "Kelsey Melissaris"
  - yolan-romailler

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

We present a practical construction and implementation of timelock encryption, in which a ciphertext is guaranteed to be decryptable only after some specified time has passed. We employ an existing threshold network, the League of Entropy, implementing threshold BLS [BLS01, B03] in the context of Boneh and Franklin's identity-based encryption (IBE). At present this threshold network broadcasts BLS signatures over each round number, equivalent to the current time interval, and as such can be considered a decentralised key holder periodically publishing private keys for the IBE where identities are the round numbers. A noticeable advantage of this scheme is that only the encryptors and decryptors are required to perform any additional cryptographic operations; the threshold network can remain unaware of the TLE and does not have to change to support the scheme. We also release an open-source implementation of our scheme and a live web page that can be used in production now relying on the existing League of Entropy network acting as a distributed public randomness beacon service using threshold BLS signatures.