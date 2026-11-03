# AI-udviklingslog – 0.8.12

**Problem:** Efter GPX-import zoomede VandreApp ind på ruten, men den næste GPS-position flyttede straks kortet til brugeren.

**Årsag i kildekoden:** `chooseNavigationSource()` kaldte altid `enableFollowForNavigation()`, som satte `followGps=true`. `setPosition()` panorerede derfor ved næste GPS-måling.

**Løsning:** GPX-import vælger navigation med `centerOnGps:false`. Kortfølgning slås fra ved import, mens GPS-observationer fortsat kan opdatere ruteafstand og GPS-nøjagtighed. Automatisk centrering kan aktiveres manuelt. Tegnede og gemte ruter bevarer tidligere standardadfærd.

**Verifikation:** JavaScript-syntaks og ZIP-integritet kontrolleres. Regressionstests og fysisk Android-test er endnu ikke gennemført ved levering.

**Refleksion:** Automatisk GPS-centrering er ikke altid hensigtsmæssig ved ruteplanlægning. GPS-overvågning og kortets bevægelse er to selvstændige brugerbehov.
