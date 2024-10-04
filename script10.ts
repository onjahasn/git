// function factorielle(n: number) {
//     let resultat: number = 1;   
//     for (let i: number = 1; i <= n; i++) {
//         resultat *= i;
//     }
//     return(resultat);
// }

// function compterVoyelles(char: string): number {
//     let voyelles: string[] = ["a", "e", "i", "o", "u"];
//     let compteur: number = 0;
//     for (let i: number = 0; i < char.length; i++) {
//         if (voyelles.includes(char[i])) {
//             compteur++;
//         }
//     }
//     return compteur;
// }

// function trouverMaximum(t: number[]): number {
//     let maxi: number = Math.max(...t);
//     return maxi;
// }

// function moi(nom: string, prenom: string, age: number): any {
//     return("Bonjour, je m'appelle " + prenom + " " + nom + " et j'ai " + age + " ans.");
// }

// function calculerMoyenne(nombre: number[]): number {
//     let somme = 0;
//     for (let i = 0; i < nombre.length; i++) {
//         somme += nombre[i];
//     }
//     let moyenne: number = somme / nombre.length;
//     return moyenne;
// }


// let maChaineDeCaractere = moi("serge", "rakotomalala", 42);

// let factorielleATrouver = (compterVoyelles(maChaineDeCaractere));

// console.log(factorielle(factorielleATrouver));