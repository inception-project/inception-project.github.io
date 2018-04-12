---
layout: page-fullwidth
title: "Downloads"
permalink: "/downloads/"
---

{% assign stable = site.data.releases | where: "status", "stable" | first %}

## INCEpTION {{ stable.version }}

[Release notes](https://github.com/inception-project/inception/releases/tag/inception-app-{{ stable.version }})

* **INCEpTION is in early stages of development.**
* **We provide EARLY-ACCESS software on this page.**
* **Individual functionalities of the software may contain not work as expected, be incomplete, or be
entirely missing.**
* **Upgrades to later versions may not be seamless.**

You download a runnable JAR that can be started using a double-click in your file manager or on
the command line using `java -jar inception-app-standalone-{{ stable.version }}.jar`. INCEpTION will
create a directory called `.inception` under your home directory and store its database and files
there.

* [INCEpTION {{ stable.version }} standalone (executable JAR)](https://github.com/inception-project/inception/releases/download/inception-app-{{ stable.version }}/inception-app-standalone-{{ stable.version }}.jar) <github-downloads user='inception-project' repo='inception' tag='inception-app-{{ stable.version }}' asset='inception-app-standalone-{{ stable.version }}.jar' ></github-downloads>
* [JAR installation instructions]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html#sect_installation) 
* [JAR upgrade instructions]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html#sect_upgrade) 
