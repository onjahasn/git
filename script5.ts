// Logique : Mélanger les ingrédients 5 fois avec une boucle for.
// Solution : À chaque itération, tu mélanges les ingrédients.

// for (let melange: number = 0; melange < 5; melange++) {
//     console.log("Je melange...");
// }
// console.log("j'ai fini de mélanger.");


// function inverse (chn : string) : string {
//     return chn.split('').reverse().join('');
//    }
// const mot : string = "salut";
// console.log (inverse(mot));


// function maxNumber(num: number[]): number {
//     return Math.max(...num);
// }

// const nombres = [1, 5, 2, 9, 3];
// console.log(maxNumber(nombres));

// Calculer le factorielle
function factorielle(n: number) {
    let resultat: number = 1;   
    for (let i: number = 1; i <= n; i++) {
        resultat *= i;
    }
    return(resultat);
}
let chiffre: number = 5;
console.log("Le factorielle de "+ chiffre +" est :", factorielle(chiffre));

// trouver la moyenne
let nombres = [5, 10, 15];
function calculerMoyenne(nombre: number[]): number {
    let somme = 0;
    for (let i = 0; i < nombre.length; i++) {
        somme += nombre[i];
    }
    let moyenne: number = somme / nombre.length;
    return moyenne;
}

console.log("Moyenne:", calculerMoyenne(nombres));

// Compter les voyelles
const compterVoyelles = (char: string): number => {
    let voyelles: string[] = ["a", "e", "i", "o", "u"];
    let compteur: number = 0;
    for (let i: number = 0; i < char.length; i++) {
        if (voyelles.includes(char[i])) {
            compteur++;
        }
    }
    return compteur;
}
let chaine: string = "Bonjour tout le monde";
console.log("Nombre de voyelles dans la chaine:", compterVoyelles(chaine));

// Trouver le maximum dans un tableau
function trouverMaximum(t: number[]): number {
    let maxi: number = Math.max(...t);
    return maxi;
}
let tableau = [1, 5, 2, 9, 3];
console.log(trouverMaximum(tableau));
function grandeValeur(n: number[]): number {
    // Calcul du maximum en dehors de la boucle car tu n'as pas besoin de boucler ici
    let maxi = Math.max(...n);
    
    // Retourner la valeur maximale
    return maxi;
}

// Appel de la fonction et affichage du résultat
// console.log(grandeValeur(tableau)); 

// Calculer la somme d'un tableau
function somme(nombre: number[]): number {
    let addition = 0;
    for(let i = 0; i < nombre.length; i++){
        addition += nombre[i];
    }
return addition;
}
let chif = [4, 2, 9];
console.log ("La somme est de : ", somme(chif));

// Créer une fonction pour demander le nom et prénom et l'âge d'un utilisateur
function moi(nom: string, prenom: string, age: number): any {
    console.log("Bonjour, je m'appelle " + prenom + " " + nom + " et j'ai " + age + " ans.");
}

let chiffr = 7;
function trouverPair(nombre : number): string {
    if (nombre % 2 === 0){
        return ("pair");
    } else {
        return ("impair");
    }
}
console.log(trouverPair(chiffr));

// Trouver les nombres impairs dans un tableau
let tabl = [1, 2, 3, 4, 5];
function impair(nombre: number[]): number[] {
    let impairs: number[] = [];
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] % 2 !== 0){
            impairs.push(nombre[i]);
        }
    }
    return impairs;
}
console.log(impair(tabl));

// Trouver la chaîne la plus longue dans un tableau
let table = ["pomme", "banane", "kiwi", "ananas"];
const longChaine = (chn: string[]): string => {
    let chaineLongue = chn[0]; // Initialisation avec le premier élément du tableau
    
    for (let i = 1; i < chn.length; i++) {
        if (chn[i].length > chaineLongue.length) {
            chaineLongue = chn[i]; // Mise à jour si l'élément courant est plus long
        }
    }
    return chaineLongue;
}
console.log(longChaine(table)); // Affiche la chaîne la plus longue

// Valeurs absolues d'un nombre

// console.log(Math.abs(num));

let num = -5;
function valeurAbsol(nombre: number): number {
    return nombre < 0 ? -nombre : nombre;
}
function valeurAbsolue(nombre: number): number {
    if (nombre < 0) {
        return -nombre;
    } else {
        return nombre;
    }
}
console.log(valeurAbsolue(num)); // Affiche 5

// somme de 2 nombres
let a = 3, b = 7; 
function somm(x: number, y: number): number {
    return a + b;
}
console.log(somm(a, b));

function differenceMaximale(tableau: number[]):number{
    if(tableau.length<2){
        return 0;
    }
    let maxDifference = 0;
    for (let i=0; i< tableau.length -1; i++){
        const differnce = Math.abs(tableau[i+1] - tableau[i]);
        if (differnce > maxDifference){
            maxDifference = differnce;
        }
    }
    return maxDifference;
}
const tablea = [2,9,1,15];
// const resultat = differenceMaximale (tableau);
// console.log(resultat);




