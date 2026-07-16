// English (fallback locale) -- strings for shaper_estimation_method.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.shaper_estimation_method = {
  title: "Shaper response estimation — old finite-difference vs new analytic",
  heading: "Shaper response estimation: old vs new",
  intro: "The <code>~2x speedup</code> to <code>SHAPER_CALIBRATE</code>. Both methods score a shaper by the minimum of the shaped step-response <em>velocity</em>. The old method built the position response and finite-differenced it; the new one uses the <strong>analytic velocity</strong>, evaluates it exactly at the impulse kinks, and refines the discrete minimum with a parabola — accurate with far fewer samples.",
  shaperNames: {
    zv: "zv",
    mzv: "mzv",
    ei: "ei",
    "2hump_ei": "2hump_ei",
    "3hump_ei": "3hump_ei"
  },
  controls: {
    shaperFreq: "shaper_freq (Hz)",
    dampingRatio: "damping_ratio",
    samples: "old-method samples n_t",
    detailFrequency: "detail frequency (Hz)"
  },
  legendHint: "Click a legend entry on either chart to hide or show that line.",
  captions: {
    residualVsFrequency: "residual vibration vs frequency <span style=\"color:var(--text-muted)\">(drop n_t and watch the old method deviate)</span>",
    stepResponseVelocityPrefix: "step-response velocity at the peak, near",
    stepResponseVelocityUnit: "Hz",
    stepResponseVelocityHint: "(the metric is this curve's minimum)"
  },
  footer: "Ported from <code>shaper_calibrate.estimate_shaper</code>: window <code>[T₀, T_N + 2·max(1/f, t_s)]</code>, <code>step_response</code> / <code>step_response_velocity</code> / <code>step_response_min_velocity</code>, kink-exact evaluation at impulse times, and the parabolic <code>_refined_min</code>. The old path builds the position response and takes <code>Δpos/(ω·Δt)</code>. Both normalized by the single-step minimum velocity. Rendered with Chart.js.",
  chart: {
    datasetNew: "new",
    datasetOld: "old",
    datasetAnalyticVelocity: "analytic velocity",
    datasetFiniteDiffVelocity: "finite-diff velocity",
    datasetTrueMin: "true min",
    axisResidualVibration: "residual vibration",
    axisFrequency: "frequency (Hz)",
    axisResponseVelocity: "response velocity",
    axisTime: "time (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  },
  note: "<strong>Residual vibration</strong> is the score each method computes — lower is better suppression for a given shaper. This page compares the two <em>estimation methods</em>, not shapers: the <strong>analytic</strong> value is accurate, and the <strong>finite-difference</strong> value approximates it from <code>n_t</code> samples. At <strong>n_t = {{nt}}</strong> the finite-difference estimate is off by up to <strong>{{maxErr}}%</strong> across the band. It samples the position response and can straddle the sharp velocity trough (red dot), so it usually <em>under-reports</em> the true residual — an optimistically wrong answer. The analytic method evaluates that trough directly and checks the impulse kinks, staying exact with far fewer samples. <strong>The red figures below flag estimation error, not a bad residual.</strong>",
  cards: {
    residualAnalytic: "residual @ {{fq}}Hz — analytic (accurate)",
    residualFiniteDiff: "residual @ {{fq}}Hz — finite-diff (n_t)",
    finiteDiffError: "finite-diff error @ {{fq}}Hz (est − accurate)",
    worstError: "worst estimation error across band",
    underReports: "(under-reports)",
    overReports: "(over-reports)"
  }
};
