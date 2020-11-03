---
# Blog post title
title: '"Two ears, one mouth", how to leverage bitswap chatter for faster transfers'

# Website post date. Format YYYY-MM-DD
date: 2020-11-03

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



As part of ResNetLab's research endeavour to drive speed ups on file transfers, beyond swapping bits, we present a **new contribution to IPFS Bitswap protocol, that leverages the wealth of information currently discarded by Bitswap, in order to improve the retrieval success and minimize the latency while retrieving**. You can also read the last contribution [here](https://research.protocol.ai/blog/2020/honey-i-shrunk-our-libp2p-streams/)

Every research endeavour starts with a thorough analysis of the state of the art. This initial effort builds the foundation for the work to come. What we are doing differently in the drive speed-ups for file-transfer in P2P networks at ResNetLab is that beyond giving you the results and how to benefit from them, we want to guide you through the process we followed to reach these improvements: from the state-of-the-art, through ideation, prototyping, and to evaluation. We want to illustrate this process by documenting how we prototyped and evaluated the first improvement that brought around **25% improvements in the time to fetch popular content, and a reduction of the number of control messages exchanged in Bitswap by 75%. In other words, come for the results, stay for the scientific methodology and the repeatability of the evaluation, so that you can learn how to implement your own variations!**

# The contribution

After a thorough analysis of the Bitswap protocol, we realized that in their regular operation, nodes were discarding a lot of useful information from its connected peers. Our hypothesis was that if we managed to collect some of this discarded information we would be able to perform faster content discoveries, and consequently faster file transfers.

A piece of information nodes weren't leveraging and potentially useful to perform faster content discoveries was the specific content being requested by its neighbors. We implemented a new data structure, the peer-block registry, where nodes track the CIDs being requested by its connected peers. The peer-block registry is populated with the data extracted from the WANT messages received by a peer. The assumption is that a node requesting a specific CID will potentially have it in the near future.

We slightly modified the request for content in Bitswap so that instead of flooding every connected peer with a WANT message for the CID, if that CID has a candidate peer in the peer-block registry (i.e. a peer who has recently requested that CID) we directly request the content to the peer before doing anything else. If the node has the content, it immediately transfers the corresponding block without further interactions. If, on the other hand, the node doesn't have the content anymore, Bitswap falls back to its normal operation (broadcasting WANT messages until a provider with the content is found).

This new scheme showed promising results, reducing in one RTT the time required to discover and transfer popular content (previously requested by other nodes in the network), and reducing the amount of messages exchanged in the network by up to 75%.

# The methodology

## Building the foundation
-----------------------------

