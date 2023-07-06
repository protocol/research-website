---
# Publication title
title: "Base fee manipulation in Ethereum's EIP-1559 transaction fee mechanism"

# Website post date
# format YYYY-MM-DD
date: 2023-04-22

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: 

# Venue Location
venue_location: 

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date:

# DOI, if available
doi: 

# Type of publication
# delete all but one
publication_types:
  - report

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - sarah-azouvi
  - guy-goren
  - "Lioba Heimbach"
  - "Alexander Hicks"

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
#  - src: 119.pdf

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

In 2021 Ethereum adjusted the transaction pricing mechanism by implementing EIP-1559, which introduces the base fee - a fixed network fee per block that is burned and adjusted dynamically in accordance with network demand. The authors of the Ethereum Improvement Proposal (EIP) noted that a miner with more than 50% of the mining power might have an incentive to deviate from the honest mining strategy. Instead, such a miner could propose a series of empty blocks to increase its future rewards. In this paper, we generalize this attack and show that under rational player behavior, deviating from the honest strategy can be profitable for a miner with less than 50% of the mining power. Further, even when miners do not collaborate, it is rational for smaller mining power miners to join the attack.
