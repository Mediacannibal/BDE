(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{392:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".project_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: calc(0.3vw + 0.9vh + 0.3vmin) 0;\r\n    border-width: 0;\r\n    border-bottom-width: calc(0.01vw + 0.03vh + 0.01vmin);\r\n    border-color: var(--color_7);\r\n    border-style: solid;\r\n}\r\n\r\n.project_wrapper:last-of-type {\r\n    border-style: none !important;\r\n}\r\n\r\n.project_left_container {\r\n    display: flex\r\n}\r\n\r\n.project_image {\r\n    object-fit: contain;\r\n    width: calc(2vw + 6vh + 2vmin);\r\n    height: calc(2vw + 6vh + 2vmin);\r\n    vertical-align: middle;\r\n}\r\n\r\n.project_center_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0 calc(0.3vw + 0.9vh + 0.3vmin);\r\n}\r\n\r\n.project_title {\r\n    display: flex;\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS5);\r\n    text-decoration: underline;\r\n    text-underline-offset: calc(0.1vw + 0.3vh + 0.1vmin);\r\n    text-decoration-color: var(--color_7);\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    cursor: pointer;\r\n}\r\n\r\n.project_subtitle {\r\n    display: flex;\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS6);\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n}\r\n\r\n.project_description {\r\n    display: flex;\r\n    font-weight: 500;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    text-align: left;\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n}\r\n\r\n.project_right_container {\r\n    display: flex;\r\n    right: 0;\r\n    margin-left: auto;\r\n    flex-direction: column;\r\n    align-items: self-end;\r\n}\r\n\r\n.project_right_subcontainer {\r\n    display: flex;\r\n}\r\n\r\n.project_stats {\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    white-space: nowrap;\r\n    margin: 0 calc(0.2vw + 0.6vh + 0.2vmin);\r\n}\r\n\r\n.project_details {\r\n    display: flex;\r\n}\r\n\r\n.project_participants_container {\r\n    width: 100%;\r\n}\r\n\r\n.project_participants_subcontainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project_tables {\r\n    display: flex;\r\n    padding-top: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    justify-content: center;\r\n}\r\n\r\n.project_task_options {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.filter_icon_container {\r\n    height: var(--TS5);\r\n    padding-left: calc(0.1vw + 0.3vh + 0.3vmin);\r\n}\r\n\r\n.filter_icon {\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n.project_table_icons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.label {\r\n    display: flex;\r\n    font-weight: 500;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    white-space: nowrap;\r\n    margin: 0;\r\n}\r\n\r\n.visibility_toggle {\r\n    position: relative\r\n}\r\n\r\n.visibility_container {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    /* background-color: var(--color_5); */\r\n    border-radius: 4px;\r\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    margin: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    -webkit-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    -moz-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-sizing: border-box;\r\n    z-index: 999999;\r\n}\r\n\r\n.visibility_toggle:hover>.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:hover+.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:active>.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:active+.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.right0 {\r\n    right: 0;\r\n    text-align: right;\r\n    justify-content: flex-end;\r\n    text-align-last: right;\r\n}\r\n\r\n.left0 {\r\n    left: 0;\r\n    text-align: left;\r\n    justify-content: flex-start;\r\n    text-align-last: left;\r\n}\r\n\r\n.chart_button {\r\n    width: 10vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-self: flex-end;\r\n}",""]),t.a=r},433:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".user_notifications_table {\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: calc(1.05vw + 3.15vh + 1.05vmin);\r\n    background-color: var(--color_12);\r\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    border-radius: 4px;\r\n    width: 40vh;\r\n    min-width: 140px;\r\n    right: calc(-0.4vw - 1.2vh - 0.4vmin);\r\n}",""]),t.a=r},442:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".meetingscreen {\r\n    display: flex;\r\n    /* grid-template-columns: 500px 500px; */\r\n    gap: 20px;\r\n    align-items: center;\r\n    margin: 50px;\r\n    z-index: 1;\r\n}\r\n\r\n/* .self-video-strem {\r\n    position: absolute;\r\n    height: 20vh;\r\n    right: 2%;\r\n    bottom: 10%;\r\n    border-radius: 5px;\r\n    z-index: 1;\r\n} */\r\n\r\n.video-corner {\r\n    position: absolute;\r\n    height: 18vh;\r\n    right: 2%;\r\n    bottom: 10%;\r\n    border-radius: 5px;\r\n    z-index: 1;\r\n    box-shadow: 0 0 12px rgb(0 0 0 / 50%);\r\n}\r\n\r\n.video-full {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 5px;\r\n    width: 70vw;\r\n    position: absolute;\r\n    transform: translate(-50%, 50%);\r\n    box-shadow: 0 0 12px rgb(0 0 0 / 50%);\r\n}\r\n\r\n.back-black-off {\r\n    display: flex;\r\n    justify-content: center;\r\n    border-radius: 5px;\r\n    width: 70vw;\r\n    position: absolute;\r\n    transform: translate(-50%, 50%);\r\n}\r\n\r\n.microphone-img {\r\n    height: 4vh;\r\n    background-color: #dadada;\r\n    padding: 8px;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.microphone-img-off {\r\n    height: 4vh;\r\n    background-color: #ea4335;\r\n    padding: 8px;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.video-img {\r\n    height: 4vh;\r\n    background-color: #dadada;\r\n    padding: 8px;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.video-img-off {\r\n    height: 4vh;\r\n    background-color: #ea4335;\r\n    padding: 8px;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.end-call-img {\r\n    height: 4vh;\r\n    background-color: #ea4335;\r\n    padding: 8px 18px;\r\n    border-radius: 100px;\r\n    cursor: pointer;\r\n}\r\n\r\n.btn-section {\r\n    position: fixed;\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 100%;\r\n    gap: 10px;\r\n    background-color: #202020;\r\n    padding: 1vh;\r\n    bottom: 0;\r\n}\r\n\r\n.btn-wrap {}",""]),t.a=r},725:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1354),l=n(37),c=n(726),o=n(727),s=n(118),u=n(728),m=n(729),d=n(5),p=n(22);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=Object(l.f)(),n=Object(p.a)(),f=(n.Colour,n.colourObj),b=(n.setcolourObj,n.setColour,n.loadColour,v(Object(a.useState)(""),2)),_=b[0],g=b[1];return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"meet-heading-wrap"},r.a.createElement("img",{className:"video-heading-img",src:c,alt:"video icon",onClick:function(){}}),r.a.createElement("div",{className:"meet-heading-text",style:{color:f.color_4}},"MC"),r.a.createElement("div",{className:"meet-text"},"Meet")),r.a.createElement("div",{className:"meet-input-wrap"},r.a.createElement("button",{className:"new-meeting-button",onClick:function(){var e=Object(i.a)();t.replace("/MeetingRoom/".concat(e))}},r.a.createElement("img",{className:"add-video-img",src:o,alt:"video icon",onClick:function(){}}),"New meeting"),r.a.createElement("div",{className:"inputfield_sub_container link-border"},r.a.createElement("img",{className:"keyboard-img",src:u,alt:"video icon"}),r.a.createElement(d.a,{label:"Enter a code or link",id:"link_data",name:"data.link",inputtype:"Text",type:"text",min_length:"3",required:!0,value:_,onChange:g}))),r.a.createElement("div",{className:"meet-logo-container"},r.a.createElement("div",{className:"meet-logo-wrap"},r.a.createElement("img",{className:"mc-meet-logo",src:s}),r.a.createElement("img",{className:"link-img",src:m,alt:"video icon",onClick:function(){}})),r.a.createElement("div",{className:"meet-text-wrap"},r.a.createElement("div",{className:"get-link-head"},"Get a link that you can share"),r.a.createElement("p",{className:"new-meet-text"},"Click ",r.a.createElement("b",null,"New meeting")," to get a link that you can send",r.a.createElement("br",null),"to people that you want to meet with"))))}},773:function(e,t,n){"use strict";var a=n(46),r=n(295),i=n(0),l=n.n(i),c=n(10),o=n.n(c),s=n(392),u={insert:"head",singleton:!1},m=(o()(s.a,u),s.a.locals,n(20)),d=n(21),p=n(19),v=n(37),f=n(296),b=n(48),_=n(230),g=n(279),y=n(280),h=n(51),E=n(143),j=n(158),N=n(297),x=n(22),w=n(70),k=n(71),O=n(292),S=n(724),C=n(62),T=n(5),A=n(24),I=n(105),D=n(192),R=n(138);function P(e,t,n,a,r,i,l){try{var c=e[i](l),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(a,r)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=Object(m.a)().auth,n=Object(C.a)(),c=n.taskField,o=(n.edittask,n.loadTaskDetail),s=Object(x.a)(),u=s.Colour,F=s.colourObj,U=(s.setcolourObj,s.setColour,s.loadColour),M=Object(S.a)(),z=M.isGantt,B=M.loadGanttDetail,G=Object(I.a)(),L=G.company,H=(G.setcompany,G.loadcompany),J=Object(D.a)(),$=J.branch,W=(J.setbranch,J.loadbranch),K=Object(R.a)(),Y=K.projectField,Q=(K.setprojectField,K.loadProjectsDetail),V=K.editproject,X=Object(v.f)(),Z=q(Object(i.useState)(!0),2),ee=Z[0],te=Z[1],ne=q(Object(i.useState)([]),2),ae=(ne[0],ne[1]),re=q(Object(i.useState)(!1),2),ie=re[0],le=re[1],ce=q(Object(i.useState)(!1),2),oe=ce[0],se=ce[1],ue=q(Object(i.useState)(!1),2),me=ue[0],de=ue[1],pe=q(Object(i.useState)(""),2),ve=(pe[0],pe[1]),fe=q(Object(i.useState)(""),2),be=fe[0],_e=fe[1],ge=q(Object(i.useState)(""),2),ye=ge[0],he=ge[1],Ee=q(Object(i.useState)(!1),2),je=Ee[0],Ne=Ee[1],xe=q(Object(i.useState)([]),2),we=(xe[0],xe[1],q(Object(i.useState)(!1),2)),ke=(we[0],we[1],q(Object(i.useState)(!0),2)),Oe=ke[0],Se=ke[1],Ce=q(Object(i.useState)(""),2),Te=Ce[0],Ae=(Ce[1],q(Object(i.useState)({}),2)),Ie=(Ae[0],Ae[1]),De=q(Object(i.useState)(""),2),Re=De[0],Pe=De[1],qe=q(Object(i.useState)(!1),2),Fe=qe[0],Ue=qe[1],Me=q(Object(i.useState)(!1),2),ze=Me[0],Be=Me[1],Ge=q(Object(i.useState)({}),2),Le=Ge[0],He=Ge[1],Je=q(Object(i.useState)({}),2),$e=Je[0],We=Je[1],Ke=q(Object(i.useState)(""),2),Ye=Ke[0],Qe=Ke[1],Ve=q(Object(i.useState)(""),2),Xe=(Ve[0],Ve[1]),Ze=q(Object(i.useState)(""),2),et=(Ze[0],Ze[1]),tt=q(Object(i.useState)(""),2),nt=tt[0],at=tt[1],rt=q(Object(i.useState)(""),2),it=rt[0],lt=rt[1],ct=q(Object(i.useState)(""),2),ot=ct[0],st=ct[1],ut=q(Object(i.useState)(""),2),mt=ut[0],dt=ut[1],pt=q(Object(i.useState)(""),2),vt=pt[0],ft=pt[1],bt=q(Object(i.useState)(""),2),_t=bt[0],gt=bt[1],yt=q(Object(i.useState)(""),2),ht=yt[0],Et=yt[1],jt=q(Object(i.useState)(""),2),Nt=jt[0],xt=jt[1],wt=q(Object(i.useState)(""),2),kt=wt[0],Ot=wt[1];Object(i.useEffect)((function(){e.setheader_options(At),te(!0),u||U(),L||H(),z||B(),c||o(),$||Q(),Y||W(),Object(p.a)({path:"tasks/project/?user=".concat(Te),method:"get",auth:t||!1},function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status?(te(!1),ae(t.data.results)):(te(!1),console.log("error "+JSON.stringify(t)),console.log("error "+JSON.stringify(n)));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){P(i,a,r,l,c,"next",e)}function c(e){P(i,a,r,l,c,"throw",e)}l(void 0)}))});return function(e,n){return t.apply(this,arguments)}}())}),[]);var St=function(e){switch(e){case"Low":return"textcolor_yellow";case"Normal":return"textcolor_blue";case"High":return"textcolor_orange";case"Urgent":return"textcolor_red";case"Emergency":return"textcolor_red textcolor_blinking";default:return""}},Ct=function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",{key:e.id,className:St(e.priority),onClick:function(){ve(e.id),X.replace({pathname:"/TaskDetails/".concat(Object(k.a)("project",e.id)),state:e})}},l.a.createElement("td",null,e.domain),l.a.createElement("td",null,e.task_type),l.a.createElement("td",null,e.priority),l.a.createElement("td",null,e.status),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.assigned_to)))},Tt=function(e){return l.a.createElement("div",{className:"project_tables"},l.a.createElement("div",{className:"internal_table",style:{color:F.color_1}},l.a.createElement("div",{className:"project_table_icons"},l.a.createElement("div",{className:"project_subtitle",style:{color:F.color_1}},"Active Tasks:"),l.a.createElement("div",{className:"project_task_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){X.replace("/TaskList")}},l.a.createElement("img",{className:"header_icon",src:_}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:F.color_1}},"Task History"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){se(!0),_e(e.project_data.title)}},l.a.createElement("img",{className:"header_icon",src:h}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:F.color_1}},"Add Tasks"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){_e(e.project_data.title),he("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:y}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:F.color_1}}," Request Feature"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){_e(e.project_data.title),he("BUG")}},l.a.createElement("img",{className:"header_icon",src:g}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:F.color_1}},"Report Bug"))))),l.a.createElement("table",{id:"internal_table",style:{color:F.color_1}},l.a.createElement("thead",null,l.a.createElement("tr",null,["domain","Task Type","priority","status","title","assignee"].map((function(e,t){return l.a.createElement("th",{key:t},l.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),l.a.createElement("div",{className:"orderby_arrow"},l.a.createElement(w.a,{onexpand:function(){}}))))})))),l.a.createElement("tbody",null,e.project_data.ProjectTasks.map(Ct)))))},At=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"screen_header_element",onClick:function(){le(!0)}},l.a.createElement("img",{className:"header_icon",src:h}),l.a.createElement("div",null,"Add Project")))};return l.a.createElement("div",{className:"main"},ie&&l.a.createElement(r.a,{setPopup:function(){le(!1)}}),oe&&l.a.createElement(f.a,{setPopup:function(){se(!1)},projectName:be,projectTaskType:ye}),me&&l.a.createElement(N.a,{setPopup:function(){de(!1)}}),l.a.createElement("div",{className:"body",style:{backgroundColor:u.primary}},ee?l.a.createElement("div",{className:"spinner_fullscreen_div"},l.a.createElement(a.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"welcome-user-wrap"},l.a.createElement("div",{className:"welcome-name",style:{color:F.color_4}},"My Projects")),l.a.createElement(d.a,{classname:"fullwidth",card_title:"Branch: ",card_body:z&&z.map((function(e,t){return l.a.createElement("div",{className:"project_wrapper"},l.a.createElement("div",{className:"project_details"},l.a.createElement("div",{className:"project_left_container"},l.a.createElement("img",{className:"project_image",src:h})),l.a.createElement("div",{className:"project_center_container"},l.a.createElement("div",{className:"project_title",style:{color:F.color_1},onClick:function(){X.replace({pathname:"/TaskDetails/".concat(Object(k.a)("project",e.id)),state:e})}},e.title+": "+function(e){return!0===e.design?"Design":!0===e.development?"Development":!0===e.marketting?"Marketting":void 0}(e)),l.a.createElement("div",{className:"project_description",style:{color:F.color_1}},e.description)),l.a.createElement("div",{className:"project_right_container"},l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_stats visibility_toggle",style:{color:F.color_1}},"Status: ",function(e){return null===e.start_date&&null===e.end_date?"To Be Started":null===e.end_date?"In Progress":"Completed"}(e),l.a.createElement("div",{className:"visibility_container right0"},null!==e.start_date&&l.a.createElement("div",{className:"label right0",style:{color:F.color_1}},"Started: ",e.start_date),null!==e.end_date&&l.a.createElement("div",{className:"label right0",style:{color:F.color_1}},"Completed: ",e.end_date))),l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_participants_container"},l.a.createElement("div",{className:"project_participants_subcontainer"},l.a.createElement("div",{className:"project_stats",style:{color:F.color_1}},"Participants:"),l.a.createElement("div",{className:"project_user_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){de(!0),_e(e.title),he("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:E}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:F.color_1}},"Add User"))))),e.ProjectProfiles.map((function(e){return l.a.createElement("div",{key:e.id,className:"visibility_toggle"},l.a.createElement("div",{className:"project_stats left0",style:{color:F.color_1}},e.user_type+": "+e.firstname+" "+e.lastname),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("div",{className:"label",style:{color:F.color_1}},e.company_name+": "+e.branch_name)))})))))),l.a.createElement("div",{className:"table_edit_delete_main"},l.a.createElement("div",{className:"table_edit_delete"},l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{onClick:function(){console.log("element, indexelement, index,",e),function(e){Y&&Y.map((function(t){e.id===t.id&&(Ie(t),Pe(t.id),He({value:t.company_ref}),We({value:t.branch_ref}),Qe(t.design),Xe(t.development),et(t.marketting),at(t.title),lt(t.description),st(t.logo),dt(t.start_date),ft(t.end_date),gt(t.status),Et(t.progress),xt(t.frontend_url),Ot(t.backend_url))}))}(e),Ue(!0)},className:"table_icon",src:j}))))),je&&l.a.createElement(O.a,{project_data:e}),Oe&&l.a.createElement(Tt,{project_data:e}),l.a.createElement("button",{className:"chart_button",onClick:function(){Ne(!je),Se(!Oe)}},!0===Oe?"Chart":"Table"))}))})),Fe&&l.a.createElement(A.a,{title:ze?"Edit Game":"Add New Game",popup_body:l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"inputfield_main_container"},l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"COMPANY REF",id:"company_ref_data",required:!0,value:null==Le?void 0:Le.value,onChange:He,options:L&&L.map((function(e){return{key:e.id,value:e.company_title}}))})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"BRANCH REF",id:"branch_ref_data",required:!0,value:null==$e?void 0:$e.value,onChange:We,options:$&&$.map((function(e){return{key:e.id,value:e.branch_name}}))})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"DESIGN",id:"design_data",name:"data.design",inputtype:"Text",type:"checkbox",min_length:"3",required:!0,value:Ye,onChange:Qe,options:[{key:"1",value:"design"},{key:"2",value:"development"},{key:"3",value:"marketting"}]})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"TITLE",id:"title_data",name:"data.Title",inputtype:"Text",type:"text",min_length:"3",required:!0,value:nt,onChange:at})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"DESCRIPTION",id:"description_data",name:"data.description",inputtype:"Text",type:"text",min_length:"3",required:!0,value:it,onChange:lt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"LOGO",id:"logo_data",name:"data.logo",inputtype:"file",type:"file",min_length:"3",required:!0,value:ot,onchange:st})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"START DATE",id:"start_date_data",name:"data.start_date",inputtype:"Text",type:"text",min_length:"3",required:!0,value:mt,onChange:dt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"END DATE",id:"end_date_data",name:"data.end_date",inputtype:"Text",type:"text",min_length:"3",required:!0,value:vt,onChange:ft})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"STATUS",id:"status_data",name:"data.status",inputtype:"Text",type:"text",min_length:"3",required:!0,value:_t,onChange:gt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"PROGESS",id:"progress_data",name:"data.progress",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ht,onChange:Et})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"FRONTEND URL",id:"frontend_url_data",name:"data.frontend_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Nt,onChange:xt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"BACKEND URL",id:"backend_url_data",name:"data.backend_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:kt,onChange:Ot})))),confirmClick:function(){var e={company_ref:null==Le?void 0:Le.key,branch_ref:null==$e?void 0:$e.value,design:!0,title:String(document.getElementById("title_data").value),description:String(document.getElementById("description_data").value),logo:String(document.getElementById("logo_data").value)};V(Re,e),Be(!1),Ue(!1)},cancelClick:function(){Ue(!1),Be(!1)}})),l.a.createElement(b.a,null))}},783:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),l=n.n(i),c=n(433),o={insert:"head",singleton:!1},s=(l()(c.a,o),c.a.locals,n(33),n(37)),u=n(46),m=n(108),d=n(22),p=n(21);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){Object(s.f)();var t=Object(d.a)(),n=t.Colour,i=t.colourObj,l=(t.setcolourObj,t.setColour,t.loadColour),c=v(Object(a.useState)(!0),2),o=c[0],f=c[1];return Object(a.useEffect)((function(){f(!1),n||l()}),[]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"body",style:{backgroundColor:n.primary}},o?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(u.a,null)):r.a.createElement(p.a,{card_title:"Notifications",card_body:r.a.createElement("div",{className:"user_notifications_table",style:{backgroundColor:i.color_12}},r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))),r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("div",null,"***"),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"..."),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"!!!"),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))))})))}},785:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(758),l=n.n(i),c=n(441),o=n.n(c),s=n(759),u=n(760),m=n(761),d=n(762),p=n(763),v=n(10),f=n.n(v),b=n(442),_={insert:"head",singleton:!1},g=(f()(b.a,_),b.a.locals,n(37));function y(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var N=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),r.a.createElement("video",{className:"video-full",playsInline:!0,autoPlay:!0,ref:t,onChange:function(){setvideo_size(!0)}})},x={height:window.innerHeight/2,width:window.innerWidth/2};t.a=function(e){var t=h(Object(a.useState)([]),2),n=t[0],i=t[1],c=Object(a.useRef)(),v=Object(a.useRef)(),f=Object(a.useRef)([]),b=Object(g.h)().roomID,_=h(Object(a.useState)(!1),2),E=_[0],j=_[1],w=h(Object(a.useState)(!1),2),k=w[0],O=w[1],S=h(Object(a.useState)(!1),2);S[0],S[1];Object(a.useEffect)((function(){c.current=l.a.connect("https://apimeet.mediacannibal.co/",{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,"Access-Control-Allow-Origin":"*"}),navigator.mediaDevices.getUserMedia({video:x,audio:!0}).then((function(e){v.current.srcObject=e,c.current.emit("join room",b),c.current.on("all users",(function(t){var n=[];t.forEach((function(t){var a=T(t,c.current.id,e);f.current.push({peerID:t,peer:a}),n.push(a)})),i(n)})),c.current.on("user joined",(function(t){var n=A(t.signal,t.callerID,e);f.current.push({peerID:t.callerID,peer:n}),i((function(e){return[].concat(y(e),[n])}))})),c.current.on("receiving returned signal",(function(e){f.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)}))}))}),[]);var C=function(e){return v.current.srcObject.getTracks().forEach((function(t){return t.kind==e&&t.stop()}))},T=function(e,t,n){var a=new o.a({initiator:!0,trickle:!1,stream:n});return a.on("signal",(function(n){c.current.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),a},A=function(e,t,n){var a=new o.a({initiator:!1,trickle:!1,stream:n});return a.on("signal",(function(e){c.current.emit("returning signal",{signal:e,callerID:t})})),a.signal(e),a};return r.a.createElement("div",{className:"main-container back-color"},r.a.createElement("div",{className:"meetingscreen"},r.a.createElement("video",{className:"video-corner",muted:!0,ref:v,autoPlay:!0,playsInline:!0}),n.map((function(e,t){return console.log(e),r.a.createElement(N,{key:t,peer:e})}))),r.a.createElement("div",{className:"btn-section"},r.a.createElement("div",{className:"btn-wrap"},E?r.a.createElement("img",{className:"microphone-img-off",src:u,alt:"microphone icon",onClick:function(){var e;j(!1),e="audio",v.current.srcObject.getTracks().forEach((function(t){return t.kind===e&&t.start()}))}}):r.a.createElement("img",{className:"microphone-img",src:s,alt:"microphone icon",onClick:function(){j(!0),C("audio")}})),r.a.createElement("div",{className:"btn-wrap"},k?r.a.createElement("img",{className:"video-img-off",src:d,alt:"video icon",onClick:function(){O(!1),video.start()}}):r.a.createElement("img",{className:"video-img",src:m,alt:"video icon",onClick:function(){O(!0),C("video")}})),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("img",{className:"end-call-img",src:p,alt:"microphone icon",onClick:function(){}}))))}}}]);