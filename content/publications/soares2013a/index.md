---
# Publication title
title: "Joint ASV/AUV range-based formation control: Theory and experimental results"

# Website post date
# format YYYY-MM-DD
date: 2013-05-06

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "2013 IEEE International Conference on Robotics and Automation"

# Venue Location
venue_location: "Karlsruhe, Germany"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.1109/ICRA.2013.6631378

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

The use of groups of autonomous marine vehicles has enormous potential in numerous marine applications, perhaps the most relevant of which is the surveying and exploration of the oceans, still widely unknown and misunderstood. In many mission scenarios requiring the concerted operation of multiple marine vehicles carrying distinct, yet complementary sensor suites, relative positioning and formation control becomes mandatory. However, the constraints placed by the medium make it hard to both communicate and localize vehicles, even in relation to each other. In this paper, we deal with the challenging problem of keeping an autonomous underwater vehicle in a moving triangular formation with respect to 2 leader vehicles. We build upon our previous theoretical work on range-only formation control, which presents simple feedback laws to drive the controlled vehicle to its intended position in the formation using only ranges obtained to the leading vehicles with no knowledge of the formation path. We then introduce the real-world constraints associated with the use of autonomous underwater vehicles, especially the low frequency characteristics of acoustic ranging and its unreliability. We discuss the required changes to implement the solution in our vehicles, and provide simulation results using a full dynamic and communication model. Finally, we present the results of real world trials using MEDUSA-class autonomous marine vehicles.
