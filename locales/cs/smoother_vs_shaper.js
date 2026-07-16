// Czech (Čeština) -- strings for smoother_vs_shaper.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.smoother_vs_shaper = {
  title: "Vyhlazovače vs tvarovače — Kalico vstupní vyhlazovače",
  heading: "Vyhlazovače vs tvarovače",
  intro: "Kalico vstupní <em>vyhlazovače</em> nahrazují diskrétní impulsy klasického tvařovače hladkou polynomiální funkcí <code>w(t)</code> (spojité rozdělení impulsu). Porovnávejte libovolný tvořovač s libovolným vyhlazovačem na stejných osách potlačení vibrací a v časové oblasti. Vyhlazovače jsou vlastností Kalica — nejsou přítomny v hlavní lince Klipperu.",
  controls: {
    shaperLabel: "impulzní tvořovač",
    smootherLabel: "vyhlazovač",
    shaperFreq: "shaper_freq (Hz)",
    dampingRatio: "damping_ratio"
  },
  shaperOptions: {
    none: "— žádný —",
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    ei2: "2hump_ei",
    ei3: "3hump_ei"
  },
  smootherOptions: {
    none: "— žádný —",
    smoothZv: "smooth_zv",
    smoothMzv: "smooth_mzv",
    smoothEi: "smooth_ei",
    smoothEi2: "smooth_2hump_ei",
    smoothZvdEi: "smooth_zvd_ei",
    smoothSi: "smooth_si"
  },
  legendHint: "Kliknutím na položku legendy v kterémkoli grafu lze skrýt nebo zobrazit danou čáru.",
  captions: {
    residualVsFreq: "zbytková vibrace vs frekvence <span style=\"color:var(--text-muted)\">(nižší = lepší potlačení)</span>",
    kernelTimeDomain: "kernel v časové oblasti <span style=\"color:var(--text-muted)\">(amplitudy impulsu vs hustota váhy vyhlazovače; obě se integrují na 1)</span>"
  },
  note: "<strong>Tvořovač</strong> aplikuje několik diskrétních impulsů; <strong>vyhlazovač</strong> rozloží stejný korekční efekt přes spojitou funkci, což produkuje hladší pohyb bez náhlých skoků rychlosti. Vyhlazovače obecně vyžadují delší okno (větší <code>t_sm</code>) než tvořovač stejné rodiny pro porovnatelné potlačení. <code>damping_ratio</code> zde je předpokládaný útlum tiskárny používaný k vyhodnocení zbytkové vibrace.",
  cards: {
    shaperDuration: "trvání tvořovače",
    shaperWorstResidual: "nejhorší zbytková vibrace tvořovače",
    smootherTsm: "vyhlazovač t_sm",
    smootherWorstResidual: "nejhorší zbytková vibrace vyhlazovače"
  },
  footer: "Okna vyhlazovače <code>w(t)=Σ Cₖ tᵏ</code> přes <code>[−t_sm/2, t_sm/2]</code>, <code>t_sm = factor/freq</code>, koeficienty z <code>shaper_defs.py</code> (<code>get_*_smoother</code>). Odpověď je vyhodnocena zacházením s oknem jako s hustým impulzním vlakem a aplikací klasického vzorce amplitudy zbytkové vibrace. Kalico přidává <code>damping_ratio</code> pro jednotlivé osy pro vyhlazovače (používá se při přizpůsobování synchronizovaného extruderu vyhlazovače); starší verze předpokládaly pevnou hodnotu 0,1. Vykresleno pomocí Chart.js.",
  chart: {
    datasetShaper: "tvořovač",
    datasetSmoother: "vyhlazovač",
    axisResidual: "zbytková vibrace",
    axisFrequency: "frekvence (Hz)",
    axisKernelWeight: "váha kernelu",
    axisTime: "čas (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
