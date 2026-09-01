---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
title: "Welcome"
#header:
header-1:
    title: Multi-layer text annotation with knowledge-base entity linking and machine-assisted suggestions
---

Build annotated text corpora with your own annotation scheme, link every mention to a real
knowledge base, and let a recommender that learns as you go do the repetitive part.

<div class="feature-grid">

  <div class="feature">
    <img src="{{ site.url }}/images/features/entity-linking.svg" alt="A mention in text linked to a concept node carrying the identifier Q42">
    <div>
      <h3>Annotate against your ontology</h3>
      <p>Load an ontology or thesaurus in RDF, OWL, OBO, SKOS or Turtle, or query a remote SPARQL
      endpoint live. Ready-made profiles cover Wikidata, SNOMED&nbsp;CT, the Gene Ontology, the Human
      Phenotype Ontology and the GND authority file. Annotators get ranked concept suggestions as
      they type.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/multi-layer.svg" alt="Three annotation planes stacked over one line of text, with a link crossing between them">
    <div>
      <h3>Stack as many layers as your scheme needs</h3>
      <p>Entities, relations, coreference chains, syntax, frames and document labels, all over the
      same text and edited in one window. Typed features, with slots that link annotations together.
      Define the whole scheme in the browser.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/recommender.svg" alt="Dashed suggestions becoming accepted annotations beside a rising accuracy curve">
    <div>
      <h3>Get suggestions that improve while you work</h3>
      <p>The recommender trains on what you have already annotated, so it gets better during the
      session. Active learning asks about the cases it is least sure of. Nothing enters your data
      until you accept it.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/curation.svg" alt="Two annotator tracks merging into a single gold standard track, with one conflict flagged">
    <div>
      <h3>Know your annotations are good</h3>
      <p>Have several people annotate the same documents, then merge them into a gold standard:
      agreements merge for you, so you only decide the real disagreements. Inter-annotator
      agreement is measured in the tool, and the Explorer charts what you actually collected.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/self-hosted.svg" alt="A laptop beside a server rack: the same platform for one person or a whole institution">
    <div>
      <h3>Runs where you need it to run</h3>
      <p>A desktop installer for one person on a laptop, or a server deployment for a whole
      institution &mdash; on your own hardware, inside your own network and security infrastructure,
      with your existing single sign-on.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/integration.svg" alt="An external process driving a project through an API, with events pushed back out">
    <div>
      <h3>Drive it from your own code</h3>
      <p>A REST API to create projects, load documents and pull annotations out, plus webhooks that
      notify your services when a document or project changes. Bring your own models as
      <a href="https://github.com/inception-project/inception-external-recommender">external
      recommenders</a>. Annotation becomes a step in your pipeline, not a detour out of it.</p>
    </div>
  </div>

  <div class="feature">
    <img src="{{ site.url }}/images/features/formats.svg" alt="A project exported to several interchange formats and imported back">
    <div>
      <h3>Speaks your field's formats</h3>
      <p>Import plain text, PDF, HTML and TEI. Export to UIMA CAS XMI or JSON with your custom
      layers intact, or to CoNLL-U for the standard layers &mdash; so the corpus you build stays
      usable elsewhere.</p>
    </div>
  </div>

</div>

Developed by the [UKP Lab](https://www.informatik.tu-darmstadt.de/ukp/) at TU Darmstadt, and used
across NLP, linguistics, digital humanities, the biomedical and clinical domain, the social
sciences, education, history, law &mdash; and more.

<div class="fp-cta fp-cta-secondary">
  <a class="fp-cta-item" href="{{ site.url }}/example-projects/">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>
    </svg>
    <span>
      <strong>Example projects</strong>
      <small>Ready-made schemes to start from</small>
    </span>
  </a>

  <a class="fp-cta-item" href="{{ site.url }}/papers-using-inception/">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 4h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/>
      <path d="M14 4v5h5M8 13h8M8 17h5"/>
    </svg>
    <span>
      <strong>Papers using INCEpTION</strong>
      <small>{{ site.data.papers.count }} recent studies by field</small>
    </span>
  </a>

  <a class="fp-cta-item" href="{{ site.url }}/use-cases/">
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 3a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 3z"/>
      <path d="M10 21h4"/>
    </svg>
    <span>
      <strong>Use cases</strong>
      <small>How other projects set this up</small>
    </span>
  </a>
</div>

<img width="100%" src="{{ site.url }}/images/screenshot-annotation.png"/>

### How to cite

If you use INCEpTION in scientific work or want to learn more about it, please have a look at

> Klie, J.-C., Bugert, M., Boullosa, B., Eckart de Castilho, R. and Gurevych, I. (2018): **The INCEpTION Platform: Machine-Assisted and Knowledge-Oriented Interactive Annotation.** In Proceedings of System Demonstrations of the 27th International Conference on Computational Linguistics (COLING 2018), Santa Fe, New Mexico, USA ([pdf][COLING-2018-PDF]) ([bib][COLING-2018-BIB]) ([flyer][COLING-2018-FLYER])

For publications on more specific aspects of the platform, have a look at our [complete publications list]({{ site.url }}/publications).

### License

INCEpTION is provided as open source under the Apache License v2.0.

[COLING-2018-PDF]: {{ site.url }}/publications/INCEpTION-COLING2018-Demo.pdf
[COLING-2018-FLYER]: {{ site.url }}/publications/INCEpTION-COLING2018-Flyer.pdf
[COLING-2018-BIB]: https://tubiblio.ulb.tu-darmstadt.de/cgi/export/eprint/106270/BibTeX/tubiblio-eprint-106270.bib
