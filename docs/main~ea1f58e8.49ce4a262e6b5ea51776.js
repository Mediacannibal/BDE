!function(t){function e(e){for(var r,i,u=e[0],a=e[1],s=e[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);for(l&&l(e);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={41:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],a=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=a;c.push([1332,34,13,3,11,38,8,5,2,0,28,10,27,1,45,29,12,17,23,37,7,24,18,14,22,20,39,26,25,6,36,32,46,15,44,33,4,35,9,43,40,30,31,16,19,21,42]),n()}({104:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(16),o=function(t,e){r.a.post("/api/user/social/signup/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))}},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"h",(function(){return i})),n.d(e,"l",(function(){return u})),n.d(e,"m",(function(){return a})),n.d(e,"d",(function(){return s})),n.d(e,"i",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"f",(function(){return h})),n.d(e,"k",(function(){return y})),n.d(e,"g",(function(){return b}));var r=n(16),o=function(t,e){var n=t.path,o=t.method,c=t.auth;switch(o){case"get":r.a.get(n,{headers:c?{Authorization:"Token ".concat(c),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}).then((function(t){e(t,"sucess")})).catch((function(t){return e(t,t.response)}));break;case"post":r.a.post(n,t.data,{headers:c?{Authorization:"Token ".concat(c),"Content-Type":"application/json"}:{"Content-Type":"application/json"}}).then((function(t){e(t,"sucess")})).catch((function(t){return e(t,t.response)}))}},c=function(t,e){r.a.post("/api/user/social/signup/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},i=function(t,e){r.a.post("/api/user/phone/email/otp_verify/",e,{headers:{"Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},u=function(t,e,n){r.a.post("api/user/social/signup/normal/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},a=function(t,e,n){r.a.post("api/user/userlist/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},s=function(t,e,n){r.a.post("tasks/maintask/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},l=function(t,e){r.a.get("company/task/list/",{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},f=function(t,e,n){r.a.post("tasks/tasklog/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},p=function(t,e,n){r.a.post("tasks/project/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},d=function(t,e,n){r.a.get("tasks/project/?user=".concat(n),{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},h=function(t,e,n){r.a.post("tasks/tasktimelog/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},y=function(t,e,n,o){r.a.get("tasks/tasktimelog/?task_ids=".concat(n,"&users=").concat(o),{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess")})).catch((function(e){return t(e,e.response)}))},b=function(t,e,n,o){r.a.post("tasks/file/uploaded/",n,{headers:{Authorization:e?"Token ".concat(e):"","Content-Type":"application/json"}}).then((function(e){t(e,"sucess",o)})).catch((function(e){return t(e,e.response,o)}))}},16:function(t,e,n){"use strict";var r=n(705),o=n.n(r).a.create({baseURL:"https://apimcbde.mediacannibal.com"});e.a=o},176:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(74);function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a(!1),a=function(){var t=c(Object(r.b)(u),2),e=t[0],n=t[1];return{userDetail:e,setuserDetail:n,loaduserDetail:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(JSON.parse(String(localStorage.getItem("UserDetails"))));case 1:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,c){var i=t.apply(e,n);function u(t){o(i,r,c,u,a,"next",t)}function a(t){o(i,r,c,u,a,"throw",t)}u(void 0)}))})();var t}}}},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(74);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var i=new r.a("undefined"==typeof localStorage?null:localStorage.getItem("AuthToken")?JSON.parse(String(localStorage.getItem("AuthToken"))):null),u=function(){var t=o(Object(r.b)(i),2),e=t[0],n=t[1];return{auth:e,setAuth:n,login:function(t){n(t)},logout:function(){localStorage.clear(),sessionStorage.clear(),n(null)}}}},23:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(74);function o(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var u=new r.a(!1),a=new r.a(!1),s=function(){var t=c(Object(r.b)(u),2),e=t[0],n=t[1],i=c(Object(r.b)(a),2),s=i[0],l=i[1];return{Colour:e,setColour:n,colourObj:s,setcolourObj:l,loadColour:function(){return(t=regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n([{id:"--color_1",selected:!0,colour:"#154360"},{id:"--color_2",selected:!0,colour:"#01003c"},{id:"--color_3",selected:!0,colour:"#ff0000"},{id:"--color_4",selected:!0,colour:"#242446"},{id:"--color_5",selected:!0,colour:"#ffffff"},{id:"--color_6",selected:!0,colour:"#00000019"},{id:"--color_7",selected:!0,colour:"#60ce80"},{id:"--color_8",selected:!0,colour:"#fcfeff"},{id:"--color_9",selected:!0,colour:"#eac952"},{id:"--color_10",selected:!0,colour:"#60ce80"},{id:"--color_11",selected:!0,colour:"#dc0000"},{id:"--color_12",selected:!0,colour:"#efecec"},{id:"--color_13",selected:!0,colour:"#00008b"},{id:"--color_14",selected:!0,colour:"#449698"},{id:"--color_15",selected:!0,colour:"#ddd"},{id:"--color_16",selected:!0,colour:"#378587"},{id:"--color_17",selected:!0,colour:"#639A4D"},{id:"--color_18",selected:!0,colour:"#fc595a"},{id:"--color_19",selected:!0,colour:"#4fb5ff"},{id:"--color_20",selected:!0,colour:"#dcfd47"},{id:"--color_21",selected:!0,colour:"#000000"},{id:"--color_22",selected:!0,colour:"#e06a6a19"},{id:"--color_23",selected:!0,colour:"#acfc91c2"},{id:"--color_24",selected:!0,colour:"#e0e0e0"},{id:"--color_25",selected:!0,colour:"#757588"},{id:"--color_26",selected:!0,colour:"#999"},{id:"--color_27",selected:!0,colour:"#000000a4"}]),l({color_1:"#154360",color_2:"#01003c",color_3:"#ff0000",color_4:"#242446",color_5:"#ffffff",color_6:"#00000019",color_7:"#60ce80",color_8:"#fcfeff",color_9:"#eac952",color_10:"#60ce80",color_11:"#dc0000",color_12:"#efecec",color_13:"#00008b",color_14:"#449698",color_15:"#ddd",color_16:"#378587",color_17:"#639A4D",color_18:"#fc595a",color_19:"#4fb5ff",color_20:"#dcfd47",color_21:"#000000",color_22:"#e06a6a19",color_23:"#acfc91c2",color_24:"#e0e0e0",color_25:"#757588",color_26:"#999",color_27:"#000000a4"});case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,c){var i=t.apply(e,n);function u(t){o(i,r,c,u,a,"next",t)}function a(t){o(i,r,c,u,a,"throw",t)}u(void 0)}))})();var t}}}},56:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t,e){var n=String(t)+String(e);return n=(n=(n=(n=window.btoa(n)).replace("+","-")).replace("/","_")).replace("=","")}},712:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n(15),o=n(20),c=n(74);function i(t,e,n,r,o,c,i){try{var u=t[c](i),a=u.value}catch(t){return void n(t)}u.done?e(a):Promise.resolve(a).then(r,o)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function u(t){i(c,r,o,u,a,"next",t)}function a(t){i(c,r,o,u,a,"throw",t)}u(void 0)}))}}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var l=new c.a(!1),f=function(){var t=a(Object(c.b)(l),2),e=t[0],n=t[1],i=Object(o.a)().auth;return{isGantt:e,setisGantt:n,loadGanttDetail:function(){return u(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(r.a)({path:"tasks/project/?user=",method:"get",auth:i||!1},function(){var t=u(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:200===e.status?n(e.data.results):(console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(r)));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})))()}}}},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return s}));var r=n(0);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null==n)return;var r,o,c=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return c}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,"_state",void 0),u(this,"subscribers",void 0),u(this,"index",void 0),u(this,"id",void 0),this._state=e,this.index=0,this.subscribers={},this.id=t.id++}var e,n,r;return e=t,(n=[{key:"pingSubscribers",value:function(t,e){for(var n in this.subscribers)this.subscribers[n](t,e)}},{key:"update",value:function(t){var e;e=t instanceof Function?t(this._state):t;var n=this._state;return this._state=e,this.pingSubscribers(n,e),e}},{key:"subscribe",value:function(t){var e=++this.index;this.subscribers[e]=t;var n=this.subscribers;return function(){delete n[e]}}},{key:"state",get:function(){return this._state}}])&&i(e.prototype,n),r&&i(e,r),t}();function s(t){var e=o(Object(r.useState)(t.state),2),n=e[0],c=e[1];Object(r.useLayoutEffect)((function(){return t.subscribe((function(t,e){c(e)}))}),[t.id]);return[n,function(e){t.update(e)}]}u(a,"id",0)}});