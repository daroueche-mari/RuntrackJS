function tri(numbers, order) {
    let n = numbers.length;

    // Boucle principale pour parcourir tout le tableau
    for (let i = 0; i < n; i++) {
        // Deuxième boucle pour comparer les éléments voisins
        for (let j = 0; j < n - 1; j++) {
            
            let doitEchanger = false;

            // On définit la condition d'échange selon l'ordre demandé
            if (order === "asc") {
                if (numbers[j] > numbers[j + 1]) {
                    doitEchanger = true;
                }
            } else if (order === "desc") {
                if (numbers[j] < numbers[j + 1]) {
                    doitEchanger = true;
                }
            }

            // Si la condition est remplie, on inverse les deux nombres
            if (doitEchanger) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}

// --- Tests ---
let mesNombres = [5, 2, 9, 1, 5, 6];

console.log("Ascendant :", tri(mesNombres, "asc")); 
console.log("Descendant :", tri(mesNombres, "desc"));