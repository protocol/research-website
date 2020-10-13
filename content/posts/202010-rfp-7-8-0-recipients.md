---
# Blog post title
title: "Meet the latest Protocol Labs Research Grant recipients"

# Website post date
# format YYYY-MM-DD
date: 2020-10-13

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
- jonathan-gross

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
In January of 2020, the [Resilient Networks Lab](https://research.protocol.ai/groups/resnetlab/) (ResNetLab) 
launched two RFPs (Requests for Proposals) to address pressing open problems faced by IPFS and libp2p, 
namely, [Routing at Scale](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/ROUTING_AT_SCALE.md) 
and [PubSub at Scale](https://github.com/libp2p/notes/blob/master/OPEN_PROBLEMS/PUBSUB_AT_SCALE.md).  

We received a total of ten applications and elected to fund four of the ten. Below you’ll find an overview 
of each RFP and profiles of the awardees. We are extremely excited to work on these hard problems with an 
incredible representation of researchers from across the globe, all of whom have extensive experience and 
a proven track record in their respective fields.

## RFP 7: Multi-Level DHT Design and Evaluation
RFP-7 solicited approaches that target Distributed Hash Table-based architectures and proposed enhanced 
designs that use multiple DHT layers. We were looking for novel designs that are resilient to high churn, 
provide low look-up time, and scale to tens of millions of users. Despite the fact that Multi-Layer DHTs 
(ML-DHTs) have been a hot research topic in the past, we have been looking for fresh ideas that go beyond 
traditional designs to address permissionless, decentralized peer-to-peer (P2P) networks, where testing 
and evaluation can take place in testbed environments, rather than be restricted to simulation results only. 
You can find the full RFP description [here](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-7-MLDHT.md).

We received some truly exceptional proposals for this RFP, ultimately selecting three for funding:

### Athens University of Economics and Business
Our first awardees were [George Polyzos](https://www.aueb.gr/en/faculty_page/polyzos-george), 
[Spyros Voulgaris](https://www.aueb.gr/en/faculty_page/voulgaris-spyridon), [Nikos Fotiou](http://pages.cs.aueb.gr/~fotiou/), 
and [Yiannis Thomas](https://scholar.google.com/citations?user=sDumt0QAAAAJ&hl=en&oi=ao) from the 
[Athens University of Economics and Business](https://www.aueb.gr/en) (AUEB). This team is part of AUEB’s 
[Mobile Multimedia Laboratory](https://mm.aueb.gr/) (MMlab), which is actively involved in researching 
networks of the future. MMlab’s expertise lies in Internet architecture and protocols, mobile and wireless 
networks, security, authentication and authorization, business models and incentive mechanisms. Prof. 
Polyzos’ team has expertise and experience in areas at the heart of this RFP, having designed ML-DHT 
systems in the past and having been part of flagship collaborative research projects in the area.

This proposal aims to leverage the group’s experience in designing Hierarchical Pastry (H-Pastry), 
a ML-DHT system, and in developing and extensively using PeerSim to design and evaluate a structured 
DHT adapted for libp2p and IPFS.

### NOVA University of Lisbon
The second RFP-7 awardee is [João Leitão](https://asc.di.fct.unl.pt/~jleitao/), Assistant Professor 
in the Informatics Department at the [Faculdade de Ciências e Tecnologia of the Universidade Nova de 
Lisboa](https://www.fct.unl.pt/en/research/nova-laboratory-computer-science-and-informatics) and an 
Integrated Member of the [NOVA Laboratory for Computer Science and Informatics](https://nova-lincs.di.fct.unl.pt/) (NOVA LINCS). 
João is the author of high-impact papers such as [ChainReaction: a causal+ consistent datastore based on 
chain replication](https://dl.acm.org/doi/10.1145/2465351.2465361) (2013), [HyParView: A membership protocol 
for reliable gossip-based broadcast](https://asc.di.fct.unl.pt/~jleitao/pdf/dsn07-leitao.pdf) (2007), and 
[Epidemic broadcast trees](https://www.gsd.inesc-id.pt/~ler/reports/srds07.pdf) (2007). His current research 
focuses on the scalability and dependability of large-scale distributed systems. 

His proposal seeks to devise a novel design for a hierarchical overlay network capable of supporting 
unprecedented scale routing through logical names.

### Tokyo University of Technology, Waseda University, Waseda Research Institute for Science and Engineering, and Tokyo University of Information Science
The final RFP-7 grant recipients are [Hidehiro Kanemitsu](https://www.teu.ac.jp/grad/english/teacher/cs_spc/index.html?id=45) 
(Team Lead, Tokyo University of Technology), [Hidenori Nakazato](https://waseda.pure.elsevier.com/en/persons/hidenori-nakazato) 
(Collaborator, Waseda University), [Kenji Kanai](https://waseda.pure.elsevier.com/en/persons/kenji-kanai) 
(Collaborator, Waseda Research Institute for Science and Engineering), and [Masaki Hanada](https://www.researchgate.net/profile/Masaki_Hanada2) 
(Advisor, Tokyo University of Information Science). The expertise of this team ranges from distributed computing and P2P networks, 
to Service Function Chaining (SFC), Information-Centric Networks (ICN), and performance optimization for pubsub. 

Their proposal seeks to develop a DHT-based routing scheme with underlay-aware lookup optimization for 
large-scale overlay networks. The primary foci are lookup optimization, novel content-naming schemes, 
and churn resilience. 

## RFP 8: Scalability Bounds of P2P PubSub
This RFP called for approaches that explore the scalability bounds of the existing pubsub algorithms 
within libp2p. Libp2p’s pubsub solution—GossipSub—powers IPFS, Filecoin, and Ethereum 2.0. 
Within IPFS, it is used to propagate name-records for the InterPlanetary Naming System (IPNS). As the 
network grows from hundreds of thousands of daily users to multiple millions, the IPNS system and the 
underlying pubsub protocol are expected to be stressed to their limits. Either a thorough evaluation 
of the scalability performance of existing protocols or the redesign of these protocols is essential 
before they are deployed at these larger scales. You can read the full RFP description 
[here](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-8-pubsub.md).

We are currently funding one proposal for RFP-8, with collaborators from two U.S. universities:

### The Ohio State University and the University of Washington
The team collaborating on RFP-8 is composed of 
[Shaileshh Bojja Venkatakrishnan](https://cse.osu.edu/people/bojjavenkatakrishnan.2) 
from the Ohio State University and [Sreeram Kannan](https://people.ece.uw.edu/kannan_sreeram/) from the 
University of Washington - Seattle. The team has made significant contributions in the area of high-throughput 
cryptocurrency routing and pubsub for permissionless blockchain networks, as well as network-layer anonymity, 
publishing in top-tier venues including Usenix NSDI and ACM HotNets.

Their proposal aims to use an action-reward learning algorithm to optimize the behavior of nodes in a P2P network. 
This algorithm will then be tested using simulations to evaluate message propagation latency, node churn, bandwidth 
and CPU utilization, and number of nodes in the network. Finally, the team will build a prototype implementation for 
validation. 

## RFP-0: Proofs of Geolocation
In addition to the ResNetLab grants, we are also funding a research effort from [Ari Juels](https://www.arijuels.com/), 
[Deepak Maram](https://sites.google.com/view/deepak-maram/home), and [Iddo Bentov](https://www.cs.cornell.edu/~iddo/) 
at Cornell Tech on “Proofs of Geolocation,” which explores cryptographically verifying geolocation of a node in a 
permissionless network. This funding is dispersed as part of our open call ([RFP-0](https://grants.protocol.ai/prog/rfp-0/)). 

We are extremely excited about all of these collaborations, and we look forward to working with so many impressive researchers.

You can learn more about some of the current open problems ResNetLab is exploring 
[here](https://github.com/protocol/ResNetLab/tree/master/OPEN_PROBLEMS) and monitor active RFPs at 
[grants.protocol.ai](http://grants.protocol.ai). We’ll also be announcing future RFPs in our newsletter, 
so make sure to scroll down and sign up at the bottom of this page. 
