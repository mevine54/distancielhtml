// Fonction de validation du texte saisi
/* function verifierSaisie() {
    var texte = document.getElementById("champTexte").value;
    if (texte.length < 2) {
        alert("Le texte doit contenir au moins 2 caractères !");
        return false; // Empêche la soumission du formulaire
    } else {
        alert("Texte saisi : " + texte + "\nLe formulaire va être soumis.");
        return true; // Autorise la soumission
    }
} */

/* window.onload = function() {
    var btn = document.getElementById("btnValider"); */

    // Méthode 2 : Affectation de la propriété onclick du DOM
    // Décommentez ci-dessous pour tester cette méthode
    /*
    btn.onclick = function() {
        return verifierSaisie();
    };
    */

    // Méthode 3 : addEventListener
    // Décommentez ci-dessous pour tester cette méthode
    /*
    btn.addEventListener('click', function(evt) {
        // Si la vérification échoue, on empêche la soumission du formulaire
        if (!verifierSaisie()) {
            evt.preventDefault();
        }
    });
    */
/* }; */


/* variantes */

var emailRegex = /^[A-Za-z0-9_][A-Za-z0-9_.]*@[A-Za-z0-9_]+(\.[A-Za-z0-9_]+)+$/;

        function verifierEmail() {
            var champ = document.getElementById("email");
            var email = champ.value.trim();
            var erreur = document.getElementById("erreurEmail");
            erreur.textContent = ""; // On réinitialise le message d'erreur

            if (email.length < 1) {
                // Règle 1 : saisie obligatoire (normalement déjà gérée par required)
                erreur.textContent = "L'adresse email est obligatoire.";
                return false;
            }

            // Test de la regex
            if (!emailRegex.test(email)) {
                erreur.textContent = "L'adresse email ne respecte pas le format requis.";
                return false;
            }

            // Si on passe tous les tests
            alert("Adresse valide: " + email + "\nLe formulaire va être soumis.");
            return true;
        }

        window.onload = function() {
            var form = document.getElementById("formEmail");
            var btn = document.getElementById("btnValider");

            // Attachement de l'événement sur le bouton de soumission du formulaire
            // On empêche la soumission si la vérification échoue.
            btn.addEventListener('click', function(evt) {
                if (!verifierEmail()) {
                    evt.preventDefault();
                }
            });
        };