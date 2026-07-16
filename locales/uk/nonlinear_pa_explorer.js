// Ukrainian (Українська) -- strings for nonlinear_pa_explorer.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.uk = window.KV_LOCALES.uk || {};
window.KV_LOCALES.uk.nonlinear_pa_explorer = {
  title: "Дослідник нелінійного тиску підачі — tanh проти recipr",
  heading: "Дослідник нелінійного тиску підачі",
  intro: "Порівняння моделей <code>tanh</code> та <code>recipr</code>. Додаткова передача екструдера = <code>ADVANCE·v + OFFSET·f(v/VELOCITY)</code>, де <code>f(x)=tanh(x)</code> або <code>f(x)=x/(1+x)</code>. Витрата матеріалу та прискорення моделюються над трапецеїдальним тестовим рухом, згладжені за допомогою параболічного згладжувача екструдера за замовчуванням мікропрограми. Лінія <strong>upstream</strong> показує основну лінійну модель (підача = <code>pressure_advance·v</code>) для порівняння.",
  groups: {
    modelParams: "параметри моделі",
    testMove: "тестовий рух &amp; синхронізація",
    upstream: "порівняння upstream (лінійний тиск підачі)"
  },
  controls: {
    advance: "ADVANCE",
    offset: "OFFSET",
    velocity: "VELOCITY",
    targetVelocity: "цільова швидкість (мм/с)",
    acceleration: "прискорення (мм/с²)",
    smoothTime: "smooth_time (с)",
    timeOffset: "time_offset (с)",
    pressureAdvance: "pressure_advance"
  },
  legendHint: "Клацніть на запис легенди на будь-якій діаграмі, щоб приховати або показати цю лінію.",
  captions: {
    advanceVsVelocity: "величина підачі в залежності від швидкості",
    flowOverMove: "витрата екструдера під час тестового руху",
    accelOverMove: "вимога прискорення екструдера під час тестового руху"
  },
  cards: {
    peakFlow: "максимальна витрата екструдера (мм/с) — tanh / recipr / upstream",
    peakAccel: "максимум |прискорення екструдера| (мм/с²) — tanh / recipr / upstream",
    accelRatio: "вимога прискорення ÷ прискорення головки інструменту — tanh / recipr / upstream"
  },
  footer: "Математика моделі: <code>klippy/chelper/kin_extruder.c</code> — нелінійні моделі <code>tanh</code>/<code>recipr</code> та функція upstream <code>pressure_advance_linear_model_func</code> (підача = <code>pressure_advance·v</code>). Ядро згладжувача: <code>klippy/extras/extruder_smoother.py</code> (парабол­ічне вікно за замовчуванням <code>w(τ)=1.5−6τ²</code>). Тестовий рух передбачає, що швидкість екструдера відстежує швидкість головки інструменту 1:1, тому цифри витрати є на одиницю витрати — форми кривих та різниці tanh-vs-recipr є найправдивішою частиною. Потребує інтернет-з'єднання для Chart.js (CDN).",
  chart: {
    datasetTanh: "tanh",
    datasetRecipr: "recipr",
    datasetUpstream: "upstream (лінійний)",
    datasetNominal: "номінальний",
    axisVelocity: "швидкість (мм/с)",
    axisTime: "час (мс)",
    axisAdvance: "додаткова підача (мм)",
    axisFlow: "витрата (мм/с)",
    axisAccel: "прискорення (мм/с²)",
    tooltipVelocity: "v = {{v}} мм/с",
    tooltipTime: "t = {{t}} мс",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
