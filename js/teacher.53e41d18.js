(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["teacher"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):i(n(t))}},1324:function(t,e,r){"use strict";var n=r("9b2a"),i=r.n(n);i.a},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("17c2"),a=r("9112");for(var s in i){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=r("ae40"),a=i("forEach"),s=o("forEach");t.exports=a&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),o=r("2d00"),a=i("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"20be":function(t,e,r){"use strict";var n=r("a7d3"),i=r.n(n);i.a},"25f0":function(t,e,r){"use strict";var n=r("6eeb"),i=r("825a"),o=r("d039"),a=r("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f=u.name!=s;(l||f)&&n(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),r=t.flags,n=String(void 0===r&&t instanceof RegExp&&!("flags"in c)?a.call(t):r);return"/"+e+"/"+n}),{unsafe:!0})},"26a5":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"classroom-link"},[n("router-link",{attrs:{to:t.to}},[n("div",{staticClass:"outline"},[n("div",{staticClass:"class-thumbnail"},[t.image?n("img",{attrs:{src:t.image}}):n("img",{attrs:{src:r("71c3")}})]),t.image?t._e():n("div",{staticClass:"class-name"},[n("span",[t._v(t._s(t.name))])])])])],1)},i=[],o={name:"ClassroomLink",props:{name:{type:String,required:!0},image:{type:String},classroomId:{type:String,required:!0},type:{type:String,default:"student"}},computed:{to:function(){return"teacher"===this.type?{name:"Teacher Classroom",params:{id:this.classroomId}}:{name:"Student Classroom",params:{id:this.classroomId}}}}},a=o,s=(r("3026"),r("2877")),c=Object(s["a"])(a,n,i,!1,null,"224dc905",null);e["a"]=c.exports},"2a19":function(t,e,r){t.exports=r.p+"img/brand.32ca2f96.png"},3026:function(t,e,r){"use strict";var n=r("e0f1"),i=r.n(n);i.a},"3ca3":function(t,e,r){"use strict";var n=r("6547").charAt,i=r("69f3"),o=r("7dd0"),a="String Iterator",s=i.set,c=i.getterFor(a);o(String,"String",(function(t){s(this,{type:a,string:String(t),index:0})}),(function(){var t,e=c(this),r=e.string,i=e.index;return i>=r.length?{value:void 0,done:!0}:(t=n(r,i),e.index+=t.length,{value:t,done:!1})}))},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=r("ae40"),s=o("filter"),c=a("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),i=r("7b0b"),o=r("9bdd"),a=r("e95a"),s=r("50c4"),c=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,d,v,p=i(t),h="function"==typeof this?this:Array,b=arguments.length,m=b>1?arguments[1]:void 0,g=void 0!==m,y=u(p),w=0;if(g&&(m=n(m,b>2?arguments[2]:void 0,2)),void 0==y||h==Array&&a(y))for(e=s(p.length),r=new h(e);e>w;w++)v=g?m(p[w],w):p[w],c(r,w,v);else for(f=y.call(p),d=f.next,r=new h;!(l=d.call(f)).done;w++)v=g?o(f,m,[l.value,w],!0):l.value,c(r,w,v);return r.length=w,r}},"4fad":function(t,e,r){var n=r("23e7"),i=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return i(t)}})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var n=r("ade3");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){Object(n["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},6547:function(t,e,r){var n=r("a691"),i=r("1d80"),o=function(t){return function(e,r){var o,a,s=String(i(e)),c=n(r),u=s.length;return c<0||c>=u?t?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===u||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),o=r("b622"),a=o("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6f53":function(t,e,r){var n=r("83ab"),i=r("df75"),o=r("fc6a"),a=r("d1e7").f,s=function(t){return function(e){var r,s=o(e),c=i(s),u=c.length,l=0,f=[];while(u>l)r=c[l++],n&&!a.call(s,r)||f.push(t?[r,s[r]]:s[r]);return f}};t.exports={entries:s(!0),values:s(!1)}},"70f2":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"teacher-app-wrapper"}},[r("Navbar",{attrs:{id:"teacher-app-nav"}}),r("router-view",{attrs:{id:"teacher-app"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",[n("template",{slot:"brand"},[n("img",{attrs:{src:r("2a19"),width:"156",height:"63"}})]),n("template",{slot:"start"},[n("b-navbar-item",{attrs:{tag:"router-link",to:{name:"Teacher Dashboard"}}},[t._v(" Dashboard ")])],1),n("template",{slot:"end"},[n("b-navbar-item",{attrs:{tag:"div"}},[n("b-button",{attrs:{type:"is-primary is-light"},on:{click:t.logout}},[t._v("Log Out")])],1)],1)],2)},a=[],s=r("59ca"),c=(r("ea7b"),{name:"Navbar",methods:{logout:function(){s["auth"]().signOut(),this.$fire({title:"Success",text:"Logged Out",type:"success",timer:2e3}).then((function(){}))}}}),u=c,l=r("2877"),f=Object(l["a"])(u,o,a,!1,null,null,null),d=f.exports,v={name:"TeacherApp",components:{Navbar:d}},p=v,h=Object(l["a"])(p,n,i,!1,null,null,null);e["default"]=h.exports},"71c3":function(t,e,r){t.exports=r.p+"img/default_class_banner.418e6cf1.png"},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),o=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||a(e,t,{value:o.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),i=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?i.f(t,a,o(0,r)):t[a]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),i=r("d039"),o=r("e8b5"),a=r("861d"),s=r("7b0b"),c=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),d=r("b622"),v=r("2d00"),p=d("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",m=v>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=f("concat"),y=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},w=!m||!g;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,i,o,a=s(this),f=l(a,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?a:arguments[e],y(o)){if(i=c(o.length),d+i>h)throw TypeError(b);for(r=0;r<i;r++,d++)r in o&&u(f,d,o[r])}else{if(d>=h)throw TypeError(b);u(f,d++,o)}return f.length=d,f}})},"9b2a":function(t,e,r){},"9c04":function(t,e,r){},a434:function(t,e,r){"use strict";var n=r("23e7"),i=r("23cb"),o=r("a691"),a=r("50c4"),s=r("7b0b"),c=r("65f0"),u=r("8418"),l=r("1dde"),f=r("ae40"),d=l("splice"),v=f("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,b=9007199254740991,m="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,e){var r,n,l,f,d,v,g=s(this),y=a(g.length),w=i(t,y),S=arguments.length;if(0===S?r=n=0:1===S?(r=0,n=y-w):(r=S-2,n=h(p(o(e),0),y-w)),y+r-n>b)throw TypeError(m);for(l=c(g,n),f=0;f<n;f++)d=w+f,d in g&&u(l,f,g[d]);if(l.length=n,r<n){for(f=w;f<y-n;f++)d=f+n,v=f+r,d in g?g[v]=g[d]:delete g[v];for(f=y;f>y-n+r;f--)delete g[f-1]}else if(r>n)for(f=y-n;f>w;f--)d=f+n-1,v=f+r-1,d in g?g[v]=g[d]:delete g[v];for(f=0;f<r;f++)g[f+w]=arguments[f+2];return g.length=y-n+r,l}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("d066"),a=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),d=r("e8b5"),v=r("861d"),p=r("825a"),h=r("7b0b"),b=r("fc6a"),m=r("c04e"),g=r("5c6c"),y=r("7c73"),w=r("df75"),S=r("241c"),z=r("057f"),q=r("7418"),C=r("06cf"),O=r("9bf2"),_=r("d1e7"),Q=r("9112"),x=r("6eeb"),A=r("5692"),k=r("f772"),j=r("d012"),E=r("90e3"),T=r("b622"),I=r("e538"),L=r("746f"),N=r("d44e"),P=r("69f3"),M=r("b727").forEach,$=k("hidden"),D="Symbol",R="prototype",F=T("toPrimitive"),V=P.set,G=P.getterFor(D),H=Object[R],U=i.Symbol,B=o("JSON","stringify"),J=C.f,W=O.f,X=z.f,Y=_.f,K=A("symbols"),Z=A("op-symbols"),tt=A("string-to-symbol-registry"),et=A("symbol-to-string-registry"),rt=A("wks"),nt=i.QObject,it=!nt||!nt[R]||!nt[R].findChild,ot=s&&l((function(){return 7!=y(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=J(H,e);n&&delete H[e],W(t,e,r),n&&t!==H&&W(H,e,n)}:W,at=function(t,e){var r=K[t]=y(U[R]);return V(r,{type:D,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===H&&ct(Z,e,r),p(t);var n=m(e,!0);return p(r),f(K,n)?(r.enumerable?(f(t,$)&&t[$][n]&&(t[$][n]=!1),r=y(r,{enumerable:g(0,!1)})):(f(t,$)||W(t,$,g(1,{})),t[$][n]=!0),ot(t,n,r)):W(t,n,r)},ut=function(t,e){p(t);var r=b(e),n=w(r).concat(pt(r));return M(n,(function(e){s&&!ft.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},ft=function(t){var e=m(t,!0),r=Y.call(this,e);return!(this===H&&f(K,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(K,e)||f(this,$)&&this[$][e])||r)},dt=function(t,e){var r=b(t),n=m(e,!0);if(r!==H||!f(K,n)||f(Z,n)){var i=J(r,n);return!i||!f(K,n)||f(r,$)&&r[$][n]||(i.enumerable=!0),i}},vt=function(t){var e=X(b(t)),r=[];return M(e,(function(t){f(K,t)||f(j,t)||r.push(t)})),r},pt=function(t){var e=t===H,r=X(e?Z:b(t)),n=[];return M(r,(function(t){!f(K,t)||e&&!f(H,t)||n.push(K[t])})),n};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),r=function(t){this===H&&r.call(Z,t),f(this,$)&&f(this[$],e)&&(this[$][e]=!1),ot(this,e,g(1,t))};return s&&it&&ot(H,e,{configurable:!0,set:r}),at(e,t)},x(U[R],"toString",(function(){return G(this).tag})),x(U,"withoutSetter",(function(t){return at(E(t),t)})),_.f=ft,O.f=ct,C.f=dt,S.f=z.f=vt,q.f=pt,I.f=function(t){return at(T(t),t)},s&&(W(U[R],"description",{configurable:!0,get:function(){return G(this).description}}),a||x(H,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),M(w(rt),(function(t){L(t)})),n({target:D,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:vt,getOwnPropertySymbols:pt}),n({target:"Object",stat:!0,forced:l((function(){q.f(1)}))},{getOwnPropertySymbols:function(t){return q.f(h(t))}}),B){var ht=!c||l((function(){var t=U();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));n({target:"JSON",stat:!0,forced:ht},{stringify:function(t,e,r){var n,i=[t],o=1;while(arguments.length>o)i.push(arguments[o++]);if(n=e,(v(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,B.apply(null,i)}})}U[R][F]||Q(U[R],F,U[R].valueOf),N(U,D),j[$]=!0},a623:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").every,o=r("a640"),a=r("ae40"),s=o("every"),c=a("every");n({target:"Array",proto:!0,forced:!s||!c},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},a7d3:function(t,e,r){},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ade3:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),o=r("5135"),a=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(o(s,t))return s[t];e||(e={});var r=[][t],u=!!o(e,"ACCESSORS")&&e.ACCESSORS,l=o(e,0)?e[0]:c,f=o(e,1)?e[1]:void 0;return s[t]=!!r&&!i((function(){if(u&&!n)return!0;var t={length:-1};u?a(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,l,f)}))}},b0c0:function(t,e,r){var n=r("83ab"),i=r("9bf2").f,o=Function.prototype,a=o.toString,s=/^\s*function ([^ (]*)/,c="name";n&&!(c in o)&&i(o,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),s=a((function(){o(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return o(i(t))}})},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),o=r("7b0b"),a=r("50c4"),s=r("65f0"),c=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(v,p,h,b){for(var m,g,y=o(v),w=i(y),S=n(p,h,3),z=a(w.length),q=0,C=b||s,O=e?C(v,z):r?C(v,0):void 0;z>q;q++)if((d||q in w)&&(m=w[q],g=S(m,q,y),t))if(e)O[q]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return q;case 2:c.call(O,m)}else if(l)return!1;return f?-1:u||l?l:O}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c325:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"classroom-wrapper"},[t._m(0),"undefined"!=t.activeQuiz.name?r("div",{staticClass:"container"},[r("QuizResults",{attrs:{quiz:t.activeQuiz,responses:t.quizResponses,roster:t.roster}}),t._v(" "+t._s(t.quizResponses)+" ")],1):r("div",{staticClass:"container"},[r("h3",[t._v("How would you like to poll your class?")]),r("div",{staticClass:"poll-options"},[r("b-button",{on:{click:t.queueQuiz}},[t._v(" Pre-fill the question bank ")]),r("b-button",{on:{click:t.createQuiz}},[t._v(" Type Questions On-the-Fly ")]),r("b-button",{on:{click:function(e){return t.postQuiz(t.testQuiz)}}},[t._v(" Post Test Quiz ")])],1),r("div",[r("h3",[t._v("Quiz Queue")]),r("div",{staticClass:"queue-wrapper"},t._l(t.queuedQuizzes,(function(e,n){return r("div",{key:n,staticClass:"card"},[r("div",{staticClass:"card-content"},[r("div",{staticClass:"title"},[t._v(" "+t._s(e.quizName)+" ")]),r("div",{staticClass:"subtitle"},[t._v(" "+t._s(e.questions.length)+" question(s) ")])]),r("footer",{staticClass:"card-footer"},[r("b-button",{staticClass:"card-footer-item",attrs:{type:"is-success is-light"},on:{click:function(r){return t.postQuiz(e.questions)}}},[t._v(" Post Quiz ")]),r("b-button",{staticClass:"card-footer-item",attrs:{type:"is-danger is-light"},on:{click:function(e){return t.deleteQuiz(n)}}},[t._v(" Delete Quiz ")])],1)])})),0)])]),r("b-modal",{model:{value:t.createQuizModal,callback:function(e){t.createQuizModal=e},expression:"createQuizModal"}},[r("QuizEditor",{on:{saveQuiz:t.handleSaveQuiz}})],1)],1)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"hero"},[r("div",{staticClass:"hero-body"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v(" Your Classroom ")]),r("h2",{staticClass:"subtitle"})])])])}],o=(r("99af"),r("4160"),r("a434"),r("b0c0"),r("159b"),r("3e8a")),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"quiz-editor",staticStyle:{background:"white"}},[r("div",{staticClass:"quiz-title"},[r("b-input",{attrs:{placeholder:"Quiz Name..."},model:{value:t.quizName,callback:function(e){t.quizName=e},expression:"quizName"}})],1),t._l(t.questions,(function(e,n){return r("div",{directives:[{name:"show",rawName:"v-show",value:n===t.activeIndex,expression:"index === activeIndex"}],key:n,staticClass:"quiz-wrapper"},[t._v(" Question "+t._s(n+1)+" "),r("b-select",{model:{value:e.type,callback:function(r){t.$set(e,"type",r)},expression:"question.type"}},[r("option",{attrs:{value:"mc"}},[t._v("Multiple Choice")]),r("option",{attrs:{value:"tf"}},[t._v("True / False")])]),r("div",{staticClass:"question"},[r("b-input",{attrs:{placeholder:"Your Question Here..."},model:{value:e.question,callback:function(r){t.$set(e,"question",r)},expression:"question.question"}})],1),r("div",{staticClass:"answers-wrapper"},["mc"===e.type?r("div",{staticClass:"answers"},t._l(e.answers,(function(n,i){return r("div",{key:i,staticClass:"answer-option"},[r("b-radio",{attrs:{"native-value":n},model:{value:e.correctAnswer,callback:function(r){t.$set(e,"correctAnswer",r)},expression:"question.correctAnswer"}}),r("b-input",{attrs:{placeholder:"Answer Choice "+(i+1)},model:{value:e.answers[i],callback:function(r){t.$set(e.answers,i,r)},expression:"question.answers[i]"}})],1)})),0):"tf"===e.type?r("div",{staticClass:"answers"},[r("div",{staticClass:"answer-option"},[r("b-radio",{attrs:{"native-value":!0},model:{value:e.correctAnswer,callback:function(r){t.$set(e,"correctAnswer",r)},expression:"question.correctAnswer"}}),r("div",[t._v(" True ")])],1),r("div",{staticClass:"answer-option"},[r("b-radio",{attrs:{"native-value":!1},model:{value:e.correctAnswer,callback:function(r){t.$set(e,"correctAnswer",r)},expression:"question.correctAnswer"}}),r("div",[t._v(" False ")])],1)]):t._e()])],1)})),r("b-button",{directives:[{name:"show",rawName:"v-show",value:t.questions.length===t.activeIndex,expression:"questions.length === activeIndex"}],staticClass:"add-new",on:{click:t.addNewQuestion}},[t._v(" Add New Question ")]),r("div",{staticClass:"level edit-controls"},[r("b-button",{staticClass:"level-left",on:{click:function(e){return t.removeQuestion(t.activeIndex)}}},[t._v("Remove Question")]),r("b-numberinput",{staticClass:"level-right",attrs:{placeholder:"0",min:0,max:t.questions.length},model:{value:t.activeIndex,callback:function(e){t.activeIndex=e},expression:"activeIndex"}})],1),r("b-button",{on:{click:t.saveQuiz}},[t._v("Save Quiz")])],2)},s=[],c=(r("a623"),r("5530")),u={name:"QuizEditor",data:function(){return{activeIndex:0,quizName:"",questions:[{type:"mc",question:"",answers:["","","",""],correctAnswer:" "}]}},methods:{addNewQuestion:function(){this.questions.push({type:"mc",question:"",answers:["","","",""],correctAnswer:""})},removeQuestion:function(t){this.questions.length>1&&t<this.questions.length&&this.questions.splice(t,1)},saveQuiz:function(){""!=this.quizName&&this.questions.every((function(t){return""!=t.type&&""!=t.question}))&&this.$emit("saveQuiz",{quizName:this.quizName,questions:Object(c["a"])({},this.questions)})}}},l=u,f=(r("e5c6"),r("2877")),d=Object(f["a"])(l,a,s,!1,null,"2df7417a",null),v=d.exports,p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[t._v(" Class average: {{}}% ")]),r("div",[r("b-table",{attrs:{bordered:!0,striped:!0,narrowed:!0,hoverable:!0,data:t.quizData}},[r("b-table-column",{attrs:{field:"name",label:"Name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),t._l(t.quiz,(function(e,n){return r("b-table-column",{key:n,attrs:{field:n}},[t._v(" "+t._s(t.props.row[n])+" ")])}))],2),t._v(" "+t._s(t.quizData)+" ")],1)])},h=[];r("4fad");function b(t){if(Array.isArray(t))return t}r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0");function m(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done);n=!0)if(r.push(a.value),e&&r.length===e)break}catch(c){i=!0,o=c}finally{try{n||null==s["return"]||s["return"]()}finally{if(i)throw o}}return r}}r("a630"),r("fb6a"),r("25f0");function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t,e){if(t){if("string"===typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function w(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(t,e){return b(t)||m(t,e)||y(t,e)||w()}var z={name:"QuizResults",props:{quiz:{type:Array},responses:{type:Object},roster:{type:Object}},data:function(){return{m_quiz:[]}},mounted:function(){this.m_quiz=this.quiz},watch:{quiz:{immediate:!0,handler:function(t){this.m_quiz=t}}},methods:{},computed:{quizData:function(){for(var t=this,e=[],r=function(){var r=S(i[n],2),o=r[0],a=r[1],s={name:o};console.log(a),a.forEach((function(e,r){s[r]=e==t.m_quiz[r].correctAnswer})),e.push(s)},n=0,i=Object.entries(this.responses);n<i.length;n++)r();return e}}},q=z,C=Object(f["a"])(q,p,h,!1,null,null,null),O=C.exports,_={name:"TeacherClassroom",components:{QuizEditor:v,QuizResults:O},mounted:function(){var t=this;o["b"].doc("/teachers/".concat(this.userId,"/classrooms/").concat(this.classroomId)).get().then((function(e){var r=e.data().roster;r.forEach((function(e){o["b"].doc("/students/".concat(e)).get().then((function(r){t.roster[e]=r.data().name}))}))})),o["a"].ref("".concat(this.classroomId,"/quiz")).once("value").then((function(e){t.activeQuiz=e.val()}))},data:function(){return{activeQuiz:[],queuedQuizzes:[{quizName:"Quiz 2",questions:[{type:"mc",question:"Choose the synonym of this word: beautiful",answers:["ugly","smart","pretty","quiet"],correctAnswer:"pretty"}]},{quizName:"Quiz 3",questions:[{type:"mc",question:"534 rounded to the nearest ten is which number?",answers:["500","530","540","600"],correctAnswer:"530"}]}],testQuiz:[{type:"mc",question:"Choose the antonym of this word: wild",answers:["tame","crazy","loud","aggressive"],correctAnswer:"tame"}],createQuizModal:!1,wantToQueue:!1,roster:{Q9U7SfGghfuMXd8WepnL:{first:"Bob",last:"Ross"},rpVBpm6fkqdmMlMkXgb0:{first:"Fred",last:"Rogers"}}}},computed:{userId:function(){return this.$store.getters.getUserId},userType:function(){return this.$store.getters.getUserType},classroomId:function(){return this.$route.params.id},quizResponses:function(){var t={};return o["a"].ref("".concat(this.classroomId,"/responses")).on("value",(function(e){t=e.val()})),t}},methods:{postQuiz:function(t){o["a"].ref("".concat(this.classroomId,"/quiz")).set(t),this.activeQuiz=t},deleteQuiz:function(t){this.queuedQuizzes.splice(t,1)},closeQuiz:function(){this.activeQuiz=[]},createQuiz:function(){this.createQuizModal=!0},queueQuiz:function(){this.createQuizModal=!0,this.wantToQueue=!0},handleSaveQuiz:function(t){this.wantToQueue?this.queuedQuizzes.push(t):this.postQuiz(t.questions),this.createQuizModal=!1,this.wantToQueue=!1}}},Q=_,x=(r("1324"),Object(f["a"])(Q,n,i,!1,null,"fe071f6c",null));e["default"]=x.exports},c3f7:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Hello, "+t._s(this.$store.getters.getDisplayName)+" ")]),t.classrooms.length>0?r("div",{staticClass:"wrapper"},[t._l(t.classrooms,(function(t,e){return r("ClassroomLink",{key:e,attrs:{name:t.name,classroomId:t.id,type:"teacher"}})})),r("div",{staticClass:"create-class"},[r("b-button",[t._v(" Create New Class ")])],1)],2):t._e()])},i=[],o=(r("4160"),r("159b"),r("5530")),a=r("3e8a"),s=r("26a5"),c={name:"TeacherDashboard",components:{ClassroomLink:s["a"]},beforeMount:function(){var t=this;this.$bind("teacherInfo",a["b"].doc("/teachers/".concat(this.userId))),a["b"].collection("/teachers/".concat(this.userId,"/classrooms")).get().then((function(e){e.forEach((function(e){t.classrooms.push(Object(o["a"])({id:e.id},e.data()))}))}))},data:function(){return{teacherInfo:{},classrooms:[],from:null}},computed:{userId:function(){return this.$store.getters.getUserId}}},u=c,l=(r("20be"),r("2877")),f=Object(l["a"])(u,n,i,!1,null,"2a5bf480",null);e["default"]=f.exports},d28b:function(t,e,r){var n=r("746f");n("iterator")},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=s.f,u=o(n),l={},f=0;while(u.length>f)r=i(n,e=u[f++]),void 0!==r&&c(l,e,r);return l}})},ddb0:function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("e260"),a=r("9112"),s=r("b622"),c=s("iterator"),u=s("toStringTag"),l=o.values;for(var f in i){var d=n[f],v=d&&d.prototype;if(v){if(v[c]!==l)try{a(v,c,l)}catch(h){v[c]=l}if(v[u]||a(v,u,f),i[f])for(var p in o)if(v[p]!==o[p])try{a(v,p,o[p])}catch(h){v[p]=o[p]}}}},e01a:function(t,e,r){"use strict";var n=r("23e7"),i=r("83ab"),o=r("da84"),a=r("5135"),s=r("861d"),c=r("9bf2").f,u=r("e893"),l=o.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(d,l);var v=d.prototype=l.prototype;v.constructor=d;var p=v.toString,h="Symbol(test)"==String(l("test")),b=/^Symbol\((.*)\)[^)]+$/;c(v,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=p.call(t);if(a(f,t))return"";var r=h?e.slice(7,-1):e.replace(b,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e0f1:function(t,e,r){},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,s=r("83ab"),c=i((function(){a(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e5c6:function(t,e,r){"use strict";var n=r("9c04"),i=r.n(n);i.a},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("861d"),o=r("e8b5"),a=r("23cb"),s=r("50c4"),c=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),d=r("ae40"),v=f("slice"),p=d("slice",{ACCESSORS:!0,0:0,1:2}),h=l("species"),b=[].slice,m=Math.max;n({target:"Array",proto:!0,forced:!v||!p},{slice:function(t,e){var r,n,l,f=c(this),d=s(f.length),v=a(t,d),p=a(void 0===e?d:e,d);if(o(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?i(r)&&(r=r[h],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(f,v,p);for(n=new(void 0===r?Array:r)(m(p-v,0)),l=0;v<p;v++,l++)v in f&&u(n,l,f[v]);return n.length=l,n}})},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=teacher.53e41d18.js.map