// Ukrainian (Українська) -- strings for smoother_vs_shaper.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.uk = window.KV_LOCALES.uk || {};
window.KV_LOCALES.uk.smoother_vs_shaper = {
  title: "Згладжувачі проти формувачів — вхідні згладжувачі Kalico",
  heading: "Згладжувачі проти формувачів",
  intro: "Вхідні <em>згладжувачі</em> Kalico замінюють дискретні імпульси класичного формувача гладким поліноміальним вікном <code>w(t)</code> (неперервним розподілом імпульсів). Порівняйте будь-який формувач із будь-яким згладжувачем на тих же осях зниження вібрацій та в часовій області. Згладжувачі є особливістю Kalico — їх немає в основній Klipper.",
  controls: {
    shaperLabel: "формувач імпульсів",
    smootherLabel: "згладжувач",
    shaperFreq: "shaper_freq (Гц)",
    dampingRatio: "damping_ratio"
  },
  shaperOptions: {
    none: "— немає —",
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    ei2: "2hump_ei",
    ei3: "3hump_ei"
  },
  smootherOptions: {
    none: "— немає —",
    smoothZv: "smooth_zv",
    smoothMzv: "smooth_mzv",
    smoothEi: "smooth_ei",
    smoothEi2: "smooth_2hump_ei",
    smoothZvdEi: "smooth_zvd_ei",
    smoothSi: "smooth_si"
  },
  legendHint: "Натисніть запис легенди на будь-якій діаграмі, щоб приховати або показати цю лінію.",
  captions: {
    residualVsFreq: "залишкова вібрація у залежності від частоти <span style=\"color:var(--text-muted)\">(менше = краще придушення)</span>",
    kernelTimeDomain: "ядро в часовій області <span style=\"color:var(--text-muted)\">(амплітуди імпульсів проти щільності ваги згладжувача; обидва інтегруються в 1)</span>"
  },
  note: "<strong>Формувач</strong> застосовує кілька дискретних імпульсів; <strong>згладжувач</strong> розподіляє той же коригуючий ефект по неперервному вікну, забезпечуючи гладкіший рух та відсутність раптових стрибків швидкості. Згладжувачам як правило потрібне більш довге вікно (більший <code>t_sm</code>) ніж у формувача того ж сімейства для порівняльного придушення. <code>damping_ratio</code> тут є припущеною демпфуванням принтера, яка використовується для оцінки залишкової вібрації.",
  cards: {
    shaperDuration: "тривалість формувача",
    shaperWorstResidual: "найгірша залишкова вібрація формувача",
    smootherTsm: "t_sm згладжувача",
    smootherWorstResidual: "найгірша залишкова вібрація згладжувача"
  },
  footer: "Вікна згладжувачів <code>w(t)=Σ Cₖ tᵏ</code> над <code>[−t_sm/2, t_sm/2]</code>, <code>t_sm = factor/freq</code>, коефіцієнти з <code>shaper_defs.py</code> (<code>get_*_smoother</code>). Відповідь оцінюється шляхом обробки вікна як густого потоку імпульсів та застосування класичної формули амплітуди залишкової вібрації. Kalico додає коефіцієнт демпфування <code>damping_ratio</code> для кожної осі для згладжувачів (використовується при подборі синхронізованого екструдера); попередні версії припускали фіксоване значення 0.1. Відображено за допомогою Chart.js.",
  chart: {
    datasetShaper: "формувач",
    datasetSmoother: "згладжувач",
    axisResidual: "залишкова вібрація",
    axisFrequency: "частота (Гц)",
    axisKernelWeight: "вага ядра",
    axisTime: "час (мс)",
    tooltipLabel: "{{label}}: {{value}}"
  }
};
