/* Filters for the "Papers using INCEpTION" list.
 *
 * Progressive enhancement: the full list is rendered server-side by Jekyll and
 * is complete and readable with JavaScript off. This file only adds filtering,
 * so the controls stay `hidden` until it runs -- no dead <select> elements for
 * anyone the script does not reach.
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

  function apply() {
    var domain = panel.querySelector('[data-filter="domain"]').value;
    var language = panel.querySelector('[data-filter="language"]').value;
    var shown = 0;

    items.forEach(function (li) {
      var ok = matches(li, domain, language);
      li.hidden = !ok;
      if (ok) shown++;
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
