# VandreApp 0.8.6 – Testplan

1. Upload ZIP-filerne i rodmappen på GitHub Pages. Kontrollér `Prototype 0.8.6`.
2. Vælg **Mine ture → Følg rute**. Kontrollér at Rutelængde, Tilbage og Gennemført vises **over** kortet med 0 % ved start.
3. Vælg **Centrér GPS**. Kortet skal centrere om din aktuelle position. Bevæger du dig med Følg GPS: Til, skal kortet følge positionen.
4. Vælg **Planlæg rute**, **Start tegning**, sæt punkter, afslut tegning, vælg **Brug ruten til navigation**. Kontrollér at Følg GPS står Til igen.
5. Gå langs en planlagt rute: rutestregen skal gradvist afkortes, Tilbage falde, procent stige, og det blå GPS-spor bevares.
6. Gentag med importeret GPX og gemt tur. Kontrollér at originalruten bevares.
7. Tryk **Vis hele ruten igen**; topstatistik skal nulstilles til 0 % og fuld længde.
8. Regression: GPS start/pause/genoptag/stop, GPX import/eksport, turhistorik, Wake Lock, backup.

**Status:** syntaks-/strukturkontrol kan udføres automatisk. Fysiske Android-tests er ikke udført her.
