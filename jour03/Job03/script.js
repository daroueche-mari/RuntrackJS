document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const buttons = document.querySelectorAll("#box button");
    const mybtn = document.getElementById("mybtn"); // Ton bouton "Recommencer"

    // 1. Initialisation du bouton Recommencer
    mybtn.textContent = "Recommencer";
    mybtn.style.display = "none"; // Caché au début
    mybtn.addEventListener("click", () => location.reload());

    // 2. Fonction de mélange (Shuffle)
    function shuffle() {
        const sections = Array.from(box.children);
        sections.sort(() => Math.random() - 0.5);
        sections.forEach(section => box.appendChild(section));
    }

    // 3. Vérification de la victoire
    function checkVictory() {
        const currentOrder = Array.from(document.querySelectorAll("img"))
                                  .map(img => img.getAttribute("alt"));
        
        const winningOrder = ["logo_1", "logo_2", "logo_3", "logo_4", "logo_5", "logo_6", "logo_7", "logo_8", "logo_9"];

        if (currentOrder.join() === winningOrder.join()) {
            const msg = document.createElement("h2");
            msg.textContent = "Vous avez gagné";
            msg.style.color = "green";
            document.body.insertBefore(msg, box);
            
            mybtn.style.display = "block"; // Affiche le bouton Recommencer
            box.style.pointerEvents = "none"; // Bloque la partie
        }
    }

    // 4. Logique de mouvement
    function changeplace(event) {
        // On remonte au bouton si on a cliqué sur l'image ou l'article
        const clickedBtn = event.currentTarget;
        const clickedImg = clickedBtn.querySelector("img");
        
        // On trouve la case vide (logo_9)
        const emptyImg = document.querySelector('img[alt="logo_9"]');
        const emptyBtn = emptyImg.closest("button");

        // Positions dans la grille
        const allSections = Array.from(box.querySelectorAll("section"));
        const clickedIndex = allSections.indexOf(clickedBtn.closest("section"));
        const emptyIndex = allSections.indexOf(emptyBtn.closest("section"));

        const diff = Math.abs(clickedIndex - emptyIndex);

        // Vérification voisin (1) ou dessus/dessous (3)
        if (diff === 1 || diff === 3) {
            // Empêcher le saut de ligne latéral (ex: index 2 vers 3)
            if (diff === 1 && Math.floor(clickedIndex / 3) !== Math.floor(emptyIndex / 3)) return;

            // Échange des attributs src et alt
            const tempSrc = clickedImg.src;
            const tempAlt = clickedImg.alt;

            clickedImg.src = emptyImg.src;
            clickedImg.alt = emptyImg.alt;

            emptyImg.src = tempSrc;
            emptyImg.alt = tempAlt;

            checkVictory();
        }
    }

    // 5. Lancement
    buttons.forEach(btn => btn.addEventListener("click", changeplace));
    shuffle();
});