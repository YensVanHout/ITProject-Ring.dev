        const timerbar = document.querySelector("#timerforeground")
        const timertext = document.querySelector("#timertext")
        const scoretext = document.querySelector("#score")

        let time = 120
        let score = 0
        let outOf = 0

        setInterval(() => {
            if (time > 0) {

                time--

                let width = (100 / 120 * time).toFixed(1)

                let minutes = Math.floor(time / 60)
                let seconds = time - minutes * 60

                if (seconds < 10) {
                    seconds = "0" + seconds
                }

                let remainder = minutes + ":" + seconds

                timertext.innerHTML = remainder
                timerbar.style.width = width + "%"

            } else {
                //reset to default values
                time = 120
                width = 100
            }
        }, 1000)

        document.querySelector("#help").addEventListener("click", function () {
            let quote = document.querySelector("#quoteOutput").textContent
            window.open(('http://google.com/search?q=' + quote), "_blank", "toolbar=yes, scrollbars=yes, resizable=yes")
        })

        document.querySelector("#close").addEventListener("click", () => window.close())

        document.querySelector("#notes").addEventListener("click", function () {
            window.open("/notes.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        })

        let combination = "";

        const characters = document.querySelectorAll(".character")

        for (let index = 0; index < characters.length; index++) {
            characters[index].addEventListener("click", () => {
                combination += characters[index].dataset.name
                console.log(combination)
            })
        }

        const movies = document.querySelectorAll(".movie")

        for (let index = 0; index < movies.length; index++) {
            movies[index].addEventListener("click", () => {
                combination += "+" + movies[index].dataset.movie
                console.log(combination)
            })
        }

        let correct_answer = "Gandalf+The Lord of the Rings: The Fellowship of the Ring"

        document.querySelector("#submit").addEventListener("click", () => {
            if (combination === correct_answer) {
                score++
                outOf++
                scoretext.innerHTML = score + "/" + outOf
            } else {
                outOf++
                scoretext.innerHTML = score + "/" + outOf
            }
            combination = ""
        })