document.getElementById('btnFiltrer').addEventListener('click', function() {
    // 1. Récupération des critères de recherche
    const filterId = document.getElementById('pokemonId').value.trim();
    const filterNom = document.getElementById('pokemonNom').value.toLowerCase().trim();
    const filterType = document.getElementById('pokemonType').value;

    // 2. Fetch du fichier JSON
    fetch('/Job03/pokemon.json')
        .then(response => {
            if (!response.ok) throw new Error("Erreur de chargement du fichier");
            return response.json();
        })
        .then(pokemons => {
            // 3. Filtrage des données
            const resultatsFiltres = pokemons.filter(p => {
                // On vérifie si chaque champ correspond (si le champ est vide, on ignore le critère)
                const matchId = filterId === "" || p.id.toString() === filterId;
                const matchNom = filterNom === "" || p.nom.toLowerCase().includes(filterNom);
                const matchType = filterType === "" || (p.type && p.type.includes(filterType));

                return matchId && matchNom && matchType;
            });

            // 4. Affichage des résultats
            afficherResultats(resultatsFiltres);
        })
        .catch(error => console.error("Erreur:", error));
});

function afficherResultats(liste) {
    const container = document.getElementById('resultats');
    container.innerHTML = ""; // On vide les anciens résultats

    if (liste.length === 0) {
        container.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
        return;
    }

    // Création d'une liste HTML
    const ul = document.createElement('ul');
    liste.forEach(p => {
        const li = document.createElement('li');
        li.textContent = `#${p.id} - ${p.nom} (Type: ${p.type})`;
        ul.appendChild(li);
    });
    container.appendChild(ul);
}