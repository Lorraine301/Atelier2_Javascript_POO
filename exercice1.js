// Fonction constructeur Voiture
class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

// Classe Hyundai héritant de Voiture
class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }

    alarmer() {
        console.log(`Alarme activée pour la Hyundai ${this.model}`);
    }
}

// Classe Ford héritant de Voiture
class Ford extends Voiture {
    constructor(model, marque, annee, type, carburant, options) {
        super(model, marque, annee, type, carburant);
        this.options = options;
    }
}

// Liste des voitures
let voitures = [
    new Hyundai("i20", "Hyundai", 2020, "Hatchback", "Essence", "A12", true),
    new Ford("Focus", "Ford", 2018, "Berline", "Diesel", ["GPS", "Caméra"]),
    new Hyundai("Tucson", "Hyundai", 2022, "SUV", "Hybride", "B34", false),
];

// Trier les voitures par année croissante
voitures.sort((a, b) => a.annee - b.annee);

// Affichage des voitures triées
console.log(voitures);
