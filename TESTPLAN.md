# Testplan – VandreApp 0.8.4

## Gennemført i udviklingsmiljø

- JavaScript-syntakskontrol (Node.js).
- Simuleret fremdrift langs rute, forhindring af tilbagespring, afvisning af GPS langt fra ruten, afvisning af urealistisk langt spring og adskillelse af flere rutestykker.
- ZIP-integritet.

Disse kontroller erstatter **ikke** en praktisk Android-test.

## Udføres på Samsung Galaxy S25 FE

1. Åbn appen med `?v=084`; kontrollér at der står `Prototype 0.8.4`.
2. Tegn en rute tæt på din position. Vælg **Brug ruten til navigation**. Gå et stykke langs ruten med skærmen tændt. Bekræft at den passerede streg forsvinder, at resterende kilometer falder, og at det registrerede blå GPS-spor bevares.
3. Tryk **Vis hele ruten igen**. Bekræft at hele den oprindelige rute vises igen.
4. Importér en GPX med kendt start. Gå langs ruten og kontrollér afkortning. Eksportér/importér originalen på ny, og bekræft at den stadig er komplet.
5. Gå til **Mine ture**, vælg **Følg rute** for en gemt tur, og kontrollér afkortningen. Åbn den gemte tur via **Vis**, og bekræft uændrede data.
6. Test GPS-afvigelse fra ruten. Den resterende rute må ikke forsvinde, mens GPS er langt fra ruten.
7. Test stop, pause/genoptag, gendannelse, GPX-import/-eksport, JSON-backup, Wake Lock og Google Maps-startlink som regressionstest.

### Ikke testet her

- Virkelig bevægelse på Android.
- Advarsler ved ruteafvigelse og GPS-højde fra tidligere versioner, som fortsat kræver særskilt feltkontrol.
