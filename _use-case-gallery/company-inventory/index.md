---
title: Efficient annotation of company inventory data
subheadline: Use-case
permalink: /use-case-gallery/company-inventory/
hidden: hidden
screenshot: screenshot.png
thumbnail: thumbnail.png
---

**Source**: *This use-case was kindly contributed by Maria Biryukov, University of Luxembourg, 
Center for Contemporary and Digital History.*

We used INCEpTION to annotate multi-lingual company inventory data with various entity types. 
Besides widely used classes, such as *PERSON*, *LOCATION*, *ORGANIZATION*, we introduced additional
entity types, which would enable us to capture notions of *duration*, *company structure*, and
*person function* or *role* in the company lifecycle.

The main goal of using INCEpTION at this stage of the project was to prepare a gold standard data 
for training a recurrent neural network for the task of named entity recognition.
Features of INCEpTION that turned to be especially helpful in our scenario are:

* **Active learning.** This feature considerably reduces time required for the annotation.
* **Ability to work with multiple languages.** Experience shows, that availability of language and 
  data-specific models has key influence on the named entity recognition results. With INCEPtION, 
  we are able to prepare training data sets tailored for our needs. 
* **Ability to monitor inter-annotator agreement.** This feature helps to produce data sets of higher
  quality.

