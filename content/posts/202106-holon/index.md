---
# Blog post title
title: "ResNetLab on Tour in Australia"

# Website post date
# format YYYY-MM-DD
date: 2021-06-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - yiannis-psaras
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
  - resnetlab

# Not used
draft: false



---

On May 5th, ResNetLab participated in a flagship event that involved four major universities in Australia — Royal Melbourne Institute of Technology (RMIT), University of New South Wales, Australian National University and Macquarie University — and lots of Web3.0 enthusiasts from APAC. The event, which was organised by RMIT Hub for Blockchain Innovation, the largest blockchain hub in the area, and Holon Investments, a fund that invests in next generation decentralized technologies, was professionally organised and extremely smooth.

Almost 100 event participants engaged with our content. We posed several quiz questions during the Q&A which rewarded correct answers with Filecoin!

The event has been the first of a series of events that the organisers want to put together on decentralised technologies, Web 3.0, and IPFS and Filecoin.

We presented all five Core Modules of the [ResNetLab on Tour programme](/tutorials/resnetlab-on-tour/) and allowed enough time for interaction with the audience. We are sharing below the very insightful questions we received during the event for the readers of our blog.



## Q&A

### Module 1: Welcome to the Web 3.0

***Q:** Can you elaborate on what an NFT (Non-Fungible Token) is?*

