# AI-udviklingslog – VandreApp 0.8.10

**Problem:** Brugeren meldte, at menupunktet Ruter var forsvundet fra 0.8.9.

**Årsag:** I 0.8.9 var Ruter omdøbt og kombineret med GPS i én fane, “GPS & ruter”. Menustrukturen svarede ikke til brugerens forventning.

**Løsning:** Genskab Ruter og opret GPS som selvstændigt menupunkt. Genbrug samme Leaflet-kort og eksisterende kode, men tilpas fanernes visning. Bevar Mine ture, Mere og Kort.

**Test:** Kodesyntaks, fanereferencer, filstruktur og ZIP. Fysisk Android-test afventer.

**Refleksion:** En UI-ændring kan utilsigtet fjerne en central adgang til eksisterende funktioner, selv om funktionerne stadig findes i kildekoden. Regressionstest skal omfatte navigation og synlighed, ikke blot JavaScript-syntaks.
