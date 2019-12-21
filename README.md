# [research-website](https://research.protocol.ai)

[![](https://img.shields.io/badge/team-research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research)
[![](https://img.shields.io/badge/team-%F0%9F%94%92%20research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research-private)
[![Build status](https://img.shields.io/circleci/build/github/protocol/research-website?style=flat-square&token=725e6aa020667e80f2b9770c7171764fa09ea839)](https://circleci.com/gh/protocol/research-website)

This repository contains the source code for the Protocol Labs Research website, available at https://research.protocol.ai

## Architecture

Static website built with the Hugo framework.
Uses tailwindcss for function css.
Thats it!

## Setup

- You will need [HUGO](https://gohugo.io/) installed
- You will need [YARN](https://yarnpkg.com/lang/en/).
- Run `yarn` to install deps.

## Development

- `yarn run serve`
- To use our CSS build chain (postcss + tailwindcss + autoprefixer + css treeshaking)
  you will need to have `postcss-cli` and `autoprefixer` installed globally.

## Deployment

A site preview is pinned to IPFS for every PR. It shows up as a status check at the bottom of the PR. Click the "_show all checks_", link and then the the "_Details_" link to view the preview.

![IPFS site preview link on A PR](https://github.com/ipfs-shipyard/ipfs-dns-deploy/blob/6abc3ef9f77d02e1321ea1d090b146d9cb710719/screenshot.png)

This works by building the site on [circle-ci](https://circleci.com/gh/protocol/website) and pinning it on our [IPFS Cluster](https://cluster.ipfs.io/).

### Private Drafts

If you are writing a blog post that is so secret that you don't want it anywhere on the IPFS network, then add `draft = true` to the front matter of your post. `hugo` won't build out the html for draft posts, so you can work on it as a draft on a PR without it being part of the preview site.

```toml
+++
author = "Protocol Labs"
date = "2017-06-20T00:00:00"
title = "Super secret"
draft = true
+++
```

When the `master` branch changes, typically after a PR is merged, the site will be built, pinned to cluster and the [DNSLink](https://docs.ipfs.io/guides/concepts/dnslink/) record will be updated so the live site will update **automatically**, once the dns change has propagated.

## Policies

- You're **encouraged** to submit blog posts! We're aiming for frequent updates and would like to publish a variety of content, ranging from the highly technical to opinion pieces. While we will edit all posts to maintaing minimum consistency standards, you have wide latitude on content.
- All content changes require review by research-pm. We'll try to keep it quick and easy. We'll do the final proofreading for any blog posts with or without feedback to the author (as requested).
- Anyone doing work in some way related to research can ask to be listed. We understand there are privacy constraints and so don't require profiles to be complete. However, all profiles have to use real names -- or, in other words, the same name you would use on scientific publications. This is also a technical requirement for content matching. 
