/***
 * Game Boot State
 *
 * Using for initialize Game
 *
 */

Scenes.Boot = {
    init: function() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.setMinMax(480, 260, 1024, 768)
        this.scale.pageAlignHorizontally = true
        this.scale.pageAlignVertically = true

        if(!this.game.device.desktop) {
            // TODO: Handle Mobile use correctly orientation
            this.stage.scaleMode = Phaser.ScaleManager.EXACT_FIT
        }

        this.scale.refresh()
    },

    preload: function() {
        // Load Preloader Assets
    },

    create: function() {
        this.state.start('Preloader')

        // Setup Input controller
        var inputHandler = new Input()
        this.input.touch.touchStartCallback = (ev) => { inputHandler.OnTouchStart(ev, this) }
        this.input.touch.touchMoveCallback = (ev) => { inputHandler.OnTouchMove(ev, this) }
        this.input.touch.touchEndCallback = (ev) => { inputHandler.OnTouchEnd(ev, this) }
        this.input.keyboard.onPressCallback = inputHandler.OnKeyPress()
        this.input.keyboard.onUpCallback = inputHandler.OnKeyUp()

        // Enable FPS
        this.game.time.advancedTiming = true

        // Start System
        this.physics.startSystem(Phaser.Physics.P2JS)

        // Initialize Game
        Helper.ResetGame()
    },

    gameResized: function(width, height) {
        // TODO: Handle game resize, ex. orientation changed
    },
}
