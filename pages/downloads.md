---
layout: page-fullwidth
title: "Downloads"
permalink: "/downloads/"
---

{% assign stable = site.data.releases | where: "status", "stable" | first %}

## INCEpTION {{ stable.version }}

[Release notes](https://github.com/inception-project/inception/releases/tag/inception-app-{{ stable.version }})

INCEpTION comes as a runnable Java JAR file. 
You can start it by simply double-clicking on it in  your file manager. 
You can also run it from the command line using `java -jar inception-app-standalone-{{ stable.version }}.jar`. 
INCEpTION will create a directory called `.inception` under your home directory and store its database and files there.

* [INCEpTION {{ stable.version }} (executable JAR)](https://github.com/inception-project/inception/releases/download/inception-app-webapp-{{ stable.version }}/inception-app-standalone-{{ stable.version }}.jar) <github-downloads user='inception-project' repo='inception' tag='inception-app-{{ stable.version }}' asset='inception-app-webapp-{{ stable.version }}-standalone.jar' ></github-downloads>
* [Installation instructions]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html#sect_installation) 
* [Upgrade instructions]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html#sect_upgrade) 
