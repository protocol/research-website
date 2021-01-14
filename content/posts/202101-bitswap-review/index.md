---
# Blog post title
title: "Beyond Swapping Bits: project review (and preview!)"


# Website post date
# format YYYY-MM-DD
date: 2021-01-11

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

If you have been following along for the past three months ([1](/blog/2020/honey-i-shrunk-our-libp2p-streams/), [2](/blog/2020/two-ears-one-mouth-how-to-leverage-bitswap-chatter-for-faster-transfers/), [3](/blog/2020/teaching-bitswap-nodes-to-jump/), [4](/blog/2021/our-bitswap-nodes-have-become-jumping-inspectors-updated/)), you know that we in ResNetLab started the **Beyond Bitswap** project with one goal in mind: to drive speed-ups for file-sharing in IPFS. The results so far have been astounding and we are delighted to share a huge list of new ideas, RFCs, prototypes, a testing harness, promising results --- and the release of the "Beyond Swapping Bits" paper!

We invite you to journey through the contributions of the "Beyond Swapping Bits" project since its inception. By the end of this post, you will have all the tools you need to understand the results we achieved so far, to run your own research experiments, and to learn about a myriad of high-potential ideas for future work. We welcome everyone to join us in transforming the **Beyond Swapping Bits** project into a multi-research-group open research endeavor, so that any networking researcher can start collaborating with us and build upon our work. The journey towards blazing fast P2P File Transfer starts here!

