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


The [proofs](https://github.com/filecoin-project/rust-fil-proofs) team is proud to announce the recent proofs releases [v8.0.0](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.0), [v8.0.1](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.1) and [v8.0.2](https://github.com/filecoin-project/rust-fil-proofs/tree/filecoin-proofs-v8.0.2)! These releases are [Hyperdrive](https://filecoin.io/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding/) -enabled, which means that they contain the proof aggregation API that utilizes [SnarkPack](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/) -- in fact, the major difference between proofs v7.0.x and v8.0.x is the aggregation functionality!

For the unfamiliar, [Hyperdrive](https://filecoin.io/blog/posts/filecoin-v13-hyperdrive-network-upgrade-unlocks-10-25x-increase-in-storage-onboarding/) is a [Filecoin](https://filecoin.io/) initiative to unlock a 10-25x increase in the storage onboarding rate. The way in which this is achieved is by using [SnarkPack](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/). SnarkPack is a practical scheme to aggregate [Groth16](http://www.zeroknowledgeblog.com/index.php/groth16) proofs and in depth details are described [here](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/).

This post is a look back on some aspects of how we got here, and some of the challenges that went into making these releases possible.

From all the way back in January, 2021, an aggregate proofs integration [Pull Request](https://github.com/filecoin-project/rust-fil-proofs/pull/1395) (PR) was born. This PR created an API and pulled in an early draft of the proof aggregation work, which after several revisions became known as [SnarkPack](https://research.protocol.ai/blog/2021/snarkpack-how-to-aggregate-snarks-efficiently/). For several months between that time and when it was eventually merged in June 2021, it was unclear if the work would see the light of mainnet at all. On one hand, it was a tool in our toolbox that was being actively evaluated, but on the other, it was believed other alternative solutions may have to be investigated further. Development and testing waned while its fate was being decided.

Fortunately, several weeks later, near the end of February, a [FIP 13](https://github.com/filecoin-project/FIPs/blob/master/FIPS/fip-0013.md) fire was lit and [developments](https://github.com/filecoin-project/filecoin-ffi/pull/166) for lotus integration began.

In order for the proofs aggregation scheme to work, a Trusted setup is required. In a novel way, [CryptoNetLab](https://research.protocol.ai/groups/cryptonetlab/) researched, designed, and then implemented a [combined result of the existing Filecoin and Zcash power of tau](https://github.com/filecoin-project/taupipp) (trusted setup) in order to avoid it. The advantage to this is that it did not require another timely Trusted setup, which often requires community contributions and scheduling, costly computations of each participant, etc. Instead, this work was vetted and found to meet the requirements for SnarkPack to work, which ultimately saved time and resources.

The output of that automated setup resulted in a new [file](https://proofs.filecoin.io/v28-fil-inner-product-v1.srs) on disk, much like the [parameters](https://proofs.filecoin.io/) that the proofs already require for [PoRep](https://spec.filecoin.io/algorithms/pos/porep/) and [PoSt](https://spec.filecoin.io/algorithms/pos/post/). The challenge in distributing a new parameter file like this post-mainnet launch is that there's a chance this will be missed in the upgrade notes and miners may fail to take action and ensure they are downloaded in time for the upgrade. Failing to take action in this case will cause aggregate proofs constructed via SnarkPack to fail verification. Miners would not have the ability to properly construct them as well. This could potentially result in a network hard fork, or chain split, where some miners will continue building on blocks that do not include aggregate proofs.

In fact, this exact issue happened post release on mainnet. While the mainnet launch of Hyperdrive was a success, for a short time several miners reported failed aggregate proof verification very early after the upgrade window and it took some time to narrow down specifically what it was for various reasons (including partial logging). In short, it appeared that most users that ran into this issue had opted to trust their parameters, which is an option that skips a check that would have downloaded any missing parameter files. In this case, a subset of Filecoin participants were rendered out of consensus until they were able to retrieve the missing parameter file.

Proofs v8.0.0 was shipped on June 1 and thought to be final, however the result of a security and code audit that had been in progress indicated the API needed updates. As a result, Proofs v8.0.1 was released on June 9 and began wider scale testing. After some time in testing that had otherwise been going well, it was discovered that the aggregate proof sizes were much larger than originally expected, which prompted further investigation. Lo and behold, it was discovered that the method of aggregate proof serialization/deserialization used internally was not the correct method, which resulted in larger binary proof sizes on chain. The side-effect of correcting this is that the wider scale testing network needed a complete reset since all previous proofs generated within the chain's network would then be invalid. This final change was shipped with Proofs v8.0.2 on June 17 and further testing resumed. Fortunately, this corrected version remained the same version that ultimately shipped with the Hyperdrive release!

Much more recently while loosely collaborating with [Eric Tu](https://github.com/EC2), a [Forest](https://github.com/ChainSafe/forest) developer, on integrating the aggregation API, we were once again bit by the process that went into the v8.0.x releases. This time, the issue is that the reference development was using Proofs v8.0.1, when in fact, that code is not mainnet compatible. In trying to sync mainnet via Forest, aggregate proofs were failing, which is why we made contact on this. Having determined the specific issue and also realizing that our own team was bit by this *same* issue just splashed a little bit of salt to the wound that was just about healed up.

Much more than work on proofs went into the Hyperdrive release, including work from [Zondax](https://zondax.ch/news/filecoin-v13-hyperdrive), the tremendous work of the [Lotus](https://github.com/filecoin-project/lotus) team and the Infra testing team as well as a wide array of volunteer community members and miners. We are currently well past the mainnet upgrade and storage onboarding has more room to breathe. Also, in terms of scaling, [Filecoin Snarks](https://research.protocol.ai/sites/snarks/) are continuing to push the global bounds of what's known to be possible!

<img src="media/image1.png" style="width:6.5in;height:3.18056in" />

Above illustrates the full potential of SnarkPack vs traditional batched proof verification times and sizes.