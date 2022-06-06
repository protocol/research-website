---
# Blog post title
title: "A Public Goods experiment on Filecoin: Retroactively funding impact with Quadratic Voting"

# Website post date
# format YYYY-MM-DD
date: 2022-05-26

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
# We sort authors alphabetically by last name
authors:
  - silvia-bessa
  - "Matthew Frehlich"
  - karola-kirsanow
  - jorge-soares

# If applicable
categories:
  - blog

# If applicable
tags:
  -

# Zero or more of the areas in content/areas
areas:
  -

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Not used
draft: false

summary: "The PL Network Goods team launched a quadratic voting funding experiment on Filecoin repositories with the help of maintainers and storage providers, rewarded community contributors, and built retroactive funding infrastructure for broader application."

---

*tl;dr: The PL Network Goods team launched a quadratic voting funding experiment on Filecoin repositories with the help of maintainers and storage providers, rewarded community contributors, and built retroactive funding infrastructure for broader application.*


### Why did we launch this experiment?

The Protocol Labs Network Goods team launched the _Filecoin Community PR_ program as a focused experiment to retroactively reward contributions to public goods within Protocol Labs.  The goal was to test the [quadratic voting mechanism](https://vitalik.ca/general/2019/12/07/quadratic.html) proposed by (Vitalik, Weyl, et al.) and popularized by Gitcoin as a method to assess and allocate public goods funding. This test is part of our broader strategy to formalize [retroactive impact evaluation](https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c) (as popularized by Ethereum & Optimism) as a scalable method to fund and incentivize development of public goods in the Protocol Labs ecosystem.

To set up this trial, we defined retroactive “impact evaluation” into 3 broad steps:

1. Define a clear scope of historical activities for evaluation
2. Quantify the total magnitude of impact created for this scope into a FIL-denominated reward
3. Assess the impact of each activity and allocate rewards proportionally

In order to minimize voter time required (our biggest constraint), we internally completed (1) & (2), focusing voters on (3), which we believed to be the highest priority.

The testbed for this experiment were contributions to the Filecoin codebase between 2022-01-01 and 2022-03-31, coming from non-PL funded entities (e.g. community contributors or storage providers (SPs) upstreaming code). To limit the evaluation to a practical scope for a simplified pilot, we considered “contributions” as merged pull requests to a subset of Filecoin open-source code repositories.

### Hypothesis to test

* Retroactive evaluation via quadratic voting is a scalable method to elicit constrained evaluations of useful contributions to the Filecoin open source community on an ongoing basis
* Voters (SP’s, maintainers) can provide valuable signal to the community in 60 minutes by utilizing a voting platform to allocate a pre-sized funding pool with a focused list of eligible PRs

### Results

#### What was achieved

* Executed the first Protocol Labs internal quadratic voting round end to end, building the infrastructure and expertise for larger scale retroactive funding
    * Funded the development of an [open-source platform for quadratic voting processes](https://github.com/RafaRed/Vochaa-Funding)
    * Developed a playbook for future PL-funded quadratic voting processes
* 18 members of the PL maintainer and Filecoin storage provider community came together to value public goods impact, a similar scale as the 22 badge holders in Optimism’s pilot RetroPGF experiment
* Deployed **600 FIL** towards public goods causes (open-source contributions)

#### Who voted

We had a total of 18 voters (6 Protocol Labs contributors, 12 Filecoin storage providers) participate in this pilot; over 75% of storage providers we invited either voted or provided valuable feedback, a positive sign that our SPs are highly engaged contributors.

#### What was voted on

After filtering out submissions by paid PL members and contractors, there were a total of 22 PRs submitted by eligible community members to Filecoin repositories:

* (17 PRs) lotus
* (2 PRs) ref-fvm
* (3 PRs) lotus-docs


### Learnings and adjustments

We anticipated significant risks and made this round private for only the invited group of PL members and storage providers to allow for adjustments to be made post-hoc before launching publicly.  Several main learnings and our resulting adjustments to this first round were:

**Subject matter expert (SME) engagement:** We planned to minimize overhead on the maintainers / SPs by taking the majority of operational burden (e.g. sizing prize pools. filtering PRs) on the Network Goods team while engaging them on only the highest value activities (allocating funding via votes). We found that there was appetite for, and significant value in, engaging the maintainer community more frequently on scope and size of impact as well.

**Reward sizing:** Reward calibration is even more nuanced than expected; we calculated our overall reward pool pre-launch by triangulating reward size based on input cost (estimated # hours to complete a PR and the standard contractor rate) and qualitatively-assessed impact generated, which overestimated rewards. After launch, we decided to filter out ~50% of PRs that were already PL-rewarded, leaving a reduced pool of smaller PRs and skewing the per-PR reward. We needed a better way to size reward pools; some ideas included:
* Calculate reward pool after strict filtering criteria and with a more detailed review process of all PRs (or a higher sampling rate than pilot)
* Engage maintainers / SMEs in a high-level sizing of rewards

**QV reward allocation:** Quadratic voting is designed to capture voting preference and intensity, but in reality the mechanism has its shortcomings when allocating funding where power law dynamics are present. We will be investigating either a modified quadratic voting or quadratic funding process to capture the appropriate reward curve.

**Capital Efficiency:** The overhead cost (time and tooling) to set up a quadratic voting round, engage voters, and disburse funding requires both a significant amount of capital to be deployed and an ongoing reward system for it to be truly capital efficient.  
* Overhead Cost: $15k + ~120 hrs work
    * ~1hr voting time x 18 participants
    * ~100 work hrs setup time by Network Goods team
    * $15k quadratic voting platform cost (one-time development, now open source)
* Funding disbursed: **600 FIL**
* Impact Generated: Supported open-source contributions, developed infrastructure (voting platform + process), TBD on additional future contributions

Additionally, it’s unclear if rewarding a specific type of open source contribution can help the project while having a high capital efficiency, since OSS contributions are multiform, and all aspects should be appreciated in a way that strengthens the community.  Tools like [SourceCred](https://sourcecred.io/) could potentially be used for this holistic evaluation.

### What’s next

This pilot was successful in defining a mechanism for converting expert input into a retroactive evaluation of impact for public goods, which we will look to apply on larger scale use cases.  Contributors whose PRs were selected as part of this program will be notified to claim rewards shortly*.

On the topic of capital efficiency for this specific mechanism / use case: the majority of the overhead cost was initial setup and we expect efficiency & impact to increase with repeated iterations. However, at this time, we have chosen not to repeat this quadratic voting experiment on the Filecoin repositories in order to prioritize larger scale use cases which are likely a better fit for impact evaluator experiments. Instead, we will be investigating other more appropriate mechanisms for Filecoin community contributions which surfaced during this experiment.

If you have any questions about the experiment or how to operate a quadratic voting retroactive funding round on the infrastructure we developed, please contact [commons@protocol.ai](mailto:commons@protocol.ai).

_* Rewards were calculated based on a 1-month trailing average FIL market rate calculated May 25, 2022 to account for volatility_

### Special thanks to everyone who contributed!

Thanks to all the Protocol Labs maintainers and storage providers who were generous with their time to both vote and give extensive feedback on this experiment in the nature of furthering public goods in the Protocol Labs ecosystem!

**Protocol Labs maintainers:** arajasek, jennijuju, marinakosti, magik6k, LexLuthr, SgtCoin, TippyFlitsUK + ZenGround0, kubuxu, stebalien, momack2, anorth, ribasushi for feedback

**Storage providers:** sbudo, tmyuu, cryptowhizzard, jamerduhgamer, kenshyx, stuberman, NSC-FIL, William8Work, kernelogic, coder-lb, s0nik42, flyworker, + benjaminh83, hiddehoogland for feedback

**Community PR authors:** Kayuii, EmadMF, llifezou, zl03jsj, pefish, RobQuistNL, mtelka, FlorianRuen, xgswust, bhaskarvilles, s1mple1122, spark8899, Juneezee, koalacxr, simlecode, shotcollin, mur-me, jenks-guo-filecoin, noot, connormullett

Shoutout to Rafael Souza (RafaRed) from the [Vochaa](https://github.com/RafaRed/Vochaa) team for building a custom implementation of his platform for us to streamline voter input.

While it was not included in the time range for this competition, the maintainer team would like to thank community contributor **clinta** for a [valuable PR on Scheduler Enhancements](https://github.com/filecoin-project/lotus/pull/7269).

Full details on voting and reward allocations are available [here](https://docs.google.com/spreadsheets/d/1f-V6r8pi0AgCZRSYuUAnsQZnfXg0wYTB/edit?usp=sharing&ouid=110683744377797191434&rtpof=true&sd=true).
