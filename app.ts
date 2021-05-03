const express = require('express');
const app = express();
const ejs = require('ejs');
const fetch = require('node-fetch');

const baseurl : string = "https://the-one-api.dev/v2";

const quoteurl : string = "/quote/";
const characterurl : string = "/character/";
const movieurl : string = "/movie/";

const frighten : string = 'aXaL57Oa7s0-QqAEoz1C';

let quote : any = {};


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
    
    //Genereer een geldig ID voor de fetch
    //TODO: SIMPLIFY HEX GEN
    let random : string = (Math.floor((Math.random() * (5408 - 3017)) + 3017)).toString();
    let random_base : string = '2873547737497751740221154';
    
    let random_id_dec : string = (random_base + random);
    let random_id_big : bigint = BigInt(random_id_dec);
    let random_id_hex : string = random_id_big.toString(16);
    
    //console.log(random_id_dec);
    //console.log(random_id_big);
    //console.log(random_id_hex);
    //console.log("--------------------------------");

    //TODO: FIX THIS MESS

    let promise1 = fetch((baseurl + quoteurl + random_id_hex),
    {
        method: 'GET',
        headers: {
            'Accept': '*/*',
            'Authorization': 'Bearer ' + frighten
        }}).then((response : any) => {
        quote = response.json();
    }).then((response : any) =>{
        console.log(quote);
    });


    res.render('game');

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