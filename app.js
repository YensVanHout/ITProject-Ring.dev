"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require("express");
var app = express();
var ejs = require("ejs");
var randomQuote = require("random-lotr-movie-quote");
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
app.set("port", 3000);
//zet de view engine naar ejs anders krijg je een view engine error.
app.set("view engine", "ejs");
//zorgt ervoor dat je de index pagina te zien krijgt indien je geen pad ingeeft (root).
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/verificationlr", function (req, res) {
    res.render("verificationlr");
});
app.get("/game", function (req, res) {
    var ran1 = {};
    var ran2 = {};
    var ran3 = {};
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
    var objects = [ran1, ran2, ran3];
    var indexes = [0, 1, 2];
    function shuffle(randomizer) {
        var _a;
        for (var i = randomizer.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [randomizer[j], randomizer[i]], randomizer[i] = _a[0], randomizer[j] = _a[1];
        }
    }
    shuffle(indexes);
    res.render("game", {
        quote: objects[0].dialog,
        karakter1: objects[indexes[0]].char,
        karakter2: objects[indexes[1]].char,
        karakter3: objects[indexes[2]].char,
        correct: objects[0].char + objects[0].movie,
        film: objects[0].movie
    });
});
app.get("/notes", function (req, res) {
    res.render("notes");
});
app.get("/check", function (req, res) {
    res.render("check");
});
app.get("/end", function (req, res) {
    res.render("end");
});
//Als je een foutieve pagina opgeeft krijg je automatisch de 404-page te zien
app.use(function (req, res) {
    res.status(404);
    res.render("404");
});
//Indien je een pagina probeert te bereiken waar je geen toegang tot hebt krijg je een 403-Error
app.use(function (req, res) {
    res.status(403);
    res.render("403");
});
//Zorgt ervoor dat de server blijft luisteren naar jou requests.
app.listen(app.get("port"), function () {
    return console.log("[server] http://localhost:" + app.get("port"));
});
//geeft feedback aan de console als de app gestopt word
process.on("SIGINT", function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        try {
            console.log("Control-C received!");
            console.log("Stopping app ...");
        }
        catch (err) {
            console.error(err);
        }
        finally {
            process.exit(0);
        }
        return [2 /*return*/];
    });
}); });
