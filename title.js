if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "F", "Fu", "Fuc", "Fuck", "FuckW", "FuckWa", "FuckWar", "FuckWare", "FuckWar", "FuckWa", "FuckW", "FuckW", "Fuck", "Fuc", "Fu", "F"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
