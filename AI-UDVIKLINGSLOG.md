# AI-udviklingslog – VandreApp 0.5

## Problem
VandreApp 0.4 kunne tabe en aktiv tur ved genindlæsning, Screen Wake Lock manglede, og kortfølgning var ikke pålidelig, især uden aktiv tur.

## Løsning
AI-assisteret kodeændring med genbrug af Leaflet, GPS Geolocation API og eksisterende localStorage-historik. Implementeret separat turkladde for aktiv tur, gendannelse som pause, Screen Wake Lock med statustekst samt løbende GPS-overvågning, når brugeren har valgt positionsvisning. Service worker-cache har nyt versionsnavn.

## Test og kvalitetskontrol
JavaScript-syntakskontrol og ZIP-integritet er kontrolleret automatisk. Android-test er ikke udført af AI og skal gennemføres med testplanen. En fejl i en Wake Lock-betingelse blev opdaget og rettet ved syntakskontrollen.

## Begrænsninger og læring
Webbaseret GPS kan stadig stoppe i baggrunden. localStorage er ikke et sikkert backuplager og kan mangle nyeste punkter ved pludselig afbrydelse. AI-genereret kode kræver syntax-, regressions- og enhedstest på virkelig telefon.


## Version 0.5.1 – Fejlrapport og rettelse
Brugertest: Efter GPX-import blev statistikken under Min vandretur ikke udfyldt, mens åbning af gemt tur virkede. Kodeanalyse viste, at GPX-distance kun blev vist i en summarisk tekst og at Min vandretur bevidst var separat. Rettelse: særskilt tydeligt statistikpanel for importeret GPX, med beregning af varighed/hastighed kun ved valide timestamps. Regresstest på Android afventer.


## 0.6 – AI-assisteret rutenavigation
**Problem:** GPS-ruter kan vises, men brugeren kan ikke se, hvor langt væk vedkommende er fra importeret GPX-spor.
**Løsning:** Afstandsberegning til nærmeste GPX-linjestykke, separat navigationspanel og visuel advarsel ved vedvarende ruteafvigelse, hvor GPS-nøjagtighed vægtes. Importerede GPX-segmenter forbindes ikke.
**Begrænsning:** Ingen sikker navigation eller baggrundsalarmer; fysisk GPS-test mangler ved kodelevering.


## Version 0.6.1 – fejlrettelse
**Observation fra fysisk Android-test:** Efter import af GPX fra version 0.4 stod GPS-afstand og nøjagtighed som `–`.
**Årsag:** GPX-importen indlæste ruten, men udløste ikke selv en GPS-anmodning. En aktuel GPS-position er nødvendig for disse værdier.
**Ændring:** Automatisk positionsanmodning efter vellykket GPX-import, manuel Opdatér GPS-position-knap, tilstands- og fejlbeskeder.
**Kontrol:** JavaScript-syntaks og pakkestruktur kontrolleres maskinelt. Android-test afventes.
