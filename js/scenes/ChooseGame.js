'use strict';

var ChooseGameState = {
    preload: function() {
    },
    create: function() {

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = createCloudSprites(this);

        // Characters
        this.professorSprite1 = this.add.sprite(0.37 * WIDTH, 0.41 * HEIGHT, "professor_2");

        // Speech Boxes
        this.speechBox1 = this.add.sprite(0.2 * WIDTH, 0.66 * HEIGHT, "speechbox_3");
        this.speechBox1.anchor.setTo(0.44, 0.5);

        // Speech Text
        this.speechText1 = this.add.text(0.2 * WIDTH + 0.5, 0.66 * HEIGHT + 0.5, TextData.chooseGame, TextStyle.centered);
        this.speechText1.anchor.setTo(0.5, 0.5);
        this.speechText1.lineSpacing = TextStyle.lineSpacing;
        this.speechText1.resolution = 2;
        
        // Buttons
        this.ffButton = this.add.button(0.25 * WIDTH, 0.22 * HEIGHT, "button_ff", this.ffButtonActions.onClick, this, 0, 0, 1);
        this.ffButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.ffButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        this.ppButton = this.add.button(0.75 * WIDTH, 0.22 * HEIGHT, "button_pp", this.ppButtonActions.onClick, this, 0, 0, 1);
        this.ppButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.ppButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Start Animation        
        this.animationSpeed = 500;

        this.add.tween(this.speechText1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.add.tween(this.speechBox1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
    },
    update: function() {
        updateCloudSprites(this);
    },
    ffButtonActions: {
        onClick: function() {
            // this.state.start("");
        }
    },
    ppButtonActions: {
        onClick: function() {
            this.state.start("PPLevelSelectState");
        }
    }
};