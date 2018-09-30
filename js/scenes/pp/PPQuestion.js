'use strict';

var PPQuestionState = {
    preload: function() {
    },
    create: function() {    

        var level = PPGameData.levels[PPGame.levelId];
        var question = level[PPGame.questionId];
        var options = question.options;

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_2");

        // Question Text Sprite
        this.questionTextSprite = this.add.sprite(0.45 * WIDTH, 0.1 * HEIGHT, "pp_question_text");

        // Question Image Sprite
        this.questionImageSprite = this.add.sprite(0, 0, question.name);

        // Choice Buttons
        var buttonWidth = WIDTH * (options.length == 3 ? 0.33 : 0.42);
        for(var i=0; i<options.length; ++i) {
            var onClick = function(ref) {
                PPGame.chosenOptionId = ref.optionIndex;
                this.state.start("PPRainState");
            };
            var xOffset = 0.5 * WIDTH - (buttonWidth * (options.length - 1)) * 0.5 + buttonWidth * i;
            var optionButton = this.add.button(xOffset, 0.68 * HEIGHT, options[i].name, onClick, this, 0, 0, 0);
            optionButton.anchor.setTo(0.5, 0.5);
            optionButton.optionIndex = i;
            this.add.tween(optionButton.scale).to({ x: 0.95, y: 0.95 }, 600, "Linear", true).yoyo(true, 0).loop(true);
        }
    },
    update: function() {
    },

};