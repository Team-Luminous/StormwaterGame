'use strict';

var game;

window.onload = function() {
    game = new Phaser.Game(1024, 672, Phaser.AUTO, "gameDiv");

    game.state.add("load", load);
    game.state.add("title", title);

    game.state.start("load");
};
