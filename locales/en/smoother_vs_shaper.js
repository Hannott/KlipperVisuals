// English (fallback locale) -- strings for smoother_vs_shaper.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.smoother_vs_shaper = {
  title: "Smoothers vs shapers — Kalico input smoothers",
  heading: "Smoothers vs shapers",
  intro: "Kalico input <em>smoothers</em> replace a classic shaper's discrete impulses with a smooth polynomial window <code>w(t)</code> (a continuous impulse distribution). Compare any shaper against any smoother on the same vibration-reduction axes and in the time domain. Smoothers are a Kalico feature — not present in mainline Klipper.",
  controls: {
    shaperLabel: "impulse shaper",
    smootherLabel: "smoother",
    shaperFreq: "shaper_freq (Hz)",
    dampingRatio: "damping_ratio"
  },
  shaperOptions: {
    none: "— none —",
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    ei2: "2hump_ei",
    ei3: "3hump_ei"
  },
  smootherOptions: {
    none: "— none —",
    smoothZv: "smooth_zv",
    smoothMzv: "smooth_mzv",
    smoothEi: "smooth_ei",
    smoothEi2: "smooth_2hump_ei",
    smoothZvdEi: "smooth_zvd_ei",
    smoothSi: "smooth_si"
  },
  legendHint: "Click a legend entry on either chart to hide or show that line.",
  captions: {
    residualVsFreq: "residual vibration vs frequency <span style=\"color:var(--text-muted)\">(lower = better suppression)</span>",
    kernelTimeDomain: "kernel in the time domain <span style=\"color:var(--text-muted)\">(impulse amplitudes vs smoother weight density; both integrate to 1)</span>"
  },
  note: "A <strong>shaper</strong> applies a few discrete impulses; a <strong>smoother</strong> spreads the same corrective effect over a continuous window, producing smoother motion and no sudden velocity steps. Smoothers generally need a longer window (larger <code>t_sm</code>) than a shaper of the same family for comparable suppression. The <code>damping_ratio</code> here is the printer’s assumed damping used to evaluate residual vibration.",
  cards: {
    shaperDuration: "shaper duration",
    shaperWorstResidual: "shaper worst residual",
    smootherTsm: "smoother t_sm",
    smootherWorstResidual: "smoother worst residual"
  },
  footer: "Smoother windows <code>w(t)=Σ Cₖ tᵏ</code> over <code>[−t_sm/2, t_sm/2]</code>, <code>t_sm = factor/freq</code>, coefficients from <code>shaper_defs.py</code> (<code>get_*_smoother</code>). Response is evaluated by treating the window as a dense impulse train and applying the classic residual-vibration amplitude formula. Kalico adds a per-axis <code>damping_ratio</code> for smoothers (used when fitting the synchronized extruder smoother); earlier versions assumed a fixed 0.1. Rendered with Chart.js.",
  chart: {
    datasetShaper: "shaper",
    datasetSmoother: "smoother",
    axisResidual: "residual vibration",
    axisFrequency: "frequency (Hz)",
    axisKernelWeight: "kernel weight",
    axisTime: "time (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
