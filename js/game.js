(function() {

    window.onload = function() {
        // Initialize Game
        var Game = new Phaser.Game(1024, 768, Phaser.AUTO, 'game')

        /* Add Game states */

        // Initializer
        Game.state.add('Boot', States.Boot)
        Game.state.add('Preloader', States.Preloader)

        // Game Scene
        Game.state.add('MainMenu', States.MainMenu)


        // Start Game
        Game.state.start('Boot')
    }

})()
