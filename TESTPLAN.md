# Testplan – VandreApp 0.8.8

## A. Layout på Samsung Galaxy S25 FE (ikke udført)
1. Start 0.8.8 i Chrome. Kontroller at bundmenuen med Kort, Ruter, Mine ture, Mere er synlig og ikke dækker indhold.
2. Kort: kortet vises; tryk Centrér GPS; GPS-markøren ses; positionen følges ved bevægelse.
3. Start tur; kontrollér at mini-felterne **Gået** og **Tid** ændrer sig.
4. Ruter: planlægningspanelet åbnes, og kortet er synligt. Tegn tre punkter; slet punkt; beregn automatisk vandrerute.
5. Mine ture: gemt tur vises; Følg rute skifter tilbage til Kort med korrekt rutelinje.
6. Under navigation foldes GPS-betjeningen sammen; **Vis GPS-betjening** åbner den.
7. Mere: hjælp og genveje virker.
8. Test portræt og landskab, samt tastatur- og skærmlæserfokus.

## B. Regression (ikke udført på Android)
- GPX import, start i Google Maps, GPX eksport
- GPS start/pause/genoptag/stop og gendannelse
- Gem/slet ture, JSON-backup og gendannelse
- Rutefremdrift: passeret linje skjules gradvist, total/tilbage/% består
- Wake Lock og højdedata, hvis tilgængelige

## Teknisk automatiseret kontrol
JavaScript-syntakskontrol via `node --check`, HTML ID-kontrol og ZIP-integritet. Disse er ikke erstatning for fysisk Android-test.
