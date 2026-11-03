# VandreApp 0.8.8 – mobilvenligt layout

Bygger på **0.8.7** uden tilsigtede ændringer i GPS-, GPX-, navigations- og lagringsmotoren.

## Nyheder
- **Fast mobil-bundmenu:** Kort, Ruter, Mine ture og Mere. Desktop bevarer sin fanenavigation.
- **Kort:** større, roligere visning med kompakt status over kortet og eksisterende GPS-knapper.
- **Ruter:** viser planlægningspanelet og kortet på samme side, så der kan placeres punkter med fingertryk.
- **Mine ture:** større handlingsknapper med to kolonner på telefoner.
- **Mere:** de eksisterende hjælpetekster og genveje.
- **Ministatistik:** gået distance og tid opdateres under kortvisning; rutefremdrift vises fortsat separat med total, tilbage og procent.
- **Bevar rute-navigationens kompakte GPS-panel:** når en rute følges, kan GPS-knapperne foldes ud.

## Udgivelse
Udpak ZIP-filen og upload **alle otte filer** til roden af GitHub-repositoryet. Åbn `https://kdsvinter2016-wq.github.io/Vandreapp/?v=088` og kontrollér teksten `Prototype 0.8.8`.

De gemte ture ligger i browserens lokale lager. **Slet ikke webstedsdata** for at få en ny version; lav JSON-backup først, hvis dette bliver nødvendigt.

## Begrænsninger
- Baggrunds-GPS med slukket skærm er ikke pålideligt i en browser.
- Automatisk ruteføring bruger ekstern tjeneste, kræver internet og kan fejle for visse via-punkter.
- De nye mobilfaner og kortets størrelsesændringer skal afprøves på fysisk Android-telefon.
