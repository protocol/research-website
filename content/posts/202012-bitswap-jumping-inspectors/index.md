---
# Blog post title
title: 'Our Bitswap nodes have become “jumping inspectors”'

# Website post date. Format YYYY-MM-DD
date: 2020-12-16

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
---
A few weeks ago we shared how we have taught our Bitswap nodes to jump: if you recall from [that post](https://research.protocol.ai/blog/2020/teaching-bitswap-nodes-to-jump/), the content discovery range extension gained came at the expense of an increased number of duplicate blocks exchanged in the network. Already in that post, we reflected on potential ways of improving the issue with duplicate blocks to make more efficient use of bandwidth. One of our proposals in the post was to use WANT message inspection and the peer-block registry introduced in the prototype described [here](https://research.protocol.ai/blog/2020/two-ears-one-mouth-how-to-leverage-bitswap-chatter-for-faster-transfers) to make content discovery more efficient by adjusting the degree of WANT message propagation with the introduction of relay sessions.

Equipped with the previous prototypes and the [Testing Hardness](https://github.com/protocol/beyond-bitswap/tree/master/testbed), we had all the assets to explore this hypothesis of combining the Bitswap TTL prototype ([described in this RFC](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL102)) with the WANT inspection one ([detailed here](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL104)) and see what would happen. We rolled up our ResNetLabber sleeves,  built a quick prototype combining both RFCs, and ran some experiments with our testing harness. The results were delightful!

By allowing Bitswap nodes to inspect WANT messages received from other peers in the network we are able to perform better lookups in sessions as well as ongoing relay sessions. With this implementation, we managed to achieve an improvement in the time to fetch content of up to 12.5% compared to the vanilla implementation of Bitswap. At the same time, we reduced the number of duplicate blocks in the network by 10% compared to the TTL prototype.

## The contribution

With this prototype we showed the value of leveraging the wealth of information gathered from previous network activity (i.e. WANT messages). We have proven that this information can be extremely useful in subsequent content discovery performance as previous requests are strong indicators of where the content is going to live.

Adding a TTL to the Bitswap protocol (in our [previous](https://research.protocol.ai/blog/2020/teaching-bitswap-nodes-to-jump/) contribution) offered nodes a way to discover content TTL+1 hops away before having to resort to the DHT. The TTL improvement also enabled faster retrieval of content from nodes TTL+1 hops apart, compared to vanilla Bitswap using the DHT. The new feature, though, came at the cost of additional overhead in the number of messages and duplicate blocks transferred through the network. After some further thinking, however, we realized that we could leverage this overhead on our favor to stretch the performance improvement introduced in our prototype even more.

Our rationale is as follows: on the one hand, the fact that nodes can relay WANT messages from other peers increases the number of requests exchanged by a node. On the other hand, by enabling the inspection of WANT messages by Bitswap nodes, this information can be leveraged to populate their peer-block registry. The peer-block registry is a new data structure that we introduced in the Bitswap protocol which tracks  each CID peer that has recently requested a particular content item. This additional knowledge can be used by direct sessions, preventing them from broadcasting their WANT requests to every one of their connected peers. This knowledge can also be utilised by relay sessions to allow them to target peers with a higher probability of storing the content - this is where the TTL enhancement comes into the picture. Instead of selecting peers at random, the algorithm more intelligently picks to whom the TTLed WANT requests are forwarded.

**Merging these two ideas enabled an improvement in the average time to fetch content by 12.5%, with a reduction in the number of duplicate blocks in the network by 10% compared to the previous TTL prototype.**

## Prototype

You can find the code for this modified implementation of "jumping Bitswap" [in this fork.](https://github.com/adlrocha/go-bitswap/tree/feature/rfcBBL102+rfcBBL104) Its operation is straightforward:

- Every Bitswap node listens for WANT messages from neighboring peers and populates its peer-block registry with the CID and the ID of the peer sending the WANT message. This is done for every WANT message independently of its TTL.

- When a client wants to find content, a new direct session is triggered in Bitswap. These sessions check if there are candidate peers that have requested the block recently by checking the peer-block registry, and if this is the case, an "optimistic" WANT-BLOCK is sent to the three peers that requested the CID most recently (up until here is the normal operation of [this RFC](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL104)).

- If a node receives a WANT message with a TTL larger than zero, instead of forwarding the WANT message with TTL-1 to a random subset of size *d* of its connected peers (where *d* is the degree of the relay session), it first chooses three candidates from the peer-block registry that have recently seen the CID (if they exist) and select the *d* - 3 peers left for the forwarding session randomly. In this way, the relay session is targeting peers that have recently requested those CIDs on behalf of other peers.

The use of peers from the peer-block registry to forward the requests from other peers increases the probability of intermediate nodes finding the content, hence performing faster discovery of blocks. Additionally, the fact that nodes may be looking for blocks on behalf of other peers makes the use of the information in the peer-block registry more powerful than in the baseline implementation of Bitswap.

## Results

In order to explore the impact of this prototype, we repeated exactly the same tests from the [TTL prototype evaluation](https://research.protocol.ai/blog/2020/teaching-bitswap-nodes-to-jump/). We repeated the experiment where 15 different leecher IPFS nodes requested different types of content from five different seeder IPFS nodes. Leecher and seeder nodes are not allowed to be connected directly, and they can only communicate through a set of passive nodes that neither provide nor request content from the network but instead run the vanilla Bitswap protocol. As was the case in our previous experimental setup, we used links of 100Mbps with 100ms latency between nodes, TTL = 1, and degree *d* = 10. For the peer-block registry, the number of candidate peers selected is n=3.

<center>{{< figure src="image11.png" width="300px" caption="Figure 1: XKCD images exchanged by nodes in our experiment">}}</center>

### Exchanging small files

For the exchange of the small XKCD image file of 66 KB, we see an improvement in the time to fetch the image of 12%, with a slight reduction in the number of duplicate blocks and messages exchanged. The fact that nodes have a way to request the content from peers with a larger probability of storing it reduces the amount of messages required both in direct sessions and relay sessions (Figures 2 and 3).

<center>{{< figure src="image3.png" width="700px" caption="Figure 2: Time to fetch xkcd image">}}</center>

<center>{{< figure src="image8.png" width="700px" caption="Figure 3: Number of messages exchanged for XKCD image exchange">}}</center>

### Impact on larger files

Repeating the experiment using 30MB files shows similar performance in terms of the time-to-fetch, i.e., an improvement of approximately 12%, while reducing even further the number of duplicate blocks in the network.


<center>{{< figure src="image1.png" width="700px" caption="Figure 4: Time to fetch 30MB file">}}</center>


<center>{{< figure src="image5.png" width="700px" caption="Figure 5: Number of messages exchanged 30 MB file">}}</center>

## Conclusions and Future Work

This prototype stresses even more the importance of using as much information as it is possible for the protocol to acquire in order to perform smarter content discovery and retrieval of content. The use of a TTL field in Bitswap messages allows WANT messages to jump a few hops away, and this results in nodes receiving requests for content from nodes not directly connected to them. Just by inspecting these WANT messages from a few hops away provides nodes with additional information about where blocks may potentially be stored.

Additionally, the fact that relay sessions use a symmetric routing approach to forward WANT requests and blocks means that nodes do not need to establish additional connections, and learn how to dial the peer that recently requested a certain block. Nodes know that if they send the request to the peer from which the inspected WANT message came, their own subsequent request will follow the same path to the initial requester.

The combination of these two ideas gave very encouraging results, and we believe that this implementation could be fine-tuned further to achieve even better results. A few questions we ask ourselves after this initial exploration are:

- Could we optimize the way we select the subset of peers to whom WANT requests from relay sessions are forwarded? Can we use information about direct sessions (such as the latency, and peers included in each session) to make even better decisions? Is it worth tracking in the peer-block registry the TTL of the WANT messages seen so that we don't only prioritize candidates that have recently seen the content, but also candidates that are fewer hops away (to ensure fast retrieval of blocks)?

- And thinking about the configuration parameters of the protocol -- what configuration of the degree (*d*) and TTL of relay sessions, and the number of candidates selected in the peer-block registry leads to a better performance? Can we make these parameters dynamic and adjustable in runtime so that their value self-adjusts according to the status of the network, the peers available, and the estimated probability of the nodes contacted having the sought-after block? We already use a split-ratio in Bitswap sessions to determine the number of independent streams of discovery according to the number of duplicate blocks seen, so we could use a similar approach.

In summary, exciting ideas and exciting results that still require further research to unleash all of its potential. If you want to join us in this endeavor of making file transfers blazing fast, do not hesitate to reach us out!

<center>{{< figure src="/images/resnetlab/resnetlab_logo_lightviolet.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
