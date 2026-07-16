// Czech (čeština) -- řetězce pro extruder_smoother_fit.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.extruder_smoother_fit = {
  title: "Přizpůsobení jádra vyhlazovače trysky — Klipper / Kalico",
  heading: "Přizpůsobení jádra vyhlazovače trysky",
  intro: "Při aktivním vstupním tvarování se skutečná rychlost hlavy nástroje liší od příkazované. Aby zůstal pokrok tlaku synchronizován, extraktor provádí konvoluci pohybu s polynomiálním jádrem <code>w(t)</code> přizpůsobeným aproximaci tvaru rychlosti hlavy nástroje. Každý PA model (lineární, <code>tanh</code>, <code>recipr</code>) spotřebovává tuto vyhlazovanou rychlost, takže kvalita jádra je důležitá pro všechny. Toto porovnává přizpůsobené jádro <strong>před</strong> a <strong>po</strong> přepracování <code>extruder_smoother.py</code> &mdash; analytické cíle rychlosti, omezené (KKT) nejmenší čtverce, dobře podmíněná Legendreova báze a měkká nezápornost.",
  groupLabel: "vstupní tvarování / vyhlazování",
  legendHint: "Kliknutím na položku legendy skryjete nebo zobrazíte daný řádek.",
  caption: 'přizpůsobené jádro vs jeho profilový cíl rychlosti <span style="color:var(--text-muted)">(normalizovaný čas; jádro by mělo sledovat cíl)</span>',
  footer: 'Jádra generována spuštěním skutečného hostiteljského kódu z <code>upstream/bleeding-edge-v2</code> (staré) a přepracovaného <code>extruder_smoother.py</code> (nové) při součiniteli tlumení 0,1, následovaným vyhodnocením přizpůsobeného polynomu <code>w(t)</code> proti pruhově zprůměrovanému analytickému cíli rychlosti. Chyba přizpůsobení je relativní RMS jádra mínus cíl; velikosti zde používají průměrování pásem a jsou orientační &mdash; viz <a href="https://github.com/KalicoCrew/kalico/pull/909">KalicoCrew/kalico#909</a> pro ověřovací údaje projektu (např. přechod 100&rarr;20&nbsp;mm/s vytváří přeextruzi 8,4&nbsp;mm/s se starým jádrem 3hump_ei oproti 2,3&nbsp;mm/s s novým). Vykresleno pomocí Chart.js.',
  chart: {
    tooltipTau: "tau = {{tau}}",
    tooltipLabel: "{{label}}: {{value}}",
    axisX: "normalizovaný čas  tau = t / t_sm",
    axisY: "váha jádra  w(t)*t_sm",
    datasetTarget: "cíl (ideální)",
    datasetOld: "staré jádro",
    datasetNew: "nové jádro"
  },
  shapers: {
    zv: "zv",
    mzv: "mzv",
    zvd: "zvd",
    ei: "ei",
    "2hump_ei": "2hump_ei",
    "3hump_ei": "3hump_ei",
    smooth_zv: "smooth_zv",
    smooth_mzv: "smooth_mzv",
    smooth_ei: "smooth_ei",
    smooth_2hump_ei: "smooth_2hump_ei",
    smooth_zvd_ei: "smooth_zvd_ei",
    smooth_si: "smooth_si"
  },
  cards: {
    fitErrorOld: "chyba přizpůsobení — staré",
    fitErrorNew: "chyba přizpůsobení — nové",
    improvement: "zlepšení",
    improvementValue: "{{factor}}× nižší",
    improvementNone: "—"
  },
  notes: {
    threeHumpEi: "<strong>3hump_ei vidí největší opravu.</strong> Staré jádro se vychyluje od svého cíle poblíž středu (stoupá, zatímco cíl klesá), desynchronizující pokrok tlaku prostřednictvím krokových změn rychlosti. Na přechodu 100&rarr;20&nbsp;mm/s s tiskárnou rezonancí uvnitř pásma návrhu 3hump_ei vytváří to <strong>8,4&nbsp;mm/s přeextruzi se starým jádrem oproti 2,3&nbsp;mm/s s novým</strong> (dle PR&nbsp;#909). Nové jádro sleduje cíl v celém okně.",
    smoothPrefixed: "<code>{{name}}</code> se již přizpůsobilo dobře; přepracování hlavně odstraňuje chybu konečných rozdílů a kondicionování, zhruba půlící již malou chybu přizpůsobení. Chování se nemění na skutečných pohybech (bez regrese).",
    default: "<code>{{name}}</code>: nové přizpůsobení sleduje cílovou rychlost lépe, snižující relativní RMS chybu přizpůsobení. Zlepšení jsou největší tam, kde má cíl ostré rysy, které staré přizpůsobení konečných rozdílů rozmazalo nebo překročilo."
  }
};
