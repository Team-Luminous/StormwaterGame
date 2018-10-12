'use strict';

var CLOUD_SPEED = 0.0003;
var CLOUD_MARGIN = 0.5;

var clouds = [
    { x: 0.02, y: 0.04 },
    { x: 0.66, y: 0.18 },
    { x: -0.98, y: 0.04 },
    { x: -0.44, y: 0.18 },
];

function createCloudSprites(scene) {
    return [
        scene.add.sprite(clouds[0].x * WIDTH, clouds[0].y * HEIGHT, "cloud_1"),
        scene.add.sprite(clouds[1].x * WIDTH, clouds[1].y * HEIGHT, "cloud_2"),
        scene.add.sprite(clouds[2].x * WIDTH, clouds[2].y * HEIGHT, "cloud_1"),
        scene.add.sprite(clouds[3].x * WIDTH, clouds[3].y * HEIGHT, "cloud_2")
    ];
}

function updateCloudSprites(scene) {    
    for(var i=0; i<clouds.length; ++i) {
        var cloud = clouds[i];
        cloud.x += CLOUD_SPEED;
        if(cloud.x > 1.0 + CLOUD_MARGIN) cloud.x = -CLOUD_MARGIN;
    }
    for(var i=0; i<scene.cloudSprites.length; ++i) {
        var cloudSprite = scene.cloudSprites[i];
        cloudSprite.x = clouds[i].x * WIDTH;
    }
}
