/**
 * Loading Screen
 *
 */

States.Loading = function(game) {
    this.targetState = null
    this.preloadList = {}
}

States.Loading.prototype = {
    init: function(targetState, preloadList) {
        this.targetState = targetState
        this.preloadList = preloadList || {}
    },

    preload: function() {
        Helper.LoadImages(this.load, this.preloadList, this.game.device.pixelRatio)
    },

    update: function() {
        if(this.load.hasLoaded) {
            this.state.start(this.targetState)
        }
    }
}
