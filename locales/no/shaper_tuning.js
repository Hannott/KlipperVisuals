// Norwegian (Bokmål) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.shaper_tuning = {
  title: "Shaper-tuning — Klipper / Kalico",
  heading: "Shaper-tuning",
  intro: "Last inn en resonansmåling, og alt på denne siden beregnes fra <em>dine</em> data: det målte spekteret, shaperen <code>SHAPER_CALIBRATE</code> ville anbefalt (hele <code>find_best_shaper</code>-søket portert til nettleseren din), en utforsker for å prøve ut hvilken som helst shaper-type, og en klar-til-lim <code>[input_shaper]</code>-konfigurasjon. Ingenting lastes opp noe sted — toppdeteksjon, dempingsestimering og hele shaper-søket kjører lokalt.",
  steps: {
    load: "1. Last inn en resonansmåling",
    recommended: "2. Anbefalt shaper",
    explorer: "3. Manuell shaper-utforsker",
    generateConfig: "4. Generer <code>[input_shaper]</code>-konfigurasjon",
    deepAnalysis: "Dypere analyse"
  },
  databar: {
    loadExX: "Eksempel: X-akse-måling",
    loadExY: "Eksempel: Y-akse-måling",
    or: "eller",
    upload: "Last opp måling…",
    clear: "Tøm",
    tryExample: "Ingen data ennå? Prøv et eksempel:"
  },
  library: {
    label: "Tidligere opplastet",
    loadTitle: "Last inn denne målingen",
    removeTitle: "Fjern fra listen"
  },
  detectStatus: {
    default: "Ingen måling lastet inn. Last inn et eksempel, eller last opp en Kalico <code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> (en <code>freq</code>-kolonne pluss <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>). Toppdeteksjon og estimering av dempingsforhold via halveringspunktmetoden kjører direkte i nettleseren din — ingenting lastes opp noe sted.",
    noPeaksDetected: "Ingen topper detektert i {{source}}.",
    detected: "Detekterte {{n}} topp(er) i {{source}} (direkte, i nettleseren): {{list}}."
  },
  captions: {
    measuredSpectrum: "målt resonansspektrum",
    measuredSpectrumNote: "(den innlastede målingen; stiplede vertikale linjer markerer de detekterte resonansene; klikk en legendeoppføring for å vise/skjule den)",
    residualVsFreq: "restvibrasjon mot frekvens",
    residualVsFreqNote: "(responsen til den valgte shaperen; stiplede vertikale linjer markerer de detekterte resonansene; lavere = bedre)",
    notchDepth: "dybde på notch mot et uniformt antatt dempingsforhold",
    notchDepthNote: "(hva om designet brukte ÉN delt ζ for alle toppene, i stedet for hver topps egen målte verdi? Sann ζ per topp er markert med en tilhørende vertikal linje)",
    extruderKernel: "kjerne for ekstrudersynkronisering",
    extruderKernelNote: "(eksakt konvolusjon mot en tilpasset smoother-motpart, over shaperens egen varighet)",
    cornerAccel: "ekstruderens akselerasjonsbehov i et skarpt hjørne",
    cornerAccelNote: "(100&rarr;20&nbsp;mm/s hjørne, eksakt mot tilpasset)"
  },
  scale: {
    label: "skala:",
    log: "log",
    linear: "lineær"
  },
  recommended: {
    intro: "Det samme søket <code>SHAPER_CALIBRATE</code> kjører, på din måling: hver <code>smooth_*</code>-smoother og klassiske shaper, pluss et multimode-søk over de detekterte resonansene (opptil 4, med fiksen for utvidelse av topp-klynger), poengsatt og valgt med Kalicos formel og grenseverdier. Residual per topp vises for hver detekterte resonans. Den manuelle utforskeren nedenfor starter fra dette valget, slik at du kan justere det.",
    statusDefault: "Last inn en måling ovenfor for å beregne en anbefaling."
  },
  explorer: {
    intro: "Velg en shaper-type og se hvordan den presterer mot den innlastede målingen — hjørneglatting, forventet <code>max_accel</code>, og restvibrasjonen som er igjen ved hver detekterte resonans. Forhåndsutfylt fra anbefalingen ovenfor; endre type eller frekvenser for å sammenligne.",
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
    acceleration: "akselerasjon"
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
    frequency: "frekvens",
    smoothingScv: "glatting (SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "glatting",
    projectedMaxAccel: "forventet max_accel",
    impulses: "impulser",
    extruderKernelOrder: "orden på ekstruderkjerne",
    peakExtruderAccelExact: "maks ekstruderakselerasjon — eksakt",
    peakExtruderAccelFitted: "maks ekstruderakselerasjon — tilpasset",
    reduction: "reduksjon",
    recommended: "anbefalt",
    vibrationsSearchScore: "vibrasjoner (søke-score)",
    maxAccel: "max_accel"
  },
  notes: {
    residualPerPeak: "Restvibrasjonen denne shaperen etterlater ved hver detekterte resonans (verste tilfelle over ζ={{ratios}}):",
    loadCaptureForResidual: "Last inn en måling for å se residualen som er igjen ved hver detekterte resonans.",
    deepNote: "Den <strong>eksakte</strong> konvolusjonen ({{impulses}} impulser, grunn {{base}}) er en matematisk perfekt match til den formede verktøyhode-bevegelsen, men hver impuls er en diskontinuitet i hastighetsderivatet. Den <strong>tilpassede</strong> smootheren (orden {{order}}) bytter litt eksakthet mot en kontinuerlig kjerne, og reduserer maks ekstruderakselerasjon med <strong>{{reduction}}×</strong> i et skarpt 100&rarr;20&nbsp;mm/s-hjørne. Dette er en portering av <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, tilpasset nær hver topp med den toppens eget dempingsforhold. Diagrammet over viser hvorfor demping per topp betyr noe: med én delt antatt ζ er det bare toppen hvis sanne ζ stemmer som får en ren notch.",
    recoNoteIntro: "Residual per topp med den anbefalte shaperen ovenfor, ved <strong>hver</strong> resonans som er detektert i målingen:",
    recoCaveat: "Auto-tuneren søker gjennom maksimalt 4 resonanstopper. Hvis printeren din har flere, legg til de ekstra som flere multimode-moduser manuelt (bruk utforskeren nedenfor)."
  },
  status: {
    computing: "Beregner anbefaling for {{label}} (find_best_shaper-port, ~1-2s)…",
    basedOn: "Basert på de {{n}} detekterte resonanstoppen(e) ({{list}}). Anbefalt konfigurasjon: {{cfgHtml}}"
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
      resonanceMarker: "resonans {{freq}} Hz",
      peakMarker: "topp {{n}} ({{freq}} Hz)",
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
    intro: "Skriver ut shaperen som for øyeblikket er valgt i utforskeren ovenfor, i Kalicos konfigurasjonsformat.",
    generateBtn: "Generer konfigurasjon",
    axisLabel: "akse",
    axisBoth: "begge (x og y)",
    prefixLabel: "bruk save_config-prefiks (<code>#*#</code>)",
    invalidComment: "# Konfigurer en gyldig shaper i utforskeren ovenfor først."
  },
  deep: {
    tag: "Dypere analyse — multimode ekstrudersynkronisering",
    intro: "Hvordan denne håndbygde multimode-shaperen oppfører seg ved avvik i demping per topp, og den tilpassede ekstruder-smoother-kjernen som holder pressure advance synkronisert med den. (Vises bare når utforskeren er satt til <strong>multimode</strong>.)"
  },
  footer: "Alt beregnes fra den innlastede målingen. Anbefalingen er en portering av Kalicos <code>find_best_shaper</code> (<code>shaper_calibrate.py</code>) — hver smoother-/shaper-kandidat pluss et multimode-søk over de detekterte resonansene (opptil 4) med fiksen for utvidelse av topp-klynger, poengsatt med Kalicos formel. Multimode-shaper = konvolusjon av en grunn-shaper tilpasset hver konfigurerte topp (amplituder multipliseres, tider legges sammen). Toppdeteksjon og dempingsestimering via halveringspunktmetoden er en portering av <code>_detect_resonance_peaks</code> / <code>_estimate_damping_ratio</code>. Den tilpassede ekstruderkjernen reproduserer <code>extruder_smoother.get_multi_mode_extruder_smoother</code> (Legendre-basis, KKT-begrenset minste kvadraters metode). Rendret med Chart.js."
};
