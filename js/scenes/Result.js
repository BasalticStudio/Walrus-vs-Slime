/**
 * Result Scene
 */

Scenes.Result = {
    create: function() {
        let key = "UI_"
        if(Game.team == Game.loser) {
            key += 'Lose'
        } else {
            key += 'Win'
        }

        let message = this.add.image(this.game.width / 2, this.game.height / 2, key)
        message.anchor.x = 0.5
        message.anchor.y = 0.5

        if(Game.Socket) { // Clear socket
            if(!Game.Socket.closed) {
                // Close websocket
                Game.Socket.close()
            }
            // Clear websocket
            Game.Socket = null
        }
    }
}


