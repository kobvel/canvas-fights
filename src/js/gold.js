//проверить состояние голды на карте
//если голды меньше чем 20 ячеек добавить 10 ячеек




var curMap = God.createMap(100,50,10);
console.log(curMap);



function addEl(map,loops){
    var min = 0;
    var maxX = map.length;
    var maxY = map[1].length;



    for(var i=0; i < loops; i++){

        var coordinates = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(coordinates);


    }



}

addEl(100,10,2);

function parseMap(map){
        var freeCoordinats = [];
        var rows = map.length;
        console.log('columns = '+columns);
        var columns = map[1].length;
        console.log('rows = '+rows);


    for (var i = 0; i < columns; i++) {

        console.log(map[i]);


        for (var j = 0; j < rows; j++) {

            console.log(map[i][j]);
            if (map[i][j] == 0) {
                freeCoordinats.push(map[i][j]);
            }
        }

    }
    console.log(freeCoordinats);
    return freeCoordinats;
    //for (var i = 0; i < 1; i++) {
    //    console.log(map[1][1].length);
    //}
            //console.log('colums = '+colums);
            //console.log('rows = '+rows);


    //for (var i = 0; i < map.length; i++) {
    //    console.log(map[i]);
    //    for (var j = 0; j < map[i].length; j++) {
    //
    //    }
    //}
}

function parseMap(map){
    var freeCoordinats = [];
    var rows = map.length;
    console.log('columns = '+columns);
    var columns = map[1].length;
    console.log('rows = '+rows);


    for (var i = 0; i < rows; i++) {

        console.log(map[i]);


        for (var j = 0; j < columns; j++) {

            console.log(map[i][j]);
            if (map[i][j] == 0) {
                freeCoordinats.push(map[i][j]);
            }
        }

    }
    console.log(freeCoordinats);
    return freeCoordinats;
    //for (var i = 0; i < 1; i++) {
    //    console.log(map[1][1].length);
    //}
    //console.log('colums = '+colums);
    //console.log('rows = '+rows);


    //for (var i = 0; i < map.length; i++) {
    //    console.log(map[i]);
    //    for (var j = 0; j < map[i].length; j++) {
    //
    //    }
    //}
}

var loop = parseMap(map);










