---
# Publication title
title: "Flexible triangular formation keeping of marine robotic vehicles using range measurements"

# Website post date
# format YYYY-MM-DD
date: 2014-08-24

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "19th IFAC World Congress (IFAC WC 2014)"

# Venue Location
venue_location: "Cape Town, South Africa"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.3182/20140824-6-ZA-1003.02435

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Francisco Rego"
  - jorge-soares
  - "António M. Pascoal"
  - "A. Pedro Aguiar"
  - "Colin Jones"

# Zero or more of the areas in content/areas
areas:
  -

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: true

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

This paper addresses the problem of keeping an autonomous marine vehicle in a moving triangular formation by regulating its position with respect to two leader vehicles. The follower vehicle has no prior knowledge of the path described by the leaders but has access to their heading angle and is able to measure inter-vehicle ranges. It is assumed that the distance between the leaders is constant and known. A control strategy is adopted that generates speed and heading commands so as to drive suitably defined along track and cross track errors to zero. The commands are used as input to local inner loops for yaw and speed control. The paper describes the algorithms derived for range-based control and assesses their performance in simulations using realistic models of the vehicles involved. Tests with three autonomous marine vehicles equipped with acoustic modems and ranging devices allow for the evaluation of the performance of the algorithms in a real-world situation.
