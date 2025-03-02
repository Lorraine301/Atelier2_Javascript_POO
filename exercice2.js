// Objet natif Etudiant
class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
    }
    toString() {
        return `${this.prenom} ${this.nom} (Age: ${this.age}, CNE: ${this.cne})`;
    }
    
    etudier() {
        console.log(`${this.prenom} ${this.nom} est en train d'étudier.`);
    }
}

// Objet natif Professeur
class Professeur {
    constructor(nom, age, cin) {
        this.nom = nom;
        this.age = age;
        this.cin = cin;
    }

    toString() {
        return `Professeur ${this.nom} (Age: ${this.age}, CIN: ${this.cin})`;
    }

    enseigner() {
        console.log(`Le professeur ${this.nom} donne un cours.`);
    }
}

// Création d'une liste des étudiants
let etudiants = [
    new Etudiant("RAHELIARISOA", "Lorraine", 22, "FSTT000113"),
    new Etudiant("RAVOAHIRANDRAMASY", "Marcelline", 20, "FSTT000115"),
    new Etudiant("TOKY", "Fitia", 19, "FSTT000156"),
];

// Triage des étudiants par ordre alphabétique
etudiants.sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));

// Affichage des étudiants triés
console.log(etudiants.map(e => e.toString()).join("\n"));