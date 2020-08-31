---
# Blog post title
title: "Next Generation Networks (NGN) Group Talk: A High-Level Overview of the InterPlanetary File System"

# Website post date
# format YYYY-MM-DD
date: 2020-05-07

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - david-dias
  - yiannis-psaras

# If applicable
categories:
  - Talks

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

---

[ResNetLab](https://research.protocol.ai/research/groups/resnetlab/) was invited to present a tutorial on IPFS to the Next Generation Networks group. The event was great, with many interesting questions from the audience that stimulated excellent discussions. Our contribution was a talk titled: “High-Level Overview of the IPFS Architecture”, delivered by ResNetLab Research Scientist Yiannis Psaras.

 NGN is a vibrant group of academics, industry researchers and engineers working in the general area of — you guessed it — Next-Generation Networks. NGN started as a UK- centred group, but has expanded widely to include prominent members of the international networks & systems community. They also operate a lively [mailing list](http://www.jiscmail.ac.uk/ngn) which we highly recommend to readers wishing to participate in interesting discussions about networking-related topics.

The group has been meeting once a year in a [picturesque setting](https://coseners.net/) in rural Oxford, UK, since 1988. During the COVID-19 pandemic outbreak, NGN has been hosting a series of weekly virtual talks.

We received some great questions during the talk that we wanted to record for others to find. Enjoy!

## Questions that came up during the talk


**Q: In the case where the destination node is online, but the node on the path that will point you to the destination is not there: how do you detect and bypass a failed node along the path? Does the request get stuck in-between?**

A: When nodes publish content in the IPFS network, they create a provider record and send it to the node that is closest to the content’s hash in terms of XOR distance in the hash space. For instance, the provider record of a content whose hash is <kmabc123..> will be stored at node <kLrts..> — let’s call this the “(provider record) target node”. The provider record will also be replicated to 20 nearby (in hash-space terms) nodes around the target node <kmrts..>. Replication of provider records is used in order to account for high network churn and the fact that the target node might go offline. Therefore, even if the target node is offline when a client requests content (i.e. asks for a copy of the provider record), some of the rest of the 20 nodes will be online and make the provider record available.

**Q: Do you update the routing tables every time a peer goes offline?**

A: It is difficult and resource-expensive to know exactly when a peer has gone offline and update all the routing tables accordingly. Instead, in IPFS, nodes that are responsible for storing provider records have to re-publish them frequently—currently every 12 hours—in order to account for network churn. This is in line with the original Kademlia algorithm, which utilises network-wide probabilistic churn rates to determine how frequently records should be republished.

**Q: Can I have multiple peerIDs for one CID?**

A: In the IPFS architecture, and in libp2p in particular, the peerID is the hash of the public key of a peer. Therefore, every content item published from one IPFS daemon is linked to the same peerID. If a content item (with a particular CID) is pinned from multiple different peers, then it will be associated with all the corresponding peerIDs.

**Q: If a peer advertises some content and then goes down, the Kademlia routing tables need to be updated. How is this done?**

A: Each provider record has a TTL. Original publishers of content, as well as peers that have pinned content (and therefore store it permanently until instructed otherwise) have to republish provider records every 24h. If a peer publishes content and then goes offline within less than 24h of having replicated the content, then:

- Requests will find the provider record for the remaining amount of time until the 24h mark from publication, but will then hang as the network won’t be able to find the actual content.
- If the original publisher does not come online to republish the content, the provider record will expire (24h after the last publication) and requests will not find the provider record.

**Q: If a peer advertises content but then sends something wrong, can you detect that before the content travels through the network?**

A:  Integrity starts being verified through cryptographic hashing from the first blocks/chunks received. If the data received is incorrect, it is discarded, and if the sending peer continues to send chunks of the wrong content the connection is dropped.

**Q: How do you maintain the Kademlia mappings in case of very high degree of churn?**

A: Frequent republishing of both original content and provider records are the techniques used to deal with high network churn. The original Kademlia protocol requires that the number of replicas in the network and the republishing interval are balanced with network churn. 

**Q: Is there any new release coming to address the issue of peers being behind NATs?**

A: This answer is twofold:

1. With regards to publishing and finding content, [go-ipfs v0.5.0](https://blog.ipfs.io/2020-04-28-go-ipfs-0-5-0/) introduced a new feature according to which peers will check if they are publicly dialable through the new AutoNAT service. If a peer is behind a NAT, it will only act as a DHT client. If a peer is publicly dialable, then it will be a full DHT server, storing provider records for other peers.
2. As for data transfer for peers behind NATs, IPFS will try multiple strategies to punch through NAT (UPnP, NAT-PMP, WebRTC ICE and more), if it is not able, users can always decide to use a preload node in the network.

**Q: If I publish something as a client behind a NAT, how can others get content from me?**

A: See the answer above. Additionally, there are a few different ways in which users behind a NAT can publish and make content available to the IPFS network:

1. In js-ipfs (the JavaScript implementation), which runs in browsers and does not use the DHT for content routing, users are by definition undialable. Protocol Labs runs dedicated “preload” nodes, which pull any content added through js-ipfs and make it available to other users. See this brief [description](https://blog.ipfs.io/42-js-ipfs-0-31/), which also includes useful pointers. Preload nodes are dedicated nodes that are connected to the IPFS Gateways and are being used to bootstrap js-ipfs.
2. A DHT client can dial directly (i.e., open an outbound connection) to a dialable node, e.g., one of the public IPFS Gateways and make data available to that node.
3. There are hosting services operational today in the IPFS network. [Pinata](https://pinata.cloud/) and [Infura](https://infura.io/) provide hosting and pinning services and make content available from their publicly dialable nodes.

**Q: There would have to be a general way - it's difficult to do the configuration for every user. Bittorrent has been using all those methods for years. You could use the same techniques.**

A: The teams at Protocol Labs are actively working on this topic to find a stable and general-purpose solution that will work out of the box. It is worth noting, however, that Bittorrent has traditionally worked fine when *one of the two* communicating nodes has been behind a NAT. IPFS also deals with this case without problems, using dialbacks for instance (i.e., asking the NAT’ed peer to open a connection to the dialable peer). 

When both of the communicating nodes are behind NATs, Bittorrent also faces severe problems. In the case of Bittorent, the increased popularity of some content items and the fact that popular content will inevitably end up being stored at a dialable node is what improves performance. Again, the same applies to IPFS.

**Q: Apart from the Internet Archive, are there other similar big publishers that use IPFS?**

A: IPFS has collaborated with several large scientific publishers and pre-print archives, such as [Arxiv](https://arxiv.org/), and standardization bodies, such as the [IETF](https://www.ietf.org/); IPFS has additionally worked with [EDGI](https://envirodatagov.org/) to back up climate data.

In addition to collaborating directly with publishers,  IPFS also hosts several important community-led [data preservation projects](https://awesome.ipfs.io/datasets/), including the [Distributed Wikipedia Mirror Project](https://github.com/ipfs/distributed-wikipedia-mirror), geocities-on-ipfs, and the [InterPlanetary Wayback](https://github.com/oduwsdl/ipwb) archive replay system.

**Q: Say we have multiple peers storing the same (mutable) content. If there is an inconsistency between them, how does a user get the latest version of the content? In other words, how do you get the latest version of the IPNS record?**

A: IPFS uses the InterPlanetary Naming System (IPNS) to publish mutable content. Mutable content is advertised through IPNS records. With IPNS, instead of publishing the hash of the content, users publish the hash (in fact the multihash) of their public key. Assuming that the [multihash](https://tools.ietf.org/html/draft-snell-multihash-00) of the publisher’s public key is H(k), then in order to publish content under this IPNS key, the publisher must send a provider record to the K (with K=20 in the current setting) closest peers to SHA256(H(k)). The system then performs a lookup for those K peers and sends them the provider record.

In the opposite direction, in order to retrieve content, a user asks the K closest peers to SHA256(H(k)) for the provider record that points to the peer with this key, or for peers closer to it. As the user receives responses from the K closest peers, the system retains the latest version of the provider record (the one with the highest sequence number). The default setting is for the query to terminate after it receives 16 records; this setting can be altered. Cross-checking the highest sequence number from all 16 (or more) received records ensures that the user has the most recent record. The user also sends the up-to-date record to those peers that sent outdated records.