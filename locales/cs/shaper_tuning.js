// Czech (Čeština) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.shaper_tuning = {
  title: "Ladění vyhlazovače — Klipper / Kalico",
  heading: "Ladění vyhlazovače",
  intro: "Načtěte rezonančí záznam a vše na této stránce se vypočítá z <em>vašich</em> dat: naměřené spektrum, vyhlazovač <code>SHAPER_CALIBRATE</code> by doporučil (úplné <code>find_best_shaper</code> hledání portované do vašeho prohlížeče), interaktivní průzkumník pro jakýkoli typ vyhlazovače a připravený <code>[input_shaper]</code> config.<br>Nic se neposílá nikam — detekce vrcholů, odhad tlumení a celé hledání vyhlazovače běží lokálně.",
  steps: {
    load: "1. Načtěte rezonančí záznam",
    recommended: "2. Doporučovaný vyhlazovač",
    explorer: "3. Ruční průzkumník vyhlazovače",
    deepAnalysis: "Hlubší analýza"
  },
  databar: {
    loadExX: "Příklad: X-osový záznam",
    loadExY: "Příklad: Y-osový záznam",
    upload: "Nahrát záznam…",
    clear: "Vymazat",
    tryExample: "Zatím žádná data? Vyzkoušejte příklad:"
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
    detected: "Detekovány {{n}} vrchol(y) v {{source}} (přímo, v prohlížeči): {{list}}."
  },
  captions: {
    measuredSpectrum: "naměřené rezonanční spektrum",
    measuredSpectrumNote: "(načtený záznam; přerušované svislé čáry označují detekované resonance; kliknutím na vrchol v legendě vyloučíte danou rezonanci z doporučení, kliknutím na osu ji zahrnete/vyloučíte)",
    residualVsFreq: "zbytková vibrace vs frekvence",
    residualVsFreqNote: "(odpověď vybraného vyhlazovače; přerušované svislé čáry označují detekované resonance; nižší = lepší)",
    notchDepth: "hloubka zářezu vs jednotně předpokládaný poměr tlumení",
    notchDepthNote: "(co kdyby design používal JEDNU sdílenou ζ pro všechny vrcholy místo každého vrcholu s vlastní naměřenou hodnotou? Skutečná ζ na vrchol je označena odpovídající svislou čarou)",
    extruderKernel: "jádro synchronizace extrudéru",
    extruderKernelNote: "(přesná konvoluce vs přizpůsobená hladká varianta, po dobu trvání vyhlazovače)",
    cornerAccel: "požadavek na akceleraci extrudéru v ostrém rohu",
    cornerAccelNote: "(roh 100&rarr;20&nbsp;mm/s, přesný vs přizpůsobený)"
  },
  scale: {
    label: "měřítko:",
    log: "log",
    linear: "lineární"
  },
  recommended: {
    intro: "Stejné hledání, které běží <code>SHAPER_CALIBRATE</code>, na vašem záznamu: každý <code>smooth_*</code> vyhlazovač a klasický tvořovač, plus multimode hledání přes detekované rezonance (až 4, s opravou rozšíření vrcholového shluku), bodované a vybírané podle Kalico vzorce a prahů.<br>Zbytková vibrace na vrchol se zobrazuje pro každou detekovanou rezonanci.<br>Ruční průzkumník níže začíná od tohoto výběru, abyste ho mohli upravit.",
    statusDefault: "Načtěte záznam výše pro výpočet doporučení."
  },
  explorer: {
    intro: "Vyberte jakýkoli typ vyhlazovače a podívejte se, jak si vede proti načtenému záznamu — vyhlazení rohů, projektovaný <code>max_accel</code> a zbytková vibrace zbývající v každé detekované rezonanci.<br>Inicializováno z výše uvedeného doporučení; změňte typ nebo frekvence pro porovnání.",
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
    residualPerPeak: "Zbytková vibrace, kterou tento tvořovač zanechává v každé detekované rezonanci (nejhorší případ přes ζ={{ratios}}):",
    loadCaptureForResidual: "Načtěte záznam, chcete-li vidět zbytky zbývající v každé detekované rezonanci.",
    deepNote: "<strong>Přesná</strong> konvoluce ({{impulses}} impulsů, základní {{base}}) je matematicky dokonalou shodu s tvarovaným pohybem hlavice, ale každý impuls je nespojitostí v derivaci rychlosti.<br><strong>Přizpůsobená</strong> vyhlazovač (řád {{order}}) obchoduje trochu přesnosti za spojité jádro, snižuje vrcholovou akceleraci extrudéru o <strong>{{reduction}}×</strong> v ostrém rohu 100&rarr;20&nbsp;mm/s.<br>To portuje <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, přizpůsobeno blízko každého vrcholu s vlastním poměrem tlumení tohoto vrcholu.<br>Výše uvedený graf ukazuje, proč na vrchol tlumení záleží: u jedné sdílené předpokládané ζ má pouze vrchol, jehož skutečné ζ se shoduje, čistý zářez.",
    recoNoteIntro: "Zbytková vibrace na vrchol pomocí doporučeného tvořovače výše, u <strong>každé</strong> rezonance detekované v záznamu:",
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
    intro: "Vždy zobrazuje konfiguraci pro osu (osy), se kterými jste pracovali.\nPřepínejte mezi svými ručními úpravami v průzkumníku a automaticky doporučeným tvořovačem; každá osa si pamatuje svou poslední hodnotu při nahrávání různých záznamů.",
    manual: "ruční",
    suggested: "doporučené",
    copyTitle: "Kopírovat do schránky",
    axisDetected: "Úpravy: osa {{axis}}",
    editingLabel: "Úpravy:",
    prefixLabel: "použijte prefix <code>#*#</code>",
    invalidComment: "# Nejprve nakonfigurujte platný tvořovač v níže uvedeném průzkumníku."
  },
  deep: {
    tag: "Hlubší analýza — multimode synchronizace extrudéru",
    intro: "Jak se tento ručně postavený multimode tvořovač chová přes nesoulad tlumení na vrchol a přizpůsobené jádro extruder-smoother, které udržuje pressure advance v synchronizaci s ním.<br>(Zobrazuje se pouze když je průzkumník nastaven na <strong>multimode</strong>.)"
  },
  footer: "Vše se vypočítá z načteného záznamu.<br>Doporučení portuje Kalico <code>find_best_shaper</code> (<code>shaper_calibrate.py</code>) — každý kandidát smoother/shaper plus multimode hledání přes detekované rezonance (až 4) s opravou rozšíření vrcholového shluku, bodované Kalico vzorcem.<br>Multimode tvořovač = konvoluce základního tvořovače laděného na každý konfigurovaný vrchol (amplitudy se násobí, časy se sčítají).<br>Detekce vrcholu a odhad tlumícího poměru přes metodu polovičního výkonu portují <code>_detect_resonance_peaks</code> / <code>_estimate_damping_ratio</code>.<br>Přizpůsobené jádro extrudéru reprodukuje <code>extruder_smoother.get_multi_mode_extruder_smoother</code> (Legendreova báze, KKT-omezená metoda nejmenších čtverců). Vykresleno pomocí Chart.js."
};
