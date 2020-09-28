---
# Blog post title
title: COVID-19 Open Innovation Grant Update

# Website post date
# format YYYY-MM-DD
date: 2020-09-25

# Publish from this date (defaults to date)
# publishDate: 2019-09-25

# For PL authors, use author folder name; for non-PL authors, write name as in paper within ""
authors:
karola-kirsanow
jorge-soares

# If applicable
categories:
News
grants

# Zero or more of the areas in content/areas
areas:
  -

# Zero or more of the groups in content/groups (should match author membership)
groups:
  -

# Not used
draft: false

---

In the spring, as COVID-19 swept the globe, Protocol Labs quickly retooled its [grant program](https://github.com/protocol/research-rfps) and launched an [accelerated grants program](https://research.protocol.ai/blog/2020/protocol-labs-launches-a-covid-19-open-innovation-grants-program/) to support open-source projects building tools to confront present and future pandemics. Within one month of launch, PL awarded a total of $200,000 to ten projects marshalling hardware, software, research, and community-building to fight COVID.

The [COVID-19 Open Innovation grant program](https://research.protocol.ai/blog/2020/announcing-our-covid-19-open-innovation-grant-awardees/) has spurred a great deal of interest from the PL community, and we’re pleased to be able to share an update on the progress of some of our funded projects:

The **[Geo Backtracer**](https://github.com/aimxhaisse/geo-backtracer) project is building technology to enhance contact-tracing efforts: Geo Backtracer is a distributed backend to store users’ real-time GPS locations and provide a way to backtrace close contacts between users (close proximity lasting  >15 minutes) over a period of 15 days.

The project is one component that can be coupled with GPS datapoint aggregators to implement a complete contact-tracing app. Geo Backtracer offers automation to scale with increasing user load, and the technology is already in the testing phase: multiple simulations with up to 50 million users have confirmed that the approach scales linearly and is production-ready.

At the end of July, the project tagged its 1.0.0 release. Implemented in C++ and using RockDB, Geo Backtracer provides an API to batch push GPS points, retrieve correlations for a contaminated user and delete data for GDPR compliance. It also includes automated garbage collection, traffic encryption between cluster nodes, data redundancy and failover within the cluster, and automated deployment using Ansible.

[**UBORA**](http://ubora-biomedical.org/ubora-design-competition-2020/ ) is a platform for open-source co-innovation, bringing together European and African universities and their associated tech hubs to research sustainable healthcare through collaborative design.

UBORA  held a [design competition](http://ubora-biomedical.org/ubora-design-competition-2020/) focusing on devising technological solutions for the management of present and future outbreaks. UBORA is currently supporting the implementation of [10 successful projects](http://ubora-biomedical.org/winner-of-the-ubora-design-competition-2020/), including efforts to build medical devices, patient monitoring technology, open-source wearables, personal protective equipment, and diagnostic tools. One UBORA-supported project, a [portable ventilator](https://platform.ubora-biomedical.org/projects/e9f27389-7ccc-4360-9019-52a5fdcc7687) developed by students at Kenyatta University,  is headed to clinical trials in Kenya.

UBORA has recently been selected by the European Commission as a [finalist](https://ec.europa.eu/info/news/horizon-impact-award-2020-10-finalists-short-listed-2020-sep-15_en&pk_campaign=rss_page) for the [Horizon Impact Award](https://ec.europa.eu/info/research-and-innovation/funding/funding-opportunities/prizes/horizon-impact-award_en), prize dedicated to EU-funded projects having outstanding societal impact  both within and beyond Europe.

Public Invention’s [**VentMon - Inline Ventilator Test Fixture and Monitor**](https://github.com/PubInv/ventmon-ventilator-inline-test-monitor) project was created to address the urgent need to improve testing of open-source ventilator designs. It is a simple inline device plugged into the airway of a ventilator that monitors performance and raises an audio or internet alarm in case of failure. It can be used for testing ventilators before deployment as well as for ICU patient monitoring.

The team has already [built and shipped 5 VentMons](https://www.pubinv.org/project/ventmon/), two of which are now being used by other teams to test their ventilators and flow sensors. The VentMon team is also addressing a global flow sensor shortage by supporting teams in designing and building replacement parts to speed production.

Public Invention has been active in forging the global open-source ventilator community into a team, holding a [virtual conference](https://www.pubinv.org/2020/06/26/videos-from-vent-con-2020-available-now/) in May (including a short presentation from PL’s Marta Belcher) and maintaining a number of [repos](https://github.com/PubInv) for software, data standards, and parts that encourage reuse by being both modular and completely free and open. The VentMon team continues to work on improving the hardware and software capabilities of the device as they learn more about clinical needs -- they are currently building a version that includes oxygen sensing -- and intend to build and give away at least twenty free VentMon tester/monitors. In the meantime, they are also working to promote standards for modular composable ventilator design, and broadening the open-source ventilation community’s research focus to include non-invasive as well as invasive ventilation.


Open Medical’s [**Origami Mask Respirator**](https://www.openmedicalinnovation.com/projects/origami-mask) has rapidly progressed from being a kitchen-table concept to a professionally-developed medical device available to all.

The Origami Mask is a respirator design that requires no sewing or special equipment, a low tech-solution designed for distributed production. The design team at Open Medical incorporated feedback from their [open forum](https://www.openmedicalinnovation.com/projects/origami-mask/forum) to improve the fit of the mask, reshaping and bolstering the bridge and scaling the mask to accommodate a wider range of head sizes and conducting  further research and testing of the materials.

Working in partnership with [NextFab](https://nextfab.com/), a Philadelphia makerspace, Open Medical has been able to manufacture and provide 10,000 Origami Masks to the Hospital of the University of Pennsylvania and 1,000 Origami Masks to Carelink. Inspired by the ingenuity displayed on its forums, Open Medical recently held a [face mask design contest](https://www.openmedicalinnovation.com/projects/origami-mask/design-contest) to promote mask usage and  generate more community involvement in facemask design.

Community Data Science’s [**COVID-19 Digital Observatory**](https://wiki.communitydata.science/COVID-19_Digital_Observatory) collects open-access social media data related to COVID-19 in researcher-friendly formats, creating public datasets and freely licensed tools to empower researchers, practitioners, and public health officials.

Since its launch, the Digital Observatory has aggregated and published public data from multiple online communities and platforms, with a particular focus on [search engine query data](https://covid19.communitydata.science/datasets/search_results/)  and [revision and pageview data](https://covid19.communitydata.science/datasets/wikipedia/) from English Wikipedia. The project is [currently preparing](https://blog.communitydata.science/update-on-the-covid-19-digital-observatory/) a release of COVID-related datasets culled from Reddit and Twitter, and has published the [code](https://github.com/CommunityDataScienceCollective/COVID-19_Digital_Observatory) used to create the datasets, as well as technical guidance on working with the data.

We at Protocol Labs have enjoyed the privilege of contributing to such an interesting roster of projects. There are still many opportunities for individuals and groups to donate their skills or resources to pandemic response efforts; many of these can be found by browsing platforms like [HelpWithCovid](https://helpwithcovid.com/projects).

We continue to explore new means of contributing to pandemic response through our core mission of [making the internet faster, safer, and more open](https://research.protocol.ai/blog/2020/how-content-addressing-can-solve-streaming-challenges-as-networks-are-overloaded/) while remaining alert to [new opportunities](https://openresearchlab.org/basic-income) to invest in resilient communities.
