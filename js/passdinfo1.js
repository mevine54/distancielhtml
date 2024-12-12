/* page1 */

function allerPage2() {
    var texte = document.getElementById("texte").value;
    var nombre = document.getElementById("nombre").value;
    
    // Encodage URI pour éviter les problèmes de caractères spéciaux
    var texteEncode = encodeURI(texte);
    var nombreEncode = encodeURI(nombre);
    
    // Construction de l'URL avec paramètres
    var url = "passdinfo2.html?cle1=" + texteEncode + "&cle2=" + nombreEncode;
    
    // Redirection vers la page 2
    // location.href = url; // ajoute une entrée dans l'historique
    location.replace(url);  // n'ajoute pas d'entrée dans l'historique
}


/* page2 */

