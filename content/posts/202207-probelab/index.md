---
# Blog post title
title: "Introducing ProbeLab"

# Website post date
# format YYYY-MM-DD
date: 2022-07-26

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - yiannis-psaras

# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - probelab

# Not used
draft: false


---

*This post was originally published in the [IPFS blog](https://blog.ipfs.io/2022-06-15-probelab/) and is reprinted here with minor edits*

[ProbeLab](/groups/probelab) is an effort to apply solid scientific measurement methodologies to benchmark and optimize network protocols that operate in decentralized P2P environments. ProbeLab was born out of the need for developing a deeper understanding of how permissionless, decentralized networks can be made more performant and comparable to their centralized counterparts.

ProbeLab’s mission is summarized in the following quote:

> You can’t improve what you don’t measure, and you should measure what (you think) you’ve just improved.”

As was highlighted very accurately in [Juan Benet's recent talk](https://youtu.be/jH9BkLTxhp8) at the Paris P2P Festival, the most successful systems in use today are those for which you can find a lot of benchmarking studies. We believe decentralized networks should have a place in this list and be successful in their mission to promote open platforms, free speech, resilient operations, and high performance.

However, measurement and benchmarking of networks and network protocols is not an end, but a means to an end, which is to use the findings to: i) identify bottlenecks, ii) quantify the available space for improvement, and iii) design protocol optimizations.

With those goals in mind, ProbeLab is putting its focus on one of the most widely used decentralized networks, IPFS and its supporting networking library, libp2p. We are building the _IPFS Network Observatory_!

There isn’t a better time to start this exciting journey! Here are a few reasons why:

**DINPS Workshop:** We organized the second edition of the DINPS workshop on “Decentralized Internet, Networks, Protocols, and Systems”, which took place on the 10th of July in Bologna, Italy. There’s a great line up of papers, demos, tutorials and keynotes, which you can find [here](/sites/dinps/). DINPS took place alongside a top conference in networks and distributed systems, ICDCS’22.

**ProbeLab @ Sigcomm’22:** Our measurement work has already started a few quarters ago, and there isn’t a better recognition of the significance of the work than having a [paper accepted at ACM SIGCOMM](/publications/design-and-evaluation-of-ipfs-a-storage-layer-for-the-decentralized-web/)! Our measurement campaign covers a wide range of results: the lookup and delivery latency of content in the IPFS network, the geo-distribution of IPFS peers, the churn rate of peers in the network and a lot more! The paper will be presented in August 2022 at the conference. A pre-print will be made available earlier, so stay tuned!

**An exciting list of things to work on:** The IPFS Network Observatory is composed of a lot of items. We split our work in “Requests for Measurements” (RFMs) and we have collected more than 15 distinct items we considered important parts of the observatory. Check out the list in [GitHub](https://github.com/protocol/network-measurements). You are welcome to propose more topics that are important for your project by creating an issue or submitting a PR.

**Funding for RFMs:** The RFMs are open to the community to get involved and contribute their previous knowledge and priceless experience to our mission. For this, there is funding available through the [Radius platform](https://app.radius.space/) and most RFMs will be published there and rewarded. We currently have the following grants published:

* [Effectiveness of Bitswap Discovery Process](https://www.dgm.xyz/grants/MQS2icjXKGJ8jy2bqS8W)
* [Location of IPFS end users and requested content](https://www.dgm.xyz/grants/t7p9MzZNxCkWV171uBzm)
* [IP address Churn (Roaming) & PeerID distribution for nodes in the IPFS Network](https://www.dgm.xyz/grants/bs6rbWLGJRnICtgjU0LS)
* [TTFB through different architecture components](https://www.dgm.xyz/grants/g5riWRq4BkhDvl9vsjda)
* [Distribution of DHT lookup times and Breakdown of Content Routing Latency](https://www.dgm.xyz/grants/cieOsJkIqWSQkk9obsrO)

**A thriving community!** We are collaborating with more than 40 of the brightest academic and industry researchers in more than 10 institutions, including Barcelona Supercomputing Center (ES), HKUST (CH), NOVA ULisbon (PT), QMUL (UK), Stanford (US), Telefonica (ES), Tokyo University of Technology (JP), TUBerlin (DE), TUDarmstadt (DE), TUMunich (DE), UWuppertal (DE), and more! We are meeting virtually on a weekly basis and physically on a quarterly basis. You are more than welcome to get involved and come work with us!

**Open Positions:** The team is currently small but growing quickly. We are looking for exceptional [Research Engineers](https://boards.greenhouse.io/protocollabs/jobs/4283928004) and [Research Scientists](https://boards.greenhouse.io/protocollabs/jobs/4283974004) with a passion for decentralized networks and extensive hands-on experience. We are seeking people who are able to hit the right balance between scientific exploration, and prototype development. There’s also lots of passion and a great spirit around here.

### Call Outs

* Watch this [intro video](/talks/ipfs-network-measurements-and-improvements-opportunities) to ProbeLab’s activities at the Paris P2P Festival.
* Watch some of our collaborators talking about their ongoing work at the Paris P2P Festival:
  * [Optimizing the IPFS Provide Process](https://www.youtube.com/watch?v=wbY-MueAfXg&list=PLNeNFYqVeWnNy8KdZOdOTlzSkKoBWyfqO)
  * [Tools for developing distributed applications and protocols](https://www.youtube.com/watch?v=MvyyuMxsKqk&list=PLNeNFYqVeWnNy8KdZOdOTlzSkKoBWyfqO)
  * [Libp2p DHT: performance, workloads and future directions](https://www.youtube.com/watch?v=RPO1zCqsxY0&list=PLNeNFYqVeWnNy8KdZOdOTlzSkKoBWyfqO)
* Check out all of our ongoing projects and follow announcements at our [Notion page](https://www.notion.so/pl-strflt/ProbeLab-Protocol-Benchmarking-Optimization-a63238fd1b184d6f8fea4bb38d975208)
* Apply for our grants at [Radius](https://app.radius.space/) and come work with us!
* Join the discussion at the [IPFS Discord server](https://discord.gg) at the #probe-lab channel.
* We’re meeting virtually every week and physically once a quarter (at least) - you’re welcome to join! Join the Discord server to find out more.
* Contribute your ideas for network measurements on our [GitHub repository](https://github.com/protocol/network-measurements).
* Tell your friends!

See you soon! We’ll be announcing the findings of our work here, so stay tuned!
