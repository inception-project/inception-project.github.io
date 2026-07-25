---
layout: page-fullwidth
title: "Downloads"
permalink: "/downloads/"
---

{% assign stable = site.data.releases | where: "status", "stable" | first %}
{% assign release_url = "https://github.com/inception-project/inception/releases" %}

## INCEpTION {{ stable.version }}

[Release notes]({{ release_url }}/tag/inception-{{ stable.version }})

Choose your operating system below. INCEpTION stores its database and files in a directory called
`.inception` under your home directory.

### Windows

Download and run the installer. It bundles a Java runtime, so you do not need to install Java
separately.

* [INCEpTION {{ stable.version }} for Windows (MSI installer, 64bit)]({{ release_url }}/download/inception-{{ stable.version }}/INCEpTION-{{ stable.version }}-x86_64.msi)

### macOS

Download and open the disk image, then drag INCEpTION into your applications folder. These bundle a
Java runtime, so you do not need to install Java separately. If you are unsure which one you need,
check whether your Mac has an Apple Silicon or an Intel processor.

* [INCEpTION {{ stable.version }} for macOS — Apple Silicon (DMG, aarch64)]({{ release_url }}/download/inception-{{ stable.version }}/INCEpTION-{{ stable.version }}-aarch64.dmg)
* [INCEpTION {{ stable.version }} for macOS — Intel (DMG, x86_64)]({{ release_url }}/download/inception-{{ stable.version }}/INCEpTION-{{ stable.version }}-x86_64.dmg)

### Linux

There is no Linux-specific installer package yet. Use the executable JAR below, which runs on any
Linux distribution, or run INCEpTION [via Docker](#docker).

Install a Java runtime (version 21 or higher) using your distribution's package manager, for example
`apt install openjdk-21-jdk` on Debian and Ubuntu, then start INCEpTION with:

```
java -jar inception-app-webapp-{{ stable.version }}-standalone.jar
```

Then open <http://localhost:8080> in your browser.

### Executable JAR (any operating system)

Runs anywhere a Java runtime (version 21 or higher) is available. Start it by double-clicking it in
your file manager, or from the command line using
`java -jar inception-app-webapp-{{ stable.version }}-standalone.jar`.

* [INCEpTION {{ stable.version }} (executable JAR)]({{ release_url }}/download/inception-{{ stable.version }}/inception-app-webapp-{{ stable.version }}-standalone.jar)
  ([signature]({{ release_url }}/download/inception-{{ stable.version }}/inception-app-webapp-{{ stable.version }}-standalone.jar.asc))

### Docker

If you have Docker installed, the recommended way to run INCEpTION is with Docker Compose. Copy the
[Docker Compose file]({{ site.url }}/releases/{{ stable.version }}/docs/admin-guide.html#sect_docker_compose)
from the administrator guide into a folder, then run:

```
INCEPTION_VERSION={{ stable.version }} docker compose -p inception up -d
```

Then open <http://localhost:8080> in your browser. To stop INCEpTION again, run
`docker compose -p inception down`.

This keeps your data in Docker volumes that live outside the containers, so it survives stopping,
deleting and upgrading the containers. It also runs INCEpTION against a separate MariaDB database
rather than the built-in one, which is what we recommend for anything beyond trying it out.

To upgrade, start the containers again with a newer `INCEPTION_VERSION` — your data is picked up
again from the volumes.

If you prefer to keep the data in folders on your computer instead of in Docker volumes — for example
to place a custom `settings.properties` next to it — set `INCEPTION_HOME` and `INCEPTION_DB_HOME` to
the paths you want before starting. Note that you cannot freely switch between the two afterwards, so
decide before you start annotating.

See the [Docker instructions]({{ site.url }}/releases/{{ stable.version }}/docs/admin-guide.html#sect_docker)
for running INCEpTION from a plain `docker run` command, memory settings and UID/GID options.

### More

* [Installation instructions]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html#sect_installation)
* [Upgrade instructions]({{ site.url }}/releases/{{ stable.version }}/docs/admin-guide.html#sect_upgrade)
* [All files for this release on GitHub]({{ release_url }}/tag/inception-{{ stable.version }})
* [Older releases]({{ release_url }})
