# VandreApp 0.8.10 – Testplan

## Automatiske kontroller
- [ ] JavaScript-syntaks
- [ ] Ingen dublerede HTML-ID'er
- [ ] Alle fem `data-tab` findes på desktop og mobil
- [ ] Version i HTML opdateret
- [ ] ZIP-integritet

## Android-test – Samsung Galaxy S25 FE (endnu ikke gennemført)
1. Åbn 0.8.10 i Chrome: nederst skal Kort, Ruter, GPS, Mine ture og Mere stå synligt.
2. Ruter: tegn to punkter og se ruten på kortet. Importér GPX og kontrollér rutestatistik.
3. GPS: se Start tur, Pause og Stop samt turstatistik. Kontrollér Find GPS.
4. Kort: kort og navigationsstatistik vises uden overflødige ruteplanlægningsknapper.
5. Mine ture: vælg Følg rute, gå tilbage til Kort, fjern ruten og kontrollér at topstatistikken skjules.
6. Genåbn Ruter og GPS flere gange, og kontrollér, at kortet fortsat vises.
7. Regressionstest: start/stop, GPX-import/-eksport, Wake Lock, gemte ture og gradvis rutefremdrift.

Fysisk GPS og rutefunktioner kan ikke bekræftes gennem HTML-syntakstest alene.
