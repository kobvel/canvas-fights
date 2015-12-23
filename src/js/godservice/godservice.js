/**
 * Created by js on 12/23/15.
 */
(function (window) {

    var God = {
        map: null
    };

    God.CreateMap = function (width, height, rate) {
        var localMap = [];
        var x = Math.ceil (height / rate);
        var y = Math.ceil (width / rate);

        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                localMap[x][y] = 0;
            }
        }
        this.map = localMap;
        return localMap;
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
})();