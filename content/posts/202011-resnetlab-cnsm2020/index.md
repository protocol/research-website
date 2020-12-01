---
# Blog post title
title:  "IEEE/IFIP CNSM 2020 - The InterPlanetary File System and the Filecoin Network"


# Website post date
# format YYYY-MM-DD
date: 2020-11-25

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

ResNetLab was invited to present a 3.5hr tutorial at one of the biggest conferences in the "NetMan" community, the [16th International Conference on Network and Service Management](http://www.cnsm-conf.org/2020).

We were impressed by the quality of talks, keynotes, workshops, and tutorials presented during the conference. The topic areas show that the conference is keeping pace with the rapid developments in the field, targeting themes such as AI/ML, Edge Computing, Technologies Beyond 5G, and the Future of the Internet Protocol. It was a full week packed with very interesting content smoothly delivered to a remote audience.

The organising committee did a fantastic job of keeping everyone on track and responding rapidly to requests. We really enjoyed the application that the organisers used, which allowed us to network with other conference attendees and post our presentation material, job openings, and the [tutorial flyer](https://gateway.ipfs.io/ipfs/QmcTTR4maY9RpuKeupbBgGaEnVxe6yW8aBteoe6wvgH5sK/IPFS-libp2p-filecoin_flyer_CNSM2020-v2.pdf). The videos from the entire conference have also been made available to conference attendees - very convenient for catching up with sessions that we missed!

As we do traditionally with all conferences that we attend, we would like to take this opportunity to relate the questions we were asked as a resource for the future reader.

***Q:*** What would you say are the current main challenges in the research areas of Information-Centric Networks (ICN) and Named-Data Networks (NDN)? Can you share some research directions that IPFS is exploring?

***A:*** The ICN research community has made tremendous progress the last decade, starting from a radical concept and having designed, specified, and implemented most of the protocols needed in this new protocol stack.

This does not mean that all challenges have been overcome, however. I believe that the challenge of scalability still exists in most of the proposed architectures. It is very difficult to keep state per content chunk at the network level, even with the significant advances in hardware technology. Although this is an existing issue, it does not mean that it has to hold back deployment, since solutions can be found as the problems actually arise. Interoperability with existing protocol deployments and applications is still lacking to a large extent. This is another tricky challenge. At a higher level, it is very difficult to convince network engineers and application developers to think differently and shift from location addressing to content addressing unless there is a pressing need to do so, and this need has not presented itself as yet.

IPFS shares the same vision of content addressing, but operates at a different layer, the application layer, which makes adoption significantly easier! This is demonstrated by the size of the public IPFS network, which counts more than 200k active nodes to date.

Inevitably, IPFS shares some of the scalability challenges of the wider ICN area. IPFS has adopted the principle of *random access*, which means that every content chunk should be named explicitly and be routable individually, independently from the rest of the file it belongs to. This clearly puts significant strain on both the content publisher who has to provide (and then frequently re-provide) provider records per content chunk. We are currently exploring the option of allowing the publisher to declare whether providing random access is desirable for their application.

You can find the full set of open problems that ResNetLab is exploring [here](https://research.protocol.ai/groups/resnetlab/) together with their very detailed problem statements. Our open problems include: preserving user privacy when publishing and fetching content, exploring human-readable naming options for content-addressable networks, as well as routing at scale through multi-level DHT structures. We have already [granted three projects in this area](https://research.protocol.ai/blog/2020/meet-the-latest-protocol-labs-research-grant-recipients/) to academic collaborators to investigate such designs and we will be sharing our findings as soon as they come out!

Note that at ResNetLab we run frequent Requests For Proposals (RFPs) to fund and collaborate with the best researchers in the area, so keep an eye on our [research blog](https://research.protocol.ai/blog/) and subscribe to the Protocol Labs Research [newsletter](https://research.protocol.ai/). We also regularly host seminars from top researchers in the area, which are open to the public!

***Q:*** How do you compare IPFS to CDN? Is it possible to replace CDN with IPFS and what are the challenges to do so?

**A:** Great question! IPFS is a best-effort CDN, which is permissionless and free to use. IPFS comes with no guarantees in terms of content availability (due to NATs and network churn) or delivery latency (due to user's flaky and often slow connections). Despite these well-known challenges of P2P networks, IPFS is used by thousands of users daily and transfers terabytes of data per month. Check this [guide](https://docs.ipfs.io/concepts/usage-ideas-examples) for all of the things one can do with IPFS.

IPFS pinning services have emerged to solve some of those problems by providing content storage and availability guarantees for a fee. Read more about pinning services, their role in the IPFS ecosystem, and how to use them [here](https://docs.ipfs.io/concepts/persistence/#pinning-services).

Most importantly, the [Filecoin network](https://filecoin.io), which was bootstrapped just a few weeks ago, is going beyond the "best effort" service of IPFS to provide storage and delivery guarantees in a decentralised environment. This is in contrast to IPFS pinning services that rely on a centralised setting. Filecoin *is* a decentralised CDN and in that sense, yes, it integrates (subject to features still being finalised) all the necessary features to at least complement -- if not replace -- traditional centralised CDN services. It will not be a surprise to see traditional CDNs joining the Filecoin network in the near future as a peer-assisted decentralised CDN substrate in order to save real estate, hardware, and network equipment costs.

We highly recommend watching [this list of top quality videos](https://www.youtube.com/playlist?list=PL_0VrY55uV19ylyoeS9C9nDsgxNFTU6X2) in which some of the top researchers, implementers, and think tanks in the field discuss Filecoin and the impressive milestones that the Filecoin project has just achieved.

***Q:*** Is there any limitation on the number of replicas that one can store on Filecoin?

***A:*** No, there is no limit on the number of replicas that one can store on Filecoin and there is already more than 1 EiB of storage capacity committed to the network (at the time of writing), so there is enough storage for a lot of replicas!

Note, however, that each replica comes with its own storage cost and therefore increasing the number of replicas improves data availability but also increases the overall cost of storage.

<center>{{< figure src="/images/resnetlab/resnetlab_logo_lightviolet.svg" alt="ResNetLab" link="https://research.protocol.ai/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> Protoschool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
