---
# Publication title
title: "State machine replication scalability made simple"

# Website post date
# format YYYY-MM-DD
date: 2022-04-20

# Publish from this date (defaults to date)
#publishDate: 2022-03-11

# Venue Name
venue: "EuroSys '22: Seventeenth European Conference on Computer Systems"

# Venue Location
venue_location: Rennes, France

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-04-06

# DOI, if available
doi: 10.1145/3492321.3519579

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Chrysoula Stathakopoulou"
  - matej-pavlovic
  - marko-vukolic

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - consensuslab

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: false

# Publication pdf, should be in the same folder
# No need to fill this out; just name the file the same as the folder
#resources:
#  - src: delarocha2021a.pdf

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

Consensus, state machine replication (SMR) and total order broadcast (TOB) protocols are notorious for being poorly scalable with the number of participating nodes. Despite the recent race to reduce overall message complexity of leader-driven SMR/TOB protocols, scalability remains poor and the throughput is typically inversely proportional to the number of nodes. We present Insanely Scalable State Machine Replication, a generic construction to turn leader-driven protocols into scalable multi-leader ones. For our scalable SMR construction we use a novel primitive called Sequenced (Total Order) Broadcast (SB) which we wrap around PBFT, HotStuff and Raft leader-driven protocols to make them scale. Our construction is general enough to accommodate most leader-driven ordering protocols (BFT or CFT) and make them scale. Our implementation improves the peak throughput of PBFT, HotStuff, and Raft by 37x, 56x, and 55x, respectively, at a scale of 128 nodes.
