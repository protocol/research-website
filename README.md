# [research-website](https://research.protocol.ai)

[![](https://img.shields.io/badge/team-research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research)
[![](https://img.shields.io/badge/team-%F0%9F%94%92%20research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research-private)

This repository contains the source code for the Protocol Labs Research website, available at https://research.protocol.ai

## Architecture

- Static website built with the Hugo framework.
- Uses tailwindcss, postcss-cli, and autoprefixer for CSS generation.
- Uses the [CommonMark spec](https://spec.commonmark.org/0.29/) for Markdown syntax.
- Uses [MathJax v3](https://www.mathjax.org/#gettingstarted) for embedded LaTeX.
- That's it!

## Setup

- You will need [Hugo](https://gohugo.io/) (CI version: 0.92.0)
- You will need [NodeJS](https://nodejs.org/en/) (CI version: 17.4.0)
- You will need [Yarn](https://yarnpkg.com/lang/en/)
- Run `yarn` to install deps.

The easiest way to a working set-up is to follow the installation instructions for [Homebrew](https://brew.sh/), and then run `brew install yarn node hugo`.

## Development

Use `yarn serve` to launch a dynamic (real-time) local preview (defaults to localhost:1313). This greatly helps when preparing larger PRs.

## Deployment

We use fleek to automate builds and deployment for the website. A site preview is pinned to IPFS for every PR. It shows up as a status check at the bottom of the PR. Click the "_show all checks_", link and then the the "_Details_" link under fleek/build.

Note the internal link check action too: if it triggers, it's likely that you used a full URL (http://research.protocol.ai/page/subpage) where you should have used the path from the website root instead (/page/subpage). This is so that users can access the website over a gateway of their choice or directly over IPFS, even if they cannot resolve our DNS name.

When the `master` branch changes, typically after a PR is merged, the site will be built, pinned to cluster and the [DNSLink](https://docs.ipfs.io/guides/concepts/dnslink/) record will be updated so the live site will update **automatically** (
once the DNS record propagates).


## Policies

- You're **encouraged** to submit blog posts! We're aiming for frequent updates and would like to publish a variety of content, ranging from the highly technical to opinion pieces. While we will edit all posts to maintaing minimum consistency standards, you have wide latitude on content.
- All content changes require review by research-pm. We'll try to keep it quick and easy. We'll do the final proofreading for any blog posts with or without feedback to the author (as requested).
- Anyone doing work in some way related to research can ask to be listed. We understand there are privacy constraints and so don't require profiles to be complete. However, all profiles have to use real names -- or, in other words, the same name you would use on scientific publications. This is also a technical requirement for content matching.
- The [Handbook page on the Research Website](https://app.gitbook.com/@protocol-labs/s/handbook/pl-research/website) includes more detailed policies and guides for contributing content.
