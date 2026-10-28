# AI-udviklingslog – 0.7.2

**Ønske:** Automatisk ruteføring langs eksisterende stier og veje før mobilinterfacedesign 0.8.

**AI-arbejde:** Inspicerede 0.7.1-koden, identificerede tegnepunkter, navigationssegmenter og GPX-eksport. Tilføjede særskilt beregnet rutegeometri, request-fejlhåndtering og annullering af forældede svar ved punktændringer.

**Valg:** Valhalla pedestrian routing fra offentlig FOSSGIS-demo. Brugerinitieret POST med `X-Client-Id`; behold manuel rute som fallback. Beregnet geometri anvendes til både navigation og GPX-eksport.

**Usikkerheder:** Demoens tilgængelighed, browser-CORS og rutekvalitet er ikke verificeret på Android. Ingen påstand om bestået mobiltest. Valhalla-demo kan ændre vilkår eller rate limits.

**Test:** JavaScript-syntakskontrol og ZIP-integritetskontrol lokalt. Reelle online routingtests og regressionstest afventer Android.
