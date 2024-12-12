function affichePostit(message) {
    var postIt = document.getElementById("postIt");
    postIt.innerHTML = message;
    postIt.style.visibility = "visible";
}

function cachePostit() {
    var postIt = document.getElementById("postIt");
    postIt.style.visibility = "hidden";
}