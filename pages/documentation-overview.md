---
layout: page-fullwidth
title: "Documentation"
permalink: "/documentation/"
---

{% assign stable = site.data.releases | where: "status", "stable" | first %}
{% assign unstable = site.data.releases | where: "status", "unstable" | first %}

## INCEpTION {{ stable.version }}
_latest release_

* [User Guide]({{ site.url }}/releases/{{ stable.version }}/docs/user-guide.html)
* [Admin Guide]({{ site.url }}/releases/{{ stable.version }}/docs/admin-guide.html)
* [Developer Guide]({{ site.url }}/releases/{{ stable.version }}/docs/developer-guide.html)

{% if unstable %}
----

#### INCEpTION {{ unstable.version }}
_upcoming release - links may be temporarily broken while a build is in progress_

* [User Guide]({{ unstable.user_guide_url }})
* [Admin Guide]({{ unstable.admin_guide_url }})
* [Developer Guide]({{ unstable.developer_guide_url }})
{% endif %}

----

#### Additional material

* [INCEpTIOn 20.x Intro Slide Deck]({{ site.url }}/publications/INCEpTION-20.x-Intro.pdf})
