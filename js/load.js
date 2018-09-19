'use strict';

var load = {
    preload: function() {
        game.load.image("background_1", "assets/background_1.png");
        game.load.image("cloud_1", "assets/cloud_1.png");
        game.load.image("cloud_2", "assets/cloud_2.png");
        game.load.image("title_prevents", "assets/title_prevents.png");
        game.load.image("title_professor", "assets/title_professor.png");
        game.load.image("professor_left", "assets/professor_left.png");
        game.load.spritesheet("button_play", "assets/button_play.png", 116, 116);
    },
    create: function() {
        game.state.start("title");
    }
};