/*
    Music Gamers' Almanac ver.5 Application, by Naoki Rinmous, MIT licensed.
*/

function createBalloon(text, timeout) {
    var root = document.getElementById("balloon-target");
    var child = document.createElement("div");
    child.setAttribute("class", "balloon");
    child.innerHTML = text;
    root.appendChild(child);
    setTimeout(function () {
        root.removeChild(child);
    }, timeout);
}

function loadScript(path) {
    var child = document.createElement("script");
    child.setAttribute("src", path + "?r=" + Math.random());
    document.getElementsByTagName("body")[0].appendChild(child);
}

createBalloon("initializing almanac ver.5", 3000);
createBalloon("load almanac dictionary", 3000);
loadScript("dictionary.js");
