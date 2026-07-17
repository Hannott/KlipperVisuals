// Shared localization engine for KlipperVisuals.
// Included once per page via <script src="i18n.js"></script> in <head>,
// BEFORE nav.js and any page script that reads translated strings.
//
// Locale resources live under locales/<code>/<namespace>.js, each a plain
// script (no fetch(), so pages keep working when opened directly via
// file:// -- fetch() of local files is blocked by CORS in most browsers).
// Each resource file merges its own object onto window.KV_LOCALES.<code>.
//
// This file writes <script> tags for the "common" namespace (shared nav/
// palette/language strings) and the current page's own namespace (derived
// from the URL, e.g. shaper_tuning.html -> "shaper_tuning") for both the
// active locale and the "en" fallback -- so lookups never come up empty
// even if a translation is incomplete.
//
// Usage from page markup:
//   <span data-i18n="shaperTuning.heading">Shaper tuning</span>
//   <p data-i18n-html="shaperTuning.intro">...markup with <code>...</code>...</p>
//   <button data-i18n-attr="title:common.palette.fieldTitle">...</button>
// Usage from page scripts (dynamically built strings, chart labels, etc.):
//   KV_I18N.t("shaperTuning.status.loaded", { n: points.length })
//   KV_I18N.onChange(function () { ...repaint text that doesn't use data-i18n... })
(function () {
  // Add a locale code here (and drop locales/<code>/*.js next to the
  // existing ones) to make a new language available in the dropdown.
  var LOCALES = ["en", "no", "cs", "uk", "de"];
  var FALLBACK = "en";
  var FLAGS = {
    en: "🇬🇧", // GB flag
    no: "🇳🇴",
    cs: "🇨🇿",
    uk: "🇺🇦",
    de: "🇩🇪"
  };
  // Each language's own name for itself, shown in the dropdown regardless
  // of the currently active locale (an English speaker still sees "日本語").
  var NATIVE_NAMES = {
    en: "English",
    no: "Norsk",
    cs: "Čeština",
    uk: "Українська",
    de: "Deutsch"
  };
  var STORAGE_KEY = "kv-locale";

  window.KV_LOCALES = window.KV_LOCALES || {};

  function pageSlug() {
    var cur = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (cur === "" || cur.indexOf(".html") === -1) cur = "index.html";
    return cur.replace(/\.html$/, "");
  }
  var SLUG = pageSlug();

  function detectLocale() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    if (saved && LOCALES.indexOf(saved) !== -1) return saved;
    var langs = navigator.languages || [navigator.language || "en"];
    for (var i = 0; i < langs.length; i++) {
      var code = String(langs[i]).slice(0, 2).toLowerCase();
      if (LOCALES.indexOf(code) !== -1) return code;
    }
    return FALLBACK;
  }
  var locale = detectLocale();

  function writeLocaleScripts(code) {
    var namespaces = ["common", SLUG];
    for (var i = 0; i < namespaces.length; i++) {
      document.write('<script src="locales/' + code + '/' + namespaces[i] + '.js"><' + '/script>');
    }
  }
  // Synchronous document.write only works while the document is still being
  // parsed -- true here because i18n.js is loaded as a normal blocking
  // <script src> in <head>, before <body>.
  writeLocaleScripts(FALLBACK);
  if (locale !== FALLBACK) writeLocaleScripts(locale);

  function get(obj, path) {
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (obj == null) return undefined;
      obj = obj[parts[i]];
    }
    return obj;
  }
  function t(key, vars) {
    var val = get(window.KV_LOCALES[locale], key);
    if (val === undefined) val = get(window.KV_LOCALES[FALLBACK], key);
    if (val === undefined) return key;
    if (vars) {
      for (var k in vars) {
        if (Object.prototype.hasOwnProperty.call(vars, k)) {
          val = val.replace(new RegExp("\\{\\{" + k + "\\}\\}", "g"), vars[k]);
        }
      }
    }
    return val;
  }

  function apply(root) {
    root = root || document;
    var i, el, nodes;
    nodes = root.querySelectorAll("[data-i18n]");
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      el.textContent = t(el.getAttribute("data-i18n"));
    }
    nodes = root.querySelectorAll("[data-i18n-html]");
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    }
    nodes = root.querySelectorAll("[data-i18n-attr]");
    for (i = 0; i < nodes.length; i++) {
      el = nodes[i];
      var spec = el.getAttribute("data-i18n-attr").split("|");
      for (var j = 0; j < spec.length; j++) {
        var pair = spec[j].split(":");
        el.setAttribute(pair[0], t(pair[1]));
      }
    }
  }

  function ensureLocaleLoaded(code, cb) {
    if (window.KV_LOCALES[code]) return cb();
    var namespaces = ["common", SLUG];
    var remaining = namespaces.length;
    var done = function () { if (--remaining === 0) cb(); };
    for (var i = 0; i < namespaces.length; i++) {
      var s = document.createElement("script");
      s.src = "locales/" + code + "/" + namespaces[i] + ".js";
      s.onload = done;
      s.onerror = done;
      document.head.appendChild(s);
    }
  }
  function setLocale(code) {
    if (code === locale) return;
    ensureLocaleLoaded(code, function () {
      locale = code;
      try { localStorage.setItem(STORAGE_KEY, code); } catch (e) {}
      apply(document);
      window.dispatchEvent(new CustomEvent("kv-locale-change", { detail: { locale: code } }));
    });
  }

  window.KV_I18N = {
    names: LOCALES,
    flag: function (code) { return FLAGS[code] || ""; },
    nativeName: function (code) { return NATIVE_NAMES[code] || code; },
    locale: function () { return locale; },
    t: t,
    apply: apply,
    setLocale: setLocale,
    onChange: function (fn) { window.addEventListener("kv-locale-change", fn); }
  };

  function mount() { apply(document); }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
