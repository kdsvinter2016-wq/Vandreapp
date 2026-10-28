# AI-udviklingslog – version 0.8

**Problem:** Efter mange iterationer var brugerfladen lang og svær at overskue på mobil.
**Løsning:** AI reorganiserede den eksisterende DOM i tre faner og forbedrede kortlayoutet; alle eksisterende element-id’er og deres JavaScript-hændelser blev bevaret. Rutetegning blev gjort udfoldelig.
**Yderligere opdagelse:** Kildepakken 0.7.3 henviste til manifest og service worker uden at medtage filerne; version 0.8 medtager dem. Offline-kort er ikke implementeret.
**Kontrol:** JavaScript-syntaks og ZIP-integritet kontrolleres lokalt. Den praktiske Android-test er brugerens opgave og er endnu ikke gennemført.
**Begrænsninger:** Valhalla-demotjeneste, browserens baggrunds-GPS, lokal lagring og endnu ikke testet ruteafvigelsesalarm.


## Version 0.8.1
**Fejl rapporteret:** Kort-fanen viste ikke GPS-knapper og ruteplanlægning umiddelbart. **Årsag:** Funktionerne var placeret under et højt kort, og ruteplanlægningen lå i et lukket details-element. **Løsning:** Synlig handlingslinje over kortet, som aktiverer de eksisterende knapper, samt genvej der åbner planlægningspanelet. **Teststatus:** Statisk kontrol og JavaScript-syntaks; Android-test afventer.

## 0.8.2 – Google Maps-rute til start
**Brugerønske:** Vis startpunkt for manuelt/automatisk planlagt rute og link til Google Maps for vejvisning dertil.
**Løsning:** Brug første valgte punkt `drawnPoints[0]`, vis koordinater og Google Maps Directions URL med API 1 og destination samt biltransport som standard. Linket opdateres ved ændringer af rutepunkter. Ingen ekstern geokodning og ingen deling, før brugeren åbner Google Maps.
**Test:** JavaScript-syntaks og HTML-struktur kontrolleret automatisk; faktisk Android-åbning af Google Maps afventer brugerens test.
