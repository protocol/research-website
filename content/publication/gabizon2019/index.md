---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "AuroraLight: Improved prover efficiency and SRS size in a Sonic-like system"
authors: ["Ariel Gabizon"]
date: 2019-05-29
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

abstract: "Using ideas from the recent Aurora zk-STARK of Ben-Sasson et al. [BCR + 19], we present a zk-SNARK with a universal and updatable SRS similar to the recent construction of Maller et al. [MBKM19], called Sonic. Compared to Sonic, our construction achieves significantly better prover run time (less than half) and smaller SRS size (one sixth). However, we only achieve amortized succinct verification time for batches of proofs, either when the proofs are generated in parallel or in [MBKM19]'s helper setting, and our proofs are longer than those of [MBKM19] (but still contain a constant number of field and group elements)."

# Summary. An optional shortened abstract.
summary: ""

tags: []
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
url_source: https://eprint.iacr.org/2019/601
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
