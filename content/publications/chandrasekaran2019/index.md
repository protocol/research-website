---
# Publication title
title: "Exploring connections between active learning and model extraction"

# Website post date
# format YYYY-MM-DD
date: 2019-11-20

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

# Publication pdf, should be in the same folder
# Name it the same as the folder
resources:
  - src: chandrasekaran2019.pdf

# Type of publication
# delete all but one
publication_types:
  - report

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Varun Chandrasekaran"
  - "Kamalika Chaudhuri"
  - irene-giacomelli
  - "Somesh Jha"
  - "Songbai Yan"

# Zero or more of the areas in content/research/areas
areas:
  -

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

Machine learning is being increasingly used by individuals, research institutions, and corporations. This has resulted in the surge of Machine Learning-as-a-Service (MLaaS) - cloud services that provide (a) tools and resources to learn the model, and (b) a user-friendly query interface to access the model. However, such MLaaS systems raise privacy concerns such as model extraction. In model extraction attacks, adversaries maliciously exploit the query interface to steal the model. More precisely, in a model extraction attack, a good approximation of a sensitive or proprietary model held by the server is extracted (i.e. learned) by a dishonest user who interacts with the server only via the query interface. This attack was introduced by Tramer et al. at the 2016 USENIX Security Symposium, where practical attacks for various models were shown. We believe that better understanding the efficacy of model extraction attacks is paramount to designing secure MLaaS systems. To that end, we take the first step by (a) formalizing model extraction and discussing possible defense strategies, and (b) drawing parallels between model extraction and established area of active learning. In particular, we show that recent advancements in the active learning domain can be used to implement powerful model extraction attacks, and investigate possible defense strategies.
