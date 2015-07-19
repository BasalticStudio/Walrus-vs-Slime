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
