let state = 0
function sorter() {
    state++
    if(state == 1) {
        let showWin = document.getElementById("win")
        let showLoose = document.getElementById("loose")
        let assemble = document.getElementById("box")
        assemble.style.display = "block"
        showLoose.style.display = "block"
        showWin.style.display = "none"
        showLoose.style.color = "red"
        
    }
    if(state == 2) {
        let showLoose = document.getElementById("loose")
        let showWin = document.getElementById("win")
        let assemble = document.getElementById("box")
        assemble.style.display = "flex"
        showWin.style.display = "block"
        showLoose.style.display = "none"
        showWin.style.color = "green"
    }

     if(state == 2) {
        state = 0
    }
}
   

let action = document.getElementById("mybtn")
action.addEventListener("click", sorter)

let order = document.getElementById("box")
order.style.display = "flex"

let showWin = document.getElementById("win")
showWin.style.display = "none"

let showLoose = document.getElementById("loose")
showLoose.style.display = "none"