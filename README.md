# VandreApp 0.8.13 – rettelse af GPX-kortvisning

Denne version bygger på 0.8.10 og retter fejlen, hvor en importeret GPX-rute kun blev vist kortvarigt, før kortet automatisk panorerede til telefonens GPS-position.

## Ny adfærd
- Importér en GPX-fil: Kortet tilpasses hele ruten, og **Følg GPS** sættes til **Fra**.
- GPS-målinger kan stadig opdatere **Meter til ruten** og **GPS-nøjagtighed**, uden at kortets centrum flytter sig.
- Tryk selv på **Følg GPS: Fra** for at aktivere automatisk centrering, når du vil følge ruten fysisk.
- Tegnede og gemte ruter beholder tidligere kortfølgning ved valg af navigation.
- Den originale GPX-rute og gemte ture ændres ikke.

## Installation
Udpak ZIP-filen og upload alle otte filer til roden af GitHub-repositoryet. Åbn siden med `?v=0811` og kontrollér versionsnummeret.

Se `TESTPLAN.md` for Android-tests. Webappen kan ikke garantere GPS-opdateringer med slukket skærm.

## Ændring i 0.8.13

Knappen **Planlæg rute på kortet** under **GPS og ruteplanlægning** åbner fanen Ruter og aktiverer automatisk **Start tegning**. Hvis tegning allerede er aktiv, forbliver den aktiv. Øvrige GPS- og rutefunktioner er bevaret.

## Ændring i 0.8.14 – unikke GPX-filnavne

Hver eksport af en tegnet eller automatisk beregnet rute får et filnavn med lokalt dato-/tidsstempel (inklusive millisekunder) og en kort identifikator, eksempelvis `vandreapp-tegnet-rute_2026-11-04_15-34-22-058_a1b2c3d4.gpx`. Det ændrer ikke GPX-filens indhold eller eksport af registrerede ture.

## Version 0.8.15
- Startsiden Kort viser ikke længere den ekstra overskrift “Kort og navigation”.
- “Åbn GPS og ruteplanlægning” åbner nu GPS-fanen med betjeningen.
- Herfra åbner “Planlæg rute på kortet” fanen Ruter og starter tegning.
- Alle øvrige funktioner fra 0.8.14 er bevaret i kildekoden.
