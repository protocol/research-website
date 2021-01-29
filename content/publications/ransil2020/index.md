---
# Publication title
title: "Improving system resilience through formal verification of transactive energy controls"

# Website post date
# format YYYY-MM-DD
date: 2020-12-09

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue:  IEEE PES Transactive Energy Systems Conference (TESC)

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2020-12-09

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - michael-hammersley
  - "Francis M. O'Sullivan"
  - alan-ransil

# Zero or more of the areas in content/areas
areas:
  - distributed-power-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - abstractionlab

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

Formal verification tools such as TLA+ allow errors
to be uncovered through exhaustive exploration of reachable
states, and are the gold standard for ensuring resilience in
software systems. In particular, these methods can be used to
identify error states emerging from precise interactions between
multiple subsystems that would occur only after long periods of
testing, operation, or stacked error conditions. This approach
has been applied to eliminate errors in commercial software
systems, networking, industrial controls, and increasingly in
energy applications. We have recently demonstrated the use
of standard distribution feeders as a basis for TLA+ models
in order to provide a test setup for investigating distributed
energy control algorithms. Here we examine a distribution feeder
under conditions in which a transmission outage curtails slack
bus power flows. While conventional grid architectures under
these conditions would de-energize the feeder and require nodes
with distributed energy resources (DERs) to operate in islanded
mode, we model control algorithms for a transactive energy
system in which DERs are able to sell power to neighboring
nodes. A modular architecture is used to add new node and
feeder capabilities, such as the ability to buy and sell energy
in hyperlocal distribution markets, as module upgrades while
containing modifications to the control system used to operate the
feeder. This approach allows the resiliency benefits of transactive
energy to be gained while minimizing implementation costs
through the reduction of complexity. We model a laminar
coordination framework and use TLA+ to formally verify its
operation. Using this formal specification, we investigate the
latency of coordination signals over a range of system states
and identify conditions for stable operation. We show that while
allowing energy transactions between peers on a feeder improves
system resilience by permitting continued operation despite the
failure of transmission infrastructure, care must be taken to
address other failure modes that arise from this decentralized
architecture which can be addressed through model checking.
This work establishes formal verification as an invaluable tool
for realization of the resiliency benefits of transactive energy by
uncovering potential failure modes and providing engineers a
chance to mitigate them before systems are commissioned.
