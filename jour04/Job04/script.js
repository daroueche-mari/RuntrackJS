document.addEventListener("DOMContentLoaded", () => {
    const btnUpdate = document.getElementById("update");
    const userBody = document.getElementById("user-body");

    // Fonction pour charger et afficher les données
    function loadUsers() {
        fetch("utilisateur.json")
            .then(response => {
                if (!response.ok) throw new Error("Erreur de chargement du fichier JSON");
                return response.json();
            })
            .then(users => {
                // On vide le tableau avant d'ajouter les nouvelles données
                userBody.innerHTML = "";

                // On parcourt chaque utilisateur pour créer une ligne (tr)
                users.forEach(user => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${user.id}</td>
                        <td>${user.nom}</td>
                        <td>${user.prenom}</td>
                        <td>${user.email}</td>
                    `;

                    userBody.appendChild(row);
                });
            })
            .catch(error => console.error("Erreur :", error));
    }

    // On écoute le clic sur le bouton
    btnUpdate.addEventListener("click", loadUsers);
});