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
