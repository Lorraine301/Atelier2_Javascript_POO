
class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // Convertir un objet User en JSON
    toJSON() {
        return {
            id: this.id,
            username: this.username,
            password: this.password
        };
    }

    // Convertir JSON en objet User
    static fromJSON(data) {
        return new User(data.id, data.username, data.password);
    }

    // Enregistrer un utilisateur dans localStorage
    static register(username, password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        // Vérifier si l'utilisateur existe déjà
        if (users.some(user => user.username === username)) {
            alert("Ce nom d'utilisateur est déjà pris !");
            return false;
        }

        const newUser = new User(users.length + 1, username, password);
        users.push(newUser.toJSON());
        localStorage.setItem("users", JSON.stringify(users));
        alert("Compte créé avec succès ! Connectez-vous maintenant.");
        return true;
    }

    // Vérifier si un utilisateur existe
    static login(username, password) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert("Connexion réussie !");
            return true;
        } else {
            alert("Nom d'utilisateur ou mot de passe incorrect !");
            return false;
        }
    }

    // Récupérer l'utilisateur connecté
    static getLoggedInUser() {
        return JSON.parse(localStorage.getItem("loggedInUser"));
    }
}

