let state = 0
function hideText() {
    state++ 
    if (state == 1) {
        let changestate = document.querySelector(".txt");
        let changestate2 = document.querySelector(".txtnext");
        changestate.style.opacity = "1";
        changestate.style.visibility = "visible";
        changestate.style.transition = "opacity 2s ease-in-out, visibility 2s";
        changestate.style.position = "absolute";
        changestate2.style.visibility = "hidden";
        changestate2.style.opacity = "0";
       
    }
    if (state == 2) {
            let changestate2 = document.querySelector(".txtnext");
            let changestate = document.querySelector(".txt");
            changestate2.style.opacity = "1";
            changestate2.style.visibility = "visible";
            changestate2.style.transition = "opacity 2s ease-in-out, visibility 2s";
            changestate2.style.position = "absolute";
            changestate.style.visibility = "hidden";
            changestate.style.opacity = "0";
        }
    if (state == 2) {
            state = 0
        }
}
setInterval(hideText, 5000);

let action = document.querySelector(".mybtn");
action.addEventListener("click", hideText);
action.style.visibility = "hidden";
let changestate = document.querySelector(".txt");
changestate.style.visibility = "hidden";
changestate.style.opacity = "0";
let changestate2 = document.querySelector(".txtnext");
changestate2.style.visibility = "hidden";
changestate2.style.opacity = "0";