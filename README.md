# VandreApp 0.7.2 – automatisk ruteføring

Bygger på VandreApp 0.7.1. Manuel tegning, GPS, turhistorik, GPX-import/-eksport og navigation bevares.

## Ny funktion
1. Vælg **Start tegning** og markér 2–20 punkter på kortet.
2. Tryk **Beregn vandrerute langs stier**. Appen sender disse koordinater til Valhallas offentlige demotjeneste og modtager en fodgængerrute.
3. Grøn linje = beregnet gangrute; pink linje = rette linjer. **Vis rette linjer** vender tilbage til manuel tegning.
4. **Brug ruten til navigation** og **Eksportér tegnet rute (GPX)** anvender den beregnede rute, hvis den findes.
5. Ændrer du vejpunkterne, fjernes den tidligere beregning, så der ikke bruges forældede data.

## Vigtige begrænsninger
- Internetforbindelse og adgang til `https://valhalla1.openstreetmap.de` er påkrævet for automatisk beregning.
- Den offentlige Valhalla-demo er en delt tjeneste med fair-use og rate limits, og er ikke egnet til garanteret produktion. En egentlig driftversion skal bruge en aftalt API-udbyder eller egen server.
- Koordinater for valgte punkter sendes til ekstern tjeneste ved tryk på beregn-knappen. Ingen konto eller API-nøgle kræves i denne prototype.
- Ruten er et beregnet forslag og kan indeholde ikke-farbare eller forbudte strækninger; kontrollér altid forholdene lokalt.
- Ingen ruteberegning offline. Manuel tegning fungerer fortsat uden routingserver (kortfliser kræver normalt net).
- GPS under slukket skærm er fortsat ikke garanteret.

## Installation
Udpak alle filer i roden af GitHub-repositoryet og commit. Den hidtidige GitHub Pages-adresse er uændret.
