/*
    Music Gamers' Almanac ver.5 Application, by Naoki Rinmous, MIT licensed.
*/

var COUNT_POSITIVE = 4;
var COUNT_NEGATIVE = 4;

function createAlmanac(target, img_url, text, reason) {
    var div = document.createElement("div");
    div.setAttribute("class", "almanac-item");

    var img = document.createElement("img");
    img.setAttribute("src", img_url);
    div.appendChild(img);

    var h3 = document.createElement("h3");
    h3.innerHTML = text;
    div.appendChild(h3);

    var p = document.createElement("p");
    p.innerHTML = reason;
    div.appendChild(p);

    document.getElementById(target).appendChild(div);
}

(function () {
    var today = new Date();
    var seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

    function randomQuery(index) {
        var n = seed % 104729;
        for (var i = 0; i < 1024 + index; i++)
            n = (n * n) % 104729;
        return n;
    }

    document.getElementById("app-today-date-placeholder").innerHTML =
        today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日";

    var dateimg = td_images[randomQuery(0) % td_images.length];
    document.getElementById("app-today-date-image").setAttribute("src",
        "http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/td/" + dateimg + ".gif");
    createBalloon("today-date-image = " + dateimg, 1000);

    var direction = machine_directions[randomQuery(0) % machine_directions.length];
    document.getElementById("app-today-machine-direction").innerHTML = direction;

    var i, r, rimg;
    for (i = 1; i <= COUNT_POSITIVE; i++) {
        r = randomQuery(i) % almanac_items.length;
        rimg = randomQuery(i) % 54 + 1;
        createAlmanac("almanac-positive",
            "http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/ac/" + rimg + ".gif",
            almanac_items[r].title, almanac_items[r].reason[0]);
        almanac_items.splice(r, 1);
    }
    for (i = 1; i <= COUNT_NEGATIVE; i++) {
        r = randomQuery(i) % almanac_items.length;
        rimg = randomQuery(i) % 54 + 1;
        createAlmanac("almanac-negative",
            "http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/ac/" + rimg + ".gif",
            almanac_items[r].title, almanac_items[r].reason[1]);
        almanac_items.splice(r, 1);
    }

    createBalloon("content ready :) enjoy", 5000);
})();