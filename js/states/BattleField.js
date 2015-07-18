/**
 * Battle Field
 *
 * The main game scene, player will defeat each other here.
 */

States.BattleField = function(game) {
    this.Tower = null
    this.Monsters = []
}

States.BattleField.prototype = {
    create: function() {
        this.world.add(new Objects.Tower(this.game, 'dev_Tower', Teams.Walrus))
        this.world.add(new Objects.Monster(this.game, 'dev_Enemy'))
    },

    update: function() {

    }
}
