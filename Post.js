class Post {
    constructor(title, description, authorId, date = new Date().toLocaleString()) {
        this.title = title;
        this.description = description;
        this.authorId = authorId;
        this.date = date;
    }

    // Convertir un objet en JSON
    toJSON() {
        return {
            title: this.title,
            description: this.description,
            authorId: this.authorId,
            date: this.date
        };
    }

    // Convertir JSON en objet Post
    static fromJSON(data) {
        return new Post(data.title, data.description, data.authorId, data.date);
    }
}
