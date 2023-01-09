console.log("Webpack is good");

const Asteroid = require("./asteroid.js");
const MovingObject = require("./moving_object.js");


window.MovingObject = MovingObject;

const canvasEl = document.getElementById("canvas");
const ctx = canvasEl.getContext("2d");

// const ast = new Asteroid({
//     pos: [90, 90]
// })

// ast.draw(ctx);

const mo1 = new MovingObject({
    pos: [30, 30],
    vel: [10, 10],
    radius: 10,
    color: "#FF0031"
});

const mo2 = new MovingObject({
    pos: [50, 50],
    vel: [20, 20],
    radius: 8,
    color: "#FF0000"
});

const mo3 = new MovingObject({
    pos: [60, 70],
    vel: [20, 20],
    radius: 8,
    color: "#FF0FFF"
});

mo1.draw(ctx);
mo2.draw(ctx);
mo3.draw(ctx);


mo1.move();
mo2.move();
mo3.move();