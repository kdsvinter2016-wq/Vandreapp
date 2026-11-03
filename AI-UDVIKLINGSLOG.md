# AI-udviklingslog 0.8.7

**Problem:** Panelet "GPS og ruteplanlægning" fylder unødigt, når brugeren følger en planlagt rute.

**Løsning:** AI-assisteret ændring af eksisterende HTML, CSS og JavaScript: et sammenklappeligt panel, som automatisk foldes sammen ved valg af navigationskilde (tegnet/importeret/gemt tur), og som kan åbnes manuelt for GPS-kontrol. Ingen omskrivning af GPS-/rutealgoritmer.

**Kontrol:** JavaScript-syntaks og ZIP-integritet kontrolleres automatisk. Praktisk Android-test udestår.

**Begrænsning:** Betjeningspanelet bliver automatisk sammenklappet ved nyt valg af navigationsrute; brugeren kan altid åbne panelet igen.
