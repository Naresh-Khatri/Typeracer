(function(e){function t(t){for(var r,o,l=t[0],s=t[1],u=t[2],c=0,h=[];c<l.length;c++)o=l[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function l(e){return s.p+"js/"+({}[e]||e)+"."+{2:"04717045",3:"e4c0fba1",4:"ce57579c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={2:1,3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"e02000fd",3:"e02000fd",4:"31d6cfe0"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var u=i[l],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===a))return t()}var h=document.getElementsByTagName("style");for(l=0;l<h.length;l++){u=h[l],c=u.getAttribute("data-href");if(c===r||c===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(e);var h=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=c;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var r=n("2b0e"),o=n("1f91"),a=n("42d2"),i=n("b178");r["a"].use(i["a"],{config:{},lang:o["a"],iconSet:a["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],u={name:"App"},c=u,h=n("2877"),d=Object(h["a"])(c,l,s,!1,null,null,null),f=d.exports,p=n("4360"),m=n("8c4f");const w=[{path:"/",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))}]},{path:"*",component:()=>n.e(4).then(n.bind(null,"e51e"))}];var y=w;r["a"].use(m["a"]);var g=function(){const e=new m["a"]({scrollBehavior:()=>({x:0,y:0}),routes:y,mode:"hash",base:""});return e},b=async function(){const e="function"===typeof p["a"]?await Object(p["a"])({Vue:r["a"]}):p["a"],t="function"===typeof g?await g({Vue:r["a"],store:e}):g;e.$router=t;const n={router:t,store:e,render:e=>e(f),el:"#q-app"};return{app:n,store:e,router:t}},v=n("bc3a"),k=n.n(v);r["a"].prototype.$axios=k.a;const O="";async function j(){const{app:e,store:t,router:n}=await b();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[void 0];for(let u=0;!1===o&&u<l.length;u++)if("function"===typeof l[u])try{await l[u]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:O})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==o&&new r["a"](e)}j()},"31cd":function(e,t,n){},4360:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n("2b0e"),o=n("2f62"),a=n("8314");r["a"].use(o["a"]),t["a"]=function(){const e=new o["a"].Store({modules:{},strict:!1});return e};const i=new o["a"].Store({state:{username:"",randomWordsIndex:[],words:a,onlineCount:0,messageData:[]}})},8314:function(e){e.exports=JSON.parse('["America","Indian","a","able","about","above","across","add","after","again","air","all","almost","along","also","always","am","among","an","and","animal","another","answer","any","are","around","as","ask","at","away","back","be","because","been","before","began","begin","being","below","between","big","book","both","boy","but","by","call","came","can","cannot","car","carry","change","children","city","close","come","could","country","cut","day","dear","did","different","do","does","don\'t","down","each","earth","eat","either","else","end","enough","even","ever","every","example","eye","face","family","far","father","feet","few","find","first","follow","food","for","form","found","four","from","get","girl","give","go","good","got","great","group","grow","had","hand","hard","has","have","he","head","hear","help","her","here","hers","high","him","his","home","house","how","however","I","idea","if","important","in","into","is","it","it\'s","its","just","keep","kind","know","land","large","last","later","learn","least","leave","left","let","letter","life","light","like","likely","line","list","little","live","long","look","made","make","man","many","may","me","mean","men","might","mile","miss","more","most","mother","mountain","move","much","must","my","name","near","need","neither","never","new","next","night","no","nor","not","now","number","of","off","often","oil","old","on","once","one","only","open","or","other","our","out","over","own","page","paper","part","people","picture","place","plant","play","point","put","question","quick","quickly","quite","rather","read","really","right","river","run","said","same","saw","say","says","school","sea","second","see","seem","sentence","set","she","should","show","side","since","small","so","some","something","sometimes","song","soon","sound","spell","start","state","still","stop","story","study","such","take","talk","tell","than","that","the","their","them","then","there","these","they","thing","think","this","those","thought","three","through","time","to","together","too","took","tree","try","turn","two","under","until","up","us","use","very","walk","want","wants","was","watch","water","way","we","well","went","were","what","when","where","which","while","white","who","whom","why","will","with","without","word","work","world","would","write","year","yet","you","young","your","ismail"]')}});