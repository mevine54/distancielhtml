function copierSelection() {
    // Récupération de tous les boutons radio nommés "choix"
    var radios = document.getElementsByName("choix");
    
    // Parcours du tableau de boutons radio
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            // Si le bouton radio est sélectionné, on met sa valeur dans le champ texte
            document.getElementById("resultat").value = radios[i].value;
            break;
        }
    }
}