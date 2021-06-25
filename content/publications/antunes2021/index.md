---
# Publication title
title: "Pulsarcast: Scalable, reliable pub-sub over P2P nets"

# Website post date
# format YYYY-MM-DD
date: 2021-06-21

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: DI2F

# Venue Location
venue_location: Espoo, Finland

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2021-06-21

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Joao Antunes"
  - david-dias
  - "Luis Veiga"

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

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
#  - name: Publisher
#    url: link to publisher
#    icon: link
#  - name: Download PDF
#    url: external pdf url
#    icon: download

---

The publish-subscribe paradigm is a wildly popular
form of communication in complex distributed systems. The properties 
offered by it make it an ideal solution for a multitude of
applications, ranging from social media to content streaming and
stock exchange platforms. Consequently, a lot of research exists
around it, with solutions ranging from centralised message brokers,
to fully decentralised scenarios (peer to peer).
Within the pub-sub realm not every solution is the same of course
and trade-offs are commonly made between the ability to distribute
content as fast as possible or having the assurance that all the
members of the network will receive the content they have subscribed
to. Delivery guarantees is something quite common within the area
of centralised pub-sub solutions, there is, however, a clear lack
of decentralised systems accounting for this. Specifically, a reliable
system with the ability to provide message delivery guarantees and,
more importantly, persistence guarantees. To this end, we present
Pulsarcast, a decentralised, highly scalable, pub-sub, topic based
system seeking to give guarantees that are traditionally associated
with a centralised architecture, such as persistence and eventual
delivery guarantees.
The aim of Pulsarcast is to take advantage of the network
infrastructure and protocols already in place. Relying on a structured
overlay and a graph based data structure, we build a set of
dissemination trees through which our events will be distributed.
Our work also encompasses a software module that implements
Pulsarcast, with our experimental results showing that is a viable
and quite promising solution within the pub-sub and peer to peer
ecosystem.
