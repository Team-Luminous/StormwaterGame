'use strict';

var game;

window.onload = function() {
    var gameConfig = {
        type: Phaser.AUTO,
        width: 1024,
        height: 672,
        parent: "gameDiv",
        backgroundColor: 0x000000,
        scene: [load, title]
    };
    game = new Phaser.Game(gameConfig);
}