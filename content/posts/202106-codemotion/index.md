---
# Blog post title
title: "ResNetLab presents Beyond Bitswap at Codemotion '21"

# Website post date
# format YYYY-MM-DD
date: 2021-06-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - alfonso-delarocha

# If applicable
categories:
  -

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - ResNetLab

# Not used
draft: false



---

ResNetLab was delighted to accept an invitation to talk about Bitswap and the outcomes of our [Beyond Bitswap project](/blog/2021/beyond-swapping-bits-project-review-and-preview/) at the [Spanish Edition of the Codemotion conference](https://events.codemotion.com/conferences/online/2021/online-tech-conference-spanish-edition-spring/agenda). The invitation was then extended to the [English edition of the conference](https://events.codemotion.com/conferences/online/2021/online-tech-conference-spring/agenda), which took place at the end of May. These great events gave us the chance to introduce IPFS, and discuss Bitswap -- the IPFS content exchange protocol-- in detail with a broad audience. You can view our slide deck [here](https://gateway.ipfs.io/ipfs/QmRssQ1BAenEb8XM9re2EiSTc9n1hDhrGW3pmpM2NFKsHd).

The conference gathered speakers and attendees from diverse backgrounds: from web developers to quantum computing researchers to blockchain specialists. It was great to share our work with such a diverse audience! We received great questions in both events, and we wanted to share the answers here for future reference:

### **Q&A**


***Q:*** What projects are currently using Bitswap?

***A:*** Bitswap is the [content exchange protocol in IPFS](https://docs.ipfs.io/concepts/bitswap/#bitswap). It is also [used in Filecoin](https://spec.filecoin.io#section-libraries.ipfs.bitswap) to request and receive blocks when a node is synchronized (“caught up”) but GossipSub has failed to deliver some blocks to a node. But Bitswap is a protocol in itself and can be used in other use cases, independently of IPFS and Filecoin: a good example of this is our [collaboration with Netflix](https://blog.ipfs.io/2020-02-14-improved-bitswap-for-container-distribution/) where we tested how Bitswap could be used to improve Continuous Integration (CI) in distributed cloud environments. You can find a detailed description of Bitswap in our technical report [here](/publications/accelerating-content-routing-with-bitswap-a-multi-path-file-transfer-protocol-in-ipfs-and-filecoin/).

***Q:*** Is there any other way of exchanging content in the IPFS network?

***A:*** IPFS includes a protocol called Graphsync that can also be used to exchange data between peers. Unlike Bitswap, which is a message-based protocol, [Graphsync](https://docs.ipfs.io/concepts/glossary/#graphsync) is a request-response protocol to perform 1:1 exchanges of data. It currently doesn’t include any content routing capabilities or integration with providing subsystems, so if we want to retrieve specific data from a peer we need to be sure that the other peer is already storing it. If it doesn’t, the request will fail. Furthermore, in Graphsync requested data is sent as a stream of blocks, instead of having to exchange blocks one-by-one as is the case with Bitswap.

***Q:*** Do you have any plans to improve Bitswap further?

***A:*** As the Beyond Bitswap project evolved, we developed a number of RFCs containing ideas to improve and optimise the performance of the protocol. To date at ResNetLab we have prototyped the use of compression over Bitswap, a scheme to gather additional knowledge about where content may be stored through the inspection of other peers' requests, and the use of a TTL field to increase the range of discovery of Bitswap; and  teams both at Protocol Labs and elsewhere are working on prototypes for some of the other RFCs. You can read all of the RFCs and related discussions in [this repo](https://github.com/protocol/beyond-bitswap). For additional context, [this post](/blog/2021/beyond-swapping-bits-project-review-and-preview/) shares a good overview of the development of the project. We are always open to collaborations and have funding allocated for these activities, so if you are working in this field, get in touch! Our [repository](https://github.com/protocol/ResNetLab/discussions) is a great place to brainstorm and kickstart discussions!

The RFC that I am *personally* most excited about is [this one](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL1201) (also [discussed in this issue](https://github.com/protocol/beyond-bitswap/issues/25)), where we propose merging certain Graphsync capabilities into Bitswap requests to improve the synchronization of content between peers.

***Q:*** Can you share some sample use cases of projects being built over IPFS?

***A:*** There are tons of projects already built over IPFS:  decentralized virtual reality, video hosting, storage of large datasets, web hosting, parallelization of big data analysis, P2P video streaming, databases, and much more. You can find a detailed list of projects using IPFS [here](https://docs.ipfs.io/concepts/usage-ideas-examples/).

***Q:*** What are some good resources to start learning about IPFS and Web3.0?

***A:*** We recently released our brand new [ResNetLab on Tour](/tutorials/resnetlab-on-tour/) program, which is a one-stop-shop for all things IPFS and Web 3.0. In the ResNetLab on Tour site you’ll find five Core Modules and several Elective Modules (with more coming soon!) as ~25 min video tutorials. The modules introduce many of the concepts and protocols behind IPFS and the Web 3.0 and go into details of important systems such as content addressing, content routing and content exchange, among others.

If you are new to IPFS and Web 3.0 concepts, at [proto.school](https://proto.school) you will find a set of self-guided, interactive tutorials designed to introduce you into decentralized web concepts, protocols, and tools. This is the “go-to” resource for developers that want to start hacking with Web 3.0 technologies. ProtoSchool not only gives you theoretical knowledge, but also includes a set of code challenges to start getting a grasp of how it looks like to build over Web 3.0.

***Q:*** You mentioned that the **Beyond Bitswap** project was an open research project, and that this is the way you approach research and development at PL. What does "open research" look like?

***A:*** The research problems we are working on are not easy and generally require multidisciplinary talent. By making our [open problems](https://github.com/protocol/ResNetLab#research) public, and inviting other teams and research groups to collaborate with us, we boost the flow of ideas and benefit from being able to explore different lines of work in parallel. Under this setup, everyone benefits from the contributions of others. We are transparent about what we perceive as problems, and we engage with the community in order to better define and eventually solve them. You can read more about this at [PL Research Website](/outreach/). And of course, if you are interested in this way of doing research, do not hesitate to reach out, check out our [open problems](https://github.com/protocol/ResNetLab#research), join our [open discussions](https://github.com/protocol/ResNetLab/discussions), apply for [funding](https://grants.protocol.ai/), or [come work with us](https://jobs.lever.co/protocol).



<center>{{< figure src="/images/resnetlab/resnetlab_logo_orange.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on <a href="https://github.com/protocol/ResNetLab#research">our research topics</a> and welcome opportunities to answer questions and develop collaborations. Join the discussion in <a href="https://github.com/protocol/ResNetLab/discussions">our GitHub forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics. Active researchers may also be interested in our <a href="https://grants.protocol.ai"> funding opportunities </a></i></center>
