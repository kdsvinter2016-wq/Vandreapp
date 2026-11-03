# Testplan – VandreApp 0.8.12

## Test A – Importeret GPX langt fra din position
1. Åbn version 0.8.12 på Galaxy S25 FE.
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
