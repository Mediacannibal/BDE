/*! For license information please see app~1fb195ae.ad5498a8fc0884e03b09.js.LICENSE.txt */
(this.webpackJsonp=this.webpackJsonp||[]).push([[7],{507:function(t,e,n){"use strict";var r,i=n(22),o=n(82),a=n(2),s=n(18),u=n(146),c=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),l=new s.b("installations","Installations",c);function f(t){return t instanceof s.c&&t.code.includes("request-failed")}function h(t){return"https://firebaseinstallations.googleapis.com/v1/projects/"+t.projectId+"/installations"}function d(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}function p(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,e.json()];case 1:return n=i.sent(),r=n.error,[2,l.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function v(t){var e=t.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function g(t,e){var n=e.refreshToken,r=v(t);return r.append("Authorization",function(t){return"FIS_v2 "+t}(n)),r}function b(t){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,t()];case 1:return(e=n.sent()).status>=500&&e.status<600?[2,t()]:[2,e]}}))}))}function m(t,e){var n=e.fid;return Object(a.b)(this,void 0,void 0,(function(){var e,r,i,o,s,u;return Object(a.d)(this,(function(a){switch(a.label){case 0:return e=h(t),r=v(t),i={fid:n,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.4.26"},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,b((function(){return fetch(e,o)}))];case 1:return(s=a.sent()).ok?[4,s.json()]:[3,3];case 2:return u=a.sent(),[2,{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:d(u.authToken)}];case 3:return[4,p("Create Installation",s)];case 4:throw a.sent()}}))}))}function y(t){return new Promise((function(e){setTimeout(e,t)}))}var I=/^[cdef][\w-]{21}$/;function O(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var e=function(t){return(e=t,btoa(String.fromCharCode.apply(String,Object(a.f)([],Object(a.e)(e)))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}(t);return I.test(e)?e:""}catch(t){return""}}function w(t){return t.appName+"!"+t.appId}var j=new Map;function S(t,e){var n=w(t);E(n,e),function(t,e){var n=L();n&&n.postMessage({key:t,fid:e});T()}(n,e)}function E(t,e){var n,r,i=j.get(t);if(i)try{for(var o=Object(a.g)(i),s=o.next();!s.done;s=o.next()){(0,s.value)(e)}}catch(t){n={error:t}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var C=null;function L(){return!C&&"BroadcastChannel"in self&&((C=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(t){E(t.data.key,t.data.fid)}),C}function T(){0===j.size&&C&&(C.close(),C=null)}var k,D="firebase-installations-store",R=null;function A(){return R||(R=Object(u.openDb)("firebase-installations-database",1,(function(t){switch(t.oldVersion){case 0:t.createObjectStore(D)}}))),R}function P(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o,s;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=w(t),[4,A()];case 1:return r=a.sent(),i=r.transaction(D,"readwrite"),[4,(o=i.objectStore(D)).get(n)];case 2:return s=a.sent(),[4,o.put(e,n)];case 3:return a.sent(),[4,i.complete];case 4:return a.sent(),s&&s.fid===e.fid||S(t,e.fid),[2,e]}}))}))}function N(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return e=w(t),[4,A()];case 1:return n=i.sent(),[4,(r=n.transaction(D,"readwrite")).objectStore(D).delete(e)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function _(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o,s,u;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=w(t),[4,A()];case 1:return r=a.sent(),i=r.transaction(D,"readwrite"),[4,(o=i.objectStore(D)).get(n)];case 2:return s=a.sent(),void 0!==(u=e(s))?[3,4]:[4,o.delete(n)];case 3:return a.sent(),[3,6];case 4:return[4,o.put(u,n)];case 5:a.sent(),a.label=6;case 6:return[4,i.complete];case 7:return a.sent(),!u||s&&s.fid===u.fid||S(t,u.fid),[2,u]}}))}))}function H(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,_(t,(function(n){var r=function(t){return q(t||{fid:O(),registrationStatus:0})}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){var n=Promise.reject(l.create("app-offline"));return{installationEntry:e,registrationPromise:n}}var r={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,m(t,e)];case 1:return n=i.sent(),[2,P(t,n)];case 2:return f(r=i.sent())&&409===r.customData.serverCode?[4,N(t)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,P(t,{fid:e.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(t,r);return{installationEntry:r,registrationPromise:i}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:F(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry}))];case 1:return""!==(n=i.sent()).fid?[3,3]:(r={},[4,e]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:e}]}}))}))}function F(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return[4,z(t)];case 1:e=o.sent(),o.label=2;case 2:return 1!==e.registrationStatus?[3,5]:[4,y(100)];case 3:return o.sent(),[4,z(t)];case 4:return e=o.sent(),[3,2];case 5:return 0!==e.registrationStatus?[3,7]:[4,H(t)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,e]}}))}))}function z(t){return _(t,(function(t){if(!t)throw l.create("installation-not-found");return q(t)}))}function q(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e}function B(t,e){var n=t.appConfig,r=t.platformLoggerProvider;return Object(a.b)(this,void 0,void 0,(function(){var t,i,o,s,u,c,l;return Object(a.d)(this,(function(a){switch(a.label){case 0:return t=function(t,e){var n=e.fid;return h(t)+"/"+n+"/authTokens:generate"}(n,e),i=g(n,e),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),s={installation:{sdkVersion:"w:0.4.26"}},u={method:"POST",headers:i,body:JSON.stringify(s)},[4,b((function(){return fetch(t,u)}))];case 1:return(c=a.sent()).ok?[4,c.json()]:[3,3];case 2:return l=a.sent(),[2,d(l)];case 3:return[4,p("Generate Auth Token",c)];case 4:throw a.sent()}}))}))}function U(t,e){return void 0===e&&(e=!1),Object(a.b)(this,void 0,void 0,(function(){var n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return[4,_(t.appConfig,(function(r){if(!x(r))throw l.create("not-registered");var i=r.authToken;if(!e&&function(t){return 2===t.requestStatus&&!function(t){var e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(t)}(i))return r;if(1===i.requestStatus)return n=function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,M(t.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,y(100)];case 3:return i.sent(),[4,M(t.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,U(t,e)]:[2,r]}}))}))}(t,e),r;if(!navigator.onLine)throw l.create("app-offline");var o=function(t){var e={requestStatus:1,requestTime:Date.now()};return Object(a.a)(Object(a.a)({},t),{authToken:e})}(r);return n=function(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i;return Object(a.d)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,B(t,e)];case 1:return n=o.sent(),i=Object(a.a)(Object(a.a)({},e),{authToken:n}),[4,P(t.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!f(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,N(t.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=Object(a.a)(Object(a.a)({},e),{authToken:{requestStatus:0}}),[4,P(t.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(t,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function M(t){return _(t,(function(t){if(!x(t))throw l.create("not-registered");var e,n=t.authToken;return 1===(e=n).requestStatus&&e.requestTime+1e4<Date.now()?Object(a.a)(Object(a.a)({},t),{authToken:{requestStatus:0}}):t}))}function x(t){return void 0!==t&&2===t.registrationStatus}function V(t){return Object(a.b)(this,void 0,void 0,(function(){var e;return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,H(t)];case 1:return(e=n.sent().registrationPromise)?[4,e]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}function G(t,e){return Object(a.b)(this,void 0,void 0,(function(){var n,r,i,o;return Object(a.d)(this,(function(a){switch(a.label){case 0:return n=function(t,e){var n=e.fid;return h(t)+"/"+n}(t,e),r=g(t,e),i={method:"DELETE",headers:r},[4,b((function(){return fetch(n,i)}))];case 1:return(o=a.sent()).ok?[3,3]:[4,p("Delete Installation",o)];case 2:throw a.sent();case 3:return[2]}}))}))}function W(t,e){var n=t.appConfig;return function(t,e){L();var n=w(t),r=j.get(n);r||(r=new Set,j.set(n,r)),r.add(e)}(n,e),function(){!function(t,e){var n=w(t),r=j.get(n);r&&(r.delete(e),0===r.size&&j.delete(n),T())}(n,e)}}function $(t){return l.create("missing-app-config-values",{valueName:t})}(k=i.a).INTERNAL.registerComponent(new o.a("installations",(function(t){var e=t.getProvider("app").getImmediate(),n={appConfig:function(t){var e,n;if(!t||!t.options)throw $("App Configuration");if(!t.name)throw $("App Name");try{for(var r=Object(a.g)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!t.options[o])throw $(o)}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:t.getProvider("platform-logger")};return{app:e,getId:function(){return function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n,r;return Object(a.d)(this,(function(i){switch(i.label){case 0:return[4,H(t.appConfig)];case 1:return e=i.sent(),n=e.installationEntry,(r=e.registrationPromise)?r.catch(console.error):U(t).catch(console.error),[2,n.fid]}}))}))}(n)},getToken:function(t){return function(t,e){return void 0===e&&(e=!1),Object(a.b)(this,void 0,void 0,(function(){return Object(a.d)(this,(function(n){switch(n.label){case 0:return[4,V(t.appConfig)];case 1:return n.sent(),[4,U(t,e)];case 2:return[2,n.sent().token]}}))}))}(n,t)},delete:function(){return function(t){return Object(a.b)(this,void 0,void 0,(function(){var e,n;return Object(a.d)(this,(function(r){switch(r.label){case 0:return[4,_(e=t.appConfig,(function(t){if(!t||0!==t.registrationStatus)return t}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw l.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw l.create("app-offline");case 3:return[4,G(e,n)];case 4:return r.sent(),[4,N(e)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(n)},onIdChange:function(t){return W(n,t)}}}),"PUBLIC")),k.registerVersion("@firebase/installations","0.4.26")},73:function(t,e,n){"use strict";function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return d}));var o,a=[];!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(o||(o={}));var s={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},u=o.INFO,c=((i={})[o.DEBUG]="log",i[o.VERBOSE]="log",i[o.INFO]="info",i[o.WARN]="warn",i[o.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var o=(new Date).toISOString(),a=c[e];if(!a)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[a].apply(console,r(["["+o+"]  "+t.name+":"],n))}},f=function(){function t(t){this.name=t,this._logLevel=u,this._logHandler=l,this._userLogHandler=null,a.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in o))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?s[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.DEBUG],t)),this._logHandler.apply(this,r([this,o.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.VERBOSE],t)),this._logHandler.apply(this,r([this,o.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.INFO],t)),this._logHandler.apply(this,r([this,o.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.WARN],t)),this._logHandler.apply(this,r([this,o.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,o.ERROR],t)),this._logHandler.apply(this,r([this,o.ERROR],t))},t}();function h(t){a.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],a=2;a<arguments.length;a++)i[a-2]=arguments[a];var s=i.map((function(t){if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((function(t){return t})).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:o[n].toLowerCase(),message:s,args:i,type:e.name})}},r=0,i=a;r<i.length;r++){n(i[r])}}},82:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var r=n(2),i=n(18),o=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),a=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Set}return t.prototype.get=function(t){void 0===t&&(t="[DEFAULT]");var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i.a;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e=Object(r.a)({identifier:"[DEFAULT]",optional:!1},t),n=e.identifier,i=e.optional,o=this.normalizeInstanceIdentifier(n);if(!this.isInitialized(o)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:o})}catch(t){if(i)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}try{for(var i=Object(r.g)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r.e)(o.value,2),s=a[0],u=a[1],c=this.normalizeInstanceIdentifier(s);try{var l=this.getOrInitializeService({instanceIdentifier:c});u.resolve(l)}catch(t){}}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r.f)(Object(r.f)([],Object(r.e)(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r.e)(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.instanceIdentifier,o=void 0===i?"[DEFAULT]":i,a=t.options,s=void 0===a?{}:a,u=this.normalizeInstanceIdentifier(o);if(this.isInitialized(u))throw Error(this.name+"("+u+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var c=this.getOrInitializeService({instanceIdentifier:u,options:s});try{for(var l=Object(r.g)(this.instancesDeferred.entries()),f=l.next();!f.done;f=l.next()){var h=Object(r.e)(f.value,2),d=h[0],p=h[1];u===this.normalizeInstanceIdentifier(d)&&p.resolve(c)}}catch(t){e={error:t}}finally{try{f&&!f.done&&(n=l.return)&&n.call(l)}finally{if(e)throw e.error}}return this.invokeOnInitCallbacks(c,u),c},t.prototype.onInit=function(t){var e=this;return this.onInitCallbacks.add(t),function(){e.onInitCallbacks.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i;try{for(var o=Object(r.g)(this.onInitCallbacks),a=o.next();!a.done;a=o.next()){var s=a.value;try{s(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,o),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(t){}return o||null},t.prototype.normalizeInstanceIdentifier=function(t){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();var s=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new a(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()},978:function(t,e,n){"use strict";var r,i=n(22),o=(n(18),n(73),n(68),n(54)),a=n(82),s={Firestore:o.c,GeoPoint:o.h,Timestamp:o.e,Blob:o.m,Transaction:o.g,WriteBatch:o.f,DocumentReference:o.l,DocumentSnapshot:o.a,Query:o.i,QueryDocumentSnapshot:o.b,QuerySnapshot:o.j,CollectionReference:o.q,FieldPath:o.n,FieldValue:o.p,setLogLevel:o.o,CACHE_SIZE_UNLIMITED:o.r};(function(t,e){t.INTERNAL.registerComponent(new a.a("firestore",(function(t){return function(t,e){return new o.c(t,new o.k(t,e),new o.d)}(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"))}),"PUBLIC").setServiceProps(Object.assign({},s)))})(r=i.a),r.registerVersion("@firebase/firestore","2.3.1")}}]);