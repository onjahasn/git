// Contexte : Tu organises un repas de famille où chaque invité a deux options : entrée et plat
// principal.
// Instructions :
// • Pour chaque invité, tu dois leur demander ce qu'ils veulent pour l'entrée et ce qu'ils
// veulent pour le plat principal.
// Question : Comment décrirais-tu cette situation en termes de boucles imbriquées ? Quelles
// actions effectues-tu pour chaque invité ?


// Logique : : Demander à chaque invité ce qu'il veut pour l'entrée et le plat principal.
// Solution : Utiliser des boucles imbriquées pour demander les choix à chaque invité

let invites = ["Alice", "Bob", "Charlie"];

for (let invite of invites) {
    console.log(invite + " est présent!");
    console.log("Choix des entrées : ", invite);
    console.log("Choix des plats principaux : ", invite);
        
}



