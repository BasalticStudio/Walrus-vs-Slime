/**
* Monster Data
*
* Define all types monster ability
*/

window.MonsterData = window.MonsterData || {}
window.MonsterCost = window.MonsterCost || {}

// Define teams
MonsterData[Teams.Walrus] = {}
MonsterData[Teams.Slime]  = {}

MonsterData[Teams.Walrus][MonsterType.Normal] = {
    Health         : 300,
    Attack         : 50,
    AttackSpeed    : 1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.HighAttack] = {
    Health         : 400,
    Attack         : 200,
    AttackSpeed    : 1.5,
    Speed          : 200,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Walrus][MonsterType.HighSpeed] = {
    Health         : 250,
    Attack         : 50,
    AttackSpeed    : 1,
    Speed          : 600,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.HighDefense] = {
    Health         : 1500,
    Attack         : 30,
    AttackSpeed    : 1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.Ranger] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 1.1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Walrus][MonsterType.Super] = {
    Health         : 3500,
    Attack         : 200,
    AttackSpeed    : 1.5,
    Speed          : 100,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Slime][MonsterType.Normal] = {
    Health         : 300,
    Attack         : 50,
    AttackSpeed    : 1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.HighAttack] = {
    Health         : 400,
    Attack         : 200,
    AttackSpeed    : 1.5,
    Speed          : 200,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}

MonsterData[Teams.Slime][MonsterType.HighSpeed] = {
    Health         : 250,
    Attack         : 50,
    AttackSpeed    : 1,
    Speed          : 600,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.HighDefense] = {
    Health         : 1500,
    Attack         : 30,
    AttackSpeed    : 1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.Ranger] = {
    Health         : 250,
    Attack         : 100,
    AttackSpeed    : 1.1,
    Speed          : 300,
    MinDamageRatio : 0.8,
    MaxDamageRatio : 1.2
}

MonsterData[Teams.Slime][MonsterType.Super] = {
    Health         : 3500,
    Attack         : 200,
    AttackSpeed    : 1.5,
    Speed          : 100,
    MinDamageRatio : 0.9,
    MaxDamageRatio : 1.3
}
