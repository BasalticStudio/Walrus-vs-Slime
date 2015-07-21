/**
 * Loading Screen
 *
 */

Scenes.Loading = function(game) {
    this.targetState = null
    this.preloadList = {}
}

Scenes.Loading.prototype = {
    init: function(targetState, preloadList) {
        this.targetState = targetState
        this.preloadList = preloadList || {}
    },

    preload: function() {
        Helper.LoadImages(this.load, this.preloadList, this.game.device.pixelRatio)
    },

    create: function() {
        // Add simple loading message
        this.add.text(450, 384, "Loading...", {font: "normal 24px 'Open Sans'", fill: 'white'})
    },

    update: function() {
        if(Game.Status != GameStatus.Start) {
            return // Game is not ready!
        }

        if(this.load.hasLoaded) {
            this.state.start(this.targetState)
        }
    }
}
