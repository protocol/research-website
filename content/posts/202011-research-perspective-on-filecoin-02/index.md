---
# Blog post title
title: "A Research Perspective on Filecoin, Part Two"

# Website post date
# format YYYY-MM-DD
date: 2020-11-23

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - david-dalrymple
  - irene-giacomelli
  - karola-kirsanow

# If applicable
categories:
  - Blog

# Zero or more of the areas in content/areas
areas:
  - cryptoeconomics
  - cryptography
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonetlab
  - cryptocomputelab

# Not used
draft: false

---

In [Part One](https://research.protocol.ai/blog/2020/a-research-perspective-on-filecoin/), we traced the intellectual and technological history  of modern implementations of distributed ledger technology. Now let’s take a stroll through the technological landscape around the time of Filecoin’s release:

## The post-Bitcoin landscape

The arrival of Bitcoin initiated a rapid florescence in the development of distributed ledger technology, inaugurating the modern blockchain era. This period saw a number of innovations in both underlying technologies and overlaid applications.

Bitcoin’s practical breakthrough was its *proof-of-work consensus algorithm*, which created a reliable system for managing and tracking token ownership in a distributed system. This was a milestone akin to the[  breaking of the four-minute-mile barrier in running](https://en.wikipedia.org/wiki/Four-minute_mile): once it was established that satisfactory solutions to the Byzantine Generals problem were realistically possible, blockchain developers immediately began to implement further innovations on the problem of consensus.

[Peercoin](https://www.peercoin.net/assets/paper/peercoin-paper.pdf), a blockchain incorporating a *proof-of-stake* consensus protocol which debuted in **2012**, introducing an alternative to Bitcoin’s proof-of-work protocol. In *proof-of-stake* consensus, the miner of a new block is chosen based in part on some measure of their investment in the network — for example seniority or token holdings — rather than on the solving of computationally intensive puzzles underlying *proof-of-work* systems. Reducing the resources wasted on Bitcoin mining was another target of blockchain innovators. For example, [Primecoin](https://primecoin.io/bin/primecoin-paper.pdf), introduced in **2013** by the founder of Peercoin, was based on a proof-of-work protocol that performs (slightly) useful work: searching for prime numbers. [Permacoin](https://ieeexplore.ieee.org/abstract/document/6956582), published in May 2014, was an academic proposal for building a proof-of-work mechanism around long-term data storage rather than computation, but it had the severe limitation of requiring a fixed set of data to be used over the whole lifetime of a blockchain using that design.

Ethereum ([whitepaper](https://ethereum.org/en/whitepaper/), **2013**) launched based on a proof-of-work consensus protocol ([Ethash](https://eth.wiki/en/concepts/ethash/ethash)); the network intends to shift to a proof-of-stake protocol in [Eth 2.0](https://ethereum.org/en/eth2/). Ethereum explicitly foregrounded the potential for blockchain networks to serve as a platform for decentralized applications, helping to create the market for decentralized file storage, among other novel blockchain applications. Ethreum’s blockchain-as-a-platform model has created a [vibrant ecosystem ](https://www.stateofthedapps.com/rankings/platform/ethereum)of third-party [dApps](https://en.wikipedia.org/wiki/Decentralized_application) (decentralized applications) and inspired some [creative thinking](https://hackfs.com/index.html) about the [types of applications](https://filecoin.io/blog/filecoin-defi/) the decentralized web (including Filecoin) can support.

## The 2014 Filecoin whitepaper

The first version of [Filecoin](https://filecoin.io/filecoin-jul-2014.pdf), a cryptocurrency and file storage network enabling the outsourcing of data storage to a distributed network of service providers, was published in **2014**. Filecoin’s goal was to make data widely and cheaply available and redeploy wasted computational resources to perform useful work. Enacting this vision required innovation in the protocol and service layers of the network, and one of Filecoin’s primary conceptual advances was to make the useful work performed by consensus relevant to the purpose of the network: storing and retrieving files.

In the 2014 proposal, Filecoin’s useful storage service is layered atop Bitcoin-style proof-of-work consensus: in addition to solving a cryptographic puzzle, Filecoin miners would complete a *proof-of-retrievability* establishing that they were storing a particular file. The 2014 whitepaper observes that the inclusion of proof-of-work is sub-optimal, and concludes with a proposal to remove proof-of-work consensus from the Filecoin protocol. This vision formed the basis of much of the work on the [Filecoin proof system](https://filecoin.io/blog/filecoin-proof-system/) over the next few years.

## The 2017 Filecoin whitepaper

In **2017**, Protocol Labs announced Filecoin, the decentralized storage network and market first envisioned in the 2104 whitepaper. The [2017 Filecoin construction](https://filecoin.io/filecoin.pdf) built on the foundations laid by its 2014 predecessor to introduce several significant conceptual and technological advances:

### Growing an ecosystem

One of the greatest conceptual advances relevant to the Filecoin Network between the 2014 and 2017 constructions occurred via a different Protocol Labs technology: the launch of [IPFS](https://ipfs.io/) — a peer-to-peer hypermedia protocol for storing and sharing data in a distributed file system — in **2015.** IPFS ([whitepaper](https://ipfs.io/ipfs/QmR7GSQM93Cx5eAg6a6yRzNde1FQv7uL6X1o4k7zrJa3LX/ipfs.draft3.pdf)) served as a proof-of-concept of the real-world utility of [*content-addressing*](https://filecoin.io/blog/why-is-decentralized-critical/): referring to data by its content (through a hash fingerprint) rather than its location in the network. Content-addressing in IPFS allows peers to exchange data locally (an essential component of the decentralization of data access central to the Filecoin storage model) without having to connect to a central hub. Working with IPFS also contributed to Filecoin developers’ data and intuitions regarding market structures and incentives, as well as privacy protection.

The existence of IPFS — and of [Ethereum](https://ethereum.org/en/), a vibrant smart-contracts platform supporting applications requiring decentralized storage — also created market demand for Filecoin. Accordingly, the 2017 whitepaper built out the crypto-economic underpinnings of the Filecoin model (later elaborated in [this report](https://research.protocol.ai/publications/engineering-filecoins-economy/)), formally describing the Filecoin network as a decentralized storage network, and introducing the concept of [verifiable storage and retrieval markets](https://filecoin.io/blog/filecoin-features-verifiable-storage/). These innovations established Filecoin as part of a community of technologies interacting in an open market.

In addition to creative thinking about Filecoin’s place in the broader economy of decentralized services, this period also saw significant re-envisioning of core Filecoin technologies. We can get a sense of the extent of the improvements made to the Filecoin protocol during this time by taking a look at the changes made to the **proof system** and **consensus mechanism**:

### The Filecoin Proof System

The 2017 Filecoin construction described two new proofs-of-storage: *proof-of-replication* (PoRep) and *proof-of-spacetime* (PoSt)*.* These proofs were motivated by the desire to build on work in the areas of [*provable data possession*](http://webarchiv.ethz.ch/infsec/education/fs08/secsem/ateniese-ccs07.pdf) (PDP) and *proof-of-retrievability* developed by [Juels and Kaliski](https://www.arijuels.com/wp-content/uploads/2013/09/JK07.pdf) and [Shacham and Waters](https://eprint.iacr.org/2008/073.pdf) to provide greater protection against Sybil attacks, outsourcing attacks, and generation attacks. Filecoin’s **PoRep** ([proof-of-replication](https://proto.school/verifying-storage-on-filecoin/03)) allows storage providers (miners on the Filecoin network) to verifiably demonstrate that they are storing data replicas in physically independent locations. Filecoin’s **PoSt** ([proof-of-spacetime](https://proto.school/verifying-storage-on-filecoin/04)) algorithm is used to prove that a particular data replica is being stored throughout the agreed-upon period of time. The proof-of-spacetime algorithm serves as the basis for an intrinsically useful proof-of-work, one of the goals explicitly set forth in the 2014 Filecoin whitepaper.

Work on Filecoin’s proof system also included research into optimizing the methods of storing proofs in the blockchain. Filecoin uses [zk-SNARK](https://proto.school/verifying-storage-on-filecoin/05) technology to publish PoRep and PoSt on-chain in a compact format. *Zero-knowledge Succinct Non-interactive ARguments of Knowledge* ([zk-SNARKs](https://www.iacr.org/archive/crypto2013/80420214/80420214.pdf)) are publicly-verifiable and efficient systems for proving something is true via a constant-size single message that does not expose the private part of the information in question.

### Refactoring Consensus

One of the core advances of the Filecoin protocol lies in its *consensus mechanism* — the way the nodes of the network agree on network state. Filecoin consensus presents two efficiency advantages over Bitcoin-style consensus: it costs less energy to run than Bitcoin; and the protocol incentivizes energy “recapture” as a side effect of providing cryptographically verified cloud storage of real data for real customers, rather than being spent directly on blockchain maintenance.

Current Filecoin consensus also represents an innovation over the system described in the 2014 Filecoin whitepaper. The 2017 Filecoin proposal introduced a [consensus protocol based on useful work](https://spec.filecoin.io/#section-algorithms.expected_consensus), where the probability that a miner is elected to create a new block is proportional to their active storage relative to the rest of the network. This new consensus protocol was designed to incentivize miners to invest in storage power, aligning their incentives with the goals of the network, and to allow the proof-of-storage computation to be re-used to participate in consensus, increasing the efficiency of the system. The proofs-of-spacetime that miners submit to the network can be used to calculate miner power, making power in Filecoin *public* and *publicly verifiable*.

The PL Technical Report [*Power Fault Tolerance*](https://filecoin.io/vintage/power-fault-tolerance.pdf) models [Byzantine fault tolerance](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance) (essentially a measure of the susceptibility of a distributed system to the Byzantine Generals Problem) according to a framing more applicable to the way power works in the Filecoin network. This new understanding of power is used by Filecoin’s [Expected Consensus](https://spec.filecoin.io/algorithms/expected_consensus/), a consensus protocol using a [*secret leader election*](https://eprint.iacr.org/2020/025.pdf) to select the miners who will extend the chain by mining new blocks. Leader election in Filecoin builds on extant protocols [PoA](https://netecon.seas.harvard.edu/NetEcon14/Papers/Bentov_netecon14.pdf), [Snow White](https://eprint.iacr.org/eprint-bin/getfile.pl?entry=2016/919&version=20160922:013923&file=919.pdf), and [Algorand](https://arxiv.org/pdf/1607.01341.pdf) to choose miners based on the power committed to a candidate history.

These technological advances in consensus were powered by a great deal of conceptual work in [cryptoeconomics](https://filecoin.io/blog/filecoin-cryptoeconomic-constructions/), particularly *incentive alignment*: Filecoin’s leader elections and its [block reward system](https://filecoin.io/blog/filecoin-features-block-rewards/) based on useful work create a system of incentives aligning miners and clients, with the goal of the network: providing useful storage.

The publication of the 2017 Filecoin whitepaper accelerated Filecoin research, and this dynamism continued throughout the pre-launch period:

# Preparing the launchpad

The 2017 whitepaper and [2017 Research Roadmap](https://filecoin.io/vintage/research-roadmap-2017.pdf) outlined several areas for continued research. Although none of these identified improvements was launch-critical, work on the [Single Secret Leader Election](https://research.protocol.ai/publications/single-secret-leader-election/), improvements to the proof system such as [scaling proofs-of-replication](https://research.protocol.ai/publications/scaling-proof-of-replication-for-filecoin-mining/), and [SNARK optimization](https://filecoin.io/blog/announcing-the-snark-challenge/) to help speed up the generation of zk-SNARK proofs were active research topics in the period between publication and launch.

In addition to optimizations for the extant protocol, the whitepaper also included suggestions for extending Filecoin’s functionality: the Filecoin team proposed the creation of a payments network similar to the [Bitcoin Lightning Network](https://lightning.network/lightning-network-paper.pdf), possibly incorporating features of the [Sprites system](https://arxiv.org/pdf/1702.05812.pdf), and the implementation of a system for *smart contracts*: stateful programs that users can interact with via the blockchain ledger.

There were, of course, a number of pre-launch advances that were not anticipated by the 2017 publications: ResNetLab has made significant improvements to Filecoin’s [message propagation protocols](https://research.protocol.ai/publications/gossipsub-attack-resilient-message-propagation-in-the-filecoin-and-eth2.0-networks/) to keep nodes synchronized, avoid forks, and harden the network against the most challenging attacks. And perhaps one of the more significant improvements to the network during this period was the addition of the [drand](https://drand.love/) randomness beacon, which leverages a [decentralized network](https://www.cloudflare.com/leagueofentropy/) to generate publicly verifiable, unbiased randomness. The drand project originated in the [DEDIS](https://github.com/dedis) lab at EPFL, an outgrowth of research into [scalable bias-resistant distributed randomness](https://eprint.iacr.org/2016/1067.pdf), and is now an important part of Filecoin’s leader election.

Filecoin requires high-entropy, unbiased, publicly verifiable, unpredictable randomness to conduct the [leader elections](https://filecoin.io/blog/distributed-randomness-and-leader-elections/), which determine which miner will generate the next block on the blockchain and earn that block’s rewards, and for the generation of PoRep and PoSt. Drand provides this “good randomness”, allowing Filecoin to guarantee *liveness* — client consensus on the history of the Filecoin blockchain — and *verifiable storage*.

# Building the future

The Filecoin network exploded onto the blockchain scene in October 2020, introducing an exciting new configuration of technology and incentives to the nascent Web 3.0 space. But just because Filecoin is out there tearing it up in the real world doesn’t mean the work of building secure and efficient data storage technology is over: researchers have inaugurated a new phase in Filecoin’s development, where real-world data is integrated into the research and deployment cycle.

Predicting — and shaping — the trajectory of a new technology is a complex process. Protocol Labs researchers, including members of CryptoLab, ResNetLab, and the soon-to-be-formed ConsensusLab — along with the broader research community — have some ideas about research areas that might be interesting to watch in the future:

  - [zk-SNARKs](https://research.protocol.ai/talks/good-snarks-are-here-needed/) are currently a focus of active research, including using SNARK aggregation techniques and devising new vector commitment schemes to reduce the costs of Merkle trees in Filecoin SNARKs. Research foci include devising better systems for SNARKs involving [*multiparty computation*](https://en.wikipedia.org/wiki/Secure_multi-party_computation) (MPC), a technique for allowing several nodes in a network to jointly compute a function over their inputs while keeping those inputs private.

  - [VRFs](https://dash.harvard.edu/bitstream/handle/1/5028196/Vadhan_VerifRandomFunction.pdf?sequence=2&isAllowed=y) — *Verifiable Random Functions* — enable publicly verifiable deterministic precommitments. In Filecoin, VRFs are used as part of a system verifying the integrity of Miners' stored data. Each block produced in Filecoin includes values pulled from two sources of randomness, VRFs and the [drand](https://drand.love/) randomness beacon. Miners submit proofs about their stored data incorporating references to randomness added at specific epochs, ensuring that Miners generated proofs at a specific point in time. Future work on VRFs will improve the randomness-production system.

  - [VDFs](https://eprint.iacr.org/2018/601.pdf) — *Verifiable Delay Functions* — guarantee a random delay given some hardware assumptions and a small set of requirements. VDFs play a role in public randomness beacons, in leader election in consensus protocols, and in proofs of replication. VDFs are not currently implemented in the Filecoin spec but are an [active](https://research.protocol.ai/talks/vdfs-and-filecoin/) [research area](https://filecoin.io/blog/collaboration-on-vdfs/).

  - [Depth Robust Graphs](https://research.protocol.ai/talks/proof-of-replication-using-depth-robust-graphs/) — a form of directed acyclic graph structure — are produced in Filecoin’s proof-of-replication step as original data is encoded into a replica and committed to the blockchain. Work on DRGs is part of the ongoing research into the proof system and graph structures.

  - [Vector Commitments](https://eprint.iacr.org/2011/495.pdf) — cryptographic primitives enabling secret precommitments that can be revealed later — are an important component of Filecoin’s verifiable decentralized storage model, and [new vector commitment techniques](https://research.protocol.ai/talks/vector-commitment-techniques-and-applications-to-verifiable-decentralized-storage/) are an active area of CryptoLab research.

  - [BLS signatures](https://en.wikipedia.org/wiki/Boneh%E2%80%93Lynn%E2%80%93Shacham) are a form of [digital signature](https://en.wikipedia.org/wiki/Digital_signature): a scheme for validating the authenticity of digital data. The drand randomness beacon uses [threshold BLS](https://hackmd.io/@nikkolasg/HyUAgm234) to jointly compute a signature by combining individual partial signatures that are independently produced by the participants. Secure collaborative computation is an important component of un-biasability, and a topic for future research.

This is, of course, not an exhaustive list of future research directions for the Filecoin project. As  cryptographer and blockchain expert [Dan Boneh](https://crypto.stanford.edu/~dabo/) noted in his Filecoin Liftoff [Fireside chat](https://www.google.com/url?q=https://youtu.be/xb9oxvequPc?t%3D3661&sa=D&ust=1603399256669000&usg=AOvVaw3whZW1sb_cRWOwXtPI-SXQ), the blockchain is “an amazing testing ground for deploying cryptographic tools,” in part because “the rate of change is much faster on blockchains.” 

We in the research community are excited to drive breakthroughs that will accelerate the evolution of the Filecoin network. But the real technological accelerant will be Filecoin’s ongoing widespread adoption by the broader Web 3.0 community, bringing research into contact with reality to create new technologies and applications.
