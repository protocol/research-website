---
# Blog post title
title: "CryptoComputeLab announces proofs release versions 7.0.0 and 7.0.1"

# Website post date
# format YYYY-MM-DD
date: 2021-05-18

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


The Proofs Team is pleased to announce the recent release of version [7.0.0](https://github.com/filecoin-project/rust-fil-proofs/tree/storage-proofs-core-v7.0.0) of the [proofs library](https://github.com/filecoin-project/rust-fil-proofs). The most notable improvement is that we've replaced the old **gpu** code with the new **gpu2** code. The new **gpu2** code is a pure OpenCL implementation of the tree building in the PreCommit2 phase of sealing. This was an optional feature in proofs [6.1.0](https://github.com/filecoin-project/rust-fil-proofs/tree/storage-proofs-core-v6.1.0) that had to be manually enabled -- but now it's the default out of the box! The community feedback on this feature has been overwhelmingly positive, and enabling this by default was a natural fit.

We also took steps to improve the *Unsealing* code. The *Unseal* code paths worked properly, but were not optimized for memory usage. It turns out that there were some simple changes we could make to heavily reduce the amount of RAM required during the unseal, even though RAM usage peaks are still somewhat present. Previously when an *Unseal* operation started, a large portion of RAM was allocated and reserved for the entire process, so avoiding that step and only using what is needed will help the network usage quite a bit.

We also improved the repo's [CI](https://app.circleci.com/pipelines/github/filecoin-project/rust-fil-proofs) runtime. Re-organizing and splitting up the tests resulted in reduced test runtimes -- some were cut nearly in half. While this is primarily significant for the development team, it's certainly worth noting!

In the proofs [tooling](https://github.com/filecoin-project/rust-fil-proofs/tree/master/fil-proofs-tooling) package we have command line tools that use a library ([dialoguer](https://crates.io/crates/dialoguer)) to make the output look nicer and simplify user inputs. To our surprise, one of the dependencies ([zeroize](https://crates.io/crates/zeroize)) of the library we used for this purpose was *yanked* (revoked from public repositories), so we were forced to update to using a later version of [dialoguer](https://crates.io/crates/dialoguer)  in order to resolve proof compilation failures. Fortunately this problem was resolved quickly, but we wanted to make a note of it here to reflect the activity of this release development cycle.

Since the previous proofs relase (v6.1.0), our code was generating build warnings about deprecated methods used around spin locking and compare-and-swap calls, so those methods have been updated. Release v6.1.0 updated the rust toolchain to the latest [stable version 1.51.0](https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html), and with that update came a number of other warnings and errors related to language standard improvements. We're happy to say that most, if not all, of the warnings have since been addressed in the v7.x release series!

One major issue that came up during this development cycle is the GPU support in the [FFI](https://github.com/filecoin-project/filecoin-ffi) library (the [go](https://golang.org/) to [rust](https://www.rust-lang.org/) *bridge* code). It was our intention to enable GPU support by default, but a bug found in the FFI build process disabled GPU support unless it was explicitly enabled. This caused [Window PoSt](https://starli.medium.com/filecoin-whats-window-post-7361bfbad755) to be much slower than expected, as it was being computed on the CPU instead of the GPU. We addressed this by always enabling GPU support unless explicitly disabled by the end user when building FFI. We also addressed a related issue: the pre-built binaries uploaded for those that chose to not build FFI from source also had GPU support disabled; that has now been remedied.

Lastly, Proofs version [7.0.1](https://github.com/filecoin-project/rust-fil-proofs/tree/storage-proofs-core-v7.0.1) addresses a build regression for the [ARM/aarch64](https://en.wikipedia.org/wiki/AArch64) platform and also adds support for the [Apple M1](https://en.wikipedia.org/wiki/Apple_M1) platform! In order to help treat aarch64 as a continued first class target, we've added [CI](https://app.circleci.com/pipelines/github/filecoin-project/rust-fil-proofs) testing to our proofs repo, and a couple of developers acquired M1 powered machines for ongoing development and testing.

For the full list of changes and links to all the pertinent details of this release, [click
here](https://github.com/filecoin-project/rust-fil-proofs/blob/master/CHANGELOG.md#701---2021-05-06).



<center>{{< figure src="/images/cryptocomputelab/cryptocomputelab-streamline-temp.png" alt=CryptoComputeLab" link="/research/groups/cryptocomputelab/" width="75px" >}}</center>

<center style=font-size:11pt><i> We at CryptoComputeLab welcome further discussion of our research topics,  and we're always on the lookout for  opportunities to answer questions and develop collaborations. Please reach out via email (<a href="mailto:research@protocol.ai">research@protocol.ai</a>) to start the conversation! If you’re interested in working with us on issues at the intersection of cryptography, high-performance computing, and programming language design, please contribute to the Open Problems in our <a href ="https://github.com/protocol/research">Research Repo</a> and check out our <a href ="https://jobs.lever.co/protocol?team=Research%20Development"> Open Positions</a>.
</i></center>
