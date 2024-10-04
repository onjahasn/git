//Exo 1
let personne = 18;
if (personne >= 18) {
    console.log("Vous pouvez venir");
} else if (personne < 18) {
    console.log("Vous pouvez venir mais accompagné d'un adulte");
} else {
    console.log("Vous ne pouvez pas venir");
}

// Exo 2
let produits = {
    "Produit1": 40,
    "Produit2": 60,
    "Produit3": 25,
    "Produit4": 55
  };
    for (let produit in produits) {
    let prix = produits[produit];
    if (prix > 50) {
      console.log(produit + " est trop cher (prix: " + prix + " €).");
    } else {
      console.log(produit + " est acceptable (prix: " + prix + " €).");
    }
  }
  
  // Exo 3
  let preferences = "Film_action";
  if (preferences === "Film_action") {
     console.log("Je te recommande ce film.");
  } else {
    console.log("Je ne te recommande ce film populaire.");
  }
  
  // Exo 4
  let products = {
    "pommes": 10,
    "bananes": 20,
    "oranges": 5,
    "citrons": 2,
    "mangues": 0,
  };
  for (let produit in products) {
    let quantite = products[produit];
    if (quantite < 5) {
      console.log("Reaprovisionner " + produit );
    } else if (quantite === 0) {
      console.log("Retire la" + produit );
    } else {
        console.log("Stock suffisante de " + produit + ".");
    }
  }
  