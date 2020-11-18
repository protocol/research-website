---
# Publication title
title: "An algorithm for formation-based chemical plume tracing using robotic marine vehicles"

# Website post date
# format YYYY-MM-DD
date: 2016-09-19

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "OCEANS 2016 MTS/IEEE Monterey"

# Venue Location
venue_location: "Monterey, CA, USA"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.1109/OCEANS.2016.7761119

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - jorge-soares
  - "A. Pedro Aguiar"
  - "António M. Pascoal"
  - "Alcherio Martinoli"

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

Robotic chemical plume tracing is a growing area of research, with envisioned real-world applications including pollution tracking, search and rescue, and ecosystem identification. However, following a chemical signal in the water is not an easy task due to the nature of chemical transport and to limitations in sensing and communication. In this paper, we propose an approach for near-surface waterborne plume tracing using a combined team of autonomous surface and underwater vehicles. All vehicles are equipped with appropriate chemical sensors and acoustic modems. The team moves in a triangular formation, while using the flow direction and the samples obtained to steer the group along the plume. Leader vehicles at the surface implement a formation controller based on Laplacian feedback while the underwater vehicle performs acoustic ranging to the leaders. The solution was evaluated using a CFD simulation of a freshwater plume and a calibrated dynamic model of the MEDUSA autonomous marine vehicles. The group is able to move in a stable formation, sample the salinity, and trace the plume to its source.
