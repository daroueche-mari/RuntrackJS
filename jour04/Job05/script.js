document.getElementById("get-quote").addEventListener("click", function() {
    const container = document.getElementById("quote-container");

    // Appel à l'API ZenQuotes
    fetch("https://zenquotes.io/api/random")
        .then(response => {
            if (!response.ok) throw new Error("Erreur réseau");
            return response.json();
        })
        .then(data => {
            // L'API renvoie un tableau : [ {q: "...", a: "...", ...} ]
            const quoteData = data[0];

            // On construit le HTML à insérer
            container.innerHTML = `
                <p>"${quoteData.q}"</p>
                <span class="author">- ${quoteData.a}</span>
            `;
        })
        .catch(error => {
            container.innerHTML = "Désolé, impossible de récupérer une citation pour le moment.";
            console.error("Erreur Fetch :", error);
        });
});