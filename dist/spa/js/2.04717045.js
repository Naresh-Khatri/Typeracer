(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2,3],{"0e44":function(e,t,s){},2610:function(e,t,s){"use strict";s("0e44")},"713b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{attrs:{elevated:""}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu",color:"dark","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),s("q-toolbar-title",[s("div",{staticStyle:{color:"black"}},[e._v("TypeRacer")])]),e.username?s("div",{staticStyle:{color:"#1d1d1d","margin-right":"30px"}},[e._v("\n        Online Players: "),s("strong",[e._v(e._s(e.onlineCount))])]):e._e(),e.username?s("div",{staticStyle:{color:"#1d1d1d"}},[e._v("\n        Playing as "),s("strong",[e._v(e._s(e.username))])]):e._e()],1)],1),s("q-page-container",[s("router-view")],1)],1)},n=[],o=s("4360"),r=(s("8b24"),{name:"MainLayout",data(){return{leftDrawerOpen:!1}},computed:{username(){return o["b"].state.username},onlineCount(){return o["b"].state.onlineCount}},mounted(){console.log(o["b"].state.username)},methods:{}}),i=r,l=s("2877"),c=Object(l["a"])(i,a,n,!1,null,null,null);t["default"]=c.exports},8041:function(e,t,s){"use strict";s("d924")},"8b24":function(e,t,s){"use strict";s.r(t),s.d(t,"socket",(function(){return k}));var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"flex flex-center page"},["signup"==e.state?s("div",{staticClass:"q-pa-md"},[s("button",{staticClass:"btn",on:{click:function(t){e.dialog=!0}}},[e._v("start")]),s("q-dialog",{attrs:{persistent:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("div",{staticClass:"dialog-box",staticStyle:{"background-color":"#02d7f2","box-shadow":"none"}},[s("q-card-section",{staticClass:"row items-center"},[s("q-avatar",{staticStyle:{color:"#02d7f2"},attrs:{icon:"account_circle",color:"dark"}}),s("span",{staticClass:"q-ml-sm"},[e._v("Please enter a name to begin.")])],1),s("q-card-section",{staticClass:"row items-center"},[s("q-input",{staticClass:"username-input",attrs:{outlined:"",color:"dark",label:"username",autofocus:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.setUsername()}},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"cpfont",attrs:{flat:"",label:"Confirm",color:"dark",disable:!e.username},on:{click:function(t){return e.setUsername()}}})],1)],1)])],1):"lobby"==e.state?s("div",[s("q-btn",{staticStyle:{left:"800px",top:"30px",background:"#FF003C","z-index":"100"},attrs:{"data-augmented-ui":"tl-clip br-clip ",label:"Start Game",size:"xl"},on:{click:e.startGame}}),s("h1",{staticClass:"cpfont",staticStyle:{margin:"0px",position:"relative",top:"-50px","text-weight":"bold"}},[e._v("\n      lobby\n    ")]),s("lobbyComp")],1):"game"==e.state?s("div",[s("q-btn",{staticStyle:{background:"#FF003C","z-index":"100"},attrs:{"data-augmented-ui":"tl-clip br-clip ",label:"<- Lobby",size:"xl"},on:{click:function(t){return e.goToLobby()}}}),s("typingComp")],1):e._e()])},n=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pitch-mixin",attrs:{"data-augmented-ui":"\ntl-clip tr-scoop b-clip-x both"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"words-box",attrs:{"data-augmented-ui":"tl-clip br-clip "}},e._l(e.randomWordsIndex,(function(t,a){return s("div",{key:a,staticClass:"word",class:0==a?"first-word":""},[e._v("\n          "+e._s(e.words[t])+"\n        ")])})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userword,expression:"userword"}],staticClass:"input-box",attrs:{"data-augmented-ui":"tr-clip",autofocus:""},domProps:{value:e.userword},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.verifyWord()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.removeSpace()},input:function(t){t.target.composing||(e.userword=t.target.value)}}})]),s("div",{staticClass:"q-pa-md",staticStyle:{width:"90%",margin:"0px auto","margin-top":"100px","z-index":"100"}},[s("q-badge",{attrs:{color:"secondary"}},[e._v(" Progress: "+e._s(e.progress)+"% ")]),s("q-slider",{attrs:{min:0,max:100,step:1,label:"","label-value":e.username,"label-always":"",readonly:"",color:"secondary"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1),s("div",{staticClass:"q-pa-md",staticStyle:{width:"90%",margin:"0px auto","z-index":"100"}},[s("q-badge",{attrs:{color:"secondary"}},[e._v(" Progress: "+e._s(e.opponentProgress)+"% ")]),s("q-slider",{attrs:{min:0,max:100,step:1,label:"","label-value":e.opponent.username,"label-always":"",readonly:"",color:"secondary"},model:{value:e.opponentProgress,callback:function(t){e.opponentProgress=t},expression:"opponentProgress"}})],1)])},r=[],i=(s("8314"),s("4360")),l={data(){return{wordslist:[],userword:"",progress:0,opponent:{}}},computed:{words(){return i["b"].state.words},randomWordsIndex(){return i["b"].state.randomWordsIndex},progressPercent(){return this.randomWordsIndex.length},username(){return i["b"].state.username},opponentProgress(){return Math.ceil((30-this.opponent.progress)/30*100)}},sockets:{updateProgress(e){this.opponent=e,console.log(e)}},methods:{verifyWord(){0==this.words[this.randomWordsIndex[0]].localeCompare(this.userword)?(i["b"].state.randomWordsIndex.shift(),document.querySelector(".first-word").style.background="#02d7f2",this.progress=Math.ceil((30-this.randomWordsIndex.length)/30*100),this.sendProgress()):document.querySelector(".first-word").style.background="red",this.userword=""},sendProgress(){k.emit("sendProgress",{id:k.id,progress:this.randomWordsIndex.length})},removeSpace(){this.userword=""}}},c=l,d=(s("fa9a"),s("2877")),u=Object(d["a"])(c,o,r,!1,null,"2cb35dae",null),m=u.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pitch-mixin",attrs:{"data-augmented-ui":"\ntl-clip tr-scoop b-clip-x both"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"chat-box",attrs:{"data-augmented-ui":"tl-clip br-clip "}},[e.msgData.length?s("div",e._l(e.msgData,(function(t,a){return s("div",{key:a},[e._v("\n            "+e._s(t.username)+": "+e._s(t.message)+"\n          ")])})),0):s("div",{staticStyle:{color:"#978d01"}},[e._v("send a message")])]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.msg,expression:"msg"}],staticClass:"input-box",attrs:{"data-augmented-ui":"tr-clip",autofocus:"",placeholder:"type here"},domProps:{value:e.msg},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.sendMessage()},input:function(t){t.target.composing||(e.msg=t.target.value)}}})])])},g=[],b=(s("e6cf"),{data(){return{msg:""}},computed:{username(){return i["b"].state.username},msgData(){return i["b"].state.messageData}},sockets:{async newMessage(e){console.log("new message",e),this.msgData.push(e),await this.waitScrollBottom()}},methods:{sendMessage(){k.emit("getMessage",{username:this.username,message:this.msg}),this.msg=""},waitScrollBottom(){return new Promise(((e,t)=>{setTimeout((()=>{console.log("resolved");const e=document.querySelector(".chat-box");e.scrollTop=e.scrollHeight}),0)}))}}}),h=b,f=(s("2610"),Object(d["a"])(h,p,g,!1,null,"47a4f52f",null)),y=f.exports,v=s("f87c"),x=s("8e27"),w=s("2b0e"),k=Object(x["io"])("ws://localhost:8000");w["a"].use(v["a"],k);var C={name:"PageIndex",components:{typingComp:m,lobbyComp:y},data(){return{dialog:!1,cancelEnabled:!1,username:"",hasUsername:!1,isConnected:!1,state:"signup"}},sockets:{connect(){console.log("connected to socket"),this.isConnected=!0,this.emitUsername()},startGame(e){this.state="game",i["b"].state.randomWordsIndex=e,console.log(i["b"].state.randomWordsIndex)},gameEnded(e){console.log(e,"has completed the game"),this.$q.notify({message:`<strong> ${e} <span style="color:'dark'"></span></strong> won  the game wew *-*`,position:"top",color:"green",html:!0})},goToLobby(){this.state="lobby"},disconnect(){this.isConnected=!1},counter(e){i["b"].state.onlineCount=e.count}},created(){this.emitUsername()},methods:{emitUsername(){localStorage.getItem("username")&&(this.username=localStorage.getItem("username"),this.hasUsername=!0,i["b"].state.username=this.username,console.log("sending name "+i["b"].state.username),k.emit("getUsername",i["b"].state.username),this.state="lobby")},setUsername(){localStorage.setItem("username",this.username),this.emitUsername()},startGame(){console.log("starting game"),k.emit("startGame"),this.state="game"},goToLobby(){this.state="lobby"},emitGen(){k.emit("randomGen")}}},_=C,q=(s("8041"),Object(d["a"])(_,a,n,!1,null,null,null));t["default"]=q.exports},ce32:function(e,t,s){},d924:function(e,t,s){},fa9a:function(e,t,s){"use strict";s("ce32")}}]);