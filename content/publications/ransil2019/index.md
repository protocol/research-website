---
title: A computable multilayer system stack for future-proof interoperability
date: 2019-07-09

publishDate: 2019-07-09

doi:

publication_types:
  - conference-paper
authors:
  - alan-ransil
  - "Edwin Fonkwe Fongang"
  - michael-hammersley
  - "Ivan Celanovic"
  - "Francis O'Sullivan"
tags:
categories:
areas:
  - distributed-power-systems

groups:
  - abstractionlab


venue: IEEE PES Transactive Energy Systems Conference (TESC)

venue_location: Minneapolis, MN

resources:
  - src: ransil2019.pdf
  - src: cite.bib
---
The future decarbonized power grid will make increasing use of distributed energy resources (DERs) controlled using data collected at an extremely granular level compared to today's coarse bulk power system models. However, the centralized system by which security constrained economic dispatch is implemented at the transmission level cannot be directly applied to a distribution system comprising five orders of magnitude as many nodes engaging in complex scheduling and bidding behavior. Emerging data processing tools such as distributed state estimation algorithms, multiparty computation, blockchains, zero-knowledge proofs and machine learning hold the promise of collecting and processing the necessary data efficiently and securely. In particular, the implementation of transactive energy mirrors the decentralization of the world wide web from a data processing perspective, with similar toolsets required to develop secure, robust algorithmic markets making personalized decisions based on locally relevant datasets. The development of cryptographic tools and data processing infrastructure to build these decentralized markets is advancing rapidly. Meanwhile, capital must be deployed in the  power  system  to  purchase  assets  with  decades-long  lifespans.  In  order  to  balance  the  uncertainty caused by rapid progress with the need to build working systems today, we present  a Computable Multilayered Power System model designed to enable future-proof interoperability. In  our  five-layered  design,  each  layer  performs  one  of  the  essential  functions  needed  to  run  a  power system: State Estimation (SE), Optimization and Dispatch (OD), Transaction (TR), Auditing and  Recording  (AR),  and  Regulation  (RE).  The  specification  of  this  architecture  defines  the  datastructures by which information is exchanged between layers. This ensures that each layer has  access  to  the  data  and  settings  required  to  perform  its  function,  but  ensures  future-proof compatibility by allowing that function to be performed according to any algorithm. Communication between these layers and devices in the field may be performed using existing standards such as  IEEE  2030.5  and  Sunspec  Modbus.  The  five-layer  model  is  amenable  to  hierarchical  implementation, making it compatible with architectures such as laminar coordination frameworks. However, alternative implementations of the layers allow microgrid control, security constrained economic dispatch, building energy management or a sparse implementation such as managing a  subset  of  smart  devices  on  a  distribution  feeder.  Separation  of  Auditing  and  Regulatory  functions  from  other  tasks  allow  novel  concepts  such  as  zero-knowledge  proofs  to  be  readily  implemented,  and  tariff  structures  or  optimization  parameters  easily  changed  in  the  regulatory layer without the need to update other layers manually. Transactions may be billed using existing methods, or the transaction layer may use digital payment channels without affecting other layers. Additionally,  multiple  layers  such  as  Transaction  and  Auditing  may  be  combined  if  performing  these functions together is desired. As new modular tools are developed which offer increasingly efficient  methods  of  coordinating  DERs,  this  functional  separation  of  concerns  will  enable  their  implementation while maintaining compatibility with existing and future systems.
