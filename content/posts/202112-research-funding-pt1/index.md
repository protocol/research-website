---
# Blog post title
title: "Protocol Labs research funding recipients 2021, part 1"

# Website post date
# format YYYY-MM-DD
date: 2021-12-13

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
  - RFPs

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonetlab
  - cryptocomputelab

# Not used
draft: false


---
This has been a prodigious year for generating new funded collaborations between Protocol Research and top academic researchers around the world! We have given out a whopping eighteen awards since August (with others pending). These include eight **[RFPs](https://github.com/protocol/research-grants#rfps)**, five **[PhD fellowships](https://grants.protocol.ai/prog/phd_fellowship/)**, three **[Postdoctoral fellowships](https://grants.protocol.ai/prog/postdoctoral_fellowship/)**, one **[implementation grant](https://grants.protocol.ai/prog/implementation_grant/)**, and a **[nucleation award](https://grants.protocol.ai/prog/nucleation_grant/)**. We’ll be detailing these awards in two separate blog posts. This first installment is to announce our RFP award recipients, as well as a new funded collaboration with Prof Nada Amin of Harvard University. PL Research’s Requests for Proposals (RFPs) are designed to fund goal-driven research in response to specific open problems defined by Protocol Labs. RFPs are posted intermittently based on need and the readiness of our research labs to support these collaborations. You can view previous RFPs **[here](https://github.com/protocol/research-grants#rfps)**. Nucleation awards are intended to formalize and bootstrap new collaborations with academic research groups actively working on projects related to Protocol Labs Research. Below, you will find brief abstracts summarizing two proposals for RFP-000, two for RFP-009, four for RFP-010, and one nucleation award. 

If you want to be notified of future RFPs, please **[subscribe to our newsletter](https://mailchi.mp/protocol/research-newsletter-signup)**. You can view the full spectrum of open grants at **[grants.protocol.ai](https://grants.protocol.ai)**. 

# RFP-000

## Federated learning on IPFS
### Team: 
- Christodoulos Pappas (University of Thessaly)
- Eleni Panagou (University of Thessaly)
- [Manolis Vavalis](https://mav.e-ce.uth.gr/) (University of Thessaly)
- [Spyros Lalis](https://faculty.e-ce.uth.gr/lalis/) (University of Thessaly)
- [Dimitris Chatzopoulos](https://people.ucd.ie/dimitris.chatzopoulos) (University College Dublin)

**Abstract:** The InterPlanetary Learning System (IPLS) is a fully decentralized federated learning framework, partially based on the InterPlanetary File System (IPFS). Using IPLS one can distribute and replicate parts of a machine-learning model on independently executing agents, which train the model in parallel based on their local/private data and iteratively interact with each other in a p2p fashion in order to synchronize and exchange the weights of their partitions. A first working prototype of IPLS that includes a Java-based API is already available and has been validated/evaluated for certain indicative system configurations. The goal of this project is to validate design and implementation decisions, elucidate behavioral characteristics, further extend the capabilities and evaluate the performance of IPLS. Specifically, we plan to proceed along the following directions: (i) robustness against malicious agents and privacy attacks; (ii) model partitioning and partition assignment strategies for improved robustness; (iii) more efficient synchronization between the agents responsible for the same (replicated) model partition; (iv) indirect communication between agents based on suitable IPFS primitives; (v) utilization of split-learning or some other suitable method to achieve secure computation offloading from resource-constrained agents on external (e.g., edge) computing infrastructures; (vi) API for Python and integration with selected ML libraries; and (vii) evaluation for different applications and realistic agent mobility/connectivity scenarios. 

## IPFS monitoring study
### Team: 
- Leonhard Balduf (TU Darmstadt / Weizenbaum Institute)
- Sebastian Henningsen (HU Berlin / Weizenbaum Institute)
- [Martin Florian](https://m.flrn.cc) (HU Berlin / Weizenbaum Institute)
- [Björn Scheuermann](https://fonda.hu-berlin.de/partners/prof-bjorn-scheuermann/) (TU Darmstadt / Weizenbaum Institute)

**Abstract:** We are a team of researchers interested in measuring distributed systems. We have investigated IPFS extensively in the past, in particular the [network overlay](https://arxiv.org/abs/2002.07747) and the [BitSwap](https://arxiv.org/abs/2104.09202) protocol. Through our measurements of the overlay, we systematically enumerate all DHT-enabled nodes and learn who is connected to whom (among a ton of other metrics).  From our BitSwap monitoring, we can extract which content was requested by our neighboring nodes at which point in time.

In our current ongoing project, we want to learn more about the nature of content that is stored on IPFS by combining and extending both perspectives. Specifically, we are interested in how content is stored, distributed, and replicated in the network. Imagine tracking specific CIDs: how many nodes are replicating that content and how did the content's distribution in the network evolve over time? Our results will provide important insights which can be leveraged to further improve the performance of IPFS and related networks such as Filecoin. This research will be privacy-preserving, and no user-specific information will be investigated or made public. 

# RFP-009: [Proofs of Space and Useful Space](https://github.com/protocol/research-RFPs/blob/master/RFPs/rfp-009-proof-of-space-and-useful-space.md)

### Team 1: 
- [Giuseppe Ateniese](https://www.gmu.edu/node/52511) (George Mason University)
- Long Chen (Insititute of Software, Chinese Academy of Sciences)
- Danilo Francati (Aarhus University)
- [Dimitris Papadopoulos](https://seng.hkust.edu.hk/about/people/faculty/dimitris-papadopoulos) (HKUST)
- [Qiang Tang](https://alkistang.github.io/) (University of Sydney)

**Abstract:** Verifiable capacity bound function (VCBF), a space analog of verifiable delay function, imposes a lower bound on the number of bits read from memory during evaluation (referred to as minimum capacity). Furthermore, it allows for an efficient public verification process: Given a proof-of-correctness, checking the validity of the output takes significantly fewer memory resources, sublinear in the target minimum capacity. Its space/capacity notion and the public and efficient verification process make VCBFs a potentially impactful primitive for the storage-based blockchain systems of Filecoin. However, research on VCBF is still at its very beginning, and the only known construction presents several drawbacks. One of them is that the space-based minimum capacity property of VCBF is preserved only in a “restricted model of computation” in which a machine performs a limited (constant) number of random access to the memory allocated. Building new VCBF constructions that are secure in "stronger models of computation" (e.g., machines that perform multiple non-constant random accesses) would allow VCBF to be deployed in the Filecoin network, bringing several benefits. For instance, VCBFs can play an important role in improving (or adding interesting properties to) proof of useful space, a fundamental building block for the Filecoin protocol.

### Team 2:
- [Tal Moran](https://talmoran.net/) (Reichman University)

**Abstract:** The goal of this proposal is to explore a new direction in constructing proofs of storage that are both useful and suitable for a permissonless consensus algorithm. The main idea is to look at converting *privately verifiable* proofs of storage into *publicly verifiable* proofs.

Privately verifiable proofs of storage are much easier to construct. However, proofs of storage intended for use in permissionless protocols require *public* verifiability. One avenue of research that looks promising is to apply techniques from a previous work, "[Public Verification of Private Effort](https://link.springer.com/chapter/10.1007/978-3-662-46497-7_7)" (with Giulia Alberini and Alon Rosen) to make use of privately verifiable proofs in a permissionless setting.

If this approach is successful, it could open many new avenues to solving the problems presented in the RFP. Some examples:
- Since privately-verifiable proofs are much easier to construct, it's more likely that we can find constructions satisfying specific criteria, such as updateable proofs or incrementally-upgradeable ones.
- If parties only need to generate privately-verifiable proofs to a small number of peers, the communication bandwidth of the proof becomes less critical --- each proof only travels on one (or few) point-to-point gossip links, rather than to the entire network.

# RFP-010: [Vector Commitments](https://github.com/protocol/research-grants/blob/master/RFPs/rfp-010-vector-commitments.md)

### Team 1: 
- [Charalampos (Babis) Papamanthou](https://www.cs.yale.edu/homes/cpap/) (Yale University) 
- Weijie Wang (Yale University)

**Abstract:** Vector commitments (VCs) are ubiquitous data structures that have proved to be useful in a range of real-world applications such as blockchains, verifiable computation, data outsourcing, and privacy-preserving payments. A vector commitment allows one to commit to a vector of n positions so that later verifiable openings to a particular set of positions can be made. In this proposal, we plan to investigate a line of research that focuses on tree-based vector commitments. What distinguishes tree-based vector commitments from other vector commitments is the fact that all proofs can be updated/maintained in sublinear time, whenever an element of the vector changes. However, due to this convenience, other challenges arise that we plan to investigate as part of this proposal. For example, it is typically hard to provide aggregation in tree-based vector commitments (e.g., Merkle tree proofs cannot be naturally aggregated) and verification of aggregated proofs can be expensive. We will be working on three different related directions: (a) tree-based commitments based on multilinear trees; (b) tree-based commitments based on RSA groups; (c) tree-based commitments based on lattices.

### Team 2: 
- [Carla Rafols](https://www.upf.edu/web/etic/entry/-/-/127288/adscripcion/carla-rafols) (Universitat Pompeu Fabra) 
- Alexandros Zacharakis (Universitat Pompeu Fabra) 

**Abstract:** Vector commitment schemes with subvector openings are cryptographic primitives that have been proven very useful in practice. While there exist many constructions in various settings, little is known in the discrete logarithm setting.

While the discrete logarithm setting is limited, since it allows to exploit only minimal structure, it remains quite interesting to explore the problem in this setting since (1) the cryptographic assumptions used are clean, extensively studied, and understood, (2) the arithmetic in this setting is more efficient, which could lead to more efficient constructions, and (3) techniques in this setting will probably work in other settings that generalize the discrete logarithm setting, most notably bilinear groups.

In this project we investigate what subsets of the desired properties of vector commitments can be achieved in the discrete logarithm and with what efficiency. We use both known techniques mainly inspired from the succinct argument literature, as well as explore new techniques to tackle the problem. Furthermore, we explore more restricted scenarios such as designated verifier and distributed trust that can be of practical importance for applications where fully public verifiability is not necessary.

### Team 3: 
- Russell Lai (Friedrich-Alexander University Erlangen-Nuremberg)
- Sri Aravinda Krishnan Thyagarajan (Friedrich-Alexander University Erlangen-Nuremberg)
- [Martin Albrecht](https://pure.royalholloway.ac.uk/portal/en/persons/martin-albrecht(ab997512-d7f9-4d99-92e1-33967032502b).html) (Royal Holloway, University of London)
- Giulio Malavolta (Max Planck Institute for Security and Privacy)

**Abstract:** Vector commitments enable commitments to a vector which are later opened to some function of the input vector, in a space efficient manner. In this project, we study lattice-based instances of vector commitments. Being “lattice-based” allows for some advanced functionalities and, critically, enables potentially post-quantum secure constructions. In particular, utilising the flexibility offered by lattices, we aim for the first direct construction of any vector commitment with functional openings for any constant-degree polynomial. Moreover, to the best of our knowledge, this would be the first example of a lattice-based vector commitment beyond positional openings (for which there are “trivial” constructions from Merkle trees).

This flexibility comes at a price. Our construction is likely to only be shown secure against a new family of lattice-based assumptions, which are natural extensions of the short integer solution (SIS) assumption. We refer to this family as the k-Ring Inhomogenous Short Integer Solution assumptions. Such assumptions offer additional algebraic structure, which allows us to transfer techniques for pairing-based cryptography to the lattice world.

### Team 4:
- [Dario Fiore](https://www.dariofiore.it/) (IMDEA Software Institute, Madrid, Spain)
- [Dimitris Kolonelos](https://software.imdea.org/people/dimitris.kolonelos/index.html) (IMDEA Software Institute, Madrid, Spain)
- [Dominique Schrӧder](https://www.chaac.tf.fau.eu/person/dominique-schroder/) (University of Erlangen-Nürnberg, Germany) 
- [Hien Chu](https://www.chaac.tf.fau.eu/person/hien-chu/) (University of Erlangen-Nürnberg, Germany)

**Abstract:** Vector commitments are a cryptographic primitive that allow one to commit a vector and to later open the commitment at given vector's positions. What makes this primitive interesting is that both commitments and openings should be concise, ideally constant in the vector's length. The notion of vector commitments has been generalized to that of functional commitments. In the latter, an opening not only discloses single vector entries but can also be used to open a function of the committed vector, still in a concise manner. While there exist several realizations of vector commitments under different assumptions and with a variety of efficiency measures, less is known about functional commitments of which only a few schemes are known.

In this project, we study the foundations of functional commitments with a particular focus on the computational assumptions and the minimal efficiency measures needed to build schemes for linear functions and more.


# Nucleation award

### Team:
- [Nada Amin](https://namin.seas.harvard.edu/), Harvard University

**Abstract:** Nada Amin will research declarative computing for zk-SNARKs. She will build on top of Protocol Labs' new language for universal computing with zk-SNARKs, Lurk. While Lurk is a core Lisp programming language, she will suggest and develop extensions to better support declarative programming, possibly in the style of miniKanren, a relational programming language. She will also generally help iterate on the design of Lurk so that it’s a good compilation target. She will collaborate on the theorem proving foundations built on top of Lurk. With her expertise in generative programming, she is also keen at looking into partial evaluation and staging to specialize target Lurk code as well as the universal circuit. The work will be evaluated through end-to-end case studies that demonstrate how what can be proved in Lurk proofs compares with what is possible through other approaches.

# Concluding thoughts

We are incredibly excited to fund these amazing researchers as they make progress on key problems in cryptography and distributed systems. Stay tuned for our follow-up post detailing our first crop of PhD and Postdoctoral Fellows, as well as an exciting Implementation Grant that we’ll tell you all about. If you are curious to learn more about Protocol Labs Research or want to collaborate, send us an email at research@protocol.ai!
