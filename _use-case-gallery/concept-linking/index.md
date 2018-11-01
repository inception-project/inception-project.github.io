---
title: Interactive Concept Linking
permalink: /use-case-gallery/concept-linking/
example-project: Example%3A+Concept+Linking_2018-10-31_1947.zip
---

This project serves as an example for using Interactive Concept Linking supported by 
the recommendation functionalities of INCEpTION.

There are two document in this example project:
* __pets1.txt__: A short annotated sample text about animals.
* __pets2.txt__: A short annotated sample text about animals.

There is one _Knowledge Bases_ included:
* __pets.ttl__ - includes some animals and instances

The following recommenders are configured in this project to give suggestions for named entity values and identifiers:

* Token String Matcher - __value__
* Token Sequence Classifier (OpenNLP NER) - __value__
* Token String Matcher - __identifier__
* Named Entity Linker - __identifier__

After importing the project, it should appear in _Projects_. A user can view the _Documents_, _Knowledge Bases_ and _Recommenders_
by clicking on the respective tabs.
![projects_settings](recommenders_projects_settings.png)

Please go to the Annotation Page and select **pets1.txt** to see example annotations. Then select the Named Entity layer. 
To annotate the **identifier** feature of a token,
you can click on an existing annotation or mark any mention in a text and type in the **identifier** field to get suggestions.
Grey annotations are recommendations by the system and can be accepted by clicking once or rejected by clicking twice.
Detailed descriptions for using Interactive Concept Linking can be found in the INCEpTION User Guide. 
**pets2.txt** is an unannotated sample text that can be used as a playground.

![annotation_page](annotation_page_with_concept_linking_1.png)
![annotation_page](annotation_page_with_concept_linking_2.png)
