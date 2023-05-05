---
# Talk title
title: "A dead man’s full-yet-responsible-disclosure system"

# Website post date
# format YYYY-MM-DD
date: 2022-08-11

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue name
venue: DEFCON 30

# Venue link
venue_url:

# Venue date (defaults to date)
# format YYYY-MM-DD
# venue_date: 2022-10-27

# Venue location
venue_location: Las Vegas, NV, USA

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - yolan-romailler

# Zero or more of the areas in content/areas
areas:
  - distributed-systems

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Name the cover image featured.jpg
resources:
  - title: featured-image
    src: featured.png

# Short abstract
# Describe talk here
abstract: "Do you  worry about responsible disclosure because they could instead exploit the time-to-patch to find you and remove you from the equation? Dead man switches exist for a reason... 
In this talk we present a new form of vulnerability disclosure relying on timelock encryption of content: where you encrypt a message that cannot be decrypted until a given (future) time. This notion of timelock encryption first surfaced on the Cypherpunks mailing list in 1993 by the crypto-anarchist founder, Tim May, and to date while there have been numerous attempts to tackle it, none have been deployed at scale, nor made available to be used in any useful way. This changes today: we’re releasing a free, open-source tool that achieves this goal with proper security guarantees. We rely on threshold cryptography and decentralization of trust to exploit the existing League of Entropy (that is running a distributed, public, verifiable randomness beacon network) in order to do so. We will first cover what all of these means, we will then see how these building blocks allow us to deploy a responsible disclosure system that guarantees that your report will be fully disclosed after the time-to-patch has elapsed. This system works without any further input from you, unlike the usual Twitter SHA256 commitments to a file on your computer."

---


{{< youtube IW7sdSd2wOQ >}}
