---
# Blog post title
title: "ResNetLab presentations at Devfolio's ETH India 2021 Fellowship"

# Website post date
# format YYYY-MM-DD
date: 2021-06-02

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - yiannis-psaras
  - alfonso-delarocha
  - "Dietrich Ayala"

# If applicable
categories:
  - blog

# If applicable
tags:
  -

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


Hot off the heels of [ETHDenver](https://www.ethdenver.com/), the largest Ethereum community event in North America, the Devfolio team who ran the hackathon platform for the event asked if we’d be interested in doing an IPFS training for another of their programs: the [Devfolio Ethereum India Fellowship](https://eif2.devfolio.co/). YES, we will always take these opportunities to educate and instruct developers who want to know more about IPFS, Filecoin, libp2p, and the menagerie of technologies in this interplanetary stack!

The Devfolio team planned three days of instruction, with Protocol Labs on day one and [Ceramic](https://ceramic.network/) and [Fleek](https://fleek.co/) on the following days. Most of the  program fellows have day jobs and would be joining the talk in their evening, so the format had to be short and allow for async activities.

We set up three components for day one, which allowed for both sync and async learning and a fun assignment:

1.  [Yiannis](/authors/yiannis-psaras/) and [Alfonso](/authors/alfonso-delarocha/) from PL’s [ResNetLab](https://github.com/protocol/ResNetLab) opened the day with three 20-min talks on
Content Addressing, Content Routing, and Content Exchange in IPFS.

2.  At that point, the audience was warmed-up and ready to continue with the great [Proto.school tutorials](https://proto.school/).

3.  Finally, an assignment was given to the audience to post a selfie, avatar, or favorite photo to IPFS and share the CID so that we could compile a class book!

We had 20 fellows join for the talks, received 20 CIDs from the assignment, and fielded some really good questions from the participants (answered below) — a great success all around!

## Q&A Session

***Q:** What’s the difference between ETH Patricia Tries and IPFS DAGs?*

**A:** An IPFS DAG is a Directed Acyclic Graph (DAG), where each node has an identifier which is the result of hashing the node’s content. Nodes can link to other nodes using the other nodes’ unique identifiers. In the end, IPFS DAGs are general data structures that represent linked data.

[Patricia Tries](https://en.wikipedia.org/wiki/Radix_tree), on the other hand, are specific data structures that organize the information using trees with four types of nodes: `EmptyNodes`, `LeafNodes`, `BranchNodes` and `ExtensionNodes`. Thus, IPFS DAGs, being general data structures, can be used to model Patricia Tries.

It is worth highlighting that there is an ecosystem of formats and data structures for building applications called the InterPlanetary Linked Data (IPLD) that includes all the assets required to model any kind of linked data structure, including Patricia Tries. Head over to the [IPLD](https://docs.ipld.io/) and [Multiformats](https://multiformats.io/) repositories to find out more.

***Q:** Isn’t there additional latency for content resolution traffic, that is, having to request multiple times for every block of the same content object?*

**A:** If the requesting peer resolves every single chunk through the DHT, then there is both extra overhead and increased latency. But this is not how IPFS works. Once the root CID of a content object is resolved and the PeerID that hosts the requested object is found, Bitswap takes over and adds the PeerID it has just found in a “session”. Bitswap then uses peers within this session to directly request subsequent CIDs of the same Merkle DAG, without needing to do the DHT “walk” again. Recall that the requesting peer can extract the CIDs of the next level of nodes in the DAG from the root CID (and in fact at any other level of the DAG), and ask for them through the session. Therefore, there is no extra traffic or latency to fetch the rest of the blocks within a content object, unless the peer identified only has a part of the whole object. You can read more on the details of Bitswap in [this technical report](publications/accelerating-content-routing-with-bitswap-a-multi-path-file-transfer-protocol-in-ipfs-and-filecoin/).

***Q:** Doesn’t it become easy to censor any file I don’t want in my network if I am providing the file to other peers?*

**A:** If the peer that wants to censor access to a file is the only one storing the content in question, then they can indeed avoid serving the content. However, this is unlikely to happen in practice: the original provider as well as other peers that have downloaded and/or pinned the content are still providing access to it. In this case, the content routing subsystems will make sure that these other peers can be reached by those that request access to the content item.

In other words, as with any system, if those who have the data do not want to serve it to others, they can refuse to do so. However, with IPFS and content addressing you don’t have to care who actually has the data and _anyone_ who has the data can serve it.

***Q:** How is IPFS different from torrent?*

**A:** IPFS and BitTorrent are two completely different protocols. They are both P2P protocols used for file-exchange, but they differ in many aspects of their design. Mainly:

-   Content in IPFS is found through its unique identifier, the [CID](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats), which is inferred from the actual content, ensuring the authenticity of the content. The structure of the CID includes several parts, as metadata that make it future-proof. For example, the hash function used is included in the CID itself and therefore, the user knows which hash to use in order to extract the hash from the CID. This further means that the same content can be represented by two different CIDs, but still point to the same file. The anatomy of the CID is discussed in detail in the [Content Addressing Module](/tutorials/resnetlab-on-tour/content-addressing/) of the ResNetLab on Tour Tutorial programme. You can also experiment with different CIDs and their breakdown at [cid.ipfs.io](https://cid.ipfs.io). In BitTorrent, content is typically represented by a SHA-1 hash (as part of a magnet link) or a .torrent file, which is a more verbose benconded representation of its metadata.

-  In IPFS, content is indexed globally (there are no swarms) and is found in a decentralized manner using the [IPFS DHT](https://docs.ipfs.io/concepts/dht/#kademlia). BitTorrent can use trackers, which are centrally governed servers used to find content in the network, or it can also use a DHT to discover peers associated with a given content item.

-   Finally, IPFS and BitTorrent use different file-exchange protocols. IPFS uses Bitswap as its main content exchange protocol, which allows clients to find and request the content that they seek from any peers that chose to provide the blocks, without limitations. BitTorrent is primarily a file-sharing platform and its [content-exchange protocol](https://www.bittorrent.org/beps/bep_0003.html) typically uses a “tit-for-tat” approach to ensure fairness in resource allocation: peers are able to download from other peers according to their upload-to-download ratio, a measure of the resources they are contributing to the system.

***Q:** Are there any incentives for providers to provide content? Torrents incentivize via private swarms to get access to specific content.*

**A:** It is important to understand that in IPFS users do not only provide storage, but they can (and often do) also publish their own content in the network. Self-hosting of content naturally incentivises end-users to host IPFS nodes and contribute to the network. The personal interest of users to pin and reprovide content that they deem important proves to be a significant driver for adoption of IPFS.

Furthermore, the incentives discussion is often framed around a user making a specific decision to host or not host some content on an IPFS node. The reality is that deployment in end-user scenarios doesn’t look like that: for example, in Brave, if the user has enabled the IPFS native node feature, the node rehosts IPFS content that the user has browsed, until that content is garbage collected. This provides “organic” resilience without a UX of individual file selection.

Filecoin comes as the incentive layer on top of IPFS to provide incentives for storage providers. You can find out more about Filecoin on the [Filecoin website](https://filecoin.io), the [Filecoin blog](https://filecoin.io/blog), or the [Filecoin spec](https://spec.filecoin.io/).

***Q:** How do peers broadcast? Does IPFS have a separate channel for that?*

**A:** When peers want to publish content in the IPFS network, they construct and publish a provider record for the content item. This provider record points to the node of the content publisher and is stored in 20 peers, according to the Kademlia DHT rules. These 20 peers are then responsible for sending the provider record (and therefore, pointing to the peer that stores the actual content) to anyone requesting the content. You can find out more about how the IPFS DHT works and how it chooses where to store the provider records in the project’s [documentation pages](https://docs.ipfs.io/concepts/dht/#kademlia).

***Q:** How do Bitswap sessions discover peers to broadcast the initial request?*

**A:** Bitswap leverages already established connections in the node to broadcast its initial request. IPFS nodes keep a set of open connections from previous interactions with other peers in the network (after the node’s bootstrapping, through MDNS discoveries, DHT queries, previous content exchanges, etc.). Bitswap sends its broadcast requests to all of these established connections to populate its sessions with peers.

<center>{{< figure src="/images/resnetlab/resnetlab_logo_violet.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion in <a href="https://github.com/protocol/ResNetLab/discussions">our GitHub forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
