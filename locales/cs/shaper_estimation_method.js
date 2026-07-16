// Czech (Čeština) -- strings for shaper_estimation_method.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.shaper_estimation_method = {
  title: "Odhad odezvy tvarování — stará metoda konečných diferencí vs. nová analytická",
  heading: "Odhad odezvy tvarování: staré vs. nové",
  intro: "Zrychlení <code>~2x</code> pro <code>SHAPER_CALIBRATE</code>. Obě metody hodnotí tvarovač podle minima rychlosti odezvy na stupňový signál <em>po tvarování</em>. Stará metoda vytvořila pozici odezvy a aplikovala na ni numerickou diferenciaci; nová používá <strong>analytickou rychlost</strong>, vyhodnocuje ji přesně v rozích impulsů a zpřesňuje diskrétní minimum parabolou — přesná s daleko méně vzorky.",
  shaperNames: {
    zv: "zv",
    mzv: "mzv",
    ei: "ei",
    "2hump_ei": "2hump_ei",
    "3hump_ei": "3hump_ei"
  },
  controls: {
    shaperFreq: "shaper_freq (Hz)",
    dampingRatio: "damping_ratio",
    samples: "vzorky staré metody n_t",
    detailFrequency: "detailní frekvence (Hz)"
  },
  legendHint: "Klikněte na položku legendy na kterémkoli grafu, abyste skryli nebo zobrazili danou čáru.",
  captions: {
    residualVsFrequency: "zbytkové vibrace vs. frekvence <span style=\"color:var(--text-muted)\">(snižte n_t a sledujte odchylku staré metody)</span>",
    stepResponseVelocityPrefix: "rychlost odezvy na stupňový signál na vrcholu, blízko",
    stepResponseVelocityUnit: "Hz",
    stepResponseVelocityHint: "(metrika je minimum této křivky)"
  },
  footer: "Přeneseno z <code>shaper_calibrate.estimate_shaper</code>: okno <code>[T₀, T_N + 2·max(1/f, t_s)]</code>, <code>step_response</code> / <code>step_response_velocity</code> / <code>step_response_min_velocity</code>, vyhodnocení přesné v rozích impulsů a parabolické <code>_refined_min</code>. Stará cesta vytváří odezvu polohy a bere <code>Δpos/(ω·Δt)</code>. Obě normalizovány minimální rychlostí jednoho kroku. Vykresleno pomocí Chart.js.",
  chart: {
    datasetNew: "nová",
    datasetOld: "stará",
    datasetAnalyticVelocity: "analytická rychlost",
    datasetFiniteDiffVelocity: "rychlost konečné diference",
    datasetTrueMin: "skutečné minimum",
    axisResidualVibration: "zbytkové vibrace",
    axisFrequency: "frekvence (Hz)",
    axisResponseVelocity: "rychlost odezvy",
    axisTime: "čas (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  },
  note: "<strong>Zbytkové vibrace</strong> jsou skóre, které každá metoda počítá — nižší znamená lepší utlumení pro daný tvarovač. Tato stránka porovnává dvě <em>metody odhadu</em>, ne samotné tvarovače: <strong>analytická</strong> hodnota je přesná a <strong>konečná diference</strong> ji aproximuje z <code>n_t</code> vzorků. Při <code>n_t = {{nt}}</code> je odhad konečné diference mimo až o <strong>{{maxErr}}%</strong> v celém pásmu. Vzorkuje odezvu polohy a může přeskočit ostrý propad rychlosti (červená tečka), takže obvykle <em>podhodnocuje</em> skutečné zbytky — optimisticky špatná odpověď. Analytická metoda vyhodnocuje ten propad přímo a kontroluje rohy impulsů, zůstává přesná s daleko méně vzorky. <strong>Červené hodnoty níže označují chybu odhadu, nikoli špatné zbytky.</strong>",
  cards: {
    residualAnalytic: "zbytky @ {{fq}}Hz — analytické (přesné)",
    residualFiniteDiff: "zbytky @ {{fq}}Hz — konečná diference (n_t)",
    finiteDiffError: "chyba konečné diference @ {{fq}}Hz (odhad − přesné)",
    worstError: "nejhorší chyba odhadu v celém pásmu",
    underReports: "(podhodnocuje)",
    overReports: "(nadhodnocuje)"
  }
};
