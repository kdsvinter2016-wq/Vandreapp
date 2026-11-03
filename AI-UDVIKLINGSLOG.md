# AI-udviklingslog – 0.8.9

**Problem:** Navigationsbanner og rutelag blev ikke altid nulstillet efter fjernelse af en rute. GPS og ruteplanlægning optog plads på Kort-fanen.

**Løsning:** Fælles `stopRouteNavigation` til oprydning i alle navigationskilder (tegnet, importeret, gemt); tydelig knap i navigationsbanner; omorganisering af menupunkt til **GPS & ruter** med betjening og kort sammen.

**Valg:** GPS-spor, turhistorik og lagrede data bevares; kun aktiv navigationsrute og dens indikatorer nulstilles. Ingen nye biblioteker.

**Test:** Automatiseret JavaScript-syntaks og strukturelle kontroller, efterfulgt af nødvendig test på Android.

**AI-begrænsning:** Syntaks og simuleret browseradfærd kan ikke erstatte en fysisk vandretest med GPS.
