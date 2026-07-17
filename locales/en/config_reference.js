// English (fallback locale) -- strings for config_reference.html.
// A focused config reference: ONLY the sections this fork changes
// ([input_shaper], [resonance_tester]), each listed in full, in the same
// commented-config-block style as the official Kalico reference.
//
// Descriptions are PLAIN TEXT (no HTML): config_reference.html word-wraps them
// into "#   ..." comment lines inside a <pre>, so tags would show literally.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.en = window.KV_LOCALES.en || {};
window.KV_LOCALES.en.config_reference = {
  title: "Config reference — Klipper / Kalico",
  heading: "Config reference",
  backLink: "← Back to Shaper tuning",
  copyTitle: "Copy to clipboard",
  intro: "Only the config sections this fork changes are listed here — but each one in full, so you can set up a new <code>printer.cfg</code> without hunting through the whole manual. Every other section is unchanged from Kalico.",
  fullRefNote: "For all other sections, see the <a href=\"https://docs.kalico.gg/Config_Reference.html\" target=\"_blank\" rel=\"noopener noreferrer\">full Kalico config reference</a>.",
  formatNote: "As in the official reference, every option is commented out (starting with <code>#</code>) and shows its default value; uncomment and set the ones you need. Options marked required in their description must be provided.",
  io: {
    intro: "Input shaping cancels ringing by convolving toolhead moves with a shaper. On top of Kalico's named impulse shapers and smooth_* smoothers, this fork adds the multimode type: an N-peak shaper that places a notch at several resonances at once.",
    shaperType: "Default shaper type for both axes. One of the named impulse shapers (zv, mzv, zvd, ei, 2hump_ei, 3hump_ei), a smoother (smooth_zv, smooth_mzv, smooth_ei, smooth_2hump_ei, smooth_zvd_ei, smooth_si), or custom, smoother, or multimode. The default is mzv.",
    shaperTypeAxis: "Per-axis override of shaper_type; set these when the two axes need different shaper types. The default is the value of shaper_type.",
    shaperFreq: "Resonance frequency (in Hz) the shaper cancels; 0 disables shaping on that axis. For a multimode shaper, give a comma-separated list, one frequency per resonance (e.g. shaper_freq_x: 45.2, 79.5, 132.6). The default is 0.",
    dampingRatio: "Damping ratio of the resonance; 0.1 suits most printers. For multimode, accepts a list matching shaper_freq, or a single value applied to every peak. The default is 0.1.",
    shaperBase: "For the multimode type only: the base shaper convolved at each peak. A single value, or a comma-separated list matching the number of frequencies; each must be one of the named impulse shapers. The default is mzv.",
    shaperAT: "For a custom shaper only: explicit impulse amplitudes (shaper_a_*) and times in seconds (shaper_t_*), as comma-separated lists of equal length. Must be provided when shaper_type_* is custom.",
    smootherFreq: "For the smooth_* smoother types: frequency (in Hz) of the smoother. If unset, shaper_freq_* is used as an alias (SHAPER_CALIBRATE stores smoother recommendations there).",
    smoothTime: "For a custom smoother only: duration (in seconds) of the custom polynomial smoother. Used when shaper_type_* is smoother.",
    coeffs: "For a custom smoother only: polynomial coefficients of the smoother, as a comma-separated list.",
    enabledExtruders: "Comma-separated list of extruders that receive the matching pressure-advance smoothing. Empty by default."
  },
  rt: {
    intro: "Configures the accelerometer sweep that feeds SHAPER_CALIBRATE. This fork adds multimode_bias to steer the single-mode-vs-multimode decision.",
    accelChips: "A comma-separated list of accelerometer chip name(s) used for both axes (e.g. adxl345). Highest priority of the chip options. At least one of accel_chips, accel_chip, or accel_chip_x plus accel_chip_y must be set.",
    accelChip: "A single accelerometer used for both axes. Lowest priority; accel_chips and the per-axis options override it.",
    accelChipXY: "Separate accelerometers per axis (e.g. IDEX or dual-carriage). If both name the same chip they collapse to one.",
    probePoints: "One or more 'x, y, z' toolhead positions (one per line) where resonances are measured. Must be provided.",
    moveSpeed: "Speed (in mm/s) of travel moves to the probe points. The default is 50.",
    minFreq: "Lowest excitation frequency (in Hz) of the test sweep. The default is 5.0.",
    maxFreq: "Highest excitation frequency (in Hz), capped at 300. The default is 135.0.",
    accelPerHz: "Acceleration applied during the sweep, in mm/s² per Hz; higher shakes harder. The default is 75.0.",
    hzPerSec: "How fast the sweep frequency rises, in Hz per second, capped at 2.0. The default is 1.0.",
    sweepingAccel: "Acceleration (in mm/s²) of the slow back-and-forth sweeping motion overlaid on the test. The default is 400.0.",
    sweepingPeriod: "Period (in seconds) of that sweeping motion; 0 disables it. The default is 0.",
    maxSmoothing: "Upper bound on the smoothing SHAPER_CALIBRATE may accept. Unset by default (no limit).",
    multimodeBias: "Added by this fork: score margin by which a multimode shaper must beat the best single-mode shaper to be recommended. 1.0 (the default) takes any genuine improvement; above 1.0 demands a bigger win; below 1.0 actively prefers multimode."
  }
};
