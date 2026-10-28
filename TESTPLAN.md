# VandreApp 0.3 – testplan

## Teknisk kontrol
- [x] JavaScript-syntaks kontrolleret med Node.js `node --check`.
- [ ] Browserintegration med rigtige GPX-filer kontrolleres på Android.

## Android-test (udføres af brugeren)
1. Åbn https://kdsvinter2016-wq.github.io/Vandreapp/ og kontrollér at der står **Prototype 0.3**.
2. Tryk **Importér GPX**, vælg GPX-filen eksporteret fra VandreApp 0.2. Kontrollér at en **lilla rute** vises og antallet af punkter oplyses.
3. Tryk **Fjern importeret rute**. Kontrollér at lilla rute forsvinder.
4. Importér igen, start GPS-registrering. Kontrollér at **blå registreret tur** og **lilla importeret rute** vises samtidigt, og at distance og varighed virker.
5. Stop tur og eksportér GPX. Kontrollér at importen ikke har ændret antallet af registrerede GPS-punkter.
6. Prøv en tekstfil eller beskadiget GPX med filtypen `.gpx`: appen viser fejl i stedet for at gå ned.
7. Test en GPX med `rtept` hvis tilgængelig.
8. Kontrollér at den orange eksempelrute stadig kan vises og skjules.

Notér Android-version, browser, navn på GPX-filen, resultat og eventuelle fejl. Eksisterende Android-test af version 0.2 er tidligere oplyst bestået af brugeren; version 0.3 er ikke Android-testet endnu.
