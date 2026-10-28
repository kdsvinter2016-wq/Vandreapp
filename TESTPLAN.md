# VandreApp 0.4 – testplan

Status: Android-tests **ikke udført endnu**. Udfyld resultat efter faktisk afprøvning.

1. Regression: Kort og GPS-position kan vises.
2. Regression: Start → gå → Stop; distance, varighed og blåt spor stemmer nogenlunde.
3. Regression: Eksporter tur som GPX, og importer igen. Ruten skal vises.
4. Pause: Start → gå → Pause; timer skal standse. Gå lidt → Genoptag → gå → Stop; ingen kunstig streg/afstand over pausen. GPX-eksport skal have separate segmenter.
5. Gem: Efter Stop → Gem tur lokalt; genindlæs siden → Mine gemte ture → Vis; ruten og distance vises igen.
6. Historik: Slet en tur og kontroller at den forsvinder. GPS-registrering må ikke erstattes af historik mens den er aktiv.
7. Kortfølgning: Slå Følg GPS til; nye GPS-positioner panorerer kortet. Slå fra, så kortet kan flyttes frit.
8. GPX: Importér GPX og kontrollér at rutedistance vises. Segmenter må ikke forbindes på tværs.
9. PWA: I Chrome på Android, vælg Installer app/Føj til startskærm og start via ikon. Kontrollér også at appen kan opdateres efter ny commit.
10. Fejltest: Ugyldig GPX, afvist GPS-tilladelse og manglende netadgang. Offline-kort forventes ikke at virke fuldt ud.

Før en vellykket afsluttende test må version 0.4 ikke kaldes Android-verificeret.
