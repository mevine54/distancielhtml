window.onload = function() {
    // Récupération de la partie après le '?'
    var queryString = window.location.search; // Ex: ?cle1=VAL1&cle2=VAL2
    
    // Retire le '?' initial
    var paramString = queryString.substring(1);
    
    // Split sur '&' pour avoir chaque paire "clé=valeur"
    var paramsArray = paramString.split("&");
    
    var cle1 = "";
    var cle2 = "";
    
    // Parcours du tableau pour récupérer les valeurs
    for (var i = 0; i < paramsArray.length; i++) {
        var pair = paramsArray[i].split("=");
        var cle = pair[0];
        var valeur = pair[1];
        
        // Décodage URI de la valeur
        valeur = decodeURI(valeur);
        
        if (cle === "cle1") {
            cle1 = valeur;
        } else if (cle === "cle2") {
            cle2 = valeur;
        }
    }
    
    // Affichage dans la page
    document.getElementById("resultat").textContent = "Texte saisi : " + cle1 + " | Nombre saisi : " + cle2;
};