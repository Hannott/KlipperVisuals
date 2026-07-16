// Czech (Čeština) -- strings for resonance_excitation.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.resonance_excitation = {
  title: "Průzkumník buzení testů rezonance — Klipper / Kalico",
  heading: "Průzkumník buzení testů rezonance",
  intro: "Příkazy pro pohyb <code>TEST_RESONANCES</code>: nájezdy frekvence na <code>hz_per_sec</code>, každý cyklus zrychluje na <code>accel_per_hz·freq</code>, s volitelnými pomalými <code>sweeping</code> oscilacemi vrstvené navrchu. Vynucená omezení zrychlení/rychlosti vycházejí ze <em>skutečně</em> generované sekvence; upstream používal pevný vzorec, který ignoruje výraz sweeping.",
  groupLabel: "generátor testů (z resonance_tester.py)",
  controls: {
    maxFreq: "max_freq (Hz)",
    accelPerHz: "accel_per_hz",
    hzPerSec: "hz_per_sec",
    sweepingPeriod: "sweeping_period (s)",
    sweepingAccel: "sweeping_accel",
    zoomFrequency: "zvětšená frekvence (Hz)"
  },
  legendHint: "Klikněte na položku legendy v grafu, abyste skryli nebo zobrazili tuto linku.",
  captions: {
    freqVsTime: "frekvence vs čas <span style=\"color:var(--text-muted)\">(nájezd — stoupá na hz_per_sec)</span>",
    accelEnvelope: "obálka zrychlení vs čas <span style=\"color:var(--text-muted)\">(s vynuceným omezením zrychlení)</span>",
    zoomedWaveform: "zvětšené vlnění na vybrané frekvenci <span style=\"color:var(--text-muted)\">(skutečný ± puls a výsledná rychlost)</span>"
  },
  footer: "Pohyb vygenerován přenesením <code>VibrationPulseTestGenerator.gen_test</code> a <code>SweepingVibrationsTestGenerator.gen_test</code>. Limity odvozené ze sekvence <code>max|accel|+10</code> / <code>max|v|+1</code> pocházejí z kumulace skutečné sekvence (jako v <code>ResonanceTestExecutor.run_test</code>); upstream používal <code>freq_end·accel_per_hz+10</code> a <code>accel_per_hz·0.25+1</code>. <code>sweeping_period=0</code> vypne nájezd (výchozí nastavení); zde je nastaven na 0,4, aby byl rozdíl viditelný. Vykresleno pomocí Chart.js.",
  note: {
    warn: "<strong>Upstream nedosahuje limitu zrychlení.</strong> Když je nájezd povolen, skutečné maximální zrychlení je <code>{{maxA}}</code> mm/s², ale upstream vzorec <code>freq_end·accel_per_hz+10 = {{upA}}</code> ignoruje <code>sweeping_accel</code> — takže limity stroje by nebyly během testu zvýšeny dostatečně. Limit odvozený ze sekvence je <code>{{brA}}</code>.",
    normal: "Každá frekvence provádí puls <code>+accel</code> / <code>−accel</code> trvající <code>0.25/freq</code> každý; maximální rychlost na puls je <code>accel_per_hz·0.25</code>, nezávislá na frekvenci. Povolte nájezd (období &amp; zrychlení &gt; 0), abyste viděli, kde upstream pevný vzorec limitu nestačí."
  },
  cards: {
    testDuration: "trvání testu",
    truePeakAccel: "skutečné maximální zrychlení",
    accelLimitCompare: "limit zrychlení: sekvence vs upstream",
    velLimitCompare: "limit rychlosti: sekvence vs upstream"
  },
  values: {
    seconds: "{{value}} s",
    mmPerS2: "{{value}} mm/s²"
  },
  chart: {
    axisFreq: "frekvence (Hz)",
    axisTimeS: "čas (s)",
    axisAccel: "zrychlení (mm/s²)",
    axisTimeMs: "čas (ms)",
    axisVelocity: "rychlost (mm/s)",
    datasetFrequency: "frekvence",
    datasetPeakAccelPos: "+max. zrychlení",
    datasetPeakAccelNeg: "-max. zrychlení",
    datasetLimitSequence: "limit (ze sekvence)",
    datasetLimitUpstream: "limit (upstream vzorec)",
    datasetAccel: "zrychlení",
    datasetVelocity: "rychlost",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
