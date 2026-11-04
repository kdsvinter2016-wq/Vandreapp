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

## Version 0.8.15 – 4. november 2026
**Problem:** Den overflødige mobiloverskrift “Kort og navigation” blev vist på startsiden. Genvejen “Åbn GPS og ruteplanlægning” førte til fanen Ruter, ikke GPS-betjeningen.

**Ændring:** Skjul overskriften på startsiden, men bevar separate overskrifter for Ruter og GPS. Lad genvejen åbne GPS-fanen og behold knappen “Planlæg rute på kortet” til at åbne Ruter og aktivere tegning. Ingen ændring i GPS-/GPX-/rutemotor.

**Test:** JavaScript-syntaks, mobil browser-simulering af fane- og knapnavigation. Fysisk Android-/GPS-regressionstest afventer.

## Version 0.8.16 – 4. november 2026
- **Problem:** På startsiden Kort blev to dynamisk oprettede statistikbokse, Gået og Tid, stadig vist efter 0.8.15.
- **AI-assisteret ændring:** Fjernet DOM-oprettelsen og de to MutationObserver-lyttere til de overflødige bokse samt deres CSS.
- **Afgrænsning:** Den eksisterende turstatistik i GPS-fanen og navigationspanelet berøres ikke.
- **Test:** JavaScript-syntaks, kontrol af fravær af mini-boksreferencer, ZIP-integritet. Praktisk Android-test afventes.


## Version 0.8.18 – 4. november 2026
**Brugerkrav:** Webudgaven skal have mobilappens Android-layout og ligne en app, der kører på en telefon, også ved visning i desktopbrowser.

**AI-ændring:** Genbrug eksisterende mobil-CSS på alle skærmstørrelser. På bred skærm tilføjes kun en CSS-baseret telefonramme (430 px) og bundmenuen placeres i rammen. På ægte mobil vises appen fortsat i fuld bredde. Den eksisterende femdelte navigation, Leaflet, GPS, GPX og turhistorik er ikke omskrevet. Statistikpanelet skjules på fanen Kort og vises under GPS.

**Test og begrænsninger:** Browserkontrol af desktop (1366×900) og mobil (393×852) udført; script-syntaks godkendt. Eksterne kortressourcer og fysisk GPS ikke verificeret. Ændringen er kosmetisk og giver ikke Android-APK-/baggrunds-GPS-funktionalitet.
