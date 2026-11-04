# Testplan – VandreApp 0.8.18

## Layout på computer
1. Åbn VandreApp i browseren med en bred skærm.
2. Kontrollér, at appen vises i en centreret telefonlignende ramme og ikke strækkes i bredden.
3. Kontrollér, at bundmenuen har Kort, Ruter, GPS, Mine ture og Mere.
4. Skift mellem fanerne. Kortet skal ikke få vandretursstatistik på startsiden.

## Layout på Android
1. Åbn VandreApp i Chrome på Samsung Galaxy S25 FE.
2. Kontrollér, at appen fylder skærmens bredde uden kunstig telefonramme.
3. Kontrollér, at alle fem menupunkter kan trykkes, og at der ikke er vandret scroll.
4. Test fanerne Kort, Ruter, GPS, Mine ture, Mere.
5. Kontrollér, at GPS-knapper og distance/varighed findes under GPS, men ikke på Kort.

## Regression – kræver faktisk funktionstest
- Importér en GPX-fil, og kontrollér at ruten bliver synlig på kortet.
- Tegn en rute og eksportér en GPX med unikt filnavn.
- Åbn en tur fra Mine ture, og fjern ruten med Fjern rute og afslut navigation.
- Start og stop GPS-registrering med positionsadgang på telefonen.
- Kontrollér lokal gemning og eventuel backup/gendannelse.

## Udførte automatiserede kontroller
- Inline JavaScript kan parses af Node.js uden syntaksfejl.
- Browserkontrol af fem synlige menupunkter på både desktop og mobil, klik Kort/Ruter/GPS.
- Ingen vandret overflow i de testede visninger.
- Ikke testet: rigtige korttiles og fysisk GPS i testmiljøet.
