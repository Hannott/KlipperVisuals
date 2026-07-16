// Czech (Čeština) -- strings for nonlinear_pa_explorer.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.nonlinear_pa_explorer = {
  title: "Zkoumání nelineárního tlakového předstihu — tanh vs recipr",
  heading: "Zkoumání nelineárního tlakového předstihu",
  intro: "Porovnání modelů <code>tanh</code> a <code>recipr</code>. Dodatečný předstih extrudéru = <code>ADVANCE·v + OFFSET·f(v/VELOCITY)</code>, kde <code>f(x)=tanh(x)</code> nebo <code>f(x)=x/(1+x)</code>. Tok a zrychlení jsou simulovány během lichoběžníkového testovacího pohybu, vyhlazovány výchozím parabolickým vyhlazovačem firmware. Řádka <strong>upstream</strong> ukazuje model lineárního tlakového předstihu mainline (advance = <code>pressure_advance·v</code>) pro porovnání.",
  groups: {
    modelParams: "parametry modelu",
    testMove: "testovací pohyb &amp; synchronizace",
    upstream: "porovnání upstream (lineární tlakový předstih)"
  },
  controls: {
    advance: "ADVANCE",
    offset: "OFFSET",
    velocity: "VELOCITY",
    targetVelocity: "cílová rychlost (mm/s)",
    acceleration: "zrychlení (mm/s²)",
    smoothTime: "smooth_time (s)",
    timeOffset: "time_offset (s)",
    pressureAdvance: "pressure_advance"
  },
  legendHint: "Klikněte na položku legendy v libovolném grafu, aby se zobrazil nebo skryl daný řádek.",
  captions: {
    advanceVsVelocity: "množství předstihu vs rychlost",
    flowOverMove: "průtok extrudéru během testovacího pohybu",
    accelOverMove: "zrychlení extrudéru během testovacího pohybu"
  },
  cards: {
    peakFlow: "špičkový průtok extrudéru (mm/s) — tanh / recipr / upstream",
    peakAccel: "špičkové |zrychlení extrudéru| (mm/s²) — tanh / recipr / upstream",
    accelRatio: "poptávka zrychlení ÷ zrychlení hlavy nástroje — tanh / recipr / upstream"
  },
  footer: "Matematika modelu: <code>klippy/chelper/kin_extruder.c</code> — nelineární modely <code>tanh</code>/<code>recipr</code> a upstream <code>pressure_advance_linear_model_func</code> (advance = <code>pressure_advance·v</code>). Jádro vyhlazovače: <code>klippy/extras/extruder_smoother.py</code> (výchozí parabolické okno <code>w(τ)=1.5−6τ²</code>). Testovací pohyb předpokládá, že rychlost extrudéru sleduje rychlost hlavy nástroje 1:1, takže údaje o toku jsou na jednotku toku — tvary křivek a rozdíly tanh-vs-recipr jsou věrná část. Vyžaduje připojení k internetu pro Chart.js (CDN).",
  chart: {
    datasetTanh: "tanh",
    datasetRecipr: "recipr",
    datasetUpstream: "upstream (lineární)",
    datasetNominal: "nominální",
    axisVelocity: "rychlost (mm/s)",
    axisTime: "čas (ms)",
    axisAdvance: "dodatečný předstih (mm)",
    axisFlow: "průtok (mm/s)",
    axisAccel: "zrychlení (mm/s²)",
    tooltipVelocity: "v = {{v}} mm/s",
    tooltipTime: "t = {{t}} ms",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
