---
layout: page-fullwidth
title: "Downloads (beta)"
permalink: "/downloads-beta/"
---

{% assign unstable = site.data.releases | where: "status", "unstable" | first %}
{% assign beta = site.data.releases | where: "status", "beta" | first %}

{% if beta %}
## INCEpTION {{ beta.version }}

**THIS PAGE CONTAINS PRE-RELEASE VERSIONS. USE AT YOUR OWN RISK.**

**Do not use this software for serious work** - before its final release, INCEpTION might change in
ways incompatible with this pre-release. Do not expect forthcoming beta versions or the next release
version of INCEpTION to be fully compatible with this beta version.

**Beta versions are slower than normal** - beta versions of INCEpTION perform various consistency
checks on annotated documents. These checks may significantly reduce response times, in particular
for documents with many annotations! If you get errors like "CAS Doctor found problems for user 
...", please contact us, e.g. by opening an issue.

When (not if) you discover bugs or hit problems with these versions, please report them in our [issue tracker](http://github.com/inception-project/inception/issues).

[Release notes](https://github.com/inception-project/inception/releases/tag/inception-app-{{ beta.version }})

You download a runnable JAR that can be started using a double-click in your file manager or on
the command line using `java -jar inception-app-standalone-{{ beta.version }}.jar`. INCEpTION will
create a directory called `.inception` under your home directory and store its database and files
there.

* [INCEpTION {{ beta.version }} standalone (executable JAR)](https://github.com/inception-project/inception/releases/download/inception-app-{{ beta.version }}/inception-app-standalone-{{ beta.version }}.jar) <github-downloads user='inception-project' repo='inception' tag='inception-app-{{ beta.version }}' asset='inception-app-standalone-{{ beta.version }}.jar' ></github-downloads>
* [JAR installation instructions]({{ unstable.user_guide_url }}#sect_installation)
* [JAR upgrade instructions]({{ unstable.user_guide_url }}#sect_upgrade) 

{% else %}
Currently, there are no beta versions available.
{% endif %}
