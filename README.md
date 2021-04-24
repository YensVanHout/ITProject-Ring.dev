# ITProject-Ring.dev

```
Gelieve volgende folderstructuur te respecteren

├── css
│   └── style.css
│   └── Eigen CSS Files maken
|── img
│   ├── globale images voor meerdere pagina's
│   └── folders maken voor specifieke pagina's
|── js
│   └── scripts
|── index.html
└── HTML Paginas hier zetten
```

## Documentatie:

Dit is een project gemaakt voor het vak IT-Project.
Gemaakt door: Janco Sambaer, Yens Van Hout, Joey De Greef, Jens Broddin.

Voorlopig heeft iedereen zijn eigen CSS file om styling conflicten te vermijden.

#### Index pagina:

Dit is de startpagina waar alle opties staan.
Enkel de optie Lord of the Rings (LOTR) gaat door naar de verificatiepagina.
De andere 3 gaan naar een 404 Page.

#### Verificatiepagina:

Na dat je geklikt hebt op de knop Lord of the Rings (LOTR) kom je hierop uit,
Hier moet je jou gegevens ingeven en dan zal een script nakijken of je wel degelijk toegang hebt tot deze game.
Als je toegang hebt tot de game ga je verder naar de gamepagina, zoniet vraagt de pagina om geldige informatie in te vullen.

Het boekingsnummer staat momenteel hardcoded op: "ABC123".

#### Gamepagina:

Hier start de applicatie.
Als je op deze pagina komt krijg je een Quiz over Lord of The Rings waar je de quote bij de juiste film en karakter moet plaatsen.
Je krijgt hiervoor 2 minuten de tijd per vraag en je kan zien hoelang je nog hebt aan de hand van de timer.

Momenteel gebeurt er nog niets als de timer afloopt, dit moet nog geprogrammeert worden.

Bovenaan staat de quote met daaronder de timer.
Daar onder staan eerst de karakters en daaronder de films.
Ook vind je hier een submit knop om je keuze te bevestigen.

Bovenaan heb je 2 knoppen: "Help" en "Notes".

Help:
Deze knop zoekt de huidige quote op met behulp van google, deze word automatisch ingevuld in de searchbar.

Notes:
Deze knop geeft je een pop-up pagina waar je notities kunt maken.
Hier heb je de keuze om je notities op te slaan (Save), te legen (Clear) of te downloaden (Download) of om je vorige notes te laden indien je deze hebt opgeslagen (Load Notes).

Momenteel staat de quote en antwoorden hardcoded:

Antwoorden zijn `Gandalf & The Lord of the Rings: The Fellowship of the Ring`

Als je jou antwoorden gekozen hebt en hebt bevestigd dan krijg je een nieuw scherm te zien dat af hangt of jou antwoorden juist zijn. (Deze is nog momenteel nog niet klaar.)

Onderaan krijg je ook je huidige score te zien.
