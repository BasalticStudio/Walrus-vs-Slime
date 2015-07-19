/**
 * Battle Field
 *
 * The main game scene, player will defeat each other here.
 */

States.BattleField = function(game) {
    this.GameScene = null
    this.Layer = {
        Background: null,
        Objects: null,
        SkillFx: null
    }
    this.UI = null

    this.enemy = null
}

States.BattleField.prototype = {
    init: function() {
        this.initLayers()
    },

    create: function() {
        this.world.setBounds(0, 0, 3000, 768)
        this.Layer.Objects.add(new Objects.Tower(this.game, 'dev_Tower', 0, Teams.Walrus))
        this.Layer.Objects.add(new Objects.Tower(this.game, 'dev_Tower', 2000, Teams.Slime))
        this.Layer.Objects.add(new Objects.Monster(this.game, 'dev_Enemy'))
    },

    update: function() {
    },

    initLayers: function() {
        // Initialize Basic Layer
        this.GameScene = this.add.group(this.world, 'GameScene')
        this.GameUI = this.add.group(this.world, 'UI')

        // Add game scene layers
        this.Layer.Background = this.add.group(this.GameScene, 'Background')
        this.Layer.Objects = this.add.group(this.GameScene, 'Objects')
        this.Layer.SkillFx = this.add.group(this.GameScene, 'SkillFx')
    }
}
