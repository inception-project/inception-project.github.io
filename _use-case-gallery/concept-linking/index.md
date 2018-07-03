---
title: Smart Concept Linking
permalink: /use-case-gallery/concept-linking/
# Smart Concept Linking
---

This project serves as an example for using Interactive Concept Linking supported by 
the recommendation functionalities of INCEpTION.

There are five documents in this example project:
* __NER-de-test.tsv.conll__: a well-annotated document from the [GermEval2014NER](https://sites.google.com/site/germeval2014ner/data) project, 
converted into __conll__ format.
* __Emmanuel_Macron_QA.txt__: an interview by WIRED with [Emmanuel Macron](https://corpling.uis.georgetown.edu/gum/index.html#annos)
* __Michael_Jordan_scientist__: an excerpt of the Wikipedia article [Noam Chomsky](https://en.wikipedia.org/wiki/Noam_Chomsky)
* __Tesla-Britannica__: an excerpt of the Britannica article [Nikola Tesla](https://www.britannica.com/biography/Nikola-Tesla)
* __Wikipedia-Obama__: an excerpt of the Wikipedia article [Barack Obama](https://en.wikipedia.org/wiki/Barack_Obama)

The following recommenders are configured in this project to give suggestions for named entity values and identifiers:

* Token String Matcher - __value__
* Token Sequence Classifier (OpenNLP NER) - __value__
* Token String Matcher - __identifier__
* Named Entity Linker - __identifier__

___Setting up a Knowledge Base___
Currently, Concept Linking only works with a Virtuoso KB.
To set up Virtuoso, please clone the [Github](https://github.com/openlink/virtuoso-opensource) repository and follow the instructions.
Further installation information can be found [here](https://www.openlinksw.com/blog/~kidehen/?id=1647).
Wikidata offers canonical [RDF dumps](https://dumps.wikimedia.org/wikidatawiki/entities/) using the Turtle format. 
The mapping is described [here](ttps://www.mediawiki.org/wiki/Wikibase/Indexing/RDF_Dump_Format).

After importing the project, this project appears in _Projects_. A user can click on this 
project, then switch to _Documents_ to view the uploaded documents or _Recommenders_ 
to view the configured recommenders:
![projects_settings](recommenders_projects_settings.png)

A user can switch to the Annotation Page, select the project **ConceptLinking-Example** 
and open any document, e.g. __NER-de-test.tsv.conll__. 
The user can click on an existing annotation and type in the **identifier** field to get suggestions,
or he can mark any mention in a text.
After opening the project for the first time, it takes a while until automatic recommendations are shown.

Detailed descriptions for using Interactive Concept Linking can be found in the INCEpTION User Guide.

![annotation_page](annotation_page_with_concept_linking_1.png)
![annotation_page](annotation_page_with_concept_linking_2.png)

**Download**: [Smart Concept Linking example project](ConceptLinking-Example_2018-07-03_2059.zip)
