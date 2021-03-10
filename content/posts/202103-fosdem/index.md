---
# Blog post title
title: "Protocol Labs at FOSDEM 2021"

# Website post date
# format YYYY-MM-DD
date: 2021-03-08

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - "Molly Mackinlay"
  - nicolas-gailly 
  - alfonso-delarocha
  - yiannis-psaras

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

[FOSDEM](https://fosdem.org/2021/) is one of the biggest events for software developers building open-source software. Founded in 2000, the conference takes place once a year in Brussels, gathering over 8000 developers, hackers and engineers from across the spectrum of software development.  Many of the contributors in the  IPFS/libp2p ecosystem have used FOSDEM as a meeting point and as an opportunity to demo progress in each of their projects.

In this year’s edition, we were thrilled to present the latest developments in the IPFS, libp2p, and Filecoin projects, and in  a new project deployed in 2020: Drand!

- **Molly Mackinlay**, who leads PL’s development work on IPFS & FIlecoin,  presented the benefits of building on top of IPFS and Filecoin and the opportunities these platforms create  for researchers and developers.
- **Nicolas Gailly**, research scientist in the Filecoin team, presented [drand](https://drand.love/), a distributed randomness beacon, and described  the necessity of such a system in decentralised network setups.
- **Alfonso de la Rocha**, research engineer at ResNetLab, presented the latest improvements proposed for IPFS’s Bitswap protocol and the performance benefits it brings.
- **Yiannis Psaras**, research scientist at ResNetLab, presented the technical design details of GossipSub, a pubsub protocol for transaction and block message propagation in the Filecoin and ETH2.0 blockchains.

## Q&A

As we always do when we attend a conference, here you can find the questions we received during the event together with their answers in text form, as a resource for the future reader.

### [IPFS & Filecoin Talk](https://fosdem.org/2021/schedule/event/open_research_filecoin_ipfs/)

*Q: What is the environmental impact of filecoin?*

A: Filecoin does not use Proof-of-Work consensus, so it is not as energy-consuming as other cryptocurrencies. Filecoin uses two consensus algorithms called [Proof-of-Replication](https://spec.filecoin.io/#section-algorithms.pos.porep) and [Proof-of-Spacetime](https://spec.filecoin.io/#section-algorithms.pos.post). These two algorithms guarantee secure and provable storage without excessive energy consumption. We do not however know of any study that measured the environmental footprint of Filecoin.

*Q: Web3 needs a new kind of infrastructure to work. How easy is it to get started and  for an org to get the stack working? Is there some existing, well-maintained open network?*

A: Indeed, Web3 needs several different network components to improve on the current Web2.0. A key ingredient of building Web3 is the community surrounding it. In that sense, the open-source nature of most Web3 projects is key to success. Both the IPFS and Filecoin networks in operation today are open-source, community-driven, and permissionless when it comes to new nodes joining the network. To get started, check out the tools at https://filecoin.io/build/

*Q: Presumably the tokens must have some value, or otherwise gaining them wouldn’t be desirable and the system wouldn’t work, right?*

A: Yes, the tokens do need to have value in order to reward those who contribute to the network. The Filecoin network is supported by a robust crypto-economic model. You can read more about the exciting journey of building the Filecoin Economy in the following reports and blogposts:

- [Engineering Filecoin’s Economy](https://filecoin.io/2020-engineering-filecoins-economy-en.pdf) 
- [Introducing the Filecoin Economy](https://filecoin.io/blog/posts/introducing-the-filecoin-economy/)
- [Understanding Filecoin Circulating Supply](https://filecoin.io/blog/posts/understanding-filecoin-circulating-supply/)
- [Filecoin Network Economics](https://filecoin.io/blog/posts/filecoin-network-economics/) 

*Q: So you store data in return for credit to fetch data?*

A: Yes, both miners and clients pay for storage via Filecoin, which can be used to store or retrieve files in the network. In addition, miners are incentivized to commit storage to the network through block rewards, where reward is proportional to the amount of storage that a miner has committed to the network. Apart from the [storage market](https://spec.filecoin.io/#section-systems.filecoin_markets.storage_market), there is also the [retrieval market](https://spec.filecoin.io/#section-systems.filecoin_markets.retrieval_market), where retrieving data from the network is associated with a payment.

*Q: Is Filecoin an ETH2.0 coin?*

A: Filecoin runs its own blockchain and is not an ERC20 token. This makes it the first of its kind: a  decentralised storage network that runs on its own blockchain network. You can find more information about the network, including a dashboard with current  statistics, at this link: https://network.filecoin.io/#mainnet

### [drand Talk](https://fosdem.org/2021/schedule/event/drand/)

*Q: What is the trust assumption of drand? Do we need to trust the individual nodes to use the randomness?*

A: No. In order to use the randomness delivered by a drand network, you only need to trust the distributed public key that is created during the setup phase. There is no need to *trust* the randomness returned by individual nodes, since you can *verify* it thanks to the public key. You can see the public key at some endpoints, for example by using: `curl https://api.drand.sh/info`.

*Q: How can one compromise the network?*

A: An attacker needs to compromise more than 50% of nodes and access their private key in order to be able to derive future randomness. This is why the League of Entropy network puts significant  emphasis on node security and diversity. We have nodes deployed around the globe under different jurisdictions and different ISPs, as well as  self-hosted nodes that belong to different teams. Each deployment is different with regard to its diversity of deployed infrastructure and thus the resources needed to attack it. However all deployments must meet strict security requirements such as access logs and constant monitoring, to name a few. It is important to note that we are continually increasing the size of the League of Entropy network: the security of the network increases with the number of nodes it contains, since attackers need to compromise a larger number of nodes. We are approaching 25 robust, diverse nodes, including companies with extensive background and expertise in Internet security —  see the [drand website](https://drand.love) for more information.

*Q: Can I deploy my own drand network? What would be the benefit?*

A: Yes, anybody can deploy their own drand network. However, whether a separate drand network will provide a real benefit or not highly depends on the application. We have put a lot of effort into designing and deploying the most robust and secure drand network ever, so that the Internet can use it as a global randomness-as-a-service. 

*Q: What are the conditions that one needs to meet to become a node in the League of Entropy?*

A: The conditions cover a wide range of criteria given that the League of Entropy is a production-ready network. First of all, we require a high level of expertise in deploying and monitoring secure networked infrastructure. Secondly, a dedicated team that is reachable 24/7 in case of problems needs to be in place. Furthermore, we also aim for high diversity in terms of cloud providers (or self-hosting solutions), jurisdictions, and geographical locations. Even though we aim to be as open as possible (in the semi-permissioned model under which drand operates), joining the network as an individual is discouraged. You can find more information via [the drand Github repo and mailing list](https://drand.love/about/community/#mailing-list). 

*Q: Are there different implementations of drand?*

A: Currently the [main implementation](https://github.com/drand/drand) is in Go. Work on a  Rust implementation for drand is in progress. On the client side  (that is, in order to fetch and verify the randomness) there is a Go and a Rust implementation, as well as a wasm implementation that is compatible with the smart contract platform on the COSMOS blockchain.

### [Bitswap Talk](https://fosdem.org/2021/schedule/event/ipfs/)

*Q: How do Bitswap sessions discover peers to broadcast the initial request?*

A: Bitswap leverages already established connections in the node to broadcast its initial request. IPFS nodes keep a set of open connections from previous interactions with other peers in the network (after the node’s bootstrapping, through MDNS discoveries, DHT queries, previous content exchanges, etc.). Bitswap sends its broadcast requests to all of these established connections to populate its sessions with peers.

*Q: In baseline Bitswap, do peers forward messages (i.e. if peer A sends a want-have/want-block message to peer B, and peer B knows peer C, does peer B forward it to peer C)?*

A: No. In the baseline Bitswap protocol, peers only interact with their direct neighbors. Bitswap messages are only forwarded in the [“jumping Bitswap” prototype](/blog/2020/teaching-bitswap-nodes-to-jump/) implementation of the protocol.  In that protocol extension, a TTL field is added to Bitswap messages to allow messages to be forwarded to “neighbors of neighbors” up to the TTL value specified in the message.

*Q: How does Jumping  Bitswap avoid the same peer from getting the same message multiple times?*

A: There is no way of preventing a peer from receiving the same message multiple times. Peers may have several shared connections with several peers in the path, and the topology of the network is unpredictable. However, the protocol has several schemes in place to minimize the duplication of messages and reduce the flooding of messages in the network:
Jumping Bitswap nodes include a degree parameter to limit the number of messages that are forwarded. Thus, for a degree *d*, Bitswap nodes only forward requests to *d* of the peers in the session.
Jumping Bitswap nodes do not forward requests for CIDs for which they have already forwarded a request (even if the CID is being requested from another source node). This prevents the duplicate requests for the same CID.

### [GossipSub Talk](https://fosdem.org/2021/schedule/event/gossipsub/)

*Q: I was not here at the beginning of the talk: what is the relationship between Filecoin and Gossipsub?*

A: Filecoin is a blockchain network, and as every blockchain network it needs to propagate blocks and transaction messages between miners so that all nodes are in sync, reach consensus, and advance the blockchain. As most blockchain networks are primarily permissionless peer-to-peer networks, they need a message propagation protocol to deliver new blocks and messages to all nodes in the network.

GossipSub is the message propagation protocol for the Filecoin blockchain. It makes sure that: 
- all messages are delivered to their destination with bounded delay
- the network is not overloaded with traffic
The network stays resilient against a large number of very challenging attacks.


<center>{{< figure src="/images/resnetlab/resnetlab_logo_violet.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>