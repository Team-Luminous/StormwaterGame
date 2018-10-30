'use strict';

var PPIntroState = {
    preload: function() {
    },
    create: function() {
        
        this.subSceneIndex = 0;

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = createCloudSprites(this);

        // Characters
        this.professorSprite1 = this.add.sprite(0.42 * WIDTH, 0.4 * HEIGHT, "professor_5");
        
        this.professorSprite2 = this.add.sprite(0.4 * WIDTH, 0.39 * HEIGHT, "professor_3");
        this.professorSprite2.visible = false;

        this.professorSprite3 = this.add.sprite(0.6 * WIDTH, 0.39 * HEIGHT, "professor_4");
        this.professorSprite3.scale.setTo(-1.0, 1.0);
        this.professorSprite3.visible = false;

        // Misc.
        this.trashcanSprite = this.add.sprite(0.08 * WIDTH, 0.43 * HEIGHT, "pp_trashcan");

        this.dirtSprite = this.add.sprite(0.23 * WIDTH, 0.75 * HEIGHT, "pp_dirt");

        this.dogSprite = this.add.sprite(0.28 * WIDTH, 0.64 * HEIGHT, "pp_dog");

        this.wetlandsSprite = this.add.sprite(0.2 * WIDTH, 0.48 * HEIGHT, "pp_wetlands");
        this.wetlandsSprite.anchor.setTo(0.5, 0.5);
        this.wetlandsSprite.visible = false;

        // Speech Boxes
        this.speechBox1 = this.add.sprite(0.82 * WIDTH, 0.58 * HEIGHT, "speechbox_2");
        this.speechBox1.scale.setTo(-1.0, -1.0);
        this.speechBox1.anchor.setTo(0.44, 0.5);

        // Speech Text
        this.speechText1 = this.add.text(0.82 * WIDTH, 0.58 * HEIGHT, TextData.ppIntro[0], TextStyle.centered);
        this.speechText1.anchor.setTo(0.5, 0.5);
        this.speechText1.lineSpacing = TextStyle.lineSpacing;
        this.speechText1.resolution = 2;
        
        this.speechText2 = this.add.text(0.82 * WIDTH, 0.58 * HEIGHT, TextData.ppIntro[1], TextStyle.centered);
        this.speechText2.anchor.setTo(0.5, 0.5);
        this.speechText2.lineSpacing = TextStyle.lineSpacing;
        this.speechText2.visible = false;
        this.speechText2.resolution = 2;

        this.speechText3 = this.add.text(0.82 * WIDTH, 0.58 * HEIGHT, TextData.ppIntro[2], TextStyle.centered);
        this.speechText3.anchor.setTo(0.5, 0.5);
        this.speechText3.lineSpacing = TextStyle.lineSpacing;
        this.speechText3.visible = false;
        this.speechText3.resolution = 2;

        // Buttons
        this.nextButton = this.add.button(0.5 * WIDTH, 0.2 * HEIGHT, "button_play", this.nextButtonActions.onClick, this, 0, 0, 1);
        this.nextButton.anchor.setTo(0.5, 0.5);
        this.nextButton.visible = false;
        this.add.tween(this.nextButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Mute button
        var indexAB = AudioManager.indexAB;
        var indexC = AudioManager.indexC;
        this.muteButton = this.add.button(0.9 * WIDTH, 0.01 * HEIGHT, "button_sound", muteButtonActions.onClick, this, indexAB, indexAB, indexC);
        this.muteButton.scale.setTo(0.75);

        // Start Animation
        this.nextDelay = 1000;
        this.animationSpeed = 500;

        this.add.tween(this.speechText1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.add.tween(this.speechBox1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.time.events.add(this.nextDelay, function() { this.nextButton.visible = true; }, this);

    },
    update: function() {
        updateCloudSprites(this);
    },
    nextSubScene: function() {

        // This probably isn't the most efficient way of doing this

        // Before changing subscene
        switch(this.subSceneIndex) {
            case 0:
                this.professorSprite1.visible = false;
                this.speechText1.visible = false;
                this.trashcanSprite.visible = false;
                this.dirtSprite.visible = false;
                this.dogSprite.visible = false;

                this.nextButton.visible = false;
                break;
            case 1:
                this.professorSprite2.visible = false;
                this.speechText2.visible = false;
                
                this.nextButton.visible = false;
                break;
            case 2:
                this.professorSprite3.visible = false;
                this.speechText3.visible = false;
                
                this.nextButton.visible = false;
                break;
        }

        // Increment subscene
        this.subSceneIndex++;

        // After changing subscene
        switch(this.subSceneIndex) {
            case 1:                
                this.professorSprite2.visible = true;
                this.speechText2.visible = true;   
                this.wetlandsSprite.visible = true;

                this.add.tween(this.speechText2.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
                this.add.tween(this.speechBox1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
                this.add.tween(this.wetlandsSprite.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
                
                this.time.events.add(this.nextDelay, function() { this.nextButton.visible = true; }, this);
                break;
            case 2:
                this.professorSprite3.visible = true;
                this.speechText3.visible = true;

                this.add.tween(this.speechText3.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
                this.add.tween(this.speechBox1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);

                this.time.events.add(this.nextDelay, function() { this.nextButton.visible = true; }, this);
                break;
            case 3:
                this.state.start("PPLevelSelectState");
                break;
        }

    },
    nextButtonActions: {
        onClick: function() {
            this.nextSubScene();
        }
    }
};