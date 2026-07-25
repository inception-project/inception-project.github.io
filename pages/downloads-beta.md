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

[Release notes](https://github.com/inception-project/inception/releases/tag/inception-{{ beta.version }})


{% comment %}
The native installers are named after the base version without the beta suffix, e.g. the
inception-41.0-beta-2 release contains INCEpTION-41.0-x86_64.msi. The JAR keeps the full version.
{% endcomment %}
{% assign beta_base = beta.version | split: "-beta" | first %}
{% assign release_url = "https://github.com/inception-project/inception/releases" %}

### Native installers

* **Windows** — [INCEpTION {{ beta.version }} (MSI installer)]({{ release_url }}/download/inception-{{ beta.version }}/INCEpTION-{{ beta_base }}-x86_64.msi)
* **macOS (Apple Silicon)** — [INCEpTION {{ beta.version }} (DMG, aarch64)]({{ release_url }}/download/inception-{{ beta.version }}/INCEpTION-{{ beta_base }}-aarch64.dmg)
* **macOS (Intel)** — [INCEpTION {{ beta.version }} (DMG, x86_64)]({{ release_url }}/download/inception-{{ beta.version }}/INCEpTION-{{ beta_base }}-x86_64.dmg)

These installers bundle a Java runtime, so you do not need to install Java separately.

INCEpTION stores its database and files in a directory called `.inception` under your home
directory.

### Executable JAR (any operating system)

Requires a Java runtime. Start it by double-clicking it in your file manager or on the command line
using `java -jar inception-app-webapp-{{ beta.version }}-standalone.jar`.

* [INCEpTION {{ beta.version }} standalone (executable JAR)]({{ release_url }}/download/inception-{{ beta.version }}/inception-app-webapp-{{ beta.version }}-standalone.jar)
  ([signature]({{ release_url }}/download/inception-{{ beta.version }}/inception-app-webapp-{{ beta.version }}-standalone.jar.asc))

INCEpTION stores its database and files in a directory called `.inception` under your home
directory.

### Docker

The recommended way to run INCEpTION via Docker is with Docker Compose. Copy the
[Docker Compose file]({{ unstable.admin_guide_url }}#sect_docker_compose) from the administrator
guide into a folder, then run:

```
INCEPTION_VERSION={{ beta.version }} docker compose -p inception up -d
```

Then open <http://localhost:8080> in your browser. To stop INCEpTION again, run
`docker compose -p inception down`.

This keeps your data in Docker volumes that live outside the containers, so it survives stopping,
deleting and upgrading the containers.

See the [Docker instructions]({{ unstable.admin_guide_url }}#sect_docker) for running INCEpTION from
a plain `docker run` command, memory settings and UID/GID options.


### More

* [Installation instructions]({{ unstable.user_guide_url }}#sect_installation)
* [Upgrade instructions]({{ unstable.admin_guide_url }}#sect_upgrade)
* [All files for this release on GitHub]({{ release_url }}/tag/inception-{{ beta.version }})

{% else %}
Currently, there are no beta versions available.
{% endif %}
