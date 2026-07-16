// Norwegian (Bokmål) -- strings for extruder_smoother_fit.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.extruder_smoother_fit = {
  title: "Tilpasning av ekstruder-smoother-kjerne — Klipper / Kalico",
  heading: "Tilpasning av ekstruder-smoother-kjerne",
  intro: "Når input shaping er aktiv, avviker verktøyhodets faktiske hastighet fra den kommanderte. For å holde pressure advance synkronisert konvolverer ekstruderen bevegelsen med en polynomkjerne <code>w(t)</code> tilpasset for å tilnærme den shapede verktøyhode-hastigheten. Alle PA-modeller (lineær, <code>tanh</code>, <code>recipr</code>) bruker denne glattede hastigheten, så kjernekvaliteten har betydning for alle. Dette sammenligner den tilpassede kjernen <strong>før</strong> og <strong>etter</strong> omarbeidingen av <code>extruder_smoother.py</code> &mdash; analytiske hastighetsmål, begrenset (KKT) minste kvadraters metode, en velkondisjonert Legendre-basis, og myk ikke-negativitet.",
  groupLabel: "input-shaper / smoother",
  legendHint: "Klikk på en legendeoppføring for å skjule eller vise den linjen.",
  caption: 'tilpasset kjerne mot dens målhastighetsprofil <span style="color:var(--text-muted)">(normalisert tid; kjernen bør følge målet)</span>',
  footer: 'Kjerner generert ved å kjøre den faktiske vertskoden fra <code>upstream/bleeding-edge-v2</code> (gammel) og den omarbeidede <code>extruder_smoother.py</code> (ny) ved dempingsforhold 0.1, og deretter evaluere det tilpassede polynomet <code>w(t)</code> mot den båndgjennomsnittede analytiske målhastigheten. Tilpasningsfeil er den relative RMS-verdien av kjerne minus mål; størrelsene her bruker båndgjennomsnitt og er indikative &mdash; se <a href="https://github.com/KalicoCrew/kalico/pull/909">KalicoCrew/kalico#909</a> for prosjektets valideringsfigurer (f.eks. produserer et 100&rarr;20 mm/s-hjørne en overekstruderingstopp på 8.4 mm/s med den gamle 3hump_ei-kjernen mot 2.3 mm/s med den nye). Rendret med Chart.js.',
  chart: {
    tooltipTau: "tau = {{tau}}",
    tooltipLabel: "{{label}}: {{value}}",
    axisX: "normalisert tid  tau = t / t_sm",
    axisY: "kjernevekt  w(t)*t_sm",
    datasetTarget: "mål (ideal)",
    datasetOld: "gammel kjerne",
    datasetNew: "ny kjerne"
  },
  shapers: {
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    "2hump_ei": "2hump_ei",
    "3hump_ei": "3hump_ei",
    smooth_zv: "smooth_zv",
    smooth_mzv: "smooth_mzv",
    smooth_ei: "smooth_ei",
    smooth_2hump_ei: "smooth_2hump_ei",
    smooth_zvd_ei: "smooth_zvd_ei",
    smooth_si: "smooth_si"
  },
  cards: {
    fitErrorOld: "tilpasningsfeil — gammel",
    fitErrorNew: "tilpasningsfeil — ny",
    improvement: "forbedring",
    improvementValue: "{{factor}}× lavere",
    improvementNone: "—"
  },
  notes: {
    threeHumpEi: "<strong>3hump_ei får den største korrigeringen.</strong> Den gamle kjernen svinger bort fra målet nær sentrum (den stiger mens målet dupper), noe som desynkroniserer pressure advance gjennom trinnlignende hastighetsendringer. På et 100&rarr;20&nbsp;mm/s-hjørne med printerresonansen innenfor designbåndet til 3hump_ei gir dette en <strong>overekstruderingstransient på 8.4&nbsp;mm/s med den gamle kjernen mot 2.3&nbsp;mm/s med den nye</strong> (ifølge PR&nbsp;#909). Den nye kjernen følger målet gjennom hele vinduet.",
    smoothPrefixed: "<code>{{name}}</code> var allerede godt tilpasset; omarbeidingen fjerner hovedsakelig finittdifferanse- og kondisjoneringsfeil, og halverer omtrent en allerede liten tilpasningsfeil. Uendret oppførsel på reelle bevegelser (ingen regresjon).",
    default: "<code>{{name}}</code>: den nye tilpasningen følger målhastigheten tettere, og reduserer den relative RMS-tilpasningsfeilen. Gevinsten er størst der målet har skarpe trekk som den gamle finittdifferanse-tilpasningen visket ut eller overskjøt."
  }
};
