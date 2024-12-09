(function() {
    // Variables globales
    var chronoDisplay = document.getElementById('chrono');
    var startButton = document.getElementById('startButton');
    var pauseButton = document.getElementById('pauseButton');
    var stopButton = document.getElementById('stopButton');
    var timer;
    var tpsEcoule = 0;
    var startTime;

    // Fonction pour ajouter un zéro devant les nombres inférieurs à 10
    function ajouteUnZero(temps) {
        return (temps < 10 ? '0' : '') + temps;
    }

    // Fonction pour démarrer le chronomètre
    function startChrono() {
        startButton.removeEventListener('click', startChrono);
        startButton.classList.add('hidden'); 
        pauseButton.classList.remove('hidden');
        stopButton.classList.remove('hidden');

        startTime = new Date();
        timer = setInterval(function() {
            var seconds = Math.round((new Date().getTime() - startTime.getTime()) / 1000 + tpsEcoule);
            var hours = parseInt(seconds / 3600);
            seconds = seconds % 3600;
            var minutes = parseInt(seconds / 60);
            seconds = seconds % 60;

            chronoDisplay.innerHTML = ajouteUnZero(hours) + ":" + ajouteUnZero(minutes) + ":" + ajouteUnZero(seconds);
            tpsEcoule += 1;
        }, 1000);
    }

    // Fonction pour mettre en pause le chronomètre
    function pauseChrono() {
        clearInterval(timer);
        pauseButton.paramTps = tpsEcoule;
        pauseButton.removeEventListener('click', pauseChrono);
        pauseButton.addEventListener('click', function() {
            startChrono();
        });
    }

    // Fonction pour arrêter le chronomètre
    function stopChrono() {
        clearInterval(timer);
        pauseButton.removeEventListener('click', pauseChrono);
        stopButton.removeEventListener('click', stopChrono);
        startButton.addEventListener('click', startChrono);
        tpsEcoule = 0;
        chronoDisplay.innerHTML = "00:00:00";
        pauseButton.classList.add('hidden');
        stopButton.classList.add('hidden');
        startButton.classList.remove('hidden');
    }

    // Ajouter les événements aux boutons
    startButton.addEventListener('click', startChrono);
    pauseButton.addEventListener('click', pauseChrono);
    stopButton.addEventListener('click', stopChrono);
})();
