/**
 * Created by js on 12/23/15.
 */
(function (window) {

    var God = {
        map: null,
        day: 0,
        actionStack: []
    };

    God.createMap = function (width, height, rate) {
        var localMap = [];
        var x = Math.ceil(height / rate);
        var y = Math.ceil(width / rate);

        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                localMap[i] = localMap[i] || [];
                localMap[i][j] = 0;
            }
        }
        this.map = localMap;
        return localMap;
    };

    God.setObject = function (obj, x, y) {
        var res = true;
        if (this.map[x][y]) {
            console.log ('The place is reserved');
            res = false;
        } else {
            this.map[x][y] = obj;
        }
        return res;

    };

    God.explorePosition = function (x, y) {
        var res = [];
        var k = 0;
        for (var i = x - 1; i < x + 2; i++) {
            for (var j = y - 1; j < y + 2; j++) {
                if (typeof this.map[i, j] == 'undefined' || (x == i && y == j)) continue;
                res[k] = {
                    x: i,
                    y: j,
                    item: this.map[i, j]
                };
                k++;
            }
        }
        return res;
    };

    God.takeGold = function (pers_x, pers_y, targ_x, targ_y) {
        var res = true;
        if (Math.abs(pers_x - targ_x) == 1 && Math.abs(pers_y - targ_y) == 1 && this.map[targ_x, targ_y]['type'] === 'gold') {
            console.log ('Actor took 1pt of gold');
            this.map[targ_x, targ_y] = 0;
        } else {
            console.log ('There are no gold here');
            res = false;
        }
        return res;
    };


    /*var map = (function () {
     var instance;
     function createInstance() {
     var object = new CreateMap();
     return object;
     }
     return {
     getInstance: function () {
     if (!instance) {
     instance = createInstance();
     }
     return instance;
     }
     };
     })(window);*/


    window.God = God;
})(window);