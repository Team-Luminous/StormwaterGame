'use strict';

var load = {
    preload: function() {

        // Backgrounds
        this.load.image("background_1", "assets/background/main.png");
        this.load.image("background_pp", "assets/background/pp.png");

        // Clouds
        this.load.image("cloud_1", "assets/cloud/1.png");
        this.load.image("cloud_2", "assets/cloud/2.png");

        // Titles
        this.load.image("title_prevents", "assets/title/prevents.png");
        this.load.image("title_professor", "assets/title/professor.png");

        // Characters
        this.load.image("professor_1", "assets/professor/1.png");
        this.load.image("professor_2", "assets/professor/2.png");
        this.load.image("professor_3", "assets/professor/3.png");
        this.load.image("professor_4", "assets/professor/4.png");
        this.load.image("professor_5", "assets/professor/5.png");
        this.load.image("professor_6", "assets/professor/6.png");

        // Speech Boxes
        this.load.image("speechbox_1", "assets/speechbox/1.png");
        this.load.image("speechbox_2", "assets/speechbox/2.png");
        this.load.image("speechbox_3", "assets/speechbox/3.png");

        // Info Boxes
        this.load.image("infobox_intro3", "assets/infobox_intro/3.png");
        this.load.image("infobox_intro4", "assets/infobox_intro/4.png");

        // Buttons
        this.load.spritesheet("button_play", "assets/button/play.png", 116, 116);
        this.load.spritesheet("button_ff", "assets/button/ff.png", 212, 212);
        this.load.spritesheet("button_pp", "assets/button/pp.png", 212, 212);
        this.load.image("button_level1", "assets/button/level1.png");
        this.load.image("button_level2", "assets/button/level2.png");
        this.load.image("button_level3", "assets/button/level3.png");

        // Audio
        this.load.audio("title_music", "audio/JoyInTheWorldNew.mp3");

    },
    create: function() {
        this.state.start("title");
    }
};