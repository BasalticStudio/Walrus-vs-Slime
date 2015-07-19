(function() {

    window.onload = function() {
        // Initialize Game
        var Game = new Phaser.Game(1024, 768, Phaser.AUTO, '')

        /* Add Game states */

        // Initializer
        Game.state.add('Boot', States.Boot)
        Game.state.add('Preloader', States.Preloader)
        Game.state.add('Loading', States.Loading)

        // Game Scene
        Game.state.add('MainMenu', States.MainMenu)
        Game.state.add('BattleField', States.BattleField)

        // Start Game
        Game.state.start('Boot')
    }

})()
