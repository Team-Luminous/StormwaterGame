'use strict';

var FFGameState = {
    preload: function() {},
    create: function() {

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "ff_background");

        // Options        
        this.currentQuestionId = 0;
        this.optionSprites = [];

        for(var i=0; i<FFGame.options.length; ++i) {
            var option = FFGame.options[i];
            var data = FFGameData.options[option.id];
            var spriteData = (option.wrong ? data.wrong.sprite : data.correct.sprite);

            var outlineSprite = this.add.sprite(spriteData.position.x * WIDTH, spriteData.position.y * HEIGHT, spriteData.name + "_outline");
            outlineSprite.anchor.setTo(0.5, 0.5);
            outlineSprite.scale.setTo(spriteData.scale.x, spriteData.scale.y);
            this.add.tween(outlineSprite).to({ alpha: 0.1 }, 800, "Linear", true, 0, -1, true);

            var clickableSprite = this.add.sprite(spriteData.position.x * WIDTH, spriteData.position.y * HEIGHT, spriteData.name);
            clickableSprite.anchor.setTo(0.5, 0.5);
            clickableSprite.scale.setTo(spriteData.scale.x, spriteData.scale.y);
            var onClick = function(ref) {
                this.currentQuestionId = ref.optionIndex;
                this.startQuestion();
            };
            clickableSprite.events.onInputDown.add(onClick, this);
            clickableSprite.optionIndex = i;
            clickableSprite.inputEnabled = true;
            clickableSprite.input.useHandCursor = true;

            var optionSprite = {
                enabled: true,
                clickable: clickableSprite,
                outline: outlineSprite,
                extras: []
            };

            for(var j=0; j<spriteData.extras.length; ++j) {
                var extra = spriteData.extras[j];           
                    
                var extraSprite = this.add.sprite(extra.position.x * WIDTH, extra.position.y * HEIGHT, extra.name);
                extraSprite.anchor.setTo(0.5, 0.5);
                extraSprite.scale.setTo(extra.scale.x, extra.scale.y);

                optionSprite.extras.push(extraSprite);
            }

            this.optionSprites.push(optionSprite);
        }

        // Question Box
        this.questionBoxSprite = this.add.sprite(0.5 * WIDTH, 0.5 * HEIGHT, "ff_question_box");
        this.questionBoxSprite.anchor.setTo(0.5, 0.5);

        this.fixItButton = this.add.button(0.67 * WIDTH, 0.47 * HEIGHT, "ff_button_fix_it", function(){ this.startResult(true); }, this, 0, 0, 1);
        this.fixItButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.fixItButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);

        this.itsOkButton = this.add.button(0.67 * WIDTH, 0.62 * HEIGHT, "ff_button_its_ok", function(){ this.startResult(false); }, this, 0, 0, 1);
        this.itsOkButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.itsOkButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);

        this.questionImageSprite = this.add.sprite(0.39 * WIDTH, 0.55 * HEIGHT, "");
        this.questionImageSprite.anchor.setTo(0.5, 0.5);

        this.questionHeaderText = this.add.text(0.5 * WIDTH, 0.33 * HEIGHT, "LINE 1\nLINE 2", TextStyle.centeredXXLarge);
        this.questionHeaderText.anchor.setTo(0.5, 0.5);
        this.questionHeaderText.addFontWeight('bold', 0);
        this.questionHeaderText.lineSpacing = -8;
        this.questionHeaderText.resolution = 2;

        // Results Box
        this.resultsBoxSprite = this.add.sprite(0.5 * WIDTH, 0.5 * HEIGHT, "");
        this.resultsBoxSprite.anchor.setTo(0.5, 0.5);

        this.resultsHeaderText = this.add.text(0.5 * WIDTH, 0.07 * HEIGHT, "", TextStyle.centeredXXLarge);
        this.resultsHeaderText.anchor.setTo(0.5, 0.5);
        this.resultsHeaderText.addColor('#fff', 0);
        this.resultsHeaderText.addFontWeight('bold', 0);
        this.resultsHeaderText.resolution = 2;

        this.resultsUpperText = this.add.text(0.5 * WIDTH, 0.16 * HEIGHT, "", TextStyle.centered);
        this.resultsUpperText.anchor.setTo(0.5, 0.5);
        this.resultsUpperText.addColor('#fff', 0);
        this.resultsUpperText.addFontWeight('bold', 0);
        this.resultsUpperText.lineSpacing = -8;
        this.resultsUpperText.resolution = 2;

        this.resultsLowerText = this.add.text(0.5 * WIDTH, 0.675 * HEIGHT, "", TextStyle.centeredLarge);
        this.resultsLowerText.anchor.setTo(0.5, 0.5);
        this.resultsLowerText.addFontWeight('bold', 0);
        this.resultsLowerText.lineSpacing = -8;
        this.resultsLowerText.resolution = 2;

        this.resultsImageSprite = this.add.sprite(0.5 * WIDTH, 0.355 * HEIGHT, "");
        this.resultsImageSprite.anchor.setTo(0.5, 0.5);

        this.resultsNextButton = this.add.button(0.5 * WIDTH, 0.89 * HEIGHT, "ff_button_next", function(){ this.closeResult(); }, this, 0, 0, 1);
        this.resultsNextButton.anchor.setTo(0.5, 0.5);
        this.add.tween(this.resultsNextButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);

        this.nextDelay = 1000;
        this.animationSpeed = 500;
        this.delaySpeed = 250;

        this.setQuestionBoxVisible(false);
        this.setResultsBoxVisible(false, false);
    },
    update: function() {
    },
    setOptionsClickable: function(clickable) {
        for(var i=0; i<this.optionSprites.length; ++i) {
            if(this.optionSprites[i].enabled) {
                this.optionSprites[i].clickable.inputEnabled = clickable;
                this.optionSprites[i].clickable.input.useHandCursor = clickable;
            }
        }
    },
    setQuestionBoxVisible: function(visible) {
        this.questionBoxSprite.visible = visible;
        this.fixItButton.visible = visible;
        this.itsOkButton.visible = visible;
        this.questionImageSprite.visible = visible;
        this.questionHeaderText.visible = visible;

        if(visible) {
            this.add.tween(this.questionBoxSprite.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.fixItButton.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.itsOkButton.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.questionImageSprite.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.questionHeaderText.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
        }
    },
    setResultsBoxVisible: function(visible, correct) {
        this.resultsBoxSprite.visible = visible;       
        this.resultsHeaderText.visible = visible;
        this.resultsUpperText.visible = visible;
        this.resultsLowerText.visible = visible;
        this.resultsImageSprite.visible = visible;

        if(visible) {
            this.resultsBoxSprite.loadTexture((correct ? "ff_correct_box" : "ff_oops_box"));
            this.add.tween(this.resultsBoxSprite.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.resultsHeaderText.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.resultsUpperText.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.resultsLowerText.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);
            this.add.tween(this.resultsImageSprite.scale).from({ x: 0.5, y: 0.5 }, this.animationSpeed, "Elastic", true);            
            this.time.events.add(this.nextDelay, function() { this.resultsNextButton.visible = true; }, this);
        }
        else {
            this.resultsNextButton.visible = false;
        }
    },
    startQuestion: function() {
        this.setQuestionBoxVisible(true);
        this.setOptionsClickable(false);

        var option = FFGame.options[this.currentQuestionId];
        var data = FFGameData.options[option.id];
        var childData = (option.wrong ? data.wrong : data.correct);

        this.questionHeaderText.setText(childData.questionTitle);
        this.questionImageSprite.loadTexture(childData.questionImage);
    },
    startResult: function(fixIt) {
        this.setQuestionBoxVisible(false);
        
        var option = FFGame.options[this.currentQuestionId];
        var data = FFGameData.options[option.id];

        var correct = (fixIt == option.wrong);
        var dataChild = (correct ? data.correct : data.wrong);

        this.setResultsBoxVisible(true, correct);
        this.resultsHeaderText.setText(FFGameData.resultsHeader[(!correct ? 2 : (!fixIt ? 1 : 0))]);
        this.resultsUpperText.setText(dataChild.resultUpperText);
        this.resultsLowerText.setText(dataChild.resultLowerText);
        this.resultsImageSprite.loadTexture(dataChild.resultImage);

        var sprite = this.optionSprites[this.currentQuestionId];
        sprite.enabled = false;
        sprite.outline.visible = false;

        // This will only change the option if its currently wrong and you fix it
        // Maybe change it to also include if its currently right and you choose wrong
        if(correct) {
            if(option.wrong) {
                var spriteData = data.correct.sprite;
                sprite.clickable.loadTexture(spriteData.name);
                sprite.clickable.position.setTo(spriteData.position.x * WIDTH, spriteData.position.y * HEIGHT);
                sprite.clickable.scale.setTo(spriteData.scale.x, spriteData.scale.y);
                for(var i=0; i<sprite.extras.length; ++i) {
                    sprite.extras[i].loadTexture(spriteData.extras[i].name);
                    sprite.extras[i].position.setTo(spriteData.extras[i].position.x * WIDTH, spriteData.extras[i].position.y * HEIGHT);
                    sprite.extras[i].scale.setTo(spriteData.extras[i].scale.x, spriteData.extras[i].scale.y);
                }
            }

            FFGame.score++;
        }
    },
    closeResult: function() {
        this.setResultsBoxVisible(false, false);
        this.setOptionsClickable(true);
    }
};