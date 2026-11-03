# AI-udviklingslog – VandreApp 0.8.4

## Problem

Brugeren ønskede, at den planlagte rutestreg forsvinder gradvist, mens man går. Kravet gælder tegnede ruter, importerede GPX-ruter og gemte ture i **Mine ture**.

## Løsning med AI-assistance

Der er tilføjet en navigationsfremdriftsfunktion, der:

- holder originale rutekoordinater adskilt fra den synlige, resterende rute,
- projicerer gyldige GPS-positioner på nærmeste rutelinjestykke,
- opdaterer kun fremdriften i fremadgående retning,
- afviser dårlig GPS-nøjagtighed, store spring og målinger langt fra ruten,
- håndterer adskilte GPX-/GPS-segmenter,
- giver **Vis hele ruten igen**,
- tilbyder **Følg rute** i turhistorikken uden at overskrive gemte data.

Teknologien er fortsat HTML, CSS, JavaScript og Leaflet, uden nye biblioteker.

## Kontrol

Node.js syntakskontrol og simulerede beregningstests bestået. Android-test er endnu ikke gennemført. Ingen påstand om, at funktionen er afprøvet på telefonen.

## Kritisk refleksion

GPS-position er usikker. Overlappende rutesegmenter og ruter med tætliggende parallelle stier kan give forkert fremdriftsestimat. Funktionen viser derfor en vejledende visuel status og ændrer aldrig originalruten. Feltmålinger er nødvendige før endelig godkendelse.
