"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}window.Assets=window.Assets||{},Assets.MainMenu={btn_StartGame:"ui/btn_StartGame.png"},Assets.BattleField={dev_Enemy:"monsters/dev_Enemy.png",dev_Tower:"towers/dev_Tower01.png",UI_Placehold:"ui/UI_Placehold.png",UI_MonsterCard:"ui/UI_MonsterCard.png",UI_MonsterCardSuper:"ui/UI_MonsterCardSuper.png",btn_LevelUP:"ui/btn_LevelUP.png"};var _get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}},_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e=function(){function e(t,a){_classCallCheck(this,e),this.game=t,this.team=a}return _createClass(e,[{key:"execute",value:function(){}},{key:"getTower",value:function(){return Game.team==this.team?Game.PlayerTower:Game.EnemyTower}}]),e}(),t=function(){function t(){_classCallCheck(this,t),this.commands=[]}return _createClass(t,[{key:"push",value:function(t){t instanceof e&&this.commands.push(t)}},{key:"resolve",value:function(){this.commands.length<=0||this.commands.shift().execute()}}]),t}(),a=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a),this.type=n}return _inherits(t,e),_createClass(t,[{key:"execute",value:function(){this.getTower().spawn(this.type)}}]),t}(e),n=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"execute",value:function(){this.getTower().rankUp()}}]),t}(e);window.Command={Resolver:new t,Spawn:a,RankUp:n}}(),window.Debug=window.Debug||!0,window.States=window.States||{},window.Scenes=window.Scenes||{},window.Objects=window.Objects||{},window.Input=window.Input||{},window.Game=window.Input||{},window.Factory=window.Factory||{},window.Command=window.Command||{},window.Teams={Walrus:0,Slime:1},window.Types={Tower:1e3,Monster:1001},Objects.Monsters={},window.MonsterType={Normal:0,HighAttack:1,HighSpeed:2,HighDefense:3,Ranger:4,Super:5},window.Settings={UI:{Height:200}},window.Helper=window.Helper||{},Helper.RetinaFilter=function(e,t){return e},Helper.LoadImages=function(e,t,a){var n="";a=a||0;for(n in t)e.image(n,"img/"+Helper.RetinaFilter(t[n],a))},Helper.CalcLand=function(e,t){var a=e.height,n=t.height/2;return a-Settings.UI.Height-n};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Input=function(){function e(){_classCallCheck(this,e),this._pointerData=[],this._cameraX=0}return _createClass(e,[{key:"OnTouchStart",value:function(){var e=this;return function(t){e._pointerData.push({x:t.touches[0].clientX,y:t.touches[0].clientY}),e.cameraX=this.camera.x}}},{key:"OnTouchEnd",value:function(){var e=this;return function(t){e._pointerData=[]}}},{key:"OnTouchMove",value:function(){var e=this;return function(t){"BattleField"==this.state.current&&(e._pointerData.push({x:t.touches[0].clientX,y:t.touches[0].clientY}),this.camera.x=e.horizontalDragStep())}}},{key:"OnKeyPress",value:function(){return function(e,t){if("BattleField"==this.game.state.current){var a=this.game.state.getCurrentState();(e==Phaser.Keyboard.RIGHT||"d"==e)&&(a.ScrollDirection=Input.SCROLL_DIRECTION.RIGHT),(e==Phaser.Keyboard.LEFT||"a"==e)&&(a.ScrollDirection=Input.SCROLL_DIRECTION.LEFT)}}}},{key:"OnKeyUp",value:function(){return function(e,t){if("BattleField"==this.game.state.current){var a=this.game.state.getCurrentState();a.ScrollDirection=Input.SCROLL_DIRECTION.STOP}}}},{key:"horizontalDragStep",value:function(){if(this._pointerData.length<2)return 0;var e=this._pointerData[0],t=this._pointerData.pop();return-1==e.x||-1==t.x?(this._pointerData.shift(),0):this.cameraX-(e.x-t.x)}}],[{key:"SCROLL_SPEED",get:function(){return 20}},{key:"SCROLL_DIRECTION",get:function(){return{STOP:0,LEFT:1,RIGHT:2}}}]),e}(),window.MonsterData=window.MonsterData||{},window.MonsterCost=window.MonsterCost||{},MonsterData[Teams.Walrus]={},MonsterData[Teams.Slime]={},MonsterData[Teams.Walrus][MonsterType.Normal]={Health:500,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.HighAttack]={Health:500,Attack:200,AttackSpeed:.25,Speed:200,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Walrus][MonsterType.HighSpeed]={Health:250,Attack:100,AttackSpeed:.25,Speed:600,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.HighDefense]={Health:1500,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.Ranger]={Health:250,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.Super]={Health:1500,Attack:200,AttackSpeed:.25,Speed:100,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Slime][MonsterType.Normal]={Health:500,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.HighAttack]={Health:500,Attack:200,AttackSpeed:.25,Speed:200,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Slime][MonsterType.HighSpeed]={Health:250,Attack:100,AttackSpeed:.25,Speed:600,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.HighDefense]={Health:1500,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.Ranger]={Health:250,Attack:100,AttackSpeed:.25,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.Super]={Health:1500,Attack:200,AttackSpeed:.25,Speed:100,MinDamageRatio:.9,MaxDamageRatio:1.3},window.TowerData=window.TowerData||{},TowerData={1:{Health:1e3,Mana:500,ManaRecover:10,Cost:0},2:{Health:1500,Mana:750,ManaRecover:15,Cost:300},3:{Health:2500,Mana:1e3,ManaRecover:20,Cost:550},4:{Health:4e3,Mana:1500,ManaRecover:25,Cost:850},5:{Health:6e3,Mana:2e3,ManaRecover:30,Cost:1400},6:{Health:9e3,Mana:3e3,ManaRecover:40,Cost:1900}};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Factory.Monster=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"create",value:function(e,t,a,n){return new e(t,a,n)}},{key:"getMonsterClass",value:function(e){var t=Objects.Monsters,a=t.Normal;switch(e){case MonsterType.Normal:a=t.Normal;break;case MonsterType.HighAttack:a=t.Attack;break;case MonsterType.HighDefense:a=t.Defense;break;case MonsterType.HighSpeed:a=t.Speed;break;case MonsterType.Ranger:a=t.Ranger;break;case MonsterType.Super:a=t.Super}return a}}]),e}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Factory.Tower=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"generatePlayer",value:function(e){return new Objects.Tower(e,Factory.Tower.getView(Game.team),300,Game.team)}},{key:"generateEnemy",value:function(e){var t=null;return t=Game.team==Teams.Walrus?Teams.Slime:Teams.Walrus,new Objects.Tower(e,Factory.Tower.getView(t),3700,t)}},{key:"getView",value:function(e){var t="";switch(e){case Teams.Walrus:t="dev_Tower";break;case Teams.Slime:t="dev_Tower"}return t}}]),e}(),function(){window.onload=function(){var e=new Phaser.Game(1024,768,Phaser.AUTO,"");e.state.add("Boot",Scenes.Boot),e.state.add("Preloader",Scenes.Preloader),e.state.add("Loading",Scenes.Loading),e.state.add("MainMenu",Scenes.MainMenu),e.state.add("BattleField",Scenes.BattleField),e.state.start("Boot")}}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};Objects.GameUI=function(e){function t(e,a,n,r){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n),this.fixedToCamera=!0,this.scene=r,this.initMonsterCard(),this.initUI()}return _inherits(t,e),_createClass(t,[{key:"initMonsterCard",value:function(){this.game.add.image(0,568,"UI_Placehold","",this),this.add(new Objects.MonsterCardUI(this.game,0,568,"UI_MonsterCard",MonsterType.Nomral)),this.add(new Objects.MonsterCardUI(this.game,120,568,"UI_MonsterCard",MonsterType.HighAttack)),this.add(new Objects.MonsterCardUI(this.game,240,568,"UI_MonsterCard",MonsterType.HighDefense)),this.add(new Objects.MonsterCardUI(this.game,360,568,"UI_MonsterCard",MonsterType.HighSpeed)),this.add(new Objects.MonsterCardUI(this.game,480,568,"UI_MonsterCard",MonsterType.Ranger)),this.add(new Objects.MonsterCardUI(this.game,600,568,"UI_MonsterCardSuper",MonsterType.Super)),this.add(new Objects.LevelUpUI(this.game,840,586))}},{key:"initUI",value:function(){this.add(new Objects.ManaUI(this.game,40,20,this.scene.PlayerTower))}}]),t}(Phaser.Group);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};Objects.LevelUpUI=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,"btn_LevelUP"),this.rank=Game.PlayerTower.Rank,this.cost=TowerData[this.rank+1].Cost,this.onInputUp.add(this.onClick,this),Game.PlayerTower.onRankChanged.add(this.onRankUp,this)}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){this.alpha=Game.PlayerTower.Mana>=this.cost&&6!=this.rank?1:.5}},{key:"onClick",value:function(){Command.Resolver.push(new Command.RankUp(this.game,Game.team))}},{key:"onRankUp",value:function(e){this.rank=e,this.rank<6&&(this.cost=TowerData[this.rank+1].Cost)}}]),t}(Phaser.Button);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};Objects.ManaUI=function(e){function t(e,a,n,r){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,"Mana: 0/0",{font:"normal 24px 'Open Sans'",fill:"#FFF"}),this.tower=r}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){this.setText("Mana: "+this.tower._mana+"/"+this.tower._maxMana)}}]),t}(Phaser.Text);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};!function(){Objects.Monsters={};var e=function(e){function t(e,a,n,r){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,0,a,""),this.y=Helper.CalcLand(this.game,this),e.physics.enable(this,Phaser.Physics.P2JS,Debug),this.team=r,this.active=!0,this.state=States.MonsterMove,this.type=Types.Monster,this._attackTarget=null,this._speed=300,this._health=500,this._damage=20,this._minDamageRatio=.8,this._maxDamageRatio=1.2,this._attackSpeed=.25,this._cost=100,this._coolDown=!1,this.initCollision()}return _inherits(t,e),_createClass(t,[{key:"initCollision",value:function(){if("BattleField"==this.game.state.current){var e=this.game.state.getCurrentState();switch(this.team){case Teams.Walrus:this.body.setCollisionGroup(e.CollisionGroup.Walrus),this.body.collides(e.CollisionGroup.Slime);break;case Teams.Slime:this.body.setCollisionGroup(e.CollisionGroup.Slime),this.body.collides(e.CollisionGroup.Walrus)}this.body.onBeginContact.add(this.onBeginContact,this),this.body.onEndContact.add(this.onEndContact,this)}}},{key:"update",value:function(){this.body.setZeroVelocity(),this.body.setZeroRotation(),this.state.update(this)}},{key:"onBeginContact",value:function(e){this.attackTarget=e.sprite,this.state.handleEvent(this,States.Monster.Events.BeginContact)}},{key:"onEndContact",value:function(e){this.attackTarget=null,this.state.handleEvent(this,States.Monster.Events.EndContact)}},{key:"setState",value:function(e){this.state=e}},{key:"move",value:function(){this.team==Game.team?this.body.moveRight(this._speed):this.body.moveLeft(this._speed)}},{key:"tryAttack",value:function(){if(this.attackTarget.team!=this.team&&!this._coolDown)switch(this.attackTarget.type){case Types.Tower:case Types.Monster:this.attackTarget.damage(this.game.rnd.realInRange(this._damage*this._minDamageRatio,this._damage*this._maxDamageRatio)),this.coolDown()}}},{key:"coolDown",value:function(){var e=this;this._coolDown=!0,this.game.time.events.add(Phaser.Timer.SECOND*this._attackSpeed,function(){e._coolDown=!1})}},{key:"damage",value:function(e){this._health-=e,this._health<=0&&this.destroy()}},{key:"setupStatus",value:function(e){this._damage=e.Attack,this._speed=e.Speed,this._health=e.Health,this._attackSpeed=e.AttackSpeed,this._minDamageRatio=e.MinDamageRatio,this._maxDamageRatio=e.MaxDamageRatio}}],[{key:"Cost",get:function(){return 100}}]),t}(Phaser.Sprite);Objects.Monsters.Normal=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.Normal];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 100}}]),t}(e),Objects.Monsters.Attack=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.HighAttack];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 250}}]),t}(e),Objects.Monsters.Defense=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.HighDefense];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 250}}]),t}(e),Objects.Monsters.Speed=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.HighSpeed];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 250}}]),t}(e),Objects.Monsters.Ranger=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.Ranger];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 200}}]),t}(e),Objects.Monsters.Super=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,"dev_Enemy",a,n);var r=MonsterData[n][MonsterType.Super];this.setupStatus(r)}return _inherits(t,e),_createClass(t,null,[{key:"Cost",get:function(){return 1e3}}]),t}(e)}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};Objects.MonsterCardUI=function(e){function t(e,a,n,r,o){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,r),this.monsterType=o,this.monsterClass=Factory.Monster.getMonsterClass(o),this.monsterCost=this.monsterClass.Cost,this.onInputUp.add(this.onClick,this)}return _inherits(t,e),_createClass(t,[{key:"update",value:function(){this.alpha=Game.PlayerTower.Mana>=this.monsterCost?1:.5}},{key:"onClick",value:function(){Command.Resolver.push(new Command.Spawn(this.game,Game.team,this.monsterType))}},{key:"checkMana",value:function(){}}]),t}(Phaser.Button);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}};Objects.Tower=function(e){function t(e,a,n,r){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,0,a,""),this.y=Helper.CalcLand(this.game,this),e.physics.enable(this,Phaser.Physics.P2JS,Debug),this.body.kinematic=!0,this.team=r,this.type=Types.Tower,this._health=1e3,this._mana=500,this._maxMana=500,this._manaRecover=10,this._rank=1,this.game.time.events.loop(.5*Phaser.Timer.SECOND,this.recoverMana,this),this.onRankChanged=new Phaser.Signal,this.initCollision()}return _inherits(t,e),_createClass(t,[{key:"initCollision",value:function(){if("BattleField"==this.game.state.current){var e=this.game.state.getCurrentState();switch(this.team){case Teams.Walrus:this.body.setCollisionGroup(e.CollisionGroup.Walrus),this.body.collides(e.CollisionGroup.Slime);break;case Teams.Slime:this.body.setCollisionGroup(e.CollisionGroup.Slime),this.body.collides(e.CollisionGroup.Walrus)}}}},{key:"damage",value:function(e){this._health-=e,this._health<=0&&this.destroy()}},{key:"spawn",value:function(e){var t=Factory.Monster.getMonsterClass(e);this._mana>=t.Cost&&(this._mana-=t.Cost,this.parent.add(Factory.Monster.create(t,this.game,this.x,this.team)))}},{key:"recoverMana",value:function(){this._mana+=this._manaRecover,this._mana>this._maxMana&&(this._mana=this._maxMana)}},{key:"rankUp",value:function(){if(!(this._rank>=6)){var e=this._rank+1;this._mana>=TowerData[e].Cost&&(this._mana-=TowerData[e].Cost,this.refreshStatus(e))}}},{key:"refreshStatus",value:function(e){var t=TowerData[e];this._health=t.Health,this._maxMana=t.Mana,this._manaRecover=t.ManaRecover,this._rank=e,this.onRankChanged.dispatch(e)}},{key:"Mana",get:function(){return this._mana}},{key:"Rank",get:function(){return this._rank}}]),t}(Phaser.Sprite),Scenes.BattleField=function(e){this.GameScene=null,this.Layer={Background:null,Objects:null,SkillFx:null},this.UI=null,this.CollisionGroup={Walrus:null,Slime:null},this.ScrollDirection=Input.SCROLL_DIRECTION.STOP,this.PlayerTower=null,this.EnemyTower=null},Scenes.BattleField.prototype={init:function(){this.initLayers(),this.initPhysics(),this.initGame(),this.initUI()},create:function(){this.world.setBounds(0,0,4e3,768),this.Layer.Objects.add(this.PlayerTower),this.Layer.Objects.add(this.EnemyTower)},update:function(){this.handleScrolling(),Command.Resolver.resolve()},initLayers:function(){this.GameScene=this.add.group(this.world,"GameScene"),this.Layer.Background=this.add.group(this.GameScene,"Background"),this.Layer.Objects=this.add.group(this.GameScene,"Objects"),this.Layer.SkillFx=this.add.group(this.GameScene,"SkillFx")},initPhysics:function(){this.game.physics.p2.setImpactEvents(!0),this.CollisionGroup.Slime=this.game.physics.p2.createCollisionGroup(),this.CollisionGroup.Walrus=this.game.physics.p2.createCollisionGroup()},initGame:function(){this.PlayerTower=Game.PlayerTower=Factory.Tower.generatePlayer(this.game),this.EnemyTower=Game.EnemyTower=Factory.Tower.generateEnemy(this.game)},initUI:function(){this.UI=new Objects.GameUI(this.game,this.world,"UI",this)},handleScrolling:function(){switch(this.ScrollDirection){case Input.SCROLL_DIRECTION.RIGHT:this.camera.x+=Input.SCROLL_SPEED;break;case Input.SCROLL_DIRECTION.LEFT:this.camera.x-=Input.SCROLL_SPEED}}},Scenes.Boot={init:function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!0,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.setMinMax(480,260,1024,768),this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,this.game.device.desktop||(this.stage.scaleMode=Phaser.ScaleManager.EXACT_FIT),this.scale.refresh()},preload:function(){},create:function(){this.state.start("Preloader");var e=new Input;this.input.touch.touchStartCallback=e.OnTouchStart(),this.input.touch.touchMoveCallback=e.OnTouchMove(),this.input.touch.touchEndCallback=e.OnTouchEnd(),this.input.keyboard.onPressCallback=e.OnKeyPress(),this.input.keyboard.onUpCallback=e.OnKeyUp(),this.game.time.advancedTiming=!0,this.physics.startSystem(Phaser.Physics.P2JS),Helper.ResetGame()},gameResized:function(e,t){}},Scenes.Loading=function(e){this.targetState=null,this.preloadList={}},Scenes.Loading.prototype={init:function(e,t){this.targetState=e,this.preloadList=t||{}},preload:function(){Helper.LoadImages(this.load,this.preloadList,this.game.device.pixelRatio)},update:function(){this.load.hasLoaded&&this.state.start(this.targetState)}},Scenes.MainMenu=function(e){this.ui={startGame:null}},Scenes.MainMenu.prototype={create:function(){var e=this.cache.getImage("btn_StartGame");this.ui.startGame=this.add.button(this.game.width/2-e.width/2,this.game.height/2-e.height/2,"btn_StartGame",this.startGame,this)},update:function(){},startGame:function(){this.state.start("Loading",!0,!1,"BattleField",Assets.BattleField)}},Scenes.Preloader={preload:function(){Helper.LoadImages(this.load,Assets.MainMenu,this.game.device.pixelRatio)},create:function(){},update:function(){this.load.hasLoaded&&this.state.start("MainMenu")}};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e=function(){function e(){_classCallCheck(this,e),this.team=Teams.Walrus,this.PlayerTower=null,this.EnemyTower=null}return _createClass(e,[{key:"setTeam",value:function(e){this.team=e}}]),e}();Helper.ResetGame=function(){window.Game=new e},Game=new e}();var _get=function(e,t,a){for(var n=!0;n;){var r=e,o=t,i=a;s=l=c=void 0,n=!1,null===r&&(r=Function.prototype);var s=Object.getOwnPropertyDescriptor(r,o);if(void 0!==s){if("value"in s)return s.value;var c=s.get;return void 0===c?void 0:c.call(i)}var l=Object.getPrototypeOf(r);if(null===l)return void 0;e=l,t=o,a=i,n=!0}},_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e={BeginContact:0,EndContact:1,Dead:2},t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"handleEvent",value:function(e,a){return e.SetState(t.MoveState)}},{key:"update",value:function(){}}],[{key:"MoveState",get:function(){return States.MonsterMove}},{key:"AttackState",get:function(){return States.MonsterAttack}},{key:"DeadState",get:function(){return States.DeadState}},{key:"Events",get:function(){return e}}]),t}(),a=function(t){function a(){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return _inherits(a,t),_createClass(a,[{key:"handleEvent",value:function(t,a){switch(a){case e.BeginContact:t.setState(States.MonsterAttack)}}},{key:"update",value:function(e){e.move()}}]),a}(t),n=function(t){function a(){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return _inherits(a,t),_createClass(a,[{key:"handleEvent",value:function(t,a){switch(a){case e.EndContact:t.setState(States.MonsterMove)}}},{key:"update",value:function(e){e.tryAttack()}}]),a}(t),r=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"handleEvent",value:function(e,t){}},{key:"update",value:function(e){}}]),t}(t);States.Monster=t,States.MonsterMove=new a,States.MonsterAttack=new n,States.MonsterDead=new r}();
//# sourceMappingURL=game.js.map