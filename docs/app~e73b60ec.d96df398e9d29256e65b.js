(this.webpackJsonp=this.webpackJsonp||[]).push([[40],{427:function(e,t,a){"use strict";var n=a(11),r=a.n(n)()((function(e){return e[1]}));r.push([e.i,"",""]),t.a=r},768:function(e,t,a){"use strict";a(795);var n=a(0),r=a.n(n),o=(a(1032),a(35)),l=a(38),c=a(294),i=a(63),u=(a(34),a(726)),s=a(770),m=a(731),p=a(767),d=a(771),f=a(772),h=a(773),b=a(10),E=a.n(b),y=a(427),g={insert:"head",singleton:!1},v=(E()(y.a,g),y.a.locals,a(46)),_=a(285),j=a(19),S=a(789),w=a(52),k=a(20),O=a(21),N=a(49),A=a(25),T=a(70),C=a(71),I=a(790),x=a(5),P=a(64);function D(e){return function(e){if(Array.isArray(e))return U(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(c)throw r}}return o}(e,t)||L(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){if(e){if("string"==typeof e)return U(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?U(e,t):void 0}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var M=function(e){var t=Object(I.a)(),a=t.bugLog,o=t.loadbugLogDetail,c=Object(k.a)().auth,u=Object(l.f)(),s=Object(A.a)(),m=s.Colour,p=s.colourObj,d=(s.setcolourObj,s.setColour,s.loadColour),f=Object(P.a)(),h=f.taskField,b=(f.settaskField,f.loadTaskDetail,f.loadTaskDetail_byvalues,f.loadTaskDetail_withcallback),E=(f.edittask,F(Object(n.useState)([]),2)),y=E[0],g=E[1],L=F(Object(n.useState)([]),2),U=L[0],M=(L[1],F(Object(n.useState)([]),2)),R=(M[0],M[1],F(Object(n.useState)(""),2)),B=(R[0],R[1],F(Object(n.useState)(!1),2)),J=B[0],H=B[1],$=F(Object(n.useState)(!1),2),q=($[0],$[1]),G=F(Object(n.useState)(!1),2),X=(G[0],G[1],F(Object(n.useState)(""),2)),z=(X[0],X[1]),K=F(Object(n.useState)(!1),2),Q=K[0],V=(K[1],F(Object(n.useState)(!0),2)),W=V[0],Y=V[1],Z=F(Object(n.useState)(""),2),ee=Z[0],te=Z[1],ae=F(Object(n.useState)([]),2),ne=ae[0],re=ae[1];Object(n.useEffect)((function(){i.a.pageview(window.location.pathname+window.location.search),e.setheader_options(oe),Y(!0),m||d(),a||o(),h||b((function(e){re(e.map((function(e){return{key:e.id,value:e.project_ref}})).reduce((function(e,t){return function(e,t){var a=!1;return e.map((function(e){e.value===t.value&&(a=!0)})),a}(e,t)?e:[].concat(D(e),[t])}),[]))})),Object(j.a)({path:"tasks/maintask/?task_type=bug&user=",method:"get",auth:c||!1},(function(e,t){200===e.status?(Y(!1),g(e.data.results)):(Y(!1),console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(t)))}))}),[]);var oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"screen_header_element",onClick:function(){H(!0)}},r.a.createElement("img",{className:"header_icon",src:w}),r.a.createElement("div",null,"Add Bug")))},le=function(e){switch(e){case"Low":return"textcolor_yellow";case"Normal":return"textcolor_blue";case"High":return"textcolor_orange";case"Urgent":return"textcolor_red";case"Emergency":return"textcolor_red textcolor_blinking";default:return""}},ce=function(){return U.map((function(e,t){return r.a.createElement("div",null," Project:",r.a.createElement("span",null,e.title))}))};return r.a.createElement("div",{className:"main"},J&&r.a.createElement(S.a,{setPopup:function(){H(!1)}}),r.a.createElement("div",{className:"body"},W?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(v.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main_selector_div"},r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(x.a,{type:"picker",name:"Project",id:"task_project_data",value:null==ee?void 0:ee.value,onChange:function(e){te(e)},options:ne}))),r.a.createElement("div",{className:"bidlog_filterfield_container"},r.a.createElement("button",{onClick:function(){}},"Filter ",r.a.createElement("div",{className:"filter_icon_container"},r.a.createElement("img",{className:"filter_icon",src:_}))),Q?r.a.createElement("button",{onClick:function(){window.location.reload()}},"X"):null),r.a.createElement(O.a,{card_title:ce,card_body:r.a.createElement("div",{className:"internal_table",style:{color:p.color_1}},r.a.createElement("table",{id:"internal_table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["Project","Bug Title","Task Type","priority","domain","description","Date Reported","Protrait","Landscape","Android","IOS","Browser","image_link"].map((function(e,t){return r.a.createElement("th",{key:t},r.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),r.a.createElement("div",{className:"orderby_arrow"},r.a.createElement(T.a,{onexpand:function(){}}))))})))),r.a.createElement("tbody",null,y.map((function(e){return r.a.createElement("tr",{key:e.id,className:le(e.priority),onClick:function(){u.replace({pathname:"/TaskDetails/".concat(Object(C.a)("bug",e.id)),state:e})}},r.a.createElement("td",null,e.project_ref),r.a.createElement("td",{onClick:function(){q(!0),z(e.id)}},e.title),r.a.createElement("td",null,e.task_type),r.a.createElement("td",null,e.priority),r.a.createElement("td",null,e.domain),r.a.createElement("td",null,e.description),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."))})))))}),r.a.createElement(O.a,{card_title:ce,card_body:r.a.createElement("div",{className:"internal_table",style:{color:p.color_1}},r.a.createElement("table",{id:"internal_table"},r.a.createElement("thead",null,r.a.createElement("tr",null,["Project","Title","Task Type","priority","domain","Description","Api Name","Api Method","Path"].map((function(e,t){return r.a.createElement("th",{key:t},r.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),r.a.createElement("div",{className:"orderby_arrow"},r.a.createElement(T.a,{onexpand:function(){}}))))})))),r.a.createElement("tbody",null,a&&a.map((function(e){return r.a.createElement("tr",{key:e.id,className:le(e.priority),onClick:function(){u.replace({pathname:"/TaskDetails",state:e})}},r.a.createElement("td",null,e.project_ref),r.a.createElement("td",{onClick:function(){q(!0),z(e.id)}},e.title),r.a.createElement("td",null,e.task_type),r.a.createElement("td",null,e.priority),r.a.createElement("td",null,e.domain),r.a.createElement("td",null,e.description),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."),r.a.createElement("td",null,"..."))})))))}))),r.a.createElement(N.a,null))},R=a(774),B=a(775),J=a(776),H=a(197),$=a(777),q=a(196),G=a(778),X=a(779),z=a(780),K=a(446),Q=a(781),V=a(292),W=a(119),Y=a(782),Z=a(783);function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,o=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==a.return||a.return()}finally{if(c)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return te(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var ae=[{path:"/Home",component:R.a},{path:"/Project",component:s.a},{path:"/TaskDetails/:id",component:d.a},{path:"/TaskList",component:p.a},{path:"/TaskTimeLog",component:Q.a},{path:"/TestingChecklist",component:h.a},{path:"/BugList",component:M},{path:"/UserManagement",component:f.a},{path:"/UserProfile",component:J.a},{path:"/UserSettings",component:H.a},{path:"/ChatProject",component:$.a},{path:"/NewUserForm",component:q.a},{path:"/TestSelectionForm",component:G.a},{path:"/ApiRecords",component:X.a},{path:"/Notifications",component:z.a},{path:"/report",component:K.a},{path:"/AppGantt",component:V.a},{path:"/Meeting",component:m.a},{path:"/ServerStatus",component:Z.a}],ne=[{path:"/",component:u.a},{path:"/MeetingRoom/:roomID",component:Y.a},{path:"/AnalyticsFullScreen",component:K.a}];t.a=Object(l.i)((function(){var e=ee(Object(n.useState)(!0),2),t=e[0],a=e[1];Object(n.useEffect)((function(){u(),navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&Object(W.b)(),i.a.pageview(window.location.pathname+window.location.search)}),[]),navigator.userAgent.toLowerCase().indexOf("safari/")>-1&&Object(W.c)().then((function(e){console.log("asdfasd===============>>>>>>>>>>>>",e),function e(t){if(!(!1 in window))if(console.log(Notification.permission),"default"===Notification.permission)Notification.requestPermission((function(){e(t)}));else if("granted"===Notification.permission){var a=new Notification("New message",t.notification);a.onclick=function(){this.close()},a.onclose=function(){console.log("Notification closed")}}else if("denied"===Notification.permission)return}(e)})).catch((function(e){return console.log("failed: ",e)}));var u=function(){try{return localStorage.setItem("test","test"),localStorage.removeItem("test"),console.log("PERMISSION : :",!0),a(!0),!0}catch(e){return console.log("PERMISSION : :",!1),a(!1),!1}};return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(o.b,null,r.a.createElement(l.c,null,ne.map((function(e){return r.a.createElement(l.a,{exact:!0,path:e.path},r.a.createElement(e.component,null))})),ae.map((function(e){var t=ee(Object(n.useState)(),2),a=t[0],o=t[1];return r.a.createElement(l.a,{exact:!0,path:e.path},r.a.createElement(B.a,{screen:r.a.createElement(e.component,{setheader_options:o}),screen_name:e.path,header_options:a}))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{localstorage_permission:"disable"})))}))}}]);