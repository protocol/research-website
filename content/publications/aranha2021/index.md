---
# Publication title
title: "Count me in! Extendability for threshold ring signatures"

# Website post date
# format YYYY-MM-DD
date: 2021-09-21

# Publish from this date (defaults to date)
# publishDate: 2019-09-03

# Venue Name
venue: PKC 2022

# Venue Location
venue_location: Virtual

# Venue Date (useful e.g. for conferences whose date differs from pub; defaults to date)
# format YYYY-MM-DD
venue_date: 2022-03-08

# DOI, if available
doi:

# Type of publication
# delete all but one
publication_types:
  - conference-paper

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
  - "Diego Aranha"
  - "Mathias Hall-Anderson"
  - anca-nitulescu
  - "Elena Pagnin"
  - "Sophia Yakoubov"

# Zero or more of the areas in content/areas
areas:
  - cryptography

# Zero or more of the groups in content/groups (should match author membership)
groups:
  - cryptonet

# Publications without a PL affiliation can be added to the author's profile without showing up elsewhere
# If adding one, set this to true *and* do not set an area or group
unaffiliated: false

# Publication pdf, should be in the same folder
# No need to fill this out; just name the file the same as the folder
#resources:
#  - src: publication-source.pdf

# Not generally used
# featured: false

# Not generally used
#categories:
#  -

# Icon must match a known icon in /static/icons
# links:
#  - name: Publisher
#    url: link to publisher
#    icon: link
#  - name: Download PDF
#    url: external pdf url
#    icon: download

---

Ring signatures enable a signer to sign a message on behalf of a group anonymously, without
revealing her identity. Similarly, threshold ring signatures allow several signers to sign the same message
on behalf of a group; while the combined signature reveals that some threshold t of the group members
signed the message, it does not leak anything else about the signers’ identities. Anonymity is a central
feature in threshold ring signature applications, such as whistleblowing, e-voting and privacy-preserving
cryptocurrencies: it is often crucial for signers to remain anonymous even from their fellow signers. When
the generation of a signature requires interaction, this is difficult to achieve. There exist threshold ring
signatures with non-interactive signing — where signers locally produce partial signatures which can
then be aggregated — but a limitation of existing threshold ring signature constructions is that all
of the signers must agree on the group on whose behalf they are signing, which implicitly assumes
some coordination amongst them. The need to agree on a group before generating a signature also
prevents others — from outside that group — from endorsing a message by adding their signature to
the statement post-factum.
We overcome this limitation by introducing extendability for ring signatures, same-message linkable
ring signatures, and threshold ring signatures. Extendability allows an untrusted third party to take
a signature, and extend it by enlarging the anonymity set to a larger set. In the extendable threshold
ring signature, two signatures on the same message which have been extended to the same anonymity
set can then be combined into one signature with a higher threshold. This enhances signers’ anonymity,
and enables new signers to anonymously support a statement already made by others.
For each of those primitives, we formalize the syntax and provide a meaningful security model which
includes different flavors of anonymous extendability. In addition, we present concrete realizations of
each primitive and formally prove their security relying on signatures of knowledge and the hardness
of the discrete logarithm problem. We also describe a generic transformation to obtain extendable
threshold ring signatures from same-message-linkable extendable ring signatures. Finally, we implement
and benchmark our constructions.
