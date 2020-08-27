---
# Blog post title
title: "How content addressing can solve streaming challenges as networks are overloaded"

# Website post date
# format YYYY-MM-DD
date: 2020-07-23

# Publish from this date (defaults to date)
# publishDate: 2020-07-23

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - yiannis-psaras

# If applicable
categories:
  - blog

# Zero or more of the areas in content/areas
areas:
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - resnetlab

# Not used
draft: false

---
Given the mass migration to remote work we’ve seen in recent months, you’d think the internet would be collapsing under the added strain. Yet precisely the opposite has happened. [As experts have observed](https://www.technologyreview.com/2020/04/07/998552/why-the-coronavirus-lockdown-is-making-the-internet-better-than-ever/), the internet isn’t buckling under added traffic; it’s thriving.

Internet service providers took advantage of the extra network capacity that had [already been built](https://www.networkworld.com/article/3541357/why-didnt-covid-19-break-the-internet.html) into the infrastructure in case of crises like COVID-19 -- and, for the most part, the transition has gone remarkably smoothly. In fact, some companies -- such as Netflix and Equinix -- are taking this time to expand network capacity and build out infrastructure.

But just because the transition has gone smoothly doesn’t necessarily mean that our current approach to internet capacity is the best or most efficient one. Currently, ISPs use a strategy known as “overprovisioning” to manage network overload. Think of overprovisioning this way: a three-lane highway can have dozens of single-lane on-ramps and off-ramps. It keeps flowing because not everyone drives at the same time or to the same place.

If, however, there is a sudden increase in traffic volume, the road will start approaching its capacity. Congestion will set in, traffic will slow down, and drivers on access roads will face long waits to enter the highway and long delays to reach their destination.

ISP traffic engineers can prevent this congestion by designing the road for worse-than-expected conditions, for example, by adding extra lanes. This is essentially how overprovisioning works: ISPs intentionally build networks with more capacity than they will usually need.

This strategy makes a lot of sense, but there are two big problems with it. First, it’s expensive. To build the extra highway lane(s) for the increased traffic requires ISPs to invest a significant amount of money – and that investment is only necessary in extraordinary situations. Not every ISP in the world can afford to do that, and therefore, [disruptions in some places are more severe than in others](https://www.internetsociety.org/blog/2020/05/how-has-covid-19-impacted-last-mile-networks/). The second problem is timing. Against the backdrop of the COVID-19 pandemic, we’re in the middle of an extraordinary crisis situation. ISPs that have taken proactive steps won’t face severe performance issues during the pandemic crisis. But those that haven’t don’t have the chance to respond, as upgrading those links is not something that is easy to do reactively.

The good news is there’s an alternative model that avoids congestion but doesn’t require the kind of excessive investment from the ISP that overprovisioning does. The alternative is what’s known as a “content-addressable” model.

Our internet was designed to operate on location-based addressing. Essentially, what this means is that if two households on the same street are streaming the same content, the network will need to transport that same information from the original source location two times: first to one household, and then to another. This is because our requests are being forwarded to the (IP address of the) server where the content lives.

With content-based addressing, the content can be delivered by previous recipients, instead of re-transporting the data from the original source every time. The first household, or a close-by network router, will temporarily store the content locally on the device, and that device will then serve as the source when another neighbor requests this piece of content. With content-based addressing, content has a unique identifier. (Think of this like the serial number of a device, or the digital object identifier or ISBN number of a digital publication.) Our requests are explicitly asking for the content itself, instead of the IP address where the content lives. Therefore, our requests will find the content copy that is stored the closest to the requester and will not need to travel to the original source.

This is a very powerful concept that has the potential to improve internet performance significantly and reduce bandwidth requirements for ISPs. The performance gain (and bandwidth saving) is becoming more significant as a portion of the content is becoming more popular – similar to everyday goods being available on high street shops for people to find easily, as compared to faraway warehouses.

Companies like Protocol Labs have been working on projects that promote content-addressable networks for quite some time. The [InterPlanetary File System](http://docs.ipfs.io) (IPFS) is an [operational, content-addressable network](https://www.youtube.com/watch?v=0IGzEYixJHk) that works in tandem with a network-layer library, [libp2p](http://libp2p.io), which interconnects user devices at the edge of the network in a peer-to-peer fashion.

IPFS is a distributed storage network that utilizes fundamental principles of peer-to-peer (P2P) networking and is realizing the potential of the content-addressable web. The blend of those two concepts results in a network that is more efficient, more privacy-preserving and less prone to disruptions or censorship. There are already many applications building on top of IPFS for video streaming and decentralized storage, among many others. IPFS is open for anyone to explore and easy to use. Quick and interactive [tutorials](https://proto.school/#/) on what the content-addressable web is and how to get started with it are great resources, as are these online [IPFS core courses](https://www.youtube.com/playlist?list=PLuhRWgmPaHtSsHMhjeWpfOzr8tonPaePu).

We believe in the power of this technology – and we’re not alone. Hundreds of thousands of daily users are already experiencing the benefits of this content-addressing approach. As ISPs build an internet that supports the changing needs of the workforce of the future, we urge them to look into the opportunities offered by content-addressable networks. This new communication model can sustain us not just for the uncertain weeks ahead, but for the months and years to come.
