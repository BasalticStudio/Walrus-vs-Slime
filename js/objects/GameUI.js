/**
 * Game UI
 */

Objects.GameUI = class GameUI extends Phaser.Group {
    constructor(game, parent, name, scene) {
        super(game, parent, name)
        this.fixedToCamera = true

        this.scene = scene

        this.initMonsterCard()
        this.initUI()
    }

    initMonsterCard() {
        this.game.add.image(0, 568, 'UI_Placehold', '', this)

        this.add(new Objects.MonsterCardUI(this.game, 0, 568, 'UI_MonsterCard', MonsterType.Nomral))
        this.add(new Objects.MonsterCardUI(this.game, 120, 568, 'UI_MonsterCard', MonsterType.HighAttack))
        this.add(new Objects.MonsterCardUI(this.game, 240, 568, 'UI_MonsterCard', MonsterType.HighDefense))
        this.add(new Objects.MonsterCardUI(this.game, 360, 568, 'UI_MonsterCard', MonsterType.HighSpeed))
        this.add(new Objects.MonsterCardUI(this.game, 480, 568, 'UI_MonsterCard', MonsterType.Ranger))
        this.add(new Objects.MonsterCardUI(this.game, 600, 568, 'UI_MonsterCardSuper', MonsterType.Super))

        this.add(new Objects.LevelUpUI(this.game, 840, 586))
    }

    initUI() {
        this.add(new Objects.ManaUI(this.game, 40, 20, this.scene.PlayerTower))
    }
}
