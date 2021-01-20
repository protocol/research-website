---
# Blog post title
title: "ResNetLab 2020 in review: how it all happened"



# Website post date
# format YYYY-MM-DD
date: 2021-01-19

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - alfonso-delarocha
  - david-dias
  - yiannis-psaras


# If applicable
categories:
  - blog

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

---


![](image1.jpg)

We hope you spent some fantastic time with your loved ones during the holiday season. With the time to pause, rest, and reflect -- and with the goal of kicking off 2021 in the best way possible -- we decided to capture ResNetLab's 2020 highlights, share what we've learned,  and describe what we will be focusing on in 2021.

It is safe to say that we are absolutely astonished with the multiple results, contributions, and deployments that we achieved in 2020. The list below might give the idea that we had a really large team working in all fronts, but the reality is that we started as a team of two that later grew to a team of three. All of the achievements you see below were only possible thanks to the collaborations with IPFS, libp2p, Filecoin, Protocol Labs Research, and the multiple research labs we had the opportunity to interface with throughout the year.

## 2020 Highlights

2020 has a multitude of highlights, from new projects to new events to new collaborations. Here we present the higlights:

### 🏗 Projects

#### Hydra Booster

We started the first semester of 2020 with an ambitious goal in mind: to upgrade Content Routing in IPFS through research, prototyping, and evaluation, with the intent of serving networks an order of magnitude larger. We kicked off the year with the first (of many) ResNetLab Research Intensive Workshops. The results of this workshop yielded  the Content Routing Work Plan that led to the [release of go-ipfs 0.5](https://blog.ipfs.io/2020-04-28-go-ipfs-0-5-0/), the largest upgrade to that date.

In addition, we also created an RFC and the implementation of a Hydra Booster peer. This new type of peer exists to augment the network by creating multiple distributed identities across the DHT address space, enabling it to contribute to the storage and discovery of content provider records. All of these identities are linked by the same backend datastore, which from the other peers' perspective, creates the effect of multiple peers being present and holding a vast collection of the provider records in the network.

The Hydra Booster has been instrumental for the stability and fast content resolution of the IPFS network. Thanks to hydra booster, we now have a new lens into the activity of the network: we can see how much data is being provided, view the multiple versions running on the public network, and track how many data queries are resolved and how many fail.

The Hydra Booster is [fully open source](https://github.com/libp2p/hydra-booster) and can be deployed by anyone.

#### Gossipsub v1.1

Gossipsub is one of the many libp2p PubSub routers used to disseminate IPNS records, enable real-time distributed applications, and much more. Because GossipSub was adoptied as a messaging layer by Filecoin and Ethereum 2 due to its functionality and fast performance on permissionless networks, we found it necessary to invest additional effort to protect it against sybil attacks and malicious behaviour in general.

Together with the libp2p team, we embarked on a mission to harden the protocol's behaviour. The outcome is a hardened version of the Gossipsub protocol that integrates several mitigation strategies *at the protocol level*. The results are quite impressive, especially if we consider that the enormous amount of research in the area of pubsub has generally outsourced security considerations to higher levels of the stack (i.e. the application layer), instead of integrating them at the protocol level.

Learn more about:

- The features of Gossipsub-v1.1 in this [blogpost](https://research.protocol.ai/blog/2020/gossipsub-an-attack-resilient-messaging-layer-protocol-for-public-blockchains) and this [paper](https://research.protocol.ai/publications/gossipsub-attack-resilient-message-propagation-in-the-filecoin-and-eth2.0-networks/vyzovitis2020a.pdf)

- The protocol's exhaustive testing with dozens of test scenarios and hundreds of experimental runs on our Testground-based AWS VM-testbed in this [Performance Evaluation Report](https://research.protocol.ai/publications/gossipsub-v1.1-evaluation-report/).

- A [Gossipsub v1.1 talk](https://www.youtube.com/watch?v=APVp-20ATLk&feature=youtu.be&t=3612) at the Matrix.org "Open Tech will save us all" event

#### Drand, League of Entropy and the Randomness Summit

The world needed a dependable and  [unbiasable source of randomness](https://www.coindesk.com/randomness-internet-age) which other platforms and applications publicly verify. Randomness is at the core of many of the security-critical operations we perform online  every day, and until 2020, there wasn't a single reliable and trustworthy source. That changed in 2020.

We selected the drand protocol and made it production-grade. The results are astonishing: with a live deployment hosted by more than 15 independent members of the League of Entropy, drand is now available for any project that needs randomness. Learn all about it at the [launch post](https://drand.love/blog/2020/08/10/drand-launches-v1-0/).

To celebrate, we organized a virtual Randomness Summit with ETHGlobal, world experts at organizing professional and technologically advanced events. You can watch all the talks at [randomness2020.com](https://randomness2020.com).

#### Filecoin

ResNetLab was part of the amazing push to launch Filecoin for multiple months with the whole Protocol Labs team. We had the opportunity to contribute to protocol review, implementation, infrastructure deployment, and monitoring. If you want to dive deep and learn about Filecoin, we welcome you to review all the amazing talks from [liftoff week](https://liftoff.filecoin.io/).

We shipped a new version of the Filecoin specification and website, making Filecoin a much more welcoming project for implementers, builders, and researchers. Find the launch post [here](https://filecoin.io/blog/filecoin-spec-update/) and the full spec website at [spec.filecoin.io](https://spec.filecoin.io/).

#### Drive IPFS file-transfer speedups - Beyond swapping bits

We set ourselves the challenge of exploring ways to make IPFS blazing fast. This was the inception of the ["Beyond Swapping Bits" project](https://github.com/protocol/beyond-bitswap), whose main goal was straightforward: driving speed-ups to file-transfer in IPFS.

In less than four months, we've achieved some phenomenal contributions to Bitswap and set the [groundwork](https://research.protocol.ai/blog/2021/beyond-swapping-bits-project-review-and-preview/) for other researchers and teams to build upon our work. A few highlights of the **Beyond Bitswap** project are:

- [A list of 10 RFCs](https://github.com/protocol/beyond-bitswap#enhancement-rfcs) with potential ways of improving file-transfer speeds in IPFS and P2P networks.

- A [complete testbed](https://github.com/protocol/beyond-bitswap/tree/master/testbed) to benchmark and debug file sharing in IPFS.

- Prototypes for 3 of the RFCs with an [extensive (and repeatable evaluation)](https://github.com/protocol/beyond-bitswap/tree/master/RFC). Our prototypes have ranged from the use of compression in Bitswap and libp2p to achieve bandwidth savings of up to 75% compared to the baseline, to the use of a TTL field in Bitswap messages and the inspection of requests to increase Bitswap's range of discovery and file transfer speed by up to a 20%.

- The [publication of an academic paper](https://research.protocol.ai/publications/accelerating-content-routing-with-bitswap-a-multi-path-file-transfer-protocol-in-ipfs-and-filecoin/) presenting Bitswap as a content routing system's accelerator and desccribing many of the contributions of the project.

### 🎫 Events

We at ResNetLab love to be close to the community of researchers and developers and share the latest developments in distributed systems research. It is always both humbling and insightful to have the chance to present to an audience of seasoned experts and answer their questions. We deliberately take on the responsibility to publish these presentations and associated questions as blog posts so that everyone can benefit from the answers.

#### ResNetLab on (Virtual) Tour 2020

We have built a half-day tutorial to introduce the DWeb, the IPFS ecosystem, the IPFS architecture and its supporting protocols, and the high-level design decisions of the Filecoin network. In 2020, we have travelled virtually to multiple conferences and other academic events to bring the exciting projects we're working on and invite great researchers to collaborate with us.

The tutorial is primarily composed of lecture material, and many of our tutorials have been very interactive. In 2021, we are enhancing the tutorial with hands-on sessions, so it will be even more exciting for students and researchers with a passion to tinker as they learn.

In the links below, you will find the blogosts describing the events we participated in. If you want us to speak to your lab or event, give us a [shout](resnetlab@protocol.ai)! We will be honored!

- March 2020: [NDN Project Consortium](https://research.protocol.ai/blog/2020/ndn-seminar-a-high-level-overview-of-the-interplanetary-file-system/)

- April 2020: [IRTF DINRG](https://research.protocol.ai/blog/2020/ipfs-talk-at-the-irtf-decentralised-internet-infrastructure-research-group-meeting)

- May 2020: [IEEE ICBC](https://research.protocol.ai/blog/2020/ieee-icbc-2020-the-interplanetary-file-system-and-the-filecoin-network/)

- May 2020: [NGN Group](https://research.protocol.ai/blog/2020/next-generation-networks-ngn-group-talk-a-high-level-overview-of-the-interplanetary-file-system/)

- July 2020: [IFIP/IEEE DSN](https://research.protocol.ai/blog/2020/ieee/ifip-dsn-2020-the-interplanetary-file-system-and-the-filecoin-network/)

- November 2020: [CNSM](https://research.protocol.ai/blog/2020/ieee/ifip-cnsm-2020-the-interplanetary-file-system-and-the-filecoin-network/)

- December 2020: IEEE Globecom (blog post coming soon)

We also have more events lined up for 2021, with keynotes at the [IEEE Global Internet Symposium](https://infocom2021.ieee-infocom.org/ieee-global-internet-symposium-call-papers%5C) (taking place alongside IEEE Infocom this year) and the [24th Conference on Innovation in Clouds, Internet and Networks](https://www.icin-conference.org/keynotes/), as well as other events.

#### Additional contributions

In addition to the *ResNetLab on Tour*  series, we've also enjoyed the chance to contribute to other events focused on developers. You can catch up on the results at:

- [Matrix.org Virtual Meetup (2020-04-08)](/blog/2020/gossipsub-v1.1-at-open-tech-will-save-us-virtual-event/)

- [Ready Layer One (2020-05-04)](https://www.youtube.com/watch?v=H9Eb4uftrSA)

### 🤝Research Collabs

#### RFP recipients

At ResNetLab we love to work with bright teams and individuals to solve some of the most challenging and exciting problems in decentralised and permissionless P2P networks research. Early in 2020 we published two [Requests For Proposals (RFPs)](https://github.com/protocol/research-RFPs/): one on [Multi-Layer DHTs](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-7-MLDHT.md) and another on the [scalability bounds of pubsub systems](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-8-pubsub.md). Our target with these funded projects is to get ahead of the game and design protocols that will sustain IPFS's expected exponential growth. This funding round, we funded four great teams to tackle these projects! They are:

- [Prof. George Polyzos](https://www.aueb.gr/en/faculty\_page/polyzos-george) and his team at the [Athens University of Economics and Business (AUEB)](https://mm.aueb.gr/).

- [Dr. João Leitão](https://asc.di.fct.unl.pt/~jleitao/) and his team at the [NOVA University of Lisbon](https://www.fct.unl.pt/en/research/nova-laboratory-computer-science-and-informatics).

- [Dr. Sreeram Kannan](https://people.ece.uw.edu/kannan\_sreeram/) and [Shaileshh Bojja Venkatakrishnan](https://cse.osu.edu/people/bojjavenkatakrishnan.2) at the [University of Washington](https://www.ece.uw.edu/) and [Ohio State University](https://engineering.osu.edu/), respectively.

- [Dr. Hidehiro Kanemitsu](https://www.teu.ac.jp/grad/english/teacher/cs\_spc/index.html?id=45) and [Prof. Hidenori Nakazato](https://waseda.pure.elsevier.com/en/persons/hidenori-nakazato) and their teams at the [Tokyo University of Technology](https://www.teu.ac.jp/english/index.html) and [Waseda University](https://www.waseda.jp/top/en/), respectively.

You can read more details about the recipients of our first round of grants [here](/blog/2020/meet-the-latest-protocol-labs-research-grant-recipients/).

Although this round of RFPs has closed, we have more in the works for the second quarter of 2021, so [subscribe to our mailing list](http://eepurl.com/gNraX5), or reach out if you have ideas for collaboration. [RFP-0](https://grants.protocol.ai/prog/rfp-0) is always open to accept proposals.

#### Spontaneous collaborations

We are also open to collaborating beyond the RFP structure and are always receptive to spontaneous outreach. It has been really great to work with a variety of labs in an informal capacity, and these collaborations have yielded some really valuable results, including:

- A crawler of the IPFS network and a public service for monitoring network by the [Weizenbaum-Institute](https://www.weizenbaum-institut.de/en/research/rg17/):

  - [IPFS Crawler](https://github.com/wiberlin/ipfs-crawler)

  - [Live Monitoring](http://78.47.197.225/index.html)

- A series of vulnerabilities of the IPFS DHT and respective mitigations from the Technical University of Graz, which has made the IPFS DHT orders of magnitude more resilient:

  - [Report](https://blog.ipfs.io/2020-10-30-dht-hardening/)

  - [Paper](https://graz.pure.elsevier.com/en/publications/total-eclipse-of-the-heart-disrupting-the-interplanetary-file-sys)

- A new PubSub routing algorithm, named PulsarCast, from INESC-ID Lisboa, at University of Lisbon:

  - [Presentation](https://www.youtube.com/watch?v=pP0fS-FCsjE)

  - [Code & Testing Harness](https://github.com/ipfs/notes/issues/266#issuecomment-605923269)

  - [Paper](https://github.com/JGAntunes/pulsarcast/blob/master/paper/paper.pdf)

## 🧘🏽‍♀️ Reflection

It goes without saying that 2020 has been an incredibly strange and challenging year by multiple definitions. Now we have experienced what the impact of a global-scale pandemic can be when we are caught unprepared. We believe that it is of utmost importance to continue building resiliency into our society -- not just our information systems -- and to create and improve upon existing governing and decision-making structures in order to rapidly distribute knowledge so that we are better prepared to react to future challenges.

We at ResNetLab will continue to focus on doing what we do best: building resiliency into the fabric of distributed systems through open collaboration. Our mission is *to build resilient distributed systems, by creating and operating a platform where researchers can collaborate openly and asynchronously on deep technical work.*

Throughout the year, we've identified and catalogued what are still some significant [Open Problems](https://github.com/protocol/ResNetLab/tree/master/OPEN_PROBLEMS) in the space that need to be solved in order to unblock a whole new set of users and applications to join the Distributed Web. These include:

- Achieving [full privacy-preserving primitives](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/PRESERVE_USER_PRIVACY.md) that do not leak important information and/or users intent through side-channel attacks.

- [Scaling Content Routing to billions of users](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md) in order to support the rapid adoption of the Internet by the world's population and the even fastest growing number of devices per person.

- [Bringing full support to the P2P Stack to all kinds of different runtimes](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/HETEROGENEOUS_RUNTIMES.md) (VR, Mobile, IoT, etc) in order to secure the interoperability and upgradability of those additional platforms.

- And other equally important problems that you can find on the [ResNetLab's Open Problem list](https://github.com/protocol/ResNetLab/tree/master/OPEN_PROBLEMS).

Overcoming these challenges requires novel solutions that undergo rigorous testing and review by multiple experts in order to ensure that no potential gap is missed.

**At ResNetLab, we developed a culture of rigorous evaluation of our hypotheses**, creating the infrastructure necessary to get accurate answers. In 2021, we will continue to investigate how to accelerate the pipeline that pushes ideas from research to deployment. Some of the initiatives that we took on in 2020 and we seek to continue pursuing in 2021, as they proved to be of high value to the research ecosystem and respective deployments, are:

1. Ensuring that the work produced is published in the form of papers (e.g. [the Gossipsub paper](/publications/gossipsub-attack-resilient-message-propagation-in-the-filecoin-and-eth2.0-networks/), [Gossipsub's performance evaluation report](/publications/gossipsub-v1.1-evaluation-report/), [the Pulsarcast](https://github.com/JGAntunes/pulsarcast/blob/master/paper/paper.pdf) ), lectures ([the Randomness Summit](https://randomness2020.com/), [an invited lecture on Gossipsub at the Matrix meetup](https://www.youtube.com/watch?v=APVp-20ATLk&feature=youtu.be&t=3612), [showcasing our test setup for P2P networks](https://www.youtube.com/watch?v=pP0fS-FCsjE), [Gossipsub at the Filecoin Liftoff week](https://www.youtube.com/watch?v=paWmKqi8MZk), [our IPFS, libp2p tutorial at the IEEE ICBC'20 conference](https://drive.google.com/file/d/1OcHjR1XA1E8To3qpw3fnsEQe-xSKFGy3/view), [Pulsarcast in action](https://www.youtube.com/watch?v=D2UKQPKMjr4&list=PLhuBigpl7lqu6xWpiXtbEzJQtlMH1tqoG&index=16), [a seminar on IPFS presented at the NDN project consortium](https://www.youtube.com/watch?v=Jy5__VuwZC0), [a introductory presentation on IPFS at the IRTF DINRG Group](https://www.youtube.com/watch?v=K4Usud4g4iY&feature=youtu.be&t=1008)), posts (on [Bitswap compression](/blog/2020/honey-i-shrunk-our-libp2p-streams/), [Bitswap WANT message inspection](/blog/2020/two-ears-one-mouth-how-to-leverage-bitswap-chatter-for-faster-transfers/), [Bitswap TTL extension](/blog/2020/teaching-bitswap-nodes-to-jump/), [Bitswap combined improvements](/blog/2021/our-bitswap-nodes-have-become-jumping-inspectors-updated/), and [a high-level description of Gossipsub's hardening features](/blog/2020/gossipsub-an-attack-resilient-messaging-layer-protocol-for-public-blockchains/)), and more.

2. Continuing to make research repeatable and measurable from the start, by crafting an evaluation plan and delivering the evaluation. Two great examples are:

    - [Evaluation & Report for GossipSub](/publications/gossipsub-v1.1-evaluation-report/)

    - [Beyond Bitswap](https://github.com/protocol/beyond-bitswap) and the [Testing Harness](https://github.com/protocol/beyond-bitswap/tree/master/testbed)

3. Continuing to make all code available under the [Permissive License Stack](https://protocol.ai/blog/announcing-the-permissive-license-stack/), enabling others to learn from it and build on top of it.

4. Supporting academic research through our multiple collaborations by providing infrastructure for testing hypotheses and publishing the results. A good example are the results published by the [DHT Hardening collaboration](https://blog.ipfs.io/2020-10-30-dht-hardening/).

## 🔭 Looking forward

Our foci for the first half of 2021 will be **Decentralized Data Delivery Markets (3DM)** and **Networking in Heterogeneous Runtimes (NHR)**. Both of these areas are ripe for new research and significant leaps forward.

With the successful launch of the Filecoin network, there is a unique opportunity to make a significant contribution to the content delivery networks research area by combining it with decentralization and an open market. We believe that there is space for creating a highly-efficient auction setup optimised towards rapid decentralised data delivery, just like [it exists for electricity](https://en.wikipedia.org/wiki/Electricity_market#Wholesale_electricity_market). The core challenge is not product or UX, but technical: the metering of network usage so that a fair and verifiable trade can happen. Once this primary obstacle is out of the way, it is then a matter of optimising the resource utilisation of the network with better routing approaches. Although the sub-topics of the larger problem have been investigated in different research fields in the past, *decentralised content delivery networks through built-in incentives* have never been built before. We are very excited to have the opportunity to design and develop the first 3DM of its kind!

As for Networking in Heterogeneous Runtimes, we believe that IoT, VR, Mobile, VANETs and all sorts of embedded devices are here to stay, and that we are on the verge of setting the course of history by making P2P a first-class citizen of those runtimes. We want to work with integrators and leaders building the stacks for these different runtimes and explore ways to integrate libp2p, the P2P stack.

We will be publishing our progress on this blog. Meanwhile, you can consult our [new Open Problem for NHR](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/HETEROGENEOUS_RUNTIMES.md).

If you find either or both of these areas fascinating, have a deep passion for decentralisation, and you don't shy from large challenges, **consider joining and/or collaborating with us by applying for an [open position](https://jobs.lever.co/protocol?department=Research) or a spontaneous [RFP](https://protocollabs.smapply.io/)**.

Once more, we want to thank all those that have followed and supported our work. We look forward to all the future collaborators and the results we will be producing together.

We bid you all a great 2021,

The ResNetLab Team -- David Dias, Yiannis Psaras, Alfonso de la Rocha

<center>{{< figure src="/images/resnetlab/resnetlab_logo_lightviolet.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>

