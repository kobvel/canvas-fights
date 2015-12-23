(function (global) {
    var map_matrix = [];
    var c = document.getElementById("map");
    var ctx = c.getContext("2d");

    console.log(c.clientWidth);
    var rows = Math.floor(c.clientHeight / 20);
    var columns = Math.floor(c.clientWidth / 20);


    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if ((i + j) / 3 % 5 === 0) {
                map_matrix[i] = map_matrix[i] || [];
                map_matrix[i][j] = {};
            } else {
                map_matrix[i] = map_matrix[i] || [];
                map_matrix[i][j] = 0;
            }
        }
    }

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            if (map_matrix[i][j] === 0) {
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(i * 20, j * 20, 20, 20);
            } else {
                ctx.fillStyle = "#FFF11F";
                ctx.fillRect(i * 20, j * 20, 20, 20);
            }
        }
    }


})(window);