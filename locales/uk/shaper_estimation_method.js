// Ukrainian (Українська) -- strings for shaper_estimation_method.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.uk = window.KV_LOCALES.uk || {};
window.KV_LOCALES.uk.shaper_estimation_method = {
  title: "Оцінка відповіді формувача — старий метод скінченних різниць проти нового аналітичного",
  heading: "Оцінка відповіді формувача: старе проти нового",
  intro: "Прискорення у <code>~2х разів</code> для <code>SHAPER_CALIBRATE</code>. Обидва методи оцінюють формувач за мінімумом <em>швидкості</em> сформованої реакції на стрибок. Старий метод будував відповідь положення й здійснював її скінченне диференціювання; новий використовує <strong>аналітичну швидкість</strong>, обчислює її точно в точках виламання імпульсу й уточнює дискретний мінімум параболою — точний із набагато меншою кількістю вибірок.",
  shaperNames: {
    zv: "zv",
    mzv: "mzv",
    ei: "ei",
    "2hump_ei": "2hump_ei",
    "3hump_ei": "3hump_ei"
  },
  controls: {
    shaperFreq: "shaper_freq (Гц)",
    dampingRatio: "damping_ratio",
    samples: "вибірки старого методу n_t",
    detailFrequency: "частота деталізації (Гц)"
  },
  legendHint: "Натисніть на запис у легенді на будь-якому графіку, щоб приховати або показати цю лінію.",
  captions: {
    residualVsFrequency: "залишкова вібрація проти частоти <span style=\"color:var(--text-muted)\">(зменшіть n_t і спостерігайте відхилення старого методу)</span>",
    stepResponseVelocityPrefix: "швидкість реакції на стрибок на піку, близько",
    stepResponseVelocityUnit: "Гц",
    stepResponseVelocityHint: "(метрика — це мінімум цієї кривої)"
  },
  footer: "Перенесено з <code>shaper_calibrate.estimate_shaper</code>: вікно <code>[T₀, T_N + 2·max(1/f, t_s)]</code>, <code>step_response</code> / <code>step_response_velocity</code> / <code>step_response_min_velocity</code>, оцінка точна на виламаннях в часи імпульсів, та уточнений <code>_refined_min</code>. Старий шлях будує відповідь положення й приймає <code>Δpos/(ω·Δt)</code>. Обидва нормовані за мінімальною швидкістю відповіді на один стрибок. Відтворено з Chart.js.",
  chart: {
    datasetNew: "нове",
    datasetOld: "старе",
    datasetAnalyticVelocity: "аналітична швидкість",
    datasetFiniteDiffVelocity: "швидкість скінченної різниці",
    datasetTrueMin: "справжній мінімум",
    axisResidualVibration: "залишкова вібрація",
    axisFrequency: "частота (Гц)",
    axisResponseVelocity: "швидкість реакції",
    axisTime: "час (мс)",
    tooltipLabel: "{{label}}: {{value}}"
  },
  note: "<strong>Залишкова вібрація</strong> — це оцінка, яку обчислює кожен метод — нижче краще для пригнічення для даного формувача. Ця сторінка порівнює два <em>методи оцінки</em>, не формувачі: значення <strong>аналітичне</strong> є точним, а значення <strong>скінченної різниці</strong> наближає його з <code>n_t</code> вибірок. При <strong>n_t = {{nt}}</strong> оцінка скінченної різниці помилюється до <strong>{{maxErr}}%</strong> в смузі. Вона відбирає пробу відповіді положення й може перетинати гострий мінімум швидкості (червона крапка), тому зазвичай <em>недооцінює</em> справжню залишкову вібрацію — оптимістично неправильну відповідь. Аналітичний метод оцінює цей мінімум безпосередньо й перевіряє виламання імпульсу, залишаючись точним із набагато меншою кількістю вибірок. <strong>Червоні цифри нижче позначають помилку оцінки, а не погану залишкову вібрацію.</strong>",
  cards: {
    residualAnalytic: "залишкова @ {{fq}}Гц — аналітична (точна)",
    residualFiniteDiff: "залишкова @ {{fq}}Гц — скінченна різниця (n_t)",
    finiteDiffError: "помилка скінченної різниці @ {{fq}}Гц (оц − точна)",
    worstError: "найгірша помилка оцінки в смузі",
    underReports: "(недооцінює)",
    overReports: "(переоцінює)"
  }
};
