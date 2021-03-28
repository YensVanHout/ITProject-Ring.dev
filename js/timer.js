        let timerbar = document.querySelector(".timerforeground")
        let timertext = document.querySelector(".timertext")
        let scoretext = document.querySelector(".score")

        let time = 121

        let score = 0
        let outOf = 0

        setInterval(() => {
            if (time > 1) {

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
                time = 121
                width = 100

                //dummy to check score changes
                let randomgen = Math.random() < 0.5 ? 0 : 1

                score = score + randomgen
                outOf++
                
                scoretext.innerHTML = score + "/" + outOf

            }
        }, 1000)