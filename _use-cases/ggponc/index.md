---
title: GGPONC
subheadline: German Guideline Program in Oncology NLP Corpus
permalink: /use-cases/ggponc/
screenshot: screenshot.png
thumbnail: screenshot-thumb.png
hidden: true
---

<i>German Guideline Program in Oncology NLP Corpus</i>


**Source**: <i>This example was kindly contributed by 
<a href="https://hpi.de/digital-health-center/members/working-group-in-memory-computing-for-digital-health/florian-borchert.html">Florian Borchert</a>,
 Hasso-Plattner-Institut Digital Health Center, Universität Potstam, Germany</i>

The [GGPONC project][1] aims to provide a freely distributable corpus of German medical text for NLP researchers. Clinical guidelines are particularly suitable to create such corpora, as they contain no protected health information (PHI), which distinguishes them from other kinds of medical text.

The second version of the corpus (GGPONC 2.0) consists of 30 German oncology guidelines with 1.87 million tokens. It has been completely manually annotated on the entity level by 7 medical students using the INCEpTION platform over a time frame of 6 months in more than 1200 hours of work. This makes GGPONC 2.0 the largest annotated, freely distributable corpus of German medical text at the moment.

Annotated entities are Findings (Diagnosis / Pathology, Other Finding), Substances (Clinical Drug, Nutrients / Body Substances, External Substances) and Procedures (Therapeutic, Diagnostic), as well as Specifications for these entities. In total, annotators have created more than 200000 entity annotations. In addition, fragment relationships have been annotated to explicitly indicate elliptical coordinated noun phrases, a common phenomenon in German text.

The [annotation guide][3] has been iteratively refined by parallel annotation of the same seed documents by all annotators. The [INCEpTALYTICS toolkit][2] has been used to calculate inter-annotator agreement (γ measure). After 4 iterations, agreement reached a stable value of γ = 0.94.

The following features of INCEpTION were used:
* Custom entity layers
* Custom relations for entity specifications and annotation of ellipses
* Built-in recommenders
* Curation during annotation guide refinement
* Individual projects per annotators
* Remote API for exporting projects as WebAnno TSV and UIMA CAS

##### Code and annotation guide

* https://github.com/hpi-dhc/ggponc_annotation 

##### References

* Florian Borchert, Christina Lohr, Luise Modersohn, Jonas Witt, Thomas Langer, Markus Follmann, Matthias Gietzelt, Bert Arnrich, Udo Hahn and Matthieu-P. Schapranow. GGPONC 2.0 - The German Clinical Guideline Corpus for Oncology: Curation Workflow, Annotation Policy, Baseline NER Taggers. LREC 2022 — Proceedings of the Language Resources and Evaluation Conference, pp. 3650‑3660. Marseille, France, European Language Resources Association, 2022 [PDF](http://www.lrec-conf.org/proceedings/lrec2022/pdf/2022.lrec-1.389.pdf)
* Florian Borchert\*, Christina Lohr\*, Luise Modersohn\*, Thomas Langer, Markus Follmann, Jan Philipp Sachs, Udo Hahn, Matthieu-P. Schapranow. GGPONC: A Corpus of German Medical Text with Rich Metadata Based on Clinical Practice Guidelines. In Proceedings of the 11th International Workshop on Health Text Mining and Information Analysis, pp. 38–48. Online: Association for Computational Linguistics, 2020. (\* equal contribution) [PDF](https://www.aclweb.org/anthology/2020.louhi-1.5)

[1]: https://www.leitlinienprogramm-onkologie.de/projekte/ggponc-english/
[2]: https://github.com/ltl-ude/inceptalytics
[3]: https://github.com/hpi-dhc/ggponc_annotation 

