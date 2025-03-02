#  Exercices POO en JavaScript et le Mini Blog 

## Description

Ces travaux pratiques sont des implémentations en JavaScript orientée objet qui couvre plusieurs concepts de la POO tout en intégrant un mini blog interactif.
Il s'inscrit dans le cadre de l'atelier 2 de POO en JavaScript et vise à répondre aux exigences suivantes :

1. **Manipulation des objets en JavaScript** : Création de classes avec des constructeurs et des méthodes.
2. **Héritage et polymorphisme** : Implémentation de classes dérivées et surcharge de méthodes.
3. **Gestion des objets JSON** : Conversion des classes en JSON et inversement.
4. **Mini Blog interactif** : Gestion des utilisateurs et des publications.

---

## Fonctionnalités

### 1. Gestion des Voitures (Exercice 1)

Cet exercice met en place un système de gestion de voitures en utilisant la POO :
- **Classe `Voiture`** : représente une voiture avec les attributs `model`, `marque`, `année`, `type` et `carburant`.
- **Héritage** :
  - `Hyundai` hérite de `Voiture` et ajoute des attributs `série` et `hybride` (booléen). Elle possède aussi la méthode `alarmer()`.
  - `Ford` hérite également de `Voiture` et ajoute un tableau `options`.
- **Tri et affichage** :
  - Les voitures sont stockées dans un tableau et triées par année de fabrication.
  - Affichage des voitures sous forme de texte via `toString()`.

### 2. Gestion des Étudiants et Professeurs (Exercice 2)

Dans cette partie, nous manipulons des objets représentant des personnes dans un cadre académique :
- **Classe `Etudiant`** : contient les attributs `nom`, `prenom`, `age`, `cne` et possède la méthode `etudier()`.
- **Classe `Professeur`** : contient les attributs `nom`, `age`, `cin` et possède la méthode `enseigner()`.
- **Tri des étudiants** :
  - Les étudiants sont stockés dans un tableau et triés par ordre alphabétique en utilisant `localeCompare()`.
  - Affichage des informations des étudiants triés.

### 3. Manipulation des Structures Géométriques (Exercice 3)

Cet exercice met en place des structures géométriques en utilisant des classes :
- **Classe `Vecteur2D`** :
  - Définit un vecteur avec les coordonnées `(x, y)`.
  - Permet d’additionner deux vecteurs et de les afficher.
- **Classe `Rectangle` et `Carre`** :
  - `Rectangle` possède `longueur` et `largeur` et une méthode `surface()`.
  - `Carre` hérite de `Rectangle` et impose une égalité entre `longueur` et `largeur`.
- **Classe `Point` et `Segment`** :
  - `Point` représente un point `(x, y)`.
  - `Segment` est une composition de deux `Point` pour définir une ligne.
  - `Segment` affiche ses points de départ et d’arrivée.

### 4. Mini Blog (Exercice 4)

Le mini blog est une application web qui permet à des utilisateurs de créer et gérer des posts.

#### **Fichiers et leur rôle :**
- **`index.html`** : Page principale affichant les posts et permettant d'en ajouter.
- **`signup.html`** : Formulaire d’inscription.
- **`login.html`** : Formulaire de connexion.
- **`style.css`** : Feuille de style pour la mise en page.
- **`User.js`** :
  - Gère l'inscription et la connexion des utilisateurs.
  - Stocke les informations des utilisateurs dans `localStorage`.
- **`Post.js`** :
  - Définit la classe `Post` avec les propriétés `title`, `description`, `authorId` et `date`.
  - Convertit les posts en JSON pour stockage.
- **`script.js`** :
  - Gère l'affichage des posts et leur gestion (ajout, suppression).
  - Vérifie si un utilisateur est connecté avant d’autoriser l’ajout d’un post.
  - Sauvegarde les posts dans `localStorage`.

---

## Technologies utilisées

- **Langage** : JavaScript (ES6),la nouvelle version du langage JavaScript. Elle apporte un lot conséquent de nouveautés, de l'ajout de nouvelles fonctions à la bibliothèque standard, à plusieurs nouvelles syntaxes, dont les classes, les modules et bien plus encore.
- **Stockage** : JSON avec `localStorage`
- **Interface utilisateur** : HTML, CSS

---

## Installation et exécution

1. **Cloner le dépôt**
   ```sh
   git clone https://github.com/Lorraine301/Atelier2_Javascript_POO.git
   ```
2. **Ouvrir le projet dans un navigateur**
   - Ouvrez le fichier `index.html` avec un navigateur.

---

## Utilisation

- **Créer un compte** : Accédez à `signup.html` et enregistrez-vous.
- **Se connecter** : Allez sur `login.html` et entrez vos identifiants.
- **Ajouter un post** : Une fois connecté, ajoutez un post depuis la page principale.
- **Gérer les posts** : Affichage et suppression des posts disponibles.

---

## Auteur

Travaux réalisés dans le cadre de l'atelier 2 sur JavaScript et la POO.

---

## Licence

Cet Atelier est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## Remerciements

Merci à notre Professeur de la Technologie Web 2, Monsieur Lotfi EL AACHAK, pour son encadrement afin de réaliser ces travaux pratiques.


