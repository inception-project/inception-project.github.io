---
layout: page-fullwidth
title: "Papers using INCEpTION"
permalink: "/papers-using-inception/"
---

{% assign data = site.data.papers %}

Research groups use INCEpTION to build annotated corpora across a wide range of fields and
languages. Below are **{{ data.count }} papers from {{ data.window_from }} and {{ data.window_to }}**
that used it for their own annotation work.

Are we missing your paper? [Let us know](https://github.com/inception-project/inception/issues) and
we will add it.

{% assign domains = data.papers | map: "domain" | uniq | sort %}
{% assign languages = data.papers | map: "languages" | join: "," | split: "," | uniq | sort %}

<div class="paper-filters" data-paper-filters hidden>
  <label>
    <span>Field</span>
    <select data-filter="domain">
      <option value="">All fields</option>
      {% for d in domains %}<option value="{{ d }}">{{ d }}</option>{% endfor %}
    </select>
  </label>
  <label>
    <span>Language annotated</span>
    <select data-filter="language">
      <option value="">All languages</option>
      {% for l in languages %}<option value="{{ l }}">{{ l }}</option>{% endfor %}
    </select>
  </label>
  <p class="paper-count" data-paper-count></p>
</div>

<ul class="paper-list" data-paper-list>
  {% assign sorted = data.papers | sort: "title" %}
  {% for p in sorted %}
  <li data-domain="{{ p.domain }}" data-languages="{{ p.languages | join: '|' }}">
    {% if p.url %}<a href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}
    <div class="paper-meta">
      <span class="venue">{{ p.venue }}</span>
      <span class="domain">{{ p.domain }}</span>
      {% if p.material %}<span class="material">{{ p.material }}</span>{% endif %}
      {% if p.tasks %}{% for t in p.tasks %}<span class="task">{{ t }}</span>{% endfor %}{% endif %}
    </div>
  </li>
  {% endfor %}
</ul>

<p class="paper-empty" data-paper-empty hidden>No papers match that combination.</p>

<hr/>

<p class="paper-note">
  <strong>How this list was built.</strong> Every entry was checked by hand: the paper had to run
  INCEpTION for its own annotation, so papers that only cite it, compare it, or evaluated and
  rejected it are not listed. The papers were found by searching the ACL Anthology and a set of
  other venues, which means this is <em>the papers we found</em> rather than everything ever
  published — work in venues we did not search is missing. The language shown is the language of
  the annotated data, not of the paper.
  Spotted a mistake in an entry?
  <a href="https://github.com/inception-project/inception/issues">Please let us know</a> and we
  will correct it.
</p>

<script src="{{ site.url }}/assets/js/paper-filters.js" defer></script>
