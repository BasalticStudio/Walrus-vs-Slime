/**
 * Game State
 */

(function() {
    class GameState {
        constructor() {
            this.team = -1
            this.loser = -1
            this.PlayerTower = null
            this.EnemyTower = null
            this.Socket = null
            this.Status = GameStatus.Init
        }

        setTeam(team) {
            this.team = team
        }
    }

    Helper.ResetGame = function() {
        window.Game = new GameState()
    }
    Game = new GameState()
}())
