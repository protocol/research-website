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

tags:
  - resnetlab-on-tour

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
[ResNetLab](/research/groups/resnetlab/) was invited to present the “High-Level Overview of the IPFS Architecture” to the [Named Data Networking](https://named-data.net/) consortium!

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

A: A user does not need to have the entire structure of the Merkle-DAG in order to retrieve a part of it. In order to retrieve only a part of the Merkle-DAG (consisting of one or more chunk CIDs), the user needs to have these specific CIDs. In addition, you can use the root CID and path notation to access a file within the Merkle-DAG, e.g.  Qmcri6S86LuivUY4FDcM1phu5REXcFYootxn1GsRoqnFN5/path/to/some/file.png.

**Q: Is a block immutable once it is assigned a CID?**

A: Yes, once the CID of a block/chunk is calculated it stays the same forever. This is the notion of the “Permanent Web”, which is well-known in versioning systems such as SVN, git and the like. We believe this is an important property of a storage and delivery system. The block itself, of course, is not immutable and changes can be done to it. However, the CID of the new file will not match the old one and therefore the new version will have to be added separately (unless the content is published under a public key through IPNS).

**Q: How can you revoke a CID from the IPFS network?**

A: The CID as such is permanent and cannot be “undone” as it’s the hash of a particular piece of content (see comment on “Permanent Web” above). A user that no longer wishes to provide access to some content can simply stop “providing” that content, or in other words, stop publishing the corresponding provider record(s). This, however, does not mean that the content disappears from the network, as other peers that have retrieved the content might still have it in their cache and provide it. Some IPFS gateways implement "denylists" but this takes place outside the IPFS node.

**Q: Is there a way to check if a specific CID has been deleted (i.e. added to a denylist)?**

A: To check whether a CID is on a given gateway's denylist, you can attempt to resolve the CID on the gateway and get the HTTP response code, which should inform you if it has been denied or not. Each denylist is maintained by the operating organization separately - there is no denylist for the whole IPFS Network.

**Q: The denylist does not seem to be part of the decentralised infrastructure.**

A: Any individual or organisation can run an IPFS gateway and craft their own denylist. The content of the denylists is not dictated by a single entity.

**Q:  Are the gateways authenticated?**

A: No. Any node can run a gateway. They are not authenticated. There is no built-in reputation layer for gateways. Many organizations including Protocol Labs, [Cloudflare](https://blog.cloudflare.com/distributed-web-gateway/), [Infura](https://github.com/INFURA/tutorials/wiki/Introduction-to-IPFS), and others run IPFS Gateways - you can see a list of known public gateways [here](https://ipfs.github.io/public-gateway-checker/). If a particular gateway decides to go rogue and not provide the right routing information, you should switch to another gateway provider.

**Q: Where are IPNS records kept?**

A: IPNS is using the same infrastructure as content routing, that is, the DHT. The multi-hash of the public key of a peer is registered on the DHT to point to mutable content. There are also other ways to distribute IPNS records: a pubsub protocol called gossipsub  ([spec](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub), [techrep](/posts/201912-resnetlab-launch/PL-TechRep-gossipsub-v0.1-Dec30.pdf), [recent talk](/posts/202004-matrix-virtual-meetup-gossipsub/)) is being used for this purpose, as a faster way to distribute IPNS records. As mentioned earlier, the difference between IPNS over PubSub vs DHT is the push (PubSub) vs pull (DHT) model.

**Q: If you put the name into the DHT and the name can point to different things that can be changed by different guys (good, bad), then can this be a big security problem?**

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

A: Cached content can be resolved and served until the next “garbage collection” period, at which point the cached content will expire unless it is “pinned” (hence, permanently replicated until the user says otherwise). Note that at the time of writing, garbage collection is turned off by default.

**Q: The need to keep republishing IPNS records requires more overhead - the publisher needs to stay online and the ISP needs to provide connectivity. How does this compare to other systems?**

A: Data hosts need to stay online in order to keep their content accessible. In IPFS, data is provider agnostic and anyone can rehost the data. There are services, known as Pinning Services, that users can rely on to keep content available on the network when they go offline.

In IPNS, default configuration requires the content publisher (or a delegate with access to the publisher's private key) to be able to republish signed updates in order for their IPNS records to stay alive. While currently possible for third parties to keep IPNS records alive when the original publisher goes offline, making this work by default in the existing implementations still requires some work.

**Q: IPFS relies on DNS and therefore IPFS can only always be an overlay. Can IPFS route over the link layer?**

A: IPFS does not rely on DNS. Instead, we support an extension, [DNSLlink](https://dnslink.io/), which is a mechanism outside of the IPFS protocol that can used by IPFS implementations to register human-readable names and link them to CIDs, IPNS or even other DNSLinks. DNSLink does rely on DNS, but is an optional addition and users are free to use decentralized domain names like [ENS](https://ens.domains/) or [Unstoppable Domains](https://unstoppabledomains.com/) instead.

With regards to routing over the link layer, IPFS currently doesn't leverage the routing at the link layer to optimize its data transfers, but it does have plans to do so in the future.

**Q: Do peers need to make any infra changes to augment network performance?**

A: IPFS was designed on purpose to not rely on upgrades of ISPs’ infrastructure in order to operate. This does not mean, however, that it cannot use enhancements to in-network entities, e.g. in-network caching.

**Q: You have to know exactly what you’re looking for. The DHT is good, but it’s difficult to know what is in there. Where does the binding between a CID and a real-world identity take place?**

A: IPFS is a distributed file system used to power applications a layer below the end-user-facing content discovery (ex, how HTTP is currently used to address/host sites served by Google Search). IPFS manages providing, storing, and fetching content for a particular CID; the rest (connecting users to the CIDs relevant to the application, or finding the application in the first place) has to happen a layer above IPFS itself.

**Q: In the DHT you’re routing based on the overlay. There is no notion of vicinity.**

A: Yes, this is correct and it is a known disadvantage of most DHT implementations. The teams are currently investigating and evaluating alternative DHT structures, such as Coral and Canon DHT, as well as non-DHT routing and resolution components in order to integrate the notion of locality of interest in content resolution. However, this is still ongoing work and not integrated into the production systems.

**Q: How does pubsub work? Is it based on the CID? Is the topic represented by a CID? How do you express a topic?**

A: No, topics are not represented by CIDs (although they could be). The pubsub protocol used currently, called [gossipsub](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub) is a topic-based pubsub system, not a content-based one.

**Q: At the beginning of the talk you mentioned that the intention is to remove trust from the network (i.e. external entities). Can you elaborate? How do you trust that a piece of content is going to be published by some key?**

A: Naming content through its own hash and publishing it in a distributed P2P network inherently overcomes several of the issues related to putting trust into external entities, like content hosting and content resolution entities. Content can be verified locally as it is self-certified. As long as content is signed by the private key of the publisher, then the content consumer can verify that the content is authentic without relying on external entities.

**Q: Is it possible for me to re-publish cnn.com/news?**

A: Google has proposed the concept of “Signed HTTP Exchanges” (or SXG). According to SXG, an HTTP “exchange” or request/response transaction is itself cryptographically signed. In turn, this means that a browser can verify both the origin of the content (since it was signed by the original provider) and the integrity of the content itself. With this clever technique, HTTP content (excluding cookies and other non-cacheable content) can be accessed from anywhere, including a decentralised system such as IPFS, while still verifying that the content came from the correct publisher.

In order to achieve Signed HTTP Exchanges, a Signature is added to the original HTTP content to include: i) the original HTTP content, ii) the Certificate URL, iii) Expiry date (which is set to a low value of ~7 days), and iv) the digest of the payload.

Learn more about SXG and Web Packages with the IPFS Camp presentation on [Signed exchanges in Chrome](https://youtu.be/zYjsVe4s1JA) ([slidedeck](https://github.com/ipfs/camp/blob/master/LIGHTNING_TALKS/ipfscamp2019-lightningtalk-signedexchangeschrome.pdf))

Thank you to everyone that attended the talk and to the The Named Data Networking consortium for organizing this event and inviting us! Check out our [open positions](https://jobs.lever.co/protocol?department=Research), [open RFPs](https://github.com/protocol/research-rfps), and [latest work](/research/groups/resnetlab/)!

## References

1. [File Discovery in IPFS](https://discuss.ipfs.io/t/file-discovery-in-ipfs/1320/3)
2. [Decentralized Search Engines for the Decentralized Web](https://discuss.ipfs.io/t/decentralized-search-engines-for-the-decentralized-web/629)



<center>{{< figure src="/images/resnetlab/resnetlab_logo_orange.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>
