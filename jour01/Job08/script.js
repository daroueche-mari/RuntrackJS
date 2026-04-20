function sommeNombresPremiers(a, b) {
    // 1. On vérifie si 'a' est premier
    let aEstPremier = a > 1;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            aEstPremier = false;
        }
    }

    // 2. On vérifie si 'b' est premier
    let bEstPremier = b > 1;
    for (let i = 2; i < b; i++) {
        if (b % i === 0) {
            bEstPremier = false;
        }
    }

    // 3. On fait le calcul final
    if (aEstPremier && bEstPremier) {
        return a + b;
    } else {
        return false;
    }
}

// Tests
console.log(sommeNombresPremiers(2, 3));
console.log(sommeNombresPremiers(4, 7));