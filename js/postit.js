(function() {
    var postIt = document.getElementById('postIt');
    var afficheButton = document.getElementById('afficheButton');
    var cacheButton = document.getElementById('cacheButton');
    var interactiveText = document.querySelector('.interactive-text');

    afficheButton.addEventListener('click', function() {
        postIt.style.visibility = 'visible';
        postIt.innerHTML = "Bouton 'Affiche' cliqué !";
    });

    cacheButton.addEventListener('click', function() {
        postIt.style.visibility = 'hidden';
    });

    interactiveText.addEventListener('mouseover', function() {
        postIt.style.visibility = 'visible';
        postIt.innerHTML = "C’est gentil de me survoler...";
    });

    interactiveText.addEventListener('mouseout', function() {
        postIt.style.visibility = 'hidden';
    });
})();
