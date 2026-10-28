# AI-udviklingslog – version 0.8

**Problem:** Efter mange iterationer var brugerfladen lang og svær at overskue på mobil.
**Løsning:** AI reorganiserede den eksisterende DOM i tre faner og forbedrede kortlayoutet; alle eksisterende element-id’er og deres JavaScript-hændelser blev bevaret. Rutetegning blev gjort udfoldelig.
**Yderligere opdagelse:** Kildepakken 0.7.3 henviste til manifest og service worker uden at medtage filerne; version 0.8 medtager dem. Offline-kort er ikke implementeret.
**Kontrol:** JavaScript-syntaks og ZIP-integritet kontrolleres lokalt. Den praktiske Android-test er brugerens opgave og er endnu ikke gennemført.
**Begrænsninger:** Valhalla-demotjeneste, browserens baggrunds-GPS, lokal lagring og endnu ikke testet ruteafvigelsesalarm.
