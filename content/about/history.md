+++
# An about section created with the blank widget (adapted from demo)
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/
# Add more sections by duplicating this file and customizing to your requirements.

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 2  # Order that this section will appear.

title = "A brief history of research at Protocol Labs"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"

  # Background gradient.
  # gradient_start = "DarkGreen"
  # gradient_end = "ForestGreen"

  # Background image.
  # image = "image.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  # text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

[advanced]
 # Custom CSS.
 css_style = ""

 # CSS class.
 css_class = ""
+++

Protocol Labs itself began with the desire to make it easy to name, organize, and share data in a scalable way.  Those efforts became IPFS, a free and open-source software project to allow users and applications to directly share information without needing a central server.  Within IPFS, expertise in programming language theory led to Multiformats, an effort to make our technologies adaptable and upgradable in a future-proof way, and IPLD, our data model for content-addressed data;  together these projects have an ambition for developing self-describing data and programs, making different pieces of software dynamically compatible.  The network and transport capabilities of IPFS were eventually separated into libp2p, a modular networking stack, which has been implemented in multiple languages.  Protocol Labs Research continues to support and advance these efforts.

In contrast to IPFS, where users voluntarily store data they find interesting, we proposed and are developing Filecoin, a new protocol that to allows users to pay others to store data they find interesting.   Originally proposed in 2014, the Filecoin concept was further detailed in our 2017 whitepaper, with Filecoin Research efforts supporting both the network launch and future improvements.

In addition, we’re actively pursuing or supporting some smaller, independent research directions and experimental projects.  These efforts focus on issues separate from but deeply related to our current projects and the fields of distributed systems, cryptography, and networking.  You can read more here.
