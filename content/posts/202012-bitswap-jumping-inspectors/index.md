---
# Blog post title
title: 'Our Bitswap nodes have become “jumping inspectors”'

# Website post date. Format YYYY-MM-DD
date: 2020-12-14

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

By allowing Bitswap nodes to inspect WANT messages received from other peers in the network we are able to perform faster lookups in sessions as well as ongoing relay sessions. With this implementation, we achieve an improvement in the latency to fetch the full file with a reduction of up to 12.5% compared to the vanilla implementation of Bitswap. At the same time, we reduced the number of duplicate blocks in the network by 10% compared to the TTL prototype. 

Along with this new prototype, we also performed further experiments with larger files to understand the limitations of our "jumping Bitswap" proposal.

## The contribution

With this prototype we showed the value of leveraging the wealth of information gathered from previous enetwork activity (i.e. WANT messages). We have proven that this information can be extremely useful in subsequent content discovery performance as previous requests are strong indicators of where the content is going to live.

Adding a TTL to the Bitswap protocol (in our [previous](https://research.protocol.ai/blog/2020/teaching-bitswap-nodes-to-jump/) contribution) offered nodes a way to discover content TTL+1 hops away before having to resort to the DHT. The TTL improvement also enabled faster retrieval of content from nodes TTL+1 hops apart, compared to vanilla Bitswap using the DHT. The new feature, though, came at the cost of additional overhead in the number of messages and duplicate blocks transferred through the network. After some further thinking, however, we realized that we could leverage this overhead on our favor to stretch even more the performance improvement introduced in our prototype.

Our rationale goes as follows: on the one hand, the fact that nodes can relay WANT messages from other peers increases the number of requests exchanged by a node. On the other hand, by enabling the inspection of WANT messages by Bitswap nodes, this information can be leveraged to populate their peer-block registry. The peer-block registry is a new data structure that we introduced in the Bitswap protocol which tracks for each CID peer that has recently requested the content. This additional knowledge can be used by direct sessions preventing them from broadcasting their WANT requests to every one of their connected peers. This knowledge can also be utilised by relay sessions to allow them to target peers with a higher probability of storing the content - this is where the TTL enhancement comes into the picture. Instead of selecting peers at random, the algorithm picks more intelligently to whom the TTLed WANT requests are forwarded.

**Merging these two ideas enabled an improvement in the average time to fetch content by 12.5%, with a reduction in the number of duplicate blocks in the network by 10% compared to the previous TTL prototype.**

Not happy with this, we decided to perform further experiments to understand the impact that exchanging larger files could have for our "jumping Bitswap" protocol. The experiments show that with increasing number of blocks exchanged, the overhead due to the number of duplicate blocks traversing the network can dwarf the improvements in the time to fetch content. This is a result of using symmetric routing to forward blocks through intermediate nodes (i.e. relaying blocks following the same path the request followed). 

To solve this, **we glimpse as future work the use of asymmetric routing**. Thus, when a peer storing the content receives a relayed request, instead of forwarding blocks through an intermediate peer, it establishes a connection with the requester and sends the block directly. 

## Prototype

You can find the code for [this modified implementation of "jumping Bitswap" in this fork.](https://github.com/adlrocha/go-bitswap/tree/feature/rfcBBL102+rfcBBL104) Its operation is straightforward:

- Every Bitswap node listens for WANT messages from neighboring peers and populates its peer-block registry with the CID and the ID of the peer sending the WANT message. This is done for every WANT message independently of its TTL.

- When a client wants to find content, a new direct session is triggered in Bitswap. These sessions check if there are candidate peers that have requested the block recently by checking the peer-block registry, and if this is the case, an "optimistic" WANT-BLOCK is sent to the three peers that requested the CID most recently (up until here is the normal operation of [this RFC](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL104)).

- If a node receives a WANT message with a TTL larger than zero, instead of forwarding the WANT message with TTL-1 to a random subset of D of its connected peers (where D is the degree of the relay session), it first chooses three candidates from the peer-block registry that have recently seen the CID (if they exist) and select the D-3 peers left for the forwarding session randomly. In this way, the relay session is targeting peers that have recently requested those CIDs on behalf of other peers.

The use of peers from the peer-block registry to forward the requests from other peers increases the probability of intermediate nodes finding the content, hence performing faster discovery of blocks. Additionally, the fact that nodes may be looking for blocks on behalf of other peers makes the use of the information in the peer-block registry more powerful than in the baseline implementation of Bitswap.

## Results

In order to explore the impact of this prototype, we repeated exactly the same tests from the [TTL prototype evaluation](https://research.protocol.ai/blog/2020/teaching-bitswap-nodes-to-jump/). We repeated the experiment where 15 different leecher IPFS nodes requested different types of content from five different seeder IPFS nodes. Leecher and seeder nodes are not allowed to be connected directly, and they can only communicate through a set of passive nodes that neither provide nor request content from the network but instead run the vanilla Bitswap protocol. As was the case in our previous experiment setup, we used links of 100Mbps with 100ms latency between nodes, TTL = 1, and degree D = 10. For the peer-block registry, the number of candidate peers selected is n=3.

<center>{{< figure src="image11.png" width="300px" caption="Figure 1: XKCD images exchanged by nodes in our experiment">}}</center>

### Exchanging small files

For the exchange of the small XKCD image file of 66 KB, we see an improvement in the time to fetch the image of 12%, with a slight reduction in the number of duplicate blocks and messages exchanged. The fact that nodes have a way to request the content from peers with a larger probability of storing it reduces the amount of messages required both in direct sessions and relay sessions. (Figures 2 and 3).

<center>{{< figure src="image3.png" width="700px" caption="Figure 2: Time to fetch xkcd image">}}</center>

<center>{{< figure src="image8.png" width="700px" caption="Figure 3: Number of messages exchanged for XKCD image exchange">}}</center>

### Impact on larger files

Repeating the experiment using 30MB files shows similar performance in terms of the time to fetch, i.e., an improvement of approximately 12%, while reducing even further the number of duplicate blocks in the network.


<center>{{< figure src="image1.png" width="700px" caption="Figure 4: Time to fetch 30MB file">}}</center>


<center>{{< figure src="image5.png" width="700px" caption="Figure 5: Number of messages exchanged 30 MB file">}}</center>

We went one step further and repeated the experiment for 150 MB files. The number of messages required for "jumping Bitswap" to discover and transfer the content compared to vanilla Bitswap is still significantly lower. However, the increase in the number of duplicate blocks originating from the TTL enhancement, results in peers not being able to fetch content faster than vanilla Bitswap (see Figures 5 and 6). 

<center>{{< figure src="figure5.png" width="700px" caption="Figure 5: Time to fetch 150MB file">}}</center>

<center>{{< figure src="figure6.png" width="700px" caption="Figure 6: Number of messages exchanged 150 MB file">}}</center>

Vanilla Bitswap performs a DHT lookup to discover the seeders storing the content. When it finds one, Bitswap establishes a connection with it, adds it to its session, and requests the rest of the blocks of the content directly to the seeder from there on (without additional lookups).

For both versions of "jumping Bitswap", with and without WANT inspection, even if a requester discovers the intermediate node behind whom a seeder with the content is, it still needs to request every single block of the content through intermediate nodes (due to the symmetric routing approach used in the protocol). This results in a significant increase in the number of blocks traversing the network, with its subsequent overhead in peer resources.

### Future Work: Asymmetric Routing

This limitation can be overvcame using asymmetric routing to relay blocks to requesters. In this modification of the protocol, we add the a source field, along with the TTL, into Bitswap messages. When a seeder receives a request for a block, it checks the source. If it comes from a peer the seeder is directly connected to, it sends the block back. If this is not the case, and the seeders is not directly connected to the source, it establishes a new connection with the source and forwards the block back to the requester. From there on, leecher and seeder have a established connection between them, so when the leecher needs to request further blocks of the content, it can send a request directly to the seeder without having to traverse any intermediate nodes. 

Asymmetric routing enables "jumping Bitswap" to work in an analogous way to how it operates with the DHT. Asymmetric rouing, and the DHT, are exclusively used to discover providers for the content, while the exchange of blocks is performed directly establishing a connection. This minimizes the number of blocks and duplicate blocks that need to traverse the network in the exchanges. Furthermore, as it was also the case for the symmetric routing approach, "jumping Bitswap" with asymmetric routing also enables the discovery of seeders which are undialable for the DHT. The fact that the discovery of content is performed through the direct connections of intermediate nodes (used as relays) enables the location of content that is is not publicly available through the DHT. In the asymmetric routing approach, after discovering the content, it is the seeder the one that proactively establishes a connection with the leecher, so even if the seeder is behind a NAT, it wouldn't have many of the connection establishment limitations that can arise when using the public DHT. 

<!-- (ii) the use of the TTL to discover seeders of content (using intermediate nodes as "relays" to find seeders), enables the discovery of content in peers that are undialable and therefore undiscoverable by the DHT.  establishement of a direct connection with the seeder prevents the leecher from having to perform the lookup through the TTL (or the DHT) for every block of the content, as now they are both a direct connection, enabling the normal operation of vanilla Bitswap to come into action. -->

## Conclusions and more Future Work

This prototype stresses even more the importance of using as much information as it is possible for the protocol to acquire in order to perform smarter content discovery and retrieval of content. The use of a TTL field in Bitswap messages allows WANT messages to jump a few hops away, and this results in nodes receiving requests for content from peers not directly connected to them. Just by inspecting these WANT messages from a few hops away provides nodes with additional information about where blocks may potentially be stored.

Additionally, the fact that relay sessions use a symmetric routing approach to forward WANT requests and blocks means that nodes do not need to establish additional connections, and learn how to dial the peer that recently requested for a block. Nodes know that if they send the request to the peer from which the WANT message inspected came, their own subsequent request will follow the same path to the initial requester.

Nonetheless, symmetric routing comes with its trade-offs. When the files exchanged are large and are comprised by a large number of blocks, the overhead of duplicate blocks traversing the network may remove the improvements of the time to fetch of the "jumping Bitswap" protocol. While vanilla Bitswap has to do a single DHT lookup to discover a seeder and request the content directly from it, "jumping Bitswap" with asymmetric routing needs to discover the content through intermediate nodes for each TTL. As future work to solve this, we propose the use of asymmetric routing in "jumping Bitswap" for the relay of blocks. 

Nevertheless, a detail that might be overlooked, is that symmetric routing can be useful when nodes are blinded from each other through NATs, using symmetric routing as a way to relay the messages, vs. having to establish a relay connection using a transport like WebRTC and/or libp2p-circuit-relay. We find these two approaches to be parallel to NDN and IP bases routing respectively, one in which the data is effectively routed with knowledge by the intermediary nodes, while the other leverages tunnels and/or paths between nodes to deliver the content, offering different performance and caching guarantees.

<!-- The combination of these two ideas gave very encouraging results, and our feeling is that this implementation could be fine-tuned further to achieve even better results.  -->
Apart from the use of asymmetric routing, a few questions we ask ourselves after merging the want inspection and "jumping bitswap" prototypes are:

- Could we optimize the way we select the subset of peers to whom WANT requests from relay sessions are forwarded? Can we use information about direct sessions (such as the latency, and peers included in each session) to make even better decisions? Is it worth tracking in the peer-block registry the TTL of the WANT messages seen so that we don't only prioritize candidates that have recently seen the content, but also candidates that are less hops away (to ensure fast retrieval of blocks)?

- Thinking about the configuration parameters of the protocol, what configuration of the degree (D) and TTL of relay sessions, and the number of candidates selected in the peer-block registry leads to a better performance? Can we make these parameters dynamic and adjustable in runtime so that according to the status of the network, the peers available, and the certainty we have on the probability of the nodes contacted having the block we are looking for, their value self-adjusts? Would these improvements prevent us from having to adopt asymmetric routing? Even more, could "jumping Bitswap" implement symmetric and asymmetric routing allowing peers to choose (or dynamically adjust) what approach to use at each moment?

- Finally, can we take inspiration from how routing is done in fields such as [NDN networks](https://en.wikipedia.org/wiki/Named_data_networking) or traditional packet switching networks in order to optimize the relay mechanisms used to discover and forward content from peers we are not directly connected to in Bitswap?

After all of our explorations around "jumping Bitswap", we have become convinced that the idea has a lot of potential as an alternative to reduce Bitswap's burden over the DHT in the discovery of content. Exciting ideas and exciting results that still require further research to unleash all of its potential. If you want to join us in this endeavor of making file-transfers blazing fast, do not hesitate to reach us out!

<center>{{< figure src="/images/resnetlab/resnetlab_logo_lightviolet.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> Protoschool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
