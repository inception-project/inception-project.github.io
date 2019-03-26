---
title: "Named entity recommendation on Brazilian Legal Text (LeNER-BR)"
subheadline: Example project
permalink: /use-case-gallery/lener-br/
# screenshot: screenshot.png
# thumbnail: screenshot-thumb.png
example-project: Example+A+Named+entity+recommendation+on+Brazilian+Legal+Text_2019-03-26_1452.zip
---

This project show-cases the OpenNLP named entity recommender on a sample of texts from 
[LeNER-BR](https://cic.unb.br/~teodecampos/LeNER-Br/), a dataset for named entity recognition in 
Brazilian Legal Text composed of legislation and legal decision texts. As named entity categories 
we have Person, Organization, Time, Location, Legislation and Legal Decisions.

The project contains five annotated documents. From the first document (`AC10024133855890001.txt`),
all annotations were stripped. We have configured an **OpenNLP Named Entity Recognizer recommender**
as well as a **String-based recommender** which both learn on the 5 annotated documents and provides
recommendations on the unannotated document. When you open the first document on the **annotation
page**, the learning of the recommender is triggered. It may take a moment until the recommendations
become actually visible. Try re-loading the page after a minute - then the recommendations should
show up.

##### References

* Pedro Henrique Luz de Araujo, Teófilo E. de Campos, Renato R. R. de Oliveira, Matheus Stauffer, 
  Samuel Couto, Paulo Bermejo. LeNER-Br: A Dataset for Named Entity Recognition in Brazilian Legal Text.
  <i>Computational Processing of the Portuguese Language</i>, Springer International Publishing.
  [[PDF (pre-print)](https://cic.unb.br/~teodecampos/LeNER-Br/luz_etal_propor2018.pdf)]
  [[Publisher](https://link.springer.com/chapter/10.1007/978-3-319-99722-3_32)]
  [[BIB](https://citation-needed.springer.com/v2/references/10.1007/978-3-319-99722-3_32?format=bibtex&flavour=citation)]
* [LeNER-Br: a Dataset for Named Entity Recognition in Brazilian](https://cic.unb.br/~teodecampos/LeNER-Br/)
