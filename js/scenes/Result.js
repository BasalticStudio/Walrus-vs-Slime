/**
 * Result Scene
 */

Scenes.Result = {
    create: function() {
        let message = "You win!"
        if(Game.team == Game.loser) {
            message = "You lose!"
        }

        this.add.text(470, 384, message, {font: "normal 24px 'Open Sans'", fill: 'white'})
    }
}


