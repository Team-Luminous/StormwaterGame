'use strict';

var PPRainState = {
    preload: function() {
    },
    create: function() {    

        // Background
        this.backgroundSprite1 = this.add.sprite(0, 0, "background_1");
        this.backgroundSprite2 = this.add.sprite(0, 0, "background_1_1");

        // Clouds
        this.cloudSprite1 = this.add.sprite(-0.18 * WIDTH, 0.02 * HEIGHT, "cloud_3");
        this.add.tween(this.cloudSprite1).to({ x: -0.02 * WIDTH }, 2000, "Sine", true);

        this.cloudSprite2 = this.add.sprite(0.88 * WIDTH, 0.18 * HEIGHT, "cloud_4");
        this.add.tween(this.cloudSprite2).to({ x: 0.7 * WIDTH }, 2000, "Sine", true);

        // Misc.
        this.houseSprite = this.add.sprite(0.08 * WIDTH, 0.45 * HEIGHT, "pp_house");

        // Rain
        this.rainEmitter = this.add.emitter(0.5 * WIDTH, -0.5 * HEIGHT, 200);
        this.rainEmitter.width = 1.5 * WIDTH;
        this.rainEmitter.angle = 20;
        this.rainEmitter.makeParticles("pp_raindrop");
        this.rainEmitter.minParticleScale = 0.8;
        this.rainEmitter.maxParticleScale = 1.0;
        this.rainEmitter.setYSpeed(300, 500);
        this.rainEmitter.setXSpeed(-5, 5);
        this.rainEmitter.minRotation = this.rainEmitter.maxRotation = 0;
        this.rainEmitter.start(false, 1600, 5, 0);

        // Characters
        this.professorSprite1 = this.add.sprite(0.37 * WIDTH, 0.4 * HEIGHT, "professor_2");
        
        // Speech Boxes
        this.speechBox1 = this.add.sprite(0.8 * WIDTH, 0.68 * HEIGHT, "speechbox_2");
        this.speechBox1.scale.setTo(-1.0, -1.0);
        this.speechBox1.anchor.setTo(0.44, 0.5);

        // Speech Text
        this.speechText1 = this.add.text(0.8 * WIDTH, 0.68 * HEIGHT, TextData.ppRain, TextStyle.centeredLarge);
        this.speechText1.anchor.setTo(0.5, 0.5);
        this.speechText1.lineSpacing = TextStyle.lineSpacing;
        this.speechText1.resolution = 2;

        // Buttons
        this.nextButton = this.add.button(0.5 * WIDTH, 0.2 * HEIGHT, "button_play", this.nextButtonActions.onClick, this, 0, 0, 1);
        this.nextButton.anchor.setTo(0.5, 0.5);
        this.nextButton.visible = false;
        this.add.tween(this.nextButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Start Animation
        this.nextDelay = 1000;
        this.animationSpeed = 500;

        this.add.tween(this.speechText1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.add.tween(this.speechBox1.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.time.events.add(this.nextDelay, function() { this.nextButton.visible = true; }, this);
    },
    update: function() {
    },
    nextButtonActions: {
        onClick: function() {
            this.state.start("PPResultState");
        }
    }
};