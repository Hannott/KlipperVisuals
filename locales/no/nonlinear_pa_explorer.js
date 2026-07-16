// Norwegian (Bokmål) -- strings for nonlinear_pa_explorer.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.nonlinear_pa_explorer = {
  title: "Ikke-lineær pressure advance-utforsker — tanh vs recipr",
  heading: "Ikke-lineær pressure advance-utforsker",
  intro: "Sammenligner <code>tanh</code>- og <code>recipr</code>-modellene. Ekstra ekstruder-advance = <code>ADVANCE·v + OFFSET·f(v/VELOCITY)</code>, der <code>f(x)=tanh(x)</code> eller <code>f(x)=x/(1+x)</code>. Strøm og akselerasjon simuleres over en trapesformet testbevegelse, glattet med fastvarens standard parabolske ekstruder-smoother. En <strong>oppstrøms</strong>-linje viser den lineære hovedmodellen (advance = <code>pressure_advance·v</code>) til sammenligning.",
  groups: {
    modelParams: "modellparametere",
    testMove: "testbevegelse &amp; synkronisering",
    upstream: "sammenligning med oppstrøms (lineær pressure advance)"
  },
  controls: {
    advance: "ADVANCE",
    offset: "OFFSET",
    velocity: "VELOCITY",
    targetVelocity: "målhastighet (mm/s)",
    acceleration: "akselerasjon (mm/s²)",
    smoothTime: "smooth_time (s)",
    timeOffset: "time_offset (s)",
    pressureAdvance: "pressure_advance"
  },
  legendHint: "Klikk på en legendeoppføring i et diagram for å skjule eller vise den linjen.",
  captions: {
    advanceVsVelocity: "advance-mengde mot hastighet",
    flowOverMove: "ekstruderens strømningshastighet gjennom testbevegelsen",
    accelOverMove: "ekstruderens akselerasjonsbehov gjennom testbevegelsen"
  },
  cards: {
    peakFlow: "maks ekstruderstrøm (mm/s) — tanh / recipr / oppstrøms",
    peakAccel: "maks |ekstruderakselerasjon| (mm/s²) — tanh / recipr / oppstrøms",
    accelRatio: "akselerasjonsbehov ÷ verktøyhode-akselerasjon — tanh / recipr / oppstrøms"
  },
  footer: "Modellmatematikk: <code>klippy/chelper/kin_extruder.c</code> — ikke-lineære <code>tanh</code>/<code>recipr</code>-modeller og oppstrøms sin <code>pressure_advance_linear_model_func</code> (advance = <code>pressure_advance·v</code>). Smoother-kjerne: <code>klippy/extras/extruder_smoother.py</code> (standard parabolsk vindu <code>w(τ)=1.5−6τ²</code>). Testbevegelsen forutsetter at ekstruderhastigheten følger verktøyhodets hastighet 1:1, så strømningstallene er per enhet strøm — kurveformene og forskjellene mellom tanh og recipr er den trofaste delen. Krever internettforbindelse for Chart.js (CDN).",
  chart: {
    datasetTanh: "tanh",
    datasetRecipr: "recipr",
    datasetUpstream: "oppstrøms (lineær)",
    datasetNominal: "nominell",
    axisVelocity: "hastighet (mm/s)",
    axisTime: "tid (ms)",
    axisAdvance: "ekstra advance (mm)",
    axisFlow: "strøm (mm/s)",
    axisAccel: "akselerasjon (mm/s²)",
    tooltipVelocity: "v = {{v}} mm/s",
    tooltipTime: "t = {{t}} ms",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
