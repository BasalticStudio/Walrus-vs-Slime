/**
 * Input Manager
 *
 * Handle Game Inputs
 */

Input = class {
    constructor() {
        this._pointerData = []
        this._cameraX = 0
    }

    static get SCROLL_SPEED() {
        return 20
    }

    static get SCROLL_DIRECTION() {
        return {
            STOP: 0,
            LEFT: 1,
            RIGHT: 2
        }
    }

    OnTouchStart() {
        var self = this
        return function(ev) {
            self._pointerData.push({
                x: ev.touches[0].clientX,
                y: ev.touches[0].clientY
            })
            self.cameraX = this.camera.x
        }
    }

    OnTouchEnd() {
        var self = this
        return function(ev) {
            self._pointerData = []
        }
    }

    OnTouchMove() {
        var self = this
        return function(ev) {
            // Only "BattleField" can use scroll
            if(this.state.current != "BattleField") {
                return
            }

            self._pointerData.push({
                x: ev.touches[0].clientX,
                y: ev.touches[0].clientY
            })

            this.camera.x = self.horizontalDragStep()
        }
    }

    OnKeyPress() {
        // TODO: This code can imrpove more!!
        return function(key, ev) {
            // Only "BattleField" can use scroll
            if(this.game.state.current != "BattleField") {
                return
            }
            var state = this.game.state.getCurrentState()
            if(key == Phaser.Keyboard.RIGHT || key == 'd')  { // Arrow not working now
               state.ScrollDirection = Input.SCROLL_DIRECTION.RIGHT
            }

            if(key == Phaser.Keyboard.LEFT || key == 'a') {
                state.ScrollDirection = Input.SCROLL_DIRECTION.LEFT
            }
        }
    }

    OnKeyUp() {
        return function(key, ev) {
            // Only "BattleField" can use scroll
            if(this.game.state.current != "BattleField") {
                return
            }
            var state = this.game.state.getCurrentState()
            state.ScrollDirection = Input.SCROLL_DIRECTION.STOP
        }
    }

    horizontalDragStep() {
        // Skip if drag path not enough
        if(this._pointerData.length < 2){
            return 0
        }

        var last = this._pointerData[0]
        var current = this._pointerData.pop()

        // Skip if pointer not initialize
        if(last.x == -1 || current.x == -1){
            this._pointerData.shift()
            return 0
        }

        return this.cameraX - (last.x - current.x)
    }
}
