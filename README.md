# VandreApp 0.8.7 – Kompakt betjening under rutenavigation

Bygger videre på 0.8.6. Når en tegnet, importeret GPX- eller gemt rute er valgt til navigation, foldes panelet **GPS og ruteplanlægning** automatisk sammen, så kort og rutefremdrift får mere plads. Knappen **Vis GPS-betjening** åbner stadig Start/Pause/Stop og planlægningsknapperne. **Skjul betjening** folder det sammen igen.

Når en tegnet navigationsrute ryddes eller en importeret GPX-rute fjernes, foldes panelet automatisk ud. Gemte ture kan fortsat følges; hvis en ny rute vælges, bliver panelet igen kompakt. Rutestreg, fremdrift, Wake Lock, GPS-kortfølgning, historik og eksport er ikke tilsigtet ændret.

**Test:** Vælg en gemt tur → Følg rute, verificér at betjeningen er foldet sammen, åbn med Vis GPS-betjening, prøv pause/stop med en aktiv tur, og test det samme med importeret GPX og tegnet rute. Fjern GPX-ruten og kontrollér at fuld betjening vises igen.

Udgivelse: Udpak ZIP-filen og upload filerne direkte i roden af GitHub-repositoryet. Åbn siden med `?v=087` for at mindske risikoen for gammel browsercache.

**Bemærk:** Ingen funktionstest på fysisk Android-enhed er udført her. GPS-baggrundsregistrering er fortsat ikke garanteret i webappen.
