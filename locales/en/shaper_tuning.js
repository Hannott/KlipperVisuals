// English (fallback locale) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.shaper_tuning = {
  title: "Shaper tuning — Klipper / Kalico",
  heading: "Shaper tuning",
  intro: "Load a resonance capture and everything on this page is computed from <em>your</em> data: the measured spectrum, the shaper <code>SHAPER_CALIBRATE</code> would recommend (the full <code>find_best_shaper</code> search ported to your browser), a hands-on explorer for any shaper type, and a ready-to-paste <code>[input_shaper]</code> config.<br>Nothing is uploaded anywhere — peak detection, damping estimation, and the whole shaper search run locally.",
  configRefLink: "Setting up a new printer? See the <a href=\"config_reference.html\">config reference</a> for every changed <code>[input_shaper]</code> and <code>[resonance_tester]</code> option.",
  steps: {
    load: "1. Load a resonance capture",
    recommended: "2. Recommended shaper",
    explorer: "3. Manual shaper explorer",
    advancedTag: "advanced",
    deepAnalysis: "Deeper analysis"
  },
  databar: {
    loadExX: "Example: X-axis capture",
    loadExY: "Example: Y-axis capture",
    upload: "Upload capture…",
    clear: "Clear",
    tryExample: "No data yet? Try an example:"
  },
  tier: {
    klipper: "Klipper",
    kalicobe: "Kalico BE",
    multimode: "Multimode",
    note: {
      klipper: "Classic impulse shapers only (Klipper mainline & Kalico).",
      kalicobe: "+ smooth_* smoothers (Kalico bleeding-edge).",
      multimode: "+ multimode, N-peak shaping (this fork's bleeding-edge-v2)."
    },
    info: "On the <strong>Klipper</strong> and <strong>Kalico BE</strong> tiers each shaper (or smoother) targets a single resonance, so it can't cancel several peaks at once.<br>This tool keeps your tallest peak and sets the rest aside — click any peak marker in the measured-spectrum legend below to include or exclude it.<br>To shape multiple resonances at once, use the <strong>Multimode</strong> tier.",
    dismiss: "Dismiss",
    downloadNote: "Want to try this on your own printer?",
    downloadLink: "Download the multimode-shaping-v3 branch for testing"
  },
  library: {
    label: "Previously uploaded",
    loadTitle: "Load this capture",
    removeTitle: "Remove from list"
  },
  detectStatus: {
    default: "No capture loaded. Load an example, or upload a Kalico <code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> (a <code>freq</code> column plus <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>).<br>Peak detection and half-power damping-ratio estimation run live in your browser — nothing is uploaded anywhere.",
    noPeaksDetected: "No peaks detected in {{source}}.",
    detected: "Detected {{n}} peak(s) in {{source}}: {{list}}."
  },
  captions: {
    measuredSpectrum: "measured resonance spectrum",
    measuredSpectrumNote: "The loaded capture.\nDashed verticals mark the detected resonances.\nClick a peak in the legend to drop that resonance from the recommendation, or an axis to include/exclude it.",
    residualVsFreq: "residual vibration vs frequency",
    residualVsFreqNote: "The selected shaper's response.\nDashed verticals mark the detected resonances; lower = better.",
    notchDepth: "notch depth vs a uniformly-assumed damping ratio",
    notchDepthNote: "What if the design used ONE shared ζ for every peak\ninstead of each peak's own measured value?\nTrue ζ per peak is marked with a matching vertical.",
    extruderKernel: "extruder synchronization kernel",
    extruderKernelNote: "Exact convolution vs a fitted smoother counterpart,\nover the shaper's own duration.",
    cornerAccel: "extruder acceleration demand at a sharp corner",
    cornerAccelNote: "100→20 mm/s corner, exact vs fitted."
  },
  scale: {
    label: "scale:",
    log: "log",
    linear: "linear"
  },
  recommended: {
    intro: "The same search SHAPER_CALIBRATE runs, on your capture:\n{{candidates}},\nscored and selected with Kalico's formula and thresholds.\nPer-peak residual is shown below for each active resonance.\nThe manual explorer further down starts from this pick so you can tweak it.",
    candidates: {
      klipper: "classic impulse shapers only",
      kalicobe: "every classic shaper and smooth_* smoother",
      multimode: "every classic shaper and smooth_* smoother,\nplus a multimode search over the detected resonances\n(up to 4, with the peak-cluster-widening fix)"
    },
    statusDefault: "Load a capture above to compute a recommendation."
  },
  explorer: {
    intro: "Pick any shaper type and see how it performs against the loaded capture:\ncorner smoothing, projected max_accel, and the residual vibration\nleft at each active resonance.\nSeeded from the recommendation above; change the type or frequencies to compare.",
    shaperType: "shaper type",
    frequencyHz: "frequency (Hz)",
    dampingZeta: "damping ζ",
    optgroupSmoothers: "smoothers (no damping input)",
    optgroupClassic: "classic impulse shapers",
    optgroupMultimode: "multimode (per-peak)",
    baseShaperHeader: "base shaper",
    freqHzShort: "freq (Hz)",
    addPeak: "+ add peak",
    removePeakTitle: "remove peak",
    scv: "SCV",
    acceleration: "acceleration",
    accelEditHint: "Click to enter an exact value"
  },
  budget: {
    noPeaks: "No peaks — load a capture above, or add peaks manually.",
    line: "{{pulses}} / {{max}} impulses used ({{bases}})",
    overSuffix: " — exceeds the firmware's pulse buffer; pick shorter base shaper(s) (e.g. ZV or MZV) or remove a peak."
  },
  reasons: {
    multimodeNeedsPeaks: "multimode needs ≥2 peaks with positive frequencies within the 32-impulse budget.",
    noPeaksConfigured: "no peaks configured — add peaks below or load a capture.",
    positiveFrequency: "enter a positive frequency."
  },
  cards: {
    shaper: "shaper",
    frequencyTarget: "target frequency",
    frequenciesTarget: "target frequencies",
    smoothingScv: "smoothing<br>(SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "smoothing",
    projectedMaxAccel: "projected max_accel",
    residualVibrations: "residual vibrations<br>(worst case)",
    extruderKernelOrder: "extruder kernel order",
    peakExtruderAccelExact: "peak extruder accel — exact",
    peakExtruderAccelFitted: "peak extruder accel — fitted",
    reduction: "reduction",
    recommended: "recommended",
    vibrationsSearchScore: "vibrations (search score)",
    maxAccel: "max_accel"
  },
  notes: {
    residualPerPeak: "Residual vibration this shaper leaves at each active resonance (worst case across ζ={{ratios}}):",
    loadCaptureForResidual: "Load a capture to see the residual left at each detected resonance.",
    deepNote: "The <strong>exact</strong> convolution ({{impulses}} impulses, base {{base}}) is a mathematically perfect match to the shaped toolhead motion, but each impulse is a velocity-derivative discontinuity.<br>The <strong>fitted</strong> smoother (order {{order}}) trades a little exactness for a continuous kernel, cutting peak extruder acceleration by <strong>{{reduction}}×</strong> at a sharp 100&rarr;20&nbsp;mm/s corner.<br>This ports <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, fit near every peak with that peak's own damping ratio.<br>The chart above it shows why per-peak damping matters: with one shared assumed ζ, only the peak whose true ζ matches gets a clean notch.",
    recoNoteIntro: "Per-peak residual using the recommended shaper above, at each active resonance:",
    recoCaveat: "The auto-tuner searches at most 4 resonance peaks.<br>If your printer shows more, add the extras as additional multimode modes by hand (use the explorer below)."
  },
  status: {
    computing: "Computing recommendation for {{label}} (find_best_shaper port, ~1-2s)…"
  },
  capture: {
    xAxis: "the X-axis capture",
    yAxis: "the Y-axis capture",
    combinedRecomputed: "Combined recomputed from {{active}} ({{hidden}} hidden)",
    combinedAnalyzed: "Combined (analyzed)",
    combinedAxesAnalyzed: "Combined ({{axes}}, analyzed)",
    csvParseError: "Could not parse \"{{filename}}\": {{error}}. Expected a Kalico resonance CSV with a \"freq\" column and a \"psd_x\"/\"psd_y\"/\"psd_z\"/\"psd_xyz\" column.",
    csvEmptyFile: "empty file",
    csvMissingColumns: "could not find a \"freq\" column and a \"psd_xyz\" (or \"psd\") column",
    rawMissingColumns: "could not find \"time\" and \"accel_x\"/\"accel_y\"/\"accel_z\" columns",
    rawTooShort: "raw capture is too short to compute a spectrum",
    resetConfirm: "Reset all data on this page? This clears the loaded capture, the recommendation, and the explorer."
  },
  chart: {
    axis: {
      frequencyHz: "frequency (Hz)",
      residualVibration: "residual vibration",
      normalizedPSD: "normalized PSD",
      normalizedPSDLog: "normalized PSD (log scale)",
      dampingRatioZeta: "design's uniformly-assumed damping ratio ζ",
      residualAtPeak: "residual at peak",
      timeMs: "time (ms)",
      kernelWeight: "kernel weight",
      extruderAccelMmS2: "extruder acceleration (mm/s²)"
    },
    dataset: {
      exactImpulses: "exact (impulses)",
      fittedSmoother: "fitted smoother",
      exactConvolution: "exact convolution",
      residualLabel: "{{label}} residual",
      resonanceMarker: "resonance {{freq}} Hz",
      peakMarker: "peak {{n}} ({{freq}} Hz)",
      peakMarkerExcluded: "peak {{n}} ({{freq}} Hz) — excluded",
      residualAtPeakN: "residual @ peak {{n}} ({{freq}} Hz)",
      trueZetaPeakN: "true ζ peak {{n}} ({{damping}})"
    },
    tooltip: {
      freqHz: "{{f}} Hz",
      percentLabel: "{{label}}: {{value}}%",
      rawLabel: "{{label}}: {{value}}",
      assumedZeta: "assumed ζ = {{z}}",
      timeMs: "{{t}} ms",
      accelLabel: "{{label}}: {{value}} mm/s²"
    }
  },
  config: {
    suggestedHeading: "Suggested config",
    manualHeading: "Manual config",
    copyTitle: "Copy to clipboard",
    axisDetected: "Editing: {{axis}} axis",
    editingLabel: "Editing:",
    prefixLabel: "use <code>#*#</code> prefix",
    invalidComment: "# Configure a valid shaper in the explorer above first.",
    invalidCommentSuggested: "# No recommendation available yet.",
    pickAxisComment: "# Pick an axis (X or Y) above to add this capture to the config.",
    pickAxisCommentManual: "# Pick an axis (X or Y) in the suggested config above first."
  },
  deep: {
    tag: "Deeper analysis — multimode extruder synchronization",
    intro: "How this hand-built multimode shaper behaves across per-peak\ndamping mismatch, and the fitted extruder-smoother kernel that\nkeeps pressure advance synchronized with it.\nShown only while the explorer is set to multimode."
  },
  footer: "Reproduces Kalico's <code>find_best_shaper</code> shaper calibration and DSP entirely in your browser — your capture is never uploaded. Rendered with Chart.js. Source on <a href=\"https://github.com/Hannott/KlipperVisuals\">GitHub</a>."
};
