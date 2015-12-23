document.addEventListener("DOMContentLoaded", function() {
  (function (global) {
      var map_matrix = [];
      var c = document.getElementById("map");
      var ctx = c.getContext("2d");
      var rate = 20;
      console.log(c.clientWidth);
      var rows = Math.floor(c.clientHeight / rate);
      var columns = Math.floor(c.clientWidth / rate);
      console.log(global);
      var map = window.God.createMap(columns, rows,rate);
      console.log(map);
          for(var i; i<map.length;map++){
            for(var j; j< map[i].length;j++){
              if (map[i][j] === 0) {
                       ctx.fillStyle = "#FF0000";
                       ctx.fillRect(i * rate, j * rate, rate, rate);
                   } else {
                       ctx.fillStyle = "#FFF11F";
                       ctx.fillRect(i * rate, j * rate, rate, rate);
                   }
            }
          }
      // for (var i = 0; i < rows; i++) {
      //     for (var j = 0; j < columns; j++) {
      //         if ((i + j) / 3 % 5 === 0) {
      //             map_matrix[i] = map_matrix[i] || [];
      //             map_matrix[i][j] = {};
      //         } else {
      //             map_matrix[i] = map_matrix[i] || [];
      //             map_matrix[i][j] = 0;
      //         }
      //     }
      // }
      // for (var i = 0; i < rows; i++) {
      //     for (var j = 0; j < columns; j++) {
      //         if (map_matrix[i][j] === 0) {
      //             ctx.fillStyle = "#FF0000";
      //             ctx.fillRect(i * 20, j * 20, 20, 20);
      //         } else {
      //             ctx.fillStyle = "#FFF11F";
      //             ctx.fillRect(i * 20, j * 20, 20, 20);
      //         }
      //     }
      // }
  })(window);
});