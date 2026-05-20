# Martiposa Redesign – Phase 1: Strategie & Designkonzept

Reine Konzeptphase. Keine Implementierung, kein SEO. Ergebnis dieser Phase ist ein in sich stimmiges Fundament aus Positionierung, Sitemap, UX, Designsystem und Hero-Konzept – als Grundlage für eine spätere visuelle Umsetzung.

---

## 1. Markenpositionierung

**Heute verkauft die Seite:** „Ich mache vieles."
**Neu vermitteln:** „Ruhiges, ehrliches Tischlerhandwerk auf hohem Niveau – persönlich umgesetzt von Martin Schröder."

**Positionierungssatz (Arbeitsentwurf):**
> Martiposa ist die Tischlerei von Martin Schröder im Raum Osnabrück – für Menschen, die Wert auf Maßarbeit, Material und persönliche Betreuung legen.

**Markenwerte:** Maßarbeit · Ruhe · Materialehrlichkeit · Erfahrung seit 1989 · Persönliche Begleitung
**Tonalität:** Klar, warm, zurückhaltend. Kein Werbedeutsch, keine Superlative, keine „Klick hier"-Sprache.

---

## 2. Zielgruppe & Kundenreise

**Primär:** Hausbesitzer und Eigentümer im Raum Osnabrück mit mittlerem bis höherem Budget, die individuelle Lösungen wünschen (Innenausbau, Möbel nach Maß, Restaurierung).
**Sekundär:** Architekten, Innenarchitekten, Bauherren, die einen verlässlichen ausführenden Tischler suchen.
**Bewusst nicht im Fokus:** Schnäppchenkunden, Massenaufträge, reine Reparatur-Schnellanfragen.

**Nutzerziele auf der Website:**
1. In Sekunden verstehen: Wer ist das, was macht er, in welcher Qualität.
2. Referenzen sehen, die Vertrauen schaffen.
3. Einfach und ruhig Kontakt aufnehmen.

---

## 3. Inhaltliche Bereinigung der bestehenden Seite

Die heutige Seite hat 9 fast gleichrangige Menüpunkte (Start, Möbel, Reparaturen, Montage, Do It Yourself, Möbelrestauration, Projekte, Renovierung, Kontakt). Das verwässert die Positionierung.

**Empfehlung – behalten und schärfen:**
- Möbel nach Maß
- Innenausbau & Renovierung (Renovierung + Montage + Verkleidungen + Trockenausbau zusammenführen)
- Restaurierung
- Projekte / Referenzen
- Über (inkl. Arbeitsweise & Materialhaltung)
- Kontakt

**Empfehlung – entfernen oder zurückstufen:**
- „Do It Yourself" → entfernen oder als kleiner Hinweis auf Über-Seite. Schwächt sonst das Premium-Bild.
- „Reparaturen / Wenn's klemmt" → nicht als eigener Menüpunkt. Optional als kurzer Abschnitt unter Innenausbau („Auch kleine Arbeiten – wenn der Rahmen passt").
- Lange Aufzählungen aller Tätigkeiten → ersetzen durch wenige, klar formulierte Leistungsfelder.
- Ortsliste (Belm, Bissendorf …) → in dezenten Footer-Hinweis verlagern.

---

## 4. Neue Sitemap

```text
Startseite
├── Leistungen
│   ├── Möbel nach Maß
│   ├── Innenausbau & Renovierung
│   └── Restaurierung
├── Projekte
│   └── Projektdetailseiten (z. B. Dachboden, Scheune/Ferienwohnung)
├── Über
│   └── Martin Schröder · Werkstatt · Arbeitsweise · Materialien
└── Kontakt
```

Footer: Einsatzgebiet (Osnabrück & Umkreis), Telefon, WhatsApp, E-Mail, Impressum, Datenschutz.

---

## 5. UX-Konzept

