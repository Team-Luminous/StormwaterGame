'use strict';

var AudioManager = {

    init: function() {
        this.indexAB = 0;
        this.indexC = 1;
    },

    toggleMusic: function(screen) {
        Game.sound.mute = !Game.sound.mute;
        if (Game.sound.mute) {
            // muted, show canceled sound button
            screen.muteButton.setFrames(2, 2, 3);
            this.indexAB = 2;
            this.indexC = 3;
        } else {
            // unmuted, show mute sound button
            screen.muteButton.setFrames(0, 0, 1);
            this.indexAB = 0;
            this.indexC = 1;
        }
    },

    playSong(title, state) {
        // Make sure to not replay same song
        if (!this.currentTitle || this.currentTitle != title) {
            this.currentTitle = title;
            Game.sound.stopAll();
            this.currentSong = state.add.audio(title, 0.3);
            this.currentSong.loopFull();
        }
    },

    playSound(title, state) {
        this.sound = state.add.audio(title, 0.25);
        this.sound.play();
    }

};

var muteButtonActions =  {
    onClick: function() {
        AudioManager.toggleMusic(this);
    }
}