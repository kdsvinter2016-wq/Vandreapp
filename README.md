# VandreApp 0.8.18 – Android-inspireret weblayout

Webudgaven anvender nu det samme mobilorienterede layout uanset skærmstørrelse.

- På Android/mobil fylder VandreApp hele telefonens browserbredde med bundmenuen **Kort, Ruter, GPS, Mine ture, Mere**.
- På computer vises appen i en centreret telefonlignende ramme i Samsung Galaxy S25 FE-proportioner (ca. 6,7” / 1080×2340-forhold), så den fremstår som en mobilapp under eksempelvis onlineeksamen eller skærmdeling.
- GPS-registrering og statistik ligger under GPS og vises ikke på startsiden Kort.
- Menupunkter, GPX-import/eksport, kort, rutetegning, lokal lagring og backup anvender uændret JavaScript-motor fra version 0.8.16.
- Telefonrammen er udelukkende CSS: Det er fortsat en webapp, ikke en Android APK.

## Installation på GitHub Pages

Udpak alle otte filer til roden af GitHub-repositoriet og commit. Åbn `https://kdsvinter2016-wq.github.io/Vandreapp/?v=0818` efter publicering.

GPS kræver HTTPS, positionsadgang og test på telefonen. Kortet kræver adgang til Leaflet og OpenStreetMap.

## Test

Se `TESTPLAN.md`. Layout og menuskift er browserafprøvet ved 1366 × 900 og 393 × 852. Fysisk Android-GPS og kortindlæsning er ikke afprøvet i denne ændring.
