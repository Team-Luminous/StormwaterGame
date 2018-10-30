'use strict';

var PPLevelSelectState = {
    preload: function() {},
    create: function() {
        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = createCloudSprites(this);

        // Mute Button
        //this.muteBtn = this.add.button(0.9 * WIDTH, 0.1 * HEIGHT, "button_sound")

        // Characters
        this.professorSprite = this.add.sprite(0.12 * WIDTH, 0.375 * HEIGHT, "professor_6");

        // Title
        //this.title = this.add.sprite((0.5 * WIDTH) - 

        // Speech Boxes
        this.speechBox = this.add.sprite(0.49 * WIDTH, 0.35 * HEIGHT, "speechbox_3");
        this.speechBox.anchor.setTo(0.44, 0.5);
        this.speechBox.scale.setTo(-1, -1);

        // Speech Text
        this.speechText = this.add.text(0.49 * WIDTH + 0.5, 0.35 * HEIGHT + 0.5, TextData.ppChoseLevel, TextStyle.centeredExtraLarge);
        this.speechText.anchor.setTo(0.5, 0.5);
        this.speechText.lineSpacing = TextStyle.lineSpacing;
        this.speechText.resolution = 2;

        // Level Select Buttons
        this.level1Btn = this.add.button(0.475 * WIDTH, 0.55 * HEIGHT, "button_pp_lvl1", this.buttonActions.onClickOne, this, 0, 0, 1);
        this.level1Btn.anchor.setTo(0.5, 0.5);
        this.add.tween(this.level1Btn.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        this.level2Btn = this.add.button(0.655 * WIDTH, 0.55 * HEIGHT, "button_pp_lvl2", this.buttonActions.onClickTwo, this, 0, 0, 1);
        this.level2Btn.anchor.setTo(0.5, 0.5);
        this.add.tween(this.level2Btn.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        this.level3Btn = this.add.button(0.835 * WIDTH, 0.55 * HEIGHT, "button_pp_lvl3", this.buttonActions.onClickThree, this, 0, 0, 1);
        this.level3Btn.anchor.setTo(0.5, 0.5);
        this.add.tween(this.level3Btn.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Mute button
        createMuteButton(this);

        // Start Animation
        this.animationSpeed = 500;

        this.add.tween(this.speechText.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.add.tween(this.speechBox.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);

        // Audio (if reset)
        AudioManager.playSong("title_music", this);
    },
    update: function() {
        updateCloudSprites(this);
    },
    buttonActions: {
        onClickOne: function() {
            PPGame.levelId = 0;
            AudioManager.playSound("bloop_sfx", this);
            this.state.start("PPQuestionState");
        },
        onClickTwo: function() {
            PPGame.levelId = 1;
            AudioManager.playSound("bloop_sfx", this);
            this.state.start("PPQuestionState");
        },
        onClickThree: function() {
            PPGame.levelId = 2;
            AudioManager.playSound("bloop_sfx", this);
            this.state.start("PPQuestionState");
        }
    },
    
}