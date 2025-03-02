
class Voiture {
    // Fonction constructeur Voiture avec ses attributs
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
    toString() {
        return `${this.marque} ${this.model} (${this.annee}) - ${this.type}, ${this.carburant}`;
    }
}

// Classe Hyundai héritant de Voiture
class Hyundai extends Voiture {
    constructor(model, marque, annee, type, carburant, serie, hybride) {
        super(model, marque, annee, type, carburant);
        this.serie = serie;
        this.hybride = hybride;
    }
    toString() {
        return `${super.toString()}, Série: ${this.serie}, Hybride: ${this.hybride ? "Oui" : "Non"}`;
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
    toString() {
        return `${super.toString()}, Options: ${this.options.join(", ")}`;
    }
}

// Création d'une liste des voitures
let voitures = [
    new Hyundai("i20", "Hyundai", 2020, "Hatchback", "Essence", "A12", true),
    new Ford("Focus", "Ford", 2018, "Berline", "Diesel", ["GPS", "Caméra"]),
    new Hyundai("Tucson", "Hyundai", 2022, "SUV", "Hybride", "B34", false),
];

// Triage des voitures par année croissante
voitures.sort((a, b) => a.annee - b.annee);

// Affichage des voitures triées
console.log(voitures.map(v => v.toString()).join("\n"));
