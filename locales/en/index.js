// English (fallback locale) -- strings for index.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.index = {
  title: "KlipperVisuals — interactive visualizations of Klipper/Kalico internals",
  subtitle: "Interactive visualizations of motion-control internals in Klipper / Kalico — pressure advance, input shaping, and resonance compensation.",
  cards: {
    nonlinearPa: {
      title: "Nonlinear pressure advance explorer",
      tag: "tanh vs recipr",
      body: "Compare the <code>tanh</code> and <code>recipr</code> nonlinear models against an upstream linear-PA line. Adjust ADVANCE, OFFSET, VELOCITY and a test move to see advance-vs-velocity, extruder flow rate, and acceleration demand, with the firmware's parabolic extruder smoother and a time-offset control."
    },
    shaperTuning: {
      title: "Shaper tuning",
      tag: "Kalico feature",
      body: "Load a resonance capture (peak detection runs live, in-browser) and get the shaper <code>SHAPER_CALIBRATE</code> would recommend — the full <code>find_best_shaper</code> search ported to JS, including multimode with the dual-peak-cluster fix. Explore any shaper type by hand against your own data (smoothing, max_accel, per-resonance residual), then generate a ready-to-paste <code>[input_shaper]</code> config."
    },
    smootherVsShaper: {
      title: "Smoothers vs shapers",
      tag: "Kalico feature",
      body: "Kalico input smoothers replace a shaper's discrete impulses with a smooth polynomial window. Compare any shaper against any smoother on shared vibration-reduction axes and in the time domain, from the <code>get_*_smoother</code> definitions in <code>shaper_defs.py</code>."
    },
    extruderSmootherFit: {
      title: "Extruder smoother kernel fit",
      tag: "fit rework",
      body: "The polynomial kernel that keeps pressure advance synchronized with input shaping. Compares the fitted kernel <strong>before vs after</strong> the <code>extruder_smoother.py</code> rework (analytic targets, constrained least squares, Legendre basis) for every shaper — <code>3hump_ei</code> improves the most."
    },
    resonanceExcitation: {
      title: "Resonance test excitation explorer",
      tag: "limit fix",
      body: "The motion <code>TEST_RESONANCES</code> generates — frequency sweep, per-cycle acceleration, and the optional sweeping oscillation. Overlays the enforced accel/velocity limits derived from the real sequence against upstream's fixed formula, which ignores the sweeping term."
    },
    shaperEstimation: {
      title: "Shaper estimation: old vs new",
      tag: "~2x speedup",
      body: "How <code>SHAPER_CALIBRATE</code> scores a shaper: the old finite-difference of the step response vs an analytic velocity with kink-exact evaluation and parabolic-refined minimum. Drop the sample count and watch the old method deviate while the new one stays exact."
    }
  },
  note: {
    title: "Note on provenance.",
    body: "The pressure-advance page models a custom <code>bleeding-edge-v2</code> implementation (<code>tanh</code>/<code>recipr</code> nonlinear PA) that is not in upstream Kalico or Klipper. The shaper-tuning, smoother, resonance-excitation, and estimation pages reproduce the Kalico shaper code (<code>shaper_defs.py</code>, <code>resonance_tester.py</code>, <code>shaper_calibrate.py</code>) with proposed fixes and contrast them against current upstream Kalico (<code>bleeding-edge-v2</code>)."
  },
  footer: "Math and kernels reproduced from <code>klippy/chelper/kin_extruder.c</code>, <code>klippy/extras/extruder_smoother.py</code>, and <code>klippy/extras/shaper_defs.py</code>. Charts rendered with Chart.js (CDN). Source: <a href=\"https://github.com/Hannott/KlipperVisuals\">Hannott/KlipperVisuals</a>."
};
