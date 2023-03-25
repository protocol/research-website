---
# Publication title
title: "LURK: Lambda, the ultimate recursive knowledge"

# Website post date
# format YYYY-MM-DD
date: 2023-03-16

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
  - "Nada Amin"
  - "John Burnham"
  - "François Garillot"
  - rosario-gennaro
  - chhimed-kunzang
  - "Daniel Rogozin"
  - "Cameron Wong"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - 

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
#  - name: Google Scholar
#    url: https://scholar.google.com/scholar?hl=en&as_sdt=0%2C38&q=bing&btnG=
#    icon: google-scholar

url_source: https://eprint.iacr.org/2023/369
---



We introduce Lurk, a new LISP-based programming language for zk-SNARKs. Traditional approaches to programming over zero-knowledge proofs require compiling the desired computation into a flat circuit, imposing serious constraints on the size and complexity of computations that can be achieved in practice. Lurk programs are instead provided as data to the universal Lurk interpreter circuit, allowing the resulting language to be Turing-complete without compromising the size of the resulting proof artifacts. Our work describes the design and theory behind Lurk, along with detailing how its implementation of content addressing can be used to sidestep many of the usual concerns of programming zero-knowledge proofs.
