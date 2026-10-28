# AI-udviklingslog – VandreApp 0.3

**Formål:** Udvide fungerende version 0.2 med GPX-import uden at ændre GPS-registrering og GPX-eksport.

**Prompt:** “tilføj GPX-import i VandreApp version 0.3.”

**AI-bidrag:** Tilføjet filvælger, XML-fortolkning via DOMParser, støtte til GPX tracks og routes, lilla kortlag, fjern-knap samt validering af koordinater og filstørrelse. Flere spor-segmenter tegnes separat. En eksisterende importeret rute bevares, hvis en ny import fejler.

**Teknologivalg:** Ren JavaScript, Leaflet og browserens eksisterende API'er. Ingen nye biblioteker.

**Afgrænsning:** Ingen navigation, offlinekort, waypoint-visning eller automatisk lagring.

**Verifikation:** Syntaxcheck i Node.js; telefonens browser og faktiske GPX-import kræver manuel efterprøvning. Testresultater må først registreres som bestået efter faktisk test.

**Kritisk refleksion:** AI kan hurtigt tilføje en funktion, men XML-varianter, dårlig GPX-data, GPS-præcision og mobilbrowser-adfærd bør kontrolleres med rigtige filer og brugerforsøg.
