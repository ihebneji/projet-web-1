// Partie 1 : Validation au clic sur le bouton
function validerFormulaire() {
    const title = document.getElementById("title").value;
    const destination = document.getElementById("destination").value;
    const departureDate = document.getElementById("departureDate").value;
    const returnDate = document.getElementById("returnDate").value;
    const price = document.getElementById("price").value;

    let isValid = true;

    if (title.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        isValid = false;
    }

    if (!/^[A-Za-zÀ-ÿ ]{3,}$/.test(destination)) {
        alert("La destination doit contenir uniquement des lettres et des espaces.");
        isValid = false;
    }

    if (new Date(returnDate) <= new Date(departureDate)) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        isValid = false;
    }

    if (price <= 0) {
        alert("Le prix doit être un nombre positif.");
        isValid = false;
    }

    if (isValid) {
        alert("Formulaire validé avec succès !");
        return true;
    } else {
        return false;
    }
}

// Partie 2 : Validation à l'envoi du formulaire
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi si erreurs

    let isValid = true;

    // Réinitialisation des messages d'erreur
    document.getElementById("title-error").textContent = "";
    document.getElementById("destination-error").textContent = "";
    document.getElementById("departureDate-error").textContent = "";
    document.getElementById("returnDate-error").textContent = "";
    document.getElementById("price-error").textContent = "";

    // Validation pour le titre
    const title = document.getElementById("title").value;
    if (title.length < 3) {
        document.getElementById("title-error").textContent = "Le titre doit contenir au moins 3 caractères.";
        isValid = false;
    }

    // Validation pour la destination
    const destination = document.getElementById("destination").value;
    if (!/^[A-Za-zÀ-ÿ ]{3,}$/.test(destination)) {
        document.getElementById("destination-error").textContent = "Destination invalide.";
        isValid = false;
    }

    // Validation pour la date de départ
    const departureDate = document.getElementById("departureDate").value;
    if (departureDate === "") {
        document.getElementById("departureDate-error").textContent = "La date de départ est requise.";
        isValid = false;
    }

    // Validation pour la date de retour
    const returnDate = document.getElementById("returnDate").value;
    if (returnDate === "" || new Date(returnDate) <= new Date(departureDate)) {
        document.getElementById("returnDate-error").textContent = "La date de retour doit être après la date de départ.";
        isValid = false;
    }

    // Validation pour le prix
    const price = document.getElementById("price").value;
    if (price <= 0) {
        document.getElementById("price-error").textContent = "Le prix doit être un nombre positif.";
        isValid = false;
    }

    if (isValid) {
        alert("Formulaire validé avec succès !");
        this.submit(); // Envoi
    }
});

// Partie 3 : Validation en temps réel
document.getElementById("title").addEventListener("keyup", function () {
    const errorSpan = document.getElementById("title-error");
    if (this.value.length < 3) {
        errorSpan.textContent = "Le titre doit contenir au moins 3 caractères.";
        errorSpan.style.color = "red";
    } else {
        errorSpan.textContent = "Correct";
        errorSpan.style.color = "green";
    }
});

document.getElementById("destination").addEventListener("keyup", function () {
    const errorSpan = document.getElementById("destination-error");
    if (!/^[A-Za-zÀ-ÿ ]{3,}$/.test(this.value)) {
        errorSpan.textContent = "La destination doit contenir au moins 3 caractères.";
        errorSpan.style.color = "red";
    } else {
        errorSpan.textContent = "Correct";
        errorSpan.style.color = "green";
    }
});

document.getElementById("departureDate").addEventListener("change", function () {
    const errorSpan = document.getElementById("departureDate-error");
    if (this.value === "") {
        errorSpan.textContent = "La date de départ est requise.";
        errorSpan.style.color = "red";
    } else {
        errorSpan.textContent = "Correct";
        errorSpan.style.color = "green";
    }
});

document.getElementById("returnDate").addEventListener("change", function () {
    const errorSpan = document.getElementById("returnDate-error");
    const departureDate = document.getElementById("departureDate").value;
    if (this.value === "" || new Date(this.value) <= new Date(departureDate)) {
        errorSpan.textContent = "La date de retour doit être après la date de départ.";
        errorSpan.style.color = "red";
    } else {
        errorSpan.textContent = "Correct";
        errorSpan.style.color = "green";
    }
});

document.getElementById("price").addEventListener("input", function () {
    const errorSpan = document.getElementById("price-error");
    const price = parseFloat(this.value);
    if (isNaN(price) || price <= 0) {
        errorSpan.textContent = "Le prix doit être un nombre positif.";
        errorSpan.style.color = "red";
    } else {
        errorSpan.textContent = "Correct";
        errorSpan.style.color = "green";
    }
});
