(function (global) {
    function Map_Object(type, x, y, fraction) {
        this.type = type;
        this.coordinateX = x;
        this.coordinateY = y;
        this.fraction = fraction;
    }

    function BaseModel(hp, gold) {
        Map_Object.apply(this, arguments);
        this.hp = hp;
        this.goldAmount = gold;
        this.runActions = [];
        this.activeSlaves = [];
    }

    BaseModel.prototype = Object.create(Map_Object.prototype);
    BaseModel.prototype.constructor = BaseModel;

    BaseModel.prototype.createWorker = function () {
        this.activeSlaves.push(new Worker(100, 5)); /*hp = 100, attack = 5*/
        return this.activeSlaves[this.activeSlave.length - 1];
    };

    BaseModel.prototype.createWarrior = function () {
        this.activeSlaves.push(new Warrior(100, 5));
        return this.activeSlaves[this.activeSlave.length - 1];
    };
})(window);