**A:** Non-Fungible Tokens (NFTs) are a new exciting application of content-addressed data that require immutability. IPFS is the ideal storage solution for NFTs, with millions of NFTs already stored on the IPFS network. The IPFS team has recently built and released [nft.storage](https://nft.storage) - a service backed by Protocol Labs and Pinata specifically for storing NFT data. You can find more information and pointers in [this comprehensive blogpost](https://filecoin.io/blog/posts/introducing-nft.storage-free-decentralized-storage-for-nfts/).

***Q:** Is giving unique identity to each and every kind of data present on the web even feasible?*

**A:** From an addressing perspective and assuming that content-addressing is done through content-based hashing, then, yes, it is feasible. For instance, IPFS uses SHA-256, allowing for 2^256 different values, but larger hashes are always possible.  Furthermore, there are several versions of hash-functions with varying levels of collision resistance. When one of them is found to provide limited collision resistance (e.g., as computing advances), applications can use the next most difficult one. IPFS’s future-proofing addressing design accounts for such changes and can accommodate hash-function upgrades. You can find more information in the [IPFS documentation](https://docs.ipfs.io/concepts/content-addressing/#identifier-formats), this Proto School tutorial on the [Anatomy of a CID](https://proto.school/anatomy-of-a-cid) and the ResNetLab on Tour Module on [Content Addressing in IPFS](/tutorials/resnetlab-on-tour/content-addressing/). Head over to [cid.ipfs.io](https://cid.ipfs.io/) and enter a CID to get a breakdown of its several components.

The process that becomes challenging as the number of items in the system increases is that of _content routing_, or in order words, storing the records of the published items and finding them (i.e., discovering content) upon clients’ requests. You can find more details on this topic in the Open Problem Statement on Content Routing scalability [here](https://github.com/protocol/ResNetLab/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md). If you’re working on similar topics, we’d [love to hear from you](https://github.com/protocol/ResNetLab/discussions).

***Q:** Content sometimes may contain some metadata which doesn’t matter for the person who is requesting it. So whether the content address is different for the two copies of content with the same data but different metadata does not actually matter for the user. Is this addressed in IPFS?*

**A:** This is a great question and relates a lot with application design. It is worth clarifying that there are generally two types of metadata: i) the metadata included as part of the CID to describe the CID itself, and ii) application metadata, such as for instance, the resolution of the video. In the former case, the metadata is independent of the application and helps the client interpret the CID, so it’s necessary metadata (e.g. the CIDs of the same content that is hashed using different hash functions are different, so the client needs to know which hash function to use). In the latter case, the metadata does not need to affect the formation of the CID itself and can be left to the application layer instead. Ultimately, this is up to the application designer to leave application-specific metadata out of the content-based hashing procedure.

***Q:** How would IPFS make more efficient use of bandwidth resources?*

**A:** Content-addressing is a very powerful primitive which, if used correctly, can provide several noteworthy benefits. One of them is optimisation of bandwidth resources. This is because the content routing system can find the closest copy of the requested content and deliver that to the client. Bandwidth saving is straightforward, as data does not need to travel from far away. The ever increasing resolution of video, as well as users’ streaming habits make bandwidth optimisation a pressing problem.


***Q:** Are there things in Web 2.0 that can’t be or shouldn’t be shifted to Web 3.0?*

**A:** There are several characteristics of Web 2.0, which primarily relate to the location-based nature of the Web 2.0 protocol stack that are not possible to migrate to the Web 3.0. In fact, these are the motivating points behind the shift.

For instance, duplication of content both at rest and in transit results in significant bandwidth waste. Instead, deduplication and nearest-replica routing can bring huge optimisations in that respect. Furthermore, integrity checking of content received at the client side means that clients do not need to trust external sources (e.g. certificate authorities) to verify that the content received is the one requested.

Finally, censorship by oppressive regimes and other authorities is harder to carry out in Web 3.0, which means that freedom of information can be enhanced compared to the current status quo.

More generally, in Web 3.0, “base-layer protocols” will form the basis of applications building on top, somewhat similarly to HTTP. However, Web3.0 will expand to a lot more services than HTTP does, including storage and computation. This base-layer infrastructure will be empowered by blockchain technology and as such will remove the trust associated with applications from the application providers themselves.

You can read about the new opportunities created with the Web 3.0 stack in this [technical report](https://gateway.ipfs.io/ipfs/Qmb5tp5Qka7zaWa9pqHEh33CHdRmxBx6aa5XMfzDdmX7jQ). 


### Module 2: Content Addressing

***Q:** Suppose a client wants to fetch file **A** from server **P**. The client obtains the content address of **A** but it doesn’t have any other information about **A** or how to find it. What does it do next?*

**A:** The content address is enough information for the client to ask the content routing system where to find *A*. It is that system that will find out that server *P* has the content, a process commonly called content discovery. The same system will also find information on how to actually reach and connect to *P* to obtain the file. The process is described in great detail in the Content Routing module, which you can find [here](/tutorials/resnetlab-on-tour/content-routing/). 

***Q:** How many nodes store your file when you publish it in IPFS?*

**A:** Only one - your local machine! It is important to understand that when adding a file in IPFS, the file is not replicated to the rest of the network. It is your local node that pins and stores the file. Then, the content routing system is responsible for redirecting requests for the content you published to your node. In order to help with this process, your local node publishes a provider record which tells the content routing system that the file with CID_x is stored at your peer at PeerID_y. This record is sent to the peer which is closest to the hash CID_x in terms of XOR distance.

When other nodes request the content that your node has published, they fetch it from your node and reprovide it, i.e., serve as source nodes for the content. The more popular the content is, the more nodes will end up providing the content to the network.

You can find a detailed description of this process in the [Content Routing module](/tutorials/resnetlab-on-tour/content-routing/). 

***Q:** What mitigation factors are in place if multiple nodes are offline?*

**A:** There is a number of measures in place to account for node churn. These are:
1. The routing tables of peers in IPFS’s DHT refresh their routing tables every 10 mins to account for node churn.
2. Provider records expire 24hrs after publication. This means that content publishers have to re-publish the provider records for all content items that they have published every 24hrs. This measure is in place to account for peers that have left the system and force the original content providers to find new peers for the provider records.
3. IPFS has a default provider record republish interval of 12hrs to accommodate for record expiration, and the fact that peers storing provider records may leave the network.

***Q:** How does IPFS compare to Solid?*

**A:** Solid and IPFS are two different initiatives and projects that sit at different layers of the protocol stack. Solid introduces the concept of storing data in so-called storage “pods” and allowing the owner of the data to control access to the data within the pod (e.g. by granting, or revoking access). IPFS provides a decentralised storage and transport layer infrastructure for any type of data. That said, Solid pods can be stored in IPFS and served from there.

***Q:** How do you ensure access control over content published in IPFS?*

**A:** The [JSON Object Signing and Encryption (JOSE)](https://tools.ietf.org/html/rfc7520/) format is an IETF standard, which can be used as an IPLD codec (dag-jose) to put authenticated and encrypted data in IPFS. You can see an example [here](https://blog.ceramic.network/how-to-store-signed-and-encrypted-data-on-ipfs/). The dag-jose IPLD codec allows for creating data structures that are linked and
signed, which provides a form of access control in IPFS.

Furthermore, libp2p allows for the creation of private networks. You can find an example [here](https://github.com/libp2p/specs/blob/master/pnet/Private-Networks-PSK-V1.md).
 
If none of the above methods is used, then access control would require parties to exchange shared secrets out-of-band to encrypt their files before publishing them to the file system.

***Q:** Is data encrypted when stored in other nodes?*

**A:** Data published in IPFS is encrypted while in transit, i.e., when they travel over the network. IPFS does not encrypt data at rest, i.e., when they’re stored in other peers, but users and applications are free to publish encrypted data on IPFS. You can read more about IPFS and Privacy, as well as how to increase privacy when using IPFS in the IPFS documentation [here](https://docs.ipfs.io/concepts/privacy/#ipfs-and-privacy). 

***Q:** Is IPFS faster than the  client server model?*

**A:** IPFS can become much faster than the present client-server model due to its content addressing-based architecture. In particular, the fact that content is replicated and re-provided by peers that request it means that popular content gets to exist in many nodes in the network. The content routing system then makes sure that the closest copy of the content is served to requesting users.

In other words, in the client-server model, the system requests content from the one node that has declared to be serving the content. In a content-based addressing system, the system requests content from any node in the network and the closest one serves it.

***Q:** If a CID is computed for each leaf, when we ask for a file why do we ask for the root CID?*

**A:** Indeed, every leaf node of the IPLD graph has its own CID and can be requested independently of the rest of the file. However, in order to reconstruct the file from its pieces, one has to know how they’re linked together. This is what the IPLD graph does and it achieves this by the main property of Merkle DAGs, that is, linking to all children of an IPLD node from its parent(s). Therefore, starting from the root CID one can derive all of its children and then children of children, until leaves are reached. This also enables data that is distributed across different independent systems, data structures, or blockstores to be manipulated using one set of principles.

***Q:** Is IPFS similar to bittorrent?*

**A:** Both IPFS and [BitTorrent](https://www.bittorrent.com/) are permissionless P2P networks and use content hashes as identifiers, albeit in different ways (see [this tutorial](/tutorials/resnetlab-on-tour/content-addressing/) to learn more about content addressing and how it’s implemented in IPFS). However, IPFS provides a host of benefits that are very useful to a general-purpose system capable of providing anything from large files to whole websites trees. Some specific differences include the use of a global “swarm” for IPFS and the use of Merkle DAGs that allow for internal and external deduplication as well as random access into a DAG. Just as important are the UX differences, including browser support for native IPFS browsing and HTTP gateways that allow users to access websites stored on IPFS transparently.

### Module 3: Content Routing

***Q:** Assume I store a content item myself and become a permanent provider and then someone else also pins the content to become another content provider. Would I still be able to delete the content by sending a delete request to all the providers?*

**A:** At the base layer, in IPFS no single entity can dictate what content remains or gets deleted from the distributed network of peers; in particular, the original provider has no way of “forcing” the deletion of other copies. However, this does not mean that applications cannot build this functionality on top of the base IPFS protocol, or that deletion of content to align with regulations, such as GDPR, cannot be enforced. In fact, given content-based addressing in IPFS, one can implement content deletion programmatically at the application layer in a much easier fashion than what is possible today with HTTP.

***Q**: How is DHT proximity determined?*

**A:** IPFS uses the Kademlia DHT, where proximity is determined in terms of the XOR distance of Peer IDs and Content Identifiers (CIDs) in the DHT address space. Peer IDs and CIDs are hashed with SHA-256 in order to move them into the DHT’s address space. For more details on the design of the Kademlia DHT, please check the [original Kademlia paper](https://pdos.csail.mit.edu/~petar/papers/maymounkov-kademlia-lncs.pdf). 

***Q:** How do you prevent malicious files being published and duplicated to peers?*

**A:** In a permissionless network, such as IPFS, you cannot guarantee that there are no bad nodes or bad files published in the network. Instead the system, or application built on top should have all the security mechanisms in place in order to be resilient against attacks. This could include reputation systems for peers and content to flag malicious activity and disseminate it to the other peers in the network. It is nevertheless worth noting that IPFS does not automatically replicate files (malicious or otherwise) to peers; this only happens in response to a request by the peer.

This is an open research topic, so if you’re working in this space, get in touch. 

***Q:** Given that a file is stored only on one peer and not replicated, if a peer fails (e.g. goes offline) before the next 24 hours period (the time that the network checks the liveness of the peers), does that mean the data is lost?*

**A:** Given that content is not replicated to other peers in the network, unless others explicitly ask for the content item, then the content will not be reachable even if the original publisher goes offline after the 24hr period, i.e., at any point in time in the future. For the period between the publisher going offline and the liveness check (i.e., republication of pinned/stored items), the peers storing the provider record for the given content item point to an unreachable host. Frequent republication of provider records is an attempt to deal with this issue (peer churn) and there is a tradeoff between frequency of republication (of provider records) and traffic in the network.

***Q:** Is there a search engine over the content stored on IPFS?*

**A:** There are several projects that have worked on building a search engine for content published on IPFS. You can find one of them at [ipfs-search.com](https://ipfs-search.com/) and its source code at: https://github.com/ipfs-search/ipfs-search. 

***A:** Are there any plans of storing the metadata of the files on the network?*

**Q:** Content metadata can be considered as content themselves and be stored and addressed independently as content items/files. However, this is entirely application-specific, and would therefore, have to be done by applications building on top of IPFS. IPFS doesn’t enforce how to link files and metadata. For instance, IPFS can be used to store an NFT and its corresponding metadata, but is up to the DApp developer to decide how it accesses and links the NFT with the metadata. 

***Q:** From a security point of view, how secure is IPFS? What vulnerabilities would be present when using it?*

**A:** Security spans several layers of the protocol stack and is therefore difficult to give a holistic answer. However, it is worth noting the following:
[libp2p](https://docs.libp2p.io) supports transport connections over securely encrypted channels. What this means is that you can trust the identity of the peer you're communicating with and that no third-party can read the conversation or alter it in-flight. The current default is TLS1.3.
Furthermore, the fact that IPFS uses content-based addressing, based on hash functions (SHA-256, in particular, with the option to upgrade when needed) means that clients can apply integrity checking on the content they received. This further means that the network (or a malicious peer) cannot deliver any other content to the requesting peer, other than the one requested. You can find more details on this in the [Content Addressing module](/tutorials/resnetlab-on-tour/). 


### Module 4: Content Exchange

***Q:** Is it possible to have two streams of content-exchange open in parallel in an IPFS client? In addition is it possible to have a Bitswap and a Graphsync exchange going on in parallel? *

**A:** Yes, this is possible. Bitswap can handle several sessions in parallel, so you are able to fetch more than one piece of content at the same time with your IPFS client. Regarding having a Bitswap and Graphsync exchange running in parallel, that is also possible. Bitswap and Graphsync are independent protocols running in independent processes within the IPFS client, which means that they operate and fetch content independent of each other.

***Q:** Can two same blocks ever be in flight at the same time, and if so, what happens?*

**A:** Yes, it is possible that two peers reply to the same Bitswap content request simultaneously. However, the fact that if a peer has some part of the requested content item (especially the root CID) in store, it will most likely have the rest of the file too, means that the rest of the file transfer can continue from one of the responding peers only and not all of them. Therefore, the overhead can stay at low levels, given that the other connections are pruned.

Also, duplicate blocks (i.e. a block it had already received), or blocks that haven’t been explicitly requested by a peer are immediately discarded, so duplicate blocks in flight do not impact peer storage.

***Q:** What does the comparison between Graphsync and Bitswap look like? Which one is faster?*

**A:** There is no single answer to this question, as it depends on factors such as the type of data, the state of the network, and the specific use case. It is worth noting that Graphsync is not a replacement for Bitswap. As discussed in the [Content Exchange module](/tutorials/resnetlab-on-tour/content-exchange/), Bitswap has content routing capabilities, and is able to find content in the network; instead, with Graphsync you need to know if the other peer is storing the data you are interested in for the exchange to succeed. Bitswap needs to explicitly traverse the DAG structure in order to know what blocks to download from other peers; in Graphsync all of the desired blocks are implicit in the selector shared in the request. This is what allows Graphsync to send every block through a stream without further interactions between the requester and the responder. Finally, Graphsync only supports 1:1 exchanges, while Bitswap interacts with every peer in the corresponding session, supporting multiple streams for the download of the content.

All of these differences make Bitswap faster in some cases, and Graphsync in others. It is up to the user or application to assess the conditions and choose the protocol that better suits their needs. For instance, when fetching content for which the underlying DAG structure is deep and narrow (i.e. lots of levels with a small number of blocks per level), Graphsync will be faster than Bitswap (provided we know if the other node is storing the content). In particular, while Bitswap needs to have several back-and-forth interactions with a peer to discover the blocks in the subsequent levels, Graphsync uses selectors, which enables it to send all the blocks right away. For wide DAGs, we see the opposite behavior, as the moment Bitswap learns the blocks it has to download, it can leverage several peers to download the corresponding blocks simultaneously, while Graphsync is limited by the throughput of the stream. 


<center>{{< figure src="/images/resnetlab/resnetlab_logo_green.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on <a href="https://github.com/protocol/ResNetLab#research">our research topics</a> and welcome opportunities to answer questions and develop collaborations. Join the discussion in <a href="https://github.com/protocol/ResNetLab/discussions">our GitHub forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics. Active researchers may also be interested in our <a href="https://grants.protocol.ai"> funding opportunities </a></i></center>