# AI-udviklingslog – 0.8.13

**Problem:** Efter GPX-import zoomede VandreApp ind på ruten, men den næste GPS-position flyttede straks kortet til brugeren.

**Årsag i kildekoden:** `chooseNavigationSource()` kaldte altid `enableFollowForNavigation()`, som satte `followGps=true`. `setPosition()` panorerede derfor ved næste GPS-måling.

**Løsning:** GPX-import vælger navigation med `centerOnGps:false`. Kortfølgning slås fra ved import, mens GPS-observationer fortsat kan opdatere ruteafstand og GPS-nøjagtighed. Automatisk centrering kan aktiveres manuelt. Tegnede og gemte ruter bevarer tidligere standardadfærd.

**Verifikation:** JavaScript-syntaks og ZIP-integritet kontrolleres. Regressionstests og fysisk Android-test er endnu ikke gennemført ved levering.

**Refleksion:** Automatisk GPS-centrering er ikke altid hensigtsmæssig ved ruteplanlægning. GPS-overvågning og kortets bevægelse er to selvstændige brugerbehov.

## Ændring i 0.8.13

**Problem:** Genvejen *Planlæg rute på kortet* åbnede blot ruteplanlægningspanelet og krævede ekstra tryk på *Start tegning*.

**Løsning:** Genvejen udløser eksisterende `drawToggle`-knaplogik, hvis tegnetilstand endnu ikke er aktiv. Dermed genbruges GPS-follow-håndteringen og kortets klikfunktion.

**Verifikation:** JavaScript-syntaks og ZIP-integritet kontrolleres; Android-test er ikke gennemført.

## Version 0.8.14 – 4. november 2026

**Problem:** Eksport af tegnet rute brugte altid samme filnavn (`vandreapp-tegnet-rute.gpx`).

**Løsning:** AI-assisteret, afgrænset ændring af downloadnavnet til dato/tid med millisekunder plus kort tilfældig identifikator. GPX-XML og ruteberegning er uændret.

**Kontrol:** Syntaxkontrol og pakkekontrol; praktisk test på Android afventer.
