---
# Blog post title
title: "zk-SNARKs for the world!"

# Website post date
# format YYYY-MM-DD
date: 2021-07-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - chhimed-kunzang
  - jorge-soares    
  - friedel-ziegelmayer

# If applicable
categories:
  - news

# If applicable
tags:


# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptocomputelab

# Not used
draft: false


---

Did you know Filecoin is the largest zk-SNARK network deployed to date?

For the past two years we have been working on bringing zk-SNARKs to the world and to the Filecoin Network. While this journey is far from over, we wanted to give you a peak at where we are today. To that end, we're launching a [zk-SNARKs for the world](../../../sites/snarks/) minisite, which showcases the use of SNARKs in Filecoin and some of the key improvements that allowed us to scale to this level.

Filecoin avoids wasteful proof of work by allowing miners to win block rewards by proving that they are storing client data. This requires an enormous volume of cryptographic proofs: we need both Proof of Replication — to ensure miners store unique copies of claimed data — and Proof of Spacetime — to ensure they maintain accessible copies of the replicated data over time.

zk-SNARKs are a cryptographic technique that allows a prover to efficiently convince verifiers that the prover knows some piece of information without revealing the information itself. The efficiency of zk-SNARKs is a key property that allow us to prove storage in much less space than would otherwise be possible.

When we set out to build Filecoin, there was no precedent for the volume of proofs which would be required to secure a network as large as we envisioned. Over the course of development leading up to the network launch, we successively cleared hurdle after hurdle to make our use of zk-SNARKs practical. Since launch, we have continued to bring new research to bear to further improve performance. Today's Filecoin proofs occupy the intersection of cutting-edge research and boundary-pushing engineering.

For more details and to learn more about how our SNARKs stack up, enjoy [zk-SNARKs for the world](../../../sites/snarks/)!
