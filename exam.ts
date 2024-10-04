// fonction retourne un tableau contenant trois fois le nombre passé en argument
function triple(nombre: number): number[] {
    let resultat: number[] = [];
    for(let i = 0; i < 3; i++){
        resultat.push(nombre);
    }
    return resultat;
}
let chiffre: number = 5;
console.log(triple(chiffre));

// fonction qui calcul la somme des nombres impairs dans un tableau
function sommeImpairs(nombre: number[]): number {
    let somme: number = 0;
    for(let i = 0; i < nombre.length; i++){
        if(nombre[i] % 2 !== 0){
            somme += nombre[i];
        }
    }
    return somme;
}

// fonction qui retourne un tableau avec les deux derniers éléments du tableau passé en argument
function derniersElements(nombre: number[]): number[] {
    let resultat: number[] = [];
    if(nombre.length >= 2){
        resultat.push(nombre[nombre.length - 1]);
        resultat.push(nombre[nombre.length - 2]);
    }
    return resultat;
}
let table: number[] = [5, 6, 7, 8];
console.log(derniersElements(table));
function lastTwo(tableau: any[]): any[] {
    let last = tableau.slice(-2);
    return last;
}

function derniersElements(nombre: number[]): number[] {
    let resultat: number[] = [];
    if (nombre.length >= 2) {
        resultat.push(nombre[nombre.length - 2]); 
        resultat.push(nombre[nombre.length - 1]); 
    }
    return resultat;
}
let table: number[] = [5, 6, 7, 8];
console.log(derniersElements(table));

// fonction qui retourne un tableau contenant un seul element du tableau passé en argument
function unElement(nombre: number): number[] {
    return [nombre];
}
