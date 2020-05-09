---
title: Cited Loci
subheadline: Annotate references to classical authors and their works.
# subheadline: indexing of canonical references
permalink: /use-cases/cited-loci/
screenshot: screenshot.png
thumbnail: screenshot-thumb.png
# example-project: Recommendation+and+Active+Learning+Example+Project_2018-07-05_1103.zip
---

**Source**: <i>This example was kindly contributed by <a href="http://orcid.org/0000-0002-7406-6286">Matteo Romanello</a>,
 Digital Humanities Laboratory, EPFL, Switzerland</i>

The [Cited Loci][1] project, developed to index canonical references found in 
existing publications – be they born-digital or digitized. This is technically framed as a named
entity recognition and linking problem. In the project,  particular focus has been put on references to
classical authors and their works.

INCEpTION has been used in this project to manually correct the automatic extraction and
disambiguation of references, in particular in two contexts:

* [Epische Bauformen project][2]: the index of cited passages of the printed publication (in 3 volumes)
  is produced by extracting references automatically, then corrected by student assistants
  manually in INCEpTION
* [Center for Hellenic Studies (CHS) in Harvard][3]: summer interns have been creating a gold standard set, 
  consisting of book chapters (from CHS' open access series) annotated with information about 
  canonical references and named entities
  
The data involved in these contexts was the following:

* book chapters, journal articles in text format
* legacy data in CONLL/Brat standoff format, converted into UIMA XML
* [HuCit knowledge base][4] with classical authors and works, SPARQL API available

The overall workflow of the annotation project consisted of the following steps:

* output of the automatic processing using the Cited Loci software was loaded into INCEpTION
* student assistants/interns manually verified all annotations

To complete these tasks, we made in particular use of the following features of the INCEpTION platform:

* the abiltiy to define custom layers for specialized relations/entities
* the knowledge base integration: entities are linked to the corresponding author/work instance in the KB
* the active learning support to speed up the annotation process
* the monitoring to manage the process

[1]: http://citedloci.org
[2]: https://www.epische-bauformen.uni-rostock.de/
[3]: https://chs.harvard.edu/
[4]: https://github.com/mromanello/hucit_kb
