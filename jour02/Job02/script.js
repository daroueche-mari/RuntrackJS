// // // point de depart
// // function showhide(state) {
// //     state = 0
// //         if (button == "click") {
// //             state +1 ;
// //         }
        
// //         if (state == 1) {
// //             let show = document.querySelector("article")
// //         show.style.display = "none";
        
// //         }
// //         if (state == 2){
// //             let show = document.querySelector("article")
// //         show.style.display = "block";
// //         }
// //         if (state == 2) {
// //             state = 0;
// //         }
        
        
// // }

// let test = document.getElementById("button")
// test.addEventListener("click", showhide)


// apres correction 
let state = 0
function showhide() {
       state++
        
        if (state == 1) {
            let show = document.querySelector("article")
        show.style.display = "none";
        
        }
        if (state == 2){
            let show = document.querySelector("article")
        show.style.display = "block";
        }
        if (state == 2) {
            state = 0;
        }
}

let test = document.getElementById("button")
test.addEventListener("click", showhide)