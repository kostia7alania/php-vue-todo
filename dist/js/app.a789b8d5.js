(function(e){function t(t){for(var r,o,i=t[0],u=t[1],s=t[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({http:"http"}[e]||e)+"."+{"chunk-22fe512c":"84f783c5","chunk-2cdfbd0b":"233545f9","chunk-6c6728da":"9e2302b7","chunk-2d0c8e41":"64c869f9","chunk-4729b51d":"cfae9720","chunk-59aa86e3":"afdcb2d1",http:"3f380778","chunk-08ba88df":"6dba9a31"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-22fe512c":1,"chunk-2cdfbd0b":1,"chunk-6c6728da":1,"chunk-4729b51d":1,"chunk-59aa86e3":1,"chunk-08ba88df":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({http:"http"}[e]||e)+"."+{"chunk-22fe512c":"08f5b3be","chunk-2cdfbd0b":"d60536a9","chunk-6c6728da":"582aafde","chunk-2d0c8e41":"31d6cfe0","chunk-4729b51d":"b30cc6de","chunk-59aa86e3":"f2b30ae7",http:"31d6cfe0","chunk-08ba88df":"21fbd315"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===a))return t()}var p=document.getElementsByTagName("style");for(i=0;i<p.length;i++){s=p[i],f=s.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var l=document.getElementsByTagName("head")[0];l.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var p=new Error;s=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./dist/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{light:"",app:""}},[n("v-toolbar",[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[e._v("Test")]),n("span",{staticClass:"font-weight-light"},[e._v("TODO")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://github.com/kostia7alania/php-vue-todo",target:"_blank"}},[n("v-icon",[e._v("code")]),n("span",{staticClass:"mr-2 ml-1"},[e._v("\n        Repository")])],1)],1),n("v-content",[n("section",[n("Todobook")],1),n("Footer-app"),n("Snack"),e.SHOW_LOGIN_DIALOG?n("Login"):e._e()],1)],1)},c=[],i=(n("8e6e"),n("bd86")),u=(n("456d"),n("ac6a"),n("2f62"));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){Object(i["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"App",props:["props"],components:{Todobook:function(){return Promise.all([n.e("chunk-6c6728da"),n.e("chunk-59aa86e3")]).then(n.bind(null,"4ffd"))},"Footer-app":function(){return n.e("chunk-22fe512c").then(n.bind(null,"f124"))},Snack:function(){return n.e("chunk-4729b51d").then(n.bind(null,"be3d"))},Login:function(){return Promise.all([n.e("chunk-2cdfbd0b"),n.e("chunk-6c6728da"),n.e("chunk-2d0c8e41")]).then(n.bind(null,"578a"))}},data:function(){return{}},mounted:function(){var e=this,t=this.props;Object.keys(t).forEach((function(n){return e.$store.commit("SET_INIT_PARAMS",{key:n,val:t[n]})}))},computed:f({},Object(u["e"])(["SHOW_LOGIN_DIALOG"]))},d=p,l=n("2877"),h=n("6544"),_=n.n(h),b=n("7496"),E=n("8336"),g=n("549c"),S=n("132d"),m=n("9910"),v=n("71d9"),O=n("2a7f"),T=Object(l["a"])(d,a,c,!1,null,null,null),k=T.exports;_()(T,{VApp:b["a"],VBtn:E["a"],VContent:g["a"],VIcon:S["a"],VSpacer:m["a"],VToolbar:v["a"],VToolbarTitle:O["a"]});n("55dd"),n("3b2b"),n("4917"),n("96cf");var I=n("3b8d");n("0e44");r["a"].use(u["a"]);var w=function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.t0="axios"in window,e.t0){e.next=5;break}return e.next=4,n.e("http").then(n.bind(null,"d766")).then((function(e){return window.axios=e.default}));case 4:e.t0=e.sent;case 5:return e.abrupt("return",e.t0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();w();var y=function(e){var t=e.response&&401===e.response.status?e.response.data||"Необходимо быть администратором для этого действия":e.message;store.commit("SET_SNACK_MSG",t)},A=window.store=new u["a"].Store({state:{ITEMS:[],SEARCH_BY:"",loading:!1,snackMsg:!1,BACKEND_URL:"https://todo.kostia7alania.ru/",SHOW_LOGIN_DIALOG:!1,IS_LOGGED_IN:!1,IS_ADMIN:!1},getters:{COUNT_FILTERED_ITEMS:function(e,t){return t.FILTERED_ITEMS.length},FILTERED_ITEMS:function(e){var t=e.ITEMS,n=e.SEARCH_BY;if(n&&(t=t.filter((function(e){return e[n].match(new RegExp(n,"gim"))}))),!t.length)return[];var r=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"name";if("string"==typeof e[n]){if(e[n]&&e[n].toUpperCase()<t[n]&&t[n].toUpperCase())return-1;if(e[n]&&e[n].toUpperCase()>t[n]&&t[n].toUpperCase())return 1}else{if(e[n]<t[n])return-1;if(e[n]>t[n])return 1}return 0};return t.sort(r)},SNACK_MSG:function(e){return e.snackMsg}},mutations:{SET_LOADING_ON:function(e){e.loading=!0},SET_LOADING_OFF:function(e){e.loading=!1},SET_SHOW_LOGIN_DIALOG:function(e,t){e.SHOW_LOGIN_DIALOG=t},SET_IS_LOGGED_IN:function(e,t){e.IS_LOGGED_IN=t},SET_IS_ADMIN:function(e,t){e.IS_ADMIN=!!t},SET_INIT_PARAMS:function(e,t){var n=t.key,r=t.val;e[n]=r},SET_SEARCH_BY:function(e,t){e.SEARCH_BY=t},SET_SNACK_MSG:function(e,t){return e.snackMsg=t,t},SET_ITEMS:function(e,t){this._vm.$set(e,"ITEMS",t)}},actions:{CREATE_ITEM:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,o=t.commit,a=t.dispatch,c=new FormData,Object.keys(n).forEach((function(e){return c.append(e,n[e])})),o("SET_LOADING_ON"),e.abrupt("return",axios.post(r.BACKEND_URL+"tasks/create",c).then((function(e){return a("GET_ITEMS")})).catch(y).finally((function(){return o("SET_LOADING_OFF")})));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),UPDATE_ITEM:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,o=t.commit,a=new FormData,Object.keys(n).forEach((function(e){return a.append(e,n[e])})),o("SET_LOADING_ON"),e.abrupt("return",axios.post(r.BACKEND_URL+"tasks/update/"+n.id,a).then((function(e){return dispatch("GET_ITEMS")})).catch(y).finally((function(){return o("SET_LOADING_OFF")})));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),DELETE_ITEM:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(t,n){var r,o,a,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.state,o=t.commit,a=t.dispatch,c=new FormData,c.append("id",n),o("SET_LOADING_ON"),e.abrupt("return",axios.post(r.BACKEND_URL+"tasks/delete/"+n,c).then((function(e){o("SET_SNACK_MSG","Contact has been deleted"),a("GET_ITEMS")})).catch(y).finally((function(){return o("SET_LOADING_OFF")})));case 5:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),GET_ITEMS:function(e){var t=e.state,n=e.commit;return n("SET_LOADING_ON"),axios.post(t.BACKEND_URL+"tasks").then((function(e){n("SET_ITEMS",e.data),n("SET_SNACK_MSG","Updated")})).catch(y).finally((function(){return n("SET_LOADING_OFF")}))},DO_LOGIN:function(e,t){var n=e.state,r=e.commit,o=new FormData;return o.append("username",t.username),o.append("password",t.password),axios.post(n.BACKEND_URL+"login",o).then((function(e){return r("SET_SNACK_MSG","Logged in!"),r("SET_IS_LOGGED_IN",!0),r("SET_IS_ADMIN",e.data.is_admin),!0})).catch(y)},LOGOUT:function(e){var t=e.state,n=e.commit;axios.get(t.BACKEND_URL+"logout").then((function(e){n("SET_SNACK_MSG","Logged out!"),n("SET_IS_LOGGED_IN",!1),n("SET_IS_ADMIN",!1)})).catch(y)}}}),N=n("9483");Object(N["a"])("".concat("./dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,r["a"].config.devtools=!0,window.initApp=function(e){return new r["a"]({store:A,render:function(t){return t(k,{props:{props:e}})}}).$mount("#app")}}});
//# sourceMappingURL=app.a789b8d5.js.map