let help = document.querySelector(".help");

help.addEventListener("click", function () {
    let quote = document.querySelector(".quoteOutput").textContent;
    window.open('http://google.com/search?q=' + quote);
})

let close = document.querySelector(".close");
close.addEventListener("click", () => window.close());