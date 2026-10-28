# VandreApp 0.8 – Mobilinterface

Bygger på 0.7.3 og bevarer eksisterende GPS, rutetegning, Valhalla, GPX, højdeprofiler, backup og turhistorik.

## Ny brugerflade
- Tre faner: Kort, Mine ture og Indstillinger.
- Kortet fylder mere på telefonen.
- Knapper til aktiv tur vises tættere på kortet.
- Rutetegning og automatisk routing ligger under en udfoldelig sektion.
- Indstillinger indeholder hjælp og genveje til funktionerne.

## Udrulning
Upload alle 8 filer til roden af GitHub-repositoriet, og commit. Åbn via HTTPS. Reload siden hvis cache holder på gamle filer.

## Begrænsninger
- Ingen pålidelig GPS i baggrunden med slukket skærm.
- Valhalla-demotjenesten kan afvise routinger, særligt med problematiske via-punkter.
- Data ligger lokalt i browseren – eksportér backup.
- PWA indeholder manifest og basal service worker, men ikke offline-kort.


## Rettelse i 0.8.1
GPS-knapper og rutegenvej er nu placeret synligt over kortet. Knappen Planlæg rute åbner det eksisterende planlægningspanel og scroller til det. Den underliggende GPS- og rutelogik er ikke ændret.
