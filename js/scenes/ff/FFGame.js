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
        this.questionBoxGroup = this.add.group();
        this.questionBoxGroup.position.setTo(0.5 * WIDTH, 0.5 * HEIGHT);
        this.questionBoxGroup.visible = false;

        this.questionBoxSprite = this.add.sprite(0.0 * WIDTH, 0.0 * HEIGHT, "ff_question_box");
        this.questionBoxSprite.anchor.setTo(0.5, 0.5);
        this.questionBoxGroup.add(this.questionBoxSprite);

        this.fixItButton = this.add.button(0.17 * WIDTH, -0.03 * HEIGHT, "ff_button_fix_it", function(){ this.startResult(true); }, this, 0, 0, 1);
        this.fixItButton.anchor.setTo(0.5, 0.5);
        this.questionBoxGroup.add(this.fixItButton);
        this.add.tween(this.fixItButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);

        this.itsOkButton = this.add.button(0.17 * WIDTH, 0.12 * HEIGHT, "ff_button_its_ok", function(){ this.startResult(false); }, this, 0, 0, 1);
        this.itsOkButton.anchor.setTo(0.5, 0.5);
        this.questionBoxGroup.add(this.itsOkButton);
        this.add.tween(this.itsOkButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);

        this.questionImageSprite = this.add.sprite(-0.11 * WIDTH, 0.05 * HEIGHT, "");
        this.questionImageSprite.anchor.setTo(0.5, 0.5);
        this.questionBoxGroup.add(this.questionImageSprite);

        this.questionHeaderText = this.add.text(0.0 * WIDTH, -0.17 * HEIGHT, "LINE 1\nLINE 2", TextStyle.centeredXXLarge);
        this.questionHeaderText.anchor.setTo(0.5, 0.5);
        this.questionHeaderText.addFontWeight('bold', 0);
        this.questionHeaderText.lineSpacing = -8;
        this.questionHeaderText.resolution = 2;
        this.questionBoxGroup.add(this.questionHeaderText);

        // Results Box
        this.resultsBoxGroup = this.add.group();
        this.resultsBoxGroup.position.setTo(0.5 * WIDTH, 0.5 * HEIGHT);
        this.resultsBoxGroup.visible = false;

        this.resultsBoxSprite = this.add.sprite(0.0 * WIDTH, 0.0 * HEIGHT, "");
        this.resultsBoxSprite.anchor.setTo(0.5, 0.5);
        this.resultsBoxGroup.add(this.resultsBoxSprite);

        this.resultsHeaderText = this.add.text(0.0 * WIDTH, -0.43 * HEIGHT, "", TextStyle.centeredXXLarge);
        this.resultsHeaderText.anchor.setTo(0.5, 0.5);
        this.resultsHeaderText.addColor('#fff', 0);
        this.resultsHeaderText.addFontWeight('bold', 0);
        this.resultsHeaderText.resolution = 2;
        this.resultsBoxGroup.add(this.resultsHeaderText);

        this.resultsUpperText = this.add.text(0.0 * WIDTH, -0.34 * HEIGHT, "", TextStyle.centered);
        this.resultsUpperText.anchor.setTo(0.5, 0.5);
        this.resultsUpperText.addColor('#fff', 0);
        this.resultsUpperText.addFontWeight('bold', 0);
        this.resultsUpperText.lineSpacing = -8;
        this.resultsUpperText.resolution = 2;
        this.resultsBoxGroup.add(this.resultsUpperText);

        this.resultsLowerText = this.add.text(0.0 * WIDTH, 0.175 * HEIGHT, "", TextStyle.centeredLarge);
        this.resultsLowerText.anchor.setTo(0.5, 0.5);
        this.resultsLowerText.addFontWeight('bold', 0);
        this.resultsLowerText.lineSpacing = -8;
        this.resultsLowerText.resolution = 2;
        this.resultsBoxGroup.add(this.resultsLowerText);

        this.resultsImageSprite = this.add.sprite(0.0 * WIDTH, -0.145 * HEIGHT, "");
        this.resultsImageSprite.anchor.setTo(0.5, 0.5);
        this.resultsBoxGroup.add(this.resultsImageSprite);

        this.resultsNextButton = this.add.button(0.0 * WIDTH, 0.39 * HEIGHT, "ff_button_next", function(){ this.closeResult(); }, this, 0, 0, 1);
        this.resultsNextButton.anchor.setTo(0.5, 0.5);
        this.resultsBoxGroup.add(this.resultsNextButton);
        this.add.tween(this.resultsNextButton.scale).to({ x: 0.9, y: 0.9 }, 600, "Linear", true, 0, -1, true);
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
    startQuestion: function() {
        this.setOptionsClickable(false);
        this.questionBoxGroup.visible = true;
        this.add.tween(this.questionBoxGroup.scale).from({ x: 0.5, y: 0.5 }, 500, "Elastic", true);

        var option = FFGame.options[this.currentQuestionId];
        var data = FFGameData.options[option.id];
        var childData = (option.wrong ? data.wrong : data.correct);

        this.questionHeaderText.setText(childData.questionTitle);
        this.questionImageSprite.loadTexture(childData.questionImage);
    },
    startResult: function(fixIt) {
        this.questionBoxGroup.visible = false;
        
        var option = FFGame.options[this.currentQuestionId];
        var data = FFGameData.options[option.id];

        var correct = (fixIt == option.wrong);
        var dataChild = (correct ? data.correct : data.wrong);

        this.resultsBoxSprite.loadTexture((correct ? "ff_correct_box" : "ff_oops_box"));
        this.resultsBoxGroup.visible = true;
        this.resultsNextButton.visible = false;
        this.add.tween(this.resultsBoxGroup.scale).from({ x: 0.5, y: 0.5 }, 500, "Elastic", true);            
        this.time.events.add(1000, function() { this.resultsNextButton.visible = true; }, this);

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
        this.resultsBoxGroup.visible = false;
        this.setOptionsClickable(true);

        FFGame.completed++;
        if(FFGame.completed >= FFGame.options.length) {
            this.finishedButton = this.add.button(0.9 * WIDTH, 0.85 * HEIGHT, "button_play", function(){ this.state.start("FFScoreState"); }, this, 0, 0, 1);
            this.finishedButton.anchor.setTo(0.5, 0.5);
            this.add.tween(this.finishedButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true, 0, -1, true);

        }
    }
};