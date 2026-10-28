# VandreApp 0.7 – Turanalyse og backup

Videreudviklet fra 0.6.1. Appen er fortsat en mobilvenlig webapp til GitHub Pages og kræver HTTPS for GPS.

## Nyt
- Højdeprofil og stigning/fald for importerede GPX-ruter med gyldige `<ele>`-værdier.
- Højdeprofil og stigning/fald for registrerede eller åbnede gemte ture med GPS-højder.
- Turhistorik med opsummering af antal ture og samlet distance samt mulighed for at omdøbe ture.
- Download alle gemte ture i én JSON-backup og gendan fra samme format. Dubletter med samme tur-id springes over.

## Begrænsninger
Højder fra GPS er ofte upræcise. Udsving på under 3 meter ignoreres. Statistik er vejledende, ikke en garanti for reel højdestigning. Hvis en fil ikke indeholder højdedata, vises ingen profil. Backup gælder gemte ture, ikke en aktiv turkladde. Opbevar JSON-backuppen sikkert: den indeholder dine GPS-positioner.

## Publicering
Udpak ZIP og upload filerne til rodmappen i GitHub-repositoryet. Samme GitHub Pages-adresse som hidtil. Den planlagte 0.6-ruteafvigelsesadvarsel mangler endnu Android-funktionstest.
