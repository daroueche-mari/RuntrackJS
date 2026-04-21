let state = 0

function addOne() {
    state++
    if (state == 1) {
        let ajout = document.getElementById("compteur")
        ajout.innerHTML = "je"
    }
    if (state == 2) {
        let ajout = document.getElementById("compteur")
        ajout.innerHTML = "decouvre"
    }
    if (state == 3) {
        let ajout = document.getElementById("compteur")
        ajout.innerHTML = "javascript"
    }
    if (state == 4) {
        let ajout = document.getElementById("compteur")
        ajout.innerHTML = "c'est"
    }
    if (state == 5) {
        let ajout = document.getElementById("compteur")
        ajout.innerHTML = "cool"
    }
}

let test = document.getElementById("button")
test.addEventListener("click", addOne)