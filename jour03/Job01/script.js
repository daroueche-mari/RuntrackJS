let state = 0
let statehidder = 0
function switchtxt() {
    state++
    statehidder++
    //compteur pour le btn d'affichage du texte
    if (state == 1) {
        let start = document.getElementById("txt")
        start.style.display = "block"
    }
    if (state == 2) {
        let start = document.getElementById("txt")
        start.style.display = "none"
    }
    if (state == 2) {
        state = 0
    }

    //compteur pour l'affichage de la page html
    if (statehidder == 1) {
        body.style.display = "none"
    }
    if (statehidder == 1) {
        statehidder = 0
    }

    

}

let start = document.getElementById("txt")
start.style.display = "none"

let action = document.getElementById("mybtn")
action.addEventListener("click", switchtxt)

let myhidder = document.getElementById("hidder")
myhidder.addEventListener("click", switchtxt)