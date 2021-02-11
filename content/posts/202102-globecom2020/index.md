---
# Blog post title
title: "IEEE GLOBECOM 2020 - The InterPlanetary File System and the Filecoin Network"

# Website post date
# format YYYY-MM-DD
date: 2021-02-11

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - david-dias
  - yiannis-psaras
  - alfonoso-delarocha

# If applicable
categories:
  - talks

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

---

[IEEE Globecom](http://globecom2020.ieee-globecom.org/) is one of the flagship IEEE ComSoc conferences in the field of networks and communications -- and, with over 2000 attendees, one of the largest conferences in the field.

We were very honored to deliver a half-day [Industry Tutorial on “The InterPlanetary File System and the Filecoin Network”](https://globecom2020.ieee-globecom.org/program/industry-tutorials#it-04) at IEEE GlobeCom 2020. In this workshop, we covered a broad part of the spectrum in the Web 3.0 space, including:

- DWeb/Web 3.0 Growth and Adoption
- IPFS and its protocol stack
- The modular networking stack known as libp2p
- The Decentralized Storage Market, Filecoin.

You can find more information on the content and the structure of the tutorial in our [flyer](IPFS-libp2p-filecoin_flyer_GLOBECOM2020.pdf).

We have also been present in the [Industry Presentations programme](https://globecom2020.ieee-globecom.org/program/industry-presentations#ip-03). Industry Presentations were organised to give emphasis on technical topics in communications and networking from a business point of view. There were multiple interesting talks, we highly recommend watching the recordings.

Throughout our contributions, we got a series of pertinent questions and as we love to do every time we attend a conference, here you can find the questions and answers in text as a resource for the future reader.

## Q&A

*Q: Could you elaborate the mechanism of “split factors” in peer selection?*

A: The “split factors” is a mechanism we had in place in previous versions of Bitswap in order to distribute CID requests among peers of a Bitswap session. If a session had, for instance, 9 active CIDs, 9 peers in the session and a split-factor of 3, peers p1, p2, p3 would all receive requests for CID1, CID2, and CID3; peers p4, p5, p6 for CID4, CID5 and CID6; and peers p8, p7, p8 for CID9, CID7 and CID9. This split-factor was updated dynamically according to the number of duplicate blocks seen by peers in the network. Hence,  the split factor was increased when the number of duplicate blocks increased, in order to spread the requests and avoid duplicate requests; and the other way round, when there were a lot of unique blocks or unsuccessful requests, the split-factor was reduced. 

Experiments showed that dynamically adjusting the optimal split-factor can be tricky, and that using a split-factor doesn’t reduce the number of duplicate blocks (which was the original aim of this feature). Instead of using a split-factor, the current implementation of Bitswap selects a peer from the session for each CID to whom to send the request. Peers are chosen at random with a probability equal to their ratio of success responding to previous requests. Thus, for a specific CIDi, if peer p1 has answered twice as many requests as p2 in previous interactions, then p1 has twice the probability of being selected as the peer to whom to send the request for CIDi. This is done for every alive CID. So instead of grouping peers and CIDs according to a split-factor, now each CID is assigned a peer randomly sending a single request to each of them, spreading in this way the requests for content. This scheme has shown to minimise the number of duplicate blocks compared to the use of a split-factor.

*Q: If the communication is unreliable, e.g., missing or corrupted data what happens in the proposed protocol?*

A: This is not a problem in Bitswap. The exchange of content is done block by block. If at one point a peer sends corrupted data, this will be immediately identified by Bitswap through the block’s CID and discarded. Bitswap will send requests to other peers in the session and will persist in the discovery until it fetches a correct (i.e., not corrupt) block. Moreover, if Bitswap loses the connection to one of the peers in the session from which it was retrieving blocks, the peer is removed from the session. In this case, Bitswap will try to retrieve the content from other peers in the session, or populate the session with new candidates storing the content.

*Q: How much storage is there on the Filecoin Network?*

A: There is already more than 2 EiB (Exbibyte) of storage committed to the Filecoin Network (at the time of writing) by approximately 800 miners. It is impressive that the network reached the 1 EiB milestone less than a month after its mainnet launch. To put this figure into perspective, 1 EiB is equal to 290M 1080p movies, 4,500 Wikipedias, 685,000 years of continuous video calls, or 19 copies of the entire Internet Archive!

It is worth highlighting that not all of this storage is filled with user data, instead, it is made available to the network, and therefore, to users to store their files on Filecoin. So, go ahead and get started with using Filecoin!

You can find much more information and guides in the [filecoin documentation site](https://docs.filecoin.io/) and all the technical details behind the Filecoin protocol’s constructions in the [Filecoin Specification](https://spec.filecoin.io/).

*Q: What applications is the Filecoin network suitable for?*

A: Filecoin will be suitable for any application that requires storage. In these early days of the network’s evolution (which launched on Oct 15th 2020, less than two months before IEEEGlobecom) it is ideal for large public datasets, such as scientific datasets. There are also some great applications already built on top of Filecoin, such as [Slate](https://slate.host/) a file-sharing application for data such as books, papers, photographs, podcasts and more. Please refer to this [blogpost](https://filecoin.io/blog/community-slate/) for more information.

There is active research and development going on at the moment to design the next version of Filecoin’s Decentralised Data Delivery Market, or in other words a decentralised Content Delivery Network (CDN). Stay tuned for more details in the next quarters of 2021!

<center>{{< figure src="/images/resnetlab/resnetlab_logo_green.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
