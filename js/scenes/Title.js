'use strict';

var TitleState = {
    preload: function() {
    },
    create: function() {
        
        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = createCloudSprites(this);

        // Titles
        this.titleProfessorSprite = this.add.sprite(0.03 * WIDTH, 0.05 * HEIGHT, "title_professor");
        this.titlePreventsSprite = this.add.sprite(0.34 * WIDTH, 0.1 * HEIGHT, "title_prevents");

        // Characters
        this.professorSprite = this.add.sprite(0.03 * WIDTH, 0.37 * HEIGHT, "professor_1");

        // Buttons
        this.playButton = this.add.button(0.3 * WIDTH, 0.68 * HEIGHT, "button_play", this.playButtonActions.onClick, this, 0, 0, 1);
        this.playButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.playButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Audio
        this.titleMusic = this.add.audio("title_music", 0.2);
        this.titleMusic.play();
    },
    update: function() {
        updateCloudSprites(this);
    },
    playButtonActions: {
        onClick: function() {
            this.state.start("IntroState");
        }
    }
};