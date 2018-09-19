'use strict';

var WIDTH = 900;
var HEIGHT = 592;

var CLOUD_SPEED = 0.0003;
var CLOUD_MARGIN = 0.5;
var clouds = [
    { x: 0.02, y: 0.04 },
    { x: 0.66, y: 0.18 },
    { x: -0.98, y: 0.04 },
    { x: -0.44, y: 0.18 },
];

var game;

window.onload = function() {
    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, "gameDiv");

    game.state.add("load", load);
    game.state.add("title", title);

    game.state.start("load");
};
