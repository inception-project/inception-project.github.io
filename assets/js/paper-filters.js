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

  var items = Array.prototype.slice.call(list.querySelectorAll("li"));
  var counter = panel.querySelector("[data-paper-count]");
  var empty = document.querySelector("[data-paper-empty]");
  var selects = Array.prototype.slice.call(panel.querySelectorAll("[data-filter]"));

  function matches(li, domain, language) {
    if (domain && li.getAttribute("data-domain") !== domain) return false;
    if (language) {
      var langs = (li.getAttribute("data-languages") || "").split("|");
      if (langs.indexOf(language) === -1) return false;
    }
    return true;
  }

  /* How many papers an option WOULD yield, given the other filter only.
   *
   * Counting against both filters would be self-defeating: with English
   * selected, every other language would count 0 and the whole list would grey
   * itself out. So each dropdown is counted as though its own value were unset,
   * which is the number a reader is actually asking for -- "if I switch to
   * this, how many do I get?".
   */
  function tally(which, domain, language) {
    var counts = {};
    items.forEach(function (li) {
      if (!matches(li, which === "domain" ? "" : domain, which === "language" ? "" : language)) {
        return;
      }
      var values =
        which === "domain"
          ? [li.getAttribute("data-domain") || ""]
          : (li.getAttribute("data-languages") || "").split("|");
      values.forEach(function (v) {
        if (v) counts[v] = (counts[v] || 0) + 1;
      });
    });
    return counts;
  }

  /* Rewrite one dropdown's labels to "Name (n)", hiding what cannot be picked.
   *
   * A zero-yield option is HIDDEN rather than greyed out, which is the opposite
   * of the usual advice and is driven by the shape of this data. Greying is for
   * when dead options are the exception; here they are the rule -- measured
   * across all 13 fields, picking one leaves between 1 and 17 of the 40
   * languages reachable, so every single field greys out 23 to 39 of them. A
   * dropdown that is 88% struck through reads as broken, and it still costs a
   * 40-item scan to find the 5 live entries.
   *
   * The list is long and alphabetical, so removing entries does not disorient
   * the way it would in a short menu, and the counts on what remains say what
   * happened. The selected option is never hidden: a <select> cannot reliably
   * display a hidden selection, and losing it would silently reset the filter.
   */
  function relabel(which, counts) {
    var select = panel.querySelector('[data-filter="' + which + '"]');
    Array.prototype.forEach.call(select.options, function (o) {
      if (!o.value) return; // the "All ..." entry
      var n = counts[o.value] || 0;
      o.textContent = (o.getAttribute("data-label") || o.value) + " (" + n + ")";
      o.hidden = n === 0 && o.value !== select.value;
      o.disabled = o.hidden;
    });
  }

  function apply() {
    var domain = panel.querySelector('[data-filter="domain"]').value;
    var language = panel.querySelector('[data-filter="language"]').value;
    var shown = 0;

    items.forEach(function (li) {
      var ok = matches(li, domain, language);
      li.hidden = !ok;
      if (ok) shown++;
    });

    relabel("domain", tally("domain", domain, language));
    relabel("language", tally("language", domain, language));

    if (empty) empty.hidden = shown !== 0;
    if (counter) {
      counter.textContent =
        shown === items.length
          ? items.length + " papers"
          : shown + " of " + items.length + " papers";
    }

    // Keep the filter state in the URL so a filtered view can be linked to.
    var params = new URLSearchParams();
    if (domain) params.set("field", domain);
    if (language) params.set("language", language);
    var qs = params.toString();
    history.replaceState(null, "", qs ? "?" + qs : location.pathname);
  }

  // Restore state from the URL, ignoring values that are not in the list.
  var initial = new URLSearchParams(location.search);
  function restore(name, param) {
    var value = initial.get(param);
    if (!value) return;
    var select = panel.querySelector('[data-filter="' + name + '"]');
    var known = Array.prototype.some.call(select.options, function (o) {
      return o.value === value;
    });
    if (known) select.value = value;
  }
  restore("domain", "field");
  restore("language", "language");

  selects.forEach(function (s) {
    s.addEventListener("change", apply);
  });

  panel.hidden = false;
  apply();
})();
