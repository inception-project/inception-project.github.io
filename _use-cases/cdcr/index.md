---
title: Cross-Document Event Coreference
subheadline: Annotating mentions of events in news articles and linking them to an event knowledge base
permalink: /use-cases/cdcr/
screenshot: cdcr.png
thumbnail: cdcr.png
hidden: false
---

**Source**: <i>This use-case was kindly contributed by <a href="https://www.informatik.tu-darmstadt.de/ukp/ukp_home/staff_ukp/detailseite_mitarbeiter_1_41408.en.jsp">Michael Bugert</a>,
 Ubiquitous Knowledge Processing (UKP) Lab, Technical University of Darmstadt, Germany</i>

Cross-document event coreference resolution (CDCR) is an NLP task in which mentions of events need to be identified and clustered throughout a collection of documents.

We used the INCEpTION tool to extend the annotations of an existing CDCR corpus in two phases: In Phase 1, annotators reannotated pre-existing sentence-level event mention annotations on the token level. In Phase 2, annotators identified additional mentions of events, and linked these mentions to an external knowledge base of 40.000 sports events. In doing so, we made use of the following features of the INCEpTION platform:

* Annotation of spans and relations between spans involving multiple annotation layers
* Entity/event linking to externally hosted knowledge bases using SPARQL
* Importing and exporting UIMA CAS annotations with [dkpro-cassis](https://github.com/dkpro/dkpro-cassis)
* Annotation layers with open tagsets, for giving annotators the option to comment on unclear cases
* Utilities for monitoring annotator progress and computing inter-annotator agreement

##### References
* Bugert, Michael ; Reimers, Nils ; Gurevych, Iryna: Cross-Document Event Coreference Resolution Beyond Corpus-Tailored Systems. In: CoRR, abs/2011.12249. (2020) [arXiv](https://arxiv.org/abs/2011.12249)