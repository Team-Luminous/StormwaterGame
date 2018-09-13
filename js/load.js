'use strict';

var load = {
    preload: function() {
        game.load.image("titleImages", "assets/TitleImages.png");
    },
    create: function() {
        game.state.start("title");
    }
};