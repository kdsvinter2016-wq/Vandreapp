# Testplan 0.7.3

**Ikke testet på fysisk Android-enhed.**

1. Kontroller teksten Prototype 0.7.3.
2. Tegn to punkter langs en vej/sti. Kontroller pink manuel rute og afstand.
3. Tryk Beregn vandrerute langs stier. Bekræft grøn rute, der følger kortets stier, og ændret afstand.
4. Tilføj et nyt rutepunkt. Bekræft at grøn beregning forsvinder, og at ny beregning kræves.
5. Beregn igen, tryk Brug ruten til navigation. Bekræft GPS-afstand og status.
6. Eksportér den grønne rute til GPX og åbn i gpx.studio.
7. Tryk Vis rette linjer. Bekræft pink linje og tilsvarende eksport.
8. Slå internet fra inden beregning. Bekræft forståelig fejl og at manuel rute stadig findes.
9. Regressionstest GPS, pause/genoptag, autosave, Wake Lock, import/eksport, backup og højdeprofil.
10. Tidligere udestående test: reel ruteafvigelsesadvarsel og GPS-baseret højdeprofil.

## Særligt: HTTP 400
1. Vælg to nærliggende punkter på en almindelig vej. Beregn rute.
2. Hvis routing fejler, noter den præcise fejltekst, som nu vises i appen.
3. Prøv punkter med manglende sti/vej og kontrollér, at brugeren får forklaring frem for generisk HTTP 400.
4. Kontrollér at manuel rutetegning og GPX-eksport stadig virker.
Automatisk rute kan ikke verificeres uden en live routingserver og praktisk Android-test.
