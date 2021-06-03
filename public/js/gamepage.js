const timerbar = document.querySelector("#timerforeground");
const timertext = document.querySelector("#timertext");
const scoretext = document.querySelector("#score");

//---------------------- TIMER -------------------------------

let time = 120;
let score = 0;
let outOf = 0;

setInterval(() => {
  if (time > 0) {
    time--;

    let width = ((100 / 120) * time).toFixed(1);

    let minutes = Math.floor(time / 60);
    let seconds = time - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let remainder = minutes + ":" + seconds;

    timertext.innerHTML = remainder;
    timerbar.style.width = width + "%";
  } else {
    //reset to default values
    outOf++;
    cookievalue = (score + "/" + outOf).toString() + ";";
    document.cookie = "score=" + cookievalue + "; max-age=2592000; Secure;";
    document.cookie = "film=" + movie + "; max-age=2592000; Secure;";
    document.cookie = "bool=false; max-age=2592000; Secure";
    window.location.replace("/check");
  }
}, 1000);

//------------------- COOKIE LEZEN -----------------------------------

var allcookies = document.cookie;

cookiearray = allcookies.split(";");

for (var i = 0; i < cookiearray.length; i++) {
  key = cookiearray[i].split("=")[0];
  value = cookiearray[i].split("=")[1];

  if (key.trim() == "score") {
    scoreCookie = value.split("/");
    score = scoreCookie[0];
    outOf = scoreCookie[1];
    scoretext.innerHTML = value;
  }
}

document.querySelector("#help").addEventListener("click", function () {
  window.open(
    "http://google.com/search?q=" +
      document.querySelector("#quoteOutput").textContent,
    "_blank",
    "toolbar=yes, scrollbars=yes, resizable=yes"
  );
});

document.querySelector("#notes").addEventListener("click", function () {
  window.open(
    "notes",
    "_blank",
    "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=500"
  );
});

let picked1 = "";
let picked2 = "";

const characters = document.querySelectorAll(".character");

for (let index = 0; index < characters.length; index++) {
  characters[index].addEventListener("click", () => {
    characters.forEach((e) => {
      e.classList.remove("pickedAnswer");
    });
    characters[index].classList.add("pickedAnswer");
    picked1 = characters[index].dataset.name;
  });
}

const movies = document.querySelectorAll(".movie");

for (let index = 0; index < movies.length; index++) {
  movies[index].addEventListener("click", () => {
    movies.forEach((e) => {
      e.classList.remove("pickedAnswer");
    });
    movies[index].classList.add("pickedAnswer");
    picked2 = movies[index].dataset.movie;
  });
}

let combination;
let boolJuistFout;

document.querySelector("#submit").addEventListener("click", () => {
  combination = picked1 + picked2;

  combination = combination.trim();
  correct_answer = correct_answer.trim();
  // console.log(combination);
  // console.log(correct_answer);

  var n = combination.localeCompare(correct_answer); // geeft dit 0 terug dan zijn de stirngs gelijk aan elkaar

  // console.log(n);
  if (n == 0) {
    score++;
    outOf++;
    scoretext.innerHTML = score + "/" + outOf;
    boolJuistFout = true;
    //console.log("juist");
  } else {
    outOf++;
    scoretext.innerHTML = score + "/" + outOf;
    boolJuistFout = false;
    //console.log("fout");
  }

  cookievalue = (score + "/" + outOf).toString() + ";";
  document.cookie = "score=" + cookievalue + "; max-age=2592000; Secure;";
  document.cookie = "bool=" + boolJuistFout + "; max-age=2592000; Secure;";
  document.cookie = "film=" + movie + "; max-age=2592000; Secure;";

  window.location.replace("/check"); // redirect naar juist of fout
});
