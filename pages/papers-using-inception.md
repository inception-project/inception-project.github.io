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
{% comment %}
  Liquid has no `flatten`, so the join/split round-trip is how a list-valued
  field becomes a list of distinct values.

  `compact` drops the empty string the idiom otherwise yields for a paper that
  has no `languages` key: `map` returns nil for it, which the round-trip turns
  into "", rendering a blank <option> that silently clears the filter.

  Joined on "|" rather than "," because a label may itself contain a comma,
  which would split one value into two fragments. See the tasks below.
{% endcomment %}
{% assign languages = data.papers | map: "languages" | compact | join: "|" | split: "|" | uniq | sort %}
{% comment %}
  Multi-valued like languages, so the same round-trip and `compact` apply.

  The "|" delimiter matters: some task labels contain a comma, and splitting on
  "," tears those in half. That fails in two directions and neither looks like
  an error -- it renders fragments as if they were real options, and since
  `contains` on an array tests exact membership, each fragment counts zero
  while the labels it came from get no working option at all. No label contains
  "|", and the <li> attribute below is already joined on it.
{% endcomment %}
{% assign tasks = data.papers | map: "tasks" | compact | join: "|" | split: "|" | uniq | sort %}

{% comment %}
  The counts are rendered here so they are right before any JavaScript runs,
  and recomputed by paper-filters.js whenever another filter changes -- a
  static count contradicts the visible list the moment a filter is picked. The
  bare name is kept in data-label so the script can rebuild "Name (n)" without
  parsing its own output back apart.

  A count is "papers carrying this label". Only the single-valued facets
  partition the list; where a paper may carry several labels the counts sum to
  more than the number of papers.
{% endcomment %}
<div class="paper-filters" data-paper-filters hidden>
  <label>
    <span>Field</span>
    <select data-filter="domain">
      <option value="">All fields</option>
      {% for d in domains %}{% assign n = data.papers | where: "domain", d | size %}<option value="{{ d }}" data-label="{{ d }}">{{ d }} ({{ n }})</option>{% endfor %}
    </select>
  </label>
  <label>
    <span>Language annotated</span>
    <select data-filter="language">
      <option value="">All languages</option>
      {% for l in languages %}{% assign n = 0 %}{% for p in data.papers %}{% if p.languages contains l %}{% assign n = n | plus: 1 %}{% endif %}{% endfor %}<option value="{{ l }}" data-label="{{ l }}">{{ l }} ({{ n }})</option>{% endfor %}
    </select>
  </label>
  <label>
    <span>Task</span>
    <select data-filter="task">
      <option value="">All tasks</option>
      {% for t in tasks %}{% assign n = 0 %}{% for p in data.papers %}{% if p.tasks contains t %}{% assign n = n | plus: 1 %}{% endif %}{% endfor %}<option value="{{ t }}" data-label="{{ t }}">{{ t }} ({{ n }})</option>{% endfor %}
    </select>
  </label>
  <p class="paper-count" data-paper-count></p>
</div>

<ul class="paper-list" data-paper-list>
  {% assign sorted = data.papers | sort: "title" %}
  {% for p in sorted %}
  <li data-domain="{{ p.domain }}" data-languages="{{ p.languages | join: '|' }}" data-tasks="{{ p.tasks | join: '|' }}">
    {% if p.url %}<a href="{{ p.url }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}
    <div class="paper-meta">
      {% if p.venue %}<span class="venue">{{ p.venue }}</span>{% endif %}
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
  <strong>How this list was built.</strong> To compile this list, an AI was used to judge whether a
  publication citing INCEpTION was actually using it. The publications were discovered by automatic
  scans of the ACL Anthology and a set of other venues as well as by manual searches using internet
  search engines like Google and academic search engines like Google Scholar, Semantic Scholar, etc.
  The field, task and language labels shown for each paper were likewise assigned with the help of
  an AI. The language label relates to the language of the annotated data, not the paper. AIs make
  mistakes. Spotted a mistake in an entry?
  <a href="https://github.com/inception-project/inception/issues">Please let us know</a> and we
  will correct it.
</p>

<p class="paper-note">
  This is therefore <em>the papers we found</em> rather than everything ever published — work in
  venues we did not search is missing. A paper is listed only if we could link to a public version
  of it, since a claim you cannot check is not worth much.
</p>

<script src="{{ site.url }}/assets/js/paper-filters.js" defer></script>
