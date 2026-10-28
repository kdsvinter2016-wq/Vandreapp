# AI-udviklingslog – VandreApp

Dato: 28. oktober 2026

## Problem
På 10 dages udviklingstid skal en AI-understøttet prototype leveres med kort, GPS-position, eksempelrute, start/stop, distance/varighed og GPS-spor.

## AI-anvendelse
Brugeren bad AI om at gennemføre fem trin: (1) kodegennemgang, (2) fejlanalyse, (3) 0.2-rettelser, (4) Android-test og (5) dokumentation. AI læste den eksisterende 0.1-kilde i projektets ZIP og genbrugte samme HTML/JavaScript/Leaflet-arkitektur.

## Observationer / begrundelser
- GPS-overvågning kunne kaste en synkron fejl uden sikker oprydning.
- Asynkrone GPS-hændelser skulle begrænses til den aktive session.
- Ugyldige koordinater/tidsstempler skulle frasorteres før beregning og GPX-eksport.
- Positionsknappen manglede eksplicit kontrol af sikker kontekst og konsekvent knaptilstand.

## Ændringer i version 0.2
- Fejlhåndtering ved oprettelse af GPS-watch og ved enkel positionshentning.
- Sessions-ID for at ignorere forsinkede GPS-svar efter stop og ved ny tur.
- Validering af GPS-koordinater, tid og nøjagtighed.
- Visningsadvarsel når appen går i baggrunden.
- Versionstekst og README/testplan opdateret.

## Test og resultat
AI kørte automatisk JavaScript-logiktest under Node.js med mock-objekter; de anførte scenarier bestod. JavaScript bestod syntakskontrol via `node --check`. Der er ikke udført faktisk Android-test, fysisk GPS-måling eller browserbaseret kort-/GPX-downloadtest. Disse forbliver åbne punkter.

## Kritisk refleksion
AI kan hurtigt analysere, ændre og foreslå tests, men simulerede tests kan ikke dokumentere mobilens reelle GPS-adfærd, netværk, browser-permissioner eller nøjagtighed. En vellykket demonstration kræver derfor fysisk verificering. GPS-filtreringen er en afvejning: den fjerner mange støjpunkter, men kan også afvise gyldige data.

## Eksamensstruktur
**Problem:** Hurtigt at bygge en enkel GPS-vandreapp med begrænset udviklingstid.
**Løsning:** Iterativ AI-assisteret forbedring af en eksisterende Leaflet- og JavaScript-MVP.
**Resultat:** Version 0.2 med logiktests og dokumenteret mobiltestplan; Android-validering afventer brugerens afprøvning.
