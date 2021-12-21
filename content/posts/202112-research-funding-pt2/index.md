---
# Blog post title
title: "Protocol Labs research funding recipients 2021, part 2"

# Website post date
# format YYYY-MM-DD
date: 2021-12-21

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - jonathan-gross

# If applicable
categories:
  - blog

# If applicable
tags:
  - 

# Zero or more of the areas in content/areas
areas:
  - cryptography
  - consensus
  - metaresearch
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - abstractionlab
  - cryptonetlab
  - resnetlab

# Not used
draft: false


---
[Last week](/blog/2021/protocol-labs-research-funding-recipients-2021-part-1/) we introduced you to the researchers pursuing key problems in cryptography via RFP-009, RFP-010, and a nucleation award. Now we are excited to share the recipients of research awards intended to fund proposals from PhD candidates, postdoctoral fellows, and faculty through our [open grant offerings](https://grants.protocol.ai/). 

Here is a summary of the five PhD fellowships, three postdoctoral fellowships, and one implementation award given in the latest review round (applications submitted in September 2021). If you are interested in submitting a proposal for consideration, please see grants.protocol.ai for more information and to apply. 
# PhD Fellowships

#### **PhD Fellow:**  Dennis Trautwein 
- **Abstract:** This research project will focus on investigating if and how a super-peer architecture can complement the IPFS network from a content discovery and content retrieval perspective. Structuring the web in a decentralized way poses many challenges, as the currently deployed Internet infrastructure is tailored towards the client-server model. A promising approach to achieve this goal is based on the ideas of relaxing the decentralization requirement, acknowledging the existence of diﬀerently capable network participants, and oﬄoading certain network tasks to the subset of such potent peers (knowing that this shift bears semblance to a light form of centralization).  In the past, many traditional peer-to-peer networks eventually implemented super-peer sub-topologies within their otherwise nonhierarchical network. It can be observed that the IPFS network also holds such tendencies due to the emergence of platforms like Pinata or Infura. However, no formalism supports these developments yet. The new architecture should respect the users’ privacy by providing anonymization similar to what Virtual Private Networks do on the Internet, properly incentivize disproportionally contributing network participants, ensure permissionless entry to become a super-peer, and ensure low latency access to content.

#### **PhD Fellow:** Joachim Neu (Stanford University)
- **PI:** [David Tse](https://tselab.stanford.edu/people/principal-investigator/david-tse/)
- **Abstract:** Many Byzantine fault tolerant (BFT) consensus protocols are ‘provably secure’ – meaning that these protocols implement safe and live consensus no matter the adversarial behavior – assuming an ideal communication setting in which any two honest nodes can communicate directly, albeit with some delay. In Internet-scale open-participation consensus, however, almost no two nodes can communicate directly, constrained by the Internet’s topology and the large number of participants. Instead, peer-to-peer (P2P) overlay and gossip protocols such as Protocol Labs’ Gossipsub aim to emulate the assumed ideal communication setting. This opens up new attack vectors for adversarial behavior on the P2P layer, such as spamming or eclipse attacks. The security of P2P protocols is often studied only in the context of some exemplary adversarial behaviors, rather than against all adversarial behaviors. Thus, these P2P protocols are not provably BFT, and in fact they fail to deliver the ideal communication setting under some adversarial behaviors, undermining the fundamental assumptions on which consensus security rests. In my research, I study attacks on the P2P layer, improve the resilience of existing P2P protocols such as Gossipsub, and devise new provably BFT P2P protocols. I also take an integrated approach to co-designing consensus and P2P protocols.

#### **PhD Fellow:** Arantxa Zapica, Universitat Pompeu Fabra
- **PI:** [Carla Rafols](https://producciocientifica.upf.edu/CawDOS/jsf/seleccionActividades/seleccionActividades.jsf?id=ba67f57664e98660&idioma=ca&elmeucv=N)
- **Abstract:** Vector commitment constructions come from either an algebraic or Merkle tree approach. The latter usually comes with better efficiency while the former is more flexible. This project will revisit existing algebraic constructions and aim at designing a framework that can unify them. The final goal is to achieve constructions that are as general as possible without sacrificing efficiency, and to completely characterize the performance and advantages of each of the different existing algebraic approaches. Importantly, the work will also expand on previous techniques for aggregating openings, and explore new techniques by exploiting the connections of vector commitments with polynomial commitments and universal SNARKs.

#### **PhD Fellow:**  Mikel Cortes, Barcelona Supercomputing Center (BSC)
- **PI:** [Leonardo Bautista-Gomez](https://www.bsc.es/bautista-gomez-leonardo)
- **Abstract:** Blockchain technology has achieved a significant level of service decentralization (and, therefore, democratization) by offering users the possibility to form part of the decentralized protocols, applications, and organizations without intermediary agents. During the technological evolution of blockchain technology over the last decade, many improvements and use-cases have been explored to expand its usability and reduce its base limitations. However, there is a significant lack of tools designed to test and monitor the underlying network technology, its robustness, reliability, and security. This project focuses on the analysis and stress testing of the performance, resilience, and safety of the state-of-the-art blockchain network components, particularly those related to [libp2p](http://libp2p.io) and [GossipSub](/blog/2020/gossipsub-an-attack-resilient-messaging-layer-protocol-for-public-blockchains/), and possible solutions to mitigate their existing limitations. As part of the work, we will develop a tool to monitor the status of distributed libp2p networks in real-time. This tool will provide network features such as topologies, latencies, geographical distribution, and message sharing ratios used to measure the impact of different attack vectors on a distributed p2p network. Additionally, our research explores the impact that networks have on the blockchain application layer in an attempt to mitigate the eventually discovered hazards.

#### **PhD Fellow:** Varun Madathil, North Carolina State University
- **PI:** [Alessandra Scarfuro](https://www.csc.ncsu.edu/people/ascafur)
- **Abstract:**  Decentralized storage networks (DSNs) allow servers to maintain data for clients in a verifiable and secure manner. The clients and servers are matched publicly so that the network as a whole can verify that the servers are indeed storing the data for the clients and punish the servers if they misbehave. But the public nature of these matches enables mapping of clients to servers and this can be leveraged by an attacker to completely compromise the security of their data. Moreover, if the storage provided by each server is leaked to the adversary and the security of the system relies on the assumption of an honest majority of storage, the adversary can simply target servers that provide more storage and disrupt the whole system. We aim to mitigate these attacks by hiding the matching between the client and servers and by keeping the storage provided by the servers private.  But this added privacy raises new challenges. Specifically,  we need the network to verify that the servers that are matched with a particular client are continuously storing the client’s data and that only capable servers participate in the protocol. We aim to tackle these challenges in this proposal.

# Postdoctoral Fellowships
#### **PI:** Harald Vranken, Open University of the Netherlands**
- **Abstract:** The environmental footprint of distributed systems that apply consensus mechanisms is causing concern. Prime examples of such systems are cryptocurrencies (e.g., Bitcoin, Ethereum, and Filecoin) and distributed storage systems (e.g., Filecoin). The goal of this research project is to quantify and reduce the environmental footprint, including both the energy consumption and other environmental impacts such as the hardware lifecycle, of a selected set of systems. Our overarching goals are threefold: (1) to create models for estimating the size of the environmental footprint, (2) to provide methods for measuring this footprint, and (3) to provide mitigation methods for reducing this footprint. By modeling and measuring, we will be able to demonstrate and predict the impact on our environment. This will raise awareness, inform tool development, and enable incentives to actually deploy our mitigation methods for reducing the footprint. Our research helps to address important societal challenges like global warming, climate change, and spare use of scarce sources. We intend to publish scientific papers on our modeling and measurement efforts, to create online dashboards, and to promote our mitigating controls for integration and application in distributed systems.
 
#### **Postdoc:** Akira Takahashi (PhD, Aarhus University)
- **PI:** [Markulf Kohlweiss](https://homepages.inf.ed.ac.uk/mkohlwei/), University of Edinburgh
- **Abstract:** Zero-knowledge proof systems have a rich history in cryptography and theory of computation supporting numerous cryptographic constructions. Many recent applications of zero-knowledge, such as cryptocurrencies, demand small proof sizes and fast verification, as provided by zk-SNARKs. As the possible advent of a quantum computer threatens the security of widely deployed cryptographic schemes, the design of new quantum-resilient alternatives is a pressing task. However, a majority of deployed zk-SNARKs are based on discrete-log type assumptions, which unfortunately do not withstand the celebrated quantum algorithm of Shor. In this project, we push forward the line of research on post-quantum zk-SNARKs. We tackle the problem by designing an efficient lattice-based polynomial commitment scheme (PCS), a core primitive for constructing modern zk-SNARKs. Lattices are, nowadays, central tools of fast and compact post-quantum cryptographic primitives such as public-key encryption and digital signatures.  Hence, interoperability with such existing constructions is an important additional feature. Our approach is expected to allow for a “commit-and-prove” extension, which enhances modularity and interoperability with other auxiliary building blocks in practical scenarios.

#### **Postdoc:** Lior Rotem (PhD, The Hebrew University)
- **Abstract:** Proofs of knowledge - introduced by Goldwasser, Micali, and Rackoff in the 1980s - are protocols that enable a prover to convince an untrusting verifier that they know some particular secret. In recent years, significant progress has been made toward constructing practically-efficient succinct proofs of knowledge (often called “arguments” when soundness is computational). In such protocols, the total communication should be much less than the size of the secret. However, less attention has been given to understanding the exact security guarantees of such protocols. Without such an understanding, choices of concrete security parameters are not supported by security analyses, and any attempt to compare the efficiency of different schemes cannot provide a true “apples to apples” comparison. This gap already manifests in the most basic examples of such proofs, such as Schnorr’s proof of knowledge of discrete logarithms. The situation is only exacerbated when considering full-fledged general-purpose succinct non-interactive proofs of knowledge. This proposal aims at filling the above-described gap by obtaining a better understanding of the security guaranteed by currently deployed protocols and proposing new constructions for arguments of knowledge with better provable security bounds.

# Implementation Grant

**Team:** [Joel Chan](https://ischool.umd.edu/about/directory/joel-chan) (University of Maryland), [David Vargas](https://davidvargas.me/) 
- **Abstract:** Synthesis — the construction of novel conceptual wholes, such as theories and new questions, from previous knowledge components — is the lifeblood of scientific progress. This critical conceptual task requires deep engagement with past work at the level of theories, lines of evidence, and claims, and how they inform, support, or oppose each other. Unfortunately, infrastructures and tools for scientific literature do not support this unit of analysis, privileging instead the coarse unit of the scientific paper. This limitation is a serious impediment to scientific progress. A key building block for a new infrastructure for synthesis already exists: a discourse graph data model centered on richly contextualized networks of questions, claims, and evidence. A critical remaining challenge is how to incentivize the right people to contribute this data at scale: automated systems cannot yet replace human judgment for synthesizing knowledge claims and evidence from the literature. To meet this challenge, this project explores novel interactive tools that seamlessly integrate the work of authoring and sharing discourse graphs into scientists’ natural workflows of reading and synthesizing literature. These data can then be shared, federated, and aggregated into new infrastructures for synthesis that can accelerate scientific discovery, both within and across disciplines.

# Congratulations!
We are extremely excited to support these amazing researchers as they drive the cycle of innovation and discovery forward. If you are interested in applying for funding at Protocol Labs, visit [grants.protocol.ai](https://grants.protocol.ai), and [join our mailing list](https://mailchi.mp/protocol/research-newsletter-signup). 
