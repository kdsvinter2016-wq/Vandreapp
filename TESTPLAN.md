# Testplan VandreApp 0.6

**Ikke verificeret på fysisk Android ved levering.**

1. Upload ZIP-filerne til GitHub Pages og kontrollér »Prototype 0.6«.
2. Importér en GPX: panel »Rutenavigation« skal vises, distancen i importstatistik må ikke ændres.
3. Tryk Find min position: afstand til ruten og GPS-nøjagtighed skal opdateres.
4. Gå langs ruten: status viser På ruten, hvis GPS er præcis nok.
5. Gå mere end 75 m + GPS-usikkerheden væk fra ruten: efter to pålidelige målinger skal advarsel vises.
6. Slå Ruteovervågning Fra: ingen nye advarsler, GPS-registrering fortsætter. Slå Til igen.
7. Fjern importeret GPX: navigationspanelet skal skjules, aktiv tur må ikke ændres.
8. Kontrollér GPS-kortfølgning, lagring/gendannelse, pause, Wake Lock, GPX-eksport, gemte ture.
9. Test en GPX med separate segmenter: afstand må ikke beregnes via en imaginær forbindelseslinje.
10. Test ved dårlig GPS-nøjagtighed (>50m): ingen ruteadvarsel; status skal sige upræcis.

Advarsel er kun visuel i aktiv browser. GPS-afvigelse kan medføre falske eller manglende advarsler.


## Supplerende test 0.6.1
1. Importér tidligere GPX fra version 0.4: afstand/nøjagtighed skal vise tal efter en GPS-måling.
2. Afvis GPS-tilladelse: tydelig fejlbesked i navigationspanelet, ikke permanent tankestreg.
3. Brug Opdatér GPS-position: nye værdier vises.
4. Fjern GPX under GPS-anmodning: panelet forbliver skjult uden fejl.
5. Genkontrollér Mine ture, GPS-start/stop og GPX-eksport.
