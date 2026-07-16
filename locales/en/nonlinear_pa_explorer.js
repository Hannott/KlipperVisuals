// English (fallback locale) -- strings for nonlinear_pa_explorer.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.nonlinear_pa_explorer = {
  title: "Nonlinear pressure advance explorer — tanh vs recipr",
  heading: "Nonlinear pressure advance explorer",
  intro: "Comparing the <code>tanh</code> and <code>recipr</code> models. Extra extruder advance = <code>ADVANCE·v + OFFSET·f(v/VELOCITY)</code>, where <code>f(x)=tanh(x)</code> or <code>f(x)=x/(1+x)</code>. Flow and acceleration are simulated over a trapezoidal test move, smoothed with the firmware's default parabolic extruder smoother. An <strong>upstream</strong> line shows the mainline linear model (advance = <code>pressure_advance·v</code>) for comparison.",
  groups: {
    modelParams: "model parameters",
    testMove: "test move &amp; synchronization",
    upstream: "upstream comparison (linear pressure advance)"
  },
  controls: {
    advance: "ADVANCE",
    offset: "OFFSET",
    velocity: "VELOCITY",
    targetVelocity: "target velocity (mm/s)",
    acceleration: "acceleration (mm/s²)",
    smoothTime: "smooth_time (s)",
    timeOffset: "time_offset (s)",
    pressureAdvance: "pressure_advance"
  },
  legendHint: "Click a legend entry on any chart to hide or show that line.",
  captions: {
    advanceVsVelocity: "advance amount vs velocity",
    flowOverMove: "extruder flow rate over the test move",
    accelOverMove: "extruder acceleration demand over the test move"
  },
  cards: {
    peakFlow: "peak extruder flow (mm/s) — tanh / recipr / upstream",
    peakAccel: "peak |extruder accel| (mm/s²) — tanh / recipr / upstream",
    accelRatio: "accel demand ÷ toolhead accel — tanh / recipr / upstream"
  },
  footer: "Model math: <code>klippy/chelper/kin_extruder.c</code> — nonlinear <code>tanh</code>/<code>recipr</code> models and the upstream <code>pressure_advance_linear_model_func</code> (advance = <code>pressure_advance·v</code>). Smoother kernel: <code>klippy/extras/extruder_smoother.py</code> (default parabolic window <code>w(τ)=1.5−6τ²</code>). The test move assumes extruder velocity tracks toolhead velocity 1:1, so flow figures are per-unit-flow — the curve shapes and tanh-vs-recipr differences are the faithful part. Requires an internet connection for Chart.js (CDN).",
  chart: {
    datasetTanh: "tanh",
    datasetRecipr: "recipr",
    datasetUpstream: "upstream (linear)",
    datasetNominal: "nominal",
    axisVelocity: "velocity (mm/s)",
    axisTime: "time (ms)",
    axisAdvance: "extra advance (mm)",
    axisFlow: "flow (mm/s)",
    axisAccel: "acceleration (mm/s²)",
    tooltipVelocity: "v = {{v}} mm/s",
    tooltipTime: "t = {{t}} ms",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
