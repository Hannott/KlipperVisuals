// German (Deutsch) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.de = window.KV_LOCALES.de || {};
window.KV_LOCALES.de.shaper_tuning = {
  title: "Shaper-Tuning — Klipper / Kalico",
  heading: "Shaper-Tuning",
  intro: "Lade eine Resonanzmessung, und alles auf dieser Seite wird aus <em>deinen</em> Daten berechnet: das gemessene Spektrum, der Shaper, den <code>SHAPER_CALIBRATE</code> empfehlen würde (die komplette <code>find_best_shaper</code>-Suche in deinen Browser portiert), ein interaktiver Explorer für jeden Shaper-Typ und eine fertig einsetzbare <code>[input_shaper]</code>-Konfiguration.<br>Nichts wird irgendwohin hochgeladen — Peak-Erkennung, Dämpfungsschätzung und die gesamte Shaper-Suche laufen lokal.",
  configRefLink: "Neuen Drucker einrichten? In der <a href=\"config_reference.html\">Konfigurationsreferenz</a> findest du jede geänderte <code>[input_shaper]</code>- und <code>[resonance_tester]</code>-Option.",
  steps: {
    load: "1. Resonanzmessung laden",
    recommended: "2. Empfohlener Shaper",
    explorer: "3. Manueller Shaper-Explorer",
    deepAnalysis: "Tiefere Analyse"
  },
  databar: {
    loadExX: "Beispiel: X-Achsen-Messung",
    loadExY: "Beispiel: Y-Achsen-Messung",
    upload: "Messung hochladen…",
    clear: "Leeren",
    tryExample: "Noch keine Daten? Probiere ein Beispiel:"
  },
  tier: {
    klipper: "Klipper",
    kalicobe: "Kalico BE",
    multimode: "Multimode",
    note: {
      klipper: "Nur klassische Impuls-Shaper (Klipper mainline & Kalico).",
      kalicobe: "+ smooth_*-Smoother (Kalico bleeding-edge).",
      multimode: "+ Multimode, N-Peak-Shaping (bleeding-edge-v2 dieses Forks)."
    },
    info: "Bei den Stufen <strong>Klipper</strong> und <strong>Kalico BE</strong> zielt jeder Shaper (oder Smoother) auf eine einzige Resonanz und kann daher nicht mehrere Peaks gleichzeitig auslöschen.<br>Dieses Tool behält deinen höchsten Peak und legt den Rest beiseite — klicke auf einen Peak-Marker in der Legende des gemessenen Spektrums unten, um ihn ein- oder auszuschließen.<br>Um mehrere Resonanzen gleichzeitig zu formen, nutze die Stufe <strong>Multimode</strong>.",
    dismiss: "Schließen",
    downloadNote: "Willst du das auf deinem eigenen Drucker ausprobieren?",
    downloadLink: "Lade den Branch multimode-shaping-v3 zum Testen herunter"
  },
  library: {
    label: "Zuvor hochgeladen",
    loadTitle: "Diese Messung laden",
    removeTitle: "Aus Liste entfernen"
  },
  detectStatus: {
    default: "Keine Messung geladen. Lade ein Beispiel oder lade eine Kalico-<code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> hoch (eine <code>freq</code>-Spalte plus <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>).<br>Peak-Erkennung und Dämpfungsgrad-Schätzung nach der Halbwertsmethode laufen live in deinem Browser — nichts wird irgendwohin hochgeladen.",
    noPeaksDetected: "Keine Peaks für {{source}} erkannt.",
    detected: "{{n}} Peak(s) für {{source}} erkannt: {{list}}."
  },
  captions: {
    measuredSpectrum: "gemessenes Resonanzspektrum",
    measuredSpectrumNote: "Die geladene Messung.\nGestrichelte Vertikalen markieren die erkannten Resonanzen.\nKlicke auf einen Peak in der Legende, um diese Resonanz aus der Empfehlung zu entfernen, oder auf eine Achse, um sie ein-/auszuschließen.",
    residualVsFreq: "Restschwingung gegen Frequenz",
    residualVsFreqNote: "Die Antwort des gewählten Shapers.\nGestrichelte Vertikalen markieren die erkannten Resonanzen; niedriger = besser.",
    notchDepth: "Kerbtiefe gegen einen einheitlich angenommenen Dämpfungsgrad",
    notchDepthNote: "Was wäre, wenn das Design EIN gemeinsames ζ für jeden Peak verwenden würde\nstatt des eigenen gemessenen Werts jedes Peaks?\nDas wahre ζ pro Peak ist mit einer passenden Vertikalen markiert.",
    extruderKernel: "Kernel für Extruder-Synchronisation",
    extruderKernelNote: "Exakte Faltung gegen ein angepasstes Smoother-Gegenstück,\nüber die Dauer des Shapers.",
    cornerAccel: "Beschleunigungsbedarf des Extruders an einer scharfen Ecke",
    cornerAccelNote: "100→20 mm/s Ecke, exakt gegen angepasst."
  },
  scale: {
    label: "Skala:",
    log: "log",
    linear: "linear"
  },
  recommended: {
    intro: "Dieselbe Suche, die SHAPER_CALIBRATE ausführt, auf deiner Messung:\n{{candidates}},\nbewertet und ausgewählt mit Kalicos Formel und Schwellenwerten.\nDie Restschwingung pro Peak wird unten für jede aktive Resonanz angezeigt.\nDer manuelle Explorer weiter unten startet mit dieser Auswahl, damit du sie anpassen kannst.",
    candidates: {
      klipper: "nur klassische Impuls-Shaper",
      kalicobe: "jeder klassische Shaper und smooth_*-Smoother",
      multimode: "jeder klassische Shaper und smooth_*-Smoother,\nplus eine Multimode-Suche über die erkannten Resonanzen\n(bis zu 4, mit der Peak-Cluster-Verbreiterungs-Korrektur)"
    },
    statusDefault: "Lade oben eine Messung, um eine Empfehlung zu berechnen."
  },
  explorer: {
    intro: "Wähle einen beliebigen Shaper-Typ und sieh, wie er sich gegen die geladene Messung schlägt:\nEckenglättung, prognostizierte max_accel und die Restschwingung,\ndie an jeder aktiven Resonanz übrig bleibt.\nVorbelegt aus der Empfehlung oben; ändere Typ oder Frequenzen zum Vergleichen.",
    shaperType: "Shaper-Typ",
    frequencyHz: "Frequenz (Hz)",
    dampingZeta: "Dämpfung ζ",
    optgroupSmoothers: "Smoother (keine Dämpfungseingabe)",
    optgroupClassic: "klassische Impuls-Shaper",
    optgroupMultimode: "Multimode (pro Peak)",
    baseShaperHeader: "Basis-Shaper",
    freqHzShort: "Freq. (Hz)",
    addPeak: "+ Peak hinzufügen",
    removePeakTitle: "Peak entfernen",
    scv: "SCV",
    acceleration: "Beschleunigung",
    accelEditHint: "Klicken, um einen genauen Wert einzugeben"
  },
  budget: {
    noPeaks: "Keine Peaks — lade oben eine Messung oder füge Peaks manuell hinzu.",
    line: "{{pulses}} / {{max}} Impulse verwendet ({{bases}})",
    overSuffix: " — überschreitet den Impulspuffer der Firmware; wähle kürzere Basis-Shaper (z. B. ZV oder MZV) oder entferne einen Peak."
  },
  reasons: {
    multimodeNeedsPeaks: "Multimode benötigt ≥2 Peaks mit positiven Frequenzen innerhalb des 32-Impuls-Budgets.",
    noPeaksConfigured: "keine Peaks konfiguriert — füge unten Peaks hinzu oder lade eine Messung.",
    positiveFrequency: "gib eine positive Frequenz ein."
  },
  cards: {
    shaper: "Shaper",
    frequencyTarget: "Zielfrequenz",
    frequenciesTarget: "Zielfrequenzen",
    smoothingScv: "Glättung<br>(SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "Glättung",
    projectedMaxAccel: "prognostizierte max_accel",
    residualVibrations: "Restschwingungen<br>(schlimmster Fall)",
    extruderKernelOrder: "Ordnung des Extruder-Kernels",
    peakExtruderAccelExact: "max. Extruder-Beschl. — exakt",
    peakExtruderAccelFitted: "max. Extruder-Beschl. — angepasst",
    reduction: "Reduktion",
    recommended: "empfohlen",
    vibrationsSearchScore: "Schwingungen (Such-Score)",
    maxAccel: "max_accel"
  },
  notes: {
    residualPerPeak: "Restschwingung, die dieser Shaper an jeder aktiven Resonanz hinterlässt (schlimmster Fall über ζ={{ratios}}):",
    loadCaptureForResidual: "Lade eine Messung, um die verbleibende Restschwingung an jeder erkannten Resonanz zu sehen.",
    deepNote: "Die <strong>exakte</strong> Faltung ({{impulses}} Impulse, Basis {{base}}) ist eine mathematisch perfekte Übereinstimmung mit der geformten Werkzeugkopf-Bewegung, aber jeder Impuls ist eine Unstetigkeit in der Geschwindigkeitsableitung.<br>Der <strong>angepasste</strong> Smoother (Ordnung {{order}}) tauscht etwas Genauigkeit gegen einen stetigen Kernel und senkt die maximale Extruder-Beschleunigung um <strong>{{reduction}}×</strong> an einer scharfen 100&rarr;20&nbsp;mm/s-Ecke.<br>Dies portiert <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, nahe jedem Peak mit dem eigenen Dämpfungsgrad dieses Peaks angepasst.<br>Das Diagramm darüber zeigt, warum die Dämpfung pro Peak wichtig ist: Bei einem gemeinsamen angenommenen ζ erhält nur der Peak, dessen wahres ζ passt, eine saubere Kerbe.",
    recoNoteIntro: "Restschwingung pro Peak mit dem oben empfohlenen Shaper, an jeder aktiven Resonanz:",
    recoCaveat: "Der Auto-Tuner durchsucht höchstens 4 Resonanz-Peaks.<br>Wenn dein Drucker mehr zeigt, füge die zusätzlichen manuell als weitere Multimode-Modi hinzu (nutze den Explorer unten)."
  },
  status: {
    computing: "Berechne Empfehlung für {{label}} (find_best_shaper-Port, ~1-2s)…"
  },
  capture: {
    xAxis: "die X-Achsen-Messung",
    yAxis: "die Y-Achsen-Messung",
    combinedRecomputed: "Kombiniert neu berechnet aus {{active}} ({{hidden}} ausgeblendet)",
    combinedAnalyzed: "Kombiniert (analysiert)",
    combinedAxesAnalyzed: "Kombiniert ({{axes}}, analysiert)",
    csvParseError: "„{{filename}}“ konnte nicht geparst werden: {{error}}. Erwartet wird eine Kalico-Resonanz-CSV mit einer „freq“-Spalte und einer „psd_x“/„psd_y“/„psd_z“/„psd_xyz“-Spalte.",
    csvEmptyFile: "leere Datei",
    csvMissingColumns: "konnte keine „freq“-Spalte und keine „psd_xyz“- (oder „psd“-) Spalte finden",
    rawMissingColumns: "konnte keine „time“- und „accel_x“/„accel_y“/„accel_z“-Spalten finden",
    rawTooShort: "Rohmessung ist zu kurz, um ein Spektrum zu berechnen",
    resetConfirm: "Alle Daten auf dieser Seite zurücksetzen? Das löscht die geladene Messung, die Empfehlung und den Explorer."
  },
  chart: {
    axis: {
      frequencyHz: "Frequenz (Hz)",
      residualVibration: "Restschwingung",
      normalizedPSD: "normalisierte PSD",
      normalizedPSDLog: "normalisierte PSD (log. Skala)",
      dampingRatioZeta: "einheitlich angenommener Dämpfungsgrad ζ des Designs",
      residualAtPeak: "Restschwingung am Peak",
      timeMs: "Zeit (ms)",
      kernelWeight: "Kernel-Gewicht",
      extruderAccelMmS2: "Extruder-Beschleunigung (mm/s²)"
    },
    dataset: {
      exactImpulses: "exakt (Impulse)",
      fittedSmoother: "angepasster Smoother",
      exactConvolution: "exakte Faltung",
      residualLabel: "{{label}} Restschwingung",
      resonanceMarker: "Resonanz {{freq}} Hz",
      peakMarker: "Peak {{n}} ({{freq}} Hz)",
      peakMarkerExcluded: "Peak {{n}} ({{freq}} Hz) — ausgeschlossen",
      residualAtPeakN: "Restschwingung @ Peak {{n}} ({{freq}} Hz)",
      trueZetaPeakN: "wahres ζ Peak {{n}} ({{damping}})"
    },
    tooltip: {
      freqHz: "{{f}} Hz",
      percentLabel: "{{label}}: {{value}}%",
      rawLabel: "{{label}}: {{value}}",
      assumedZeta: "angenommenes ζ = {{z}}",
      timeMs: "{{t}} ms",
      accelLabel: "{{label}}: {{value}} mm/s²"
    }
  },
  config: {
    intro: "Zeigt immer die Konfiguration für die Achse(n), an der/denen du gearbeitet hast.\nWechsle zwischen deinen manuellen Explorer-Anpassungen und dem automatisch vorgeschlagenen Shaper; jede Achse behält ihren eigenen letzten Wert, während du verschiedene Messungen hochlädst.",
    manual: "manuell",
    suggested: "vorgeschlagen",
    copyTitle: "In die Zwischenablage kopieren",
    axisDetected: "Bearbeitung: {{axis}}-Achse",
    editingLabel: "Bearbeitung:",
    prefixLabel: "<code>#*#</code>-Präfix verwenden",
    invalidComment: "# Konfiguriere zuerst einen gültigen Shaper im Explorer oben.",
    pickAxisComment: "# Wähle oben eine Achse (X oder Y), um diese Messung zur Konfiguration hinzuzufügen."
  },
  deep: {
    tag: "Tiefere Analyse — Multimode-Extruder-Synchronisation",
    intro: "Wie sich dieser handgebaute Multimode-Shaper bei Dämpfungs-Fehlanpassung\npro Peak verhält, und der angepasste Extruder-Smoother-Kernel, der\nPressure Advance damit synchron hält.\nWird nur angezeigt, wenn der Explorer auf Multimode steht."
  },
  footer: "Reproduziert Kalicos <code>find_best_shaper</code>-Shaper-Kalibrierung und -DSP vollständig in deinem Browser — deine Messung wird nie hochgeladen. Gerendert mit Chart.js. Quellcode auf <a href=\"https://github.com/Hannott/KlipperVisuals\">GitHub</a>."
};
