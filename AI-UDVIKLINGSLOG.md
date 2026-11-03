# AI-udviklingslog – VandreApp 0.8.8

**Problem:** Mobilgrænsefladen i 0.8.7 havde mange lodrette elementer, for meget scrolling og vanskelig adgang til ruteplanlægning og gemte ture.

**AI-opgave:** Bevar alle eksisterende rute-/GPS-funktioner og lav et mere ergonomisk mobil-layout.

**Valg:** Kun HTML/CSS og UI-navigation ændres. Ny firepunkts bundnavigation på mobil; Ruter viser planlægningskontroller og kort samtidig. Eksisterende element-ID'er og registreringsmotor bevares. Minidistance og -tid spejler de eksisterende statistikfelter, så ingen parallel turberegning opstår.

**Kontrol:** Syntaks, unikke ID'er, lokale målrettede UI-test og ZIP-integritet. Fysisk Android-test er nødvendig.

**Risici:** Mobilkortet skal få `invalidateSize` efter faneskift. Data opbevares lokalt, og browserens cache må ikke ryddes uden backup. Routing-API kan afvise visse via-punkter.
