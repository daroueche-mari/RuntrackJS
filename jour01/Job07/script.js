function jourTravaille(dateFournie) {
    // 1. Extraction des informations de la date
    let jour = dateFournie.getDate();
    let mois = dateFournie.getMonth() + 1; // +1 car les mois vont de 0 à 11
    let annee = dateFournie.getFullYear();
    let jourSemaine = dateFournie.getDay(); // 0 = Dimanche, 6 = Samedi

    // Formatage pour l'affichage (ex: "20 4 2024")
    let dateTexte = `${jour} ${mois} ${annee}`;
    
    // Formatage pour la comparaison des jours fériés (ex: "1/5" pour le 1er mai)
    let jourMois = `${jour}/${mois}`;

    // 2. Liste des jours fériés 2024 (France)
    const feries2024 = [
        "1/1",   // Jour de l'an
        "1/4",   // Lundi de Pâques
        "1/5",   // Fête du Travail
        "8/5",   // Victoire 1945
        "9/5",   // Ascension
        "20/5",  // Lundi de Pentecôte
        "14/7",  // Fête Nationale
        "15/8",  // Assomption
        "1/11",  // Toussaint
        "11/11", // Armistice 1918
        "25/12"  // Noël
    ];

    // 3. Logique de vérification
    if (feries2024.includes(jourMois)) {
        console.log(`Le ${dateTexte} est un jour férié`);
    } 
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, ${dateTexte} est un week-end`);
    } 
    else {
        console.log(`Oui, ${dateTexte} est un jour travaillé`);
    }
}

// --- TESTS ---
console.log("--- Tests de la fonction ---");
jourTravaille(new Date(2024, 0, 1));   // 1er Janvier (Férié)
jourTravaille(new Date(2024, 3, 13));  // Samedi 13 Avril (Week-end)
jourTravaille(new Date(2024, 3, 15));  // Lundi 15 Avril (Travail)