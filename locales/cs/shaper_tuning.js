// Czech (Čeština) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.shaper_tuning = {
  title: "Ladění vyhlazovače — Klipper / Kalico",
  heading: "Ladění vyhlazovače",
  intro: "Načtěte rezonančí záznam a vše na této stránce se vypočítá z <em>vašich</em> dat: naměřené spektrum, vyhlazovač <code>SHAPER_CALIBRATE</code> by doporučil (úplné <code>find_best_shaper</code> hledání portované do vašeho prohlížeče), interaktivní průzkumník pro jakýkoli typ vyhlazovače a připravený <code>[input_shaper]</code> config.<br>Nic se neposílá nikam — detekce vrcholů, odhad tlumení a celé hledání vyhlazovače běží lokálně.",
  configRefLink: "Nastavujete novou tiskárnu? V <a href=\"config_reference.html\">referenční příručce konfigurace</a> najdete každou změněnou volbu <code>[input_shaper]</code> a <code>[resonance_tester]</code>.",
  steps: {
    load: "1. Načtěte rezonančí záznam",
    recommended: "2. Doporučovaný vyhlazovač",
    explorer: "3. Ruční průzkumník vyhlazovače",
    advancedTag: "pokročilé",
    deepAnalysis: "Hlubší analýza"
  },
  databar: {
    loadExX: "Příklad: X-osový záznam",
    loadExY: "Příklad: Y-osový záznam",
    upload: "Nahrát záznam…",
    clear: "Vymazat",
    tryExample: "Zatím žádná data? Vyzkoušejte příklad:",
    maxFreqLabel: "Max. frekvence k analýze (Hz):",
    maxFreqInfo: "Detekce vrcholů, graf naměřeného spektra i doporučovací hledání se zde zastaví. Výchozí hodnota (400 Hz) pokrývá běžný záznam ve stylu ADXL345 s rezervou; zvyšte ji, pokud akcelerometr s vyšší šířkou pásma (např. Beacon) naměřil skutečnou rezonanci ještě dál."
  },
  tier: {
    klipper: "Klipper",
    kalicobe: "Kalico BE",
    multimode: "Multimode",
    note: {
      klipper: "Pouze klasické impulsní tvořovače (Klipper mainline a Kalico).",
      kalicobe: "+ smooth_* vyhlazovače (Kalico bleeding-edge).",
      multimode: "+ multimode, tvarování s více vrcholy (bleeding-edge-v2 této fork)."
    },
    info: "Na úrovních <strong>Klipper</strong> a <strong>Kalico BE</strong> každý tvořovač (nebo vyhlazovač) cílí na jednu rezonanci, takže nedokáže potlačit několik vrcholů najednou.<br>Tento nástroj ponechá váš nejvyšší vrchol a ostatní odloží — kliknutím na značku vrcholu v legendě naměřeného spektra níže ji zahrnete nebo vyloučíte.<br>Chcete-li tvarovat více rezonancí najednou, použijte úroveň <strong>Multimode</strong>.",
    dismiss: "Zavřít",
    downloadNote: "Chcete si to vyzkoušet na vlastní tiskárně?",
    downloadLink: "Stáhnout větev multimode-shaping-v3 pro testování"
  },
  library: {
    label: "Dříve nahráno",
    loadTitle: "Načíst tento záznam",
    removeTitle: "Odebrat ze seznamu"
  },
  detectStatus: {
    default: "Žádný záznam není načten. Načtěte příklad nebo nahrajte Kalico <code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> (sloupec <code>freq</code> plus <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>).<br>Detekce vrcholů a odhad tlumícího poměru přes metodu polovičního výkonu běží přímo ve vašem prohlížeči — nic se neposílá nikam.",
    noPeaksDetected: "V {{source}} nebyly detectovány žádné vrcholy.",
    detected: "Detekovány {{n}} vrchol(y) v {{source}}: {{list}}."
  },
  captions: {
    measuredSpectrum: "naměřené rezonanční spektrum",
    measuredSpectrumNote: "Načtený záznam.\nPřerušované svislé čáry označují detekované rezonance.\nKliknutím na vrchol v legendě vyloučíte danou rezonanci z doporučení, kliknutím na osu ji zahrnete/vyloučíte.",
    residualVsFreq: "zbytková vibrace vs frekvence",
    residualVsFreqNote: "Odpověď vybraného vyhlazovače.\nPřerušované svislé čáry označují detekované rezonance; nižší = lepší.",
    notchDepth: "hloubka zářezu vs jednotně předpokládaný poměr tlumení",
    notchDepthNote: "Co kdyby design používal JEDNU sdílenou ζ pro všechny vrcholy\nmísto každého vrcholu s vlastní naměřenou hodnotou?\nSkutečná ζ na vrchol je označena odpovídající svislou čarou.",
    extruderKernel: "jádro synchronizace extrudéru",
    extruderKernelNote: "Přesná konvoluce vs přizpůsobená hladká varianta,\npo dobu trvání vyhlazovače.",
    cornerAccel: "požadavek na akceleraci extrudéru v ostrém rohu",
    cornerAccelNote: "roh 100→20 mm/s, přesný vs přizpůsobený."
  },
  scale: {
    label: "měřítko:",
    log: "log",
    linear: "lineární"
  },
  recommended: {
    intro: "Stejné hledání, které běží SHAPER_CALIBRATE, na vašem záznamu:\n{{candidates}},\nbodované a vybírané podle Kalico vzorce a prahů.\nZbytková vibrace na vrchol se zobrazuje níže pro každou aktivní rezonanci.\nRuční průzkumník níže začíná od tohoto výběru, abyste ho mohli upravit.",
    candidates: {
      klipper: "pouze klasické impulsní tvarovače",
      kalicobe: "každý klasický tvarovač a smooth_* vyhlazovač",
      multimode: "každý klasický tvarovač a smooth_* vyhlazovač,\nplus multimode hledání přes detekované rezonance\n(až 4, s opravou rozšíření vrcholového shluku)"
    },
    statusDefault: "Načtěte záznam výše pro výpočet doporučení."
  },
  explorer: {
    intro: "Vyberte jakýkoli typ vyhlazovače a podívejte se, jak si vede proti načtenému záznamu:\nvyhlazení rohů, projektovaný max_accel a zbytková vibrace\nzbývající v každé aktivní rezonanci.\nInicializováno z výše uvedeného doporučení; změňte typ nebo frekvence pro porovnání.",
    shaperType: "typ vyhlazovače",
    frequencyHz: "frekvence (Hz)",
    dampingZeta: "tlumení ζ",
    optgroupSmoothers: "vyhlazovače (bez vstupu tlumení)",
    optgroupClassic: "klasické impulsní tvarovače",
    optgroupMultimode: "multimode (na vrchol)",
    baseShaperHeader: "základní tvořovač",
    freqHzShort: "frekv. (Hz)",
    addPeak: "+ přidejte vrchol",
    removePeakTitle: "odebrat vrchol",
    scv: "SCV",
    acceleration: "akcelerace",
    accelEditHint: "Klikněte pro zadání přesné hodnoty"
  },
  budget: {
    noPeaks: "Žádné vrcholy — načtěte záznam výše, nebo přidejte vrcholy ručně.",
    line: "{{pulses}} / {{max}} impulsů použito ({{bases}})",
    overSuffix: " — překračuje vyrovnávací paměť impulsů firmware; vyberte kratší základní tvořovač(e) (např. ZV nebo MZV) nebo odeberte vrchol."
  },
  reasons: {
    multimodeNeedsPeaks: "multimode potřebuje ≥2 vrcholy s kladnými frekvencemi v rámci 32impulsního rozpočtu.",
    noPeaksConfigured: "žádné vrcholy není nakonfigurováno — přidejte vrcholy níže nebo načtěte záznam.",
    positiveFrequency: "zadejte kladnou frekvenci."
  },
  cards: {
    shaper: "tvořovač",
    frequencyTarget: "cílová frekvence",
    frequenciesTarget: "cílové frekvence",
    smoothingScv: "vyhlazení<br>(SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "vyhlazení",
    projectedMaxAccel: "projektovaný max_accel",
    residualVibrations: "zbytkové vibrace<br>(nejhorší případ)",
    extruderKernelOrder: "řád jádra extrudéru",
    peakExtruderAccelExact: "vrcholová akcelerace extrudéru — přesná",
    peakExtruderAccelFitted: "vrcholová akcelerace extrudéru — přizpůsobená",
    reduction: "redukce",
    recommended: "doporučeno",
    vibrationsSearchScore: "vibrace (skóre hledání)",
    maxAccel: "max_accel"
  },
  notes: {
    residualPerPeak: "Zbytková vibrace, kterou tento tvořovač zanechává v každé aktivní rezonanci (nejhorší případ přes ζ={{ratios}}):",
    loadCaptureForResidual: "Načtěte záznam, chcete-li vidět zbytky zbývající v každé detekované rezonanci.",
    deepNote: "<strong>Přesná</strong> konvoluce ({{impulses}} impulsů, základní {{base}}) je matematicky dokonalou shodu s tvarovaným pohybem hlavice, ale každý impuls je nespojitostí v derivaci rychlosti.<br><strong>Přizpůsobená</strong> vyhlazovač (řád {{order}}) obchoduje trochu přesnosti za spojité jádro, snižuje vrcholovou akceleraci extrudéru o <strong>{{reduction}}×</strong> v ostrém rohu 100&rarr;20&nbsp;mm/s.<br>To portuje <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, přizpůsobeno blízko každého vrcholu s vlastním poměrem tlumení tohoto vrcholu.<br>Výše uvedený graf ukazuje, proč na vrchol tlumení záleží: u jedné sdílené předpokládané ζ má pouze vrchol, jehož skutečné ζ se shoduje, čistý zářez.",
    recoNoteIntro: "Zbytková vibrace na vrchol pomocí doporučeného tvořovače výše, u každé aktivní rezonance:",
    recoCaveat: "Auto-tuner hledá nejvýše 4 rezonanční vrcholy.<br>Pokud jich vaše tiskárna vykazuje více, přidejte ty další ručně jako další multimode režimy (použijte průzkumník níže)."
  },
  status: {
    computing: "Výpočet doporučení pro {{label}} (find_best_shaper port, ~1-2s)…"
  },
  capture: {
    xAxis: "záznam X-osy",
    yAxis: "záznam Y-osy",
    combinedRecomputed: "Kombinované přepočítáno z {{active}} ({{hidden}} skryto)",
    combinedAnalyzed: "Kombinované (analyzováno)",
    combinedAxesAnalyzed: "Kombinované ({{axes}}, analyzováno)",
    csvParseError: "Nelze analyzovat \"{{filename}}\": {{error}}. Očekávám Kalico rezonanční CSV se sloupcem \"freq\" a sloupcem \"psd_x\"/\"psd_y\"/\"psd_z\"/\"psd_xyz\".",
    csvEmptyFile: "prázdný soubor",
    csvMissingColumns: "nelze nalézt sloupec \"freq\" a sloupec \"psd_xyz\" (nebo \"psd\")",
    rawMissingColumns: "nelze nalézt sloupce \"time\" a \"accel_x\"/\"accel_y\"/\"accel_z\"",
    rawTooShort: "surový záznam je příliš krátký pro výpočet spektra",
    resetConfirm: "Resetovat všechna data na této stránce? Tím se vymaže načtený záznam, doporučení a průzkumník."
  },
  chart: {
    axis: {
      frequencyHz: "frekvence (Hz)",
      residualVibration: "zbytková vibrace",
      normalizedPSD: "normalizovaná PSD",
      normalizedPSDLog: "normalizovaná PSD (logaritmické měřítko)",
      dampingRatioZeta: "jednotně předpokládaný poměr tlumení designu ζ",
      residualAtPeak: "zbytková vibrace na vrcholu",
      timeMs: "čas (ms)",
      kernelWeight: "váha jádra",
      extruderAccelMmS2: "akcelerace extrudéru (mm/s²)"
    },
    dataset: {
      exactImpulses: "přesné (impulsy)",
      fittedSmoother: "přizpůsobená vyhlazovač",
      exactConvolution: "přesná konvoluce",
      residualLabel: "{{label}} zbytková vibrace",
      suggestedResidualLabel: "doporučeno ({{label}}) zbytková vibrace",
      resonanceMarker: "rezonance {{freq}} Hz",
      peakMarker: "vrchol {{n}} ({{freq}} Hz)",
      peakMarkerExcluded: "vrchol {{n}} ({{freq}} Hz) — vyloučeno",
      residualAtPeakN: "zbytková vibrace @ vrchol {{n}} ({{freq}} Hz)",
      trueZetaPeakN: "skutečná ζ vrchol {{n}} ({{damping}})"
    },
    tooltip: {
      freqHz: "{{f}} Hz",
      percentLabel: "{{label}}: {{value}}%",
      rawLabel: "{{label}}: {{value}}",
      assumedZeta: "předpokládaná ζ = {{z}}",
      timeMs: "{{t}} ms",
      accelLabel: "{{label}}: {{value}} mm/s²"
    }
  },
  config: {
    suggestedHeading: "Doporučená konfigurace",
    manualHeading: "Ruční konfigurace",
    copyTitle: "Kopírovat do schránky",
    axisDetected: "Úpravy: osa {{axis}}",
    editingLabel: "Úpravy:",
    prefixLabel: "použijte prefix <code>#*#</code>",
    invalidComment: "# Nejprve nakonfigurujte platný tvořovač v průzkumníku výše.",
    invalidCommentSuggested: "# Zatím není k dispozici žádné doporučení.",
    pickAxisComment: "# Vyberte osu (X nebo Y) výše pro přidání tohoto záznamu do konfigurace.",
    pickAxisCommentManual: "# Nejprve vyberte osu (X nebo Y) v doporučené konfiguraci výše."
  },
  deep: {
    tag: "Hlubší analýza — multimode synchronizace extrudéru",
    intro: "Jak se tento ručně postavený multimode tvořovač chová přes nesoulad\ntlumení na vrchol a přizpůsobené jádro extruder-smoother,\nkteré udržuje pressure advance v synchronizaci s ním.\nZobrazuje se pouze když je průzkumník nastaven na multimode."
  },
  footer: "Reprodukuje kalibraci tvarovače <code>find_best_shaper</code> a DSP Kalico celé ve vašem prohlížeči — váš záznam se nikdy neodesílá. Vykresleno pomocí Chart.js. Zdrojový kód na <a href=\"https://github.com/Hannott/KlipperVisuals\">GitHubu</a>."
};
