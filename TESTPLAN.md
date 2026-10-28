# Testplan og testresultater – VandreApp 0.2

## Automatiseret test udført 28. oktober 2026

Et Node.js-testharness har eksekveret appens faktiske JavaScript med simulerede DOM-, Leaflet- og Geolocation-objekter. Følgende scenarier bestod: initialtilstand, GPS-start, valide GPS-punkter, frasortering af urealistisk hastighed, frasortering af dårlig nøjagtighed, stop, forsinket GPS-callback efter stop, gammel GPS-callback efter ny tur, afvist placeringstilladelse, nulstilling og positionsknap.

**Begrænsning:** Testen er en logiktest med mock-objekter. Den dokumenterer ikke at Leaflet-kort, GPS eller GPX-download fungerer i en rigtig mobilbrowser.

## Manuel Android-test (endnu IKKE udført)

Afkryds og noter konkret resultat efter afprøvning på telefon:

- [ ] A1 – Åbn appen via HTTPS i Chrome: kort og OpenStreetMap-fliser vises.
- [ ] A2 – Tryk »Vis eksempelrute«: orange rute vises; »Skjul« fjerner den.
- [ ] A3 – Tryk »Find min position« og tillad placering: kortet zoomer til brugerens position.
- [ ] A4 – Tryk »Start tur«, gå 100–300 m udendørs med skærmen tændt: punkter, blå linje, distance og varighed ændrer sig.
- [ ] A5 – Tryk »Stop tur«: varighed og sporlængde holder op med at ændre sig.
- [ ] A6 – Tryk »Eksportér tur (GPX)«: telefonen henter en .gpx-fil, som kan åbnes i en GPX-læser.
- [ ] A7 – Tryk »Nulstil«: distance, varighed, punktantal og sporet nulstilles.
- [ ] A8 – Afvis placeringstilladelse: appen viser en forståelig fejl og kan startes igen.
- [ ] A9 – Sluk/lås skærmen kort under registrering: notér reel opførsel og GPS-begrænsning (ikke krav om baggrundssporing).

Notér ved testen: Android-version, Chrome-version, dato, vejrlig/område, om GPS-permission var givet, distance og fejlmeddelelser. Ingen GPS-resultater er opfundet.
