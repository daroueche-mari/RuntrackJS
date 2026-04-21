function changecolor() {
    if(event.type == "focus") {
        foc.style.backgroundColor = "yellow"
    }
    if(event.type == "blur") {
        blu.style.backgroundColor = "Blue"
    }
}

let foc = document.getElementById("keylogger")
foc.addEventListener("focus", changecolor)

let blu = document.getElementById("keylogger")
blu.addEventListener("blur", changecolor)