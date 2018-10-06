'use strict';

var PPResultState = {
    preload: function() {
    },
    create: function() {    

        var level = PPGameData.levels[PPGame.levelId];
        var question = level[PPGame.questionId];
        var chosenOption = question.options[PPGame.chosenOptionId];
        var correct = chosenOption.correct;
        var wetlands = chosenOption.wetlands;

        PPGame.score += (correct ? 1 : 0);

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, (correct ? "background_3" : "background_4"));

        // Wetlands
        var wetlandsX = 0.38 * WIDTH;
        var wetlandsY = 0.52 * HEIGHT;

        // Wetlands Background
        this.wetlandsBGSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_background");
        this.wetlandsBGSprite.anchor.setTo(0.5, 0.5);

        // Clouds
        this.wetlandsCloudSprite1 = this.add.sprite(wetlandsX - 0.18 * WIDTH, wetlandsY - 0.25 * HEIGHT, "pp_wetlands_cloud1");
        this.add.tween(this.wetlandsCloudSprite1).to({ x: wetlandsX - 0.24 * WIDTH }, 20000, "Sine", true, 0, -1, true);

        this.wetlandsCloudSprite2 = this.add.sprite(wetlandsX + 0.06 * WIDTH, wetlandsY - 0.22 * HEIGHT, "pp_wetlands_cloud2");
        this.add.tween(this.wetlandsCloudSprite2).to({ x: wetlandsX - 0.06 * WIDTH }, 15000, "Sine", true, 0, -1, true);

        // Soap
        if(wetlands.soap) {
            this.wetlandsSoapSprite = [];
            for(var i=0; i<8; ++i) {
                var offset = (Math.random() * 2.0 - 1.0) * 0.25;
                var scale = Math.random() * 0.6 + 0.4;
                var duration = Math.random() * 6000 + 3000;
                var delay = Math.random() * 2000;
                this.wetlandsSoapSprite.push(this.add.sprite(wetlandsX - offset * WIDTH, wetlandsY - 0.02 * HEIGHT, "pp_wetlands_bubble"));
                this.wetlandsSoapSprite[i].anchor.setTo(0.5, 1.0);
                this.wetlandsSoapSprite[i].scale.x = 0.0;
                this.wetlandsSoapSprite[i].scale.y = 0.0;
                this.add.tween(this.wetlandsSoapSprite[i].scale).to({ x: scale, y: scale }, duration, "Sine", true, 0, -1, false).repeatDelay(delay).start();
            }
        }

        // Water Background
        this.wetlandsWaterSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_water");
        this.wetlandsWaterSprite.anchor.setTo(0.5, 0.5);

        // Leaves
        if(wetlands.leaves) {
            this.wetlandsLeavesSprite = this.add.sprite(wetlandsX, wetlandsY + 0.16 * HEIGHT, "pp_wetlands_leaves");
            this.wetlandsLeavesSprite.anchor.setTo(0.5, 0.5);
            this.add.tween(this.wetlandsLeavesSprite).to({ x: wetlandsX - 0.003 * WIDTH }, 2000, "Sine", true, 0, -1, true);
        }

        // Fish
        if(wetlands.aliveFish) {
            this.wetlandsFishSprite = this.add.sprite(wetlandsX + 0.275 * WIDTH, wetlandsY + 0.1 * HEIGHT, "pp_wetlands_fish");
            this.wetlandsFishSprite.anchor.setTo(0.5, 0.5);
    
            this.wetlandsFishMask = this.add.graphics(0, 0);
            this.wetlandsFishMask.beginFill(0xffffff);
            this.wetlandsFishMask.drawRect(wetlandsX - 0.3 * WIDTH, wetlandsY - 0.253 * HEIGHT, 0.6 * WIDTH, 0.56 * HEIGHT);
            this.wetlandsFishSprite.mask = this.wetlandsFishMask;
    
            this.add.tween(this.wetlandsFishSprite).to({ angle: -5 }, 4000, "Sine", true, 0, -1, true);
            this.add.tween(this.wetlandsFishSprite).to({ y: wetlandsY + 0.11 * HEIGHT }, 4000, "Sine", true, 0, -1, true);
            this.add.tween(this.wetlandsFishSprite).to({ x: wetlandsX - 0.275 * WIDTH }, 30000, Phaser.Easing.In, true, 0, -1, true);
            var fishFlipDirection = function(self) {
                self.time.events.add(30000, function() { 
                    self.wetlandsFishSprite.scale.x *= -1.0; 
                    fishFlipDirection(self); 
                }, self);
            };
            fishFlipDirection(this);
        }
        
        // Dead Fish
        if(wetlands.deadFish) {
            this.wetlandsDeadFishSprite1 = this.add.sprite(wetlandsX + 0.15 * WIDTH, wetlandsY + 0.05 * HEIGHT, "pp_wetlands_deadfish");
            this.wetlandsDeadFishSprite1.anchor.setTo(0.5, 0.5);
            this.wetlandsDeadFishSprite1.scale.x = -1.0;
            this.add.tween(this.wetlandsDeadFishSprite1).to({ y: wetlandsY + 0.04 * HEIGHT }, 4000, "Sine", true, 0, -1, true);
    
            this.wetlandsDeadFishSprite2 = this.add.sprite(wetlandsX - 0.08 * WIDTH, wetlandsY + 0.11 * HEIGHT, "pp_wetlands_deadfish");
            this.wetlandsDeadFishSprite2.anchor.setTo(0.5, 0.5);
            this.add.tween(this.wetlandsDeadFishSprite2).to({ y: wetlandsY + 0.12 * HEIGHT }, 4000, "Sine", true, 0, -1, true);   
        }

        // Trash
        if(wetlands.trash) {
            this.wetlandsTrashSprite = this.add.sprite(wetlandsX - 0.005 * WIDTH, wetlandsY + 0.07 * HEIGHT, "pp_wetlands_trash");
            this.wetlandsTrashSprite.anchor.setTo(0.5, 0.5);
            this.wetlandsTrashSprite.scale.x = -1.0;
            this.add.tween(this.wetlandsTrashSprite).to({ x: wetlandsX - 0.003 * WIDTH }, 2000, "Sine", true, 0, -1, true);
            this.add.tween(this.wetlandsTrashSprite).to({ y: wetlandsY + 0.08 * HEIGHT }, 4000, "Sine", true, 0, -1, true);
        }

        // Lilypads
        if(wetlands.lilypad) {
            this.wetlandsLilypadSprite = this.add.sprite(wetlandsX - 0.12 * WIDTH, wetlandsY + 0.02 * HEIGHT, "pp_wetlands_lilypads");
            this.add.tween(this.wetlandsLilypadSprite).to({ y: wetlandsY + 0.01 * HEIGHT }, 2000, "Sine", true, 0, -1, true);
        }            

        // Mulch
        if(wetlands.mulch) {
            this.wetlandsMulchSprite = this.add.sprite(wetlandsX, wetlandsY - 0.03 * HEIGHT, "pp_wetlands_mulch");
            this.wetlandsMulchSprite.anchor.setTo(0.5, 0.5);
            this.add.tween(this.wetlandsMulchSprite).to({ x: wetlandsX - 0.003 * WIDTH }, 2000, "Sine", true, 0, -1, true);
        }

        // Bottle
        if(wetlands.bottle) {
            this.wetlandsBottleSprite = this.add.sprite(wetlandsX + 0.12 * WIDTH, wetlandsY - 0.035 * HEIGHT, "pp_wetlands_bottle");
            this.wetlandsBottleSprite.anchor.setTo(0.5, 0.5);
            this.add.tween(this.wetlandsBottleSprite).to({ y: wetlandsY - 0.025 * HEIGHT }, 2000, "Sine", true, 0, -1, true);
        }

        switch(wetlands.overlay) {
            case 1: // Overlay - Mud
                this.wetlandsOverlayMudSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_overlay_mud");
                this.wetlandsOverlayMudSprite.anchor.setTo(0.5, 0.5);
                break;
            case 2: // Overlay - Paint
                this.wetlandsOverlayPaintSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_overlay_paint");
                this.wetlandsOverlayPaintSprite.anchor.setTo(0.5, 0.5);
                break;
            case 3: // Overlay - Fertilizer
                this.wetlandsOverlayFertilizerSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_overlay_fertilizer");
                this.wetlandsOverlayFertilizerSprite.anchor.setTo(0.5, 0.5);
                break;
            case 4: // Overlay - Oil
                this.wetlandsOverlayOilSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_overlay_oil");
                this.wetlandsOverlayOilSprite.anchor.setTo(0.5, 0.5);
                break;
        }   
    
        // Wetlands Foreground
        this.wetlandsFGSprite = this.add.sprite(wetlandsX, wetlandsY, "pp_wetlands_foreground");
        this.wetlandsFGSprite.anchor.setTo(0.5, 0.5);

        // Characters
        this.professorSprite = this.add.sprite(0.79 * WIDTH, 0.5 * HEIGHT, (correct ? "professor_3" : "professor_7"));

        // Header Text
        this.headerText = this.add.text(0.38 * WIDTH, 0.05 * HEIGHT, (correct ? PPGameData.resultsHeader[0] : PPGameData.resultsHeader[1]), TextStyle.centeredHeader);
        this.headerText.anchor.setTo(0.5, 0.5);
        this.headerText.addColor('#fff', 0);
        this.headerText.addFontWeight('bold', 0);
        this.headerText.resolution = 2;

        // Upper Text
        this.upperText = this.add.text(0.38 * WIDTH, 0.15 * HEIGHT, chosenOption.resultUpperText, TextStyle.centeredLarge);
        this.upperText.anchor.setTo(0.5, 0.5);
        this.upperText.lineSpacing = TextStyle.lineSpacing;
        this.upperText.addColor('#fff', 0);
        this.upperText.addFontWeight('bold', 0);
        this.upperText.resolution = 2;

        // Speech Boxes
        this.speechBox = this.add.sprite(0.38 * WIDTH, 0.87 * HEIGHT, "speechbox_4");
        this.speechBox.anchor.setTo(0.46, 0.5);

        // Lower Text
        this.lowerText = this.add.text(0.38 * WIDTH, 0.87 * HEIGHT, chosenOption.resultLowerText, TextStyle.centered);
        this.lowerText.anchor.setTo(0.5, 0.5);
        this.lowerText.lineSpacing = TextStyle.lineSpacing;
        this.lowerText.addFontWeight('bold', 0);
        this.lowerText.resolution = 2;

        // Buttons
        this.nextButton = this.add.button(0.888 * WIDTH, 0.3 * HEIGHT, "button_next", this.nextButtonActions.onClick, this, 0, 0, 1);
        this.nextButton.anchor.setTo(0.5, 0.5);
        this.nextButton.visible = false;
        this.add.tween(this.nextButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true).yoyo(true, 0).loop(true);

        // Start Animation
        this.nextDelay = 1000;
        this.animationSpeed = 500;

        this.add.tween(this.lowerText.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.add.tween(this.speechBox.scale).from({ x: 0.0, y: 0.0 }, this.animationSpeed, "Elastic", true);
        this.time.events.add(this.nextDelay, function() { this.nextButton.visible = true; }, this);
    },
    update: function() {
    },
    nextButtonActions: {
        onClick: function() {
            if(PPGame.questionsCompleted < 4) {
                PPGame.questionId = PPGame.questionOrder[++PPGame.questionsCompleted];
                this.state.start("PPQuestionState");
            }
            else {
                this.state.start("PPScoreState");
            }
        }
    }
};