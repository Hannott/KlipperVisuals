// Norwegian (Bokmål) -- strings for smoother_vs_shaper.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.smoother_vs_shaper = {
  title: "Smoothers vs shapers — Kalico input-smoothers",
  heading: "Smoothers vs shapers",
  intro: "Kalicos input-<em>smoothers</em> erstatter en klassisk shapers diskrete impulser med et glatt polynomvindu <code>w(t)</code> (en kontinuerlig impulsdistribusjon). Sammenlign en shaper mot en smoother på de samme vibrasjonsreduksjonsaksene og i tidsdomenet. Smoothers er en Kalico-funksjon — finnes ikke i oppstrøms Klipper.",
  controls: {
    shaperLabel: "impuls-shaper",
    smootherLabel: "smoother",
    shaperFreq: "shaper_freq (Hz)",
    dampingRatio: "damping_ratio"
  },
  shaperOptions: {
    none: "— ingen —",
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    ei2: "2hump_ei",
    ei3: "3hump_ei"
  },
  smootherOptions: {
    none: "— ingen —",
    smoothZv: "smooth_zv",
    smoothMzv: "smooth_mzv",
    smoothEi: "smooth_ei",
    smoothEi2: "smooth_2hump_ei",
    smoothZvdEi: "smooth_zvd_ei",
    smoothSi: "smooth_si"
  },
  legendHint: "Klikk på en legendeoppføring i et av diagrammene for å skjule eller vise den linjen.",
  captions: {
    residualVsFreq: "restvibrasjon mot frekvens <span style=\"color:var(--text-muted)\">(lavere = bedre undertrykkelse)</span>",
    kernelTimeDomain: "kjerne i tidsdomenet <span style=\"color:var(--text-muted)\">(impulsamplituder mot smootherens vektdensitet; begge integrerer til 1)</span>"
  },
  note: "En <strong>shaper</strong> påfører noen få diskrete impulser; en <strong>smoother</strong> sprer den samme korrigerende effekten over et kontinuerlig vindu, noe som gir jevnere bevegelse og ingen plutselige hastighetssprang. Smoothers trenger generelt et lengre vindu (større <code>t_sm</code>) enn en shaper av samme familie for sammenlignbar undertrykkelse. <code>damping_ratio</code> her er skriverens antatte demping som brukes til å evaluere restvibrasjon.",
  cards: {
    shaperDuration: "shaperens varighet",
    shaperWorstResidual: "shaperens verste restvibrasjon",
    smootherTsm: "smootherens t_sm",
    smootherWorstResidual: "smootherens verste restvibrasjon"
  },
  footer: "Smoother-vinduer <code>w(t)=Σ Cₖ tᵏ</code> over <code>[−t_sm/2, t_sm/2]</code>, <code>t_sm = factor/freq</code>, koeffisienter fra <code>shaper_defs.py</code> (<code>get_*_smoother</code>). Responsen evalueres ved å behandle vinduet som et tett impulstog og anvende den klassiske amplitudeformelen for restvibrasjon. Kalico legger til en per-akse <code>damping_ratio</code> for smoothers (brukt ved tilpasning av den synkroniserte ekstruder-smootheren); tidligere versjoner antok en fast verdi på 0.1. Rendret med Chart.js.",
  chart: {
    datasetShaper: "shaper",
    datasetSmoother: "smoother",
    axisResidual: "restvibrasjon",
    axisFrequency: "frekvens (Hz)",
    axisKernelWeight: "kjernevekt",
    axisTime: "tid (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
