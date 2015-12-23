document.addEventListener("DOMContentLoaded", function () {
    (function (global) {
        var c = document.getElementById("map");
        var ctx = c.getContext("2d");
        var rate = 20;
        var map = window.God.createMap(c.clientWidth, c.clientHeight, rate);

        for (var i = 0 ; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                if (!!map[i][j]) {
                    console.log('false')                                        
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

$(document).ready(function () {
   $("[name='enable']").bootstrapSwitch();
});