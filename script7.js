// Logique : Lancer le ballon au moins une fois jusqu'à réussir, avec une boucle do..while
// Solution : L'action doit être exécutée au moins une fois avant de vérifier si le panier est réussi.

let panier = false;
let tentatives = 0;

do {
    console.log("Je lance le ballon...");
    tentatives++;
    
    if (tentatives === 3) { 
        panier = true;
    }
} while (!panier); // si la condition est vérifiée, on sort de la boucle
                   // tant que le panier n'est pas réussi"