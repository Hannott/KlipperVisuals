// Czech (Čeština) -- strings for shaper_tuning.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.shaper_tuning = {
  title: "Ladění vyhlazovače — Klipper / Kalico",
  heading: "Ladění vyhlazovače",
  intro: "Načtěte rezonančí záznam a vše na této stránce se vypočítá z <em>vašich</em> dat: naměřené spektrum, vyhlazovač <code>SHAPER_CALIBRATE</code> by doporučil (úplné <code>find_best_shaper</code> hledání portované do vašeho prohlížeče), interaktivní průzkumník pro jakýkoli typ vyhlazovače a připravený <code>[input_shaper]</code> config. Nic se neposílá nikam — detekce vrcholů, odhad tlumení a celé hledání vyhlazovače běží lokálně.",
  steps: {
    load: "1. Načtěte rezonančí záznam",
    recommended: "2. Doporučovaný vyhlazovač",
    explorer: "3. Ruční průzkumník vyhlazovače",
    generateConfig: "4. Generujte <code>[input_shaper]</code> config",
    deepAnalysis: "Hlubší analýza"
  },
  databar: {
    loadExX: "Příklad: X-osový záznam",
    loadExY: "Příklad: Y-osový záznam",
    or: "nebo",
    clear: "Vymazat"
  },
  detectStatus: {
    default: "Žádný záznam není načten. Načtěte příklad nebo nahrajte Kalico <code>calibration_data_*.csv</code> / <code>resonances_*.csv</code> (sloupec <code>freq</code> plus <code>psd_x</code>/<code>psd_y</code>/<code>psd_z</code>/<code>psd_xyz</code>). Detekce vrcholů a odhad tlumícího poměru přes metodu polovičního výkonu běží přímo ve vašem prohlížeči — nic se neposílá nikam.",
    noPeaksDetected: "V {{source}} nebyly detectovány žádné vrcholy.",
    detected: "Detekovány {{n}} vrchol(y) v {{source}} (přímo, v prohlížeči): {{list}}."
  },
  captions: {
    measuredSpectrum: "naměřené rezonanční spektrum",
    measuredSpectrumNote: "(načtený záznam; přerušované svislé čáry označují detekované resonance; klikněte na položku legendy pro skrytí/zobrazení)",
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
    intro: "Stejné hledání, které běží <code>SHAPER_CALIBRATE</code>, na vašem záznamu: každý <code>smooth_*</code> vyhlazovač a klasický tvořovač, plus 2-vrcholové multimode hledání (s opravou rozšíření dvouvrcholového shluku), bodované a vybírané podle Kalico vzorce a prahů. Zbytková vibrace na vrchol se zobrazuje pro každou detekovanou rezonanci — včetně všech nad těmi dvěma nejlepšími, na které je auto-tuner omezen. Ruční průzkumník níže začíná od tohoto výběru, aby jste ho mohli upravit.",
    statusDefault: "Načtěte záznam výše pro výpočet doporučení."
  },
  explorer: {
    intro: "Vyberte jakýkoli typ vyhlazovače a podívejte se, jak si vede proti načtenému záznamu — vyhlazení rohů, projektovaný <code>max_accel</code> a zbytková vibrace zbývající v každé detekované rezonanci. Inicializováno z výše uvedeného doporučení; změňte typ nebo frekvence pro porovnání.",
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
    acceleration: "akcelerace"
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
    frequency: "frekvence",
    smoothingScv: "vyhlazení (SCV {{scv}}, {{accel}} mm/s²)",
    smoothing: "vyhlazení",
    projectedMaxAccel: "projektovaný max_accel",
    impulses: "impulsy",
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
    deepNote: "<strong>Přesná</strong> konvoluce ({{impulses}} impulsů, základní {{base}}) je matematicky dokonalou shodu s tvarovaným pohybem hlavice, ale každý impuls je nespojitostí v derivaci rychlosti. <strong>Přizpůsobená</strong> vyhlazovač (řád {{order}}) obchoduje trochu přesnosti za spojité jádro, snižuje vrcholovou akceleraci extrudéru o <strong>{{reduction}}×</strong> v ostrém rohu 100&rarr;20&nbsp;mm/s. To portuje <code>extruder_smoother.get_multi_mode_extruder_smoother</code>, přizpůsobeno blízko každého vrcholu s vlastním poměrem tlumení tohoto vrcholu. Výše uvedený graf ukazuje, proč na vrchol tlumení záleží: u jedné sdílené předpokládané ζ má pouze vrchol, jehož skutečné ζ se shoduje, čistý zářez.",
    recoNoteIntro: "Zbytková vibrace na vrchol pomocí doporučeného tvořovače výše, u <strong>každého</strong> vrcholu skutečně detekovaného v záznamu (ne jen těch, které vidělo 2vrcholové auto-tuner hledání):",
    recoCaveat: "Auto-tuner vždy hledá pouze své 2 nejvyšší detekované vrcholy; 3./4. vrchol (jako výše) lze dobře potlačit pouze náhodou, nebo ručně konfigurací multimode tvarovače se všemi uvedenými (použijte níže průzkumník)."
  },
  status: {
    computing: "Výpočet doporučení pro {{label}} (find_best_shaper port, ~1-2s)…",
    basedOn: "Založeno na {{n}} vrchol(ech) vlastního 2vrcholového hledání auto-tuneru ({{list}}), z {{total}} celkově detekovaných. Doporučená konfigurace: {{cfgHtml}}"
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
    intro: "Vypíše tvořovač aktuálně vybraný v níže uvedeném průzkumníku v Kalico formátu konfigurace.",
    generateBtn: "Generujte konfiguraci",
    axisLabel: "osa",
    axisBoth: "obě (x a y)",
    prefixLabel: "použijte save_config prefix (<code>#*#</code>)",
    invalidComment: "# Nejprve nakonfigurujte platný tvořovač v níže uvedeném průzkumníku."
  },
  deep: {
    tag: "Hlubší analýza — multimode synchronizace extrudéru",
    intro: "Jak se tento ručně postavený multimode tvořovač chová přes nesoulad tlumení na vrchol a přizpůsobené jádro extruder-smoother, které udržuje pressure advance v synchronizaci s ním. (Zobrazuje se pouze když je průzkumník nastaven na <strong>multimode</strong>.)"
  },
  footer: "Vše se vypočítá z načteného záznamu. Doporučení portuje Kalico <code>find_best_shaper</code> (<code>shaper_calibrate.py</code>) — každý kandidát smoother/shaper plus 2vrcholové multimode hledání s opravou rozšíření dvouvrcholového shluku, bodované Kalico vzorcem. Multimode tvořovač = konvoluce základního tvořovače laděného na každý konfigurovaný vrchol (amplitudy se násobí, časy se sčítají). Detekce vrcholu a odhad tlumícího poměru přes metodu polovičního výkonu portují <code>_detect_resonance_peaks</code> / <code>_estimate_damping_ratio</code>. Přizpůsobené jádro extrudéru reprodukuje <code>extruder_smoother.get_multi_mode_extruder_smoother</code> (Legendreova báze, KKT-omezená metoda nejmenších čtverců). Vykresleno pomocí Chart.js."
};
