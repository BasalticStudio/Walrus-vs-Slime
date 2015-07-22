/**
 * Tower Factory
 *
 * Build player and enemys tower
 */

Factory.Tower = class TowerFactory {
    static generatePlayer(game) {
        return new Objects.Tower(game, Factory.Tower.getView(Game.team), 300, Game.team)
    }

    static generateEnemy(game) {
        let EnemyTeam = null

        // Auto select another team
        if(Game.team == Teams.Walrus) {
            EnemyTeam = Teams.Slime
        } else {
            EnemyTeam = Teams.Walrus
        }

        return new Objects.Tower(game, Factory.Tower.getView(EnemyTeam), 3700, EnemyTeam)
    }

    static getView(team) {
        let view = ''
        switch(team) {
            case Teams.Walrus:
                view = 'Walrus_Tower'
                break
            case Teams.Slime:
                view = 'Slime_Tower'
                break
        }

        return view
    }
}
