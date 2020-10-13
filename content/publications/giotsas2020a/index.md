---
# Publication title
title: "Cloud provider connectivity in the flat Internet"

# Website post date
# format YYYY-MM-DD
date: 2020-10-07

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "ACM IMC 2020"

# Venue Location
venue_location: 

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2020-10-27

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Todd Arnold"
  - "Jia He"
  - "Weifan Jiang"
  - "Matthew Calder"
  - "Italo Cunha"
  - vasilis-giotsas
  - "Ethan Katz-Bassett"

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

The Tier-1 ISPs have been considered the Internet’s backbone
since the dawn of the modern Internet 30 years ago, as they
guarantee global reachability. However, their influence and
importance are waning as Internet flattening decreases the
demand for transit services and increases the importance of
private interconnections. Conversely, major cloud providers –
Amazon, Google, IBM, and Microsoft– are gaining in importance
as more services are hosted on their infrastructures. They ardently
support Internet flattening and are rapidly expanding their
global footprints, which enables them to bypass the Tier-1 ISPs
and other large transit providers to reach many destinations.

In this paper we seek to quantify the extent to which the
cloud providers’ can bypass the Tier-1 ISPs and other large transit
providers. We conduct comprehensive measurements to identify
the neighbor networks of the major cloud providers and combine
them with AS relationship inferences to model the Internet’s
AS-level topology to calculate a new metric, hierarchy-free
reachability, which characterizes the reachability a network can
achieve without traversing the networks of the Tier-1 and Tier-2
ISPs. We show that the cloud providers are able to reach over 76%
of the Internet without traversing the Tier-1 and Tier-2 ISPs, more
than virtually every other network.
