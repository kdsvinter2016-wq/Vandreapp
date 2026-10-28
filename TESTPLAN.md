# VandreApp 0.5 – Testplan

Alle punkter er **afventer test på Android**, medmindre særskilt markeret.

1. **Kortfølgning:** Tryk Find min position, bekræft Følg GPS: Til. Flyt dig med skærmen tændt, og kontrollér at kortcentret flytter sig. Slå Følg GPS fra og kontrollér at kortet ikke længere automatisk flyttes. Slå til igen og kontrollér at det centrerer.
2. **Aktiv tur/kladde:** Start en tur, registrér mindst to punkter og genindlæs uden at stoppe. Banneret Afbrudt tur fundet skal vises.
3. **Gendannelse:** Tryk Gendan tur. Kontrollér antal punkter, distance, varighed og kortspor. Turen skal være sat på pause.
4. **Genoptag:** Tryk Genoptag tur. Kontrollér at nye punkter tilføjes uden forbindelseslinje over tids-/positionshullet.
5. **Kassér kladde:** Start en ny testtur og genindlæs. Kassér kladde. Ingen gendannelse vises efter endnu en genindlæsning.
6. **Wake Lock:** Start tur og vælg Hold skærmen tændt: Til. Status skal vise om Wake Lock er aktiv. Pause/Stop frigiver Wake Lock. Kontroller at skærmen ikke sover automatisk, hvis browseren understøtter API'et.
7. **Regression:** GPX-import, GPX-eksport, gem tur, Mine ture, pause/genoptag, distance og eksempelrute fungerer stadig.
8. **Browserlager:** Test med begrænset lagerplads / privat browsing; fejl ved lagring skal give en advarsel.

Bemærk: Android kan suspendere webapps ved slukket skærm. Denne version lover ikke kontinuerlig GPS i baggrunden.


## Ekstra test 0.5.1
- Importér en GPX med tidspunkter: statistik for distance, rutepunkter, varighed og gennemsnitshastighed vises i Importeret GPX-rute.
- Importér en GPX uden tidspunkter: distance og punkter vises, tid/hastighed viser –.
- Kontroller, at Min vandretur ikke overskrives af import.
- Fjern importeret rute: statistikpanelet forsvinder.
- Åbn gemt tur: Min vandretur udfyldes stadig korrekt.
