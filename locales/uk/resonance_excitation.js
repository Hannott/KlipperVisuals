// Ukrainian (Українська) -- strings for resonance_excitation.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.uk = window.KV_LOCALES.uk || {};
window.KV_LOCALES.uk.resonance_excitation = {
  title: "Дослідник збудження тестів резонансу — Klipper / Kalico",
  heading: "Дослідник збудження тестів резонансу",
  intro: "Команди руху <code>TEST_RESONANCES</code>: частотні гальванічні розгони на <code>hz_per_sec</code>, кожен цикл прискорюється на <code>accel_per_hz·freq</code>, з опціональним повільним <code>sweeping</code> коливанням, накладеним зверху. Обмеження прискорення/швидкості, що нав'язуються, походять від <em>фактичної</em> згенерованої послідовності; попередня версія використовувала фіксовану формулу, яка ігнорувала термін sweeping.",
  groupLabel: "генератор тестів (з resonance_tester.py)",
  controls: {
    maxFreq: "max_freq (Гц)",
    accelPerHz: "accel_per_hz",
    hzPerSec: "hz_per_sec",
    sweepingPeriod: "sweeping_period (с)",
    sweepingAccel: "sweeping_accel",
    zoomFrequency: "збільшена частота (Гц)"
  },
  legendHint: "Натисніть запис легенди на графіку, щоб приховати або показати цю лінію.",
  captions: {
    freqVsTime: "частота проти часу <span style=\"color:var(--text-muted)\">(розгін — зростає на hz_per_sec)</span>",
    accelEnvelope: "огинаюча прискорення проти часу <span style=\"color:var(--text-muted)\">(з обмеженнями прискорення, що нав'язуються)</span>",
    zoomedWaveform: "збільшена форма сигналу на вибраній частоті <span style=\"color:var(--text-muted)\">(фактичний ± імпульс та результуюча швидкість)</span>"
  },
  footer: "Рух створено портуванням <code>VibrationPulseTestGenerator.gen_test</code> та <code>SweepingVibrationsTestGenerator.gen_test</code>. Обмеження, похідні від послідовності <code>max|accel|+10</code> / <code>max|v|+1</code>, походять від накопичення реальної послідовності (як у <code>ResonanceTestExecutor.run_test</code>); попередня версія використовувала <code>freq_end·accel_per_hz+10</code> та <code>accel_per_hz·0.25+1</code>. <code>sweeping_period=0</code> вимикає розгін (його типове налаштування конфігурації); тут встановлено 0.4, щоб різниця була видима. Відтворено за допомогою Chart.js.",
  note: {
    warn: "<strong>Попередня версія недо-виконує обмеження прискорення.</strong> З увімкненим sweeping, справжнє піське прискорення дорівнює <code>{{maxA}}</code> мм/с², але формула попередньої версії <code>freq_end·accel_per_hz+10 = {{upA}}</code> ігнорує <code>sweeping_accel</code> — тому обмеження машини не були б підняті достатньо під час тесту. Обмеження, похідне від послідовності, становить <code>{{brA}}</code>.",
    normal: "Кожна частота запускає імпульс <code>+accel</code> / <code>−accel</code> тривалістю <code>0.25/freq</code> кожен; піськова швидкість на імпульс становить <code>accel_per_hz·0.25</code>, незалежно від частоти. Увімкніть sweeping (період &amp; прискорення &gt; 0), щоб побачити, як формула фіксованого обмеження попередньої версії не справляється."
  },
  cards: {
    testDuration: "тривалість тесту",
    truePeakAccel: "справжнє піське прискорення",
    accelLimitCompare: "обмеження прискорення: послідовність проти попередньої версії",
    velLimitCompare: "обмеження швидкості: послідовність проти попередньої версії"
  },
  values: {
    seconds: "{{value}} с",
    mmPerS2: "{{value}} мм/с²"
  },
  chart: {
    axisFreq: "частота (Гц)",
    axisTimeS: "час (с)",
    axisAccel: "прискорення (мм/с²)",
    axisTimeMs: "час (мс)",
    axisVelocity: "швидкість (мм/с)",
    datasetFrequency: "частота",
    datasetPeakAccelPos: "+піське прискорення",
    datasetPeakAccelNeg: "-піське прискорення",
    datasetLimitSequence: "обмеження (з послідовності)",
    datasetLimitUpstream: "обмеження (формула попередньої версії)",
    datasetAccel: "прискорення",
    datasetVelocity: "швидкість",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
