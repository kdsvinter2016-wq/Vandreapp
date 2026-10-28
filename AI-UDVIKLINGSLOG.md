# AI-udviklingslog – VandreApp 0.7

**Problem:** VandreApp mangler samlet backup og analyse af vandretures højdedata.

**Løsning:** AI-assisteret ændring af 0.6.1 med højdeprofil (SVG), summering af stigning/fald, omdøbning og valideret JSON-backup/gendannelse. Den eksisterende GPS-motor er bevaret.

**Valg:** Ingen nye biblioteker; højder vises kun, når de findes i data. Backup indeholder højst 50 ture og valideres før skrivning til localStorage.

**Begrænsninger:** GPS-højder kan være støjfyldte; 3 m filtrering er en heuristik. Browserlagring er ikke en sikker serverbackup. Ruteafvigelsesadvarsel fra 0.6.1 er endnu ikke praktisk testet.

**Test:** JavaScript-syntaks og projektfilernes integritet kontrolleres før levering. Android-funktionstest skal gennemføres af bruger.


## Version 0.7.1
Brugerønske: Kunne tegne en ønsket rute på kortet før den større redesignversion 0.8. AI-assisteret udvikling: manuel kortklik/tryk-planlægning, visning af punkter og distance, fortryd/ryd, GPX-eksport og overførsel til eksisterende navigationspanel. Designvalg: lige linjer mellem valgte punkter, ingen ekstern routing-API, adskilt fra GPS-spor. Mangler: fysisk Android-test og slut-til-slut test af rutenavigation.
