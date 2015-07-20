/**
* Monster Data
*
* Define all types monster ability
*/

window.MonsterData = window.MonsterData || {}

// Define teams
MonsterData[Teams.Walrus] = {}
MonsterData[Teams.Slime]  = {}

MonsterData[Teams.Walrus][MonsterType.Normal] = {
    Health         : 500,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.HighAttack] = {
    Health         : 500,
    Attack         : 200,
    AttackSpeed    : 0.25,
    Speed          : 200,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Walrus][MonsterType.HighSpeed] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 600,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.HighDefense] = {
    Health         : 1500,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.Ranger] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.Super] = {
    Health         : 1500,
    Attack         : 200,
    AttackSpeed    : 0.25,
    Speed          : 100,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Slime][MonsterType.Normal] = {
    Health         : 500,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.HighAttack] = {
    Health         : 500,
    Attack         : 200,
    AttackSpeed    : 0.25,
    Speed          : 200,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Slime][MonsterType.HighSpeed] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 600,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.HighDefense] = {
    Health         : 1500,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.Ranger] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 0.25,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.Super] = {
    Health         : 1500,
    Attack         : 200,
    AttackSpeed    : 0.25,
    Speed          : 100,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}
