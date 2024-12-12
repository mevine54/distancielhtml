function copierTexte() {
    // Récupére tous les radio-buttons avec le nom "choix"
    var radioButtons = document.getElementsByName('choix');
    var champTexte = document.getElementById('champTexte');

    // Parcourt les radio-buttons pour trouver celui qui est sélectionné
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // Copie le texte du radio-button sélectionné dans le champ texte
            champTexte.value = radioButtons[i].value;
            break;
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var boutonChoix = document.getElementById('boutonChoix');
    boutonChoix.addEventListener('click', copierTexte);
});

/* function copierTexte() {
    var radioButtons = document.getElementsByName('choix');
    var champTexte = document.getElementById('champTexte');

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            champTexte.value = radioButtons[i].value;
            break;
        }
    }
} */
