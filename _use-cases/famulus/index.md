---
title: FAMULUS
subheadline: Annotate student essays with categories of diagnostic reasoning.
permalink: /use-cases/famulus/
screenshot: screenshot.png
thumbnail: screenshot-thumb.png
# example-project: Recommendation+and+Active+Learning+Example+Project_2018-07-05_1103.zip
hidden: false
---

**Source**: <i>This example was kindly contributed by 
<a href="https://www.informatik.tu-darmstadt.de/ukp/ukp_home/staff_ukp/detailseite_mitarbeiter_1_41920.en.jsp">Claudia Schulz</a>,
 Ubiquitous Knowledge Processing (UKP) Lab, Technische Universität Darmstadt , Germany</i>

Diagnostic reasoning is a key competence in many professions. Examples are diagnosing diseases and 
suitable therapies in medicine and diagnosing whether pupils with learning difficulties suffer from
a disability in educational settings. A good university curriculum should thus not only educate
students regarding factual knowledge but also support them in developing diagnostic skills.

The interdisciplinary [FAMULUS project][1] aims to study how online case simulations that provide
automatic adaptive feedback can foster students' diagnostic skills. To generate automatic feedback,
we will develop novel methods for identifying and evaluating diagnostic reasoning (e.g. hypothesis
generation, evidence generation and evaluation, hypothesis acceptance or rejection) in student
essays.

The project uses INCEpTION to create a gold standard corpus of student essays annotated with 
categories of diagnostic reasoning. To improve the annotation efficiency, FAMULUS regularly uses
the annotated data to train a [deep learning LSTM-CRF model][2] which is then connected to INCEpTION
as an external recommender to provide annotators with automatic annotation suggestions.

##### References

* Schulz, Claudia ; Sailer, Michael ; Kiesewetter, Jan ; Bauer, Elisabeth ; Fischer, Frank ; 
  Fischer, Martin R. ; Gurevych, Iryna : Automatic Recommendations for Data Coding:
  a use case from medical and teacher education. In: The 14th eScience IEEE International 
  Conference, 29.10.2018--01.11.2018, Amsterdam, Netherlands. Proceedings of the 14th eScience IEEE International Conference 
  (2018)
  [[PDF](https://tubiblio.ulb.tu-darmstadt.de/107254/)]
  [[BIB](https://tubiblio.ulb.tu-darmstadt.de/cgi/export/eprint/107254/BibTeX/tubiblio-eprint-107254.bib)]

[1]: http://www.famulus-project.de
[2]: https://tubiblio.ulb.tu-darmstadt.de/107254/
