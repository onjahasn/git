// Plusieurs articles avec nom et marque
// On veux savoir combien d'article de chaque marque on a
// Et quelle marque a le plus d'articles

// Liste des articles avec leurs marques
const articles:{name:string; marque:string}[]=[
    {name:"astra",marque:"opel"},
    {name:"clio",marque:"renault"},
    {name:"208",marque:"peugeot"},
    {name:"c4",marque:"renault"},
    {name:"corsa",marque:"opel"},
    {name:"megan",marque:"renault"} 

];
// Initialisation d'un objet vide pour stocker le comptage des marques
const compteMarque: { [marque: string]: number }= {};

for (const article of articles) {          // Boucle pour parcourir chaque article du tableau "articles"
    if (compteMarque[article.marque]) {    // Vérifie si la marque de l'article est présente dans l'objet "compteMarque"
        compteMarque[article.marque]++;    // Si la marque est déjà présente, incrémente son compteur de 1
    } else {
        compteMarque[article.marque] = 1;  // Si la marque n'est pas présente, initialise le compteur à 1
    }
}
console.log(compteMarque);

// Trouve la marque qui a le plus d'articles
let maxMarque: string = "";   // Pour stocker la marque avec le plus d'articles
let maxCount: number = 0;     // Pour stocker le nombre maximum d'articles trouvés pour une marque

for (const marque in compteMarque) {   // parcourt les clés (noms des marques) de l'objet `compteMarque`
    if (compteMarque[marque] > maxCount) {  // Vérifie si le nombre d'articles pour la marque actuelle est supérieur à `maxCount`
        maxMarque = marque;            // Si c'est le cas, met à jour `maxMarque` avec la marque actuelle
        maxCount = compteMarque[marque];  // Met à jour `maxCount` avec le nouveau nombre maximum
    }
}
console.log("La marque ayant le plus d'articles est : " + maxMarque + ", avec " + maxCount + " articles.");
