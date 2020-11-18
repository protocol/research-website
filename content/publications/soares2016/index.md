---
# Publication title
title: "Towards 3-D distributed odor source localization: An extended graph-based formation control algorithm for plume tracking"

# Website post date
# format YYYY-MM-DD
date: 2016-10-09

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "2016 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)"

# Venue Location
venue_location: "Daejeon, South Korea"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.1109/IROS.2016.7759277

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - jorge-soares
  - "Ali Marjovi"
  - "Jonathan Giezendanner"
  - "Anil Kodiyan"
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

The large number of potential applications for robotic odor source localization has motivated the development of a variety of plume tracking algorithms, the majority of which work in restricted two-dimensional scenarios. In this paper, we introduce a distributed algorithm for 3-D plume tracking using a system of ground and aerial robots in formation. We propose an algorithm that takes advantage of spatially distributed measurements to track the plume in 3-D and lead the robots to the source by integrating three behaviors - upwind movement, plume centering, and Laplacian feedback formation control. We evaluate this strategy in simulation and with real robots in a wind tunnel. For a source close to the ground, results show that a team of robots running our algorithm reaches the source with low lateral error while also tracing the horizontal and vertical plume shape.
