'use strict';

var load = {
    preload: function() {
        game.load.image("titleImages", "assets/TitleImages.png");
        game.load.spritesheet("button_play", "assets/button_play.png", 116, 116);
    },
    create: function() {
        game.state.start("title");
    }
};