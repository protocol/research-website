---
# Blog post title
title: "A Brief History of (Re)building the Internet"

# Website post date
# format YYYY-MM-DD
date: 2020-09-18

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - guy-wuollet

# If applicable
categories:
  - Blog
  

# Zero or more of the areas in content/areas
areas:
  - distributed-systems
  - networking

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Not used
draft: false

---


The Internet began life as a military network engineered for resilience in the face of a nuclear attack. That’s right—the same network you use to check on your friends and share cat photos has at its core a structural pattern intended to survive a nuclear exchange long enough to mutually assure destruction with the USSR. The Internet is ever-changing. It’s a living, growing organism that has defied categorization and evolved beyond its initial concept. The Internet has taken many different forms, and it’s worth understanding how we got to where we are. Internet connectivity has done more to democratize access to information than any technology since the printing press. It has also enabled a great invasion of privacy and set us on a path towards greater wealth disparity. None of this is an accident. The Internet’s evolution has been largely driven by economics, and by a failure of the original design to natively route payments along with information. Let’s explore how we got to the current Internet and where it’s heading. 

## Creation

What would become the Internet was born as the Advanced Research Projects Agency Network (ARPANET) in 1969. ARPANET’s first transmission was a simple message between UCLA and the Stanford Research Institute. The network crashed almost immediately upon launch, but the possibilities embodied in the new network overshadowed these early technical difficulties, and the network continued to grow. Together, Bob Kahn and Vint Cerf designed the canonical IP (Internet Protocol) and TCP (Transmission Control Protocol) coupling described in [Request for Comments 675](https://tools.ietf.org/html/rfc675). This technical specification document describing the protocols for  end-to-end data communication was the first time “Internet” was used as a portmanteau of inter-network.

In 1981 the National Science Foundation (NSF) created the Computer Science Network (CSNET) that interconnected with ARPANET. The military portion of ARPANET broke off and became MILNET in 1983 as it became clear that the Internet had broader potential applications. In 1986 the NSF formally created the NSFNET, an Internet backbone with 56 kb/s links designed to support connections between NSF-funded supercomputing centers. This was the beginning of the Internet’s translation from a research project to a practical network. As the network’s popularity increased in the late 80’s, it became clear that some standard was required for end users to interact with NSFNET. File transfer and email were popular, but the World Wide Web would become the most used application. By the end of 1990, Tim Berners-Lee, a fellow at CERN, had combined the necessary pieces to create an end-user friendly web experience: HTTP, a web server, and a web browser. 

## Adoption

The pre- World Wide Web phase of the Internet was characterized by academic and military research. The World Wide Web introduced commerce to the Internet and the Internet wasn’t prepared: it was designed to transfer information, not value. David Clark, an influential Internet developer, shares a telling interaction in his book *Designing an Internet*: 

>Economist: The Internet is about routing money. Routing packets is a side effect. You screwed up the money routing protocols. 

>[David Clark]: I did not design any money-routing protocols! 

>Economist: That’s what I said. 

To gain a better understanding of the difference between routing money and routing packets, let’s examine two Internet features, **Quality of Service (QoS)** and **Multicast**. Both QoS and Multicast failed to reach mainstream adoption because they routed money poorly, even though they routed information well. 

**Quality of Service** is a simple concept. It’s essentially priority mail for the Internet. Unfortunately, the model of the commercial Internet directly conflicts with a well-implemented QoS functionality. 

The Internet is an interconnection layer for separately owned networks. As an end user, this is not obvious. When I buy Internet service from my ISP I gain access to any part of the open Internet. However, my ISP does not own all the physical hardware required to connect to the open Internet. 

ISPs are broadly grouped into 3 tiers. Tier 1 ISPs lie at the center of the Internet. They interconnect (called *peering*) for free. This means that Tier 1 ISPs will route traffic from each other without any money changing hands. They peer with one another in order to allow their end users to connect to the rest of the internet. Tier 2 and Tier 3 ISPs also interconnect. As a rule of thumb, an ISP pays to route packets through a higher tier ISP and receives payment for routing packets on behalf of a lower tier ISP. These agreements are broad and do not reflect the individual traffic of end users. They settle payments for aggregate traffic over a long period, a month or year for example. 

Implementing QoS across the Internet requires accountability for each end user packet and the ability to charge for differentiated service. Because of the ISP peering model, accountability was both technically challenging and expensive. While possible to implement QoS, it was not feasible to charge differently for QoS. This meant that while adopting QoS would improve the performance of networked applications and increase their value to users, ISPs—the parties footing the bill for the improvements— wouldn’t be able to capture that increased value. Any new revenues would instead flow to application developers.

While successful as a research project, Internet-scale QoS failed in practical adoption because it lacked an economic incentive for ISPs. QoS would improve the quality of end user applications, but ISPs couldn’t successfully extract a rent from any improvement in network quality. 

**Multicast** was another casualty of the commercial Internet. Multicast essentially provides functionality for broadcast—like TV feeds—on the Internet. A sender can send packets to a multicast address to which receivers subscribe. The sending packet is replicated in the network and delivered to each subscribed receiver. Without multicast, the sender would have to send the same packet to each recipient individually, wasting bandwidth in the network. 

Multicast was a successful research project, but failed because it was unprofitable for ISPs. When an end user buys Internet connectivity from an ISP, they typically pay for upload and download link bandwidth. End users usually don’t pay for their total volume of traffic or for the latency of their packets. Multicast potentially duplicates a single packet upload into many packet deliveries, allowing an end user to create a large volume of packets in the network without purchasing additional bandwidth. For example, I could send 10 upload packets to a multicast address through my ISP. If many people subscribed to that multicast address, those 10 packets could become 10 million. If ISPs didn’t charge differently for multicast, I could significantly increase the traffic I deliver through my ISP without buying more upload bandwidth. 

Again, multicast could be correctly priced for end users with proper accountability over which end user sent which packet. However, this was both unprofitable and technically difficult to implement in the 1990’s. Maintaining a list of which users subscribe to which multicast addresses adds a lot of overhead state complexity to the network. Instead, Content Distribution Networks have mostly replaced this functionality for large ISPs. Multicast is currently deployed in corporate networks and edge ISPs where its value proposition is clearer.

CDNs replicate content by storing multiple copies near densely populated areas. The CDN can then send requested content to each user on demand. This not only solves the problem of duplicating traffic in the network, it also allows users to stream content on demand instead of following a broadcast. 

ISPs could provide CDN functionality, but they largely don’t. For a large content provider to buy CDN functionality, they would be required to maintain a contract with each ISP that provides Internet service to the content provider’s consumer. This coordination cost is quite high. Instead, CDN services are typically provided by an independent company, like [Akamai](https://www.akamai.com), that makes a single deal with each ISP and can then provide global CDN services to each customer. These planet-scale CDN providers benefit from their size and vantage point to better predict user demand and adapt their networks. Coupled with a one-stop interface for content providers looking to offer fast global access, this allows CDNs to capture significant value.

QoS and Multicast illustrate why innovation at the protocol level of the Internet is so hard. Better functionality for end users often comes with a hefty price tag for ISPs. ISPs are unable to capture new revenue due to their existing business model, so they lack the ability and willingness to invest in innovation. This reinforces the barrier to change on the Internet and prevents a leap forward in end user experience. 

## Future

We’ve talked about the failures of money routing online, but for most people, the Internet probably works pretty well. If you’re reading this, your Internet works! 

However, just because the Internet is functional, doesn’t mean it can’t improve. Many flaws in our current Internet are caused by a misalignment of money and packet routing protocols. The Internet isn’t some amorphous thing, it’s a collection of cables, radios, and computers. Someone has to own those cables, radios, and computers. We call those owners Internet Service Providers. Both ISPs and Internet users want to route packets well, but ISPs and users have different goals for routing money. Aligning money routing incentives for both users and ISPs will be a huge step towards a better Internet. 



