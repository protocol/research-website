---
# Publication title
title: "What makes Fiat–Shamir zkSNARKs (updatable SRS) simulation extractable?"

# Website post date
# format YYYY-MM-DD
date: 2022-07-06

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: SCN 2022

# Venue Location
venue_location: Amalfi, Italy

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-09-12

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Chaya Ganeshe"
  - "Hamidreza Khoshakhlagh"
  - "Markulf Kohlweiss"
  - anca-nitulescu
  - "Michal Zajac"

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

We show that three popular universal zero-knowledge SNARKs (Plonk, Sonic, and Marlin) are updatable SRS simulation extractable NIZKs and signatures of knowledge (SoK) out-of-the-box avoiding any compilation overhead.

Towards this we generalize results for the Fiat--Shamir (FS) transformation, which turns interactive protocols into signature schemes, non-interactive proof systems, or SoK in the random oracle model (ROM).  The security of the transformation relies on rewinding to extract the secret key or the witness, even in the presence of signing queries for signatures and simulation queries for proof systems and SoK, respectively.  We build on this line of work and analyze multi-round FS for arguments with a structured reference string (SRS). The combination of ROM and SRS, while redundant in theory, is the model of choice for the most efficient practical systems to date. We also consider the case where the SRS is updatable and define a strong simulation extractability notion that allows for simulated proofs with respect to an SRS to which the adversary can contribute updates.

We define three properties (trapdoor-less zero-knowledge, rewinding-based knowledge soundness, and a unique response property) that are sufficient for argument systems based on multi-round FS to be also simulation extractable in this strong sense. We show that Plonk, Sonic, and Marlin satisfy these properties, and conjecture that many other argument systems such as Lunar, Basilisk, and transparent variants of Plonk fall within the reach of our main theorem.
