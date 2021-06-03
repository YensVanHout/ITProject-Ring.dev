# ITProject-Ring.dev

benodigde packages (via npm install):
Express;
EJS;
node-fetch;
random-lotr-movie-quote;

```
Gelieve volgende folderstructuur te respecteren

ITProject-Ring.dev/
├─ public/
│  ├─ css/
│  │  ├─ style.css
│  ├─ img/
│  │  ├─ afbeeldingen
│  │  ├─ scripts
│  ├─ js/
│  │  ├─ scripts
├─ views/
│  ├─ pagina's.ejs
app.ts

```

## Documentatie:

Dit is een project gemaakt voor het vak IT-Project.
Gemaakt door: Janco Sambaer, Yens Van Hout, Joey De Greef, Jens Broddin.

#### Index pagina:

Dit is de startpagina waar alle opties staan.
Enkel de optie Lord of the Rings (LOTR) gaat door naar de verificatiepagina.
De andere 3 gaan naar een 404 Page.

#### Verificatiepagina:

Na dat je geklikt hebt op de knop Lord of the Rings (LOTR) kom je hierop uit,
Hier moet je jou gegevens ingeven en dan zal een script nakijken of je wel degelijk toegang hebt tot deze game.
Als je toegang hebt tot de game ga je verder naar de gamepagina, zoniet vraagt de pagina om geldige informatie in te vullen.

Er zijn een aantal voorbeeld bookingnummers aangemaakt: 12638320" || "50394767"|| "90406893" || "61198716

#### Gamepagina:

Hier start de applicatie.
Als je op deze pagina komt krijg je een Quiz over Lord of The Rings waar je de quote bij de juiste film en karakter moet plaatsen.
Je krijgt hiervoor 2 minuten de tijd per vraag en je kan zien hoelang je nog hebt aan de hand van de timer.

Als de timer af loopt wordt je naar de check pagina gestuurd en wordt het als een fout antwoord gerekend.

Bovenaan staat de quote met daaronder de timer.
Daar onder staan eerst de karakters en daaronder de films.
Ook vind je hier een submit knop om je keuze te bevestigen.

Er wordt een random quote opgeroepen met behulp van een extra node package genaamd "random-lotr-movie-quote"
Er worden ook drie random karakters opgeroepen waarvan er een juist is.
De films staan in de chronologische volgorde.

Als er op submit wordt geklikt wordt er via de gamepage.js gecontroleerd of deze juist is
dit gebeurt door de ingestuurde knop-values om te zetten naar een string en deze te vergelijken met het juiste antwoord (ook een string)

bij het submitten worden er ook enkele cookies aangemaakt namelijk: score: met de updatted score, Film met de naam van de film en bool met een boolean of het antwoord juist of fout is.

Bovenaan heb je 2 knoppen: "Help" en "Notes".

Help:
Deze knop zoekt de huidige quote op met behulp van google, deze word automatisch ingevuld in de searchbar.

Notes:
Deze knop geeft je een pop-up pagina waar je notities kunt maken.
Hier heb je de keuze om je notities op te slaan (Save), te legen (Clear) of te downloaden (Download) of om je vorige notes te laden indien je deze hebt opgeslagen (Load Notes).

#### Checkpagina:

als het antwoord dan gesubmitted is wordt men door gestuurd naar de check pagina.

Hier wordt meegedeeld of het antwoord juist of fout is (afhankelijk van de cookie bool) en wordt er gevraagd of men nog een vraag wilt of er moet worden afgerond.
Ook de score wordt hier getoond dit door de cookie score uit te lezen
verder wordt ook de cover van de film waar de quote uit komt getoond dit door de cookie film uit te lezen en de correspenderende afbeelding in te laden.

#### Endpagina:

Als men dan kiest om het spel af te ronden wordt men naar de end pagina gestuurd.
Hier wordt text getoond dat het spel is afgerond en krijgt men ook nog de uiteindelijke score op het scherm getoond.
achter de schermen worden ook de cookies gecleared op deze pagina.
