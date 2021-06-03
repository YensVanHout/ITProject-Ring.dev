const express = require("express");
const app = express();
const ejs = require("ejs");
const randomQuote = require("random-lotr-movie-quote");

//Werkt niet wegens problemen met API, je moet 9 API Calls doen per vraag, 3x quote en per quote nog 2 voor character en movie string

//const frighten: string = "mcSsctI2rfkn1Ksi4ivI";
//const fetch = require("node-fetch");
//const baseurl: string = "https://the-one-api.dev/v2/";
//const quoteurl: string = "quote/";
//const charurl: string = "character/";
//const movieurl: string = "movie/";

//let response: any = {};

// const randomQuote = async () => {
//   let random: string = Math.floor(
//     Math.random() * (5408 - 3017) + 3017
//   ).toString();

//   let random_base: string = "2873547737497751740221154";

//   let random_id_dec: string = random_base + random;
//   let random_id_big: bigint = BigInt(random_id_dec);
//   let random_id_hex: string = random_id_big.toString(16);

//   console.log(random_id_hex);

//   let promise = fetch(baseurl + quoteurl + random_id_hex, {
//     method: "GET",
//     headers: {
//       Accept: "*/*",
//       Authorization: "Bearer " + frighten,
//     },
//   });

//   response = await JSON.stringify(response);
//   await console.log(response);
//   return await response;
// };

//Deze lijn zorgt er voor dat de server de files opvraagt via de public folder.
app.use(express.static("public"));

//Standaard port 3000
app.set("port", (process.env.PORT || 3000));

//zet de view engine naar ejs anders krijg je een view engine error.
app.set("view engine", "ejs");

//zorgt ervoor dat je de index pagina te zien krijgt indien je geen pad ingeeft (root).
app.get("/", (req: any, res: any) => {
  res.render("index");
});

app.get("/verificationlr", (req: any, res: any) => {
  res.render("verificationlr");
});

app.get("/game", (req: any, res: any) => {
  let ran1: any = {};
  let ran2: any = {};
  let ran3: any = {};

  ran1 = randomQuote();
  //await console.log(ran1);
  ran2 = randomQuote();
  //await console.log(ran2);
  ran3 = randomQuote();
  //await console.log(ran3);

  while (ran1.char == ran2.char) {
    ran2 = randomQuote();
  }

  while (ran1.char == ran3.char || ran2.char == ran3.char) {
    ran3 = randomQuote();
  }

  let objects: any[] = [ran1, ran2, ran3];
  let indexes: number[] = [0, 1, 2];

  function shuffle(randomizer) {
    for (let i = randomizer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizer[i], randomizer[j]] = [randomizer[j], randomizer[i]];
    }
  }

  shuffle(indexes);

  res.render("game", {
    quote: objects[0].dialog,
    karakter1: objects[indexes[0]].char,
    karakter2: objects[indexes[1]].char,
    karakter3: objects[indexes[2]].char,
    correct: objects[0].char + objects[0].movie,
    film: objects[0].movie,
  });
});

app.get("/notes", (req: any, res: any) => {
  res.render("notes");
});

app.get("/check", (req: any, res: any) => {
  res.render("check");
});

app.get("/end", (req: any, res: any) => {
  res.render("end");
});

//Als je een foutieve pagina opgeeft krijg je automatisch de 404-page te zien
app.use((req: any, res: any) => {
  res.status(404);
  res.render("404");
});

//Indien je een pagina probeert te bereiken waar je geen toegang tot hebt krijg je een 403-Error
app.use((req: any, res: any) => {
  res.status(403);
  res.render("403");
});

//Zorgt ervoor dat de server blijft luisteren naar jou requests.
app.listen(app.get("port"), () =>
  console.log("[server] http://localhost:" + app.get("port"))
);


//geeft feedback aan de console als de app gestopt word
process.on("SIGINT", async (req: any) => {
  try {
    console.log("Control-C received!");
    console.log("Stopping app ...");
  } catch (err) {
    console.error(err);
  } finally {
    process.exit(0);
  }
});

export {};
