'use strict';

var load = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize: function load() {
        Phaser.Scene.call(this, {key: "load"});
    },
    preload: function() {
    },
    create: function() {        
        this.scene.start("title");
    }
});