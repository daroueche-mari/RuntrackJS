$(document).ready(function() {
    
    // On sélectionne notre input
    let $input = $("#monChamp");

    // 1. Lorsqu'on clique dans le champ (Focus)
    $input.focus(function() {
        $(this).animate({
            width: "300px" // Largeur cible
        }, 400); // Durée de l'animation en millisecondes (0.4s)
    });

    // 2. Lorsqu'on clique ailleurs (Blur)
    $input.blur(function() {
        $(this).animate({
            width: "150px" // Retour à la taille d'origine
        }, 400);
    });

});