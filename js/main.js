'use strict';

var WIDTH = 900;
var HEIGHT = 592;

var Strings = TextModules.EN;

var Game;

window.onload = function() {
    Game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, "gameDiv");

    Game.state.add("load", load);
    Game.state.add("title", title);
    Game.state.add("intro", intro);
    Game.state.add("choose", choose);
    // Game.state.add("find_fix", find_fix);
    Game.state.add("PPLevelSelect", PPLevelSelect);

    Game.state.start("load");
};
