let state = 0
function changeTheme() {
    state++
    if (state == 1) {
        change.style.backgroundColor = "black"
        change.style.color = "white"
    }
    if (state == 2) {
        change.style.backgroundColor = "white"
        change.style.color = "black"
    }
    if (state == 2) {
        state = 0
    }
}

let change = document.querySelector("body")

let test = document.getElementById("toggle-theme")
test.addEventListener("click", changeTheme)