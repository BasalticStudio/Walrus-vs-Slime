/**
 * Main Menu
 *
 */

States.MainMenu = function(game) {
    this.ui = {
        startGame: null
    }
}

States.MainMenu.prototype = {
    create: function() {

        // Align to center
        var btnStartGame = this.cache.getImage('btn_StartGame')
        this.ui.startGame = this.add.button(
            this.game.width / 2 - btnStartGame.width / 2,
            this.game.height / 2 - btnStartGame.height / 2,
            'btn_StartGame', this.startGame, this
        )
    },

    update: function() {

    },

    startGame: function() {
        this.state.start('Loading', true, false, 'BattleField', Assets.BattleField)
    }
}
