(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},s=[];function i(e){return c.p+"js/"+({student:"student",teacher:"teacher"}[e]||e)+"."+{student:"54b19b5f",teacher:"53e41d18"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={student:1,teacher:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({student:"student",teacher:"teacher"}[e]||e)+"."+{student:"b50950de",teacher:"8d8938e2"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[e],p.parentNode.removeChild(p),n(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/KidU/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08b9":function(e,t,n){e.exports=n.p+"img/brand_transp.8d551bb2.png"},"3e8a":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n("59ca"),o=(n("e71f"),n("66ce"),{apiKey:"AIzaSyCF_kA1kxLTj2qm4JsheXyeZ4FTa5Yx66Q",authDomain:"kidu-c74a6.firebaseapp.com",databaseURL:"https://kidu-c74a6.firebaseio.com",projectId:"kidu-c74a6",storageBucket:"kidu-c74a6.appspot.com",messagingSenderId:"850545730335",appId:"1:850545730335:web:4602e3def565e69ecb862a",measurementId:"G-43DV8NDKV2"}),a=r["initializeApp"](o),s=a.firestore(),i=a.database()},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],s=n("59ca"),i=(n("ea7b"),n("3e8a"),{name:"App",created:function(){var e=this;s["auth"]().onAuthStateChanged((function(t){t?(e.$store.commit("setUserId",t.uid),console.log(e.$store.getters.getUserType),"teacher"===e.$store.getters.getUserType?e.$router.push({name:"Teacher Dashboard"}):e.$router.push({name:"Student Dashboard"})):""!=e.$store.getters.userId&&(e.$store.commit("setUserId",""),e.$store.commit("setUserType",""),e.$router.push({name:"Login"}))}))}}),c=i,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,null,null),d=l.exports,p=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}}),r("router-link",{attrs:{to:{name:"Login"}}},[e._v("Login")])],1)},m=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("h2",[e._v("This is a test message")])])},g=[],b={name:"HelloWorld",props:{msg:String}},v=b,y=Object(u["a"])(v,h,g,!1,null,null,null),_=y.exports,w={name:"Home",components:{HelloWorld:_}},S=w,T=Object(u["a"])(S,f,m,!1,null,null,null),k=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"login-main"},[n("div",{staticClass:"login-inner"},[n("div",{staticStyle:{"padding-bottom":"10px"}},[e._m(0),n("br"),n("b-icon",{staticClass:"far fa-clock"}),n("span",{staticStyle:{padding:"0 100px"}},[e._v("Time for class!")]),n("b-icon",{staticClass:"far fa-clock"})],1),n("b-button",{staticClass:"login-button",attrs:{"icon-left":"google",size:"is-large",type:"is-info is-dark"},on:{click:function(t){return e.login("student")}}},[e._v(" Student Login ")]),n("br"),n("b-button",{staticClass:"login-button",attrs:{"icon-left":"google",size:"is-large",type:"is-info is-dark"},on:{click:function(t){return e.login("teacher")}}},[e._v(" Teacher Login ")])],1)])])},C=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"brand-bg"},[r("img",{attrs:{src:n("08b9"),width:"400",height:"63"}})])}],$={name:"Login",methods:{login:function(e){var t=this,n=new s["auth"].GoogleAuthProvider;s["auth"]().signInWithPopup(n).then((function(n){var r=n.credential.accessToken;console.log(r);var o=n.user;console.log(o),t.$store.commit("setUserId",o.uid),t.$store.commit("setUserType",e),t.getProfileInfo(),t.$fire({title:"Success",text:"Signed in using: ".concat(t.$store.getters.getEmailID),type:"success",timer:3e3}).then((function(){}))})).catch((function(e){var t=e.code,n=e.message;console.log(t),console.log(n);var r=e.email;console.log(r);var o=e.credential;console.log(o)}))},getProfileInfo:function(){var e,t,n=s["auth"]().currentUser;null!=n&&(e=n.displayName,t=n.email,this.$store.commit("setDisplayName",e),this.$store.commit("setEmailID",t))}}},j=$,D=(n("f30e"),Object(u["a"])(j,I,C,!1,null,"2c897392",null)),x=D.exports;r["a"].use(p["a"]);var E=[{path:"/",name:"Home",component:k},{path:"/login",name:"Login",component:x},{path:"/teacher",name:"Teacher App",component:function(){return n.e("teacher").then(n.bind(null,"70f2"))},children:[{path:"dashboard",name:"Teacher Dashboard",component:function(){return n.e("teacher").then(n.bind(null,"c3f7"))}},{path:"classroom/:id",name:"Teacher Classroom",component:function(){return n.e("teacher").then(n.bind(null,"c325"))}}]},{path:"/student",name:"Student App",component:function(){return n.e("student").then(n.bind(null,"89f0"))},children:[{path:"dashboard",name:"Student Dashboard",component:function(){return n.e("student").then(n.bind(null,"84ec"))}},{path:"classroom/:id",name:"Student Classroom",component:function(){return n.e("student").then(n.bind(null,"a73d"))}}]}],O=new p["a"]({mode:"history",base:"/KidU/",routes:E}),U=O,A=n("2f62"),L=n("0e44");r["a"].use(A["a"]);var P=new A["a"].Store({plugins:[Object(L["a"])({storage:window.sessionStorage})],state:{user:{uid:"",type:"",displayName:"",emailID:""}},mutations:{setUserId:function(e,t){e.user.uid=t},setUserType:function(e,t){e.user.type=t},setDisplayName:function(e,t){e.user.displayName=t},setEmailID:function(e,t){e.user.emailID=t}},actions:{},modules:{},getters:{getUser:function(e){return e.user},getUserId:function(e){return e.user.uid},getUserType:function(e){return e.user.type},getDisplayName:function(e){return e.user.displayName},getEmailID:function(e){return e.user.emailID}}}),N=P,H=n("8aa5"),K=n.n(H),W=n("0ff2"),z=n("289d"),B=(n("5abe"),n("683f"));r["a"].config.productionTip=!1,r["a"].use(z["a"]),r["a"].use(K.a),r["a"].use(W["a"]),r["a"].use(B["a"]),new r["a"]({router:U,store:N,render:function(e){return e(d)}}).$mount("#app")},"5a12":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f30e:function(e,t,n){"use strict";var r=n("5a12"),o=n.n(r);o.a}});
//# sourceMappingURL=app.de26f8e1.js.map