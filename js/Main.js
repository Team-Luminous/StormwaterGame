'use strict';

var WIDTH = 900;
var HEIGHT = 592;

var Game;
window.onload = function() {
    Game = new Phaser.Game(WIDTH, HEIGHT, Phaser.AUTO, "gameDiv");

    Game.state.add("BootState", BootState);
    Game.state.add("LoadState", LoadState);
    Game.state.add("TitleState", TitleState);
    Game.state.add("IntroState", IntroState);
    Game.state.add("ChooseGameState", ChooseGameState);
    Game.state.add("PauseState", PauseState);

    Game.state.add("PPIntroState", PPIntroState);
    Game.state.add("PPQuestionState", PPQuestionState);
    Game.state.add("PPRainState", PPRainState);
    Game.state.add("PPResultState", PPResultState);
    Game.state.add("PPScoreState", PPScoreState);
    Game.state.add("PPLevelSelectState", PPLevelSelectState);

    Game.state.add("FFIntroState", FFIntroState);
    Game.state.add("FFGameState", FFGameState);
    Game.state.add("FFScoreState", FFScoreState);

    Game.state.start("BootState");
};
