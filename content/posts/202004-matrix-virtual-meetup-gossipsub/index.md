---

# Blog post title
title: "Gossipsub v1.1 at 'Open Tech Will Save Us' virtual event"

# Website post date
# format YYYY-MM-DD
date: 2020-04-17

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - david-dias

# If applicable
categories:
  - talks

# Zero or more of the areas in content/research/areas
research_areas:
  - distributed-systems

# Zero or more of the groups in content/research/groups (should match author membership)
research_groups:
  - resnetlab

# Not used
draft: false

---

![](open-tech-banner.jpg)

[ResNetLab](https://research.protocol.ai/research/groups/resnetlab) was present at [Open Tech Will Save Us](https://matrix.org/open-tech-meetup) virtual meetup, an event organized by the Matrix.org team during which participants could watch a live stream provided by [Jitsi](https://jitsi.org) and ask questions using the [Matrix protocol](https://matrix.org) (often through a client like [Riot](https://about.riot.im)).

Matrix is both a project and an ecosystem that focuses on providing secure and federated platform for all types of communication. We are big fans of Matrix at Protocol Labs, both taking inspiration from their innovations (e.g. the [Olm](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/olm.md) and [MegaOlm](https://gitlab.matrix.org/matrix-org/olm/blob/master/docs/megolm.md) cryptographic ratchets) and bridging the [IPFS](https://riot.im/app/#/group/+ipfs:matrix.org) and [libp2p](https://riot.im/app/#/group/+libp2p:matrix.org) IRC channels with Matrix.

Back to the meetup. I delivered a talk on the recent updates on the Gossipsub protocol, one of the most scalable P2P PubSub solutions, whose recent v1.1 release includes additional security-hardening features. In this talk, you can learn about:

- The motivation for P2P PubSub
- libp2p PubSub and its evolution from Floodsub to Gossipsub
- Gossipsub v1.0
- Gossipsub v1.1 and the new security-hardening features
- The Gossipsub testing infrastructure

For those who couldn't be present, we are making available the [recording](https://www.youtube.com/watch?v=APVp-20ATLk&feature=youtu.be&t=3612) and the [slide deck](https://www.slideshare.net/DavidDias11/enter-gossipsub-a-scalable-extensible-hardened-p2p-pubsub-router-protocol).

## Q&A

There were a number of interesting questions from the audience. You can watch the [Q&A portion of the recording](https://youtu.be/APVp-20ATLk?t=5427) or read the summary below.

**Q: If one uses two different libp2p implementations, will they share the same network?**

A: By default, yes. We call the default network the "Main Network" and this is shared between libp2p, IPFS, and other protocols that started relying on it. If you'd like to have a disjoint network, you achieve it in a few ways:

- Isolate your nodes using a firewall so they cannot connect to the outside world (the traditional way).
- Change the config of your libp2p/IPFS node to not use the default bootstrapper nodes. If you don’t connect to the bootstrappers or any of the other nodes in the main network, your node will be unable to find the network by itself.
- Use a libp2p-pnet. Essentially, with libp2p-pnet, you configure a PSK (pre-shared key) on the nodes that you want on your disjoint network. Once they find other nodes, they will run a special handshake that only peers that have the same PSK can complete. You can watch [Jacob Heun’s talk at the IPFS Dev Meetings](https://www.youtube.com/watch?v=fObld4alGag&feature=youtu.be&t=51), in which he demonstrates this feature.

**Q: How much work is it to use Gossipsub / libp2p PubSub in an application?**

A: Almost none! You can start a libp2p node with PubSub and from that you get two primitives: Publish and Subscribe. Publish lets you publish a message on a topic of your choice. Subscribe lets you subscribe to any topic. Pedro Teixeira recorded a 10 min demo that shows [how to build an app with PubSub from scratch using JavaScript](https://www.youtube.com/watch?v=Nv_Teb--1zg).

**Q: How do the rules for the message validators get expressed?**

A: Today, these are simply expressed programmatically using a message handler pattern. We went a bit mad-science/sci-fi on this one, so maybe it's best to [watch the related passage](https://youtu.be/APVp-20ATLk?t=5679).

**Q: How do you reconcile the initial goal of a real-time protocol with the eventual consistency of Gossip?**

A: Instead of making a decision for the user, what we do is provide as much power to the user as possible, along with recommendations on how to set the right parameters for the different types of interaction patterns and network scales.

**Q: Does Gossipsub have presence support?**

A: Not by default. This has to be built by the application, but requires establishing a link between the keys that identify the user and the keys that identify the user's nodes.

I recommend watching the other two talks in this event! You can learn more about:

- [How Jitsi scaled from 10s to 1000s of Servers](https://youtu.be/APVp-20ATLk?t=852) to provide an invaluable communication service during the COVID-19 pandemic
- [How Matrix.org figured out the UX to deploy full end-to-end encryption](https://youtu.be/APVp-20ATLk?t=6122) for all of its users

We really appreciate the invitation. It was a fun way to catch up and learn about some of the projects that inspire us, while also getting to see the people that we'd normally be meeting in in-person events. 

Thank you and looking forward to the next one!
David Dias

[![](https://ipfs.io/ipfs/QmUNABVXdzKdcHD4b9qFoS1SQr58bsz3zvUeP7hg2sbLgW)](https://research.protocol.ai/research/groups/resnetlab/)
