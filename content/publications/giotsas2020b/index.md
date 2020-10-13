---
# Publication title
title: "Reduce, reuse, recycle: Repurposing existing measurements to identify stale traceroutes"

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
  - vasilis-giotsas
  - "Thomas Koch"
  - "Elverton Fazzion"
  - "Italo Cunha"
  - "Matt Calder"
  - "Harsha V. Madhyastha"
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

Many systems rely on traceroutes to monitor or characterize the
Internet. The quality of the systems’ inferences depends on the
completeness and freshness of the traceroutes, but the refreshing
of traceroutes is constrained by limited resources at vantage points.
Previous approaches predict which traceroutes are likely out-ofdate in 
order to allocate measurements, or monitor BGP feeds for
changes that overlap traceroutes. Both approaches miss many path
changes for reasons including the difficulty in predicting changes
and the coarse granularity of BGP paths.

This paper presents techniques to identify out-of-date traceroutes 
without issuing any measurements, even if a change is not
visible at BGP granularity. We base our techniques on two observations. 
First, although BGP updates encode routes at AS granularity,
routers issue updates when they change intra-domain routes or
peering points within the same AS path. Second, route changes
correlate across paths, and many publicly available traceroutes
exist. Our techniques maintain an atlas of traceroutes by monitoring 
BGP updates and publicly available traceroutes for signals to
mark overlapping atlas traceroutes as stale. We focus our analysis
of traceroute path changes at the granularity of border router IPs
which provides an abstraction finer than AS- or PoP-level but is
not affected by the periodicity of intra-domain load balancers. Our
evaluation indicates that 80% of the traceroutes that our techniques
signal as stale have indeed changed, even though the AS hops remained 
the same. Our techniques combine to identify 79% of all
border IP changes, without issuing a single online measurement.
