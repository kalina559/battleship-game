(function(){"use strict";var e={2732:function(e,t,s){var i=s(3751),n=s(641),a=s(33);const o={id:"app"},r={class:"content"},p={class:"language-switcher"},l=["title"],h=["title"],c={key:1,class:"grids"},d={class:"phase"},u={key:2,class:"modal"},y={class:"modal-content"};function S(e,t,s,i,S,k){const g=(0,n.g2)("Header"),w=(0,n.g2)("Menu"),m=(0,n.g2)("OpponentGrid"),f=(0,n.g2)("UserGrid"),b=(0,n.g2)("Help");return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.bF)(g),(0,n.Lk)("div",r,[(0,n.Lk)("div",p,[(0,n.Lk)("span",{onClick:t[0]||(t[0]=e=>k.changeLanguage("en")),class:"fi fi-gb",title:e.$t("englishLanguage")},null,8,l),(0,n.Lk)("span",{onClick:t[1]||(t[1]=e=>k.changeLanguage("pl")),class:"fi fi-pl",title:e.$t("polishLanguage")},null,8,h)]),S.gameStarted?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.Wv)(w,{key:0,onStartGame:k.startGame},null,8,["onStartGame"])),S.gameStarted?((0,n.uX)(),(0,n.CE)("div",c,[(0,n.Lk)("div",d,(0,a.v_)(e.$t(k.gamePhaseText)),1),(0,n.bF)(m,{ships:S.opponentShips,showShips:!1,shots:S.playerShots,onCellSelected:k.handleUserShot,disabled:"player"!==S.currentPlayer,feedbackMessage:e.$t(S.opponentGridFeedbackMessage)},null,8,["ships","shots","onCellSelected","disabled","feedbackMessage"]),(0,n.bF)(f,{ships:S.playerShips,shots:S.opponentShots,onShipPlaced:k.onShipPlaced,feedbackMessage:e.$t(S.playerGridFeedbackMessage),shipsCanTouch:S.shipsCanTouch},null,8,["ships","shots","onShipPlaced","feedbackMessage","shipsCanTouch"])])):(0,n.Q3)("",!0),(0,n.bF)(b),S.winner?((0,n.uX)(),(0,n.CE)("div",u,[(0,n.Lk)("div",y,[(0,n.Lk)("p",null,(0,a.v_)(e.$t(k.winnerMessage)),1),(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>k.resetGame&&k.resetGame(...e))},(0,a.v_)(e.$t("playAgain")),1)])])):(0,n.Q3)("",!0)])])}var k=s(4526);function g(e,t,s,i,o,r){return(0,n.uX)(),(0,n.CE)("header",null,[(0,n.Lk)("h1",null,(0,a.v_)(e.$t("headerTitle")),1)])}var w={name:"Header"},m=s(6262);const f=(0,m.A)(w,[["render",g],["__scopeId","data-v-8a06aec2"]]);var b=f;const v=e=>((0,n.Qi)("data-v-a879d946"),e=e(),(0,n.jt)(),e),C={class:"grid"},T={key:0,class:"feedback"},A={class:"row"},P=v((()=>(0,n.Lk)("div",{class:"corner"},null,-1))),L={class:"row-label"},z={key:0,class:"miss-marker"},O={class:"controls"},x={class:"control-row"},G={class:"control-row"},M={class:"control-row"};function E(e,t,s,i,o,r){return(0,n.uX)(),(0,n.CE)("div",C,[(0,n.Lk)("h2",null,(0,a.v_)(e.$t("playersGrid")),1),s.feedbackMessage?((0,n.uX)(),(0,n.CE)("div",T,(0,a.v_)(s.feedbackMessage),1)):(0,n.Q3)("",!0),(0,n.Lk)("div",{class:"grid-container",onKeydown:t[0]||(t[0]=(...e)=>r.handleKeydown&&r.handleKeydown(...e)),tabindex:"0",ref:"gridContainer"},[(0,n.Lk)("div",A,[P,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.columnLabels,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e,class:"column-label"},(0,a.v_)(e),1)))),128))]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.rows,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"row"},[(0,n.Lk)("div",L,(0,a.v_)(o.rowLabels[t]),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:(0,a.C4)(["cell",r.getCellClass(t,e.id)])},[r.isMissCell(t,e.id)?((0,n.uX)(),(0,n.CE)("span",z,"X")):(0,n.Q3)("",!0)],2)))),128))])))),128))],544),(0,n.Lk)("div",O,[(0,n.Lk)("div",x,[(0,n.Lk)("button",{onClick:t[1]||(t[1]=e=>r.handleKeydown({key:"ArrowUp"}))},"↑")]),(0,n.Lk)("div",G,[(0,n.Lk)("button",{onClick:t[2]||(t[2]=e=>r.handleKeydown({key:"ArrowLeft"}))},"←"),(0,n.Lk)("button",{onClick:t[3]||(t[3]=e=>r.handleKeydown({key:"ArrowDown"}))},"↓"),(0,n.Lk)("button",{onClick:t[4]||(t[4]=e=>r.handleKeydown({key:"ArrowRight"}))},"→")]),(0,n.Lk)("div",M,[(0,n.Lk)("button",{onClick:t[5]||(t[5]=e=>r.handleKeydown({key:"r"}))},(0,a.v_)(e.$t("rotateButton")),1),(0,n.Lk)("button",{onClick:t[6]||(t[6]=e=>r.handleKeydown({key:"Enter"}))},(0,a.v_)(e.$t("deployButton")),1)])])])}s(4114);var F={name:"UserGrid",props:{ships:{type:Array,default:()=>[]},shots:{type:Array,default:()=>[]},feedbackMessage:{type:String,default:""},shipsCanTouch:{type:Boolean,default:!1}},data(){return{rows:Array.from({length:10},((e,t)=>Array.from({length:10},((e,t)=>({id:t,label:""}))))),rowLabels:"ABCDEFGHIJ".split(""),columnLabels:Array.from({length:10},((e,t)=>t+1)),placedShips:[],currentShip:{size:5,coordinates:[]},currentShipDirection:"horizontal",currentShipPosition:{x:5,y:5}}},mounted(){this.initCurrentShip(),window.addEventListener("keydown",this.handleKeydown)},beforeUnmount(){window.removeEventListener("keydown",this.handleKeydown)},methods:{initCurrentShip(){this.updateCurrentShipCoordinates()},handleKeydown(e){if(0===this.currentShip.size)return;const t=e.key;switch(t){case"ArrowUp":this.moveShip(-1,0);break;case"ArrowDown":this.moveShip(1,0);break;case"ArrowLeft":this.moveShip(0,-1);break;case"ArrowRight":this.moveShip(0,1);break;case"r":case"R":this.rotateShip();break;case"Enter":this.placeShip();break}},moveShip(e,t){const s={x:this.currentShipPosition.x+e,y:this.currentShipPosition.y+t};this.currentShipPosition=s,this.updateCurrentShipCoordinates()},rotateShip(){const e="horizontal"===this.currentShipDirection?"vertical":"horizontal";this.currentShipDirection=e,this.updateCurrentShipCoordinates()},isValidPosition(e,t,s){for(let i=0;i<t;i++){const t="horizontal"===s?e.x:e.x+i,n="horizontal"===s?e.y+i:e.y;if(t<0||t>=10||n<0||n>=10||this.isOccupied(t,n)||!this.shipsCanTouch&&this.isAdjacentOccupied(t,n))return!1}return!0},isOccupied(e,t){return this.placedShips.some((s=>s.coordinates.some((s=>s.x===e&&s.y===t))))},isAdjacentOccupied(e,t){const s=[{dx:-1,dy:-1},{dx:-1,dy:0},{dx:-1,dy:1},{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:-1},{dx:1,dy:0},{dx:1,dy:1}];return s.some((s=>{const i=e+s.dx,n=t+s.dy;return i>=0&&i<10&&n>=0&&n<10&&this.isOccupied(i,n)}))},updateCurrentShipCoordinates(){this.currentShip.coordinates=Array.from({length:this.currentShip.size},((e,t)=>"horizontal"===this.currentShipDirection?{x:this.currentShipPosition.x,y:this.currentShipPosition.y+t}:{x:this.currentShipPosition.x+t,y:this.currentShipPosition.y}))},placeShip(){this.isValidPosition(this.currentShipPosition,this.currentShip.size,this.currentShipDirection)&&(this.placedShips.push({...this.currentShip}),this.$emit("shipPlaced",this.placedShips,this.currentShip.size),this.updateNextShip())},updateNextShip(){this.currentShip.size>1?this.currentShip.size--:this.currentShip={size:0,coordinates:[]},this.currentShipPosition={x:5,y:5},this.updateCurrentShipCoordinates()},getCellClass(e,t){return this.isShotCell(e,t)?this.isHitCell(e,t)?"hit-cell":"miss-cell":this.isShipCell(e,t)?"ship-cell":this.isCurrentShipCell(e,t)?this.isValidPosition(this.currentShipPosition,this.currentShip.size,this.currentShipDirection)?"valid-ship":"invalid-ship":""},isShotCell(e,t){return this.shots.some((s=>s.x===e&&s.y===t))},isHitCell(e,t){return this.shots.some((s=>s.x===e&&s.y===t&&s.isHit))},isMissCell(e,t){const s=this.shots.find((s=>s.x===e&&s.y===t));return s&&!s.isHit},isShipCell(e,t){return this.placedShips.some((s=>s.coordinates.some((s=>s.x===e&&s.y===t))))},isCurrentShipCell(e,t){return this.currentShip.coordinates.some((s=>s.x===e&&s.y===t))}}};const I=(0,m.A)(F,[["render",E],["__scopeId","data-v-a879d946"]]);var _=I;const H=e=>((0,n.Qi)("data-v-3beb8620"),e=e(),(0,n.jt)(),e),X={class:"grid"},j={key:0,class:"feedback"},$={class:"grid-container"},U={class:"row"},D=H((()=>(0,n.Lk)("div",{class:"corner"},null,-1))),K={class:"row-label"},W=["onClick"],B={key:0,class:"miss-marker"};function R(e,t,s,i,o,r){return(0,n.uX)(),(0,n.CE)("div",X,[(0,n.Lk)("h2",null,(0,a.v_)(e.$t("opponentsGrid")),1),s.feedbackMessage?((0,n.uX)(),(0,n.CE)("div",j,(0,a.v_)(s.feedbackMessage),1)):(0,n.Q3)("",!0),(0,n.Lk)("div",$,[(0,n.Lk)("div",U,[D,((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.columnLabels,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e,class:"column-label"},(0,a.v_)(e),1)))),128))]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(o.rows,((e,t)=>((0,n.uX)(),(0,n.CE)("div",{key:t,class:"row"},[(0,n.Lk)("div",K,(0,a.v_)(o.rowLabels[t]),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(e,(e=>((0,n.uX)(),(0,n.CE)("div",{key:e.id,class:(0,a.C4)(["cell",r.getCellClass(t,e.id)]),onClick:s=>r.selectCell(t,e.id)},[r.isMissCell(t,e.id)?((0,n.uX)(),(0,n.CE)("span",B,"X")):(0,n.Q3)("",!0)],10,W)))),128))])))),128))])])}var Q={name:"OpponentGrid",props:{ships:{type:Array,default:()=>[]},showShips:{type:Boolean,default:!1},shots:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},feedbackMessage:{type:String,default:""}},data(){return{rows:Array.from({length:10},((e,t)=>Array.from({length:10},((e,t)=>({id:t,label:""}))))),rowLabels:"ABCDEFGHIJ".split(""),columnLabels:Array.from({length:10},((e,t)=>t+1))}},methods:{isShipCell(e,t){return!!this.showShips&&this.ships.some((s=>s.coordinates.some((s=>s.x===e&&s.y===t))))},getCellClass(e,t){const s=this.shots.find((s=>s.x===e&&s.y===t));return s?s.isHit?"hit-cell":"miss-cell":this.isShipCell(e,t)&&this.showShips?"ship-cell":""},isHitCell(e,t){return this.shots.some((s=>s.x===e&&s.y===t&&s.isHit))},isMissCell(e,t){const s=this.shots.find((s=>s.x===e&&s.y===t));return s&&!s.isHit},selectCell(e,t){this.disabled||this.shots.some((s=>s.x===e&&s.y===t))||this.$emit("cellSelected",e,t)}}};const Y=(0,m.A)(Q,[["render",R],["__scopeId","data-v-3beb8620"]]);var V=Y;const J={class:"help"};function N(e,t,s,i,o,r){return(0,n.uX)(),(0,n.CE)("div",J,[(0,n.Lk)("h2",null,(0,a.v_)(e.$t("helpHeader")),1),(0,n.Lk)("p",null,(0,a.v_)(e.$t("helpMessage")),1)])}var Z={name:"Help"};const q=(0,m.A)(Z,[["render",N],["__scopeId","data-v-229b0a56"]]);var ee=q;const te=e=>((0,n.Qi)("data-v-1db78877"),e=e(),(0,n.jt)(),e),se={class:"menu"},ie={key:0},ne={disabled:"",value:"-1"},ae=["value"],oe=te((()=>(0,n.Lk)("h2",null,null,-1)));function re(e,t,s,o,r,p){return(0,n.uX)(),(0,n.CE)("div",se,[(0,n.Lk)("h2",null,(0,a.v_)(e.$t("selectAiTypeHeader")),1),r.aiTypes.length?((0,n.uX)(),(0,n.CE)("div",ie,[(0,n.bo)((0,n.Lk)("select",{id:"ai-select","onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedAiType=e)},[(0,n.Lk)("option",ne,(0,a.v_)(e.$t("selectAiTypeDefaultOption")),1),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.aiTypes,(e=>((0,n.uX)(),(0,n.CE)("option",{key:e.id,value:e.id},(0,a.v_)(e.name),9,ae)))),128))],512),[[i.u1,r.selectedAiType]])])):(0,n.Q3)("",!0),(0,n.Lk)("h2",null,(0,a.v_)(e.$t("ShipsCanTouchText")),1),(0,n.bo)((0,n.Lk)("input",{type:"checkbox",id:"shipsCanTouch","onUpdate:modelValue":t[1]||(t[1]=e=>r.shipsCanTouch=e)},null,512),[[i.lH,r.shipsCanTouch]]),oe,(0,n.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>p.startGame&&p.startGame(...e))},(0,a.v_)(e.$t("startGame")),1)])}var pe=s(4335);const le=pe.A.create({baseURL:"https://battleshipswebapi.azurewebsites.net/api/",withCredentials:!0,headers:{"Content-Type":"application/json"}});let he=null;function ce(e){he=e}le.interceptors.request.use((e=>(he&&(e.headers["X-Session-Id"]=he),e)));var de={setSessionId:ce,async getAiTypes(){const e=await le.get("/AiType/list");return e.data},async selectAiType(e){await le.post("/AiType/select",e)},async updateRules(e){await le.post("/Rules/update",e)},async getOpponentShips(){const e=await le.get("/ShipLocations/opponent");return e.data},async setUserShips(e){await le.post("/ShipLocations/user",e)},async userShot(e){const t=await le.post("shot/user",e);return t.data},async opponentShot(){const e=await le.post("shot/opponent");return e.data},async getGameState(){const e=await le.get("gamestate/get");return e.data},async clearGameState(){await le.get("gamestate/clear")}},ue={name:"Menu",data(){return{aiTypes:[],ruleTypes:[],selectedAiType:-1,shipsCanTouch:0}},async created(){try{this.aiTypes=await de.getAiTypes(),console.log(this.aiTypes)}catch(e){console.error("Failed to load AI types:",e)}},methods:{async startGame(){try{-1!=this.selectedAiType?(await de.clearGameState(),await de.selectAiType(this.selectedAiType),await de.updateRules(this.shipsCanTouch),this.$emit("startGame",this.selectedAiType,this.shipsCanTouch)):alert(this.$t("selectAiTypeWarning"))}catch(e){console.error("Failed to select AI type:",e)}}}};const ye=(0,m.A)(ue,[["render",re],["__scopeId","data-v-1db78877"]]);var Se=ye,ke={name:"App",components:{Header:b,UserGrid:_,OpponentGrid:V,Help:ee,Menu:Se},data(){return{gameStarted:!1,selectedAi:null,gamePhase:"placingShips",playerShips:[],opponentShips:[],playerShipsSet:!1,opponentShipsSet:!1,currentPlayer:null,opponentShots:[],playerShots:[],winner:null,opponentGridFeedbackMessage:"",playerGridFeedbackMessage:"",sessionId:null,shipsCanTouch:!1}},computed:{gamePhaseText(){switch(this.gamePhase){case"placingShips":return"waitingForUserToDeployShips";case"waitingOpponent":return"waitingForOpponentToDeployShips";case"playerTurn":return"yourTurn";case"opponentTurn":return"opponentsTurn";default:return""}},winnerMessage(){return"player"===this.winner?"userWon":"aiWon"}},methods:{changeLanguage(e){this.$i18n.locale=e},generateOrRetrieveSessionId(){let e=this.getCookie("sessionId");e||(e=(0,k.A)(),this.setCookie("sessionId",e,365)),this.sessionId=e,de.setSessionId(this.sessionId)},getCookie(e){const t=`; ${document.cookie}`,s=t.split(`; ${e}=`);if(2===s.length)return s.pop().split(";").shift()},setCookie(e,t,s){const i=new Date(Date.now()+864e5*s).toUTCString();document.cookie=`${e}=${t}; expires=${i}; path=/`},async startGame(e,t){this.selectedAi=e,this.gameStarted=!0;try{this.opponentShips=await de.getOpponentShips(),this.opponentShipsSet=!0,this.shipsCanTouch=t,this.checkPhaseTransition()}catch(s){console.error("Failed to get opponent ships:",s)}},async onShipPlaced(e){if(this.playerShips=e,this.playerShipsSet=5===this.playerShips.length,this.playerShipsSet)try{await de.setUserShips(e),this.checkPhaseTransition()}catch(t){console.error("Failed to set user ships:",t)}else this.checkPhaseTransition()},checkPhaseTransition(){this.playerShipsSet&&this.opponentShipsSet?this.determineStartingPlayer():this.playerShipsSet?this.gamePhase="waitingOpponent":this.opponentShipsSet&&(this.gamePhase="placingShips")},determineStartingPlayer(){const e=Math.random()<.5;this.currentPlayer=e?"player":"opponent",this.gamePhase=e?"playerTurn":"opponentTurn",e||this.opponentMove()},async opponentMove(){if("opponent"===this.currentPlayer)try{const e=await de.opponentShot();await this.updateGameState(),this.playerGridFeedbackMessage=e.isHit?e.isSunk?"feedbackOpponentSink":"feedbackOpponentHit":"feedbackOpponentMiss",this.checkIfWinner(e,"opponent")}catch(e){console.error("Failed to get opponent move:",e)}},async handleUserShot(e,t){if("player"===this.currentPlayer)try{const s=await de.userShot({x:e,y:t});await this.updateGameState(),this.opponentGridFeedbackMessage=s.isHit?s.isSunk?"feedbackPlayerSink":"feedbackPlayerHit":"feedbackPlayerMiss",this.checkIfWinner(s,"player")}catch(s){console.error("Failed to handle user shot:",s)}},async checkIfWinner(e,t){1==e.win?this.winner=t:this.switchTurn()},async updateGameState(){try{const e=await de.getGameState();this.playerShips.splice(0,this.playerShips.length,...e.userShips),this.opponentShips.splice(0,this.opponentShips.length,...e.opponentShips),this.playerShots.splice(0,this.playerShots.length,...e.playerShots),this.opponentShots.splice(0,this.opponentShots.length,...e.opponentShots),this.shipsCanTouch=e.shipsCanTouch}catch(e){console.error("Failed to update game state:",e)}},switchTurn(){this.currentPlayer="player"===this.currentPlayer?"opponent":"player",this.gamePhase="player"===this.currentPlayer?"playerTurn":"opponentTurn","opponent"===this.currentPlayer&&setTimeout((()=>{this.opponentMove()}),1e3)},resetGame(){this.gameStarted=!1,this.selectedAi=null,this.gamePhase="placingShips",this.playerShips=[],this.opponentShips=[],this.playerShipsSet=!1,this.opponentShipsSet=!1,this.currentPlayer=null,this.opponentShots=[],this.playerShots=[],this.winner=null,this.opponentGridFeedbackMessage="",this.playerGridFeedbackMessage=""}},mounted(){this.generateOrRetrieveSessionId()}};const ge=(0,m.A)(ke,[["render",S]]);var we=ge,me=s(6992),fe=JSON.parse('{"polishLanguage":"Polish","englishLanguage":"English","headerTitle":"Battleships","selectAiTypeHeader":"Select AI Type","selectAiTypeDefaultOption":"Please select any type","ShipsCanTouchText":"Ships can touch each other","startGame":"Start game","selectAiTypeWarning":"You have to choose an AI type to proceed","helpHeader":"Help","helpMessage":"Use arrows to place your ships. You can rotate them using \'Rotate\' key. The ships can\'t touch each other with sides or edges. Click on opponent\'s grid to select the cell you want to shoot at.","rotateButton":"Rotate","deployButton":"Deploy","waitingForUserToDeployShips":"Waiting for user to deploy ships","waitingForOpponentToDeployShips":"Waiting for opponent to deploy ships","yourTurn":"Your turn","opponentsTurn":"Opponent\'s turn","feedbackOpponentMiss":"Opponent missed!","feedbackOpponentHit":"Opponent hit!","feedbackOpponentSink":"Opponent sunk your ship!","feedbackPlayerMiss":"You missed!","feedbackPlayerHit":"You hit!","feedbackPlayerSink":"You sunk a ship!","userWon":"User won!","aiWon":"AI won!","playAgain":"Play Again","playersGrid":"Player\'s Grid","opponentsGrid":"Opponent\'s Grid"}'),be=JSON.parse('{"polishLanguage":"Polski","englishLanguage":"Angielski","headerTitle":"Statki","selectAiTypeHeader":"Wybierz rodzaj AI","selectAiTypeDefaultOption":"Wybierz jakiś rodzaj","ShipsCanTouchText":"Statki mogą się stykać","startGame":"Rozpocznij grę","selectAiTypeWarning":"Musisz wybrać jakiś rodzaj AI, aby kontynuować","helpHeader":"Pomoc","helpMessage":"Użyj strzałek aby ustawić swoje statki. Może je obracać używając przycisku \'Obróć\'. Statki nie mogą sąsiadować ze sobą krawędziami ani rogami. Kliknij na planszę przeciwnika, aby wybrać gdzie chcesz oddać strzał.","rotateButton":"Obróć","deployButton":"Ustaw","waitingForUserToDeployShips":"Czekanie na rozmieszczenie statków przez użytkownika","waitingForOpponentToDeployShips":"Czekanie na rozmieszczenie statków przez przeciwnika","yourTurn":"Twoja tura","opponentsTurn":"Tura przeciwnika","feedbackOpponentMiss":"Przeciwnik spudłował!","feedbackOpponentHit":"Przeciwnik trafił!","feedbackOpponentSink":"Przeciwnik zatopił Twój statek!","feedbackPlayerMiss":"Spudłowałeś!","feedbackPlayerHit":"Trafiłeś!","feedbackPlayerSink":"Zatopiłeś statek!","userWon":"Użytkownik wygrał!","aiWon":"AI wygrało!","playAgain":"Zagraj ponownie","playersGrid":"Plansza gracza","opponentsGrid":"Plansza przeciwnika"}');const ve=(0,me.hU)({locale:"pl",fallbackLocale:"en",messages:{en:fe,pl:be}}),Ce=(0,i.Ef)(we);Ce.use(ve),Ce.mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,a){if(!i){var o=1/0;for(h=0;h<e.length;h++){i=e[h][0],n=e[h][1],a=e[h][2];for(var r=!0,p=0;p<i.length;p++)(!1&a||o>=a)&&Object.keys(s.O).every((function(e){return s.O[e](i[p])}))?i.splice(p--,1):(r=!1,a<o&&(o=a));if(r){e.splice(h--,1);var l=n();void 0!==l&&(t=l)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[i,n,a]}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,a,o=i[0],r=i[1],p=i[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(p)var h=p(s)}for(t&&t(i);l<o.length;l++)a=o[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(h)},i=self["webpackChunkbattleship_game"]=self["webpackChunkbattleship_game"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[504],(function(){return s(2732)}));i=s.O(i)})();
//# sourceMappingURL=app.4692def1.js.map