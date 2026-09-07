/* Filters for the "Papers using INCEpTION" list.
 *
 * Progressive enhancement: the full list is rendered server-side by Jekyll and
 * is complete and readable with JavaScript off. This file only adds filtering,
 * so the controls stay `hidden` until it runs -- no dead <select> elements for
 * anyone the script does not reach.
 *
 * The option counts are likewise rendered by Jekyll and only RE-computed here.
 * Without this file the dropdowns are hidden anyway, so the served numbers are
 * never seen stale; with it, they are corrected before the panel is unhidden.
 */
(function () {
  "use strict";

  var panel = document.querySelector("[data-paper-filters]");
  var list = document.querySelector("[data-paper-list]");
  if (!panel || !list) return;

  /* The filters, as data rather than as branches.
   *
   * `name` is the [data-filter] value, `attr` the <li> attribute it reads,
   * `param` its query-string key, and `multi` marks an attribute holding
   * several "|"-joined values (a paper annotates many languages and several
   * tasks, but has one field). Adding a facet here is the whole change --
   * matching, counting, relabelling and the URL round-trip all iterate this
   * list, so a new one cannot be half-wired the way an earlier one was.
   *
   * `attr` is spelled out rather than derived from `name`, because the two
   * genuinely differ: the filter is "language" but the attribute is the plural
   * `data-languages`. Deriving it read a `data-language` that is not there,
   * which is not an error -- getAttribute returns null, every paper looks like
   * it annotates nothing, and the language facet silently matches zero papers
   * while the others keep working.
   */
  var FILTERS = [
    { name: "domain", attr: "data-domain", param: "field", multi: false },
    { name: "language", attr: "data-languages", param: "language", multi: true },
    { name: "task", attr: "data-tasks", param: "task", multi: true }
  ];

  var items = Array.prototype.slice.call(list.querySelectorAll("li"));
  var counter = panel.querySelector("[data-paper-count]");
  var empty = document.querySelector("[data-paper-empty]");
  var selects = Array.prototype.slice.call(panel.querySelectorAll("[data-filter]"));

  function values(li, f) {
    var raw = li.getAttribute(f.attr) || "";
    return f.multi ? raw.split("|") : [raw];
  }

  /* Does this paper satisfy `state`, optionally ignoring one facet?
   *
   * `except` is what makes the counts below mean "if I switch to this", and is
   * the only reason matching is not a plain loop over all three.
   */
  function matches(li, state, except) {
    return FILTERS.every(function (f) {
      if (f.name === except) return true;
      var want = state[f.name];
      if (!want) return true;
      return values(li, f).indexOf(want) !== -1;
    });
  }

  /* How many papers an option WOULD yield, given the OTHER filters only.
   *
   * Counting against every filter including its own would be self-defeating:
   * with English selected, every other language would count 0 and the whole
   * list would grey itself out. So each dropdown is counted as though its own
   * value were unset, which is the number a reader is actually asking for --
   * "if I switch to this, how many do I get?".
   */
  function tally(f, state) {
    var counts = {};
    items.forEach(function (li) {
      if (!matches(li, state, f.name)) return;
      values(li, f).forEach(function (v) {
        if (v) counts[v] = (counts[v] || 0) + 1;
      });
    });
    return counts;
  }

  /* Rewrite one dropdown's labels to "Name (n)", hiding what cannot be picked.
   *
   * A zero-yield option is HIDDEN rather than greyed out, which is the opposite
   * of the usual advice. Greying suits menus where dead options are the
   * exception; in these lists most combinations are dead, and a dropdown that
   * is mostly struck through reads as broken while still costing a full scan
   * to find the few live entries.
   *
   * The lists are long and alphabetical, so removing entries does not
   * disorient the way it would in a short menu, and the counts on what remains
   * say what happened. The selected option is never hidden: a <select> cannot
   * reliably display a hidden selection, and losing it would silently reset
   * the filter.
   */
  function relabel(f, counts) {
    var select = panel.querySelector('[data-filter="' + f.name + '"]');
    if (!select) return;
    Array.prototype.forEach.call(select.options, function (o) {
      if (!o.value) return; // the "All ..." entry
      var n = counts[o.value] || 0;
      o.textContent = (o.getAttribute("data-label") || o.value) + " (" + n + ")";
      o.hidden = n === 0 && o.value !== select.value;
      o.disabled = o.hidden;
    });
  }

  function apply() {
    var state = {};
    FILTERS.forEach(function (f) {
      var select = panel.querySelector('[data-filter="' + f.name + '"]');
      state[f.name] = select ? select.value : "";
    });

    var shown = 0;
    items.forEach(function (li) {
      var ok = matches(li, state);
      li.hidden = !ok;
      if (ok) shown++;
    });

    FILTERS.forEach(function (f) {
      relabel(f, tally(f, state));
    });

    if (empty) empty.hidden = shown !== 0;
    if (counter) {
      counter.textContent =
        shown === items.length
          ? items.length + " papers"
          : shown + " of " + items.length + " papers";
    }

    // Keep the filter state in the URL so a filtered view can be linked to.
    var params = new URLSearchParams();
    FILTERS.forEach(function (f) {
      if (state[f.name]) params.set(f.param, state[f.name]);
    });
    var qs = params.toString();
    history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  }

  // Restore state from the URL, ignoring values that are not in the list.
  var initial = new URLSearchParams(location.search);
  FILTERS.forEach(function (f) {
    var value = initial.get(f.param);
    if (!value) return;
    var select = panel.querySelector('[data-filter="' + f.name + '"]');
    if (!select) return;
    var known = Array.prototype.some.call(select.options, function (o) {
      return o.value === value;
    });
    if (known) select.value = value;
  });

  selects.forEach(function (s) {
    s.addEventListener("change", apply);
  });

  panel.hidden = false;
  apply();
})();
