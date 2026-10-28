# VandreApp 0.4

Udvidelse af 0.3 med: (1) lokal lagring af afsluttede ture, (2) turhistorik med Vis og Slet, (3) pause/genoptag, (4) GPS-kortfølgning, (5) rutedistance for importeret GPX, (6) installerbar PWA.

## Installation på GitHub Pages
Upload **alle filerne fra ZIP-arkivets rod** til samme repository som den eksisterende version. `index.html`, `manifest.webmanifest`, `sw.js` og ikonerne skal ligge ved siden af hinanden. Commit til `main`, behold Pages = root. Genindlæs siden og kontrollér at der står Prototype 0.4. Installer via Chromes menu ("Installér app" eller "Føj til startskærm", afhængigt af Chrome-version).

## Vigtigt
- Gemte ture ligger i browserens `localStorage`, kun på den aktuelle enhed/browser. Sletning af browserdata kan fjerne ture. Eksportér GPX som backup. Op til 50 ture vises; browserens lagergrænse kan nås før dette.
- Timeren stopper under pause. Afstanden mellem det sidste punkt før pausen og det første efter genoptagelse tælles ikke med. GPX-eksport bevarer dette som separate track-segmenter.
- PWA er installerbar, men **ikke en fuldt offline-fungerende kortapp**. Leaflet og OpenStreetMap-kortfliser hentes eksternt og kræver typisk netadgang; service worker cacher kun appens egne filer.
- Geolocation kræver HTTPS og kan blive stoppet, hvis skærmen er slukket.
- Ændringer er kun syntakskontrolleret automatisk; funktionerne kræver test på Android.
