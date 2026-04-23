/**
 * Extrait une valeur d'une chaîne JSON en fonction d'une clé donnée.
 * @param {string} jsonString - La chaîne de caractères au format JSON.
 * @param {string} key - La clé dont on veut récupérer la valeur.
 * @returns {*} - La valeur associée à la clé.
 */
function jsonValueKey(jsonString, key) {
    try {
        // On transforme la chaîne JSON en objet JavaScript
        const obj = JSON.parse(jsonString);
        
        // On retourne la valeur associée à la clé passée en paramètre
        return obj[key];
    } catch (error) {
        console.error("Erreur : La chaîne fournie n'est pas un JSON valide.", error);
        return null;
    }
}

// --- Exemple d'utilisation ---

// 1. On définit une chaîne JSON
const maDonnee = '{"name": "La Plateforme", "city": "Marseille", "staff": 40}';

// 2. On appelle la fonction avec la clé "city"
const resultat = jsonValueKey(maDonnee, "city");

// 3. Affichage du résultat
console.log(resultat); // Affiche : "Marseille"