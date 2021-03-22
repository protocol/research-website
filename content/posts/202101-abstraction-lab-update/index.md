---
# Blog post title
title: "AbstractionLab Update: notes from the frontier"


# Website post date
# format YYYY-MM-DD
date: 2021-01-29

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - karola-kirsanow

# If applicable
categories:
  - Blog

# Zero or more of the areas in content/areas
areas:
  - distributed-power-systems
  - knowledge-engineering
  - applied-category-theory

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - abstractionlab

# Not used
draft: false

---

The independent researchers of the [AbstractionLab](/groups/abstractionlab/) tackle ambitious projects with huge potential to drive breakthroughs in computing, communication, and decentralization. They are the scout ship pilots exploring the farthest reaches of the adjacent possible. And they have a lot of interesting news to report!

The Inter-Cranial Abstraction System
====================================

**The Inter-Cranial Abstraction System** (ICAS, formerly *The Metamodel* ) is a framework for computable knowledge --- an effort to "wake up the Internet" by building a flexible system enabling interactions between higher-level *knowledge* and lower-level *data*. The project describes a vision of the decentralized web where information flows unimpeded between abstraction levels and autonomous systems

[Alan Ransil](/authors/alan-ransil/) presented his recent work on the ICAS project at a recent [Protocol Labs Research Seminar](/talks/the-inter-cranial-abstraction-system-icas/), detailing the coordination problems involved in overcoming the barriers to creating an architecturally and semantically decentralized knowledge infrastructure, discussing the relevance of content addressing in supporting the verifiability and universality necessary for such a system, describing the ICAS type system, and outlining the exciting future directions of the project! Come for the talk and stay for the [Q&A](https://www.youtube.com/watch?v=J4WllOW_6As&t=2387s)!

The Decentralized Energy Project
================================

**The Decentralized Energy Project** is a joint effort by researchers [Alan Ransil](/authors/alan-ransil/) and [Michael Hammersley](/authors/michael-hammersley/) in collaboration with the [MIT Energy Initiative](https://energy.mit.edu/). Alan and Michael are applying insights from distributed systems research to the architecture of the public energy grid, using decentralized network protocols to lower the grid's carbon-intensity, increase its reliability, and decrease its costs.

Michael recently presented the Energy Project's work on [*Enabling plug-and-play transactive energy on legacy power grids*](/talks/enabling-plug-and-play-transactive-energy-on-legacy-power-grids/) to the [IEEE International Transactive Energy Systems Conference (TESC)](https://ieee-tesc.org/). In his presentation, Michael discusses the current trajectory of distributed energy resource adoption, asking whether it is possible to drive the adoption of transactive energy in the legacy portions of our current grid to hasten the adoption of distributed energy and distributed energy markets. Michael describes the potential for heterogeneous adoption of transactive energy without disrupting grid operations, and introduces [VOLTTRON](https://volttron.org/) (no, not that [Voltron](https://en.wikipedia.org/wiki/Voltron_(1984_TV_series))), a simulation platform developed by Pacific Northwest National Laboratory that the Energy Project is using to model different modes of transactive energy integration.

The Energy Project also published a TESC conference paper on [*Improving system resilience through formal verification of transactive energy controls*](/publications/improving-system-resilience-through-formal-verification-of-transactive-energy-controls/), using TLA+ to verify control algorithms for a transactive energy system where distributed energy resources trade power with their neighboring nodes.

The Energy Project is continually developing new tools and methods to improve the resilience of our electrical infrastructure. Check out their work to get a bolt of inspiration!

The Underlay
============

**[The Underlay](https://www.underlay.org/)** is a collaboration with the [MIT Knowledge Futures Group](https://www.knowledgefutures.org/) to liberate and provenance humanity's knowledge by creating a publicly accessible distributed knowledge graph built on open-source protocols and tools. [Joel Gustafson](/authors/joel-gustafson/) described how the Underlay project conceptualizes a distributed knowledge graph in a recent [blog post](https://notes.knowledgefutures.org/pub/belji1gd/release/2), which sparked a the formation of a social knowledge graph interest group and virtual salon.

Joel's [Protocol Labs Research Seminar](/talks/the-underlay-a-distributed-public-knowledge-graph/) expands on the topic, proposing a functional definition of a knowledge graph and describing the issues involved in scaling a public distributed knowledge graph. Is it possible to contextualize data at scale? What *is* the Underlay? Join the conversation by viewing Joel's talk --- and of course, the [Q&A](https://youtu.be/QIZV1Y71F8A?t=2932). Schema-curious? You can read the docs and try out the Underlay's schema editor at the [R1 website](https://r0.underlay.org/docs/schemas).

And if you're a software engineer excited by the prospect of building tools for better public knowledge graphs, you might be interested in the new [software engineering position](https://notes.knowledgefutures.org/pub/si1okbw9/release/15) on the Underlay team.

Stay tuned to this blog and the [Protocol Labs Youtube channel](https://www.youtube.com/c/ProtocolLabs/featured) for more exciting updates from the frontiers of Protocol Labs Research!
