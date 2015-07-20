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
}

Scenes.BattleField.prototype = {
    init: function() {
        this.initLayers()
        this.initPhysics()
    },

    create: function() {
        this.world.setBounds(0, 0, 4000, 768)
        this.Layer.Objects.add(new Objects.Tower(this.game, 'dev_Tower', 100, Teams.Walrus))
        this.Layer.Objects.add(new Objects.Monster(this.game, 'dev_Enemy', 0, Teams.Walrus))

        this.Layer.Objects.add(new Objects.Tower(this.game, 'dev_Tower', 800, Teams.Slime))
        this.Layer.Objects.add(new Objects.Monster(this.game, 'dev_Enemy', 1000, Teams.Slime))

        this.add.image(0, 0, 'UI_Placehold', '', this.UI)
    },

    update: function() {
        this.handleScrolling()
    },

    initLayers: function() {
        // Initialize Basic Layer
        this.GameScene = this.add.group(this.world, 'GameScene')
        this.UI = this.add.group(this.world, 'UI')

        // Add game scene layers
        this.Layer.Background = this.add.group(this.GameScene, 'Background')
        this.Layer.Objects = this.add.group(this.GameScene, 'Objects')
        this.Layer.SkillFx = this.add.group(this.GameScene, 'SkillFx')

        // Setup Camera
        this.UI.fixedToCamera = true
        this.UI.cameraOffset.setTo(0, 568)
    },

    initPhysics: function() {
        this.game.physics.p2.setImpactEvents(true);

        this.CollisionGroup.Slime = this.game.physics.p2.createCollisionGroup()
        this.CollisionGroup.Walrus = this.game.physics.p2.createCollisionGroup()
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
