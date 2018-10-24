'use strict';

var LoadState = {
    preload: function() {

        // Backgrounds
        this.load.image("background_1", "assets/background/1.png");
        this.load.image("background_1_1", "assets/background/1_1.png");  
        this.load.image("background_2", "assets/background/2.png");  
        this.load.image("background_3", "assets/background/3.png");  
        this.load.image("background_4", "assets/background/4.png");  

        // Clouds
        this.load.image("cloud_1", "assets/cloud/1.png");
        this.load.image("cloud_2", "assets/cloud/2.png");
        this.load.image("cloud_3", "assets/cloud/3.png");
        this.load.image("cloud_4", "assets/cloud/4.png");

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
        this.load.image("professor_7", "assets/professor/7.png");

        // Speech Boxes
        this.load.image("speechbox_1", "assets/speechbox/1.png");
        this.load.image("speechbox_2", "assets/speechbox/2.png");
        this.load.image("speechbox_3", "assets/speechbox/3.png");
        this.load.image("speechbox_4", "assets/speechbox/4.png");
        this.load.image("speechbox_5", "assets/speechbox/5.png");

        // Info Boxes
        this.load.image("infobox_intro3", "assets/infobox_intro/3.png");
        this.load.image("infobox_intro4", "assets/infobox_intro/4.png");

        // Buttons
        this.load.spritesheet("button_play", "assets/button/play.png", 116, 116);
        this.load.spritesheet("button_home", "assets/button/home.png", 116, 116);
        this.load.spritesheet("button_replay", "assets/button/replay.png", 116, 116);
        this.load.spritesheet("button_sound", "assets/button/sound.png", 116, 116);
        this.load.spritesheet("button_next", "assets/button/next.png", 152, 58);
        this.load.spritesheet("button_ff", "assets/button/ff.png", 212, 212);
        this.load.spritesheet("button_pp", "assets/button/pp.png", 212, 212);
        this.load.spritesheet("button_pp_lvl1", "assets/pp/button_level1.png", 152, 58);
        this.load.spritesheet("button_pp_lvl2", "assets/pp/button_level2.png", 152, 58);
        this.load.spritesheet("button_pp_lvl3", "assets/pp/button_level3.png", 152, 58);

        // Audio
        this.load.audio("title_music", "audio/JoyInTheWorldNew.mp3");

        // Protect or Pollute
        this.load.image("pp_question_text", "assets/pp/pp_question_text.png");
        this.load.image("pp_score_title", "assets/pp/pp_score_title.png");
        this.load.image("pp_trashcan", "assets/pp/pp_trashcan.png");
        this.load.image("pp_dirt", "assets/pp/pp_dirt.png");
        this.load.image("pp_dog", "assets/pp/pp_dog.png");
        this.load.image("pp_wetlands", "assets/pp/pp_wetlands.png");
        this.load.image("pp_house", "assets/pp/pp_house.png");
        this.load.image("pp_raindrop", "assets/pp/pp_raindrop.png");

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

        // Find It & Fix It
        this.load.image("ff_background", "assets/ff/ff_background.png");
        this.load.image("ff_bush", "assets/ff/ff_bush.png");

        this.load.image("ff_question_box", "assets/ff/ff_question_box.png");
        this.load.image("ff_oops_box", "assets/ff/ff_oops_box.png");
        this.load.image("ff_correct_box", "assets/ff/ff_correct_box.png");

        this.load.spritesheet("ff_button_fix_it", "assets/ff/ff_button_fix_it.png", 187, 52);
        this.load.spritesheet("ff_button_its_ok", "assets/ff/ff_button_its_ok.png", 187, 52);
        this.load.spritesheet("ff_button_next", "assets/ff/ff_button_next.png", 200, 82);

        this.load.image("ff_image_car", "assets/ff/ff_image_car.png");
        this.load.image("ff_image_car_oil", "assets/ff/ff_image_car_oil.png");
        this.load.image("ff_image_dirt_sidewalk", "assets/ff/ff_image_dirt_sidewalk.png");
        this.load.image("ff_image_dirt_sweep", "assets/ff/ff_image_dirt_sweep.png");
        this.load.image("ff_image_dog_poop", "assets/ff/ff_image_dog_poop.png");
        this.load.image("ff_image_pickup_poop", "assets/ff/ff_image_pickup_poop.png");
        this.load.image("ff_image_downspout_yard", "assets/ff/ff_image_downspout_yard.png");
        this.load.image("ff_image_downspout_concrete", "assets/ff/ff_image_downspout_concrete.png");
        this.load.image("ff_image_sprinkler_fixed", "assets/ff/ff_image_sprinkler_fixed.png");
        this.load.image("ff_image_sprinkler_sidewalk", "assets/ff/ff_image_sprinkler_sidewalk.png");
        this.load.image("ff_image_trash", "assets/ff/ff_image_trash.png");
        this.load.image("ff_image_trash_pickup", "assets/ff/ff_image_trash_pickup.png");        
        this.load.image("ff_image_trashbin_open", "assets/ff/ff_image_trashbin_open.png");
        this.load.image("ff_image_trashbin_closed", "assets/ff/ff_image_trashbin_closed.png");
        this.load.image("ff_image_washing_car_carwash", "assets/ff/ff_image_washing_car_carwash.png");
        this.load.image("ff_image_washing_car_driveway", "assets/ff/ff_image_washing_car_driveway.png");
        this.load.image("ff_image_washing_dog_driveway", "assets/ff/ff_image_washing_dog_driveway.png");
        this.load.image("ff_image_washing_dog_grass", "assets/ff/ff_image_washing_dog_grass.png");

        this.load.image("ff_car", "assets/ff/ff_car.png");
        this.load.image("ff_car_outline", "assets/ff/ff_car_outline.png");
        this.load.image("ff_car_oil", "assets/ff/ff_car_oil.png");
        this.load.image("ff_car_oil_outline", "assets/ff/ff_car_oil_outline.png");

        this.load.image("ff_dirt", "assets/ff/ff_dirt.png");
        this.load.image("ff_dirt_outline", "assets/ff/ff_dirt_outline.png");

        this.load.image("ff_dog_poop", "assets/ff/ff_dog_poop.png");
        this.load.image("ff_dog_poop_outline", "assets/ff/ff_dog_poop_outline.png");
        this.load.image("ff_pickup_poop", "assets/ff/ff_pickup_poop.png");
        this.load.image("ff_pickup_poop_outline", "assets/ff/ff_pickup_poop_outline.png");

        this.load.image("ff_downspout", "assets/ff/ff_downspout.png");
        this.load.image("ff_downspout_outline", "assets/ff/ff_downspout_outline.png");
        this.load.image("ff_downspout_water", "assets/ff/ff_downspout_water.png");

        this.load.image("ff_sprinkler", "assets/ff/ff_sprinkler.png");
        this.load.image("ff_sprinkler_outline", "assets/ff/ff_sprinkler_outline.png");
        this.load.image("ff_sprinkler_fixed", "assets/ff/ff_sprinkler_fixed.png");
        this.load.image("ff_sprinkler_fixed_outline", "assets/ff/ff_sprinkler_fixed_outline.png");
        this.load.image("ff_sprinkler_water", "assets/ff/ff_sprinkler_water.png");

        this.load.image("ff_trash", "assets/ff/ff_trash.png");
        this.load.image("ff_trash_outline", "assets/ff/ff_trash_outline.png");

        this.load.image("ff_trashbin_closed", "assets/ff/ff_trashbin_closed.png");
        this.load.image("ff_trashbin_closed_outline", "assets/ff/ff_trashbin_closed_outline.png");
        this.load.image("ff_trashbin_open", "assets/ff/ff_trashbin_open.png");
        this.load.image("ff_trashbin_open_outline", "assets/ff/ff_trashbin_open_outline.png");

        this.load.image("ff_washing_car", "assets/ff/ff_washing_car.png");
        this.load.image("ff_washing_car_outline", "assets/ff/ff_washing_car_outline.png");
        this.load.image("ff_washing_car_water", "assets/ff/ff_washing_car_water.png");

        this.load.image("ff_washing_dog", "assets/ff/ff_washing_dog.png");
        this.load.image("ff_washing_dog_outline", "assets/ff/ff_washing_dog_outline.png");
        this.load.image("ff_washing_dog_water", "assets/ff/ff_washing_dog_water.png");
    },
    create: function() {
        
        // Audio
        this.titleMusic = this.add.audio("title_music", 0.2);
        this.titleMusic.loopFull();

        this.state.start("TitleState");    
        // this.state.start("FFGameState");  
    }
};