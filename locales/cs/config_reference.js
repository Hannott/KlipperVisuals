// Czech (Čeština) -- strings for config_reference.html.
// Descriptions are PLAIN TEXT (no HTML): the page word-wraps them into
// "#   ..." comment lines inside a <pre>.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.cs = window.KV_LOCALES.cs || {};
window.KV_LOCALES.cs.config_reference = {
  title: "Referenční příručka konfigurace — Klipper / Kalico",
  heading: "Referenční příručka konfigurace",
  backLink: "← Zpět na Ladění vyhlazovače",
  copyTitle: "Kopírovat do schránky",
  intro: "Zde jsou uvedeny pouze konfigurační sekce, které tento fork mění — ale každá celá, takže můžete nastavit nový <code>printer.cfg</code> bez procházení celé příručky. Každá jiná sekce je oproti Kalico beze změny.",
  fullRefNote: "Pro všechny ostatní sekce viz <a href=\"https://docs.kalico.gg/Config_Reference.html\" target=\"_blank\" rel=\"noopener noreferrer\">úplnou referenční příručku konfigurace Kalico</a>.",
  formatNote: "Stejně jako v oficiální referenci je každá volba zakomentovaná (začíná <code>#</code>) a ukazuje svou výchozí hodnotu; odkomentujte a nastavte ty, které potřebujete. Volby označené v popisu jako povinné musí být zadány.",
  io: {
    intro: "Input shaping potlačuje dozvuky (ringing) tím, že skládá pohyby tiskové hlavy s tvarovačem. Kromě pojmenovaných impulsních tvarovačů a smootherů smooth_* od Kalico přidává tento fork typ multimode: N-vrcholový tvarovač, který umístí zářez u několika rezonancí najednou.",
    shaperType: "Výchozí typ tvarovače pro obě osy. Jeden z pojmenovaných impulsních tvarovačů (zv, mzv, zvd, ei, 2hump_ei, 3hump_ei), smoother (smooth_zv, smooth_mzv, smooth_ei, smooth_2hump_ei, smooth_zvd_ei, smooth_si), nebo custom, smoother či multimode. Výchozí je mzv.",
    shaperTypeAxis: "Přepsání shaper_type pro jednotlivé osy; nastavte je, když obě osy potřebují různé typy tvarovačů. Výchozí je hodnota shaper_type.",
    shaperFreq: "Rezonanční frekvence (v Hz), kterou tvarovač potlačuje; 0 vypne tvarování na dané ose. Pro tvarovač multimode zadejte čárkami oddělený seznam, jednu frekvenci na rezonanci (např. shaper_freq_x: 45.2, 79.5, 132.6). Výchozí je 0.",
    dampingRatio: "Poměr tlumení rezonance; 0.1 vyhovuje většině tiskáren. Pro multimode přijímá seznam odpovídající shaper_freq, nebo jednu hodnotu použitou na každý vrchol. Výchozí je 0.1.",
    shaperBase: "Pouze pro typ multimode: základní tvarovač skládaný u každého vrcholu. Jedna hodnota, nebo čárkami oddělený seznam odpovídající počtu frekvencí; každý musí být jedním z pojmenovaných impulsních tvarovačů. Výchozí je mzv.",
    shaperAT: "Pouze pro vlastní (custom) tvarovač: explicitní amplitudy impulsů (shaper_a_*) a časy v sekundách (shaper_t_*) jako čárkami oddělené seznamy stejné délky. Musí být zadány, když je shaper_type_* custom.",
    smootherFreq: "Pro typy smootherů smooth_*: frekvence (v Hz) smootheru. Pokud není nastavena, použije se shaper_freq_* jako alias (SHAPER_CALIBRATE tam ukládá doporučení smootheru).",
    smoothTime: "Pouze pro vlastní smoother: doba trvání (v sekundách) vlastního polynomiálního smootheru. Použije se, když je shaper_type_* smoother.",
    coeffs: "Pouze pro vlastní smoother: polynomiální koeficienty smootheru jako čárkami oddělený seznam.",
    enabledExtruders: "Čárkami oddělený seznam extruderů, které dostanou odpovídající vyhlazení pressure advance. Výchozí je prázdný."
  },
  rt: {
    intro: "Konfiguruje sweep akcelerometru, který napájí SHAPER_CALIBRATE. Tento fork přidává multimode_bias pro řízení rozhodnutí mezi single-mode a multimode.",
    accelChips: "Čárkami oddělený seznam názvů čipů akcelerometru použitých pro obě osy (např. adxl345). Nejvyšší priorita z voleb čipů. Musí být nastavena alespoň jedna z voleb accel_chips, accel_chip nebo accel_chip_x plus accel_chip_y.",
    accelChip: "Jeden akcelerometr použitý pro obě osy. Nejnižší priorita; accel_chips a volby pro jednotlivé osy jej přepíší.",
    accelChipXY: "Samostatné akcelerometry pro každou osu (např. IDEX nebo dvojitý vozík). Pokud oba pojmenují stejný čip, sloučí se do jednoho.",
    probePoints: "Jedna nebo více poloh tiskové hlavy 'x, y, z' (jedna na řádek), kde se měří rezonance. Musí být zadány.",
    moveSpeed: "Rychlost (v mm/s) přejezdů k měřicím bodům. Výchozí je 50.",
    minFreq: "Nejnižší budicí frekvence (v Hz) testovacího sweepu. Výchozí je 5.0.",
    maxFreq: "Nejvyšší budicí frekvence (v Hz), omezená na 300. Výchozí je 135.0.",
    accelPerHz: "Zrychlení použité během sweepu, v mm/s² na Hz; vyšší třese silněji. Výchozí je 75.0.",
    hzPerSec: "Jak rychle stoupá frekvence sweepu, v Hz za sekundu, omezeno na 2.0. Výchozí je 1.0.",
    sweepingAccel: "Zrychlení (v mm/s²) pomalého kývavého pohybu tam a zpět překrytého přes test. Výchozí je 400.0.",
    sweepingPeriod: "Perioda (v sekundách) tohoto kývavého pohybu; 0 jej vypne. Výchozí je 0.",
    maxSmoothing: "Horní mez vyhlazení, které SHAPER_CALIBRATE může přijmout. Výchozí nenastaveno (bez limitu).",
    multimodeBias: "Přidáno tímto forkem: bodový náskok, o který musí tvarovač multimode překonat nejlepší single-mode tvarovač, aby byl doporučen. 1.0 (výchozí) přijme jakékoli skutečné zlepšení; nad 1.0 vyžaduje větší náskok; pod 1.0 aktivně upřednostňuje multimode."
  }
};
