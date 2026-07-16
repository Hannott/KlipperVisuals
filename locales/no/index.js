// Norwegian (Bokmål) -- strings for index.html.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.index = {
  title: "KlipperVisuals — interaktive visualiseringer av interne mekanismer i Klipper/Kalico",
  subtitle: "Interaktive visualiseringer av interne mekanismer for bevegelseskontroll i Klipper / Kalico — pressure advance, input shaping og resonanskompensasjon.",
  cards: {
    nonlinearPa: {
      title: "Ikke-lineær pressure advance-utforsker",
      tag: "tanh vs recipr",
      body: "Sammenlign <code>tanh</code>- og <code>recipr</code>-modellene mot en lineær pressure advance-linje fra oppstrøms. Juster ADVANCE, OFFSET, VELOCITY og en testbevegelse for å se advance mot hastighet, ekstruderens strømningshastighet og akselerasjonsbehov, med fastvarens parabolske ekstruder-smoother og en tidsforskyvningskontroll."
    },
    shaperTuning: {
      title: "Shaper-tuning",
      tag: "Kalico-funksjon",
      body: "Last inn en resonansmåling (toppdeteksjon kjører direkte i nettleseren) og få shaperen <code>SHAPER_CALIBRATE</code> ville anbefalt — hele <code>find_best_shaper</code>-søket portert til JS, inkludert multimode med fiksen for dobbel-topp-klynger. Utforsk hvilken som helst shaper-type manuelt mot dine egne data (glatting, max_accel, per-resonans-residual), og generer deretter en klar-til-lim <code>[input_shaper]</code>-konfigurasjon."
    },
    smootherVsShaper: {
      title: "Smoothers vs shapers",
      tag: "Kalico-funksjon",
      body: "Kalicos input-smoothers erstatter en shapers diskrete impulser med et glatt polynomvindu. Sammenlign en shaper mot en smoother på felles vibrasjonsreduksjonsakser og i tidsdomenet, fra <code>get_*_smoother</code>-definisjonene i <code>shaper_defs.py</code>."
    },
    extruderSmootherFit: {
      title: "Tilpasning av ekstruder-smoother-kjerne",
      tag: "omarbeidet tilpasning",
      body: "Polynomkjernen som holder pressure advance synkronisert med input shaping. Sammenligner den tilpassede kjernen <strong>før vs etter</strong> omarbeidingen av <code>extruder_smoother.py</code> (analytiske mål, begrenset minste kvadraters metode, Legendre-basis) for hver shaper — <code>3hump_ei</code> forbedres mest."
    },
    resonanceExcitation: {
      title: "Utforsker for resonanstest-eksitasjon",
      tag: "grensefiks",
      body: "Bevegelsen <code>TEST_RESONANCES</code> genererer — frekvenssveip, akselerasjon per omgang, og den valgfrie sveipende oscillasjonen. Overlagrer de pålagte akselerasjons-/hastighetsgrensene utledet fra selve sekvensen mot oppstrøms sin faste formel, som ignorerer sveipeleddet."
    },
    shaperEstimation: {
      title: "Shaper-estimering: gammel vs ny",
      tag: "~2x raskere",
      body: "Hvordan <code>SHAPER_CALIBRATE</code> vurderer en shaper: den gamle finittdifferansen av trinnresponsen mot en analytisk hastighet med kink-eksakt evaluering og parabolsk-forbedret minimum. Reduser antall samples og se den gamle metoden avvike mens den nye forblir eksakt."
    }
  },
  note: {
    title: "Merknad om opprinnelse.",
    body: "Pressure advance-siden modellerer en tilpasset <code>bleeding-edge-v2</code>-implementasjon (<code>tanh</code>/<code>recipr</code> ikke-lineær PA) som ikke finnes i oppstrøms Kalico eller Klipper. Sidene for shaper-tuning, smoother, resonanseksitasjon og estimering reproduserer Kalicos shaper-kode (<code>shaper_defs.py</code>, <code>resonance_tester.py</code>, <code>shaper_calibrate.py</code>) med foreslåtte fikser og sammenligner dem mot nåværende oppstrøms Kalico (<code>bleeding-edge-v2</code>)."
  },
  footer: "Matematikk og kjerner reprodusert fra <code>klippy/chelper/kin_extruder.c</code>, <code>klippy/extras/extruder_smoother.py</code> og <code>klippy/extras/shaper_defs.py</code>. Diagrammer rendret med Chart.js (CDN). Kildekode: <a href=\"https://github.com/Hannott/KlipperVisuals\">Hannott/KlipperVisuals</a>."
};
