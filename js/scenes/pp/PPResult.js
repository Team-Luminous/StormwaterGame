'use strict';

var PPResultState = {
    preload: function() {
    },
    create: function() {    

        var level = PPGameData.levels[PPGame.levelId];
        var question = level[PPGame.questionId];
        var chosenOption = question.options[PPGame.chosenOptionId];
        var correct = chosenOption.correct;

        PPGame.score += (correct ? 1 : 0);

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, (correct ? "background_3" : "background_4"));

        // Wetlands
        this.wetlandsSprite = this.add.sprite(0.38 * WIDTH, 0.52 * HEIGHT, "pp_wetlands");
        this.wetlandsSprite.anchor.setTo(0.5, 0.5);

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
            if(PPGame.questionId < 4) {
                PPGame.questionId++;
                this.state.start("PPQuestionState");
            }
            else {
                this.state.start("PPScoreState");
            }
        }
    }
};