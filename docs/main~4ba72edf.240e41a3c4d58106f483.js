(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{390:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".project_wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: calc(0.3vw + 0.9vh + 0.3vmin) 0;\r\n    border-width: 0;\r\n    border-bottom-width: calc(0.01vw + 0.03vh + 0.01vmin);\r\n    border-color: var(--color_7);\r\n    border-style: solid;\r\n}\r\n\r\n.project_wrapper:last-of-type {\r\n    border-style: none !important;\r\n}\r\n\r\n.project_left_container {\r\n    display: flex\r\n}\r\n\r\n.project_image {\r\n    object-fit: contain;\r\n    width: calc(2vw + 6vh + 2vmin);\r\n    height: calc(2vw + 6vh + 2vmin);\r\n    vertical-align: middle;\r\n}\r\n\r\n.project_center_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0 calc(0.3vw + 0.9vh + 0.3vmin);\r\n}\r\n\r\n.project_title {\r\n    display: flex;\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS5);\r\n    text-decoration: underline;\r\n    text-underline-offset: calc(0.1vw + 0.3vh + 0.1vmin);\r\n    text-decoration-color: var(--color_7);\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    cursor: pointer;\r\n}\r\n\r\n.project_subtitle {\r\n    display: flex;\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS6);\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n}\r\n\r\n.project_description {\r\n    display: flex;\r\n    font-weight: 500;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    text-align: left;\r\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\r\n}\r\n\r\n.project_right_container {\r\n    display: flex;\r\n    right: 0;\r\n    margin-left: auto;\r\n    flex-direction: column;\r\n}\r\n\r\n.project_right_subcontainer {\r\n    display: flex;\r\n}\r\n\r\n.project_stats {\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    white-space: nowrap;\r\n    margin: 0 calc(0.2vw + 0.6vh + 0.2vmin);\r\n}\r\n\r\n.project_details {\r\n    display: flex;\r\n}\r\n\r\n.project_participants_container {\r\n    width: 100%;\r\n}\r\n\r\n.project_participants_subcontainer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project_tables {\r\n    display: flex;\r\n    padding-top: calc(0.3vw + 0.9vh + 0.3vmin);\r\n    justify-content: center;\r\n}\r\n\r\n.project_task_options {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.filter_icon_container {\r\n    height: var(--TS5);\r\n    padding-left: calc(0.1vw + 0.3vh + 0.3vmin);\r\n}\r\n\r\n.filter_icon {\r\n    height: 100%;\r\n    object-fit: contain;\r\n}\r\n\r\n.project_table_icons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.label {\r\n    display: flex;\r\n    font-weight: 500;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS8);\r\n    white-space: nowrap;\r\n    margin: 0;\r\n}\r\n\r\n.visibility_toggle {\r\n    position: relative\r\n}\r\n\r\n.visibility_container {\r\n    position: absolute;\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    /* background-color: var(--color_5); */\r\n    border-radius: 4px;\r\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    margin: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    -webkit-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    -moz-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\r\n    box-sizing: border-box;\r\n    z-index: 999999;\r\n}\r\n\r\n.visibility_toggle:hover>.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:hover+.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:active>.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.visibility_toggle:active+.visibility_container {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.right0 {\r\n    right: 0;\r\n    text-align: right;\r\n    justify-content: flex-end;\r\n    text-align-last: right;\r\n}\r\n\r\n.left0 {\r\n    left: 0;\r\n    text-align: left;\r\n    justify-content: flex-start;\r\n    text-align-last: left;\r\n}\r\n\r\n.chart_button {\r\n    width: 10vw;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-self: flex-end;\r\n}",""]),t.a=r},431:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".user_notifications_table {\r\n    display: flex;\r\n    flex-direction: column;\r\n    top: calc(1.05vw + 3.15vh + 1.05vmin);\r\n    background-color: var(--color_12);\r\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\r\n    border-radius: 4px;\r\n    width: 40vh;\r\n    min-width: 140px;\r\n    right: calc(-0.4vw - 1.2vh - 0.4vmin);\r\n}",""]),t.a=r},440:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i," ",""]),t.a=r},723:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1343),l=n(37);t.a=function(e){var t=Object(l.f)();return r.a.createElement("button",{onClick:function(){var e=Object(i.a)();t.replace("/MeetingRoom/".concat(e))}},"Create room")}},763:function(e,t,n){"use strict";var a=n(46),r=n(292),i=n(0),l=n.n(i),c=n(10),o=n.n(c),s=n(390),u={insert:"head",singleton:!1},m=(o()(s.a,u),s.a.locals,n(20)),d=n(21),v=n(17),p=n(37),_=n(293),f=n(50),b=n(226),y=n(275),g=n(276),E=n(53),h=n(142),j=n(105),N=n(294),k=n(23),w=n(68),S=n(69),O=n(288),x=n(722),C=n(92),T=n(8),I=n(24),A=n(138);function R(e,t,n,a,r,i,l){try{var c=e[i](l),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(a,r)}function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=Object(m.a)().auth,n=Object(C.a)(),c=n.taskField,o=n.edittask,s=n.loadTaskDetail,u=Object(k.a)(),P=u.Colour,U=u.colourObj,B=(u.setcolourObj,u.setColour,u.loadColour),M=Object(x.a)(),q=M.isGantt,F=M.loadGanttDetail,z=Object(A.a)(),G=z.company,J=(z.setcompany,z.loadcompany),H=Object(p.f)(),L=D(Object(i.useState)(!0),2),W=L[0],$=L[1],K=D(Object(i.useState)([]),2),Y=(K[0],K[1]),V=D(Object(i.useState)(!1),2),Q=V[0],X=V[1],Z=D(Object(i.useState)(!1),2),ee=Z[0],te=Z[1],ne=D(Object(i.useState)(!1),2),ae=ne[0],re=ne[1],ie=D(Object(i.useState)(""),2),le=(ie[0],ie[1]),ce=D(Object(i.useState)(""),2),oe=ce[0],se=ce[1],ue=D(Object(i.useState)(""),2),me=ue[0],de=ue[1],ve=D(Object(i.useState)(!1),2),pe=ve[0],_e=ve[1],fe=D(Object(i.useState)([]),2),be=(fe[0],fe[1],D(Object(i.useState)(!1),2)),ye=be[0],ge=(be[1],D(Object(i.useState)(!0),2)),Ee=ge[0],he=ge[1],je=D(Object(i.useState)(""),2),Ne=je[0],ke=(je[1],D(Object(i.useState)({}),2)),we=ke[0],Se=ke[1],Oe=D(Object(i.useState)(""),2),xe=Oe[0],Ce=Oe[1],Te=D(Object(i.useState)([{project_ref:"",priority:"",task_type:"",status:"",domain:"",title:"",description:"",remarks:"",image_link:"",linked_logs:"",time_spent:"",parent_child:"",open_id:"",open_type:"",dependencies:"",milestone:"",progress:"",start_date:"",end_date:""}]),2),Ie=Te[0],Ae=Te[1],Re=D(Object(i.useState)(!1),2),De=Re[0],Pe=Re[1],Ue=D(Object(i.useState)(!1),2),Be=Ue[0],Me=Ue[1],qe=D(Object(i.useState)({}),2),Fe=qe[0],ze=qe[1],Ge=D(Object(i.useState)({}),2),Je=Ge[0],He=Ge[1],Le=D(Object(i.useState)({}),2),We=Le[0],$e=Le[1],Ke=D(Object(i.useState)({}),2),Ye=Ke[0],Ve=Ke[1],Qe=D(Object(i.useState)(""),2),Xe=Qe[0],Ze=Qe[1],et=D(Object(i.useState)(""),2),tt=et[0],nt=et[1],at=D(Object(i.useState)(""),2),rt=(at[0],at[1],D(Object(i.useState)(""),2)),it=rt[0],lt=rt[1],ct=D(Object(i.useState)(""),2),ot=ct[0],st=ct[1],ut=D(Object(i.useState)(""),2),mt=(ut[0],ut[1],D(Object(i.useState)(""),2)),dt=(mt[0],mt[1],D(Object(i.useState)(""),2)),vt=(dt[0],dt[1],D(Object(i.useState)(""),2)),pt=(vt[0],vt[1],D(Object(i.useState)(""),2)),_t=(pt[0],pt[1],D(Object(i.useState)(""),2)),ft=(_t[0],_t[1],D(Object(i.useState)(!1),2)),bt=(ft[0],ft[1],D(Object(i.useState)(""),2)),yt=(bt[0],bt[1],D(Object(i.useState)(""),2)),gt=(yt[0],yt[1],D(Object(i.useState)(""),2));gt[0],gt[1];Object(i.useEffect)((function(){e.setheader_options(Nt),$(!0),P||B(),G||J(),q||F(),c||s(),Object(v.a)({path:"tasks/project/?user=".concat(Ne),method:"get",auth:t||!1},function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status?($(!1),Y(t.data.results)):($(!1),console.log("error "+JSON.stringify(t)),console.log("error "+JSON.stringify(n)));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){R(i,a,r,l,c,"next",e)}function c(e){R(i,a,r,l,c,"throw",e)}l(void 0)}))});return function(e,n){return t.apply(this,arguments)}}())}),[]);var Et=function(e){switch(e){case"Low":return"textcolor_yellow";case"Normal":return"textcolor_blue";case"High":return"textcolor_orange";case"Urgent":return"textcolor_red";case"Emergency":return"textcolor_red textcolor_blinking";default:return""}},ht=function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",{key:e.id,className:Et(e.priority),onClick:function(){le(e.id),H.replace({pathname:"/TaskDetails/".concat(Object(S.a)("project",e.id)),state:e})}},l.a.createElement("td",null,e.domain),l.a.createElement("td",null,e.task_type),l.a.createElement("td",null,e.priority),l.a.createElement("td",null,e.status),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.assigned_to)),l.a.createElement("div",{className:"table_edit_delete_main"},l.a.createElement("div",{className:"table_edit_delete"},ye?null:l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{onClick:function(){!function(e,t){c&&c.map((function(t,n){e.id===t.id&&(Se(t),Ce(t.id),ze({value:t.project_ref}),He({value:t.priority}),$e({value:t.task_type}),Ve({value:t.domain}),Ze(t.title),nt(t.description),lt(t.remarks),st(t.image_link))}))}(e),Pe(!0)},className:"table_icon",src:j})))))},jt=function(e){return l.a.createElement("div",{className:"project_tables"},l.a.createElement("div",{className:"internal_table",style:{color:U.color_1}},l.a.createElement("div",{className:"project_table_icons"},l.a.createElement("div",{className:"project_subtitle",style:{color:U.color_1}},"Active Tasks:"),l.a.createElement("div",{className:"project_task_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){H.replace("/TaskList")}},l.a.createElement("img",{className:"header_icon",src:b}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:U.color_1}},"Task History"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){te(!0),se(e.project_data.title)}},l.a.createElement("img",{className:"header_icon",src:E}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:U.color_1}},"Add Tasks"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){se(e.project_data.title),de("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:g}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:U.color_1}}," Request Feature"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){se(e.project_data.title),de("BUG")}},l.a.createElement("img",{className:"header_icon",src:y}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:U.color_1}},"Report Bug"))))),l.a.createElement("table",{id:"internal_table",style:{color:U.color_1}},l.a.createElement("thead",null,l.a.createElement("tr",null,["domain","Task Type","priority","status","title","assignee"].map((function(e,t){return l.a.createElement("th",{key:t},l.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),l.a.createElement("div",{className:"orderby_arrow"},l.a.createElement(w.a,{onexpand:function(){}}))))})))),l.a.createElement("tbody",null,e.project_data.ProjectTasks.map(ht)))))},Nt=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"screen_header_element",onClick:function(){X(!0)}},l.a.createElement("img",{className:"header_icon",src:E}),l.a.createElement("div",null,"Add Project")))};return l.a.createElement("div",{className:"main"},Q&&l.a.createElement(r.a,{setPopup:function(){X(!1)}}),ee&&l.a.createElement(_.a,{setPopup:function(){te(!1)},projectName:oe,projectTaskType:me}),ae&&l.a.createElement(N.a,{setPopup:function(){re(!1)}}),l.a.createElement("div",{className:"body",style:{backgroundColor:P.primary}},W?l.a.createElement("div",{className:"spinner_fullscreen_div"},l.a.createElement(a.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{classname:"fullwidth",card_title:"Branch: ",card_body:q&&q.map((function(e,t){return l.a.createElement("div",{className:"project_wrapper"},l.a.createElement("div",{className:"project_details"},l.a.createElement("div",{className:"project_left_container"},l.a.createElement("img",{className:"project_image",src:E})),l.a.createElement("div",{className:"project_center_container"},l.a.createElement("div",{className:"project_title",style:{color:U.color_1},onClick:function(){H.replace({pathname:"/TaskDetails/".concat(Object(S.a)("project",e.id)),state:e})}},e.title+": "+function(e){return!0===e.design?"Design":!0===e.development?"Development":!0===e.marketting?"Marketting":void 0}(e)),l.a.createElement("div",{className:"project_description",style:{color:U.color_1}},e.description)),l.a.createElement("div",{className:"project_right_container"},l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_stats visibility_toggle",style:{color:U.color_1}},"Status: ",function(e){return null===e.start_date&&null===e.end_date?"To Be Started":null===e.end_date?"In Progress":"Completed"}(e),l.a.createElement("div",{className:"visibility_container right0"},null!==e.start_date&&l.a.createElement("div",{className:"label right0",style:{color:U.color_1}},"Started: ",e.start_date),null!==e.end_date&&l.a.createElement("div",{className:"label right0",style:{color:U.color_1}},"Completed: ",e.end_date))),l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_participants_container"},l.a.createElement("div",{className:"project_participants_subcontainer"},l.a.createElement("div",{className:"project_stats",style:{color:U.color_1}},"Participants:"),l.a.createElement("div",{className:"project_user_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){re(!0),se(e.title),de("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:h}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:U.color_1}},"Add User"))))),e.ProjectProfiles.map((function(e){return l.a.createElement("div",{key:e.id,className:"visibility_toggle"},l.a.createElement("div",{className:"project_stats left0",style:{color:U.color_1}},e.user_type+": "+e.firstname+" "+e.lastname),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("div",{className:"label",style:{color:U.color_1}},e.company_name+": "+e.branch_name)))}))))))),pe&&l.a.createElement(O.a,{project_data:e}),Ee&&l.a.createElement(jt,{project_data:e}),l.a.createElement("button",{className:"chart_button",onClick:function(){_e(!pe),he(!Ee)}},!0===Ee?"Chart":"Table"))}))}))),l.a.createElement(f.a,null),De&&l.a.createElement(I.a,{title:Be?"Edit Game":"Add New Game",popup_body:l.a.createElement("form",{className:"inputfield_main_container"},l.a.createElement("div",{className:"addedit_task_div_wrapper"},l.a.createElement("div",{className:"inputbox_divider"},l.a.createElement("div",{className:"side-by-input"},l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"PROJECT",id:"project_ref_data",required:!0,value:null==Fe?void 0:Fe.value,onChange:ze,options:G&&G.map((function(e){return{key:e.id,value:e.company_title}}))})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"PRIORITY",id:"priority_data",required:!0,value:null==Je?void 0:Je.value,onChange:He,options:[{key:"0",value:"Low"},{key:"1",value:"Normal"},{key:"2",value:"High"},{key:"3",value:"Urgent"},{key:"4",value:"Emergency"}]})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"TASK TYPE",id:"task_type_data",required:!0,value:null==We?void 0:We.value,onChange:$e,options:[{key:"1",value:"FEATURE"},{key:"2",value:"TEST"},{key:"3",value:"BUG"},{key:"4",value:"UPDATE"}]})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"DOMAIN",id:"domain_data",required:!0,value:null==Ye?void 0:Ye.value,onChange:Ve,options:[{key:"0",value:"frontend"},{key:"1",value:"backend"},{key:"0",value:"UI"},{key:"0",value:"dev ops"}]})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"TITLE",id:"title_data",name:"data.title",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Xe,onChange:Ze})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"DESCRIPTION",id:"description_data",name:"data.description",inputtype:"Text",type:"textarea",min_length:"3",required:!0,value:tt,onChange:nt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"REMARKS",id:"remarks_data",name:"data.remarks",inputtype:"Text",type:"text",min_length:"3",required:!0,value:it,onChange:lt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"IMAGE",id:"image_link_data",name:"data.image_link",inputtype:"file",type:"file",min_length:"3",required:!0,value:ot,onChange:st})))))),confirmClick:function(){Ae(Ie.map((function(e){console.log("object===",e.id,we.id);var t;return e.id==we.id?((t=e).project_ref=null==Fe?void 0:Fe.key,t.priority=null==Je?void 0:Je.value,t.task_type=null==We?void 0:We.value,t.domain=null==Ye?void 0:Ye.value,t.title=String(document.getElementById("title_data").value),t.description=String(document.getElementById("description_data").value),t.remarks=String(document.getElementById("remarks_data").value),t.image_link=String(document.getElementById("image_link_data").value),t):e})));var e={project_ref:null==Fe?void 0:Fe.key,priority:null==Je?void 0:Je.value,task_type:null==We?void 0:We.value,domain:null==Ye?void 0:Ye.value,title:String(document.getElementById("title_data").value),description:String(document.getElementById("description_data").value),remarks:String(document.getElementById("remarks_data").value),image_link:String(document.getElementById("image_link_data").value)};o(xe,e),Me(!1),Pe(!1)},cancelClick:function(){Pe(!1),Me(!1)}}))}},773:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),l=n.n(i),c=n(431),o={insert:"head",singleton:!1},s=(l()(c.a,o),c.a.locals,n(34),n(37)),u=n(46),m=n(108),d=n(23),v=n(21);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){Object(s.f)();var t=Object(d.a)(),n=t.Colour,i=t.colourObj,l=(t.setcolourObj,t.setColour,t.loadColour),c=p(Object(a.useState)(!0),2),o=c[0],_=c[1];return Object(a.useEffect)((function(){_(!1),n||l()}),[]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"body",style:{backgroundColor:n.primary}},o?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(u.a,null)):r.a.createElement(v.a,{card_title:"Notifications",card_body:r.a.createElement("div",{className:"user_notifications_table",style:{backgroundColor:i.color_12}},r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))),r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("div",null,"***"),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"..."),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"!!!"),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))))})))}},775:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(753),l=n.n(i),c=n(439),o=n.n(c),s=n(47),u=n(10),m=n.n(u),d=n(440),v={insert:"head",singleton:!1},p=(m()(d.a,v),d.a.locals,n(37));function _(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g=s.default.div.withConfig({displayName:"MeetingRoom__Container",componentId:"h7i1s9-0"})(["padding:20px;display:flex;height:100vh;width:90%;margin:auto;flex-wrap:wrap;"]),E=s.default.video.withConfig({displayName:"MeetingRoom__StyledVideo",componentId:"h7i1s9-1"})(["height:40%;width:50%;"]),h=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),r.a.createElement(E,{playsInline:!0,autoPlay:!0,ref:t})},j={height:window.innerHeight/2,width:window.innerWidth/2};t.a=function(e){var t=f(Object(a.useState)([]),2),n=t[0],i=t[1],c=Object(a.useRef)(),s=Object(a.useRef)(),u=Object(a.useRef)([]),m=Object(p.h)().roomID;return Object(a.useEffect)((function(){c.current=l.a.connect("https://apimeet.mediacannibal.com"),navigator.mediaDevices.getUserMedia({video:j,audio:!0}).then((function(e){s.current.srcObject=e,c.current.emit("join_room",m),c.current.on("all_users",(function(t){var n=[];t.forEach((function(t){var a=function(e,t,n){var a=new o.a({initiator:!0,trickle:!1,stream:n});return a.on("signal",(function(n){c.current.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),a}(t,c.current.id,e);u.current.push({peerID:t,peer:a}),n.push(a)})),i(n)})),c.current.on("user_joined",(function(t){var n=function(e,t,n){var a=new o.a({initiator:!1,trickle:!1,stream:n});return a.on("signal",(function(e){c.current.emit("returning signal",{signal:e,callerID:t})})),a.signal(e),a}(t.signal,t.callerID,e);u.current.push({peerID:t.callerID,peer:n}),i((function(e){return[].concat(_(e),[n])}))})),c.current.on("receiving_returned_signal",(function(e){u.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)}))}))}),[]),r.a.createElement(g,null,r.a.createElement(E,{muted:!0,ref:s,autoPlay:!0,playsInline:!0}),n.map((function(e,t){return r.a.createElement(h,{key:t,peer:e})})))}}}]);