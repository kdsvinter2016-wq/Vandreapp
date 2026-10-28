# VandreApp 0.5 – GitHub Pages

Fortsætter VandreApp 0.4. Nye funktioner: løbende turkladde i localStorage, gendannelse af afbrudt tur (altid i pauset tilstand), valgbar Screen Wake Lock og forbedret GPS-kortfølgning både under og udenfor aktiv tur.

## Publicering
Udpak ZIP-filen og upload alle filerne direkte til roden i GitHub-repositoryet `Vandreapp`. GitHub Pages bruger `index.html`. Overskriv de eksisterende filer og vent på opdatering til 'Prototype 0.5'.

## Brug
- **Følg GPS: Til** er standard. Tryk **Find min position**, så kortet fortsætter med at følge GPS i forgrunden, også når en tur ikke registreres. Du kan slå følgning fra for at gennemse kortet.
- **Start tur** begynder registrering og gemmer automatisk en lokal kladde, også ved GPS-punkter.
- Genindlæs eller genåbn under en aktiv tur: vælg **Gendan tur**. Turen genoptages først, når du trykker **Genoptag tur**. Pausen mellem sessionsregistreringer tælles ikke med, og der tegnes ingen forbindelseslinje.
- **Hold skærmen tændt: Til** aktiverer Screen Wake Lock ved en aktiv tur, når browseren tillader det. Et aktiveret valg er ikke det samme som en bekræftet Wake Lock; status vises nedenunder knappen.
- **Stop tur** eller **Nulstil** fjerner den aktive kladde. Gemte ture bevares separat.

## Begrænsninger
Automatisk lagring afhænger af browserens localStorage og er ikke en egentlig backup. Systemet kan lukke browseren inden sidste punkt er gemt. Wake Lock fungerer kun ved synlig app med tændt skærm og sikrer **ikke** GPS ved slukket skærm. Kortfliser og Leaflet kræver internet og GPS kræver HTTPS. GPS-tilladelser kan variere på telefoner. Test på Galaxy S25 FE før accept.


## Version 0.5.1 – GPX-statistik
Ved import vises et særskilt panel med distance og antal rutepunkter. Varighed og gennemsnitshastighed vises, når alle punkter i hvert segment har gyldige kronologiske tidsstempler. Min vandretur viser fortsat alene den registrerede eller åbnede gemte tur. GPS-logik, lagring og wake lock er ikke ændret.


## Version 0.6 – Rutenavigation
Importér en GPX-rute og tryk Find min position eller start en tur. Et separat panel viser meter til nærmeste linjestykke på den importerede rute, GPS-nøjagtighed og status. Advarsel ved to på hinanden følgende målinger længere end 75 m + rapporteret GPS-usikkerhed fra ruten, og kun ved nøjagtighed på højst 50 m. Importeret rute og registreret tur holdes adskilt. Funktionen virker kun, når siden får GPS-målinger i forgrunden. Ingen turn-by-turn-vejledning, sikkerhedsgaranti eller baggrundsalarm.


## Version 0.6.1 – GPS-opdatering ved GPX-import

Efter import af GPX henter appen automatisk en frisk GPS-position, og panelet Rutenavigation viser afstand til ruten og GPS-nøjagtighed. Tillad positionsadgang, når Android/Chrome spørger. Brug **Opdatér GPS-position** for at prøve igen. Hvis GPS ikke er tilgængelig, vises en forklaring i panelet. GPS-afstand er ikke en oplysning, der kan udledes alene af GPX-filen.
