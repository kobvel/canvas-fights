document.addEventListener("DOMContentLoaded", function () {
    (function (global) {
        var c = document.getElementById("map");
        var ctx = c.getContext("2d");
        var rate = 20;
        var map = window.God.createMap(c.clientWidth, c.clientHeight, rate);
        map[15][25] = { type: 'gold' };
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (map[i][j] === 0) {
                    ctx.fillStyle = "#003300";
                    ctx.fillRect(i * rate, j * rate, rate, rate);
                } else if (map[i][j].type === 'gold') {
                    var source = new Image();
                    source.onload = function () { ctx.drawImage(source, i, j, rate, rate); };
                    source.src = 'static/cool-spices.svg';
                    source.width = rate;
                    source.height = rate;
                    console.log(source);
                    //ctx.drawImage(source, 0, 0);
                }
            }
        }

    })(window);
});