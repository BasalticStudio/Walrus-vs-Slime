"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}window.Animation=window.Animation||{},Animation={Walrus_Normal:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Walrus_Attack:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Walrus_Defense:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Walrus_Speed:{Walk:[0,1],Attack:[0,1],Dead:[0,2]},Walrus_Ranger:{Walk:[0,1],Attack:[0,2],Dead:[1,3]},Walrus_Super:{Walk:[0],Attack:[0],Dead:[1]},Slime_Normal:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Slime_Attack:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Slime_Defense:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Slime_Speed:{Walk:[0],Attack:[0],Dead:[0,1,2]},Slime_Ranger:{Walk:[0,1],Attack:[1,2],Dead:[1,3]},Slime_Super:{Walk:[0],Attack:[0,1],Dead:[0,2,3,4]}},window.Assets=window.Assets||{},Assets.MainMenu={btn_WalrusTeam:"ui/btn_WalrusTeam.png",btn_SlimeTeam:"ui/btn_SlimeTeam.png"},Assets.BattleField={Walrus_Tower:["towers/Walrus_tower.png",300,300,3],Slime_Tower:["towers/Slime_tower.png",300,300,3],Walrus_Normal:["monsters/walrus/m01.png",200,200,4],Walrus_Ranger:["monsters/walrus/m02.png",400,200,4],Walrus_Defense:["monsters/walrus/m03.png",200,200,4],Walrus_Attack:["monsters/walrus/m04.png",200,200,4],Walrus_Speed:["monsters/walrus/m05.png",200,200,3],Walrus_Super:["monsters/walrus/m06.png",300,300,2],Slime_Normal:["monsters/slime/m01.png",200,200,4],Slime_Ranger:["monsters/slime/m02.png",200,200,5],Slime_Defense:["monsters/slime/m03.png",200,200,4],Slime_Attack:["monsters/slime/m04.png",200,200,4],Slime_Speed:["monsters/slime/m05.png",200,200,3],Slime_Super:["monsters/slime/m06.png",300,300,5],Background_Slime:"background_slime.jpg",Background_Walrus:"background_walrus.jpg",UI_Placehold:"ui/UI_Placehold.png",btn_Normal:"ui/btn_Soldier.png",btn_Attack:"ui/btn_Grenade.png",btn_Defense:"ui/btn_Defence.png",btn_Speed:"ui/btn_Speed.png",btn_Ranger:"ui/btn_Gunner.png",btn_Super:"ui/btn_Elite.png",btn_LevelUP:"ui/btn_LevelUP.png"};var _get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}},_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e=function(){function e(t,a){if(_classCallCheck(this,e),this.constructor===e)throw new TypeError("Cannot consturct Command instances directly");this.game=t,this.team=a}return _createClass(e,null,[{key:"className",value:"Command",enumerable:!0}]),_createClass(e,[{key:"execute",value:function(){}},{key:"deserialize",value:function(e){var t="";for(t in e)this[t.toLowerCase()]=e[t]}},{key:"getTower",value:function(){return Game.team==this.team?Game.PlayerTower:Game.EnemyTower}}]),e}(),t=function(){function t(){_classCallCheck(this,t),this.commands=[]}return _createClass(t,null,[{key:"className",value:"CommandResolver",enumerable:!0}]),_createClass(t,[{key:"push",value:function(t){t instanceof e&&this.commands.push(t)}},{key:"resolve",value:function(){this.commands.length<=0||this.commands.shift().execute()}}]),t}(),a=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a),this.type=n}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"SpawnCommand",enumerable:!0}]),_createClass(t,[{key:"execute",value:function(){this.getTower().spawn(this.type)}}]),t}(e),n=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"execute",value:function(){this.getTower().rankUp()}}],[{key:"className",value:"RankUpCommand",enumerable:!0}]),t}(e);window.Command={Abstract:e,Resolver:new t,Spawn:a,RankUp:n}}(),window.Debug=window.Debug||!1,window.States=window.States||{},window.Scenes=window.Scenes||{},window.Objects=window.Objects||{},window.Input=window.Input||{},window.Game=window.Input||{},window.Factory=window.Factory||{},window.Command=window.Command||{},window.Teams={Walrus:0,Slime:1},window.Types={Tower:1e3,Monster:1001},Objects.Monsters={},window.MonsterType={Normal:0,HighAttack:1,HighSpeed:2,HighDefense:3,Ranger:4,Super:5},window.Settings={UI:{Height:200}},window.GameStatus={Init:0,Registered:1,Start:2,End:3},window.Helper=window.Helper||{},Helper.RetinaFilter=function(e,t){return e},Helper.LoadImages=function(e,t,a){var n="",s=null;a=a||0;for(n in t)s=t[n],s instanceof Array?e.spritesheet(n,"img/"+Helper.RetinaFilter(s[0],a),s[1],s[2],s[3]):e.image(n,"img/"+Helper.RetinaFilter(s,a))},Helper.CalcLand=function(e,t){var a=e.height,n=t.height/2;return a-Settings.UI.Height-n-50};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Input=function(){function e(){_classCallCheck(this,e),this._pointerData=[],this._cameraX=0}return _createClass(e,[{key:"OnTouchStart",value:function(e,t){this._pointerData.push({x:e.touches[0].clientX,y:e.touches[0].clientY}),this.cameraX=t.camera.x}},{key:"OnTouchEnd",value:function(e,t){this._pointerData=[]}},{key:"OnTouchMove",value:function(e,t){"BattleField"==t.state.current&&(this._pointerData.push({x:e.touches[0].clientX,y:e.touches[0].clientY}),t.camera.x=this.horizontalDragStep())}},{key:"OnKeyPress",value:function(){return function(e,t){if("BattleField"==this.game.state.current){var a=this.game.state.getCurrentState();(e==Phaser.Keyboard.RIGHT||"d"==e)&&(a.ScrollDirection=Input.SCROLL_DIRECTION.RIGHT),(e==Phaser.Keyboard.LEFT||"a"==e)&&(a.ScrollDirection=Input.SCROLL_DIRECTION.LEFT)}}}},{key:"OnKeyUp",value:function(){return function(e,t){if("BattleField"==this.game.state.current){var a=this.game.state.getCurrentState();a.ScrollDirection=Input.SCROLL_DIRECTION.STOP}}}},{key:"horizontalDragStep",value:function(){if(this._pointerData.length<2)return 0;var e=this._pointerData[0],t=this._pointerData.pop();return-1==e.x||-1==t.x?(this._pointerData.shift(),0):this.cameraX-(e.x-t.x)}}],[{key:"SCROLL_SPEED",get:function(){return 20}},{key:"SCROLL_DIRECTION",get:function(){return{STOP:0,LEFT:1,RIGHT:2}}}]),e}(),window.MonsterData=window.MonsterData||{},window.MonsterCost=window.MonsterCost||{},MonsterData[Teams.Walrus]={},MonsterData[Teams.Slime]={},MonsterData[Teams.Walrus][MonsterType.Normal]={Health:300,Attack:50,AttackSpeed:1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.HighAttack]={Health:400,Attack:200,AttackSpeed:1.5,Speed:200,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Walrus][MonsterType.HighSpeed]={Health:250,Attack:50,AttackSpeed:1,Speed:600,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.HighDefense]={Health:1500,Attack:30,AttackSpeed:1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.Ranger]={Health:250,Attack:100,AttackSpeed:1.1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Walrus][MonsterType.Super]={Health:3500,Attack:200,AttackSpeed:1.5,Speed:100,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Slime][MonsterType.Normal]={Health:300,Attack:50,AttackSpeed:1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.HighAttack]={Health:400,Attack:200,AttackSpeed:1.5,Speed:200,MinDamageRatio:.9,MaxDamageRatio:1.3},MonsterData[Teams.Slime][MonsterType.HighSpeed]={Health:250,Attack:50,AttackSpeed:1,Speed:600,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.HighDefense]={Health:1500,Attack:30,AttackSpeed:1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.Ranger]={Health:250,Attack:100,AttackSpeed:1.1,Speed:300,MinDamageRatio:.8,MaxDamageRatio:1.2},MonsterData[Teams.Slime][MonsterType.Super]={Health:3500,Attack:200,AttackSpeed:1.5,Speed:100,MinDamageRatio:.9,MaxDamageRatio:1.3};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){window.Socket=window.Socket||{};var e={Command:0,Status:1},t=function(){function t(e,a){var n=this;if(_classCallCheck(this,t),e=e||"",e.length<=0){var s=window.location;e="ws:","https:"===s.protocol&&(e="wss:"),e+="//"+s.host,e+=s.pathname+"ws"}this.game=a,this.ready=!1,this.socket=new WebSocket(e),this.socket.binaryType="arraybuffer",this.socket.onopen=function(){n.onOpen()},this.socket.onmessage=function(e){n.onMessage(e)},this.socket.onclose=function(){n.onClose()}}return _createClass(t,null,[{key:"className",value:"Socket",enumerable:!0}]),_createClass(t,[{key:"onOpen",value:function(){this.ready=!0}},{key:"onMessage",value:function(t){var a=new Uint8Array(t.data),n=msgpack.unpack(a);if(null!=n&&"undefined"!=n.Type)switch(n.Type){case e.Command:this.pushCommand(n.Data);break;case e.Status:this.handleStatus(n.Data)}}},{key:"send",value:function(e,t){if(this.socket.readyState==WebSocket.OPEN){var a={Type:e,Data:t},n=new Uint8Array(msgpack.pack(a));this.socket.send(n)}}},{key:"execCommand",value:function(t,a,n){n=n||{},this.send(e.Command,{Name:t,Team:a,Params:n})}},{key:"pushCommand",value:function(e){var t=Command[e.Name];if(t){var a=new t(this.game,e.Team);a.deserialize(e.Params),Command.Resolver.push(a)}}},{key:"handleStatus",value:function(e){switch(e.Name){case"Register":1==e.Value&&(Game.Status=GameStatus.Registered,this.updateStatus("Match",0));break;case"Match":1==e.Value&&(Game.Status=GameStatus.Start)}}},{key:"updateStatus",value:function(t,a){this.send(e.Status,{Name:t,Value:a})}},{key:"onClose",value:function(){}}]),t}();window.Socket=t,window.PacketType=e}(),window.TowerData=window.TowerData||{},TowerData={1:{Health:1e3,Mana:500,ManaRecover:10,Cost:0},2:{Health:1500,Mana:750,ManaRecover:15,Cost:300},3:{Health:2500,Mana:1e3,ManaRecover:20,Cost:500},4:{Health:4e3,Mana:1500,ManaRecover:25,Cost:700},5:{Health:6e3,Mana:2e3,ManaRecover:30,Cost:1e3},6:{Health:9e3,Mana:3e3,ManaRecover:40,Cost:1500}};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Factory.Monster=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"create",value:function(e,t,a,n){return new e(t,a,n)}},{key:"getMonsterClass",value:function(e){var t=Objects.Monsters,a=t.Normal;switch(e){case MonsterType.Normal:a=t.Normal;break;case MonsterType.HighAttack:a=t.Attack;break;case MonsterType.HighDefense:a=t.Defense;break;case MonsterType.HighSpeed:a=t.Speed;break;case MonsterType.Ranger:a=t.Ranger;break;case MonsterType.Super:a=t.Super}return a}},{key:"className",value:"MonsterFactory",enumerable:!0}]),e}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();Factory.Tower=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"generatePlayer",value:function(e){return new Objects.Tower(e,Factory.Tower.getView(Game.team),300,Game.team)}},{key:"generateEnemy",value:function(e){var t=null;return t=Game.team==Teams.Walrus?Teams.Slime:Teams.Walrus,new Objects.Tower(e,Factory.Tower.getView(t),3700,t)}},{key:"getView",value:function(e){var t="";switch(e){case Teams.Walrus:t="Walrus_Tower";break;case Teams.Slime:t="Slime_Tower"}return t}},{key:"className",value:"TowerFactory",enumerable:!0}]),e}(),function(){window.onload=function(){var e=new Phaser.Game(1024,768,Phaser.AUTO,"");e.state.add("Boot",Scenes.Boot),e.state.add("Preloader",Scenes.Preloader),e.state.add("Loading",Scenes.Loading),e.state.add("MainMenu",Scenes.MainMenu),e.state.add("BattleField",Scenes.BattleField),e.state.add("Result",Scenes.Result),e.state.start("Boot")}}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};Objects.GameUI=function(e){function t(e,a,n,s){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n),this.fixedToCamera=!0,this.scene=s,this.initMonsterCard(),this.initUI()}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"GameUI",enumerable:!0}]),_createClass(t,[{key:"initMonsterCard",value:function(){this.game.add.image(0,568,"UI_Placehold","",this),this.add(new Objects.MonsterCardUI(this.game,0,568,"btn_Normal",MonsterType.Normal)),this.add(new Objects.MonsterCardUI(this.game,120,568,"btn_Attack",MonsterType.HighAttack)),this.add(new Objects.MonsterCardUI(this.game,240,568,"btn_Defense",MonsterType.HighDefense)),this.add(new Objects.MonsterCardUI(this.game,360,568,"btn_Speed",MonsterType.HighSpeed)),this.add(new Objects.MonsterCardUI(this.game,480,568,"btn_Ranger",MonsterType.Ranger)),this.add(new Objects.MonsterCardUI(this.game,600,568,"btn_Super",MonsterType.Super)),this.add(new Objects.LevelUpUI(this.game,840,586))}},{key:"initUI",value:function(){this.add(new Objects.ManaUI(this.game,40,20,this.scene.PlayerTower))}}]),t}(Phaser.Group);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};Objects.LevelUpUI=function(e){function t(e,a,n){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,"btn_LevelUP"),this.rank=Game.PlayerTower.Rank,this.cost=TowerData[this.rank+1].Cost,this.onInputUp.add(this.onClick,this),Game.PlayerTower.onRankChanged.add(this.onRankUp,this)}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"LevelUpUI",enumerable:!0}]),_createClass(t,[{key:"update",value:function(){this.alpha=Game.PlayerTower.Mana>=this.cost&&6!=this.rank?1:.5}},{key:"onClick",value:function(){Game.Socket.execCommand("RankUp",Game.team)}},{key:"onRankUp",value:function(e){this.rank=e,this.rank<6&&(this.cost=TowerData[this.rank+1].Cost)}}]),t}(Phaser.Button);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};Objects.ManaUI=function(e){function t(e,a,n,s){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,"Mana: 0/0",{font:"normal 24px 'Open Sans'"}),this.tower=s}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"ManaUI",enumerable:!0}]),_createClass(t,[{key:"update",value:function(){this.setText("Mana: "+this.tower._mana+"/"+this.tower._maxMana)}}]),t}(Phaser.Text);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};!function(){Objects.Monsters={};var e=function(e,t){return e==Teams.Walrus?"Walrus_"+t:"Slime_"+t},t=function(e){function t(e,a,n,s){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,0,a,""),this.y=Helper.CalcLand(this.game,this),this.checkWorldBonuds=!0,e.physics.enable(this,Phaser.Physics.P2JS,Debug),this.team=s,this.active=!0,this.state=States.MonsterMove,this.type=Types.Monster,this._attackTarget=null,this._speed=300,this._health=500,this._damage=20,this._minDamageRatio=.8,this._maxDamageRatio=1.2,this._attackSpeed=.25,this._cost=100,this._coolDown=!1,this.initCollision(),this.setupAnimation(a),this.animations.play("Walk")}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"Monster",enumerable:!0}]),_createClass(t,[{key:"initCollision",value:function(){if("BattleField"==this.game.state.current){var e=this.game.state.getCurrentState();switch(this.team){case Teams.Walrus:this.body.setCollisionGroup(e.CollisionGroup.Walrus),this.body.collides(e.CollisionGroup.Slime);break;case Teams.Slime:this.body.setCollisionGroup(e.CollisionGroup.Slime),this.body.collides(e.CollisionGroup.Walrus)}this.body.onBeginContact.add(this.onBeginContact,this),this.body.onEndContact.add(this.onEndContact,this)}}},{key:"setupAnimation",value:function(e){var t=Animation[e];this.animations.add("Walk",t.Walk,4,!0),this.animations.add("Attack",t.Attack,4),this.animations.add("Dead",t.Attack,4)}},{key:"update",value:function(){this.body.setZeroVelocity(),this.body.setZeroRotation(),this.state.update(this)}},{key:"onBeginContact",value:function(e){e&&e.sprite&&(this.attackTarget=e.sprite),this.state.handleEvent(this,States.Monster.Events.BeginContact)}},{key:"onEndContact",value:function(e){this.attackTarget=null,this.state.handleEvent(this,States.Monster.Events.EndContact)}},{key:"setState",value:function(e){this.state=e}},{key:"move",value:function(){this.team==Game.team?this.body.moveRight(this._speed):(this.body.moveLeft(this._speed),this.scale.x=-1)}},{key:"tryAttack",value:function(){if(this.attackTarget&&this.attackTarget.team!=this.team&&!this._coolDown)switch(this.attackTarget.type){case Types.Tower:case Types.Monster:this.animations.play("Attack"),this.attackTarget.damage(this.game.rnd.realInRange(this._damage*this._minDamageRatio,this._damage*this._maxDamageRatio)),this.coolDown()}}},{key:"coolDown",value:function(){var e=this;this._coolDown=!0,this.game.time.events.add(Phaser.Timer.SECOND*this._attackSpeed,function(){e._coolDown=!1})}},{key:"damage",value:function(e){this._health-=e,this._health<=0&&this.destroy()}},{key:"setupStatus",value:function(e){this._damage=e.Attack,this._speed=e.Speed,this._health=e.Health,this._attackSpeed=e.AttackSpeed,this._minDamageRatio=e.MinDamageRatio,this._maxDamageRatio=e.MaxDamageRatio}}],[{key:"Cost",get:function(){return 100}}]),t}(Phaser.Sprite);Objects.Monsters.Normal=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Normal"),n,s);var r=MonsterData[s][MonsterType.Normal];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"NormalMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 100}}]),a}(t),Objects.Monsters.Attack=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Attack"),n,s);var r=MonsterData[s][MonsterType.HighAttack];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"AttackMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 250}}]),a}(t),Objects.Monsters.Defense=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Defense"),n,s);var r=MonsterData[s][MonsterType.HighDefense];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"DefenseMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 250}}]),a}(t),Objects.Monsters.Speed=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Speed"),n,s);var r=MonsterData[s][MonsterType.HighSpeed];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"SpeedMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 250}}]),a}(t),Objects.Monsters.Ranger=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Ranger"),n,s),this.body.setRectangle(200,100,50),this.initCollision();var r=MonsterData[s][MonsterType.Ranger];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"RangerMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 200}}]),a}(t),Objects.Monsters.Super=function(t){function a(t,n,s){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this,t,e(s,"Super"),n,s);var r=MonsterData[s][MonsterType.Super];this.setupStatus(r)}return _inherits(a,t),_createClass(a,null,[{key:"className",value:"SuperMonster",enumerable:!0}]),_createClass(a,null,[{key:"Cost",get:function(){return 1e3}}]),a}(t)}();var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};Objects.MonsterCardUI=function(e){function t(e,a,n,s,r){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,a,n,s),this.monsterType=r,this.monsterClass=Factory.Monster.getMonsterClass(r),this.monsterCost=this.monsterClass.Cost,this.onInputUp.add(this.onClick,this)}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"MonsterCardUI",enumerable:!0}]),_createClass(t,[{key:"update",value:function(){this.alpha=Game.PlayerTower.Mana>=this.monsterCost?1:.5}},{key:"onClick",value:function(){Game.Socket.execCommand("Spawn",Game.team,{Type:this.monsterType})}},{key:"checkMana",value:function(){}}]),t}(Phaser.Button);var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),_get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}};Objects.Tower=function(e){function t(e,a,n,s){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e,n,0,a,""),this.y=Helper.CalcLand(this.game,this),e.physics.enable(this,Phaser.Physics.P2JS,Debug),this.body.kinematic=!0,this.team=s,this.type=Types.Tower,this._health=1e3,this._mana=500,this._maxMana=500,this._manaRecover=10,this._rank=1,this.game.time.events.loop(.5*Phaser.Timer.SECOND,this.recoverMana,this),this.onRankChanged=new Phaser.Signal,this.initCollision(),this.initAnimation()}return _inherits(t,e),_createClass(t,null,[{key:"className",value:"Tower",enumerable:!0}]),_createClass(t,[{key:"initCollision",value:function(){if("BattleField"==this.game.state.current){var e=this.game.state.getCurrentState();switch(this.team){case Teams.Walrus:this.body.setCollisionGroup(e.CollisionGroup.Walrus),this.body.collides(e.CollisionGroup.Slime);break;case Teams.Slime:this.body.setCollisionGroup(e.CollisionGroup.Slime),this.body.collides(e.CollisionGroup.Walrus)}}}},{key:"initAnimation",value:function(){this.animations.add("Rank1",[0]),this.animations.add("Rank2",[1]),this.animations.add("Rank3",[2])}},{key:"damage",value:function(e){this._health-=e,this._health<=0&&(Game.loser=this.team,this.game.state.start("Result"))}},{key:"spawn",value:function(e){var t=Factory.Monster.getMonsterClass(e);this._mana>=t.Cost&&(this._mana-=t.Cost,this.parent.add(Factory.Monster.create(t,this.game,this.x,this.team)))}},{key:"recoverMana",value:function(){this._mana+=this._manaRecover,this._mana>this._maxMana&&(this._mana=this._maxMana)}},{key:"rankUp",value:function(){if(!(this._rank>=6)){var e=this._rank+1;this._mana>=TowerData[e].Cost&&(this._mana-=TowerData[e].Cost,this.refreshStatus(e))}}},{key:"refreshStatus",value:function(e){var t=TowerData[e];switch(this._health=t.Health,this._maxMana=t.Mana,this._manaRecover=t.ManaRecover,this._rank=e,this._rank){case 1:case 2:this.animations.play("Rank1");break;case 3:case 4:this.animations.play("Rank2");break;case 5:case 6:this.animations.play("Rank3")}this.onRankChanged.dispatch(e)}},{key:"Mana",get:function(){return this._mana}},{key:"Rank",get:function(){return this._rank}}]),t}(Phaser.Sprite),Scenes.BattleField=function(e){this.GameScene=null,this.Layer={Background:null,Objects:null,SkillFx:null},this.UI=null,this.CollisionGroup={Walrus:null,Slime:null},this.ScrollDirection=Input.SCROLL_DIRECTION.STOP,this.PlayerTower=null,this.EnemyTower=null,this.BG={Slime:null,Walrus:null}},Scenes.BattleField.prototype={init:function(){this.initLayers(),this.initPhysics(),this.initGame(),this.initUI()},create:function(){this.world.setBounds(0,0,4e3,768),this.Layer.Objects.add(this.PlayerTower),this.Layer.Objects.add(this.EnemyTower)},update:function(){this.handleScrolling(),Command.Resolver.resolve()},initLayers:function(){this.GameScene=this.add.group(this.world,"GameScene"),this.Layer.Background=this.add.group(this.GameScene,"Background"),this.Layer.Objects=this.add.group(this.GameScene,"Objects"),this.Layer.SkillFx=this.add.group(this.GameScene,"SkillFx"),this.BG.Slime=this.add.image(-163,0,"Background_Slime","",this.Layer.Background),this.BG.Walrus=this.add.image(2e3,0,"Background_Walrus","",this.Layer.Background),Game.team==Teams.Walrus&&(this.BG.Slime.anchor.x=1,this.BG.Walrus.anchor.x=1,this.BG.Slime.scale.x=-1,this.BG.Walrus.scale.x=-1,this.BG.Slime.x=2e3,this.BG.Walrus.x=-163)},initPhysics:function(){this.game.physics.p2.setBounds(0,0,4e3,768),this.CollisionGroup.Slime=this.game.physics.p2.createCollisionGroup(),this.CollisionGroup.Walrus=this.game.physics.p2.createCollisionGroup()},initGame:function(){this.PlayerTower=Game.PlayerTower=Factory.Tower.generatePlayer(this.game),this.EnemyTower=Game.EnemyTower=Factory.Tower.generateEnemy(this.game)},initUI:function(){this.UI=new Objects.GameUI(this.game,this.world,"UI",this)},handleScrolling:function(){switch(this.ScrollDirection){case Input.SCROLL_DIRECTION.RIGHT:this.camera.x+=Input.SCROLL_SPEED;break;case Input.SCROLL_DIRECTION.LEFT:this.camera.x-=Input.SCROLL_SPEED}}},Scenes.Boot={init:function(){this.input.maxPointers=1,this.stage.disableVisibilityChange=!0,this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,this.scale.setMinMax(480,260,1024,768),this.scale.pageAlignHorizontally=!0,this.scale.pageAlignVertically=!0,
this.game.device.desktop||(this.stage.scaleMode=Phaser.ScaleManager.EXACT_FIT),this.scale.refresh()},preload:function(){},create:function(){var e=this;this.state.start("Preloader");var t=new Input;this.input.touch.touchStartCallback=function(a){t.OnTouchStart(a,e)},this.input.touch.touchMoveCallback=function(a){t.OnTouchMove(a,e)},this.input.touch.touchEndCallback=function(a){t.OnTouchEnd(a,e)},this.input.keyboard.onPressCallback=t.OnKeyPress(),this.input.keyboard.onUpCallback=t.OnKeyUp(),this.game.time.advancedTiming=!0,this.physics.startSystem(Phaser.Physics.P2JS),Helper.ResetGame()},gameResized:function(e,t){}},Scenes.Loading=function(e){this.targetState=null,this.preloadList={}},Scenes.Loading.prototype={init:function(e,t){this.targetState=e,this.preloadList=t||{}},preload:function(){Helper.LoadImages(this.load,this.preloadList,this.game.device.pixelRatio)},create:function(){this.add.text(450,384,"Loading...",{font:"normal 24px 'Open Sans'",fill:"white"})},update:function(){Game.Status==GameStatus.Start&&this.load.hasLoaded&&this.state.start(this.targetState)}},Scenes.MainMenu=function(e){this.ui={WalrusTeam:null,SlimeTeam:null}},Scenes.MainMenu.prototype={create:function(){var e=this,t=this.cache.getImage("btn_WalrusTeam"),a=this.cache.getImage("btn_SlimeTeam");this.ui.WalrusTeam=this.add.button(this.game.width/2-t.width-15,this.game.height/2-t.height/2,"btn_WalrusTeam",function(){Game.team=Teams.Walrus,e.startGame()},this),this.ui.SlimeTeam=this.add.button(this.game.width/2+15,this.game.height/2-a.height/2,"btn_SlimeTeam",function(){Game.team=Teams.Slime,e.startGame()},this)},update:function(){Game.Socket&&Game.Socket.ready&&(Game.Socket.updateStatus("Register",Game.team),this.state.start("Loading",!0,!1,"BattleField",Assets.BattleField))},startGame:function(){Game.Socket=new Socket("",this.game)}},Scenes.Preloader={preload:function(){Helper.LoadImages(this.load,Assets.MainMenu,this.game.device.pixelRatio)},create:function(){},update:function(){this.load.hasLoaded&&this.state.start("MainMenu")}},Scenes.Result={create:function(){var e="You win!";Game.team==Game.loser&&(e="You lose!"),this.add.text(470,384,e,{font:"normal 24px 'Open Sans'",fill:"white"})}};var _createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e=function(){function e(){_classCallCheck(this,e),this.team=-1,this.loser=-1,this.PlayerTower=null,this.EnemyTower=null,this.Socket=null,this.Status=GameStatus.Init}return _createClass(e,null,[{key:"className",value:"GameState",enumerable:!0}]),_createClass(e,[{key:"setTeam",value:function(e){this.team=e}}]),e}();Helper.ResetGame=function(){window.Game=new e},Game=new e}();var _get=function(e,t,a){for(var n=!0;n;){var s=e,r=t,i=a;o=c=l=void 0,n=!1,null===s&&(s=Function.prototype);var o=Object.getOwnPropertyDescriptor(s,r);if(void 0!==o){if("value"in o)return o.value;var l=o.get;return void 0===l?void 0:l.call(i)}var c=Object.getPrototypeOf(s);if(null===c)return void 0;e=c,t=r,a=i,n=!0}},_createClass=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();!function(){var e={BeginContact:0,EndContact:1,Dead:2},t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"handleEvent",value:function(e,a){return e.SetState(t.MoveState)}},{key:"update",value:function(){}}],[{key:"className",value:"Monster",enumerable:!0},{key:"MoveState",get:function(){return States.MonsterMove}},{key:"AttackState",get:function(){return States.MonsterAttack}},{key:"DeadState",get:function(){return States.DeadState}},{key:"Events",get:function(){return e}}]),t}(),a=function(t){function a(){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return _inherits(a,t),_createClass(a,[{key:"handleEvent",value:function(t,a){switch(a){case e.BeginContact:t.setState(States.MonsterAttack)}}},{key:"update",value:function(e){e.move()}}],[{key:"className",value:"Move",enumerable:!0}]),a}(t),n=function(t){function a(){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).apply(this,arguments)}return _inherits(a,t),_createClass(a,[{key:"handleEvent",value:function(t,a){switch(a){case e.EndContact:t.setState(States.MonsterMove),t.animations.play("Walk")}}},{key:"update",value:function(e){e.tryAttack()}}],[{key:"className",value:"Attack",enumerable:!0}]),a}(t),s=function(e){function t(){_classCallCheck(this,t),_get(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return _inherits(t,e),_createClass(t,[{key:"handleEvent",value:function(e,t){}},{key:"update",value:function(e){}}],[{key:"className",value:"Dead",enumerable:!0}]),t}(t);States.Monster=t,States.MonsterMove=new a,States.MonsterAttack=new n,States.MonsterDead=new s}();
//# sourceMappingURL=game.js.map