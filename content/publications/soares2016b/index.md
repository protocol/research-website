---
# Publication title
title: "Formation-based odour source localisation using distributed terrestrial and marine robotic systems"

# Website post date
# format YYYY-MM-DD
date: 2016-04-15

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: "École Polytechnique Fédérale de Lausanne and Instituto Superior Técnico"

# Venue Location
venue_location:

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 10.5075/epfl-thesis-7080

# Type of publication
# delete all but one
publication_types:
  - thesis

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - jorge-soares

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

This thesis tackles the problem of robotic odour source localisation, that is, the use of robots to find the source of a chemical release. As the odour travels away from the source, in the form of a plume carried by the wind or current, small scale turbulence causes it to separate into intermittent patches, suppressing any gradients and making this a particularly challenging search problem. We focus on distributed strategies for odour plume tracing in the air and in the water and look primarily at 2D scenarios, although novel results are also presented for 3D tracing. The common thread to our work is the use of multiple robots in formation, each outfitted with odour and flow sensing devices. By having more than one robot, we can gather observations at different locations, thus helping overcome the difficulties posed by the patchiness of the odour concentration. The flow (wind or current) direction is used to orient the formation and move the robots up-flow, while the measured concentrations are used to centre the robots in the plume and scale the formation to trace its limits. We propose two formation keeping methods. For terrestrial and surface robots equipped with relative or absolute positioning capabilities, we employ a graph-based formation controller using the well-known principle of Laplacian feedback. For underwater vehicles lacking such capabilities, we introduce an original controller for a leader-follower triangular formation using acoustic modems with ranging capabilities. The methods we propose underwent extensive experimental evaluation in high-fidelity simulations and real-world trials. The marine formation controller was implemented in MEDUSA autonomous vehicles and found to maintain a stable formation despite the multi-second ranging period. The airborne plume tracing algorithm was tested using compact Khepera robots in a wind tunnel, yielding low distance overheads and reduced tracing error. A combined approach for marine plume tracing was evaluated in simulation with promising results.
