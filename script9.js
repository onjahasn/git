// Contexte : Tu es responsable de vérifier les formulaires d’inscription pour un concours.
// Chaque formulaire doit avoir un nom et une adresse email valides.
// Instructions :
// • Si le nom est absent, tu dois demander à l'utilisateur de le remplir.
// • Si l'adresse email est absente ou incorrecte, tu dois également la faire corriger.
// Question : Comment formulerais-tu la logique de contrôle pour vérifier ces données dans le
// formulaire ?


// Logique : Vérifier si le nom et l'adresse email sont valides
// Solution : Vérifier la présence du nom et de l'email avant de valider.

let nom = prompt("Entrez votre nom :");
while (!nom) {
    nom = prompt("Le nom est obligatoire. Veuillez entrer votre nom :");
}

let email = prompt("Entrez votre adresse email :");
while (!email) {
    email = prompt("Adresse email invalide. Veuillez entrer une adresse email valide :");
}

console.log("Formulaire validé avec succès !");
console.log("Nom :", nom);
console.log("Email :", email);
