const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');
const randomQuote = require('random-lotr-movie-quote');

const frighten : string = 'aXaL57Oa7s0-QqAEoz1C';

//Deze lijn zorgt er voor dat de server de files opvraagt via de public folder.
app.use(express.static("public"));

//Standaard port 3000
app.set('port', 3000);

//zet de view engine naar ejs anders krijg je een view engine error.
app.set('view engine', 'ejs');

//zorgt ervoor dat je de index pagina te zien krijgt indien je geen pad ingeeft (root).
app.get('/',(req:any,res:any)=>{
    res.render('index');
});

app.get('/verificationlr',(req:any,res:any)=>{
    res.render('verificationlr');
})

app.get('/game',(req:any,res:any)=>{
    let ran1 : any = {} ;
    ran1 = randomQuote();
    console.log(ran1);
    let ran2 : any = {};
    ran2 = randomQuote();
    let ran3 : any = {};
    ran3 = randomQuote();
    let objects : any [] = [ran1,ran2,ran3];
    let indexes : number[] = [0,1,2];
    
    function shuffle(randomizer) {
        for (let i = randomizer.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [randomizer[i], randomizer[j]] = [randomizer[j], randomizer[i]];
        }
      }
        shuffle(indexes);
        res.render('game',{
            quote   : objects[0].dialog,
            opties1 : objects[indexes[0]].movie,
            opties2 : objects[indexes[0]].char, 
            opties3 : objects[indexes[1]].movie, 
            opties4 : objects[indexes[1]].char,
            opties5 : objects[indexes[2]].movie,
            opties6 : objects[indexes[2]].char
        });
})
   
app.get('/notes',(req:any,res:any)=>{
    res.render('notes');
});

app.get('/check', (req: any, res:any) => {
    res.render('check');
});

app.get('/end', (req: any, res:any) =>{
    res.render('end');
})

//Als je een foutieve pagina opgeeft krijg je automatisch de 404-page te zien
app.use((req:any, res:any) => {
    res.status(404);
    res.render('404');
    }
);

//Indien je een pagina probeert te bereiken waar je geen toegang tot hebt krijg je een 403-Error
app.use((req:any, res:any) => {
    res.status(403);
    res.render('403');
    }
);

//Zorgt ervoor dat de server blijft luisteren naar jou requests.
app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));

    export{}