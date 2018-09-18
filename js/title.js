'use strict';

var title = {
    preload: function() {
    },
    create: function() {
        
        var background = this.add.tileSprite(0, 0, 1024, 672, "titleImages");

        var playButton = this.add.button(512, 504, "button_play", this.playButtonAction.onClick, this, 0, 0, 1);
        playButton.anchor.setTo(0.5, 0.5);

        this.add.tween(playButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

    },
    playButtonAction: {
        onClick: function() {
            console.log("playButton: onClick");
        }
    }
};