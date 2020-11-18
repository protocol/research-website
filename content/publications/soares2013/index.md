---
# Publication title
title: "Design and implementation of a range-based formation controller for marine robots"

# Website post date
# format YYYY-MM-DD
date: 2013-11-28

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "ROBOT2013: First Iberian Robotics Conference"

# Venue Location
venue_location: "Madrid, Spain"

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.1007/978-3-319-03413-3_5

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

There is considerable worldwide interest in the use of groups of autonomous marine vehicles to carry our challenging mission scenarios, of which marine habitat mapping of complex, non-structured environments is a representative example. Relative positioning and formation control becomes mandatory in many of the missions envisioned, which require the concerted operation of multiple marine vehicles carrying distinct, yet complementary sensor suites. However, the constraints placed by the underwater medium make it hard to both communicate and localise the vehicles, even in relation to each other, let alone maintain them in a formation. As a contribution to overcoming some of these problems, this paper deals with the problem of keeping an autonomous marine vehicle in a moving triangular formation with respect to two leader vehicles. Simple feedback laws are derived to drive a controlled vehicle to its intended position in the formation using acoustic ranges obtained to the leading vehicles with no knowledge of the formation path. The paper discusses the implementation of this solution in the MEDUSA class of autonomous marine vehicles operated by IST and describes the results of trials with these vehicles exchanging information and ranges over an acoustic network.
