---
# Blog post title
title: "ResNetLab on Tour: Blockchain@Berkeley"

# Website post date
# format YYYY-MM-DD
date: 2021-05-13

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
  - news

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

We were delighted to present our brand new [ResNetLab on Tour](/tutorials/resnetlab-on-tour/) programme to the vibrant community of the [Berkeley’s Blockchain Innovation Hub](https://blockchain.berkeley.edu/) on April 28th and 29th!

The ResNetLab on Tour programme is a one-stop-shop for all things IPFS and Web 3.0. We were joined by more than 20 students, researchers, and academics in what proved to be a very interactive event with lots of discussion. 

For this edition at Berkeley, we ran a two day agenda:
- On the first day we presented the first four core modules of the ResNetLab on Tour programme.
- On the second day we ran a hands-on session, where participants deployed their website on IPFS.

## Q&A

We received some really great questions, and we would like to share our answers with our web readership:


*Q: Could you please explain a bit more about how blockchain will be integrated into the current web ecosystem?*

A: There is no single way of integrating blockchains into the current web ecosystem. Different applications have different needs, and different platforms pose different requirements. Overall, blockchain technology offers a *layer of trust* between different participants in a system without third-parties or large providers having to orchestrate these relationships. This gives users the ability to become both clients and providers of a system, collaborating to provide large scale services without having to resort to large providers. Blockchain technology lowers the barriers for the deployment of new systems and disruptive applications. Individuals can collaborate to create new systems and compete against big tech providers. Additionally, this layer of trust offers the ability to deploy systems with an enhanced level of privacy and ownership for users. 

You can take [Filecoin](https://filecoin.io/) as an example of a decentralised and incentivised storage network. Miners provide storage and participate in the blockchain network, proving that they indeed keep data stored according to the deals they signed. Then, there are applications that can use the base storage layer on which to build different features, optimisation, and functionality. For instance, there can be file storage applications, similar to the cloud services that we have today: see for instance ChainSafe’s [Files](https://files.chainsafe.io/), or video storage and streaming services such as [file.video](https://file.video). If any of those businesses shut down, the users’ data will still be available on the Filecoin network -- of course, without the functionality and features that the applications provide.


*Q: Is there only one IPFS? Or are there variants like the several different blockchains?*

A: There is one public IPFS network, but running the IPFS stack does not mean that one has to connect to the public network. You can run the IPFS stack as a private network among the nodes of your network or users of your application. Furthermore, all of the protocols and constructions of the IPFS stack (e.g., libp2p, IPLD) can be used independently of the rest of the protocol stack.

There is also the [IPFS Cluster](https://cluster.ipfs.io) construction, according to which peers have to be added/accepted into the cluster to participate in the network. Data added to one of the cluster’s peers is exclusively replicated to the peers in the cluster. The cluster can be connected to the public IPFS network to access public content and interact with the rest of the peers in the network, but it  does not have to be.


*Q: Is there content that IPFS isn’t able to store? What about dynamically generated files?*

A: Any type of content can be stored in the IPFS network. Dynamic (or otherwise called “mutable”) content is also supported through the InterPlanetary Name System (IPNS). You can find a tutorial on Mutable Content on IPFS [here](/tutorials/resnetlab-on-tour/mutable-content/).


*Q: Does IPFS work like a blockchain? I have seen discussion of a consensus algorithm.*

A: IPFS does not work like a blockchain and neither does it use a blockchain. IPFS is a decentralised P2P and content-addressable storage and delivery network. IPFS is ideal for storage of blockchain data and is being used in this capacity.

*Q: What’s the pricing/cost of storing data on IPFS?*

A: Using the IPFS network is free. Note, however, that data added to the IPFS network is not automatically replicated to other nodes: in other words, IPFS does not provide availability guarantees. [Filecoin](https://filecoin.io), which builds on top of IPFS, is a persistence layer that provides availability guarantees for user data.

*Q: How is IPFS different from BitTorrent?*

A: Both IPFS and [BitTorrent](https://www.bittorrent.com/) are permissionless P2P networks. However, IPFS brings content-addressing into the picture, which provides a host of  benefits such as de-duplication and nearest-replica routing, self-certification, and integrity checking out of the box. These benefits significantly improve delivery performance and reduce both overhead and server and network load, in addition to providing the end user  with the power to check the integrity of the content they have received from the network. You can find more about the details and the benefits of content addressing in [this tutorial](/tutorials/resnetlab-on-tour/content-addressing/).

*Q: If you have a private IPFS cluster, is it easier to remove data? Is it costly to delete?*

A: IPFS Cluster nodes replicate state between them. When data is added or deleted from one peer, the update propagates to the rest of the cluster peers: therefore, deleting or removing data happens automatically. IPFS Cluster uses Merkle CRDTs to replicate state and resolve state update conflicts. You can read more about Merkle CRDTs in this [paper](https://arxiv.org/abs/2004.00107).

*Q: Are there restrictions on what type of data can be chunked? Can we chunk video content?*

A: Any type of content can be chunked, added to the IPFS network, and retrieved in a chunk-based fashion. You can find more details about chunking in IPFS in the [IPFS documentation](https://docs.ipfs.io/concepts/file-systems/#unix-file-system-unixfs). There are already products, such as file.video ((https://file.video), that use IPFS-style chunking and storage on Filecoin. A walkthrough of one of the many approaches can be found [here](https://blog.fission.codes/experimenting-with-hls-video-streaming-and-ipfs/).

*Q: To what extent can chunking be customized per file?*

A: Chunking is a process done by IPFS when you add a file in your local node: the chunk size chosen is the default size used by IPFS. This parameter can be adapted by the user (using the `-s` flag in the `ipfs add` command) according to the application’s requirements. You can read more about chunking in IPFS’s [UnixFS](https://docs.ipfs.io/concepts/file-systems/#unix-file-system-unixfs) and you can visualise your DAG and play around with different chunk sizes in [dag.ipfs.io](https://dag.ipfs.io).


*Q: Web 2.0 offers us many applications and a smooth user experience. Are we in a position today that we feel that we need to leave everything behind and move to a distributed web, or can specific applications benefit from this shift?*

A: We should not see the shift to Web 3.0 as a comprehensive move away from the applications and the experience we have today. We should rather see it as a *migration*, where every application will be able to deploy the same features and the same experience to an updated infrastructure. In that sense, we will not leave behind what we have, but rather update the foundations upon which applications build.


*Q: Are there built-in mechanisms to support versioning, e.g. how do you know that you have requested the latest (or original) version of a file or chunk?*

A: IPFS CIDs are immutable. Therefore, you can always have access to previous versions of a published document, as long as this is still being provided by the original publisher or another peer in the network. You can find out more about how IPFS deals with dynamic, mutable content in [this tutorial](/tutorials/resnetlab-on-tour/mutable-content/).
 
*Q: Does Filecoin use IPFS for its content delivery?*

A: Yes, Filecoin can use IPFS for content delivery, but it is not restricted to IPFS only. There are already tools, such as [Textile’s](https://www.textile.io/) Powergate that provide this functionality. You can read more about it in [Powergate’s documentation page](https://docs.textile.io/powergate/).
 
*Q: How fast is IPFS in practice, particularly compared to regular Web 2.0?*

A: IPFS has comparable performance to traditional Web 2.0 today (with some strong and some weak points) but includes all the required components to become much faster in the future. In particular, content addressing enables a multitude of features that are not possible with traditional HTTP. For example, with content addressing the network can achieve nearest-replica routing, or which means it can resolve the closest copy of the requested content. This is very powerful and can increase performance significantly while reducing network and server load. Furthermore, with content addressing one can find content in local environments disconnected  from the global network, again, something that is not possible with the current Web 2.0 infrastructure and protocols.
 
All that said, the IPFS network is expected to increase by several orders of magnitude in size and traffic demand, and the supporting protocols of the IPFS stack will have to evolve and adapt accordingly. Check our [Open Problem on Content Routing Scalability](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md) for a more detailed description of the expected challenges as the network grows.
 
*Q: Could you explain what Bitswap does? Does it work with a DHT? Is it only involved in asking neighbors?*

A: Bitswap has two main uses in the IPFS architecture:
1. It acts as an enhancement of the content discovery mechanism (e.g., the DHT) and asks the requesting peer’s immediate neighbours (i.e., the peers that the requestor is already connected to) for the content in question.
2. It is the main content exchange protocol of the IPFS architecture and it is used to exchange content between peers once the content discovery/resolution phase has completed, i.e., once the peer that hosts the requested content has been found.
 
In brief, the sequence of content discovery and content exchange is as follows:
1. Bitswap asks its immediate peers for the Content Identifier (CID) of the content that the requestor wants to fetch.
2. In parallel to step 1, the requestor asks the DHT for the provider record of the CID that the requestor wants to fetch.
3. When the requestor receives an answer either through step 1 or step 2, Bitswap connects to the peer that hosts the content and facilitates the content exchange.
 
You can find more information about Bitswap in this [tutorial on Content Exchange](/tutorials/resnetlab-on-tour/content-exchange/), this [paper](/publications/accelerating-content-routing-with-bitswap-a-multi-path-file-transfer-protocol-in-ipfs-and-filecoin/), and this [documentation page](https://docs.ipfs.io/concepts/bitswap/#bitswap).
 
*Q: How do you address the privacy implications of fetchers of content becoming temporary content providers?*

A: By default, an IPFS node announces to the rest of the network that it is willing to share every CID in its cache (in other words, re-providing content that it has retrieved from other nodes), as well as CIDs that you've explicitly pinned or added to your local IPFS node in order to make them consistently available. If you'd like to disable this behavior, you can do so in the [reprovider settings](https://github.com/ipfs/go-ipfs/blob/master/docs/config.md#reprovider) of your node's config file.
 
Changing your reprovider settings to "pinned" or "roots" will keep your node from announcing itself as a provider of non-pinned CIDs that are in your cache. This is so that you can still use pinning to provide other nodes with content that you care about and want to make sure continues to be available over IPFS.
 
You can read more about IPFS and Privacy in this [documentation page](https://docs.ipfs.io/concepts/privacy/#ipfs-and-privacy).
 
*Q: If there are no incentives for storage space providers, what makes IPFS grow over time and still keep the distributed nature of the network? Relatedly — if there are no incentives, how do you guarantee there are no bad nodes in a non-permissioned, public IPFS network?*
 
A: It is important to understand that in IPFS users do not only provide storage, but they can (and often do) also publish their own content in the network. Self-hosting of content naturally incentivises end-users to host IPFS nodes and contribute to the network. The personal interest of users to pin and reprovide content that they deem important proves to be a significant driver for adoption of IPFS.
 
Furthermore, the incentives discussion is often framed around a user making a specific decision to host or not host some content on an IPFS node. The reality is that deployment in end-user scenarios doesn’t look like that: for example, in Brave, if the user has enabled the IPFS native node feature, the node rehosts IPFS content that the user has browsed, until that content is garbage collected. This provides “organic” resilience without a UX of individual file selection. 
 
Regarding bad nodes in the network: in a permissionless network you cannot guarantee that there are no bad nodes and instead the system should have all the security mechanisms in place in order to be resilient against attacks. We have not seen any malicious activity in the public IPFS network to date.
 
*Q: When a node leaves the IPFS network, does the DHT use consistent hashing to remap?*

A: Yes, when a node leaves the network the routing tables of DHT nodes are updated accordingly to reflect the current state of the network. The routing table update interval is set to 10mins.
 
*Q: Is Graphsync being used for syncing the Bitcoin blockchain? Is this a practical use case?*

A: [Graphsync](https://specs.ipld.io/block-layer/graphsync/graphsync.html) is not used in the Bitcoin blockchain. It is used in the Filecoin blockchain as part of the Data Transfer Module to transfer payload data between nodes that have agreed a storage deal, as well as to synchronize parts of the blockchain. You can find more details in the [Filecoin Specification](https://spec.filecoin.io/#section-libraries.ipld.graphsync).

<center>{{< figure src="/images/resnetlab/resnetlab_logo_blue.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion in <a href="https://github.com/protocol/ResNetLab/discussions">our GitHub forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
