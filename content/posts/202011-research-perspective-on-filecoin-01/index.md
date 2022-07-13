---
# Blog post title
title: "A research perspective on Filecoin"

# Website post date
# format YYYY-MM-DD
date: 2020-11-16

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
  - cryptonet
  - cryptocomputelab

# Not used
draft: false

---

[The Filecoin network](https://filecoin.io/) is launching in the middle of a revolution in internet architecture, where vulnerable centralized services dependent on trusted parties are being replaced with resilient decentralized solutions based on verifiable computation, and internet services are being relocated from inefficient central monoliths to the far reaches of the network by peer-to-peer markets.

Filecoin represents an evolution in protocols and services adapted to the needs of the revolution in internet architecture: an open-source decentralized storage network with built-in economic incentives to ensure that files are stored reliably over time. Filecoin and other blockchain networks like Bitcoin and Ethereum are pioneering examples of Open Services: decentralized platforms where commercial service providers ---from the corporation to the individual--- can compete in an open market.

Filecoin is a living project, and here we trace the evolutionary trajectory of a revolutionary technology in two parts: In **Part One**, we describe the technological and conceptual advances leading to the creation of the first modern networks based on distributed ledger technology. In **Part Two**, we focus on Filecoin's development, from inception to implementation.

## Part One: Standing on the shoulders of giants

It would be impossible to capture all of the advances in cryptography, distributed systems, cryptoeconomics, and related fields that have contributed to the development of Filecoin. Nevertheless, there are certain peaks in the technological landscape that stand out:

The era of modern cryptography may have begun in secret at the [British Signals Intelligence Agency](https://en.wikipedia.org/wiki/GCHQ), with the development of [public key cryptography](https://web.archive.org/web/20170216051636/https://www.gchq.gov.uk/sites/default/files/document_files/CESG_Research_Report_No_3006_0.pdf) by James Ellis in **1970** and the introduction of the factoring problem in an RSA-equivalent construction by Clifford Cocks in **1973.** However, the public lineage leading to blockchain implementations like Bitcoin, Ethereum, and Filecoin began in a U.C. Berkeley undergraduate computer science class with Ralph Merkle's **1974** [CS 244 project proposal](https://www.merkle.com/1974/FirstCS244projectProposal.pdf) for establishing secure communications over insecure communication channels, eventually published in **1978** in the [*ACM*](https://www.merkle.com/1974/PuzzlesAsPublished.pdf). Merkle's paper described a cryptosystem based on puzzle-solving, where the puzzles take the form of an encrypted message with an unknown key --- an early construction for public-key cryptography. *Merkle's Puzzles*, as the paper is commonly known, even contained an early concept of Proof-of-Work[^1] --- the construction underlying Bitcoin, Ethereum, and most other permissionless blockchains today.

Merkle's public-key cryptosystem, based on computations having quadratic complexity, was not secure enough for most practical implementations. In **1976**, with the publication of [New Directions in Cryptography](https://ee.stanford.edu/~hellman/publications/24.pdf), Whitfield Diffie and Martin Hellman built on Merkle's ideas to devise the famous algorithm known as the [Diffie-Hellman key exchange](https://en.wikipedia.org/wiki/Diffie-Hellman), which is based on a much more complex mathematical problem ([the discrete logarithm](https://en.wikipedia.org/wiki/Discrete_logarithm_problem)). Their seminal paper also informally lays out the idea of a *cryptographic hash function*: a non-reversible algorithm that maps data of any size to a fixed-size bit string.

Shortly thereafter, in **1977**, Ronald L Rivest, Adi Shamir, and Leonard Adleman at MIT developed the [RSA cryptosystem](https://people.csail.mit.edu/rivest/Rsapaper.pdf), an asymmetric cryptographic algorithm based on the factorization of large primes. RSA became one of the first public-key encryption schemes to reach wide use, and is still used in e.g. TLS handshakes between VPN servers and clients to establish secure communications channels.

In **1979**, Ralph Merkle submitted a [Stanford PhD thesis](http://www.merkle.com/papers/Thesis1979.pdf) informally sketching the idea of *collision-resistance* --- a property of a hash function describing how difficult it is to find two inputs that hash to the same output --- and a "recipe" for building a hash function using symmetric encryption. The invention of the cryptographic hash function and the development of the concept of collision resistance to measure the security of these one-way functions created a secure means to authenticate data without violating privacy.

By the early 1980s, cryptographers and cypherpunks were making significant progress on the problem of secure communication between trusted parties. But the problem of achieving consensus in multi-party communication including potentially faulty or corrupt parties remained unsolved. In their **1982** paper "[Reaching agreement in the presence of faults](https://citeseerx.ist.psu.edu/viewdoc/download;jsessionid=CAE9DBDC8B6AF902132B7859E38E3E06?doi=10.1.1.68.4044&rep=rep1&type=pdf)", Leslie Lamport, Robert Shostak, and Marshall Pease formally described the [Byzantine Generals Problem](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.126.9525&rep=rep1&type=pdf), the dilemma plaguing distributed ledger implementations [since antiquity](https://ethw.org/Distributed_ledgers): how does one create a trustless mechanism for enabling coordination in a system containing unreliable or untrustworthy components?

David Chaum's **1982** UC Berkeley dissertation "[Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups](https://www.chaum.com/publications/research_chaum_2.pdf)" introduced the first known description of a blockchain protocol, including every element of the Bitcoin blockchain (except for proof-of-work), as well as the code necessary for its implementation[^2]. The influence of this prescient but unpublished work is [unclear](https://arxiv.org/pdf/1810.06130.pdf). Though it lacks the robust *consensus mechanism* (the algorithm that lets users in a distributed system reach agreement without the need for a central arbiter) crucial to modern blockchain implementations, it anticipates many of the important features of current distributed ledger technology.

The 1980s saw further developments in cryptographic hashing: the criterion of collision-resistance for a hash function was formalized by Ivan Damgård, in his **1987** [*EUROCRYPT'87* paper](https://www.researchgate.net/publication/226671358_Collision_Free_Hash_Functions_and_Public_Key_Signature_Schemes). A few years later, in **1989**, Damgård developed a cryptographic hash function "recipe" almost identical to Merkle's, and proved in a [*CRYPTO'89* paper](https://www.researchgate.net/publication/221354712_A_Design_Principle_for_Hash_Functions) that it satisfied his previously-specified collision-resistance criterion. The idea became known as the [Merkle-Damgård construction](https://en.wikipedia.org/wiki/Merkle%E2%80%93Damg%C3%A5rd_construction), and is part of the design of important hash functions like [MD5](https://en.wikipedia.org/wiki/MD5) (designed by Ronald Rivest in 1991), [SHA-1](https://en.wikipedia.org/wiki/SHA-1) (published as a US federal standard in 1995), and [SHA-2](https://en.wikipedia.org/wiki/SHA-2). The SHA-2 family of hash functions is a NIST standard [published in 2002](https://csrc.nist.gov/csrc/media/publications/fips/180/2/archive/2002-08-01/documents/fips180-2.pdf), and is used in security protocols like TSL, SSL, SSH, and PGP. Closer to the heart of our story, the SHA-256 member of the SHA-2 family is used by Bitcoin and other blockchain protocols to verify transactions and calculate Proof-of Work and Proof-of-Stake.

The collision-resistant hash function was integral to Stuart Haber and W. Scott Stornetta's **1991** method of certifying the creation and modification of digital documents while maintaining user privacy, published in ["How to Time-Stamp a Digital Document"](https://www.anf.es/pdf/Haber_Stornetta.pdf) (and later expanded upon with D. Bayer in a **1993** publication and in a **1997** [*ACM* paper](https://nakamotoinstitute.org/static/docs/secure-names-bit-strings.pdf); these three publications constitute three of the eight citations in the [Bitcoin whitepaper](https://bitcoin.org/bitcoin.pdf). This method of relative timestamping --- establishing the order of events in a decentralized system --- was essential to the critical task of establishing transaction priority on the blockchain. Improvements in timestamping presented by H. Massias, X.S. Avila, and J.-J. Quisquater in their **1999** paper, "[Design of a secure timestamping service with minimal trust requirement](https://nakamotoinstitute.org/static/docs/secure-timestamping-service.pdf)", were directly incorporated into the [Bitcoin](https://bitcoin.org/bitcoin.pdf) proposal.

The Proof-of-Work concept underlying consensus mechanisms in many modern distributed ledger technologies was introduced in **1992** when Cynthia Dwork and Moni Naor [published](http://www.wisdom.weizmann.ac.il/~naor/PAPERS/pvp.pdf) a pricing function based on difficult computation as a scheme for controlling access to a shared resource; the publication describes an implementation to fight junk mail. Dwork and Naor's paper did not use the term "proof-of-work" --- that was invented and formalized later in a [1999 paper](http://www.hashcash.org/papers/bread-pudding.pdf) by Markus Jakobssen and Ari Juels --- but the paper establishes an asymmetrically costly defense mechanism whereby service requesters must perform work that service providers can easily check. This principle of requiring verifiable and computationally costly work as the basis of consensus later became a critical component of Bitcoin's security assurances. The work of defending and regulating the use of un-metered internet resources continued in **1997** with Adam Back's [hashcash](http://www.hashcash.org/papers/announce.txt) proposal to use partial SHA-1 collisions as a proof-of-work to fight spam (described in detail in his [2002 paper](http://www.hashcash.org/papers/hashcash.pdf)).

We might trace the roots of the modern cryptocurrency era to **1998**, when Wei Dai published "[b-money, an anonymous, distributed electronic cash system](http://www.weidai.com/bmoney.txt)" to the cypherpunks mailing list, which described a protocol having many of the features shared by modern cryptocurrency systems, including transaction broadcast and proof-of-work. In the same year, Nick Szabo proposed a blockchain-based decentralized currency called "[bit gold](https://unenumerated.blogspot.com/2005/12/bit-gold.html)" based on public-key-linked proof-of-work chains and time-stamped block elements. When Hal Finney (later to become the first Bitcoin recipient) created the first [reusable proof-of-work system](https://nakamotoinstitute.org/finney/rpow/index.html) in 2004, he proposed the use of proof-of-work tokens as a form of bit gold.

The growth of the internet spurred further work into hardening networks against faulty node behavior. In **1999,** Miguel Castro and Barbara Liskov at MIT [published](http://pmg.csail.mit.edu/papers/osdi99.pdf) an implementation of a Byzantine fault-tolerant distributed file system able to meet the performance demands of real-world asynchronous internet systems.

Work on problem specification relevant to distributed systems was also producing interesting results in the late 90s. In **1999**, Henning Pagnia and Felix Gärtner formally defined the [strong fair exchange problem](https://www.cs.utexas.edu/~shmat/courses/cs395t_fall04/pagnia.pdf), arguing that it is impossible for two parties to execute a guaranteed, perfectly fair exchange of digital goods without a trusted third party. This finding would later have important implications for the structure of Filecoin's retrieval market, motivating the need to bootstrap trust between market participants via incremental deal performance.

A few years later, in the early 2000s, we can see the emergence of ideas directly and particularly relevant to Filecoin's design. In **2002,** David Mazières and Dennis Shasha described the features of a multi-user network filesystem in "[Building secure file systems out of Byzantine storage](https://cs.nyu.edu/cs/faculty/shasha/papers/mazpodc.pdf)", demonstrating that a trusted network file system can be implemented on an untrusted server. Also in **2002,** Sean Quinlan and Sean Dorward at Bell Labs developed the data model of *content-addressable storage* --- a way of referring to data by its content rather than its location --- as a [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs) service called [Venti](https://www.usenix.org/legacy/publications/library/proceedings/fast02/quinlan/quinlan_html/index.html), using the SHA-1 hash function. This content-addressable data model using SHA-1 was [adopted](https://github.com/git/git/commit/e83c5163316f89bfbde7d9ab23ca2e25604af290?#diff-c47c7c7383225ab55ff591cb59c41e6b) by Linus Torvalds in **2005**, for the version-control system Git as a way to avoid centralized repositories, and independently by Bram Cohen at [BitTorrent](https://en.wikipedia.org/wiki/Mainline_DHT), as a way to avoid central "tracker" servers.

In **2008** Satoshi Nakamoto published [Bitcoin](https://bitcoin.org/bitcoin.pdf), which uses SHA-256 both for content-addressable transaction storage and as part of a proof-of-work consensus scheme overcoming the main hurdle for building a distributed ledger on the internet, [the Byzantine Generals Problem](https://www.youtube.com/watch?v=IP-rGJKSZ3s&t=390s).

The release of Bitcoin was a [mic drop moment](https://media.giphy.com/media/l0K42u9hCg0x6XbLa/giphy.gif): Bitcoin demonstrated that distributed ledger technology could function at scale in a modern computing environment.  Stay tuned for the next installment of this series, where we'll take a look at the novel development environment ushered in by the first Bitcoin release!


[^1]: A.T. Sherman *et al.* 2018. [*On the Origins and Variations of Blockchain Technologies.*](https://arxiv.org/pdf/1810.06130.pdf)

[^2]: A.T. Sherman *et al.* 2018. [*On the Origins and Variations of Blockchain Technologies.*](https://arxiv.org/pdf/1810.06130.pdf)
