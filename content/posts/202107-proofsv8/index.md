---
# Blog post title
title: "The Winding Journey to Proofs v8.0.0 and beyond"

# Website post date
# format YYYY-MM-DD
date: 2021-07-27

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - "nemo"
  - volker-mische

# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptocomputelab

# Not used
draft: false



---


The [proofs](https://github.com/filecoin-project/rust-fil-proofs) team is proud to announce the recent proofs releases [v8.0.0](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.0), [v8.0.1](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.1) and [v8.0.2](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.2)! These releases are [Hyperdrive](https://filecoin.io/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding/)-enabled, which means that they contain the proof aggregation API that utilizes [SnarkPack](/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/) -- in fact, the major difference between proofs v7.0.x and v8.0.x is the aggregation functionality!

For the unfamiliar, [Hyperdrive](https://filecoin.io/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding/) is a [Filecoin](https://filecoin.io/) initiative to unlock a 10-25x increase in the storage onboarding rate using [SnarkPack](/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/). SnarkPack is a practical scheme to aggregate [Groth16](http://www.zeroknowledgeblog.com/index.php/groth16) proofs -- you can find in-depth details on Snarkpack aggregation in this [blog post](/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/).

This post is a reflection on our journey to this point and some of the challenges that went into making these releases possible.

Our journey began back in January 2021, when an aggregate proofs integration [Pull Request](https://github.com/filecoin-project/rust-fil-proofs/pull/1395) (PR) was born. This PR created an API and pulled in an early draft of the proof aggregation work, which after several revisions became known as [SnarkPack](/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/). It was initially unclear if the work would see the light of mainnet at all: on one hand, it was a tool in our toolbox that was being actively evaluated, but on the other, we felt the need to thoroughly investigate alternative solutions. Development and testing proceeded slowly as its fate was being decided.

Fortunately, several weeks later, near the end of February, [FIP 13](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md) re-lit the fires, and we began [developments](https://github.com/filecoin-project/filecoin-ffi/pull/166) for lotus integration.

Normally, in order for the proofs aggregation scheme to work, a trusted setup is required. [CryptoNetLab](/groups/cryptonetlab/) found a novel way to avoid this requirement: we researched, designed, and then implemented a [combined result of the existing Filecoin and Zcash power of tau](https://github.com/filecoin-project/taupipp) (trusted setup). The advantage of this approach is that it does not require another timely trusted setup, which often requires community contributions and scheduling, costly computations by each participant, etc. Instead, this work was vetted and found to meet the requirements for SnarkPack to work, which ultimately saved time and resources.

The output of that automated setup resulted in a new [file](https://proofs.filecoin.io/v28-fil-inner-product-v1.srs) on disk, much like the [parameters](https://proofs.filecoin.io/) that the proofs already require for [PoRep](https://spec.filecoin.io/algorithms/pos/porep/) and [PoSt](https://spec.filecoin.io/algorithms/pos/post/). The challenge in distributing a new parameter file like this post-mainnet launch is that there's a chance this will be missed in the upgrade notes and miners may fail to take action and ensure that the necessary files are downloaded in time for the upgrade. Failing to take action in this case would have at least two immediate negative consequences: miners would not have the ability to properly construct aggregate proofs, and aggregate proofs constructed via SnarkPack would fail verification. This could potentially result in a network hard fork, or chain split, where some miners will continue building on blocks that do not include aggregate proofs.

In fact, this exact issue happened post release on mainnet. While the mainnet launch of Hyperdrive was a success, for a short time several miners reported failed aggregate proof verification very early after the upgrade window, and for various reasons (including partial logging), it took some time to identify the specific problems. In short, it appeared that most users that ran into this issue had opted to *trust their parameters*, which is an option that skips a check that would have downloaded any missing parameter files. In this case, a subset of Filecoin participants were rendered out of consensus until they were able to retrieve the missing parameter file.

Proofs v8.0.0 was shipped on June 1 and thought to be final, however the result of a security and code audit  indicated the API needed updates. As a result, Proofs v8.0.1 was released on June 9 and began wider-scale testing. Tests were going well until we discovered that the aggregate proof sizes were much larger than originally expected, prompting further investigation. Lo and behold, it was discovered that the method of aggregate proof serialization/deserialization used internally was incorrect, resulting in larger binary proof sizes on chain. Correcting this issue necessitated a complete reset of the wider-scale testing network, since all previous proofs generated within the chain's network would then be invalid. This final change was shipped with Proofs v8.0.2 on June 17, and further testing resumed. Fortunately, we were ultimately able to ship this corrected version with the Hyperdrive release!

More recently, while loosely collaborating with [Eric Tu](https://github.com/EC2), a [Forest](https://github.com/ChainSafe/forest) developer, on integrating the aggregation API, we were once again bit by the process that went into the v8.0.x releases. This time, the issue is that the reference development was using Proofs v8.0.1, when in fact, that code is not mainnet compatible. Aggregate proofs were failing when syncing mainnet via Forest, which is why we made contact with Eric on the issue. Identifying the problem and realizing that our own team was bit by this *same* issue just splashed a little bit of salt to our almost-healed wounds.

Much more than work on proofs went into the Hyperdrive release, including work from [Zondax](https://zondax.ch/news/filecoin-v13-hyperdrive), the tremendous work of the [Lotus](https://github.com/filecoin-project/lotus) team and the Infra testing team, as well as contributions from a wide array of volunteer community members and miners. We are currently well past the mainnet upgrade, and storage onboarding has more room to breathe. Also, in terms of scaling, [Filecoin Snarks](/sites/snarks/) are continuing to push the global bounds of what's known to be possible!

<center>{{<figure src="image1.png" style="width:6.5in;height:3.18056in" caption="This image illustrates the full potential of SnarkPack vs traditional batched proof verification times and sizes">}}</center>


<center>{{< figure src="/images/cryptocomputelab/cryptocomputelab-streamline-temp.png" alt=CryptoComputeLab" link="/research/groups/cryptocomputelab/" width="75px" >}}</center>

<center style=font-size:11pt><i> We at CryptoComputeLab welcome further discussion of our research topics,  and we're always on the lookout for  opportunities to answer questions and develop collaborations. Please reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>) to start the conversation! If you’re interested in working with us on issues at the intersection of cryptography, high-performance computing, and programming language design, please contribute to the Open Problems in our <a href ="https://github.com/protocol/research">Research Repo</a> or discuss new problems in our <a href ="https://github.com/protocol/CryptoComputeLab">CryptoComputeLab repo</a> and check out our <a href ="https://jobs.lever.co/protocol?team=Research%20Development"> Open Positions</a>.
</i></center>
