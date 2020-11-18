---
# Publication title
title: "Triangular formation control using range measurements: An application to marine robotic vehicles"

# Website post date
# format YYYY-MM-DD
date: 2012-04-10

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "3rd IFAC Workshop on Navigation, Guidance and Control of Underwater Vehicles (NGCUV’2012)"

# Venue Location
venue_location: "Porto, Portugal"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.3182/20120410-3-PT-4028.00020

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - jorge-soares
  - "A. Pedro Aguiar"
  - "António M. Pascoal"
  - "Marco Gallieri"

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

This paper addresses the problem of maintaining an autonomous robotic vehicle in a moving triangular formation by regulating its position with respect to two leader vehicles. The robotic vehicle has no a priori knowledge of the path described by the leaders and its goal is to follow them by constantly regulating the inter-vehicle distances to a desired fixed value, using range-only measurements. To solve this station keeping problem, we propose a control strategy that estimates the formation speed and heading from the ranges obtained to the two leading vehicles, and uses simple feedback laws for speed and heading commands to drive suitably defined common and differential errors to zero. For straight-line motion, we provide guaranteed conditions under which the proposed control strategy achieves local convergence of the distance errors to zero. We also indicate how our design procedure can be extended to full dynamic models of marine robotic vehicles equipped with inner loops for yaw and speed control. Simulation results using realistic models are described and discussed.
