'use strict';

var WIDTH = 900;
var HEIGHT = 592;

var Game;
window.onload = function() {
    Game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, "gameDiv");

    Game.state.add("load", load);
    Game.state.add("title", title);
    Game.state.add("intro", intro);
    Game.state.add("choose", choose);
    Game.state.add("ppquestion", ppquestion);

    Game.state.start("load");
};
