# AI-udviklingslog – VandreApp 0.4

**Opgave:** Udvid fungerende MVP 0.3 med seks prioriterede funktioner under hensyntagen til AI-eksamen.

**Prompt/krav:** "Udvikl VandreApp version 0.4 med de seks anbefalede funktioner."

**AI-assisterede ændringer:** Lokal browserlagring og genåbning/sletning af ture; pause og genoptagelse af GPS-watch med separat tracksegment; GPS-kortfølgning; GPX-rutedistance; manifest, ikoner og service worker til PWA.

**Tekniske valg:** Ren HTML/CSS/JavaScript + Leaflet fastholdes; localStorage for hurtig implementering uden server; ingen ændringer i kortleverandør eller GPS-API; service worker cacher kun appens egne filer.

**Kritiske forhold:** Lokal lagring er ikke sikker backup; Android kan stoppe GPS i baggrunden; kort og Leaflet er ikke garanteret offline; GPS-støj påvirker målinger; nye funktioner skal regressionsprøves på telefonen.

**Kvalitetssikring:** JavaScript-syntakskontrol med Node.js samt ZIP- og manifestkontrol. Android-funktionstest af version 0.4 afventer brugerens målinger.

**Eksamensvinkel:** Demonstrér forløbet krav → AI-kode → tekniske valg → test → fejlrettelser, og skeln tydeligt mellem automatiseret kontrol og fysisk test.
