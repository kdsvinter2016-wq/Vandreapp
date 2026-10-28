# VandreApp – version 0.2

Mobilvenlig webapp med HTML, CSS, JavaScript og Leaflet 1.9.4. Bygger videre på VandreApp-MVP 0.1.

## Funktioner
1. Interaktivt OpenStreetMap-kort
2. Vis brugerens GPS-position
3. Illustrativ eksempelrute (ikke verificeret som vandrerute)
4. Start/stop GPS-registrering
5. Distance og varighed
6. Tegn registreret GPS-spor
Ekstra: GPX-eksport af stoppet tur.

## Start på PC
Åbn en terminal i mappen med `index.html` og kør:

```sh
python -m http.server 8000
```

Åbn http://localhost:8000. Internetforbindelse kræves til Leaflet og kortfliser.

## Test på Android
Publicér filen på et statisk HTTPS-websted, fx GitHub Pages. Åbn HTTPS-adressen i Chrome på telefonen, og giv tilladelse til placering. En HTTP-adresse fra en anden maskine på hjemmenetværket er normalt ikke en sikker kontekst og tillader ikke GPS. Test fysisk udenfor med skærmen tændt.

## Bemærkninger
- Starter du en ny tur, erstattes den foregående tur i hukommelsen. Eksportér GPX først, hvis turen skal gemmes.
- Der er ikke baggrundssporing eller lokal lagring. Genindlæsning sletter turen.
- GPS-punkter med oplyst nøjagtighed over 35 m eller hastighedsspring over 4,5 m/s filtreres fra. Dette er simple heuristikker, ikke garanti for korrekt GPS-distance.
- Varigheden tæller fra start-knappen, også mens appen afventer GPS-tilladelse eller første position.
- GPS kan stoppe eller blive ustabilt, når telefonen låses eller browseren er i baggrunden.
- Eksempelruten er en illustration og må ikke bruges som sikker navigation.
- GPS kræver sikker kontekst (HTTPS eller localhost) og brugerens placeringstilladelse.
- Ingen login eller serverlagring af spor; korttiles og Leaflet hentes dog fra eksterne tjenester.

## Licenser og kilder
Leaflet 1.9.4: https://leafletjs.com/
Kort © OpenStreetMap contributors: https://www.openstreetmap.org/copyright
OSM Tile Usage Policy: https://operations.osmfoundation.org/policies/tiles/

Se `TESTPLAN.md` og `AI-UDVIKLINGSLOG.md`.
