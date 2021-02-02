---
title: "Dioptics: A common generalization of open games and gradient-based learners"

date: 2019-09-05

publishDate: 2019-09-05

publication_types:
  - conference-paper
authors:
  - david-dalrymple
tags:
categories:
areas:
  - applied-category-theory
groups:
  - abstractionlab
journal:

venue: Fifth Symposium on Compositional Structures (SYCO)
venue_location: Birmingham, UK

links:

resources:
  - src: dalrymple2019.pdf
  - src: cite.bib
---
Compositional semantics have been shown for machine-learning algorithms [FST18] and open games [Hed18]; at SYCO 1, remarks were made noting the high degree of overlap in character and analogy between the constructions, and that there is known to be a monoidal embedding from the category of learners to the category of games, but it remained unclear exactly what kind of structure they both are. This is work in progress toward showing that both categories embed faithfully and bijectively-on-objects into instances of a pattern we call categories of dioptics, whose name and definition both build heavily on [Ril18]. Using a generalization of the reverse-mode automatic differentiation functor of [Ell18] to arbitrary diffeological spaces with trivializable tangent bundles, we also construct a category of gradient-based learners which generalizes gradient-based learning beyond Euclidean parameter spaces. We aim to show that this category embeds naturally into the category of learners (with a choice of update rule and loss function), and that composing this embedding with reverse-mode automatic differentiation (and the inclusion of Euclidean spaces into trivializable diffeological spaces) recovers the backpropagation functor L of [FST18].
