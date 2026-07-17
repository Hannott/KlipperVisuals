// German (Deutsch) -- strings for config_reference.html.
// Descriptions are PLAIN TEXT (no HTML): the page word-wraps them into
// "#   ..." comment lines inside a <pre>.
window.KV_LOCALES = window.KV_LOCALES || {};
window.KV_LOCALES.de = window.KV_LOCALES.de || {};
window.KV_LOCALES.de.config_reference = {
  title: "Konfigurationsreferenz — Klipper / Kalico",
  heading: "Konfigurationsreferenz",
  backLink: "← Zurück zum Shaper-Tuning",
  copyTitle: "In die Zwischenablage kopieren",
  intro: "Hier sind nur die Konfigurationsabschnitte aufgeführt, die dieser Fork ändert — dafür aber jeder vollständig, sodass du eine neue <code>printer.cfg</code> einrichten kannst, ohne das ganze Handbuch zu durchsuchen. Jeder andere Abschnitt ist gegenüber Kalico unverändert.",
  fullRefNote: "Für alle anderen Abschnitte siehe die <a href=\"https://docs.kalico.gg/Config_Reference.html\" target=\"_blank\" rel=\"noopener noreferrer\">vollständige Kalico-Konfigurationsreferenz</a>.",
  formatNote: "Wie in der offiziellen Referenz ist jede Option auskommentiert (beginnend mit <code>#</code>) und zeigt ihren Standardwert; kommentiere die benötigten aus und setze sie. In ihrer Beschreibung als erforderlich markierte Optionen müssen angegeben werden.",
  io: {
    intro: "Input Shaping unterdrückt Nachschwingen (Ringing), indem Bewegungen des Druckkopfs mit einem Shaper gefaltet werden. Zusätzlich zu Kalicos benannten Impuls-Shapern und smooth_*-Smoothern fügt dieser Fork den Typ multimode hinzu: einen N-Peak-Shaper, der an mehreren Resonanzen gleichzeitig eine Kerbe setzt.",
    shaperType: "Standard-Shaper-Typ für beide Achsen. Einer der benannten Impuls-Shaper (zv, mzv, zvd, ei, 2hump_ei, 3hump_ei), ein Smoother (smooth_zv, smooth_mzv, smooth_ei, smooth_2hump_ei, smooth_zvd_ei, smooth_si), oder custom, smoother oder multimode. Der Standard ist mzv.",
    shaperTypeAxis: "Achsenspezifische Überschreibung von shaper_type; setze diese, wenn die beiden Achsen unterschiedliche Shaper-Typen benötigen. Der Standard ist der Wert von shaper_type.",
    shaperFreq: "Resonanzfrequenz (in Hz), die der Shaper unterdrückt; 0 deaktiviert das Shaping auf dieser Achse. Für einen multimode-Shaper eine kommagetrennte Liste angeben, eine Frequenz pro Resonanz (z. B. shaper_freq_x: 45.2, 79.5, 132.6). Der Standard ist 0.",
    dampingRatio: "Dämpfungsgrad der Resonanz; 0.1 passt für die meisten Drucker. Für multimode wird eine zu shaper_freq passende Liste akzeptiert, oder ein einzelner Wert für jeden Peak. Der Standard ist 0.1.",
    shaperBase: "Nur für den Typ multimode: der an jedem Peak gefaltete Basis-Shaper. Ein einzelner Wert oder eine kommagetrennte Liste passend zur Anzahl der Frequenzen; jeder muss einer der benannten Impuls-Shaper sein. Der Standard ist mzv.",
    shaperAT: "Nur für einen custom-Shaper: explizite Impuls-Amplituden (shaper_a_*) und Zeiten in Sekunden (shaper_t_*) als kommagetrennte Listen gleicher Länge. Muss angegeben werden, wenn shaper_type_* custom ist.",
    smootherFreq: "Für die smooth_*-Smoother-Typen: Frequenz (in Hz) des Smoothers. Wenn nicht gesetzt, wird shaper_freq_* als Alias verwendet (SHAPER_CALIBRATE speichert Smoother-Empfehlungen dort).",
    smoothTime: "Nur für einen custom-Smoother: Dauer (in Sekunden) des benutzerdefinierten Polynom-Smoothers. Wird verwendet, wenn shaper_type_* smoother ist.",
    coeffs: "Nur für einen custom-Smoother: Polynomkoeffizienten des Smoothers als kommagetrennte Liste.",
    enabledExtruders: "Kommagetrennte Liste der Extruder, die die entsprechende Pressure-Advance-Glättung erhalten. Standardmäßig leer."
  },
  rt: {
    intro: "Konfiguriert den Beschleunigungssensor-Sweep, der SHAPER_CALIBRATE speist. Dieser Fork fügt multimode_bias hinzu, um die Entscheidung zwischen Single-Mode und Multimode zu steuern.",
    accelChips: "Eine kommagetrennte Liste von Beschleunigungssensor-Chipnamen für beide Achsen (z. B. adxl345). Höchste Priorität der Chip-Optionen. Mindestens eine der Optionen accel_chips, accel_chip oder accel_chip_x plus accel_chip_y muss gesetzt sein.",
    accelChip: "Ein einzelner Beschleunigungssensor für beide Achsen. Niedrigste Priorität; accel_chips und die achsenspezifischen Optionen überschreiben ihn.",
    accelChipXY: "Getrennte Beschleunigungssensoren pro Achse (z. B. IDEX oder Dual-Carriage). Wenn beide denselben Chip nennen, werden sie zu einem zusammengefasst.",
    probePoints: "Eine oder mehrere Druckkopfpositionen 'x, y, z' (eine pro Zeile), an denen Resonanzen gemessen werden. Muss angegeben werden.",
    moveSpeed: "Geschwindigkeit (in mm/s) der Verfahrbewegungen zu den Messpunkten. Der Standard ist 50.",
    minFreq: "Niedrigste Anregungsfrequenz (in Hz) des Test-Sweeps. Der Standard ist 5.0.",
    maxFreq: "Höchste Anregungsfrequenz (in Hz), begrenzt auf 300. Der Standard ist 135.0.",
    accelPerHz: "Während des Sweeps angewandte Beschleunigung, in mm/s² pro Hz; höher rüttelt stärker. Der Standard ist 75.0.",
    hzPerSec: "Wie schnell die Sweep-Frequenz ansteigt, in Hz pro Sekunde, begrenzt auf 2.0. Der Standard ist 1.0.",
    sweepingAccel: "Beschleunigung (in mm/s²) der langsamen Hin-und-Her-Sweeping-Bewegung, die dem Test überlagert wird. Der Standard ist 400.0.",
    sweepingPeriod: "Periode (in Sekunden) dieser Sweeping-Bewegung; 0 deaktiviert sie. Der Standard ist 0.",
    maxSmoothing: "Obergrenze für die Glättung, die SHAPER_CALIBRATE akzeptieren darf. Standardmäßig nicht gesetzt (keine Grenze).",
    multimodeBias: "Von diesem Fork hinzugefügt: Punkte-Marge, um die ein Multimode-Shaper den besten Single-Mode-Shaper schlagen muss, um empfohlen zu werden. 1.0 (der Standard) übernimmt jede echte Verbesserung; über 1.0 verlangt einen größeren Vorsprung; unter 1.0 bevorzugt aktiv Multimode."
  }
};
