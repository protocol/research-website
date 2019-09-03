---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "PoReps: Proofs of Space on Useful Data"
authors: [Ben Fisch]
date: 2018-07-14
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

abstract: "A proof-of-replication (PoRep) is an interactive proof system in which a prover defends a publicly verifiable claim that it is dedicating unique resources to storing one or more retrievable replicas of a data file. In this sense a PoRep is both a proof of space (PoS) and a proof of retrievability (PoR). This paper is a foundational study of PoReps, exploring both their capabilities and their limitations. While PoReps may unconditionally demonstrate possession of data, they fundamentally cannot guarantee that the data is stored redundantly. Furthermore, as PoReps are proofs of space, they must rely either on rational time/space tradeoffs or timing bounds on the online prover's runtime. We introduce a rational security notion for PoReps called epsilon-rational replication based on the notion of an epsilon-Nash equilibrium, which captures the property that a server does not gain any significant advantage by storing its data in any other (non-redundant) format. We apply our definitions to formally analyze two recently proposed PoRep constructions based on verifiable delay functions and depth robust graphs."

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
url_source: https://eprint.iacr.org/2018/678
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
projects: [cryptography]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
