let boolJuistFout;
//------------------------------------------------------------
var allcookies = document.cookie;

// Get all the cookies pairs in an array
cookiearray = allcookies.split(";");

// Now take key value pair out of this array
for (var i = 0; i < cookiearray.length; i++) {
  key = cookiearray[i].split("=")[0];
  value = cookiearray[i].split("=")[1];

  if (value.trim() == "false") {
    boolJuistFout = false;
  } else if (value == "true") {
    boolJuistFout = true;
  }

  if (key.trim() == "score") {
    document.querySelector("#score").innerHTML = value;
  }

  if (key.trim() == "film") {
    console.log();
    document.querySelector(".cover").src = "img/covers/" + value + ".jpg";
  }
}

if (boolJuistFout) {
  document.getElementById("JuistFout").innerHTML = "Juist!";
} else {
  document.getElementById("JuistFout").innerHTML = "Jammer, fout.";
}
