const fetch = require('node-fetch');
let data : any = {};



let promise1 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000').then((response : any) => response.json());
let promise2 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001').then((response : any) => response.json());
let promise3 = fetch('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002').then((response : any) => response.json());


Promise.all([promise1,promise2,promise3]).then((response : any) => {
    console.log(response[0].drinks[0].strDrink);
    console.log(response[1].drinks[0].strDrink);
    console.log(response[2].drinks[0].strDrink);
});

//let promise4 = promise1.then((response : any) => response.json());

//promise4 = promise1.then((response:any) => response.json());
//promise4.then((json : any) => {
//    data = json;
//    console.log(data.drinks[0].strDrink);
//})

export{}