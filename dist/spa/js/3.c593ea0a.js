(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{8041:function(e,t,s){"use strict";s("d924")},"8b24":function(e,t,s){"use strict";s.r(t),s.d(t,"socket",(function(){return S}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center page"},["signup"==e.state?s("div",{staticClass:"q-pa-md"},[s("button",{staticClass:"btn",on:{click:function(t){e.dialog=!0}}},[e._v("start")]),s("q-dialog",{attrs:{persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("div",{staticClass:"dialog-box",staticStyle:{"background-color":"#02d7f2","box-shadow":"none"}},[s("q-card-section",{staticClass:"row items-center"},[s("q-avatar",{staticStyle:{color:"#02d7f2"},attrs:{icon:"account_circle",color:"dark"}}),s("span",{staticClass:"q-ml-sm"},[e._v("Please enter a name to begin.")])],1),s("q-card-section",{staticClass:"row items-center"},[s("q-input",{staticClass:"username-input",attrs:{outlined:"",color:"dark",label:"username",autofocus:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setUsername()}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"cpfont",attrs:{flat:"",label:"Confirm",color:"dark",disable:!e.username},on:{click:function(t){return e.setUsername()}}})],1)],1)])],1):"lobby"==e.state?s("div",[s("q-btn",{staticStyle:{left:"800px",top:"30px",background:"#FF003C","z-index":"100"},attrs:{"data-augmented-ui":"tl-clip br-clip ",label:"Start Game",size:"xl"},on:{click:function(t){return e.emitStartGame()}}}),s("h1",{staticClass:"cpfont",staticStyle:{margin:"0px",position:"relative",top:"-50px","text-weight":"bold"}},[e._v("\n      lobby\n    ")]),s("lobbyComp")],1):"game"==e.state?s("div",[s("q-btn",{staticStyle:{background:"#FF003C","z-index":"100"},attrs:{"data-augmented-ui":"tl-clip br-clip ",label:"<- Lobby",size:"xl"},on:{click:function(t){return e.goToLobby()}}}),s("typingComp")],1):e._e()])},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pitch-mixin",attrs:{"data-augmented-ui":"\ntl-clip tr-scoop b-clip-x both\ntl-2-clip-x l-rect-xy"}},[e.completed?s("div",{staticClass:"container",staticStyle:{display:"flex","justify-content":"center"}},[s("div",{staticClass:"words-box",staticStyle:{display:"flex","justify-content":"center"},attrs:{"data-augmented-ui":"tl-clip br-clip"}},[s("div",[e._v("Congrats! You got rank - "+e._s(e.rank))])])]):s("div",{staticClass:"container"},[s("div",{staticClass:"words-box",attrs:{"data-augmented-ui":"tl-clip br-clip  "}},e._l(e.randomWordsIndex,(function(t,a){return s("div",{key:a,staticClass:"word",class:0==a?"first-word":""},[e._v("\n          "+e._s(e.words[t])+"\n        ")])})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userword,expression:"userword"}],staticClass:"input-box",attrs:{"data-augmented-ui":"tr-clip",autofocus:""},domProps:{value:e.userword},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.verifyWord()},keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"]))return null;e.userword=""},input:function(t){t.target.composing||(e.userword=t.target.value)}}})]),s("div",{staticStyle:{"margin-top":"65px"}}),s("q-list",{attrs:{dense:""}},e._l(e.matchPlayers,(function(t,a){return s("q-item",{key:a,staticClass:"q-pa-sm",staticStyle:{width:"90%",margin:"0 auto","z-index":"100",display:"flex","flex-direction":"row","align-items":"center"},attrs:{disabled:!t[1].active}},[s("q-knob",{staticClass:"q-ma-md",staticStyle:{margin:"5px"},attrs:{"show-value":"",size:"50px",thickness:.22,color:"teal","track-color":"grey-3",readonly:"",title:"Speed in WPS"},model:{value:t[1].progress,callback:function(s){e.$set(t[1],"progress",s)},expression:"player[1].progress"}},[s("strong",{staticStyle:{color:"black","font-size":"18px"}},[e._v(e._s(t[1].wps))])]),s("q-slider",{staticStyle:{margin:"0px 20px"},attrs:{value:t[1].progress,min:0,max:100,step:1,label:"","label-value":t[1].username,"label-always":"",readonly:"",color:"secondary"}})],1)})),1)],1)},r=[],i=(s("ddb0"),s("4360")),l={data(){return{wordslist:[],userword:"",progress:0,secondsElapsed:0,completed:!1,interval:null,wps:"",matchPlayers:new Map,rank:0}},computed:{words(){return i["b"].state.words},randomWordsIndex(){return i["b"].state.randomWordsIndex},progressPercent(){return this.randomWordsIndex.length},username(){return i["b"].state.username}},sockets:{updateProgress(e){this.matchPlayers=e,e.forEach((e=>{}))},initializeGameData(e){this.matchPlayers=e,console.log(this.matchPlayers)},showResults(e){this.completed=!0,console.log(e),this.rank=e},playerLeft(e){console.log("left the game",e),console.log(this.matchPlayers)}},mounted(){this.startCounter(),this.sendInitialize()},beforeDestroy(){console.log("destroying"),clearInterval(this.interval)},methods:{verifyWord(){0==this.words[this.randomWordsIndex[0]].localeCompare(this.userword)?(i["b"].state.randomWordsIndex.shift(),document.querySelector(".first-word").style.background="#02d7f2",this.progress=100-this.randomWordsIndex.length,this.wps=Math.ceil(60*this.progress/this.secondsElapsed),this.sendProgress()):document.querySelector(".first-word").style.background="red",this.userword=""},sendProgress(){S.emit("sendProgress",{id:S.id,progress:this.progress,wps:this.wps,username:i["b"].state.username,active:!0})},sendInitialize(){S.emit("sendProgress",{id:S.id,progress:0,wps:"0",username:i["b"].state.username,active:!0})},startCounter(){this.secondsElapsed=0,console.log("called counter"),this.interval=setInterval((()=>{this.secondsElapsed+=1}),1e3)}}},c=l,d=(s("e19e"),s("2877")),u=Object(d["a"])(c,o,r,!1,null,"b13e3d1c",null),m=u.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pitch-mixin",attrs:{"data-augmented-ui":"\ntl-clip tr-scoop b-clip-x both"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"chat-box",attrs:{"data-augmented-ui":"tl-clip br-clip "}},[s("q-scroll-area",{ref:"scrollArea",staticStyle:{height:"220%",width:"100%",padding:"20px"},attrs:{"thumb-style":e.thumbStyle,id:"chat-box1"}},[e.msgData.length?s("div",e._l(e.msgData,(function(t,a){return s("div",{key:a},[s("strong",[e._v(" "+e._s(t.username))]),e._v(": "+e._s(t.message)),s("span",{staticStyle:{"font-size":"15px",float:"right"}},[e._v("\n                "+e._s(e.minutesAgo(t.time)))])])})),0):s("div",{staticStyle:{color:"#978d01"}},[e._v("send a message")])])],1),s("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"input-box",attrs:{"data-augmented-ui":"tr-clip",autofocus:"",placeholder:"Type here"},domProps:{value:e.msg},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage()},input:function(t){t.target.composing||(e.msg=t.target.value)}}})])])},g=[],h=(s("8314"),s("b178"));const{getScrollHeight:b}=h["b"];var y={data(){return{msg:"",contentActiveStyle:{color:"black",scrollPosition:0},thumbStyle:{right:"2px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75}}},computed:{username(){return i["b"].state.username},msgData(){return i["b"].state.messageData}},mounted(){this.scrollToBottom()},sockets:{getOldMessages(e){i["b"].state.messageData=e},newMessage(e){this.msgData.push(e),this.scrollToBottom()}},methods:{sendMessage(){S.emit("getMessage",{username:this.username,time:Date.now(),message:this.msg}),this.msg=""},minutesAgo(e){var t=Math.floor((Date.now()-e)/6e4);return(Date.now()-e)/1e3<20?"- Just now":(Date.now()-e)/1e3>20&&(Date.now()-e)/1e3<60?" - 30 secs ago ":" - "+t+" Min ago "},scrollToBottom(){document.querySelector("#chat-box1");this.$refs.scrollArea.setScrollPosition(1e4,300)}}},f=y,v=(s("f5ef"),Object(d["a"])(f,p,g,!1,null,"27dacc17",null)),x=v.exports,w=s("f87c"),k=s("8e27"),C=s("2b0e"),S=Object(k["io"])("wss://"+window.location.hostname);C["a"].use(w["a"],S);var _={name:"PageIndex",components:{typingComp:m,lobbyComp:x},data(){return{dialog:!1,cancelEnabled:!1,username:"",hasUsername:!1,isConnected:!1,state:"signup"}},sockets:{connect(){console.log("connected to socket"),this.isConnected=!0,this.emitUsername()},startGame(e){this.state="game",i["b"].state.randomWordsIndex=e.randomIndexArray,console.log(e.randomIndexArray)},playerLeft(e){"game"==this.state&&this.$q.notify({type:"negative",message:`<strong>${e.username}</strong> left the game`,position:"top",html:!0})},gameEnded(e){console.log(e,"has completed the game"),this.$q.notify({message:`<strong> ${e} <span style="color:'dark'"></span></strong> won  the game wew *-*`,position:"top",color:"green",html:!0})},goToLobby(){this.state="lobby"},disconnect(){this.isConnected=!1},counter(e){i["b"].state.onlineCount=e.count},newUserConnected(){this.$q.notify({type:"positive",message:"A new user joined lobby",position:"top"})},userDisconnected(){this.$q.notify({type:"negative",message:"A user left the game",position:"top"})}},created(){this.emitUsername()},computed:{onlineCount(){return i["b"].state.onlineCount}},methods:{emitUsername(){localStorage.getItem("username")&&(this.username=localStorage.getItem("username"),this.hasUsername=!0,i["b"].state.username=this.username,console.log("sending name "+i["b"].state.username),S.emit("getUsername",i["b"].state.username),this.state="lobby")},setUsername(){localStorage.setItem("username",this.username),this.emitUsername()},emitStartGame(){S.emit("emitStartGame"),this.state="game"},goToLobby(){this.state="lobby",S.emit("sendProgress",{id:S.id,username:i["b"].state.username,active:!1}),S.emit("wentToLobby",S.id)},emitGen(){S.emit("randomGen")}}},q=_,P=(s("8041"),Object(d["a"])(q,a,n,!1,null,null,null));t["default"]=P.exports},d924:function(e,t,s){},e134:function(e,t,s){},e19e:function(e,t,s){"use strict";s("ff35")},f5ef:function(e,t,s){"use strict";s("e134")},ff35:function(e,t,s){}}]);