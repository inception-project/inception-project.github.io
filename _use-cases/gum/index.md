---
title: GUM Corpus
subheadline: Georgetown University Multilayer Corpus (GUM)
permalink: /use-cases/gum/
# screenshot: screenshot.png
# thumbnail: screenshot-thumb.png
# example-project: Recommendation+and+Active+Learning+Example+Project_2018-07-05_1103.zip
hidden: false
---

**Source**: <i>This example was kindly contributed by <a href="https://corpling.uis.georgetown.edu/amir/">Amir Zeldes</a>,
 Department of Linguistics, Georgetown University, Washington, D.C., USA</i>

The Georgetown University Multilayer Corpus (GUM) is an open source multilayer corpus of richly 
annotated web texts from eight text types. The corpus is collected and expanded by students as part 
of the curriculum in [LING-367 Computational Corpus Linguistics][1] at Georgetown University. The 
selection of text types is meant to represent different communicative purposes, while coming from 
sources that are readily and openly available (mostly Creative Commons licenses), so that new texts
can be annotated and published with ease.

All documents are annotated with a range of annotation layers, most of which are produced or 
corrected manually. Layers include annotations for:

* Multiple POS tags, morphological features and lemmatization
* Sentence segmentation and rough speech act
* Document structure in TEI XML (paragraphs, headings, figures, etc.)
* ISO date/time annotations
* Speaker information (where relevant)
* Constituent and dependency syntax
* **Information status (given, accessible, new)**
* **Entity and coreference annotation, including bridging anaphora**
* Discourse parses in Rhetorical Structure Theory

For the annotation of entities, information status, coreference resolution and bridging anaphora, 
marked in bold above, we use INCEpTION, which allows students to start their annotation projects 
from automatic NLP tool output and instructors to correct student solutions in the same interface.

The entity annotation data is available in INCEpTION’s WebAnno TSV format on [GitHub][2], as well as
in other formats for different annotation types. The merged corpus with all annotations concurrently 
searchable is accessed using [ANNIS][3].
 
[1]: http://courses.georgetown.edu/index.cfm?CourseID=LING-367
[2]: https://github.com/amir-zeldes/gum
[3]: https://corpling.uis.georgetown.edu/annis/

