(function() {

    window.onload = function() {
        // Initialize Game
        let game = new Phaser.Game(1024, 768, Phaser.AUTO, '')

        /* Add Game states */

        // Initializer
        game.state.add('Boot', Scenes.Boot)
        game.state.add('Preloader', Scenes.Preloader)
        game.state.add('Loading', Scenes.Loading)

        // Game Scene
        game.state.add('MainMenu', Scenes.MainMenu)
        game.state.add('BattleField', Scenes.BattleField)

        // Start Game
        game.state.start('Boot')
    }

})()
