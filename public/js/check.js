let boolJuistFout;
window.addEventListener("load", () => {
    var allcookies = document.cookie;
    console.log("All Cookies : " + allcookies);
 
    // Get all the cookies pairs in an array
    cookiearray = allcookies.split(';');
 
    // Now take key value pair out of this array
    for (var i = 0; i < cookiearray.length; i++) {
       note = cookiearray[i].split('=')[0];
       value = cookiearray[i].split('=')[1];
       console.log("Key is : " + note + " and Value is : " + value);
       console.log(value)
        if (value=="false") {
            boolJuistFout = false
        }
        if (value=="true") {
            boolJuistFout = true
        }

        console.log(boolJuistFout)
    }
})






 if (boolJuistFout==true) {
     document.getElementById("JuistFout").innerHTML = "Juist!";
 }
 else{
     document.getElementById("JuistFout").innerHTML = "Jammer, fout.";
 }