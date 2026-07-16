// Norwegian (Bokmål) -- strings for shaper_estimation_method.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.shaper_estimation_method = {
  title: "Shaper-responsestimering — gammel finitt differanse vs ny analytisk",
  heading: "Shaper-responsestimering: gammel vs ny",
  intro: "<code>~2x hastighetsforbedring</code> for <code>SHAPER_CALIBRATE</code>. Begge metodene vurderer en shaper etter minimumet av den formede trinnresponsens <em>hastighet</em>. Den gamle metoden bygde posisjonsresponsen og finittdifferanserte den; den nye bruker <strong>analytisk hastighet</strong>, evaluerer den eksakt ved impulskinkene, og forbedrer det diskrete minimumet med en parabel — nøyaktig med langt færre samples.",
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
    samples: "samples fra gammel metode n_t",
    detailFrequency: "detaljfrekvens (Hz)"
  },
  legendHint: "Klikk på en legendeoppføring i et av diagrammene for å skjule eller vise den linjen.",
  captions: {
    residualVsFrequency: "restvibrasjon mot frekvens <span style=\"color:var(--text-muted)\">(reduser n_t og se den gamle metoden avvike)</span>",
    stepResponseVelocityPrefix: "trinnresponsens hastighet ved toppen, nær",
    stepResponseVelocityUnit: "Hz",
    stepResponseVelocityHint: "(målet er denne kurvens minimum)"
  },
  footer: "Portert fra <code>shaper_calibrate.estimate_shaper</code>: vindu <code>[T₀, T_N + 2·max(1/f, t_s)]</code>, <code>step_response</code> / <code>step_response_velocity</code> / <code>step_response_min_velocity</code>, kink-eksakt evaluering ved impulstidspunktene, og den parabolske <code>_refined_min</code>. Den gamle metoden bygger posisjonsresponsen og tar <code>Δpos/(ω·Δt)</code>. Begge normalisert med minimumshastigheten for et enkelt trinn. Rendret med Chart.js.",
  chart: {
    datasetNew: "ny",
    datasetOld: "gammel",
    datasetAnalyticVelocity: "analytisk hastighet",
    datasetFiniteDiffVelocity: "finitt-differanse-hastighet",
    datasetTrueMin: "faktisk min",
    axisResidualVibration: "restvibrasjon",
    axisFrequency: "frekvens (Hz)",
    axisResponseVelocity: "responshastighet",
    axisTime: "tid (ms)",
    tooltipLabel: "{{label}}: {{value}}"
  },
  note: "<strong>Restvibrasjon</strong> er poengsummen hver metode beregner — lavere betyr bedre demping for en gitt shaper. Denne siden sammenligner de to <em>estimeringsmetodene</em>, ikke shapere: <strong>analytisk</strong>-verdien er nøyaktig, og <strong>finitt-differanse</strong>-verdien tilnærmer den fra <code>n_t</code> samples. Ved <strong>n_t = {{nt}}</strong> avviker finitt-differanse-estimatet med opptil <strong>{{maxErr}}%</strong> over hele bandet. Den samler samples fra posisjonsresponsen og kan sprike over den skarpe hastighetsbunnen (rødt punkt), og underrapporterer derfor vanligvis den faktiske restvibrasjonen — et optimistisk feil svar. Den analytiske metoden evaluerer denne bunnen direkte og sjekker impulskinkene, og forblir eksakt med langt færre samples. <strong>Tallene i rødt nedenfor flagger estimeringsfeil, ikke en dårlig restvibrasjon.</strong>",
  cards: {
    residualAnalytic: "restvibrasjon @ {{fq}}Hz — analytisk (nøyaktig)",
    residualFiniteDiff: "restvibrasjon @ {{fq}}Hz — finitt-differanse (n_t)",
    finiteDiffError: "finitt-differanse-feil @ {{fq}}Hz (est − nøyaktig)",
    worstError: "verste estimeringsfeil over bandet",
    underReports: "(underrapporterer)",
    overReports: "(overrapporterer)"
  }
};
