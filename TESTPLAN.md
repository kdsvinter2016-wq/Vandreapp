# Testplan – VandreApp 0.8.9

1. Åbn appen på Galaxy S25 FE og bekræft version 0.8.9.
2. Vælg **Kort**: Kortet vises; GPS-betjening er ikke permanent udvidet; genvejen til GPS & ruter virker.
3. Vælg **GPS & ruter**: Start/Pause/Stop, centrér GPS, GPX-import og ruteplanlægning er tilgængelig sammen med kortet.
4. Vælg **Mine ture → Følg rute**: Navigationsbanner vises. Tryk **Fjern rute og afslut navigation**: banner forsvinder og ruten fjernes fra kortet, mens den gemte tur stadig findes i historikken.
5. Importér GPX. Kontrollér banner. Tryk **Fjern importeret rute**: banner forsvinder og navigationslag fjernes. Gentag med **Fjern rute og afslut navigation**.
6. Tegn en rute og vælg navigation. Kontrollér banner. Tryk **Ryd tegnet rute**: banner forsvinder. Gentag med **Fjern rute og afslut navigation**.
7. Kontrollér at GPS-registrering, afstand, varighed, pause/genoptag, rutefremdrift og GPX-eksport stadig fungerer.
8. Genindlæs og kontrollér at gemte ture og backup er bevaret.

**Status:** Syntaks/struktur kontrolleres automatiseret; den praktiske Android-test er afventende.
