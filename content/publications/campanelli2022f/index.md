---
# Publication title
title: Structure-preserving compilers from new notions of obfuscations

# Website post date
# format YYYY-MM-DD
date: 2022-11-01

# Publish from this date (defaults to date)
# publishDate: 2022-11-01

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
  - "Danilo Francati"
  - "Claudio Orlandi"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -  cryptonet

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

The dream of software obfuscation is to take programs, as they are, and then compile them into obfuscated versions that hide their secret inner workings. In this work we investigate notions of obfuscations weaker than virtual black-box (VBB) but which still allow obfuscating
cryptographic primitives preserving their original functionalities as much as possible. In particular we propose two new notions of obfuscations, which we call oracle-differing-input obfuscation (odiO) and oracle-indistinguishability obfuscation (oiO). In a nutshell, odiO is a natural strengthening of differing-input obfuscation (diO) and allows obfuscating programs for which it is hard to find a differing-input when given only oracle access to the programs. An oiO obfuscator allows to obfuscate programs that are hard to distinguish when treated as oracles.
We then show applications of these notions, as well as positive and negative results around them. A few highlights include:
– Our new notions are weaker than VBB and stronger than diO.
– As it is the case for VBB, we show that there exist programs that cannot be obfuscated with odiO or oiO.
– Our new notions allow to compile several flavours of secret key primitives (e.g., SKE, MAC, designated verifier NIZK) into their public key equivalent (e.g., PKE, signatures, publicly verifiable NIZK) while preserving one of the algorithms of the original scheme (function-preserving), or the structure of their outputs (format-preserving).
