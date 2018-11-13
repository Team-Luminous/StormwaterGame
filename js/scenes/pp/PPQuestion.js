'use strict';

var PPQuestionState = {
    preload: function() {
    },
    create: function() {    

        var level = PPGameData.levels[PPGame.levelId];
        var question = level[PPGame.questionId];
        var options = question.options;

        // Randomize options
        if(PPGame.optionOrder.length == 0) {
            var randomOptions = [];
            for(var i=0; i<options.length; ++i) {
                randomOptions.push({
                    id: i,
                    obj: options[i]
                });
            }
            shuffleArray(randomOptions);
            PPGame.optionOrder = randomOptions;
        }

        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_2");

        // Question Text Sprite
        this.questionTextSprite = this.add.sprite(0.45 * WIDTH, 0.1 * HEIGHT, "pp_question_text");

        // Question Image Sprite
        this.questionImageSprite = this.add.sprite(0, 0, question.name);

        // Mute button
        createMuteButton(this);

        // Pause Button
        var onPause = function() {
            AudioManager.playSound("bloop_sfx", this);
            LastState = "PPQuestionState";
            this.state.start("PauseState");
        };
        this.pauseButton = this.add.button(0.892 * WIDTH, 0.185 * HEIGHT, "button_pause", onPause, this, 0, 0, 1);
        this.pauseButton.scale.setTo(0.75);

        // Choice Buttons
        var buttonWidth = WIDTH * (options.length == 3 ? 0.33 : 0.42);
        for(var i=0; i<PPGame.optionOrder.length; ++i) {
            var onClick = function(ref) {
                PPGame.chosenOptionId = ref.optionIndex;
                PPGame.scoreLock = false;
                PPGame.optionOrder = [];
                AudioManager.playSound("bloop_sfx", this);
                this.state.start("PPRainState");
            };
            var xOffset = 0.5 * WIDTH - (buttonWidth * (PPGame.optionOrder.length - 1)) * 0.5 + buttonWidth * i;
            var optionButton = this.add.button(xOffset, 0.68 * HEIGHT, PPGame.optionOrder[i].obj.name, onClick, this, 0, 0, 0);
            optionButton.anchor.setTo(0.5, 0.5);
            optionButton.optionIndex = PPGame.optionOrder[i].id;
            this.add.tween(optionButton.scale).to({ x: 0.95, y: 0.95 }, 600, "Linear", true).yoyo(true, 0).loop(true);
        }

        // Play music
        AudioManager.playSong("pp_music", this);
    },
    update: function() {
    }
};