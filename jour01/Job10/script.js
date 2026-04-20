function compterVoyelles(phrase) {
    // 1. On initialise un compteur à 0
    let nbVoyelles = 0;
    
    // 2. On définit la liste des voyelles (en minuscules pour simplifier)
    let voyelles = "aeiouyAEIOUY";

    // 3. On parcourt la phrase lettre par lettre
    for (let i = 0; i < phrase.length; i++) {
        let lettreActuelle = phrase[i];

        // 4. On vérifie si la lettre actuelle est présente dans la chaîne 'voyelles'
        if (voyelles.includes(lettreActuelle)) {
            nbVoyelles++; // On incrémente le compteur
        }
    }

    // 5. On affiche le résultat final
    console.log("La phrase contient " + nbVoyelles + " voyelles");
}

// --- Tests ---
compterVoyelles("Bonjour tout le monde"); 
compterVoyelles("Javascript");           