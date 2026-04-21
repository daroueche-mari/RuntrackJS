// 1. On définit la combinaison secrète
let codeSecret = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown"];

// 2. On crée un tableau vide pour stocker les touches de l'utilisateur
let historique = [];

function changecolor(event) {
    if (event.type === "keydown") {
        // Ajouter la touche pressée à l'historique
        historique.push(event.key);

        // Garder seulement les 4 dernières touches (la taille de notre code)
        historique = historique.slice(-codeSecret.length);

        // Vérifier si l'historique correspond au code secret
        // .join() transforme le tableau en texte pour pouvoir comparer
        if (historique.join() === codeSecret.join()) {
            test.style.backgroundColor = "Blue";
        }
    }
}

let test = document.querySelector("body");
window.addEventListener("keydown", changecolor);