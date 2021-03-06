/**
 * Mana UI
 */

Objects.ManaUI = class ManaUI extends Phaser.Text {
    constructor(game, x, y, tower) {
        super(game, x, y, "Mana: 0/0", {font: "normal 24px 'Open Sans'"})

        this.tower = tower
    }

    update() {
        this.setText("Mana: " + this.tower._mana + "/" + this.tower._maxMana)
    }
}
