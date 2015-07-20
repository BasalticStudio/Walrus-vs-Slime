/**
 * Battle Field
 *
 * The main game scene, player will defeat each other here.
 */

Scenes.BattleField = function(game) {
    this.GameScene = null
    this.Layer = {
        Background: null,
        Objects: null,
        SkillFx: null
    }
    this.UI = null
    this.CollisionGroup = {
        Walrus: null,
        Slime: null
    }
    this.ScrollDirection = Input.SCROLL_DIRECTION.STOP
    this.PlayerTower = null
    this.EnemyTower = null
}

Scenes.BattleField.prototype = {
    init: function() {
        this.initLayers()
        this.initPhysics()
        this.initGame()
        this.initUI()
    },

    create: function() {
        this.world.setBounds(0, 0, 4000, 768)
        this.Layer.Objects.add(this.PlayerTower)
        this.Layer.Objects.add(this.EnemyTower)
    },

    update: function() {
        this.handleScrolling()
        Command.Resolver.resolve()
    },

    initLayers: function() {
        // Initialize Basic Layer
        this.GameScene = this.add.group(this.world, 'GameScene')

        // Add game scene layers
        this.Layer.Background = this.add.group(this.GameScene, 'Background')
        this.Layer.Objects = this.add.group(this.GameScene, 'Objects')
        this.Layer.SkillFx = this.add.group(this.GameScene, 'SkillFx')
    },

    initPhysics: function() {
        //this.game.physics.p2.setImpactEvents(true);
        this.game.physics.p2.setBounds(0, 0, 4000, 768)

        this.CollisionGroup.Slime = this.game.physics.p2.createCollisionGroup()
        this.CollisionGroup.Walrus = this.game.physics.p2.createCollisionGroup()
    },

    initGame: function() {
        this.PlayerTower = Game.PlayerTower = Factory.Tower.generatePlayer(this.game)
        this.EnemyTower = Game.EnemyTower = Factory.Tower.generateEnemy(this.game)
    },

    initUI: function() {
        this.UI = new Objects.GameUI(this.game, this.world,'UI', this)
    },

    handleScrolling: function() {
        switch(this.ScrollDirection) {
            case Input.SCROLL_DIRECTION.RIGHT:
                this.camera.x += Input.SCROLL_SPEED
                break
            case Input.SCROLL_DIRECTION.LEFT:
                this.camera.x -= Input.SCROLL_SPEED
                break
        }
    }
}
