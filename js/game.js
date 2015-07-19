(function() {

    window.onload = function() {
        // Initialize Game
        var Game = new Phaser.Game(1024, 768, Phaser.AUTO, '')

        /* Add Game states */

        // Initializer
        Game.state.add('Boot', Scenes.Boot)
        Game.state.add('Preloader', Scenes.Preloader)
        Game.state.add('Loading', Scenes.Loading)

        // Game Scene
        Game.state.add('MainMenu', Scenes.MainMenu)
        Game.state.add('BattleField', Scenes.BattleField)

        // Start Game
        Game.state.start('Boot')
    }

})()
