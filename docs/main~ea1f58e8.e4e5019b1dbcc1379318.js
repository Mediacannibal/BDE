!function(t){function n(n){for(var r,u,a=n[0],c=n[1],s=n[2],l=0,p=[];l<a.length;l++)u=a[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(n);p.length;)p.shift()();return i.push.apply(i,s||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,a=1;a<e.length;a++){var c=e[a];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={21:0},i=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="./";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var f=c;i.push([866,6,3,20,10,18,13,1,4,14,8,19,12,11,2,17,25,9,24,0,22,23,5,15,7,16]),e()}({112:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return s}));var r=e(0);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var c=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_state",void 0),a(this,"subscribers",void 0),a(this,"index",void 0),a(this,"id",void 0),this._state=n,this.index=0,this.subscribers={},this.id=t.id++}var n,e,r;return n=t,(e=[{key:"pingSubscribers",value:function(t,n){for(var e in this.subscribers)this.subscribers[e](t,n)}},{key:"update",value:function(t){var n;n=t instanceof Function?t(this._state):t;var e=this._state;return this._state=n,this.pingSubscribers(e,n),n}},{key:"subscribe",value:function(t){var n=++this.index;this.subscribers[n]=t;var e=this.subscribers;return function(){delete e[n]}}},{key:"state",get:function(){return this._state}}])&&u(n.prototype,e),r&&u(n,r),t}();function s(t){var n=o(Object(r.useState)(t.state),2),e=n[0],i=n[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,n){i(n)}))}),[t.id]);return[e,function(n){t.update(n)}]}a(c,"id",0)},12:function(t,n,e){"use strict";e.d(n,"f",(function(){return o})),e.d(n,"k",(function(){return i})),e.d(n,"l",(function(){return u})),e.d(n,"h",(function(){return a})),e.d(n,"g",(function(){return c})),e.d(n,"b",(function(){return s})),e.d(n,"i",(function(){return f})),e.d(n,"a",(function(){return l})),e.d(n,"c",(function(){return p})),e.d(n,"j",(function(){return h})),e.d(n,"d",(function(){return d})),e.d(n,"e",(function(){return y}));var r=e(9),o=function(t,n){r.a.post("/api/user/phone/email/otp_verify/",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},i=function(t,n,e){r.a.post("api/user/social/signup/normal/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},u=function(t,n){r.a.get("/api/user/list/",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},a=function(t,n){r.a.get("company/add/",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},c=function(t,n){r.a.get("company/branch/add/",{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},s=function(t,n,e){r.a.post("tasks/maintask/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},f=function(t,n,e,o){r.a.get("tasks/maintask/?task_type=".concat(e,"&user=").concat(o),{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},l=function(t,n,e){r.a.post("tasks/tasklog/add/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},p=function(t,n,e){r.a.post("tasks/project/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},h=function(t,n,e){r.a.get("tasks/project/?user=".concat(e),{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},d=function(t,n,e){r.a.post("tasks/tasktimelog/add/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))},y=function(t,n,e){r.a.post("tasks/file/uploaded/",e,{headers:{Authorization:n?"Token ".concat(n):"","Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))}},137:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(9),o=function(t,n){r.a.post("/api/user/social/signup/",n,{headers:{"Content-Type":"application/json"}}).then((function(n){t(n,"sucess")})).catch((function(n){return t(n,n.response)}))}},21:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(112);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var u=new r.a("undefined"==typeof localStorage?null:localStorage.getItem("AuthToken")?JSON.parse(String(localStorage.getItem("AuthToken"))):null),a=function(){var t=o(Object(r.b)(u),2),n=t[0],e=t[1];return{auth:n,setAuth:e,login:function(t){e(t)},logout:function(){e(null)}}}},486:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(112);function o(t,n,e,r,o,i,u){try{var a=t[i](u),c=a.value}catch(t){return void e(t)}a.done?n(c):Promise.resolve(c).then(r,o)}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return e}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return u(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var a=new r.a(!1),c=function(){var t=i(Object(r.b)(a),2),n=t[0],e=t[1];return{userDetail:n,setuserDetail:e,loaduserDetail:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(JSON.parse(String(localStorage.getItem("UserDetails"))));case 1:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,i){var u=t.apply(n,e);function a(t){o(u,r,i,a,c,"next",t)}function c(t){o(u,r,i,a,c,"throw",t)}a(void 0)}))})();var t}}}},9:function(t,n,e){"use strict";var r=e(471),o=e.n(r).a.create({baseURL:"https://apimcbde.mediacannibal.com"});n.a=o}});