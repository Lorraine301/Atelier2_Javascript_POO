// Définition de la classe Vecteur2D
class Vecteur2D {
    // Constructeur par défaut
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Méthode d'affichage
    toString() {
        return `Vecteur (${this.x}, ${this.y})`;
    }

    // Surcharge de méthode d'addition de deux vecteurs plan
    additionner(autreVecteur) {
        return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
}

// Instanciation d'un Vecteur2D sans paramètre
let v1 = new Vecteur2D();

// Instanciation d'un Vecteur2D avec ses deux paramètres
let v2 = new Vecteur2D(3, 4);

// Somme de deux vecteurs
let vSomme = v1.additionner(v2);

// Affichage des deux vecteurs instanciés
console.log(v1.toString());
console.log(v2.toString());

// Affichage de la somme
console.log(vSomme.toString());

// Définition de la classe Rectangle
class Rectangle {
    // Constructeur avec valeurs par défaut
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    // Méthode d'affichage
    toString() {
        return `${this.nom}: ${this.longueur} x ${this.largeur}, Surface: ${this.surface()}`;
    }

    // Méthode pour calculer la surface du rectangle
    surface() {
        return this.longueur * this.largeur;
    }
}

// Définition de la classe Carré qui hérite de Rectangle
class Carre extends Rectangle {
    // Constructeur spécifique pour un carré
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

// Instanciation d'un rectangle et d'un carré
let rect = new Rectangle(5, 3);
let carre = new Carre(4);

// Affichage des objets
console.log(rect.toString());
console.log(carre.toString());

// Définition de la classe Point
class Point {
    // Constructeur par défaut
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // Méthode d'affichage
    toString() {
        return `Point (${this.x}, ${this.y})`;
    }
}

// Définition de la classe Segment
class Segment {
    // Constructeur avec origine et extrémité définies comme des points
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }

    // Méthode d'affichage
    toString() {
        return `Segment [Origine: ${this.orig.toString()}, Extrémité: ${this.extrem.toString()}]`;
    }
}

// Instanciation et affichage d'un segment
let seg = new Segment(1, 2, 4, 6);
console.log(seg.toString());
