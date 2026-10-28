# VandreApp 0.8 – Android-testplan

**Status:** syntakstest og pakkevalidering; praktisk Android-test afventer.

1. Kontroller at Prototype 0.8 vises.
2. Kort-fanen: kortet vises med korrekt størrelse og GPS-position.
3. Start, pause, genoptag, stop og gem en kort tur.
4. Åbn "Planlæg en rute på kortet"; tegn rute og eksportér GPX.
5. Beregn rute med få via-punkter; prøv GPX-eksport.
6. Importér GPX; kontroller importstats og Rutenavigation.
7. Mine ture: vis tidligere tur, omdøb og lav JSON-backup.
8. Mine ture: kontrollér at højdegraf vises for GPX med højdedata (via Kort-fanens importstatistik).
9. Indstillinger: genveje fører til korrekte faner.
10. Genindlæs og bekræft automatisk gendannelse af aktiv tur.
11. Test Wake Lock og Følg GPS.
12. Tidligere ikke gennemført: ruteafvigelsesadvarsel og GPS-højde fra registreret tur.

Hvis der opstår fejl: registrér trin, forventet/faktisk resultat og telefonens Android/Chrome-version.


## 0.8.1 – fejlrettelse
1. På Kort-fanen skal Start tur, Pause tur, Stop tur, Planlæg rute på kortet og Find GPS være synlige **over** kortet.
2. Pause og Stop skal være deaktiverede før turstart; de aktiveres korrekt ved start.
3. Planlæg rute åbner panelet og ruller til knapperne til tegning.
4. GPS-kort, import, gemte ture og eksisterende registrering skal stadig virke.
5. Test på Galaxy S25 FE; ikke verificeret her på fysisk telefon.

## Version 0.8.2 – startpunkt og Google Maps
1. Sæt første rutepunkt og kontrollér, at koordinater og Google Maps-link vises.
2. Klik på linket; kontrollér at destinationen svarer til første rutepunkt (ikke telefonens aktuelle position).
3. Tilføj flere punkter og beregn gangrute; linket må stadig pege på oprindeligt startpunkt.
4. Fortryd samtlige punkter eller tryk Ryd tegnet rute; startpanelet skal forsvinde.
5. Lav en ny rute; linket skal opdateres til det nye første punkt.
6. Regressionstest GPS, GPX, gemte ture, kortfølgning og faner på Android.

## Test for 0.8.3
1. Importér GPX-fil med `<trk><trkseg><trkpt ...>`; kontrollér at første koordinat vises i Importeret GPX-rute, og Google Maps åbner med det som destination.
2. Importér GPX-fil med `<rte><rtept ...>`; verificér tilsvarende.
3. Importér en anden fil og kontrollér at koordinat og destination ændres.
4. Fjern GPX-ruten; startpunktspanelet skal forsvinde.
5. Importér ugyldig GPX; appen må ikke vise et nyt forkert startpunkt.
6. Regressionstest: tegn rute, Google Maps-startpunkt, GPS-registrering, turhistorik og GPX-eksport.
Test på fysisk Android er endnu ikke gennemført.
