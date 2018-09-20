'use strict';

var load = {
    preload: function() {

        // Backgrounds
        this.load.image("background_1", "assets/background_1.png");

        // Clouds
        this.load.image("cloud_1", "assets/cloud_1.png");
        this.load.image("cloud_2", "assets/cloud_2.png");

        // Titles
        this.load.image("title_prevents", "assets/title_prevents.png");
        this.load.image("title_professor", "assets/title_professor.png");

        // Characters
        this.load.image("professor_1", "assets/professor_1.png");
        this.load.image("professor_2", "assets/professor_2.png");
        this.load.image("professor_3", "assets/professor_3.png");
        this.load.image("professor_4", "assets/professor_4.png");
        this.load.image("professor_5", "assets/professor_5.png");
        this.load.image("professor_6", "assets/professor_6.png");

        // Speech Boxes
        this.load.image("speechbox_1", "assets/speechbox_1.png");
        this.load.image("speechbox_2", "assets/speechbox_2.png");
        this.load.image("speechbox_3", "assets/speechbox_3.png");

        // Info Boxes
        this.load.image("infobox_intro3", "assets/infobox_intro3.png");
        this.load.image("infobox_intro4", "assets/infobox_intro4.png");

        // Buttons
        this.load.spritesheet("button_play", "assets/button_play.png", 116, 116);
        this.load.spritesheet("button_ff", "assets/button_ff.png", 212, 212);
        this.load.spritesheet("button_pp", "assets/button_pp.png", 212, 212);

    },
    create: function() {
        this.state.start("title");
    }
};