**Prinzipien:**
- Mobile-first, große Touch-Flächen, ruhige Sectionabstände (großzügiger vertikaler Rhythmus).
- Eine klare Aufgabe pro Section – scanbar, nicht „lesepflichtig".
- Maximal **eine** primäre Aktion pro Section.
- Navigation reduziert: Logo links, 4 Menüpunkte (Leistungen, Projekte, Über, Kontakt), Telefon-Icon rechts.
- Keine Slider, keine Pop-ups, keine Auto-Animationen.
- Sanfte Mikrointeraktionen: dezentes Fade/Move beim Scrollen, langsame Transitions (300–500 ms, ease-out).

**Conversion-Pfad:** Hero → Leistungs-Trias → ein bis zwei Referenzprojekte → kurzer Vertrauensblock (Person + Werkstatt) → ruhige Kontakt-Section.

---

## 6. Startseite – Section-Wireframe

```text
┌────────────────────────────────────────────┐
│  Logo            Leistungen Projekte … ☎  │  Navigation, transparent
├────────────────────────────────────────────┤
│                                            │
│   Großes, ruhiges Bild (Holzdetail /       │
│   Werkstattmoment, warmes Licht)           │
│                                            │
│   Maßarbeit aus Holz.                      │  Hero-Headline (serif/grotesk groß)
│   Persönlich. Im Raum Osnabrück.           │  Subline
│                                            │
│   [ Projekt anfragen ]   Werkstatt ansehen │  ein primärer, ein sekundärer CTA
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Drei Leistungsfelder als ruhige Karten:   │
│  Möbel nach Maß · Innenausbau · Restaur.   │
│  Jeweils Bild + ein Satz + dezenter Link   │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Ausgewählte Projekte (2–3 große Tiles)    │
│  Großformatig, viel Weißraum drumherum     │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Über Martin – Portrait + 2 Absätze        │
│  „Tischler seit 1989, Handwerker aus       │
│  Leidenschaft." → Link zur Über-Seite      │
└────────────────────────────────────────────┘

┌────────────────────────────────────────────┐
│  Kontakt – ruhig, einspaltig               │
│  Telefon · WhatsApp · E-Mail · Formular    │
└────────────────────────────────────────────┘
```

Kein Slider, kein Banner-CTA, keine farbigen Notification-Streifen.

---

## 7. Designsystem

**Designhaltung:** Skandinavisch-ruhig, an modernen Interior- und Architekturstudios orientiert. „Aus einem Guss".

**Logo-Bezug (subtil):** Aus dem bestehenden Logo wird die Geometrie übernommen – feine Linien, das namensgebende Schmetterlings-/Faltmotiv – nicht als Dekoration, sondern als Inspiration für:
- Linienstärken (haarfein, ein Hairline-Gewicht durchgängig)
- Trennelemente (dünne horizontale Linien statt Boxen)
- Eckradien (sehr klein, fast 0 – ruhige rechteckige Formen)
- Konsistente, großzügige Abstände

**Farbpalette (warm, natürlich, gedeckt):**

