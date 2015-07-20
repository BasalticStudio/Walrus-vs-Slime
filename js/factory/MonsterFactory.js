/**
 * Monster Factor
 */

Factory.Monster = class MonsterFactory {

    static create(Class, game, x, team) {
        return new Class(game, x, team)
    }

    static getMonsterClass(type) {
        let Monsters = Objects.Monsters
        let MonsterClass = Monsters.Normal
        switch(type) {
            case MonsterType.Normal:
                MonsterClass = Monsters.Normal
                break
            case MonsterType.HighAttack:
                MonsterClass = Monsters.Attack
                break
            case MonsterType.HighDefense:
                MonsterClass = Monsters.Defense
                break
            case MonsterType.HighSpeed:
                MonsterClass = Monsters.Speed
                break
            case MonsterType.Ranger:
                MonsterClass = Monsters.Ranger
                break
            case MonsterType.Super:
                MonsterClass = Monsters.Super
                break
        }

        return MonsterClass
    }
}
