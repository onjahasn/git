// Pour supprimer les doublons d'un tableau de chaînes
function supprimerDoublons(tableau: string[]): string[] {
    return Array.from(new Set(tableau));
}
const fruits = ["pomme", "banane", "pomme", "kiwi"];
console.log(supprimerDoublons(fruits));

// let tab = ["pomme", "banane", "pomme", "kiwi"];
// function sansDoublon(table: string[]): string[] {
//     return table.filter((element, index) => table.indexOf(element) === index);
// }
// const tableau = ["pomme", "banane", "pomme", "kiwi"];
// console.log(sansDoublon(tableau)); 

let chiffre = 5;
function multiplierParDeux(nombre: number): number {
    return nombre * 2;
}
console.log(multiplierParDeux(chiffre)); 

// Retourne la deuxieme plus grand nombre dans un tableau
function triAbulle(tableau: number[]): number{
    let resultat = tableau.sort();
    return resultat[resultat.length - 2];
}
let donnee = [1, 5, 2, 9, 3];
console.log(triAbulle(donnee));

// Produit des éléments d'un tableau
function produit(tableau: number[]): number{
    let resultat = 1;
    for(let i = 0; i < tableau.length; i++){
        resultat *= tableau[i];
    }
    return resultat
}
let donne = [2, 3, 4];
console.log(produit(donne));

// Compte le nombre positif dans un tableau
function produit(tableau: number[]): number{
    let compteur = 0;
    for(let i = 0; i < tableau.length; i++){
        if(tableau[i] > 0){
            compteur++
        }
    }
    return compteur
}
let donnee = [1, -2, 3, 0, -1];
console.log(produit(donnee));

// Retourne le nombre de caractères sans espace
function sansEspace(strn: string): number {
    let nombre : number = 0;    
    for(let i : number = 0; i < strn.length; i++){
        if(strn[i] !== " "){
            nombre++;
        }
    }
    return nombre;
}
let tableau = "salut tout le monde";
console.log(sansEspace(tableau));

function sansEspace(strn: string): number {
    let sansEspaces = strn.replace(/ +/g, "");
    return sansEspaces.length;
}
let tableau = "salut tout le monde";
console.log(sansEspace(tableau));

// Écrivez une fonction qui retourne l'inverse de vrai ou faux.
function inverse(strn: boolean): boolean {
    return !strn;
}
console.log(inverse(true)); 
console.log(inverse(false));

//function pour concatenation des strings dans un tableau

function concatenation(tableau: string[]): string{
    let resultat = "";
    for(let i = 0; i < tableau.length; i++){
        resultat += tableau[i] + " ";
    }
    return resultat.trim();
}
let tableau = ["Bonjour", "tout", "le", "monde"];
console.log(concatenation(tableau));