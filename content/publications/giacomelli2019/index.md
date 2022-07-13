---
# Publication title
title: "Efficient UC commitment extension with homomorphism for
free (and applications)"

# Website post date
# format YYYY-MM-DD
date: 2019-10-02

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: Advances in Cryptology – ASIACRYPT 2019 

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
  - conference paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Ignacio Cascudo"
  - "Ivan Damgård"
  - " Bernardo David"
  - "Nico Döttling"
  - "Rafael Dowsley"
  - irene-giacomelli
  
# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

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

Homomorphic universally composable (UC) commitments allow for the sender to reveal the
result of additions and multiplications of values contained in commitments without revealing the values
themselves while assuring the receiver of the correctness of such computation on committed values. In
this work, we construct essentially optimal additively homomorphic UC commitments from any (not
necessarily UC or homomorphic) extractable commitment. We obtain amortized linear computational
complexity in the length of the input messages and rate 1. Next, we show how to extend our scheme
to also obtain multiplicative homomorphism at the cost of asymptotic optimality but retaining low
concrete complexity for practical parameters. While the previously best constructions use UC oblivious
transfer as the main building block, our constructions only require extractable commitments and PRGs,
achieving better concrete efficiency and offering new insights into the sufficient conditions for obtaining
homomorphic UC commitments. Moreover, our techniques yield public coin protocols, which are compatible with 
the Fiat-Shamir heuristic. These results come at the cost of realizing a restricted version
of the homomorphic commitment functionality where the sender is allowed to perform any number of
commitments and operations on committed messages but is only allowed to perform a single batch
opening of a number of commitments. Although this functionality seems restrictive, we show that it can
be used as a building block for more efficient instantiations of recent protocols for secure multiparty
computation and zero knowledge non-interactive arguments of knowledge.
