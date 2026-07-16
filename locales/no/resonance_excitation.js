// Norwegian (Bokmål) -- strings for resonance_excitation.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.resonance_excitation = {
  title: "Utforsker for resonanstest-eksitasjon — Klipper / Kalico",
  heading: "Utforsker for resonanstest-eksitasjon",
  intro: "Bevegelsen <code>TEST_RESONANCES</code> kommanderer: frekvensen ramper opp med <code>hz_per_sec</code>, hver omgang akselererer med <code>accel_per_hz·freq</code>, med en valgfri langsom <code>sweeping</code>-oscillasjon lagt på toppen. De pålagte akselerasjons-/hastighetsgrensene er utledet fra den <em>faktiske</em> genererte sekvensen; oppstrøms brukte en fast formel som ignorerer sveipeleddet.",
  groupLabel: "testgenerator (fra resonance_tester.py)",
  controls: {
    maxFreq: "max_freq (Hz)",
    accelPerHz: "accel_per_hz",
    hzPerSec: "hz_per_sec",
    sweepingPeriod: "sweeping_period (s)",
    sweepingAccel: "sweeping_accel",
    zoomFrequency: "zoomfrekvens (Hz)"
  },
  legendHint: "Klikk på en legendeoppføring i et diagram for å skjule eller vise den linjen.",
  captions: {
    freqVsTime: "frekvens mot tid <span style=\"color:var(--text-muted)\">(sveipet — stiger med hz_per_sec)</span>",
    accelEnvelope: "akselerasjonsomhylling mot tid <span style=\"color:var(--text-muted)\">(med pålagte akselerasjonsgrenser)</span>",
    zoomedWaveform: "zoomet bølgeform ved valgt frekvens <span style=\"color:var(--text-muted)\">(den faktiske ± pulsen og resulterende hastighet)</span>"
  },
  footer: "Bevegelsen er generert ved å portere <code>VibrationPulseTestGenerator.gen_test</code> og <code>SweepingVibrationsTestGenerator.gen_test</code>. De sekvensutledede grensene <code>max|accel|+10</code> / <code>max|v|+1</code> kommer fra å akkumulere den reelle sekvensen (som i <code>ResonanceTestExecutor.run_test</code>); oppstrøms brukte <code>freq_end·accel_per_hz+10</code> og <code>accel_per_hz·0.25+1</code>. <code>sweeping_period=0</code> deaktiverer sveipet (konfigurasjonens standardverdi); her er den satt til 0.4 slik at forskjellen blir synlig. Rendret med Chart.js.",
  note: {
    warn: "<strong>Oppstrøms undervurderer akselerasjonsgrensen.</strong> Med sveiping aktivert er den faktiske toppakselerasjonen <code>{{maxA}}</code> mm/s², men oppstrøms sin formel <code>freq_end·accel_per_hz+10 = {{upA}}</code> ignorerer <code>sweeping_accel</code> — så maskinens grenser ville ikke bli hevet nok under testen. Den sekvensutledede grensen er <code>{{brA}}</code>.",
    normal: "Hver frekvens kjører en <code>+accel</code> / <code>−accel</code>-puls som varer <code>0.25/freq</code> hver; toppfarten per puls er <code>accel_per_hz·0.25</code>, uavhengig av frekvens. Aktiver sveiping (period &amp; accel &gt; 0) for å se at oppstrøms sin faste grenseformel ikke holder."
  },
  cards: {
    testDuration: "testens varighet",
    truePeakAccel: "faktisk toppakselerasjon",
    accelLimitCompare: "akselerasjonsgrense: sekvens mot oppstrøms",
    velLimitCompare: "hastighetsgrense: sekvens mot oppstrøms"
  },
  values: {
    seconds: "{{value}} s",
    mmPerS2: "{{value}} mm/s²"
  },
  chart: {
    axisFreq: "frekvens (Hz)",
    axisTimeS: "tid (s)",
    axisAccel: "akselerasjon (mm/s²)",
    axisTimeMs: "tid (ms)",
    axisVelocity: "hastighet (mm/s)",
    datasetFrequency: "frekvens",
    datasetPeakAccelPos: "+toppakselerasjon",
    datasetPeakAccelNeg: "-toppakselerasjon",
    datasetLimitSequence: "grense (fra sekvens)",
    datasetLimitUpstream: "grense (oppstrøms formel)",
    datasetAccel: "akselerasjon",
    datasetVelocity: "hastighet",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
