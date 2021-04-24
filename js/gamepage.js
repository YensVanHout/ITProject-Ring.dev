        const timerbar = document.querySelector("#timerforeground");
        const timertext = document.querySelector("#timertext");
        const scoretext = document.querySelector("#score");

        let time = 120;
        let score = 0;
        let outOf = 0;

        setInterval(() => {
            if (time > 0) {

                time--;

                let width = (100 / 120 * time).toFixed(1);

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
                time = 120;
                width = 100;
            }
        }, 1000)

        document.querySelector("#help").addEventListener("click", function () {
            window.open(('http://google.com/search?q=' + document.querySelector("#quoteOutput").textContent), "_blank", "toolbar=yes, scrollbars=yes, resizable=yes");
        });

        document.querySelector("#notes").addEventListener("click", function () {
            window.open("notes.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        })

        let picked1 = "";
        let picked2 = "";

        const characters = document.querySelectorAll(".character");

        for (let index = 0; index < characters.length; index++) {
            characters[index].addEventListener("click", () => {
                characters.forEach(e => {
                    e.classList.remove("pickedAnswer");
                });
                characters[index].classList.add("pickedAnswer");
                picked1 = characters[index].dataset.name;
            })
        }

        const movies = document.querySelectorAll(".movie");

        for (let index = 0; index < movies.length; index++) {
            movies[index].addEventListener("click", () => {
                movies.forEach(e => {
                    e.classList.remove("pickedAnswer");
                });
                movies[index].classList.add("pickedAnswer");
                picked2 = movies[index].dataset.movie;
            })
        }

        let correct_answer = "Gandalf+The Lord of the Rings: The Fellowship of the Ring";
        let combination;

        document.querySelector("#submit").addEventListener("click", () => {
            combination = picked1 + "+" + picked2;

            if (combination === correct_answer) {
                score++;
                outOf++;
                scoretext.innerHTML = score + "/" + outOf;
            } else {
                outOf++;
                scoretext.innerHTML = score + "/" + outOf;
            }

            combination = "";

            movies.forEach(e => {
                e.classList.remove("pickedAnswer");
            });

            characters.forEach(e => {
                e.classList.remove("pickedAnswer")
            });

        })