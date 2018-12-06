---
title: External recommender
subheadline: Example project
permalink: /use-case-gallery/external-recommender/
# screenshot: screenshot.png
# thumbnail: screenshot-thumb.png
example-project: Recommendation+and+Active+Learning+Example+Project_2018-07-05_1103.zip
---

This project is an example for using external recommender in INCEpTION to annotate named entities
and part-of-speech tags. Recommender in INCEpTION provide interactive annotation support by suggesting
potential labels. A special kind of recommenders are external ones.

External recommenders are web services that expose a machine learning classifier over a HTTP web service.
They can predict annotations for given documents and optionally be trained on new data. In contrast to
internal recommender, i.e. recommender that are built into the INCEpTION executable, external recommender 
allow to e.g. integrate recommenders written in a different programming language or to use an already
pre-trained model.

In order to implement a proper external recommender by onself, certain HTTP endpoints need to be implemented.
 The protocol itself is documented in the [INCEpTION Developer Guide](https://zoidberg.ukp.informatik.tu-darmstadt.de/jenkins/job/INCEpTION%20(GitHub)%20(master)/de.tudarmstadt.ukp.inception.app$inception-app-webapp/doclinks/3/#_external_recommender_api_overview).

When getting started with external recommender, it might be easier to use an existing implementation. Right
now, there are two external recommender implemented which serve as an example. They are described in the
following. The links to the Github repositories contain documentation installation guides. :

## DKPro TC external recommender

[DKPro TC](https://dkpro.github.io/dkpro-tc/) is an UIMA-based text classification Java framework built
on top of DKPro Core and DKPro Lab. It is intended to facilitate supervised machine learning experiments
with any kind of textual data. It supports predicting and training for token and span annotations.

The recommender itself is available on [Github](https://github.com/inception-project/external-recommender-dkpro-tc).

## spaCy external recommender

[spaCy](https://spacy.io/) is an open-source software library for advanced Natural Language Processing for 
Python. It currently offers statistical neural network models for e.g. part-of-speech tagging, dependency
parsing, named entity recognition in many different languages. The corresponding INCEpTION external recommender
uses the [Flask](http://flask.pocoo.org/) Python framework to expose POS and NER prediction.

The recommender itself is available on [Github](https://github.com/inception-project/external-recommender-spacy).

## Example INCEpTION project

The INCEpTION project for this use case contains two documents without annotations. They contain many named 
entities and tokens with diverse part of speech:

* __Tesla-Britannica.txt__: A short article about Nicola Tesla, the Serbian-American inventor, electrical engineer, mechanical engineer, and futurist.
* __Wikipedia-Obama.txt__: A short excerpt from the Wikipedia page of Barack Obama.

The following recommenders are configured in this project:

* Named entity value: External recommender
* Parts-of-speech: External recommender

They are configured with a dummy remote URL and are disabled by default. In order to make them use, set up an
external recommender by either starting an instance of the DKPro TC or spaCy recommender according to the
respective documentation in its repository. 

Back in INCEpTION, go to the _Project settings_ under the _Recommender_ tab, enter the 
correct remote URL and enable it. It is recommended to not enable both POS and NER at the same time, as it adds
visual clutter.

![projects_settings](recommenders_projects_settings.png)

When everything is configured, switch to the annotation page and open the document a document. After performing an action,
e.g. making an annotation, the recommendations are shown above the tokens. A detailed description for using recommender 
can be found in the [INCEpTION user guide](https://inception-project.github.io//releases/0.6.4/docs/user-guide.html#sect_projects_recommendation).

The following images show the spaCy recommender in action. The first picture shows suggestions for named entites, the
second one for parts-of-speech tags.

![annotation_ner](https://raw.githubusercontent.com/inception-project/external-recommender-spacy/master/images/ner_jordan.png)

![annotation_pos](https://raw.githubusercontent.com/inception-project/external-recommender-spacy/master/images/pos_obama.png)

