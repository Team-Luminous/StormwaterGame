'use strict';

var LoadState = {
    preload: function() {

        // Backgrounds
        this.load.image("background_1", "assets/background_1.png");
        this.load.image("background_2", "assets/background_2.png");  
        this.load.image("background_3", "assets/background_3.png");  
        this.load.image("background_4", "assets/background_4.png");  

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
        this.load.image("professor_7", "assets/professor_7.png");

        // Speech Boxes
        this.load.image("speechbox_1", "assets/speechbox_1.png");
        this.load.image("speechbox_2", "assets/speechbox_2.png");
        this.load.image("speechbox_3", "assets/speechbox_3.png");
        this.load.image("speechbox_4", "assets/speechbox_4.png");
        this.load.image("speechbox_5", "assets/speechbox_5.png");

        // Info Boxes
        this.load.image("infobox_intro3", "assets/infobox_intro3.png");
        this.load.image("infobox_intro4", "assets/infobox_intro4.png");

        // Buttons
        this.load.spritesheet("button_play", "assets/button_play.png", 116, 116);
        this.load.spritesheet("button_home", "assets/button_home.png", 116, 116);
        this.load.spritesheet("button_next", "assets/button_next.png", 152, 58);
        this.load.spritesheet("button_ff", "assets/button_ff.png", 212, 212);
        this.load.spritesheet("button_pp", "assets/button_pp.png", 212, 212);

        // Audio
        this.load.audio("title_music", "audio/JoyInTheWorldNew.mp3");

        // Protect or Pollute
        this.load.image("pp_question_text", "assets/pp/pp_question_text.png");
        this.load.image("pp_score_title", "assets/pp/pp_score_title.png");
        this.load.image("pp_trashcan", "assets/pp/pp_trashcan.png");
        this.load.image("pp_dirt", "assets/pp/pp_dirt.png");
        this.load.image("pp_dog", "assets/pp/pp_dog.png");
        this.load.image("pp_wetlands", "assets/pp/pp_wetlands.png");

        // Wetlands
        this.load.image("pp_wetlands_background", "assets/pp/result/pp_wetlands_background.png");
        this.load.image("pp_wetlands_foreground", "assets/pp/result/pp_wetlands_foreground.png");
        this.load.image("pp_wetlands_water", "assets/pp/result/pp_wetlands_water.png");
        this.load.image("pp_wetlands_overlay_fertilizer", "assets/pp/result/pp_wetlands_overlay_fertilizer.png");
        this.load.image("pp_wetlands_overlay_mud", "assets/pp/result/pp_wetlands_overlay_mud.png");
        this.load.image("pp_wetlands_overlay_oil", "assets/pp/result/pp_wetlands_overlay_oil.png");
        this.load.image("pp_wetlands_overlay_paint", "assets/pp/result/pp_wetlands_overlay_paint.png");
        this.load.image("pp_wetlands_cloud1", "assets/pp/result/pp_wetlands_cloud1.png");
        this.load.image("pp_wetlands_cloud2", "assets/pp/result/pp_wetlands_cloud2.png");
        this.load.image("pp_wetlands_fish", "assets/pp/result/pp_wetlands_fish.png");
        this.load.image("pp_wetlands_lilypads", "assets/pp/result/pp_wetlands_lilypads.png");
        this.load.image("pp_wetlands_bottle", "assets/pp/result/pp_wetlands_bottle.png");
        this.load.image("pp_wetlands_deadfish", "assets/pp/result/pp_wetlands_deadfish.png");
        this.load.image("pp_wetlands_trash", "assets/pp/result/pp_wetlands_trash.png");
        this.load.image("pp_wetlands_bubble", "assets/pp/result/pp_wetlands_bubble.png");
        this.load.image("pp_wetlands_leaves", "assets/pp/result/pp_wetlands_leaves.png");
        this.load.image("pp_wetlands_mulch", "assets/pp/result/pp_wetlands_mulch.png");

        for(var i=0; i<PPGameData.levels.length; ++i) {
            var level = PPGameData.levels[i];
            for(var j=0; j<level.length; ++j) {
                var question = level[j];
                this.load.image(question.name, "assets/pp/level_" + (i + 1) + "/question_" + (j + 1) + "/" + question.name + ".png");                
                for(var k=0; k<question.options.length; ++k) {
                    var option = question.options[k];
                    this.load.image(option.name, "assets/pp/level_" + (i + 1) + "/question_" + (j + 1) + "/" + option.name + ".png")
                }
            }
        }

    },
    create: function() {
        
        // Audio
        this.titleMusic = this.add.audio("title_music", 0.2);
        this.titleMusic.loopFull();

        this.state.start("TitleState");
    }
};