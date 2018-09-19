'use strict';

var title = {
    preload: function() {
    },
    create: function() {
        
        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = [
            this.add.sprite(clouds[0].x * WIDTH, clouds[0].y * HEIGHT, "cloud_1"),
            this.add.sprite(clouds[1].x * WIDTH, clouds[1].y * HEIGHT, "cloud_2"),
            this.add.sprite(clouds[2].x * WIDTH, clouds[2].y * HEIGHT, "cloud_1"),
            this.add.sprite(clouds[3].x * WIDTH, clouds[3].y * HEIGHT, "cloud_2")
        ];

        // Titles
        this.titleProfessorSprite = this.add.sprite(0.03 * WIDTH, 0.05 * HEIGHT, "title_professor");
        this.titlePreventsSprite = this.add.sprite(0.34 * WIDTH, 0.1 * HEIGHT, "title_prevents");

        // Character
        this.professorSprite = this.add.sprite(0.03 * WIDTH, 0.37 * HEIGHT, "professor_left");

        // Play Button
        this.playButton = this.add.button(WIDTH * 0.3, HEIGHT * 0.68, "button_play", this.playButtonAction.onClick, this, 0, 0, 1);
        this.playButton.anchor.setTo(0.5, 0.5);

        this.add.tween(this.playButton.scale).to({ x: 1.1, y: 1.1 }, 600, "Linear", true).yoyo(true, 0).loop(true);

    },
    update: function() {
        for(var i=0; i<clouds.length; ++i) {
            var cloud = clouds[i];
            cloud.x += CLOUD_SPEED;
            if(cloud.x > 1.0 + CLOUD_MARGIN) cloud.x = -CLOUD_MARGIN;
        }
        for(var i=0; i<this.cloudSprites.length; ++i) {
            var cloudSprite = this.cloudSprites[i];
            cloudSprite.x = clouds[i].x * WIDTH;
        }
    },
    playButtonAction: {
        onClick: function() {
            console.log("playButton: onClick");
        }
    }
};