---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Scaling Proof-of-Replication for Filecoin Mining"
authors: ["Ben Fisch", "Joseph Bonneau", "Nicola Greco", "Juan Benet"]
date: 2018-10-15
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-09-03T11:05:30+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["4"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "A proof-of-replication (PoRep) is a proof system that a server can use to demonstrate to a network in a publicly verifiable way that it is dedicating unique resources to storing one or more replicas of a data file. While it is not possible for PoReps to guarantee cryptographically that the prover's storage format is redundant, PoReps do guarantee that: (a) The prover must be using as much space to produce the proof as replicas it claims to store (it is a proof of space) (b) The prover can retrieve a committed data file (it is a proof of retrievability) (c) The prover can use the space to store this file without any overhead In this sense a PoRep is a useful proof of space. It is uniquely suited to replace proof-of-work in Nakamoto consensus as a Sybil resistance mechanism, while simultaneously incen-tivizing and subsidizing the cost of file storage. Technical report This is a short technical report on our constructions. A more detailed paper is forthcoming with information about our prototype implementation of PoReps."

# Summary. An optional shortened abstract.
summary: ""

tags: ["Filecoin"]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: ["cryptography"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
