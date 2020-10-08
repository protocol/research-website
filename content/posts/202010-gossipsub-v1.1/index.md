---
# Blog post title
title: GossipSub - An Attack-Resilient Messaging-Layer Protocol for Public Blockchains

# Website post date
# format YYYY-MM-DD
date: 2020-10-06

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
- yiannis-psaras
- david-dias

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

Securing permissionless networks is the bane of open networks, starting with the Internet and every overlay network that operates over it. This challenge has existed from the early days of the Internet to the current Web 3.0 generation. The crux of the problem is that in permissionless networks, anyone can choose their behaviour strategy, which creates an opportunity for malicious actors to exploit the setup for their own gain (or fame). Historically, most attempts to solve this problem tried to work around it by creating a reputation system in which well-behaved peers are rewarded and badly-behaved ones are excluded. However, these systems are difficult to engineer because creating identities is normally cheap (see the seminal [Sybil Attack paper](https://dl.acm.org/doi/10.5555/646334.687813)), which enables malicious actors to discard identities tagged with bad behaviour and create new ones to reset their score.

In order to mitigate the attack vectors present in a permissionless network, we need a way to reward well-behaved peers while making it expensive for malicious peers to gain the power necessary to execute a meaningful attack. To achieve this, we need a sophisticated solution that leverages the benefits of reputation systems and enhances them with features such as contribution to the network, time invested in participation, computing resources (see the seminal [Proof of Work paper](http://weis2006.econinfosec.org/docs/50.pdf)), and, potentially, staking (see [Proof-of-Stake systems](https://en.wikipedia.org/wiki/Proof-of-stake)) to build robustness into the fabric of the network.

## Permissionless Monetary Networks

There have been permissionless networks in the past (e.g., BitTorrent), but those networks were not used to transfer monetary value. Blockchain permissionless networks, on the other hand, carry significant amounts of monetary value and are also free/open to join. These properties make them a very challenging environment to operate and secure from malicious activity.

There have been several studies that investigated attacks at the network layer of permissionless blockchain networks – we think this is only the start of a great new research area.

In our effort to secure the network/messaging layer of the Filecoin network, we faced several challenges and identified several attacks that a malicious node could use to disrupt the network. It is straightforward to think, “If an attack costs more than the return it will bring to the attacker, it is not an attack worth carrying out.” This, however, is not enough. A resilient network layer protocol needs to make an attack unsustainable in both the short and longer term. The network should be able to return to a healthy state and propagate messages within the given deadlines.

In our recent “Hardening GossipSub” project, we have proven just that. GossipSub can be attacked. It can be slowed down. But it contains all the required mechanisms to identify which nodes are misbehaving, exclude them from the protocol’s operation, recover the state of the network in record time, and always meet its delivery deadlines.

For a blockchain network, the deadline is the block and transaction message propagation throughout the network. In other words, the time it takes for a newly published message to reach all nodes needs to be smaller than a predefined, blockchain-specific value. Otherwise the blockchain forks, risking the loss of money. For the Filecoin network, this value stands at 6 seconds.

## The GossipSub Protocol & Hardening Extensions

As the name suggests, GossipSub is a gossip-based pubsub protocol. Structurally, a GossipSub-based network is composed of: i) mesh links that carry full messages in an eager-push manner (i.e., actively propagating messages) and ii) gossip-links that carry message identifiers only and realise a lazy-pull propagation model (i.e., reactively requesting messages they’ve learned about).

**Mesh links** build the GossipSub mesh. Each node connects to the mesh through a number of connections, `D`, which indicates the degree of the network.

<center>{{< figure src="image3.png" alt="The Gossipsub Mesh" >}}</center>
  <p></p>

The degree, `D`, is accompanied by two thresholds, `D_low` and `D_high`, that act as boundaries. When the number of connections increases above `D_high`, the node prunes some of the connections, whereas when it decreases below `D_low`, the node grafts new connections. Both of these happen in order to keep the degree in the area `<D_low, D_high>`.

<center>{{< figure src="image6.png" alt="the graft v prune threshhold" >}}</center>
  <p></p>
  
**Gossip links** augment the message propagation performance of the protocol. Gossiping allows the network to operate on a relatively low degree and, therefore, keep traffic under certain levels. There is a clear tradeoff between gossiping levels and the degree of the network, which we depict in the following figure:

<center>{{< figure src="image2.png" alt="tradeoff between gossiping levels and the degree of the network" >}}</center>
  <p></p>
  
Gossiping is realised in three rounds, one in every _“mesh maintenance round”_, which takes place every 1 second. The rationale behind setting the number of rounds to three was to reach a certain level of network coverage. In our case, we wanted to ensure that gossip messages reach ~50% of nodes in the network (see the [paper](https://arxiv.org/abs/2007.02754) for more details).

<center>{{< figure src="image1.png" alt="gossip rounds" >}}</center>
  <p></p>
  
A unique characteristic of GossipSub compared with traditional pubsub protocols is that it comes with a number of techniques that make it resilient against attacks. Resilience is realised through a peer-scoring function and a number of mitigation strategies, some of which take input from the scoring function.

**Scoring**: Every peer in a GossipSub-based network monitors the performance and behaviour of peers it knows of (i.e., both those that it is directly connected to in the mesh and those that it is interacting with through gossip). The score is not shared with other peers. It is not a reputation system, but instead it is used locally by the node to identify whether a particular peer is behaving as expected or not. Based on the scoring results, nodes make grafting and pruning decisions driven by some of the mitigation strategies discussed next.

The score function takes six values into account and calculates the score as a weighted sum. We have chosen these values carefully to identify the most important behavioural characteristics that differentiate a malicious from an honest node. Among other behavioural characteristics, these values capture:

- the _uptime of a peer_, to capture how reliable and dedicated the peer has been,
- the _responsiveness of a peer_, in terms of number of messages it is forwarding, as an indicator of whether the peer is silently dropping messages and disrupting healthy message propagation,
- the _number of times a peer has failed to forward messages_ that were eventually received by other peers, which is again an indicator that the node is silently dropping messages,
- the _number of invalid messages_ that a node has attempted to propagate in the network as an attempt to cheat or overload other nodes.

**Mitigation strategies**: GossipSub includes a total of five mitigation strategies. These range from simple mitigations, such as _“flood publishing”_, where a newly published message is flooded to its first-hop peers, to more complex ones, where the outcome of the scoring function is consulted in order to make grafting and pruning decisions.

Flood publishing has been identified as an efficient way to bypass Sybil-dominated mesh connections of a peer that is under attack. With flood-publishing, even if `D_high - 1` connections are Sybil-controlled, the newly published message will still make it to the rest of the network through the one remaining connection.

A peer’s score, on the other hand, is taken into account as a mitigation strategy when peers are choosing which peers to keep in their mesh, a strategy called _“controlled mesh maintenance”_. Upon every maintenance round, every peer chooses to keep the highest-scoring peers and prunes the rest. Misbehaving peers will be progressively excluded from the mesh of all peers, rendering them largely harmless for the network.

As an extra measure on top of controlled mesh maintenance, pruned peers are not allowed into the peer’s mesh for an extended period of time, set to 1 minute in our case. This strategy, which is called _“backoff on prune”_, further helps to keep misbehaving peers out of the mesh.

This combination of mitigation strategies provides a bulletproof shield against the most challenging attacks, as our extensive performance evaluation has shown.

The ultimate target of GossipSub is to maintain healthy connections between the majority of peers. We have tested what is happening to the state of the mesh in several different attack scenarios.

## Attack Vectors

We began with conventional attacks in P2P networks, such as the Sybil and Eclipse attacks, and have gone further to consider several more sophisticated attacks that apply in permissionless blockchain networks in general and in GossipSub in particular. We discuss some of these more complex attacks here.

**Cold Boot Attack**: In this attack, honest and Sybil nodes join concurrently when the network bootstraps; honest peers attempt to build their mesh while connecting to both Sybil and honest peers. The attack can prevent the network from launching, or prevent new nodes joining the network when the network is under attack.

**Flash & Covert Flash Attack**: In the Flash attack, Sybils connect and attack the network at once. In the Covert Flash Attack, Sybils connect to the network but behave properly for some time in order to build up their score. They then execute a coordinated attack wherein they stop propagating messages altogether in an attempt to completely disrupt the network. The attack is difficult to identify before the attackers turn malicious, as they behave properly up to that point and build a good profile.

Both of these attacks are very difficult to mitigate and effectively impossible to identify in advance.

## Test Environment

The GossipSub reference implementation is built in Go. We have tested the production-ready version of the protocol using Protocol Labs’ newly released [Testground](https://docs.testground.ai/) environment, a platform for testing, benchmarking, and simulating distributed and peer-to-peer systems at scale. We have run our evaluation using Testground Kubernetes clusters on AWS and allocate 1.2 vCPUs and 2 GBs of memory per container node.

We have tested [Sybil:honest] connection ratios of up to 40:1 and compared the performance of GossipSub against: i) Bitcoin’s broadcast/flooding protocol, ii) ETH1.0’s sqrt(N)-based propagation protocol (where N is the estimate of the total number of nodes in the network).

## Results

We have run hundreds of tests tweaking and playing with several parameters of the protocol in order to investigate all aspects of its performance and understand its behavioural patterns. Our results have clearly demonstrated that none of the attacks is able to bend the performance of GossipSub to the point where it can become a risk for the blockchain network running on top!

In some attacks, such as the network-wide Eclipse attack, the performance is not affected at all, as Sybils are efficiently excluded from the mesh from the onset.

<center>{{< figure src="image5.png" alt="performance during an Eclipse attack" >}}</center>
  <p></p>
  
In some other cases, where more sophisticated attacks such as the Cold Boot Attack are tested, performance is slightly affected, but does not effectively impact the operation of the blockchain network (i.e., the 6 second deadline of Filecoin is never missed).

<center>{{< figure src="image7.png" alt="performance during a Cold Boot attack" >}}</center>
  <p></p>
  
In contrast, propagation protocols without any security measures — in our test case, the Bitcoin and ETH1.0 pubsub protocols — suffer from both message loss and extensive delays in message propagation which in turn, in turn, results in missing the deadline. In an operational environment this would have severe consequences for the blockchain network and could mean the loss of millions of dollars.

We have dug deep into the behaviour of the protocol in order to cover all edge and corner cases that could present attack vectors. Among other things, we have captured the number of connections that peers maintain to honest vs. attacker peers.

<center>{{< figure src="image4.png" alt="connections to honest v attacker peers" >}}</center>
  <p></p>
  
It is impressive to see that in the worst of attacks, the Covert Flash Attack, the protocol recovers the mesh in record time — within 2 minutes of the attack being launched — without affecting message delivery performance.

GossipSub ticks all the boxes for a secure operation under all identified attacks. The protocol is deployed and operates on the Filecoin Testnet, which currently has more than 350 operational miner nodes and 400 Petabytes in storage capacity. The protocol has been operating flawlessly, validating our design decisions in an operational environment. GossipSub has been adopted and is currently being deployed on the ETH2.0 blockchain.

The team has put a tremendous amount of effort into designing, building, and testing the protocol, and we are excited to see its performance in the Filecoin mainnet. We are looking forward to the Filecoin and ETH2.0 mainnet launch, which will allow us to monitor the protocol’s performance and gather measurements from the operational environment.
