---
title: "Filecoin: A decentralized storage network"
date: 2017-07-19

publishDate: 2017-07-19

doi:

publication_types:
  - report
authors:
  - "Protocol Labs"
groups:
  - cryptonet
  - cryptocomputelab
categories:
  -
areas:
  - cryptography
  - distributed-systems

journal:

venue:
venue_location:

resources:
  - src: protocollabs2017a.pdf
  - src: cite.bib
---
The internet is in the middle of a revolution: centralized proprietary services are being replaced with decentralized open ones; trusted parties replaced with verifiable computation; brittle location addresses replaced with resilient content addresses; inefficient monolithic services replaced with peer-to-peer algo-rithmic markets. Bitcoin, Ethereum, and other blockchain networks have proven the utility of decentralized transaction ledgers. These public ledgers process sophisticated smart contract applications and transact crypto-assets worth tens of billions of dollars. These systems are the first instances of internet-wide Open Services, where participants form a decentralized network providing useful services for pay, with no central management or trusted parties. IPFS has proven the utility of content-addressing by decentralizing the web itself, serving billions of files used across a global peer-to-peer network. It liberates data from silos, survives network partitions, works offline, routes around censorship, and gives permanence to digital information. Filecoin is a decentralized storage network that turns cloud storage into an algorithmic market. The market runs on a blockchain with a native protocol token (also called "Filecoin"), which miners earn by providing storage to clients. Conversely, clients spend Filecoin hiring miners to store or distribute data. As with Bitcoin, Filecoin miners compete to mine blocks with sizable rewards, but Filecoin mining power is proportional to active storage, which directly provides a useful service to clients (unlike Bitcoin mining, whose usefulness is limited to maintaining blockchain consensus). This creates a powerful incentive for miners to amass as much storage as they can, and rent it out to clients. The protocol weaves these amassed resources into a self-healing storage network that anybody in the world can rely on. The network achieves robustness by replicating and dispersing content, while automatically detecting and repairing replica failures. Clients can select replication parameters to protect against different threat models. The protocol's cloud storage network also provides security, as content is encrypted end-to-end at the client, while storage providers do not have access to decryption keys. Filecoin works as an incentive layer on top of IPFS [1], which can provide storage infrastructure for any data. It is especially useful for decentralizing data, building and running distributed applications, and implementing smart contracts. This work: (a) Introduces the Filecoin Network, gives an overview of the protocol, and walks through several components in detail. (b) Formalizes decentralized storage network (DSN) schemes and their properties, then constructs File-coin as a DSN. (c) Introduces a novel class of proof-of-storage schemes called proof-of-replication, which allows proving that any replica of data is stored in physically independent storage. (d) Introduces a novel useful-work consensus based on sequential proofs-of-replication and storage as a measure of power. (e) Formalizes verifiable markets and constructs two markets, a Storage Market and a Retrieval Market, which govern how data is written to and read from Filecoin, respectively. (f) Discusses use cases, connections to other systems, and how to use the protocol.
