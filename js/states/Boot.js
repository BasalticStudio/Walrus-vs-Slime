/***
 * Game Boot State
 *
 * Using for initialize Game
 *
 */

States.Boot = {
    init: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange =true

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.setMinMax(480, 260, 1024, 768)
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

        if(!this.game.device.desktop) {
            // TODO: Handle Mobile use correctly orientation
        }
    },

    preload: function() {
        // Load Preloader Assets
    },

    create: function() {
        this.state.start('Preloader')
    },

    gameResized: function(width, height) {
        // TODO: Handle game resize, ex. orientation changed
    },
}
