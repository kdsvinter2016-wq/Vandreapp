# Testplan 0.8.7

1. Åbn Prototype 0.8.7 på Android. Uden aktiv navigationsrute skal GPS og ruteplanlægning være fuldt synlig.
2. Mine ture → Følg rute: rutestatistik over kortet og rutestregen er synlige; panelet GPS og ruteplanlægning er sammenklappet.
3. Tryk **Vis GPS-betjening**: Start, Pause, Stop, Planlæg rute og Centrér GPS er tilgængelige. Tryk **Skjul betjening** og kontrollér, at det foldes sammen.
4. Under aktiv GPS-registrering: åbn betjeningen, test Pause/Genoptag og Stop.
5. Importér GPX: betjeningen sammenklappes. Fjern GPX: betjeningen vises igen.
6. Tegn rute og vælg Brug ruten til navigation: betjeningen sammenklappes. Ryd rute: betjeningen vises igen.
7. Regression: GPS-centret, rutestregens fremdrift, rutestatistik, GPX-eksport, Mine ture og backup.

Registrer eventuelle fejl; Android-tests er ikke udført af AI.
