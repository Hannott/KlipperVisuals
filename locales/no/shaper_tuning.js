// Norwegian (Bokmål) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.shaper_tuning = {
  title: "Shaper-tuning — Klipper / Kalico",
  heading: "Shaper-tuning",
  intro: "Last inn en resonansmåling, og alt på denne siden beregnes fra <em>dine</em> data: det målte spekteret, shaperen <code>SHAPER_CALIBRATE</code> ville anbefalt (hele <code>find_best_shaper</code>-søket portert til nettleseren din), en utforsker for å prøve ut hvilken som helst shaper-type, og en klar-til-lim <code>[input_shaper]</code>-konfigurasjon.<br>Ingenting lastes opp noe sted — toppdeteksjon, dempingsestimering og hele shaper-søket kjører lokalt.",
  configRefLink: "Setter du opp en ny skriver? Se <a href=\"config_reference.html\">konfigurasjonsreferansen</a> for hver endrede <code>[input_shaper]</code>- og <code>[resonance_tester]</code>-innstilling.",
  steps: {
    load: "1. Last inn en resonansmåling",
    recommended: "2. Anbefalt shaper",
    explorer: "3. Manuell shaper-utforsker",
    advancedTag: "avansert",
    deepAnalysis: "Dypere analyse"
  },
  databar: {
    loadExX: "Eksempel: X-akse-måling",
    loadExY: "Eksempel: Y-akse-måling",
    upload: "Last opp måling…",
    clear: "Tøm",
    tryExample: "Ingen data ennå? Prøv et eksempel:",
    maxFreqLabel: "Maks. frekvens å analysere (Hz):",
    maxFreqInfo: "Toppdeteksjon, det målte spekteret og anbefalingssøket stopper her. Standardverdien (400 Hz) dekker en vanlig ADXL345-måling med god margin; øk den hvis et akselerometer med høyere båndbredde (f.eks. Beacon) har målt en reell resonans lenger ute."
  },
  tier: {
    klipper: "Klipper",
    kalicobe: "Kalico BE",
    multimode: "Multimode",
    note: {
      klipper: "Kun klassiske impuls-shapere (Klipper mainline og Kalico).",
      kalicobe: "+ smooth_*-smoothers (Kalico bleeding-edge).",
      multimode: "+ multimode, N-topps forming (denne fork'ens bleeding-edge-v2)."
    },
    info: "På <strong>Klipper</strong>- og <strong>Kalico BE</strong>-nivåene retter hver shaper (eller smoother) seg mot én enkelt resonans, så den kan ikke dempe flere topper samtidig.<br>Dette verktøyet beholder den høyeste toppen din og legger resten til side — klikk en toppmarkør i forklaringen til det målte spekteret nedenfor for å ta den med eller utelate den.<br>For å dempe flere resonanser samtidig, bruk <strong>Multimode</strong>-nivået.",
    dismiss: "Lukk",
    downloadNote: "Vil du prøve dette på din egen skriver?",
    downloadLink: "Last ned multimode-shaping-v3-grenen for testing"
  },
  library: {
    label: "Tidligere opplastet",
    loadTitle: "Last inn denne målingen",
    removeTitle: "Fjern fra listen"
  },
  detectStatus: {
    default: "Ingen måling lastet inn. Last inn et eksempel, eller last opp en Kalico <code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> (en <code>freq</code>-kolonne pluss <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>).<br>Toppdeteksjon og estimering av dempingsforhold via halveringspunktmetoden kjører direkte i nettleseren din — ingenting lastes opp noe sted.",
    noPeaksDetected: "Ingen topper detektert i {{source}}.",
    detected: "Detekterte {{n}} topp(er) i {{source}}: {{list}}."
  },
  captions: {
    measuredSpectrum: "målt resonansspektrum",
    measuredSpectrumNote: "Den innlastede målingen.\nStiplede vertikale linjer markerer de detekterte resonansene.\nKlikk en topp i forklaringen for å utelate den resonansen fra anbefalingen, eller en akse for å ta den med/utelate den.",
    residualVsFreq: "restvibrasjon mot frekvens",
    residualVsFreqNote: "Responsen til den valgte shaperen.\nStiplede vertikale linjer markerer de detekterte resonansene; lavere = bedre.",
    notchDepth: "dybde på notch mot et uniformt antatt dempingsforhold",
    notchDepthNote: "Hva om designet brukte ÉN delt ζ for alle toppene,\ni stedet for hver topps egen målte verdi?\nSann ζ per topp er markert med en tilhørende vertikal linje.",
    extruderKernel: "kjerne for ekstrudersynkronisering",
    extruderKernelNote: "Eksakt konvolusjon mot en tilpasset smoother-motpart,\nover shaperens egen varighet.",
    cornerAccel: "ekstruderens akselerasjonsbehov i et skarpt hjørne",
    cornerAccelNote: "100→20 mm/s hjørne, eksakt mot tilpasset."
  },
  scale: {
    label: "skala:",
    log: "log",
    linear: "lineær"
  },
  recommended: {
    intro: "Det samme søket SHAPER_CALIBRATE kjører, på din måling:\n{{candidates}},\npoengsatt og valgt med Kalicos formel og grenseverdier.\nResidual per topp vises nedenfor for hver aktive resonans.\nDen manuelle utforskeren lenger ned starter fra dette valget, slik at du kan justere det.",
    candidates: {
      klipper: "kun klassiske impuls-shapere",
      kalicobe: "hver klassiske shaper og smooth_*-smoother",
      multimode: "hver klassiske shaper og smooth_*-smoother,\npluss et multimode-søk over de detekterte resonansene\n(opptil 4, med fiksen for utvidelse av topp-klynger)"
    },
    statusDefault: "Last inn en måling ovenfor for å beregne en anbefaling."
  },
  explorer: {
    intro: "Velg en shaper-type og se hvordan den presterer mot den innlastede målingen:\nhjørneglatting, forventet max_accel, og restvibrasjonen\nsom er igjen ved hver aktive resonans.\nForhåndsutfylt fra anbefalingen ovenfor; endre type eller frekvenser for å sammenligne.",
    shaperType: "shaper-type",
    frequencyHz: "frekvens (Hz)",
    dampingZeta: "demping ζ",
    optgroupSmoothers: "smoothers (ingen dempingsinngang)",
    optgroupClassic: "klassiske impuls-shapere",
    optgroupMultimode: "multimode (per topp)",
    baseShaperHeader: "grunn-shaper",
    freqHzShort: "frekv. (Hz)",
    addPeak: "+ legg til topp",
    removePeakTitle: "fjern topp",
    scv: "SCV",
    acceleration: "akselerasjon",
    accelEditHint: "Klikk for å skrive inn en eksakt verdi"
  },
  budget: {
    noPeaks: "Ingen topper — last inn en måling ovenfor, eller legg til topper manuelt.",
    line: "{{pulses}} / {{max}} impulser brukt ({{bases}})",
    overSuffix: " — overskrider fastvarens impulsbuffer; velg kortere grunn-shaper(e) (f.eks. ZV eller MZV), eller fjern en topp."
  },
  reasons: {
    multimodeNeedsPeaks: "multimode krever ≥2 topper med positive frekvenser innenfor 32-impulsbudsjettet.",
    noPeaksConfigured: "ingen topper konfigurert — legg til topper nedenfor eller last inn en måling.",
    positiveFrequency: "angi en positiv frekvens."
  },
  cards: {
    shaper: "shaper",
    frequencyTarget: "målfrekvens",
    frequenciesTarget: "målfrekvenser",
    smoothingScv: "glatting<br>(SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "glatting",
    projectedMaxAccel: "forventet max_accel",
    residualVibrations: "restvibrasjoner<br>(verste tilfelle)",
    extruderKernelOrder: "orden på ekstruderkjerne",
    peakExtruderAccelExact: "maks ekstruderakselerasjon — eksakt",
    peakExtruderAccelFitted: "maks ekstruderakselerasjon — tilpasset",
    reduction: "reduksjon",
    recommended: "anbefalt",
    vibrationsSearchScore: "vibrasjoner (søke-score)",
    maxAccel: "max_accel"
  },
  notes: {
    residualPerPeak: "Restvibrasjonen denne shaperen etterlater ved hver aktive resonans (verste tilfelle over ζ={{ratios}}):",
    loadCaptureForResidual: "Last inn en måling for å se residualen som er igjen ved hver detekterte resonans.",
    deepNote: "Den <strong>eksakte</strong> konvolusjonen ({{impulses}} impulser, grunn {{base}}) er en matematisk perfekt match til den formede verktøyhode-bevegelsen, men hver impuls er en diskontinuitet i hastighetsderivatet.<br>Den <strong>tilpassede</strong> smootheren (orden {{order}}) bytter litt eksakthet mot en kontinuerlig kjerne, og reduserer maks ekstruderakselerasjon med <strong>{{reduction}}×</strong> i et skarpt 100&rarr;20&nbsp;mm/s-hjørne.<br>Dette er en portering av <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, tilpasset nær hver topp med den toppens eget dempingsforhold.<br>Diagrammet over viser hvorfor demping per topp betyr noe: med én delt antatt ζ er det bare toppen hvis sanne ζ stemmer som får en ren notch.",
    recoNoteIntro: "Residual per topp med den anbefalte shaperen ovenfor, ved hver aktive resonans:",
    recoCaveat: "Auto-tuneren søker gjennom maksimalt 4 resonanstopper.<br>Hvis printeren din har flere, legg til de ekstra som flere multimode-moduser manuelt (bruk utforskeren nedenfor)."
  },
  status: {
    computing: "Beregner anbefaling for {{label}} (find_best_shaper-port, ~1-2s)…"
  },
  capture: {
    xAxis: "X-akse-målingen",
    yAxis: "Y-akse-målingen",
    combinedRecomputed: "Kombinert regnet på nytt fra {{active}} ({{hidden}} skjult)",
    combinedAnalyzed: "Kombinert (analysert)",
    combinedAxesAnalyzed: "Kombinert ({{axes}}, analysert)",
    csvParseError: "Kunne ikke tolke \"{{filename}}\": {{error}}. Forventet en Kalico-resonans-CSV med en \"freq\"-kolonne og en \"psd_x\"/\"psd_y\"/\"psd_z\"/\"psd_xyz\"-kolonne.",
    csvEmptyFile: "tom fil",
    csvMissingColumns: "fant ikke en \"freq\"-kolonne og en \"psd_xyz\"-kolonne (eller \"psd\")",
    rawMissingColumns: "fant ikke kolonnene \"time\" og \"accel_x\"/\"accel_y\"/\"accel_z\"",
    rawTooShort: "råmålingen er for kort til å beregne et spekter",
    resetConfirm: "Nullstille all data på denne siden? Dette tømmer den innlastede målingen, anbefalingen og utforskeren."
  },
  chart: {
    axis: {
      frequencyHz: "frekvens (Hz)",
      residualVibration: "restvibrasjon",
      normalizedPSD: "normalisert PSD",
      normalizedPSDLog: "normalisert PSD (logaritmisk skala)",
      dampingRatioZeta: "designets uniformt antatte dempingsforhold ζ",
      residualAtPeak: "residual ved topp",
      timeMs: "tid (ms)",
      kernelWeight: "kjernevekt",
      extruderAccelMmS2: "ekstruderakselerasjon (mm/s²)"
    },
    dataset: {
      exactImpulses: "eksakt (impulser)",
      fittedSmoother: "tilpasset smoother",
      exactConvolution: "eksakt konvolusjon",
      residualLabel: "{{label}} residual",
      suggestedResidualLabel: "anbefalt ({{label}}) residual",
      resonanceMarker: "resonans {{freq}} Hz",
      peakMarker: "topp {{n}} ({{freq}} Hz)",
      peakMarkerExcluded: "topp {{n}} ({{freq}} Hz) — ekskludert",
      residualAtPeakN: "residual @ topp {{n}} ({{freq}} Hz)",
      trueZetaPeakN: "sann ζ topp {{n}} ({{damping}})"
    },
    tooltip: {
      freqHz: "{{f}} Hz",
      percentLabel: "{{label}}: {{value}}%",
      rawLabel: "{{label}}: {{value}}",
      assumedZeta: "antatt ζ = {{z}}",
      timeMs: "{{t}} ms",
      accelLabel: "{{label}}: {{value}} mm/s²"
    }
  },
  config: {
    suggestedHeading: "Anbefalt konfigurasjon",
    manualHeading: "Manuell konfigurasjon",
    copyTitle: "Kopier til utklippstavle",
    axisDetected: "Redigerer: {{axis}}-aksen",
    editingLabel: "Redigerer:",
    prefixLabel: "bruk <code>#*#</code>-prefiks",
    invalidComment: "# Konfigurer en gyldig shaper i utforskeren ovenfor først.",
    invalidCommentSuggested: "# Ingen anbefaling tilgjengelig ennå.",
    pickAxisComment: "# Velg en akse (X eller Y) ovenfor for å legge denne målingen til konfigurasjonen.",
    pickAxisCommentManual: "# Velg en akse (X eller Y) i den anbefalte konfigurasjonen ovenfor først."
  },
  deep: {
    tag: "Dypere analyse — multimode ekstrudersynkronisering",
    intro: "Hvordan denne håndbygde multimode-shaperen oppfører seg ved avvik\ni demping per topp, og den tilpassede ekstruder-smoother-kjernen\nsom holder pressure advance synkronisert med den.\nVises bare når utforskeren er satt til multimode."
  },
  footer: "Reproduserer Kalicos <code>find_best_shaper</code> shaper-kalibrering og DSP i sin helhet i nettleseren din — målingen din lastes aldri opp. Rendret med Chart.js. Kildekode på <a href=\"https://github.com/Hannott/KlipperVisuals\">GitHub</a>."
};
