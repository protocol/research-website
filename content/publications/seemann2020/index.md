---
# Publication title
title: "Automating QUIC interoperability testing"

# Website post date
# format YYYY-MM-DD
date: 2020-06-12

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: ACM SIGCOMM 2020 Workshop on Evolution, Performance, and Interoperability of QUIC

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2020-08-14

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - marten-seemann
  - "Jana Iyengar"

# Zero or more of the areas in content/areas
areas:
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

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
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar
---

We present QuicInteropRunner [1,2], a test framework for automated and on-demand interoperability testing between implementations of the QUIC protocol [3]. We describe the key constraints and insights that defined our work, the recent innovations that made the framework possible, a high-level overview of our design, and a few exemplary tests. QuicInteropRunner is now supported and used by ten QUIC implementations as part of their development process, confirming our thesis that there is a need for automating interoperability testing and making it available on demand.
