# VandreApp 0.3 – GitHub Pages

Mobilvenlig HTML/CSS/JavaScript-app baseret på VandreApp 0.2. Leaflet + OpenStreetMap, GPS-position, eksempelrute, registrering, distance, varighed og GPX-eksport er bevaret.

## Nyhed: GPX-import

Tryk **Importér GPX**, vælg en `.gpx`-fil fra telefonen, og se ruten som en **lilla linje**. Understøtter GPX `trk/trkseg/trkpt` og `rte/rtept`, også flere segmenter. Kortet zoomer til ruten. **Fjern importeret rute** fjerner kun den lilla rute; den registrerede blå tur påvirkes ikke. Filen behandles lokalt i browseren og uploades ikke til en server.

Filer over 10 MB og ruter over 20.000 punkter afvises. GPX-waypoints alene (`wpt`) vises ikke. Ugyldig XML, koordinater eller tomme ruter afvises.

## Publicering

Upload filerne i denne mappe til roden af det eksisterende GitHub-repository `kdsvinter2016-wq/Vandreapp` (ikke selve ZIP-filen). Behold GitHub Pages-opsætningen `main / (root)`. App: https://kdsvinter2016-wq.github.io/Vandreapp/ . Opdateringen bliver synlig, når GitHub Pages har publiceret den.

## Test

Se `TESTPLAN.md`. Ægte Android- og GPS-test skal udføres på telefonen. GPS kræver HTTPS, positionsrettigheder og at browseren holdes aktiv.
