---
title: Knowledge Supported Search 
permalink: /use-case-gallery/search/
# screenshot: screenshot.png
# thumbnail: screenshot-thumb.png
---

This project is an example for using the search functionalities of 
INCEpTION in order to search for raw text, conventional and knowledge base linked annotations.

In this project, we use a local knowledge base containing the wine ontology from the 
[W3C’s OWL Web Ontology Language Guide](https://www.w3.org/TR/owl-guide), a popular example 
of an OWL-based ontology. 

For downloading the project [click here](Search+Example.zip).

## Project structure and configuration 

After importing the project, it will appear as __Search Example__ in _Projects_. The user can click 
on this project, then switch to the _Documents_ tab to view the uploaded documents:

* __closvougeot.txt__: A text about Clos de Vougeot wines.
* __sauternes..txt__: A text about Sauternes wines.
* __wine-document.txt__: A text about Chateau d'Yquem wines.
* __yquem.txt__: Another text about Chateau d'Yquem wines.

### Knowledge base configuration

Switching to the _Knowledge bases_ tab will show the configuration of the knowledge base. 
It has been previously created and imported using the RDF file available 
[here](https://www.w3.org/TR/owl-guide/wine.rdf).

### Custom layers and features

Switching to the _Layers_ tab will show the configuration of the layers for the example project.
Besides the built-in layers, the project has the following custom annotation type:

* _Claim_: used to annotate statements made about a given wine.

Furthermore, two additional tags have been added to the __value__ feature of the __Named Entity__
 annotation type: 

* _WINE_: a named entity representing a certain wine
* _GRAPE_: a named entity representing a certain grape

Named entities can be linked to the knowledge base through the __identifier__ feature. Thus, a 
given wine annotation can be directly linked to the corresponding _Wine_ 
concept (or subconcepts), or a grape annotation can be linked to the _Grape_
concept in the knowledge base.

### Knowledge base contents

The knowledge base contents can be viewed in the _Knowledge Base_ page, accessible from the 
main menu. There, the user can see the whole ontology in a tree-like structure.

![search_kb_page](search-kb-page.png)

## Doing searches in the project

For searching over the annotations (and also creating new annotations or updating the existing ones
if needed), a user must first switch to the annotation page and open any of the project documents. 
The annotations contained in the document will be shown in the central main editor, just 
above the tokens.

For searching, the user must open the search sidebar clicking on the magnifier button in the left. 
In the search sidebar, the user can write queries for retrieving text passages containing specific 
words (tokens), annotations like named entities, or annotations linked to the knowledge base.

Use the __Search__ button to execute a query. The results will appear just below, grouped by
document. Clicking on a result will automatically show it in the central edit window. 

![search_annotation_page](search-annotation-page.png)

INCEpTION indexing and search mechanism uses 
[MTAS](https://meertensinstituut.github.io/mtas/index.html), an indexing framework that 
implements a large part of the CQL (Corpus Query Language) language on top of Apache Lucene. 
CQL is a language for querying documents, introduced by the IMS Open Corpus Workbench (IMS CWB), 
a powerful tool to index and search annotated corpora.

Below are some example CQL queries that show some of the search capabilities of INCEpTION:

### Queries over the raw text (tokens) and conventional annotations

* All occurrences of the token _Bordeaux_

```
Bordeaux
```

* All occurrences of named entities of type _LOCATION_

```
<Named entity.value=”LOC”/>
```

* All occurrences of named entities of type _WINE_

```
<Named entity.value=”WINE”/>
```

* All occurrences of named entities regardless of their types


```
<Named entity/>
```

### Queries over annotations linked to knowledge base concepts

* All mentions of wines under the _Bordeaux_ branch of the wine ontology

```
<Named entity.identifier=”Bordeaux”/>
```

* Appending -exact to the identifier field will limit the above query to only mentions directly 
linked to the Bordeaux branch of the ontology. No mentions linked to the Bordeaux subtypes
will be retrieved:


```
<Named entity.identifier-exact=”Bordeaux”/>
```

* A query can also directly refer the concept URI instead of its label. For retrieving all
 exact mentions of the Clos de Vougeot wine:

```
<Named entity.identifier-exact =
”http://www.w3.org/TR/2003/PR-owl-guide-20031209/wine#ClosDeVougeotCotesDOr”/>
```

### Complex queries

* Queries can be combined using operators such as within or containing. For retrieving all mentions 
of wines belonging to the _Burgundy_ or _Bordeaux_ types (and their subtypes), located 
inside a claim that matches the regular expression pattern __expensive.*__

```
(<Named entity.identifier=”Burgundy”/> | <Named entity.identifier=”Bordeaux”/>)
within (<Claim/> containing ”expensive.*”)
```

### To learn more

To learn more about MTAS implementation of CQP and its syntax, 
access [this link](https://meertensinstituut.github.io/mtas/search_cql.html).


