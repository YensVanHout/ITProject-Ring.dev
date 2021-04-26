let urlquotep1 = "https://the-one-api.dev/v2/quote?page=1";
let urlquotep2 = "https://the-one-api.dev/v2/quote?page=2";
let urlquotep3 = "https://the-one-api.dev/v2/quote?page=3";
let quoteresponse;

let urlcharacter = "https://the-one-api.dev/v2/character";
let characterresponse;

let urlmovie = "https://the-one-api.dev/v2/movie"
let movieresponse;

//Alle API pulls

   //Quote pull

   //page 1
   
   let xhrq = new XMLHttpRequest();
   xhrq.open("GET", urlquotep1);
   
   xhrq.setRequestHeader("Accept", "application/json");
   xhrq.setRequestHeader("Authorization", "Bearer aXaL57Oa7s0-QqAEoz1C");
   
   xhrq.onreadystatechange = function () {
       if (xhrq.readyState === 4) {
           //console.log(xhrq.status);
           quoteresponse = JSON.parse(xhrq.responseText);
           //console.log(quoteresponse);
       }
   };
   
   xhrq.send();
   
   xhrd.send();

   //character pull
   let xhrc = new XMLHttpRequest();

   xhrc.open("GET", urlcharacter);

   xhrc.setRequestHeader("Accept", "application/json");
   xhrc.setRequestHeader("Authorization", "Bearer aXaL57Oa7s0-QqAEoz1C");

   xhrc.onreadystatechange = function () {
       if (xhrc.readyState === 4) {
           //console.log(xhrc.status);
           characterresponse = JSON.parse(xhrc.responseText);
           //console.log(characterresponse);
       }
   };

   xhrc.send();

   //movies pull

   let xhrm = new XMLHttpRequest();

   xhrm.open("GET", urlmovie);

   xhrm.setRequestHeader("Accept", "application/json");
   xhrm.setRequestHeader("Authorization", "Bearer aXaL57Oa7s0-QqAEoz1C");

   xhrm.onreadystatechange = function () {
       if (xhrm.readyState === 4) {
           //console.log(xhrm.status);
           movieresponse = JSON.parse(xhrm.responseText);
           //console.log(movieresponse);
       }
   };

   xhrm.send();

//data zit in movieresponse, characterresponse en quoteresponse