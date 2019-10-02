# [research-website](https://research.protocol.ai)

[![](https://img.shields.io/badge/team-research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research)
[![](https://img.shields.io/badge/team-%F0%9F%94%92%20research-0f41f4.svg?style=flat-square)](https://github.com/protocol/research-private)

> Official website for Protocol Labs Research https://research.protocol.ai

This repository contains the source code for the Protocol Labs website (to be) available at https://research.protocol.ai

This project builds out a static site to explain Protocol Labs Research, ready for deployment on ipfs. It uses `hugo` to glue the html together. It provides an informative, public-facing website. The most important things are the words, concepts and links it presents.

## Install

```sh
git clone https://github.com/protocol/research-website
```

# Procedures below not yet implemented

The website is currently (during the development phase) deploying to netlify (https://pl-research.netlify.com/), and will be configured to deploy to IPFS when ready to launch.

## Usage 

The site is built with `make`.

To try out the site locally with a hot reloading server on http://localhost:1313 run:

```sh
make dev
```

The following commands are available:

### `make`

Build the optimised site to the `./public` dir

### `make serve`

Preview the production ready site at http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make dev`

Start a hot-reloading dev server on http://localhost:1313 _(requires `hugo` on your `PATH`)_

### `make minify`

Optimise all the things!

### `make deploy`

Build the site in the `public` dir and add to `ipfs` _(requires `hugo` & `ipfs` on your `PATH`)_

### `make publish-to-domain` :rocket:

Update the DNS record for `research.protocol.ai`.  _(requires an `auto.token` file to be saved in the project root.)_

If you'd like to update the dnslink TXT record for another domain, pass `DOMAIN=<your domain here>` like so:

```sh
make publish-to-domain DOMAIN=tableflip.io
```

---

See the `Makefile` for the full list or run `make help` in the project root.


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


### Manual deployment 

To manually deploy the site to https://research.protocol.ai, run:

```sh
# Build out the optimised site to ./public, where you can check it locally.
make

# Add the site to your local ipfs, you can check it via /ipfs/<hash>
make deploy

# Save your dnsimple api token as auth.token
cat "<api token here>" > auth.token

# Update the dns record for protocol.ai to point to the new ipfs hash.
make publish-to-domain
```

## Dependencies

* `node` & `npm` for our build tools
* `ipfs` to deploy changes
* `jq`, `curl` and an `auth.token` file in the project root containing your dnsimple api token to update the dns.

All other dependencies are pulled from `npm` and the Makefile will run `npm install` for you because it's nice like that.

## Contribute

Please do! Check out [the issues](https://github.com/protocol/research-website/issues), or open a PR!