If you are a person of action and you want to go straight to the code to start tinkering, [this repo](https://github.com/protocol/beyond-bitswap) is the place to go.

**State of the Art**
====================

The first thing we did in the scope of the project was to evaluate the current status of file-sharing in IPFS and P2P networks overall. We evaluated Bitswap's current performance and soaked up all of the ideas that have been discussed over the years in related [Github issues](https://github.com/ipfs/notes/) around other P2P file-sharing protocols. As a result of this work we made the following early contributions:

- [A report](https://docs.google.com/document/d/14AE8OJvSpkhguq2k1Gfc9h0JvorvLgOUSVrj3CnOkQk/edit\#heading=h.nxkc23tlbqhl)  describing all the related work of file-sharing in IPFS and P2P networks (summarized in these [slides](https://docs.google.com/presentation/d/18\_aRTye2t6Xs\_VhKwEbhvCYYu9ePaLgamIrJkpUDtfY/edit\#slide=id.p)).

- [A survey](https://docs.google.com/document/d/172q0EQFPDrVrWGt5TiEj2MToTXIor4mP1gCuKv4re5I/edit\#heading=h.nxkc23tlbqhl) of file sharing strategies in P2P networks with a summary of 10 papers that deeply inspired many of the ideas explored throughout this first stage of the project.

- [A benchmarking proposal](https://docs.google.com/document/d/1LYs3WDCwpkrBdfrnB\_LE0xsxdMCIhXdCchIkbzZc8OE/edit?usp=sharing) to test file-sharing protocols in IPFS

**An IPFS Research Toolkit at your disposal**
=============================================

A huge drag in any research project is assembling the testbed that will enable the researcher to test their ideas. With this in mind, we decided to start building our [IPFS file-sharing Testground-based testbed](https://github.com/protocol/beyond-bitswap/tree/master/testbed/testbed) so that our work would be repeatable (and tinker-able) by others.

The beyond-bitswap toolkit includes the following core components:

- [The Testbed](https://github.com/protocol/beyond-bitswap/blob/master/testbed/testbed): It leverages Testground and implements a multitude of Bitswap benchmarks and variations of the protocol (RFC prototypes). It additionally incorporates a Jupyter notebook to enable easy test configuration and data processing and visualization.

<center>{{< figure src="image4.png" width="700px" caption="Screenshot of the Testbed Python Notebook">}}</center>

<center>{{< figure src="image3.png" width="700px" caption="Screenshot of the Testbed Python Notebook">}}</center>


- [Probe](https://github.com/protocol/beyond-bitswap/blob/master/testbed/probe): A handy CLI tool to test new implementations and for debugging purposes. With Probe you can run an easily customizable in-process IPFS node, and interact with it through a set of simple commands in the CLI. With the probe you will be able to add a random file or a file from a local system, get an ipfs path, connect to other nodes, or even perform a graphsync exchange between two nodes. The in-process IPFS node of the probe is implemented so that you can manually inject ANY dependency. It should be straightforward to manipulate your node and to embed your own protocol design for testing.

<a href="https://asciinema.org/a/2xqFne0tkGXprE3tDmAhHRKZo">
<center>{{< figure src="https://asciinema.org/a/2xqFne0tkGXprE3tDmAhHRKZo.svg" width="400px" caption="Animation of a sample execution of the probe">}}</center></a>

- [Bitswap Viewer](https://github.com/protocol/beyond-bitswap/blob/master/testbed/viewer): An instrumented go-bitswap fork and an ObservableHQ notebook that allows you to interactively follow the flow of messages exchanged and the session state of Bitswap nodes in an execution run that uses the instrumented code. This tool uses Jaeger to collect all the traces from the code. Follow the instructions in the repo to see how it works.

<center>{{< figure src="image2.png" width="700px" caption="Screenshot of the Bitswap Viewer">}}</center>

All of these are available at the [beyond-bitswap repo](https://github.com/protocol/beyond-bitswap) and licensed with the Permissive License stack.

**A walk through the RFCs & Future Work**
=========================================

At ResNetLab, we prize repeatable and quantifiable research. From ideas, to RFCs (to start open discussions around the ideas), to structuring the evaluation plan, to prototypes, to experiments, and concluding with results for evaluation.

We have published a total of [10 improvement RFCs](https://github.com/protocol/beyond-bitswap#enhancement-rfcs) so far. The RFCs tackle different ideas on how to improve file-sharing in IPFS and P2P networks in general, and they are organized around the three different layers in which a P2P file-exchange protocol can be structured:

- **Layer 0 - Data Structure:** Layer responsible for determining the structure of the content. It determines how the data is stored, the coding scheme used to represent the data, and the specific data structure followed to store content in the network.

- **Layer 1 - Content Discovery and Announcement:** This layer specifies all the schemes for the discovery of content in the network. It determines the message flow used to find content in the network, as well as the announcements of seen/stored content by other nodes.

- **Layer 2 - Negotiation and Content Transmission:** Along with the discovery of content, there may optionally be a negotiation phase so that once the content has been discovered its transmission is "formally" requested. This layer implements schemes to negotiate the request of content to the most suitable peers available, as well as the actual transmission of blocks from the network. It negotiates and opens a transmission channel between the requestor node and the provider of the content. In some implementations, this layer may be embedded in layer 1.

We currently have RFCs in three different stages: "brainstorm", meaning the RFC is still in the ideation stage and there are fringes to be solved before it is ready for prototyping; "draft", for the RFCs whose design is ready but no working prototype for it exists yet; and finally, "prototype" for the RFCs with a working prototype. Let's discuss the latter a bit.

<center>{{< figure src="image1.png" width="600px" caption="List of RFCs">}}</center>


**From RFCs to Prototypes & Evaluations**
=========================================

Since the inception of the project, we have implemented three and a half prototypes from RFCs (you'll see where that half comes from in a moment):

- **[RFCBBL203A - Use of compression and adjustable block size](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL203A):** HTTP already uses compression for file-sharing on the Internet, so why not also use compression for P2P file-sharing? In this RFC we explored the implementation of different compression strategies for file-sharing in IPFS. In the scope of this RFC we evaluated several compression strategies: from compressing only blocks within Bitswap messages or compressing full Bitswap messages, to stream compressing Bitswap and adding compression at a libp2p level. We realized that the best performing alternatives were the Bitswap stream compression or the lib2p transport-level compression strategy. The prototype ended up achieving up to a 75% decrease in bandwidth use when performing an IPFS file exchange. Read this [blog post ](/blog/2020/honey-i-shrunk-our-libp2p-streams/)to learn more about this RFC.

- **[RFCBBL104 - Track WANT messages for future queries](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL104):** The next thing we realized is that the current implementation of Bitswap is disregarding some useful information from the operation of the protocol that could be used to perform more efficient content discoveries. In this prototype we gave Bitswap nodes a way to inspect WANT messages from other connected peers to gather knowledge about the content being requested in their surroundings. This information was then used to accelerate content discovery in future queries. We achieved this by introducing an extra component in Bitswap's architecture: the "peer-block registry". The peer-block registry keeps track of the requests that a peer receives and utilises this knowledge to redirect subsequent queries. The prototype achieved a 25% improvement in the time to fetch popular content and a reduction of the number of control messages exchanged in Bitswap by 75%. Everything you need to know about the implementation of this prototype is shared in [this post](/blog/2020/two-ears-one-mouth-how-to-leverage-bitswap-chatter-for-faster-transfers/).

- **[RFCBBL102 - TTLs for rebroadcasting WANT messages](https://github.com/protocol/beyond-bitswap/tree/master/RFC/rfcBBL102):** When Bitswap nodes are not able to find the content they are looking for in the directly-connected peers, they resort to a content routing system such as the DHT to find the content providers. Performing a DHT lookup can be slow in large network deployments \--assuming the provider is even dialable. In this prototype we explore the inclusion of a TTL field in Bitswap messages to enable nodes to broadcast WANT messages farther into their (swarm) vicinity. Those nodes effectively act as relays for content discovery, since content can now be found by the relay node on behalf of the originating peer. The improvement increased Bitswap's range of discovery without having to rely on external routing systems like the DHT. This results in an improvement in the average time-to-fetch of up to 33% above baseline Bitswap with the DHT enabled. The cost we pay for the improvements is an increase in the average number of messages exchanged per node of 1.6%, and five times more duplicate blocks traversing the network. Want to know more about the results of this prototype? Read [this post](/blog/2020/teaching-bitswap-nodes-to-jump/).

- **RFCBBL102 + RFCBBL104 = Merging two RFCs into a single prototype:** Inspecting WANT messages enabled Bitswap to perform more efficient discoveries of content, while adding a TTL field to Bitswap messages increased their range of discovery. So we then began to wonder, "what happens if we combine these two schemes into the same prototype?", and the results we obtained were delightful. We managed to achieve an improvement in the time to fetch content of up to 12.5% compared to the vanilla implementation of Bitswap. At the same time, we reduced the number of duplicate blocks in the network by 10%. This was a great achievement as it showed how the combination of independent RFCs could lead to further potential improvements. Check [this blog post ](/blog/2021/our-bitswap-nodes-have-become-jumping-inspectors-updated/) for further details about this prototype.

Finally, we wanted to provide an easy way to make our prototype's experiments and evaluations easily replicable. To achieve this, we added a way to run experiments over prototyped RFCs with [a single script](https://github.com/protocol/beyond-bitswap/tree/master/RFC) (provided that you have our testbed installed). Do not hesitate to give it a try!

  <a href="https://asciinema.org/a/sbFZgodBh7cONSZ67XsSlM9yz">
<center>{{<figure src="https://asciinema.org/a/sbFZgodBh7cONSZ67XsSlM9yz.svg" width="400px" caption="Sample execution of a replicable experiment">}}</center></a>


**A new perspective: Bitswap as a content routing systems accelerator**
=======================================================================

There has always been an existential question around Bitswap: "*is it a content routing protocol, or a block exchange protocol?*". All the work done in the "Beyond Swapping Bits" has given us the tools to answer this question, and the answer is *neither*. Bitswap's aim is not to replace content routing subsystems but to *complement* them and enhance their performance. Let's illustrate this using the DHT as an example of a content routing subsystem. Nodes using a DHT to find content in a P2P network are able to find providers for the content with a 100% probability (as long as all peers in the network are dialable). However, DHT lookups can be extremely slow in networks with a large number of nodes, so looking for every block through the DHT may be intractable. Fortunately, this is the *raison d'être* of bitswap: to minimize the number of lookups required by content routing subsystems to discover content, speeding up their block exchange.

Moreover, the modular design of Bitswap's architecture makes it easily configurable to enhance the limitations of any content routing subsystems. Check out the Bitswap paper to learn more about Bitswap as a content routing system accelerator.

**The final ribbon: The Bitswap Paper**
=======================================

<a href="https://gateway.ipfs.io/ipfs/QmTDxsUf9iV8ja8zNKdv3TwBqU18LF8o5uWhA7srKz3rfd"><center>{{< figure src="paper.png" width="700px" caption="The Bitswap preprint">}}</center></a>

Bitswap has not yet made its academic debut, and after all the work done within the "Beyond Swapping Bits" project we thought it was about time. So we embarked on the writing of an academic paper to formalize the operation of Bitswap and share some of the work done within the project. The result has been a paper whose pre-print is [accessible in IPFS](https://gateway.ipfs.io/ipfs/QmTDxsUf9iV8ja8zNKdv3TwBqU18LF8o5uWhA7srKz3rfd). We have already submitted a version of this paper to a peer-reviewed conference, so stay tuned to check the final version.


**Collaborate with us!**
========================

**>> The Resilient Networks Lab mission is to build resilient distributed systems, by creating and operating a platform where researchers can collaborate openly and asynchronously on deep technical work.**

ResNetLab collaborates with over 10 research groups all over the world, and Protocol Labs Research has developed dozens of research collaborations over the last few years. We are always eager to collaborate with more researchers in all kinds of capacites, from thesis projects (M.Sc or PhD), to postdoctoral research, and through grants, RFPs, and independent research projects.

The "Beyond Swapping Bits" project can be the perfect avenue to start collaborating in our open research endeavors. All of our contributions, our ideas, our testbed, and our benchmarking and analysis scripts are available in the [aforementioned repo](https://github.com/protocol/beyond-bitswap/tree/master/testbed/testbed), and this post provides a gentle introduction to all the work we've done in the project so far, as well as your next mission description (should you choose to accept it...😎). You are more than welcome to pick any of these assets and build on top of it. If you have questions, please [email us](mailto:resnetlab\@protocol.ai).

Additionally, if you have a fiery passion for P2P Networking and File Systems and building resilient systems that humanity can depend on, we've an open [Research Engineer position available](https://jobs.lever.co/protocol/?department=Research) waiting for you!

Join our quest to create blazing fast P2P file-sharing!

<center>{{< figure src="/images/resnetlab/resnetlab_logo_orange.svg" alt="ResNetLab" link="/research/groups/resnetlab/" width="150px" >}}</center>

<center style=font-size:11pt><i> We are always open to further discussion on our research topics and welcome opportunities to answer questions and develop collaborations. Join the discussion at <a href
="https://discuss.ipfs.io"> the IPFS Forum</a> or reach out via email (<a href="mailto:research@protocol.ai">research\@protocol.ai</a>). The <a href="https://docs.ipfs.io">IPFS</a>, <a href="https://docs.libp2p.io">libp2p</a>, and <a href="https://docs.filecoin.io">Filecoin</a> documentation sites and <a href="https://proto.school"> ProtoSchool's</a> interactive tutorials are a good starting point for exploration of these topics.</i></center>
