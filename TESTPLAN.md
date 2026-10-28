# Android-testplan – VandreApp 0.7

- [ ] Importér GPX med `<ele>`: afstand, højdemeter og højdeprofil vises.
- [ ] Importér GPX uden `<ele>`: appen viser ikke falske højdemeter.
- [ ] Åbn en gemt tur med højdedata: turanalyse vises; uden data vises forklaring.
- [ ] Omdøb en gemt tur; genindlæs siden og kontrollér navnet.
- [ ] Gem to ture, download JSON-backup, slet én og gendan den. Den anden må ikke duplikeres.
- [ ] GPX-import/-eksport, start/stop, pause, gendannelse, kortfølgning og Wake Lock fungerer stadig.
- [ ] Navigationens advarsel ved ruteafvigelse testes separat (ikke verificeret i 0.6.1).

Resultaterne skal dokumenteres efter manuel afprøvning på Galaxy S25 FE.


## Version 0.7.1 – Planlagt rute
1. Vælg Start tegning og tryk tre forskellige steder på kortet: tre pink punkter og to rette linjestykker.
2. Kontrollér at distance og punkttal vises.
3. Fortryd punkt, og kontrollér at ruten og distance ændres.
4. Afslut tegning, eksportér GPX, og importér filen igen.
5. Vælg Brug ruten til navigation, og verificér status efter GPS-position.
6. Kontrollér at tegning ikke sletter eksisterende gemte ture eller det aktive GPS-spor.
7. Test både Android touch og mus på pc.

**Afventer praktisk Android-test.** Tegning følger ikke vejnettet automatisk.
