// Shared navigation bar for KlipperVisuals.
// Injected into every page via <script src="nav.js"></script>.
// Edit the link list or styles here once to update all pages.
//
// This file also owns the site's shared "data color" palette (the colors
// charts use for lines/bars/markers — --blue/--amber/--teal/--purple/--red/
// --cyan). Two colorblind-safe qualitative palettes are offered (Okabe & Ito,
// and Tol's "Bright"); the user's pick is applied as inline CSS custom
// properties on <html> (which outrank any page-local :root fallback),
// persisted in localStorage, and re-applied on every page load. A
// "kv-palette-change" event fires on window whenever the palette (or the
// light/dark scheme) changes, so each page's own chart code can repaint
// without a reload — see KV_PALETTE.onChange in each page's script.
(function () {
  // ---- palettes (light/dark variants of 6 ordinal color "roles") ----
  // Okabe, M. & Ito, K. (2008), "Color Universal Design" -- the standard
  // 8-color colorblind-safe qualitative set, minus black/yellow (poor as
  // thin chart lines against this site's surfaces).
  var PALETTES = {
    okabe_ito: {
      label: "Okabe & Ito",
      light: { blue: "#0072B2", amber: "#E69F00", teal: "#009E73", purple: "#CC79A7", red: "#D55E00", cyan: "#56B4E9" },
      dark:  { blue: "#5AA6D9", amber: "#F2B33D", teal: "#33C79A", purple: "#DDA3C4", red: "#E8874D", cyan: "#8AD0F5" }
    },
    // Paul Tol's "Bright" qualitative palette (https://sronpersonalpages.nl/~pault/) --
    // designed for line/scatter charts, colorblind-safe and print-friendly.
    tol: {
      label: "Tol",
      light: { blue: "#4477AA", amber: "#CCBB44", teal: "#228833", purple: "#AA3377", red: "#EE6677", cyan: "#66CCEE" },
      dark:  { blue: "#6FA0D6", amber: "#DDCB66", teal: "#4CB864", purple: "#C868A0", red: "#F28794", cyan: "#8AD8F2" }
    }
  };
  var STORAGE_KEY = "kv-palette";
  var root = document.documentElement;
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function currentPaletteName() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    return (saved && PALETTES[saved]) ? saved : "okabe_ito";
  }
  function applyPalette(name, silent) {
    var pal = PALETTES[name] || PALETTES.okabe_ito;
    var vars = media.matches ? pal.dark : pal.light;
    for (var role in vars) root.style.setProperty("--" + role, vars[role]);
    try { localStorage.setItem(STORAGE_KEY, name); } catch (e) {}
    if (!silent) window.dispatchEvent(new CustomEvent("kv-palette-change", { detail: { name: name } }));
  }
  // Apply immediately (before body/charts exist) so every page's chart script
  // sees the right --blue/--amber/etc. the first time it reads them.
  var activeName = currentPaletteName();
  applyPalette(activeName, true);
  // Keep the light/dark variant in sync with the OS, without losing the
  // user's palette choice.
  media.addEventListener("change", function () { applyPalette(currentPaletteName()); });

  // Small helper pages can use to repaint charts on palette change without
  // needing to know about localStorage/media queries themselves:
  //   KV_PALETTE.onChange(function(){ ...reread --blue etc., chart.update() ... });
  window.KV_PALETTE = {
    names: Object.keys(PALETTES),
    labels: PALETTES,
    onChange: function (fn) { window.addEventListener("kv-palette-change", fn); }
  };

  var LINKS = [
    ["nonlinear_pa_explorer.html", "Pressure advance"],
    ["shaper_tuning.html", "Shaper tuning"],
    ["smoother_vs_shaper.html", "Smoothers"],
    ["extruder_smoother_fit.html", "Extruder fit"],
    ["resonance_excitation.html", "Resonance test"],
    ["shaper_estimation_method.html", "Estimation"]
  ];
  var WIDTH = "1040px"; // must match .wrap max-width on the pages

  var cur = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (cur === "") cur = "index.html";

  var css = [
    ".kv-nav{position:sticky;top:0;z-index:20;background:var(--surface-0);border-bottom:.5px solid var(--border);}",
    ".kv-nav-inner{max-width:" + WIDTH + ";margin:0 auto;padding:.62rem 1.25rem;display:flex;flex-wrap:wrap;align-items:center;gap:6px 18px;font-size:14px;line-height:1.4;}",
    ".kv-nav a{text-decoration:none;}",
    ".kv-nav .brand{font-weight:500;color:var(--text-primary);margin-right:auto;padding-bottom:3px;border-bottom:2px solid transparent;}",
    ".kv-nav .links{display:flex;flex-wrap:wrap;gap:12px 16px;}",
    ".kv-nav .links a{color:var(--text-secondary);padding-bottom:3px;border-bottom:2px solid transparent;}",
    ".kv-nav .links a:hover{color:var(--text-primary);}",
    ".kv-nav a.current{color:var(--blue);border-bottom-color:var(--blue);}",
    ".kv-nav .palette-wrap{display:flex;flex-direction:column;align-items:flex-end;gap:2px;margin-left:8px;}",
    ".kv-nav .palette-label{font-size:10px;letter-spacing:.05em;text-transform:uppercase;color:var(--text-muted);}",
    ".kv-nav .palette{font-family:inherit;font-size:12.5px;padding:4px 6px;border-radius:6px;border:.5px solid var(--border);background:var(--surface-2);color:var(--text-secondary);}",
    ".kv-nav .palette:hover{color:var(--text-primary);}"
  ].join("");
  var st = document.createElement("style");
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  var brandCur = cur === "index.html" ? " current" : "";
  var h = '<div class="kv-nav-inner"><a class="brand' + brandCur + '" href="index.html">KlipperVisuals</a><nav class="links">';
  for (var i = 0; i < LINKS.length; i++) {
    var isCur = cur === LINKS[i][0].toLowerCase();
    h += "<a" + (isCur ? ' class="current" aria-current="page"' : "") + ' href="' + LINKS[i][0] + '">' + LINKS[i][1] + "</a>";
  }
  h += "</nav>";
  h += '<div class="palette-wrap"><label class="palette-label" for="kv-palette-select">Color palette</label>';
  h += '<select class="palette" id="kv-palette-select" title="Chart color palette (colorblind-safe)">';
  for (var p = 0; p < window.KV_PALETTE.names.length; p++) {
    var name = window.KV_PALETTE.names[p];
    h += '<option value="' + name + '"' + (name === activeName ? " selected" : "") + ">" + PALETTES[name].label + "</option>";
  }
  h += "</select></div>";
  h += "</div>";

  function mount() {
    var header = document.createElement("header");
    header.className = "kv-nav";
    header.innerHTML = h;
    document.body.insertBefore(header, document.body.firstChild);
    document.getElementById("kv-palette-select").addEventListener("change", function () {
      applyPalette(this.value);
    });
  }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
