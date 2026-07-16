// Czech (Česština) -- strings for index.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.index = {
  title: "KlipperVisuals — interaktivní vizualizace vnitřků Klipper/Kalico",
  subtitle: "Interaktivní vizualizace Motion-Control vnitřků v Klipper / Kalico — tlakový posun, vstupní tvarování a kompenzace rezonance.",
  cards: {
    nonlinearPa: {
      title: "Průzkumník nelineárního tlakového posunu",
      tag: "tanh vs recipr",
      body: "Porovnejte nelineární modely <code>tanh</code> a <code>recipr</code> s linkou lineárního PA upstream. Upravujte ADVANCE, OFFSET, VELOCITY a testovací pohyb, abyste viděli posun vs rychlost, průtok extrudéru a nárůst zrychlení, se softwarovým parabolickým vyhlazovačem extrudéru a časově-odsazeným řízením."
    },
    shaperTuning: {
      title: "Ladění formátoru",
      tag: "Kalico feature",
      body: "Načtěte zachycení rezonance (detekce vrcholu běží v reálném čase v prohlížeči) a získejte formátor, který by <code>SHAPER_CALIBRATE</code> doporučoval — úplné vyhledávání <code>find_best_shaper</code> portované do JS, včetně vícemódového s opravou clustering duálního vrcholu. Ručně prozkoumejte jakýkoli typ formátoru proti vašim vlastním datům (vyhlazování, max_accel, reziduál na rezonanci), poté vygenerujte připravenou konfiguraci <code>[input_shaper]</code>."
    },
    smootherVsShaper: {
      title: "Vyhlazovače vs formátory",
      tag: "Kalico feature",
      body: "Kalico vstupní vyhlazovače nahrazují diskrétní impulzy formátoru hladkým polynomickým oknem. Porovnejte libovolný formátor s libovolným vyhlazovačem na sdílených osách redukce vibrací a v časové doméně, z definic <code>get_*_smoother</code> v <code>shaper_defs.py</code>."
    },
    extruderSmootherFit: {
      title: "Přizpůsobení jádra vyhlazovače extrudéru",
      tag: "fit rework",
      body: "Polynomické jádro, které udržuje tlakový posun synchronizovaný se vstupním tvarováním. Porovnává přizpůsobené jádro <strong>před vs po</strong> přepracování <code>extruder_smoother.py</code> (analytické cíle, omezené nejmenší čtverce, Legendrův základ) pro každý formátor — <code>3hump_ei</code> se zlepšuje nejlépe."
    },
    resonanceExcitation: {
      title: "Průzkumník buzení testu rezonance",
      tag: "limit fix",
      body: "Pohyb, který generuje <code>TEST_RESONANCES</code> — frekvenční tažení, zrychlení za cyklus a volitelné tažené kmitání. Překrývá vynucené limity zrychlení/rychlosti odvozené ze skutečné sekvence proti formulaci upstream s pevnou hodnotou, která ignoruje tažený termín."
    },
    shaperEstimation: {
      title: "Odhad formátoru: staré vs nové",
      tag: "~2x speedup",
      body: "Jak <code>SHAPER_CALIBRATE</code> hodnotí formátor: staré konečné diference odezvy na krok vs analytická rychlost s přesným vyhodnocením zalomení a parabolicky vylepšeným minimem. Snižte počet vzorků a sledujte, jak se stará metoda odchyluje, zatímco nová zůstává přesná."
    }
  },
  note: {
    title: "Poznámka k původu.",
    body: "Stránka s tlakovým posuvem modeluje vlastní implementaci <code>bleeding-edge-v2</code> (<code>tanh</code>/<code>recipr</code> nelineární PA), která není v upstream Kalico nebo Klipper. Stránky s laděním formátoru, vyhlazovačem, buzením rezonance a odhadem reprodukují kód formátoru Kalico (<code>shaper_defs.py</code>, <code>resonance_tester.py</code>, <code>shaper_calibrate.py</code>) s navrhovanými opravami a porovnávají je s aktuálním upstream Kalico (<code>bleeding-edge-v2</code>)."
  },
  footer: "Matematika a jádra reprodukována z <code>klippy/chelper/kin_extruder.c</code>, <code>klippy/extras/extruder_smoother.py</code> a <code>klippy/extras/shaper_defs.py</code>. Grafy vykresleny pomocí Chart.js (CDN). Zdroj: <a href=\"https://github.com/Hannott/KlipperVisuals\">Hannott/KlipperVisuals</a>. <a href=\"disclaimer.html\">Prohlášení o odpovědnosti a poděkování</a>."
};
