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
                if (typeof this.map[i, j] == 'undefined') continue;
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