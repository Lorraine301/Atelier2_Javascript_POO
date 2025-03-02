// Classe Vecteur2D
class Vecteur2D {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    afficher() {
        console.log(`Vecteur (${this.x}, ${this.y})`);
    }

    additionner(autreVecteur) {
        return new Vecteur2D(this.x + autreVecteur.x, this.y + autreVecteur.y);
    }
}

// Test Vecteur2D
let v1 = new Vecteur2D();
let v2 = new Vecteur2D(3, 4);
let vSomme = v1.additionner(v2);
v1.afficher();
v2.afficher();
vSomme.afficher();

// Classe Rectangle
class Rectangle {
    constructor(longueur = 1, largeur = 1) {
        this.longueur = longueur;
        this.largeur = largeur;
        this.nom = "rectangle";
    }

    afficher() {
        console.log(`${this.nom}: ${this.longueur} x ${this.largeur}`);
    }

    surface() {
        return this.longueur * this.largeur;
    }
}

// Classe Carré héritant de Rectangle
class Carre extends Rectangle {
    constructor(cote = 1) {
        super(cote, cote);
        this.nom = "carré";
    }
}

// Test Rectangle et Carré
let rect = new Rectangle(5, 3);
let carre = new Carre(4);
rect.afficher();
carre.afficher();

// Classe Point
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

// Classe Segment
class Segment {
    constructor(x1, y1, x2, y2) {
        this.orig = new Point(x1, y1);
        this.extrem = new Point(x2, y2);
    }
}

// Test Segment
let seg = new Segment(1, 2, 4, 6);
console.log(seg);
