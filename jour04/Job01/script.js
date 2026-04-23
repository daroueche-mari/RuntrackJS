// On récupère le bouton par son ID
const btn = document.getElementById("button");

btn.addEventListener("click", () => {
    
    // 1. Appeler le fichier texte
    fetch("expression.txt")
        .then(response => {
            // On vérifie si le fichier a bien été trouvé
            if (!response.ok) {
                throw new Error("Fichier non trouvé");
            }
            // On transforme la réponse en texte brut
            return response.text();
        })
        .then(data => {
            // 2. Créer l'élément <p>
            const paragraphe = document.createElement("p");
            
            // 3. Insérer le contenu du fichier dans le paragraphe
            paragraphe.textContent = data;
            
            // 4. Ajouter le paragraphe au corps (body) de la page
            document.body.appendChild(paragraphe);
        })
        .catch(error => {
            console.error("Erreur lors de la récupération :", error);
        });
});