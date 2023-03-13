# [research-website](https://research.protocol.ai)

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

Note the internal link check action too: if it triggers, it's likely that you used a full URL (http://research.protocol.ai/page/subpage) where you should have used the path from the website root instead (/page/subpage). This is so that users can access the website over a gateway of their choice or directly over IPFS, even if they cannot resolve our DNS name. In some cases, particularly minisites that aren't built by Hugo, this might be intentional -- ignore the warning at your own peril.

When the `master` branch changes, typically after a PR is merged, the live site will update **automatically** (once fleek builds and the DNS record propagates, which usually takes a few minutes).


## Policies

- You're **encouraged** to submit blog posts! We're aiming for frequent updates and would like to publish a variety of content, ranging from the highly technical to opinion pieces. While we will edit all posts to maintaing minimum consistency standards, you have wide latitude on content.
- All content changes require review by research-pm. We'll try to keep it quick and easy. We'll do the final proofreading for any blog posts with or without feedback to the author (as requested).
- Anyone doing work in some way related to research can ask to be listed. We understand there are privacy constraints and so don't require profiles to be complete. However, all profiles have to use real names -- or, in other words, the same name you would use on scientific publications. This is also a technical requirement for content matching.

## Adding content

If you would like to add content to the website, please read the guidelines specific to the content type (below). If you are familiar with Hugo, feel free to submit a PR (follow the DIY instructions under each content type or use **hugo new**).

### Profile

If you're doing research work at PL (which doesn't require your job title to be Research Scientist!) and wish to be listed on the website, please contact us and include the following information:

* Bio (2-3 paragraphs, though flexible)
* Areas of expertise (1-5 items)
* Education (for each of BSc, MSc, and/or PhD, list program, institution, and year)
* Links to Google Scholar / Github / LinkedIn / personal website (all that apply)
* Photo

While we recommend including all of the above information, the only required information is a name or pseudonym -- preferably the name under which you plan to publish your work, taking into account publisher policies. Your profile will be linked to your publications, talks, and blog posts.

#### Content Attribution

The  PL Research Website's content attribution practices are modeled after the conventions of the academic research community, with the aim of facilitating broader dissemination of PL research. There are a few aspects of research culture to keep in mind when setting up your web presence and preparing content for posting to the website:

* You are not required to have researcher profile on the website to post content to the website.
* You may have a profile under a pseudonym -- this should be the pseudonym you intend to use to publish your work. Your pseudonym cannot include a title or degree (e.g. "Doctor") as this conflicts with research conventions concerning usage of academic titles.
* Your profile page avatar can be a photograph or drawing of yourself or an abstract artwork, but it cannot be a photograph or drawing of someone else. You do not have to have an avatar.
* You can still be listed under your chosen name or pseudonym on your team's relevant web page even if you do not have a researcher profile.
  * We can still attribute your work to your name or pseudonym, this simply means there will be no automatic aggregation of your talks/papers/posts/etc. to a profile page.
  * Your work can still be attributed to your team or group.
* You can post work under a pseudonym that remains unassociated with your researcher profile.
* Some works can be posted without attribution.
* You can ask for your profile to be removed or replaced as long as duplicate profiles are not created

#### **DIY**

* Create a new folder in content/authors and name it firstname-lastname
* Copy the contents of archetypes/authors into your new folder
* Replace avatar.png with an appropriate photo
* Fill out the _index.md file according to the instructions therein

### Publication

We index publications that meet the following criteria:

* Research-related
* Including your real name and noting the PL affiliation (**but see below**)
* Available as a PDF file

Publications don't need to be peer reviewed. We normally prefer publications to be available elsewhere (e.g. arXiv) but this is not a requirement. Please send us a link to the original source and/or the PDF file and relevant metadata (title, authors, venue, publication date).

In the case of preprints that eventually got accepted to a conference/journal, we'll update the metadata to match the publication but will only make the preprint copy available on our site. This does not apply if the venue is fully (green) open access, in which case we'll replace the preprint with the published version.

It is now possible to also list your non-PL publications. These will show up in your personal profile but not on the global/area/group listings. To do so, just set the `unaffiliated` flag.

#### **DIY**

* Create a new folder in content/publications and name it lastnameYYYY
* Copy the contents of archetypes/publications into your new folder
* Fill out the index.md file according to the instructions therein

### Talk

We index talks that:

* are research-related
* cover work done at Protocol Labs (i.e., are not discussions of general work in the field)
* have acceptable audio and video quality

Talks will be uploaded to Youtube for embedding on the website. If the talk is already available online, you may also link to it.

#### **DIY**

* Create a new folder in content/talks and name it event-firstname
* Copy the contents of archetypes/talks into your new folder
* Replace featured.jpg with a cover slide
* Fill out the index.md file according to the instructions therein

### Blog post

Everyone, regardless of their team affiliation or their role, is welcome to write a post for the Research blog. The blog post should have some connection to research and be of interest to (at least a part of) our target audience. It can be about your work a PL, an idea you had, or a project you work on during weekends

We try to keep the publication process agile and grant considerable freedom to authors in terms of content and style (but see below for general recommendations). We do, nevertheless, edit blog posts to better fit the website. 

If there are multiple authors, present them sorted by last name.

**Note:** Posts pertaining to events and other time-specific content are eligible as new content for six weeks after the conclusion of the event, after which point they should be retro-dated to the date of the event. 

#### **DIY**

* Create a new folder in content/posts and name it YYYYMM-short-title
* Copy the contents of archetypes/post into your new folder
* Fill out the index.md file according to the instructions therein

## Style guide

* The website is in English and the core content uses American English. User profiles and blog posts can use their preferred English variety. Publication and talk titles and summaries are copied verbatim.
* We are an Oxford comma shop. For the sake of clarity, lists of three or more items use commas between all items.
* Acronyms should be spelled out on first use.
* Text styles (italic, bold) should be used sparingly and only when real emphasis is warranted.
* Images should only be included in blog posts when they contribute to understanding the topic. Avoid the used of images for mere decoration.
* We prefer blog posts to be written in the first person (I/we) and posted under the author's name. We don't usually otherwise sign posts.
