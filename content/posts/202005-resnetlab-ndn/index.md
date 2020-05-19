---
# Blog post title
title: "NDN Seminar: a high-level overview of the InterPlanetary File System"

# Website post date
# format YYYY-MM-DD
date: 2020-05-18

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - david-dias
  - yiannis-psaras

# If applicable
categories:
  - Talks

# Zero or more of the areas in content/research/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/research/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

# Adds summary to prevent break on i.e.
summary: 'ResNetLab was invited to present the “High-Level Overview of the IPFS Architecture” to the Named Data Networking consortium!'

---
[ResNetLab](https://research.protocol.ai/research/groups/resnetlab/) was invited to present the “High-Level Overview of the IPFS Architecture” to the [Named Data Networking](https://named-data.net/) consortium!

The Named Data Networking project is the flagship project in the area of Information-Centric Networks, which is building a network-layer, information-centric (i.e. content-addressable) protocol stack. It started almost a decade ago with the partnership of 10 US universities and funded by the NSF.

IPFS and NDN share the same vision, that of content-addressable networks, but approach it from vastly different perspectives. NDN is a native network-layer approach, while IPFS is an application-layer approach.

Given the shared vision of the projects, we were excited about the presentation, especially the discussion and feedback, which were very valuable. The talk was well-attended with around 20 participants in total.

Below is a summary of the questions brought up during the presentation, together with some answers and pointers for the future reader. You can also watch the full [recording](https://www.youtube.com/watch?v=Jy5__VuwZC0) and have a look at the [slide deck](https://drive.google.com/open?id=1JeiDbU5hfFYK9SDWCKOwWba_EKBfGZ_v).


## Questions that came up during the talk:

**Q: What is the chunk size? Can users use different chunk sizes?**

A: The default chunk size used is 256 KB. Yes, users/applications can use the -s (--chunker) option of the ipfs add command to define the size of chunks as well as the chunking algorithm.

**Q: How is the Merkle-Tree created?**

A: The Merkle-DAG structure (named the InterPlanetary Linked Data, or [IPLD](https://docs.ipfs.io/guides/concepts/merkle-dag/)) is created locally when a user adds a file into their local IPFS node. When publishing the file in the IPFS network, the file is not replicated in other nodes. This is done intentionally in order to avoid adding content to a peer’s local storage without the peers’ consent. Instead, the file is initially distributed by the peer that publishes it to the network upon request. Any node that retrieves the file from the original provider can then also serve as a provider of the file, creating a network of caches for the content. When publishing a file to the network, a “provider record” is put in the DHT to point to the local node for retrieval. Other peers in the network can also “pin” the file if they wish to become permanent providers of the file. If they don’t pin the file then the file will eventually be “garbage-collected”.

**Q: How is a file added into the system from the architecture perspective? In particular, how do you let the world know what you added and what is the location? Similarly, how do I know what others have added into the system?**

A: There is no mechanism in the IPFS architecture that keeps track of the files that are published to the network. Letting the world know about a newly added content/CID has to happen “off-band”. This topic relates a lot to ongoing discussions in the IPFS community (see related discussions in the IPFS forum [1] [2]) on “Decentralised Search Engines”, but there hasn’t been any tangible outcome to date. That said, the topic is of great interest to Protocol Labs and the wider community.

The InterPlanetary Naming System (IPNS, discussed in greater detail below) and its supporting PubSub protocol, which propagates naming entries to those subscribed to the corresponding IPNS topic, is another way of propagating information about newly published content. This option can be utilised by applications to propagate (i.e. push) information about newly published content within the realm of the application itself. IPNS can also work in a pull-based manner when it runs over the DHT.

**Q: Do I need to have the entire structure of the merkle tree in order to retrieve a part of it? The root CID does not seem to be enough, if I want to retrieve only part of a file.**

A: A user does not need to have the entire structure of the Merkle-DAG in order to retrieve a part of it. In order to retrieve only a part of the Merkle-DAG (consisting of one or more chunk CIDs), the user needs to have these specific CIDs. In addition, you can use the root CID and path notation to access a file within the Merkle-DAG, e.g.  [Qmcri6S86LuivUY4FDcM1phu5REXcFYootxn1GsRoqnFN5/path/to/some/file.png](Qmcri6S86LuivUY4FDcM1phu5REXcFYootxn1GsRoqnFN5/path/to/some/file.png).

**Q: Is a block immutable once it is assigned a CID?**

A: Yes, once the CID of a block/chunk is calculated it stays the same forever. This is the notion of the “Permanent Web”, which is well-known in versioning systems such as SVN, git and the like. We believe this is an important property of a storage and delivery system. The block itself, of course, is not immutable and changes can be done to it. However, the CID of the new file will not match the old one and therefore the new version will have to be added separately (unless the content is published under a public key through IPNS).

**Q: How can you revoke a CID from the IPFS network?**

A: The CID as such is permanent and cannot be “undone” as it’s the hash of a particular piece of content (see comment on “Permanent Web” above). A user that no longer wishes to provide access to some content can simply stop “providing” that content, or in other words, stop publishing the corresponding provider record(s). This, however, does not mean that the content disappears from the network, as other peers that have retrieved the content might still have it in their cache and provide it.

IPFS implements the concept of “denylists”. Every node can have its own denylist and check it before it makes its forwarding decisions. A node can also adopt the denylist of other peers or organisations - see more discussion on this below.

**Q: Is there a way to check if a specific CID has been deleted (i.e. added to the denylist)?**

A: Yes and no. The denylist maintained by Protocol Labs is accessible through the IPFS Gateway nodes. However, the denylist is structured such that users cannot see which CIDs are part of it. This is achieved by double-hashing the CIDs added to the denylist. Therefore, anyone can check if a specific CID is added to the denylist (i.e. if they have the CID they want to check against), but no one can actually see the list of CIDs in the denylist.

**Q: Who maintains the revocation list/denylist? Are nodes doing routing independently of the denylist?**

A:  The denylist  of the Public IPFS Gateways that are maintained by Protocol Labs  is kept by Protocol Labs. The denylist  is accessible through the IPFS Gateways, subject to the double-hashing procedure mentioned above. However, we should highlight that anyone can run their own public gateway(s) on the public IPFS network and they can have their own denylist, which can be a replica of that kept by Protocol Labs or an entirely different one. In short, each individual or organisation running a gateway is free to choose what content they want to deny serving. Furthermore, if someone runs their own IPFS network, which is not part of the public IPFS network, then they have to maintain their own denylist.

With regard to routing, normal DHT nodes are not obliged to check the denylist before they route/forward requests (although they can do so if they want). IPFS Gateways (both those operated by Protocol Labs and those that are not) check their own denylist before they forward requests and will therefore, not forward requests for denied content.

This is generally a complex issue with lots of non-strictly technical parameters, which could end up breaking the system. For example, if people in specific regions were to get their deny lists from central authorities like governments then the following could happen: a user could advertise on the global network that he has some content. The advertisement, however, would be rejected if the peers that Kademlia tells the user to put them to are all in a governmental region that bans this particular content, despite the fact that the content is perfectly acceptable in the original user’s region.

**Q: The denylist does not seem to be part of the decentralised infrastructure.**

A: Any individual or organisation can run a Public IPFS Gateway and operate their own denylist. In that sense, the (content of the) denylist is not dictated by a centralised entity. At this point, the denylist is mainly run by IPFS Gateways which can be run by anyone.

**Q: Where are IPNS records kept?**

A: IPNS is using the same infrastructure as content routing, that is, the DHT. The multi-hash of the public key of a peer is registered on the DHT to point to mutable content. There are also other ways to distribute IPNS records: a pubsub protocol called gossipsub  ([spec](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub), [techrep](https://research.protocol.ai/posts/201912-resnetlab-launch/PL-TechRep-gossipsub-v0.1-Dec30.pdf), [recent talk](https://research.protocol.ai/posts/202004-matrix-virtual-meetup-gossipsub/)) is being used for this purpose, as a faster way to distribute IPNS records. As mentioned earlier, the difference between IPNS over PubSub vs DHT is the push (PubSub) vs pull (DHT) model.

**Q: You have to know exactly what you’re looking for. The DHT is good, but it’s difficult to know what is in there. Where does the binding between a CID and a real-world identity take place?**

A: This has to happen externally. IPFS does not provide such a mechanism. IPFS is providing, storing, and can fetch content of a particular CID; the rest has to be done externally to the system.

**Q: If you put the name into the DHT and the name can point to different things that can be changed by different guys (good, bad), then this can be a big security problem.**

A: IPFS is using a technique inspired by the [Self-Certifying File System (SFS)](https://en.wikipedia.org/wiki/Self-certifying_File_System) and it is putting the CID of the public key into the DHT. Every time the publisher publishes a new version of the content, it has to sign the record with its private key and therefore, only the original author can publish under this identity. We call this system IPNS, for InterPlanetary Name System

**Q: How can other nodes know that they have the right key for a name?**

A: When a node performs a look-up for an IPNS name on the DHT it retrieves records from all of the peers the DHT designates to store the data. As the records have sequence numbers, the client can easily determine what the most recent value corresponding to an IPNS key is. There is also a DHT lookup shortcut whereby instead of waiting for the lookup to complete, a user can decide to wait for a quorum Q of records (currently set to Q=16) to be received before deciding that it has enough information to determine the most recent record.

**Q: If the nodes storing the  IPNS record go offline, then the IPNS record is lost and if someone does not update it within 24 hours then it cannot be served.**

A: This is correct and the same also applies for the publisher of an IPFS record (i.e. an immutable CID). One of two things can happen:

1. If the content has been requested and has been retrieved and cached by some other node then it can be served by the cache node.
2. If one (or some) of the peers that have retrieved (and cached) the content decides that they want to keep on serving/providing this content, then they can “pin” it, which means that they become permanent providers for this content.

**Q: When content is cached, how does the system know about the cached content and how is it able to use/resolve this content?**

A: Peers that cache the content also publish provider records to the DHT to declare that they are also providers for all content items in their cache.

**Q: Is the cached content treated the same as the original copy of the content?**

A: Yes, for what concerns content resolution and delivery within the next “garbage collection” period. After that, the cached content will expire, unless it is “pinned” (hence, permanently replicated until the user says otherwise) from the node. Note that at the time of writing, garbage collection is turned off by default.

**Q:  Are the gateways authenticated?**

A: No. Any node can run a gateway. They are not authenticated. There is no reputation layer for gateways. Gateways are run by Protocol Labs, but also from external entities (e.g. [Cloudflare](https://blog.cloudflare.com/distributed-web-gateway/), [Infura](https://github.com/INFURA/tutorials/wiki/Introduction-to-IPFS), and others). If they decide to go rogue and not provide the right routing information there is nothing that the network will do.

**Q: The need to keep republishing records is a single point of failure, the publisher needs to stay online and the ISP needs to provide connectivity. This is a big ask for normal content providers.  The IPNS links are not decentralised and are easy to censor - are you working on a solution?**

A: Yes, publishers need to be online in order to have their content live, although this will change soon to enable peers to keep records alive, even if the original publisher is offline. This will become different when integration with FIL happens, where data will persist for as long as the agreement lasts. In addition, it is worth noting two things:

1. IPFS is a stack, not a product  in itself. Others are building products on top of it in order to provide these services.
2. IPNS is very modular. You have a record that is signed and points to an immutable record.  You can use IPNS over DHT, or pubsub, as discussed, but there are also other implementations (see Namecoin, or ETH.link).
It all comes down to having one primitive that applications can rely on (to publish, get) and then have different implementations that provide different guarantees to the user. It really comes down to applications defining their own router implementations and seeing if the performance satisfies the application’s users.

**Q: IPFS relies on DNS and therefore IPFS can only always be an overlay. Can IPFS route over the link layer?**

A: IPFS does not rely on DNS. We do an extension, [DNSLlink](https://dnslink.io/), which is a mechanism outside of the IPFS protocol that can used by IPFS implementations. It DNS to register human-readable names and link them to CIDs, IPNS or even other DNSLinks. DNSLink does rely on DNS. With regards to routing over the link layer, IPFS currently doesn't leverage the routing at the link layer to optimize its data transfers, but it does have plans to do so in the future.

**Q: There is nothing that the network between those peers can do to augment the performance? Is this correct?**

A: Yes, this is correct. IPFS was designed on purpose to not rely on upgrades of ISPs’ infrastructure in order to operate. This does not mean, however, that it cannot use enhancements to in-network entities, e.g. in-network caching.

**Q: In DHT you’re routing based on the overlay. There is no notion of vicinity.**

A: Yes, this is correct and it is a known disadvantage of most DHT implementations. The teams are currently investigating and evaluating alternative DHT structures, such as Coral and Canon DHT, as well as non-DHT routing and resolution components in order to integrate the notion of locality of interest in content resolution. However, this is still ongoing work and not integrated into the production systems.

**Q: How does the pubsub work? Is it based on the CID? Is the topic represented by a CID? How do you express a topic?**

A: No, topics are not represented by CIDs (although they could be). The pubsub protocol used currently, called [gossipsub](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub) is a topic-based pubsub system, not a content-based one.

**Q: At the beginning of the talk you mentioned that the intention is to remove trust from the network (i.e. external entities). Can you elaborate? How do you trust that a piece of content is going to be published by some key?**

A: Naming content through its own hash and publishing it in a distributed P2P network inherently overcomes several of the issues related to putting trust into external entities, content hosting and content resolution entities. Content can be verified locally as it is self-certified. As long as content is signed by the private key of the publisher, then the content consumer can verify that the content is authentic without relying on external entities.

**Q: Is it possible for me to re-publish cnn.com/news?**

A: Google has proposed the concept of “Signed HTTP Exchanges” (or SXG). According to SXG, an HTTP “exchange” or request/response transaction is itself cryptographically signed. In turn, this means that a browser can verify both the origin of the content (since it was signed by the original provider) and the integrity of the content itself. With this clever technique, HTTP content (excluding cookies and other non-cacheable content) can be accessed from anywhere, including a decentralised system such as IPFS, while still verifying that the content came from the correct publisher.

In order to achieve Signed HTTP Exchanges, a Signature is added to the original HTTP content to include: i) the original HTTP content, ii) the Certificate URL, iii) Expiry date (which is set to a low value of ~7 days), and iv) the digest of the payload.

Learn more about SXG and Web Packages with the IPFS Camp presentation on [Signed exchanges in Chrome](https://youtu.be/zYjsVe4s1JA) ([slidedeck](https://github.com/ipfs/camp/blob/master/LIGHTNING_TALKS/ipfscamp2019-lightningtalk-signedexchangeschrome.pdf))

Thank you to everyone that attended the talk and to the The Named Data Networking consortium for organizing this event and inviting us! Check out our [open positions](https://jobs.lever.co/protocol?department=Research), [open RFPs](https://github.com/protocol/research-rfps), and [latest work](https://research.protocol.ai/research/groups/resnetlab/)!

## References

1. [File Discovery in IPFS](https://discuss.ipfs.io/t/file-discovery-in-ipfs/1320/3)
2. [Decentralized Search Engines for the Decentralized Web](https://discuss.ipfs.io/t/decentralized-search-engines-for-the-decentralized-web/629)



<center>{{< figure src="/images/resnetlab/resnetlab_logo_orange.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>
