document.addEventListener("DOMContentLoaded", function () {
    const addPostBtn = document.getElementById("add-post-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const addPostForm = document.getElementById("add-post-form");
    const postsContainer = document.getElementById("posts-container");
    const container = document.querySelector(".container");

    // Vérifier si l'utilisateur est connecté
    function checkAuth() {
        return User.getLoggedInUser() !== null;
    }

    // Afficher le formulaire si connecté, sinon demander de se connecter
    addPostBtn.addEventListener("click", function () {
        if (!checkAuth()) {
            alert("Vous devez être connecté pour ajouter un post.");
            return;
        }

        container.classList.add("hidden-form");
        addPostForm.classList.remove("hidden");
        cancelBtn.classList.remove("hidden");
    });

    // Cacher le formulaire et réafficher les posts
    cancelBtn.addEventListener("click", function () {
        container.classList.remove("hidden-form");
        addPostForm.classList.add("hidden");
        cancelBtn.classList.add("hidden");
    });

    // Gestion de l'ajout de post
    addPostForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = addPostForm.querySelector("input[name='title']").value.trim();
        const description = addPostForm.querySelector("textarea[name='description']").value.trim();
        const user = User.getLoggedInUser();

        if (!user) {
            alert("Erreur : vous devez être connecté pour poster.");
            return;
        }

        if (!title || !description) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const newPost = new Post(title, description, user.id);
        const posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.unshift(newPost.toJSON());
        localStorage.setItem("posts", JSON.stringify(posts));

        displayPosts();

        addPostForm.reset();
        container.classList.remove("hidden-form");
        addPostForm.classList.add("hidden");
        cancelBtn.classList.add("hidden");
    });

    // Fonction pour afficher les posts
    function displayPosts() {
        postsContainer.innerHTML = "";
        const posts = JSON.parse(localStorage.getItem("posts")) || [];

        if (posts.length === 0) {
            postsContainer.innerHTML = "<p>Aucun post disponible.</p>";
            return;
        }

        posts.forEach((postData, index) => {
            const post = Post.fromJSON(postData);
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <small>Publié le : ${post.date}</small>
                <button class="delete-btn" data-index="${index}">Supprimer</button>
            `;
            postsContainer.appendChild(postElement);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                deletePost(this.getAttribute("data-index"));
            });
        });
    }

    // Fonction pour supprimer un post
    function deletePost(index) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.splice(index, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        displayPosts();
    }
    
    displayPosts();
    
});