The foundation of this specific improvement was two-fold: first, we performed a thorough analysis of what was being done around file-sharing in P2P networks in academia; we then evaluated the current bottlenecks and limitations of an existing content exchange protocol over an existing P2P network, in our case Bitswap and IPFS, respectively. Needless to say, all of this work is a recurring one and not a one-time thing, and you can follow every update [here](https://github.com/protocol/ResNetLab/tree/master/beyond-bitswap/).

All of this work drove us to the realization that in Bitswap and IPFS, the discovery of the peers storing the content a user is asking for is blind and deterministic. When a client starts a query in the IPFS network, bitswap initialises content discovery by asking all of the peers it is connected to for the content's CID through a set of WANT messages. If this discovery fails, then the content is resolved using IPFS's/libp2p's DHT. No information of previous events that took place in the network is used to smartly direct this discovery.

With this in mind we started wondering, _"can't we use some information from the network to make more informed decisions and improve the efficiency of content discovery?"_. We started wondering what this information could be, when we came across [this slightly unrelated paper](http://www4.comp.polyu.edu.hk/~csbxiao/bittorrentweb/report/report.pdf). The authors of this paper suggested the inspection of requests from peers to identify nodes which underreport the stored content (i.e. that intentionally do not announce pieces of content they store). This simple concept inspired the RFC that we prototyped, evaluated and that led to our first improvements over file-sharing in IPFS.

The same way nodes in the aforementioned paper listen to requests to detect underreporting peers, we can use this same principle to track Bitswap's WANT messages from our peers so that whenever we want content that others have requested before, instead of polling the full network from scratch, we also ask nodes that have requested that CID beforehand, as they most likely will have the content by then.

## Discussing the RFC and building the prototype.
-----------------------------

The first thing we do whenever someone comes up with a new improvement idea is to [write an RFC in "brainstorm" ](https://github.com/protocol/ResNetLab/blob/master/beyond-bitswap/rfc/rfcBBL104.md)state, so that anyone can jump into the discussion and contribute to the definition of the prototype and the evaluation plan to test the improvement proposal. Once everyone is comfortable with the aspirations of the RFC, we move it to a "draft" state, and we start building the prototype.

We [forked the go-bitswap](https://github.com/adlrocha/go-bitswap/tree/feature/rfcBBL104) base code to build our prototype on top of it. A diagram of the implementation of the RFC over Bitswap is depicted in the figure below. You can read the details of the proposed RFC [here](https://github.com/protocol/ResNetLab/blob/master/beyond-bitswap/rfc/rfcBBL104.md), but the brief summary of our proposal is this: we suggest that Bitswap tracks every WANT message received and updates a peer-block registry which is brand new data structure introduced in our prototype that maps each CID seen by a node to the peers that have recently requested this particular CID. This information is then used by sessions to direct their search for content. Whenever a peer wants a CID, if the peer-block registry for that CID is populated with peers that already requested that content, instead of broadcasting WANT-HAVE messages to all his connected peers, it will only send a WANT-BLOCK to the n latest peers (with n=3 in the default implementation) of the peer-block registry. If the contacted peers have the content, they will immediately respond the WANT-BLOCK with the corresponding block, while if this is not the case, they will answer with a DONT_HAVE, and the peer will then perform the broadcasting of WANT_HAVEs to all its connected peers.

The expected impact of this scheme is the following: the time to first block (i.e. time to first byte - TTFB) will be reduced from at least two RTTs to one, as if the WANT_BLOCK hits a peer with the content it will directly answer with the content; while the penalization from not hitting a peer with content will be of just one RTT.

<center>{{< figure src="architecture.png" alt="Implementation Diagram" >}}</center>
  <p></p>

## Evaluation Plan and Results
-----------------------------

This prototype was focused on trying to validate our assumption that if we use previous information from events in the network we can drive faster and more efficient searches and transmissions of content. For the evaluation of our implementation we designed an experiment where 30 different leecher IPFS nodes request the XKCD image below with a size of 149 KB from a single seeder IPFS node providing it in the network.

To emulate the request of periodic content, leechers in the experiment request the content in waves of two nodes, in intervals of 5 seconds. Thus, for subsequent waves, previous leechers have already requested the content before.

<center>{{< figure src="xkcd.png" alt="xkcd image exchanged by nodes in our experiment" >}}</center>
  <p></p>


### Vanilla Bitswap Results

For the baseline implementation of Bitswap, the first retrieval is the slowest because only the seeder has the content. For the following waves, more nodes apart from the seeder already have the content, so when leechers broadcast their WANT-HAVEs they have a higher probability of hitting a node with the requested content.

Despite hitting a node with the content, the minimum number of RTTs required by the vanilla implementation of Bitswap to get the content are two: one for the WANT-HAVE broadcast, and another one to explicitly request the content with a WANT-BLOCK.

<center>{{< figure src="latency_full.png" alt="Time to fetch for baseline vs prototype (100 MB - 100 ms)" >}}</center>
  <p></p>

<center>{{< figure src="latency_zoom.png" alt="Time to fetch for baseline vs prototype (100 MB - 100 ms) - zoomed" >}}</center>
  <p></p>


### Want Inspection Results

For our modified implementation of Bitswap with the WANT message inspection mechanism, the time to fetch, and thus the time to first block for popular content, can significantly be reduced. Why is this?

As was the case for the baseline experiment, the first wave of leechers has no previous knowledge about where the content is, so the only thing they can do is to broadcast WANT-HAVEs, find the seeder, and request the content. For subsequent waves, though, peers have been listening to the WANT messages exchanged in the network by other peers, so before broadcasting WANT-HAVEs to every connected peer, they will send an optimistic WANT-BLOCK to peers that have previously requested that content. If they are lucky, they will hit the content in a single WANT-BLOCK and receive the block in that same interaction, reducing the time to fetch the content to a single RTT.

### Number of messages exchanged

The use of message inspection has another interesting result apart from the time to fetch improvement for popular content. The number of control messages exchanged by Bitswap nodes is significantly reduced. Keeping in the peer-block registry a list of peers that have recently requested a specific CID allows the transmission of the optimistic WANT-BLOCK preventing the need of broadcasting a WANT-HAVE to all our connected peers.

Thus, the average number of WANT messages exchanged is reduced by 33%, while the number of WANT-HAVEs is reduced by 75%. All of this for a slight increase in the number of WANT-BLOCK exchanged of 7%.

<center>{{< figure src="average_rfc.png" alt="Average number of WANT messages seen by peer in prototype" >}}</center>
  <p></p>


<center>{{< figure src="average_baseline.png" alt="Average number of WANT messages seen by peer in baseline" >}}</center>
  <p></p>

<center>{{< figure src="total_messages.png" alt="Total number of messages exchanged in the experiments" >}}</center>
  <p></p>

This improvement doesn't come without a small trade-off. The fact that we are sending an optimistic WANT-BLOCK to n peers from the peer-block registry which potentially have the content (in the default implementation n=3), means that the number of duplicates blocks exchanged in the network is slightly increased.

While in the vanilla Bitswap implementation a single WANT-BLOCK is sent to a peer that has answered that has the block, in our prototype we send three different WANT-BLOCK, and as we select the recipient peers from the peer-block registry, all of them will potentially have the block. The number of WANT-BLOCK messages to send to peers in the peer-block registry can be configured, so it could even be dynamically adapted to balance the trade-off between savings in WANT messages and duplicate if we want to optimize for bandwidth use.

<center>{{< figure src="data_rfc.png" alt="Data exchanged by peer in RFC" >}}</center>
  <p></p>

<center>{{< figure src="data_baseline.png" alt="Data exchanged by peer in baseline" >}}</center>
  <p></p>



## Conclusions and Future Work
-----------------------------

The implementation of this RFC stresses the usefulness of using information about file-sharing, network events, or other overlaying protocols to drive faster content exchanges. For this RFC, just by listening to the content a node's connected peers are requesting we can significantly reduce the time to fetch and the amount of control messages exchanged in the network.

We are already considering several points of improvement for our current implementation to get the most out of our WANT message inspection mechanisms such as:

-   The use of the characteristic time of the cache of IPFS nodes and other heuristics to avoid sending WANT-BLOCK to peers that may have already garbage collected the content we are looking for (as a way of cleaning and "garbage collecting" the information stored in the peer-block registry).

-   The dynamic configuration of the number of peers from the peer-block registry to whom to send WANT_BLOCK messages, so according to the state of the peer-block registry,  the specific application, the number of active connections, or the state of the network, we are able to perform smarter lookups either to make a more efficient use of bandwidth, or to minimize the time to fetch the content.

Even more, we are already devising the combination of this RFC with other prototypes in progress to potentially achieve further improvements. Stay tuned and do not hesitate to reach us out if you want to start contributing to this exciting line of work!
<center>{{< figure src="/images/resnetlab/resnetlab_logo_blue.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>
