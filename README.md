# VandreApp 0.8.4 – Ruten forsvinder efterhånden som den gennemføres

Dette projekt er en komplet mobilvenlig webapp til GitHub Pages. Pak ZIP-filen ud, og upload filerne i roden af dit GitHub-repository.

## Ny funktion

Ruten afkortes visuelt efterhånden som telefonens GPS-position viser fremdrift. Understøttede navigationskilder:

- Tegnet rute: Tryk **Brug ruten til navigation**. Både rette linjer og beregnet stiføring understøttes.
- Importeret GPX: Importér GPX-filen. Den bliver automatisk valgt som navigationsrute.
- **Mine ture**: Klik **Følg rute** ved den gemte tur. Dette er adskilt fra **Vis**, som blot viser turens registrerede statistik.

I panelet **Rutenavigation** vises kilometer tilbage og procent passeret. Knappen **Vis hele ruten igen** nulstiller den synlige fremdrift, uden at ændre originalen. Hvis der vælges en ny rute, nulstilles fremdriften.

Beregningen tager hensyn til GPS-nøjagtighed, accepterer kun en fremadgående bevægelse tæt på ruten og ignorerer større spring. Separate GPX-/GPS-segmenter forbindes ikke med en kunstig streg. Rutestrengen gemmes ikke over genindlæsning, så en ny session starter med hele ruten.

## Vigtige begrænsninger

- GPS kræver HTTPS og brugerens tilladelse.
- GPS i browseren er ikke pålidelig med skærmen slukket. Wake Lock kan bruges.
- Fremdrift baseres på GPS-positionens nærmeste projektion på ruten og kan blive påvirket af parallelle/overlappende stier, dårlig GPS eller kraftige sving.
- Hvis brugeren er for langt fra ruten eller GPS-nøjagtigheden er dårlig, fjernes ingen flere rutestykker.
- Gemte ture og importerede GPX-filer ændres ikke. Den registrerede GPS-rute er en separat blå streg.
- Beregning af gangruter kræver netforbindelse til en ekstern tjeneste og kan fejle med mange via-punkter.

## Filstruktur

- `index.html`: Hele VandreApp.
- `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`: PWA-grundlag.
- `TESTPLAN.md`, `AI-UDVIKLINGSLOG.md`: Tests og eksamensdokumentation.
