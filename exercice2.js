// Objet natif Etudiant
class Etudiant {
    constructor(nom, prenom, age, cne) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.cne = cne;
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

    enseigner() {
        console.log(`Le professeur ${this.nom} donne un cours.`);
    }
}

// Liste des étudiants
let etudiants = [
    new Etudiant("RAHELIARISOA", "Lorraine", 22, "FSTT000113"),
    new Etudiant("RAVOAHIRANDRAMASY", "Marcelline", 20, "FSTT000115"),
    new Etudiant("TOKY", "Fitia", 19, "FSTT000156"),
];

// Trier les étudiants par ordre alphabétique
etudiants.sort((a, b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom));

// Affichage des étudiants triés
console.log(etudiants);
