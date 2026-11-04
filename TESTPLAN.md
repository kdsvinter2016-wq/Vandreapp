# Testplan – VandreApp 0.8.13

## Test A – Importeret GPX langt fra din position
1. Åbn version 0.8.13 på Galaxy S25 FE.
2. Importér en GPX-fil, hvis rute ikke ligger ved telefonens position.
3. Kontrollér, at hele GPX-ruten vises og **Følg GPS: Fra** står i GPS-panelet.
4. Vent 30 sekunder. Kortet skal blive på GPX-ruten, også når GPS-nøjagtighed opdateres.
5. Kontrollér, at afstand til ruten og GPS-nøjagtighed opdateres, hvis telefonen leverer målinger.

## Test B – Aktivér GPS-følgning bevidst
1. Tryk **Følg GPS: Fra**, så knappen viser **Til**.
2. Kortet skal centreres på telefonens position og følge nye positioner.
3. Slå Følg GPS fra igen. Kortet skal forblive i det valgte udsnit.

## Test C – Regression
1. Importeret GPX: startpunkt i Google Maps, rutelængde, GPX-højdeprofil.
2. Tegnet rute: tegning, beregning, navigation og GPX-eksport.
3. Mine ture: Følg rute, visning, gem og backup.
4. GPS-registrering og pause/genoptag samt rutenulstilling.

Status: kodekontrol og syntaks kan gennemføres lokalt; GPS på fysisk Android kræver brugerens test. Ruteafvigelsesalarmer er fortsat ikke fuldt verificeret.

## Ny kontrol i 0.8.13

1. Åbn Kort/GPS og tryk **Planlæg rute på kortet**.
2. Kontrollér, at fanen Ruter åbner, og at knappen nu hedder **Afslut tegning**.
3. Tryk på kortet to steder: Pink rutestreg og distance skal vises.
4. Tryk igen på **Planlæg rute på kortet**: Tegning skal fortsat være aktiv, og de eksisterende punkter må ikke blive slettet.
5. Kontrollér GPS-position, GPX-import og Mine ture kortvarigt som regressionstest.

Praktisk Android-test afventes.

## Test i 0.8.14 – GPX-filnavne

1. Tegn mindst to punkter og eksportér GPX to gange hurtigt efter hinanden. Kontrollér, at filnavnene er forskellige og ender på `.gpx`.
2. Åbn begge filer i gpx.studio, og kontrollér, at ruterne vises.
3. Beregn automatisk rute og eksportér; kontrollér unikt navn og korrekt rute.
4. Kontrollér, at almindelig GPS-registrering og dens GPX-eksport stadig virker.
