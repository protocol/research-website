---
# Publication title
title: Subversion-resilient Enhanced Privacy ID

# Website post date
# format YYYY-MM-DD
date: 2020-11-17

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
  - "Antonio Faonio"
  - "Dario Fiore"
  - luca-nizzardo
  - "Claudio Soriente"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonetlab

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

Anonymous attestation for secure hardware platforms leverages tailored group signature schemes and assumes the hardware to be trusted. Yet, there is an ever increasing concern on the trustworthiness of hardware components and embedded systems. A subverted hardware may, for example, use its signatures to exfiltrate identifying information or even the signing key.

In this paper we focus on Enhanced Privacy ID (EPID)---a popular anonymous attestation scheme used in commodity secure hardware platforms like Intel SGX. We define and instantiate a subversion resilient EPID scheme (or SR-EPID). In a nutshell, SR-EPID provides the same functionality and security guarantees of the original EPID, despite potentially subverted hardware. In our design, a sanitizer ensures no covert channel between the hardware and the outside world both during enrollment and during attestation (i.e., when signatures are produced). We design a practical SR-EPID scheme secure against adaptive corruptions and based on a novel combination of malleable NIZKs and hash functions modeled as random oracles.

Our approach has a number of advantages over alternative designs. Namely, the sanitizer bears no secret information---hence, a memory leak does not erode security. Further, the role of sanitizer may be distributed in a cascade fashion among several parties so that sanitization becomes effective as long as one of the parties has access to a good source of randomness. Also, we keep the signing protocol non-interactive, thereby minimizing latency during signature generation.