| Rolle | Vorschlag |
|---|---|
| Background hell | Warmweiß / Off-White (~ #F7F4EE) |
| Surface | Sand / Beige (~ #ECE5D8) |
| Text primär | Anthrazit (~ #1F1F1D) |
| Text sekundär | Warmgrau (~ #6B665E) |
| Akzent dunkel | Dunkles Holz / Espresso (~ #3A2A1E) |
| Linien / Border | Hairline warmgrau (~ #D8D2C4) |

Bewusst nicht im System: kräftiges Orange (auch nicht als Logofarbe in der UI dominant), Handwerker-Blau, Verläufe, mehrere Akzentfarben. Das Logo-Orange bleibt dem Logo vorbehalten und wird in der UI nicht als CTA-Farbe verwendet.

**Typografie (Vorschlag):**
- Headlines: moderne Serif (z. B. *Fraunces*, *Söhne Breit* oder *Inter Display* als Sans-Alternative) – ruhig, mit Charakter.
- Fließtext: humanistische Sans (z. B. *Inter*, *Söhne*, *Manrope*) – 17–19 px, hohe Zeilenhöhe (1.6–1.7).
- Nur 2 Schriftgewichte (Regular + Medium), keine Schreibschrift.

**Layout-Raster:** 12-Spalten-Raster, max. Inhalts­breite ca. 1240 px, großzügige horizontale Padding-Werte (≥ 24 px mobil, ≥ 80 px Desktop). Vertikale Section-Abstände 96–160 px.

**Buttons / CTAs:**
- Primär: dunkler, fast schwarzer Pill- oder Rechteck-Button mit warmweißer Schrift („Projekt anfragen").
- Sekundär: reiner Textlink mit Hairline-Underline („Werkstatt ansehen").
- Niemals laute Farbe, kein Schatten, kein Glow.

---

## 8. Bildsprache

**Look:** Atmosphärisch, warmes Licht, viel Materialität, ruhige Kompositionen.
**Motive:** Holzmaserung in Nahaufnahme, Hand bei der Arbeit, Werkstattlicht am Morgen, fertige Möbel im Wohnkontext, Detailaufnahmen von Verbindungen/Kanten, leere Räume mit eingebauten Elementen.
**Vermeiden:** Stockfotos, Werkzeug-Frontalaufnahmen, Vorher/Nachher-Collagen, Blitzlicht, Kunstlicht-kalt.
**Empfehlung:** Ein kurzes Foto-Briefing erstellen und vor dem Launch ein Halbtages-Shooting in Werkstatt und 1–2 fertigen Projekten einplanen. Ohne neue Bilder kann der Premium-Anspruch nicht eingelöst werden.

---

## 9. Mobile-Konzept

- Hero füllt nahezu Viewport, Bild zuerst, Headline darunter, CTA als ruhiger, voller Button (keine zwei Buttons nebeneinander).
- Navigation als minimaler Burger; im offenen Zustand: 4 große Menüpunkte, viel Weißraum, Telefonnummer prominent.
- Projekte als 1-spaltige große Tiles, Lazy-Loading, kein horizontales Scrollen.
- Kontakt-Section mit großen Tap-Targets: Anrufen · WhatsApp · E-Mail.

---

## 10. Content-Hierarchie pro Seite (Kurzform)

- **Startseite:** Positionierung → Leistungen → Projekte → Person → Kontakt
- **Leistungs-Detail:** Großes Bild → ein Absatz Haltung → was beinhaltet die Leistung (3–5 Bullets, ruhig formuliert) → Beispielprojekt → CTA
- **Projekt-Detail:** Titel → 1 Absatz Geschichte → Bildstrecke (groß, einspaltig) → Eckdaten (Ort, Material, Zeitraum) → Verwandte Projekte
- **Über:** Portrait → Geschichte (Tischler seit 1989) → Arbeitsweise → Materialhaltung (schadstoffarm) → Werkstatt → Kontakt
- **Kontakt:** Ein klarer Satz → Telefon/WhatsApp/E-Mail → kurzes Formular (Name, Nachricht, optional Bild) → Einsatzgebiet

---

## 11. Was in Phase 1 NICHT enthalten ist

- Keine Implementierung in Code
- Keine SEO-Arbeit (Keywords, Meta, Strukturdaten)
- Keine technische Architektur (CMS, Hosting, Formular-Backend)
- Kein finales Logo-Redesign

---

## 12. Nächste Schritte (nach Freigabe dieses Konzepts)

1. Moodboard (5–8 Referenzbilder) und finale Farb-/Typo-Entscheidung.
2. Foto-Briefing & Shooting-Planung.
3. High-Fidelity-Designs für Startseite + 1 Leistungsseite + 1 Projektseite (Desktop & Mobile).
4. Erst danach: technische Umsetzung in Phase 2.

Sag mir gern, an welchen Stellen du nachschärfen möchtest – z. B. Tonalität, Farbnuancen, Sitemap-Schnitt oder Hero-Idee. Danach gehen wir in die visuelle Detailarbeit.