const { inherits } = require("./utils.js");
const Util = require("./utils.js");

class Asteroid {

    constructor(object) {
        this.pos = object.pos;
        this.color = this.color || "#00FF00";
        this.radius = this.radius || 8;
        this.vel = randomVec();
    }

    

}

inherits(Asteroid, MovingObject)
module.exports = Asteroid;