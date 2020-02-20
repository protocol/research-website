---
title: "Luca Nizzardo’s thesis wins UPM Extraordinary Award"

# Hugo publish date
date: 2020-01-27

# Taxonomies
authors:
  - jorge-soares

categories:
  - news
  - team

research-areas:
  - distributed-systems
  - cryptography

research-groups:
  - filecoin-research

draft: false

---

_Source: [IMDEA Software Institute](https://software.imdea.org/news.html#2019-12-20-luca-nizzardo-phd-en). Posted here with permission._

[Luca Nizzardo](https://research.protocol.ai/authors/luca-nizzardo/) was a PhD student of the [IMDEA Software Institute](https://software.imdea.org/es) and his thesis “Cryptographic Techniques for the Security of Cloud and Blockchain Systems” defended in 2018 was directed by Associate Professor [Dario Fiore](https://software.imdea.org/people/dario.fiore/index.html). Nowadays he works for Protocol Labs helping to build protocols, systems, and tools to improve how the Internet works.

This month the [Universidad Politécnica de Madrid (UPM)](http://www.upm.es/) announced the two winners of the Extraordinary Award and Luca’s thesis is one of them. In his thesis, Lucas investigates how to enforce the honest behavior of parties involved in a digital interaction over the Internet, particularly considering two emerging paradigms in this setting: cloud computing and e-commerce.

Human interactions often involve people who have different and sometimes contrasting interests, like buyers and sellers or consumers and providers. For physical interactions, the society has developed during the years many different ways to protect users against misbehaviors. Nevertheless, when this communication happens in the digital world, through the Internet, where people do not meet or even know each other, such protection is more challenging to obtain and additional digital tools are needed in order to defend users.

Two main security concerns that have given attention by the research community are those about the privacy and authenticity of the data stored and processed in untrusted environments. Intuitively, for privacy a client does not want the server to learn any information about the outsourced data. For authenticity, the client instead wants to be sure that the cloud computed correctly on the outsourced data. In his thesis he focused on this second problem, advancing the study of homomorphic authenticators. In homomorphic authenticators, a Client outsources authenticated data to the Cloud. Later on, a third entity (the Verifier) can ask the Cloud to compute a function over the Client’s outsourced data. Using a special procedure, the Cloud can provide the Verifier with an authenticator for the output of the function, which allows the Verifier to check the validity of the computation queried.

The contribution of the thesis addresses three different aspects of homomorphic authenticators: definitions, efficiency, and functionalities.

First, it introduces a new security model which is stronger and easier to deal with compared with the existing one, along with two compilers which allow one to go from the old model to the new one. Second, it provides the first linearly homomorphic signature scheme whose verification keys have size sublinear in that of the outsourced dataset. Third, it formalizes the notion of homomorphic authenticators for functions which take inputs authenticated using different keys, providing concrete constructions both in the case of private and public verification.

In respect to e-commerce and, more in general, the possibility of transferring value through the Internet, this work is focused on achieving fair exchange by profiting off blockchain features, where by fair exchange we mean the possibility for two users to swap digital goods such that neither can cheat the other, using a Zero-Knowledge Contingent Payments (ZKCP) protocol.
