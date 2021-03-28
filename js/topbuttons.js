let help = document.querySelector(".help")

help.addEventListener("click", function () {
    let quote = document.querySelector(".quoteOutput").textContent
    window.open(('http://google.com/search?q=' + quote), "_blank", "toolbar=yes, scrollbars=yes, resizable=yes")
})

let close = document.querySelector(".close")
close.addEventListener("click", () => window.close())



let notes = document.querySelector(".notes")

notes.addEventListener("click", function () {
    window.open("/notes.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
})
