// Norwegian (Bokmål) -- strings for config_reference.html.
// Descriptions are PLAIN TEXT (no HTML): the page word-wraps them into
// "#   ..." comment lines inside a <pre>.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.no = window.KV_LOCALES.no || {};
window.KV_LOCALES.no.config_reference = {
  title: "Konfigurasjonsreferanse — Klipper / Kalico",
  heading: "Konfigurasjonsreferanse",
  backLink: "← Tilbake til Shaper-tuning",
  copyTitle: "Kopier til utklippstavle",
  intro: "Bare konfigurasjonsseksjonene denne forken endrer er listet her — men hver av dem i sin helhet, slik at du kan sette opp en ny <code>printer.cfg</code> uten å lete gjennom hele manualen. Alle andre seksjoner er uendret fra Kalico.",
  fullRefNote: "For alle andre seksjoner, se den <a href=\"https://docs.kalico.gg/Config_Reference.html\" target=\"_blank\" rel=\"noopener noreferrer\">fullstendige Kalico-konfigurasjonsreferansen</a>.",
  formatNote: "Som i den offisielle referansen er hvert alternativ utkommentert (begynner med <code>#</code>) og viser standardverdien; fjern kommenteringen og sett dem du trenger. Alternativer merket som påkrevd i beskrivelsen må oppgis.",
  io: {
    intro: "Input shaping demper etterskjelving (ringing) ved å folde bevegelsene til verktøyhodet med en shaper. I tillegg til Kalicos navngitte impuls-shapere og smooth_*-smoothere legger denne forken til typen multimode: en N-topp-shaper som legger et hakk ved flere resonanser samtidig.",
    shaperType: "Standard shaper-type for begge akser. En av de navngitte impuls-shaperne (zv, mzv, zvd, ei, 2hump_ei, 3hump_ei), en smoother (smooth_zv, smooth_mzv, smooth_ei, smooth_2hump_ei, smooth_zvd_ei, smooth_si), eller custom, smoother eller multimode. Standarden er mzv.",
    shaperTypeAxis: "Akse-spesifikk overstyring av shaper_type; sett disse når de to aksene trenger ulike shaper-typer. Standarden er verdien av shaper_type.",
    shaperFreq: "Resonansfrekvensen (i Hz) shaperen demper; 0 deaktiverer shaping på den aksen. For en multimode-shaper, oppgi en kommaseparert liste, én frekvens per resonans (f.eks. shaper_freq_x: 45.2, 79.5, 132.6). Standarden er 0.",
    dampingRatio: "Dempingsforholdet til resonansen; 0.1 passer for de fleste skrivere. For multimode aksepteres en liste som samsvarer med shaper_freq, eller én enkelt verdi brukt på hver topp. Standarden er 0.1.",
    shaperBase: "Bare for typen multimode: basis-shaperen som foldes ved hver topp. En enkelt verdi, eller en kommaseparert liste som samsvarer med antall frekvenser; hver må være en av de navngitte impuls-shaperne. Standarden er mzv.",
    shaperAT: "Bare for en custom-shaper: eksplisitte impuls-amplituder (shaper_a_*) og tider i sekunder (shaper_t_*), som kommaseparerte lister av lik lengde. Må oppgis når shaper_type_* er custom.",
    smootherFreq: "For smooth_*-smoother-typene: frekvensen (i Hz) til smootheren. Hvis ikke satt brukes shaper_freq_* som alias (SHAPER_CALIBRATE lagrer smoother-anbefalinger der).",
    smoothTime: "Bare for en custom-smoother: varigheten (i sekunder) til den egendefinerte polynom-smootheren. Brukes når shaper_type_* er smoother.",
    coeffs: "Bare for en custom-smoother: polynomkoeffisientene til smootheren, som en kommaseparert liste.",
    enabledExtruders: "Kommaseparert liste over ekstrudere som får tilsvarende pressure advance-glatting. Tom som standard."
  },
  rt: {
    intro: "Konfigurerer akselerometer-sveipet som mater SHAPER_CALIBRATE. Denne forken legger til multimode_bias for å styre valget mellom single-mode og multimode.",
    accelChips: "En kommaseparert liste over akselerometer-brikkenavn brukt for begge akser (f.eks. adxl345). Høyeste prioritet av brikke-alternativene. Minst ett av accel_chips, accel_chip, eller accel_chip_x pluss accel_chip_y må settes.",
    accelChip: "Ett enkelt akselerometer brukt for begge akser. Laveste prioritet; accel_chips og de akse-spesifikke alternativene overstyrer det.",
    accelChipXY: "Separate akselerometre per akse (f.eks. IDEX eller dobbel vogn). Hvis begge navngir samme brikke slås de sammen til én.",
    probePoints: "Én eller flere verktøyhode-posisjoner 'x, y, z' (én per linje) der resonanser måles. Må oppgis.",
    moveSpeed: "Hastighet (i mm/s) for forflytning til målepunktene. Standarden er 50.",
    minFreq: "Laveste eksitasjonsfrekvens (i Hz) i testsveipet. Standarden er 5.0.",
    maxFreq: "Høyeste eksitasjonsfrekvens (i Hz), begrenset til 300. Standarden er 135.0.",
    accelPerHz: "Akselerasjonen som brukes under sveipet, i mm/s² per Hz; høyere rister hardere. Standarden er 75.0.",
    hzPerSec: "Hvor raskt sveipfrekvensen stiger, i Hz per sekund, begrenset til 2.0. Standarden er 1.0.",
    sweepingAccel: "Akselerasjonen (i mm/s²) til den langsomme frem-og-tilbake-sveipebevegelsen som legges oppå testen. Standarden er 400.0.",
    sweepingPeriod: "Perioden (i sekunder) til denne sveipebevegelsen; 0 deaktiverer den. Standarden er 0.",
    maxSmoothing: "Øvre grense for glattingen SHAPER_CALIBRATE kan akseptere. Ikke satt som standard (ingen grense).",
    multimodeBias: "Lagt til av denne forken: poengmarginen en multimode-shaper må slå den beste single-mode-shaperen med for å bli anbefalt. 1.0 (standarden) tar enhver reell forbedring; over 1.0 krever en større seier; under 1.0 foretrekker aktivt multimode."
  }
};
