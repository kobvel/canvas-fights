document.addEventListener("DOMContentLoaded", function () {
    (function (global) {
        var map_matrix = [];
        var c = document.getElementById("map");
        var ctx = c.getContext("2d");
        var rate = 20;
        var map = window.God.createMap(c.clientWidth, c.clientHeight, rate);

        console.log(map);
        for (var i; i < map.length; map++) {
            for (var j; j < map[i].length; j++) {
                if (!!map[i][j]) {
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(i * rate, j * rate, rate, rate);
                } else {
                    ctx.fillStyle = "#FFF11F";
                    ctx.fillRect(i * rate, j * rate, rate, rate);
                }
            }
        }
   
    })(window);
});