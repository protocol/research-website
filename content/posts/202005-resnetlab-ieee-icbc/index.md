---
# Blog post title
title: "IEEE ICBC 2020: The InterPlanetary File System and the Filecoin Network"

# Website post date
# format YYYY-MM-DD
date: 2020-05-03

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - david-dias
  - yiannis-psaras

# If applicable
categories:
  - talks


# Zero or more of the areas in content/research/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/research/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false


show-in-tutorials-logos: true

---
[ResNetLab](https://research.protocol.ai/research/groups/resnetlab/) presented at one of the most prominent conferences in the area of Distributed Ledger Technologies: the [IEEE International Conference on Blockchain and Cryptocurrencies](https://icbc2020.ieee-icbc.org/)! IEEE ICBC 2020 took place remotely, was well-attended, and had an exciting programme both in terms of tutorials during the first day and invited talks during the main conference, where Vitalik Buterin delivered the keynote speech. Although this is a young conference, still in its second edition, the papers presented were of very high quality, establishing the conference as one of the most important events in the area of blockchains and cryptocurrencies.

ResNetLab presented a 2 hour-long [tutorial](https://drive.google.com/file/d/1OcHjR1XA1E8To3qpw3fnsEQe-xSKFGy3/view?usp=sharing) on “The InterPlanetary File System and the Filecoin Network”. Over 20 people attended the full duration of our tutorial and we were excited to establish new research collaborations with attendees. Below is a very brief summary of some of the questions we received during the conference:

## Q&A Session

**Q: Are IPFS paths indexed by search engines like Google, Bing etc.?**

A: Yes, they are, thanks to the IPFS HTTP Gateways hosted by Protocol Labs, [Cloudflare](https://blog.cloudflare.com/tag/ipfs/), [Pinata](https://pinata.cloud) and [many more](https://ipfs.github.io/public-gateway-checker/). You can access any content on the IPFS network by going to https://DOMAIN_OF_THE_GATEWAY/ipfs/CID_OF_THE_CONTENT

**Q: Can I replace/delete files or is there a full version history of each file?**

A: There are two different concepts that we would like to highlight here:

 1) To replace, update and/or unlink a file, one needs to maintain a pointer to the file to publish new revisions. This is possible through the InterPlanetary Name System (IPNS). It uses a technique from Self-Certifying File System (SFS) in which the owners of the pointer use a private/public key pair to sign records that contain the latest version of the pointer. IPNS gets its records propagated in the network using multiple routers. Today these are:
     * The multi-hash of the public key of a peer is registered on the DHT to point to mutable content.
     * Libp2p Gossipsub ([spec](https://github.com/libp2p/specs/tree/master/pubsub/gossipsub), [techrep](https://research.protocol.ai/posts/201912-resnetlab-launch/PL-TechRep-gossipsub-v0.1-Dec30.pdf), [recent talk](https://research.protocol.ai/posts/202004-matrix-virtual-meetup-gossipsub/)) is used as a faster way to distribute IPNS records.
     * Rendezvous/central record stores.

 2) While any user can easily delete a file from their own node, for a file to be deleted from the whole network, all hosts holding the file must delete or stop sharing their copy. IPFS doesn’t provide a mechanism for deleting files from another person’s node, so users will be able to retrieve the file as long as there is a copy available somewhere.

Thank you to everyone who attended the talk and to the IEEE for organizing this event. For more context on this Q&A session, please watch the associated [tutorial](https://drive.google.com/file/d/1OcHjR1XA1E8To3qpw3fnsEQe-xSKFGy3/view?usp=sharing) video.


<center>{{< figure src="/images/resnetlab/resnetlab_logo_red.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>
