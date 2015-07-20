/**
 * Main Menu
 *
 */

Scenes.MainMenu = function(game) {
    this.ui = {
        WalrusTeam: null,
        SlimeTeam: null,
    }
}

Scenes.MainMenu.prototype = {
    create: function() {

        // Align to center
        let Walrus = this.cache.getImage('btn_WalrusTeam')
        let Slime = this.cache.getImage('btn_SlimeTeam')

        this.ui.WalrusTeam = this.add.button(
            this.game.width / 2 - Walrus.width - 15,
            this.game.height / 2 - Walrus.height / 2,
            'btn_WalrusTeam', ()=> { Game.team = Teams.Walrus; this.startGame() }, this
        )

        this.ui.SlimeTeam = this.add.button(
            this.game.width / 2 + 15,
            this.game.height / 2 - Slime.height / 2,
            'btn_SlimeTeam', ()=> { Game.team = Teams.Slime; this.startGame() }, this
        )
    },

    update: function() {

    },

    startGame: function() {
        this.state.start('Loading', true, false, 'BattleField', Assets.BattleField)
    }
}
