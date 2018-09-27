'use strict';

var PPLevelSelect = {
    preload: function() {},
    create: function() {
        // Background
        this.backgroundSprite = this.add.sprite(0, 0, "background_1");

        // Clouds
        this.cloudSprites = createCloudSprites(this);
    },
    update: function() {
        updateCloudSprites(this);
    }
}