'use strict';

var PPRainState = {
    preload: function() {
    },
    create: function() {    

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // this.time.events.add(200, function() { this.state.start("PPResultState"); }, this);
        this.state.start("PPResultState");
    },
    update: function() {
    }
};