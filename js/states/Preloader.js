/**
 * Preloader State
 *
 * Using for preload game assets
 */

States.Preloader = {
    preload: function() {

        // Main Menu
        Helper.LoadImages(this.load, Assets.MainMenu, this.game.device.pixelRatio)
    },

    create: function() {

    },

    update: function() {
        if(this.load.hasLoaded) {
            console.log("Loaded")
            this.state.start('MainMenu')
        }
    }
}
