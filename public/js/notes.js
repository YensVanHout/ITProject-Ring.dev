const save = document.querySelector("#save");
const clear = document.querySelector("#clear");
const download = document.querySelector("#download");
const load = document.querySelector("#load");
const textarea = document.querySelector("#area");

clear.addEventListener("click", () => {
  textarea.value = "";
  location.reload();
});

save.addEventListener("click", () => {
  if (textarea.value == "") {
    alert("Note cannot be empty.");
    return;
  }
  cookievalue = escape(textarea.value) + ";";
  document.cookie = "note=" + cookievalue + " max-age=2592000; Secure";
});

load.addEventListener("click", () => {
  var allcookies = document.cookie;
  // Get all the cookies pairs in an array
  cookiearray = allcookies.split(";");

  // Now take key value pair out of this array
  for (var i = 0; i < cookiearray.length; i++) {
    key = cookiearray[i].split("=")[0];
    value = cookiearray[i].split("=")[1];

    if (key == " note") {
      if (value != undefined) {
        textarea.value = decodeURI(value);
      } else {
        text.value = "";
      }
    }
  }
});

download.addEventListener("click", () => {
  var textToSave = textarea.value;
  var hiddenElement = document.createElement("a");

  hiddenElement.href = "data:attachment/text," + encodeURI(textToSave);
  hiddenElement.target = "_blank";
  hiddenElement.download = "notes.txt";
  hiddenElement.click();
});