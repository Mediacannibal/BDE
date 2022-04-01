(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{396:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".project_wrapper {\n    display: flex;\n    flex-direction: column;\n    padding: calc(0.3vw + 0.9vh + 0.3vmin) 0;\n    border-width: 0;\n    border-bottom-width: calc(0.01vw + 0.03vh + 0.01vmin);\n    border-color: var(--color_7);\n    border-style: solid;\n}\n\n.project_wrapper:last-of-type {\n    border-style: none !important;\n}\n\n.project_left_container {\n    display: flex\n}\n\n.project_image {\n    object-fit: contain;\n    width: calc(2vw + 6vh + 2vmin);\n    height: calc(2vw + 6vh + 2vmin);\n    vertical-align: middle;\n}\n\n.project_center_container {\n    display: flex;\n    flex-direction: column;\n    padding: 0 calc(0.3vw + 0.9vh + 0.3vmin);\n}\n\n.project_title {\n    display: flex;\n    font-weight: 600;\n    /* color: var(--color_1); */\n    font-size: var(--TS5);\n    text-decoration: underline;\n    text-underline-offset: calc(0.1vw + 0.3vh + 0.1vmin);\n    text-decoration-color: var(--color_7);\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\n    cursor: pointer;\n}\n\n.project_subtitle {\n    display: flex;\n    font-weight: 600;\n    /* color: var(--color_1); */\n    font-size: var(--TS6);\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\n}\n\n.project_description {\n    display: flex;\n    font-weight: 500;\n    /* color: var(--color_1); */\n    font-size: var(--TS8);\n    text-align: left;\n    padding-bottom: calc(0.15vw + 0.45vh + 0.15vmin);\n}\n\n.project_right_container {\n    display: flex;\n    right: 0;\n    margin-left: auto;\n    flex-direction: column;\n    align-items: self-end;\n}\n\n.project_right_subcontainer {\n    display: flex;\n}\n\n.project_stats {\n    font-weight: 600;\n    /* color: var(--color_1); */\n    font-size: var(--TS8);\n    white-space: nowrap;\n    margin: 0 calc(0.2vw + 0.6vh + 0.2vmin);\n}\n\n.project_details {\n    display: flex;\n}\n\n.project_participants_container {\n    width: 100%;\n}\n\n.project_participants_subcontainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.project_tables {\n    display: flex;\n    padding-top: calc(0.3vw + 0.9vh + 0.3vmin);\n    justify-content: center;\n}\n\n.project_task_options {\n    display: flex;\n    justify-content: space-between;\n}\n\n.filter_icon_container {\n    height: var(--TS5);\n    padding-left: calc(0.1vw + 0.3vh + 0.3vmin);\n}\n\n.filter_icon {\n    height: 100%;\n    object-fit: contain;\n}\n\n.project_table_icons {\n    display: flex;\n    justify-content: space-between;\n}\n\n.label {\n    display: flex;\n    font-weight: 500;\n    /* color: var(--color_1); */\n    font-size: var(--TS8);\n    white-space: nowrap;\n    margin: 0;\n}\n\n.visibility_toggle {\n    position: relative\n}\n\n.visibility_container {\n    position: absolute;\n    visibility: hidden;\n    opacity: 0;\n    /* background-color: var(--color_5); */\n    border-radius: 4px;\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\n    margin: calc(0.2vw + 0.6vh + 0.2vmin);\n    -webkit-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\n    -moz-box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\n    box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px;\n    box-sizing: border-box;\n    z-index: 999999;\n}\n\n.visibility_toggle:hover>.visibility_container {\n    visibility: visible;\n    opacity: 1;\n}\n\n.visibility_toggle:hover+.visibility_container {\n    visibility: visible;\n    opacity: 1;\n}\n\n.visibility_toggle:active>.visibility_container {\n    visibility: visible;\n    opacity: 1;\n}\n\n.visibility_toggle:active+.visibility_container {\n    visibility: visible;\n    opacity: 1;\n}\n\n.right0 {\n    right: 0;\n    text-align: right;\n    justify-content: flex-end;\n    text-align-last: right;\n}\n\n.left0 {\n    left: 0;\n    text-align: left;\n    justify-content: flex-start;\n    text-align-last: left;\n}\n\n.chart_button {\n    width: 10vw;\n    display: flex;\n    justify-content: center;\n    align-self: flex-end;\n}",""]),t.a=r},437:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".user_notifications_table {\n    display: flex;\n    flex-direction: column;\n    top: calc(1.05vw + 3.15vh + 1.05vmin);\n    background-color: var(--color_12);\n    padding: calc(0.15vw + 0.45vh + 0.15vmin);\n    border-radius: 4px;\n    width: 40vh;\n    min-width: 140px;\n    right: calc(-0.4vw - 1.2vh - 0.4vmin);\n}",""]),t.a=r},446:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".meetingscreen {\n    display: flex;\n    /* grid-template-columns: 500px 500px; */\n    gap: 20px;\n    align-items: center;\n    margin: 50px;\n}\n\n.self-video-strem {\n    position: absolute;\n    height: 20vh;\n    right: 2%;\n    bottom: 10%;\n    border-radius: 5px;\n    z-index: 1;\n}\n\n.videoplayer {\n    border-radius: 5px;\n    width: 70vw;\n}\n\n.main-container {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100vh;\n    align-items: center;\n    padding: 1vh 0;\n}\n\n.microphone-img {\n    height: 4vh;\n    background-color: #dadada;\n    padding: 8px;\n    border-radius: 100px;\n    cursor: pointer;\n}\n\n.microphone-img-off {\n    height: 4vh;\n    background-color: #ea4335;\n    padding: 8px;\n    border-radius: 100px;\n    cursor: pointer;\n}\n\n.end-call-img {\n    height: 4vh;\n    background-color: #ea4335;\n    padding: 8px 18px;\n    border-radius: 100px;\n    cursor: pointer;\n}\n\n.btn-section {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    gap: 10px;\n    background: var(--color_2);\n    padding: 1vh;\n    bottom: 0;\n}\n\n.btn-wrap {}",""]),t.a=r},733:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(1366),l=n(38);t.a=function(e){var t=Object(l.f)();return r.a.createElement("div",{className:"body"},r.a.createElement("button",{className:"new-meeting-button",onClick:function(){var e=Object(i.a)();t.replace("/MeetingRoom/".concat(e))}},"Create room"))}},777:function(e,t,n){"use strict";var a=n(46),r=n(297),i=n(0),l=n.n(i),c=n(10),o=n.n(c),s=n(396),u={insert:"head",singleton:!1},m=(o()(s.a,u),s.a.locals,n(20)),d=n(21),p=n(19),v=n(38),f=n(298),_=n(48),b=n(229),g=n(281),y=n(282),h=n(51),E=n(144),j=n(160),N=n(299),x=n(25),w=n(70),O=n(71),S=n(294),k=n(732),C=n(64),T=n(5),A=n(24),I=n(105),D=n(192),R=n(139);function P(e,t,n,a,r,i,l){try{var c=e[i](l),o=c.value}catch(e){return void n(e)}c.done?t(o):Promise.resolve(o).then(a,r)}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=Object(m.a)().auth,n=Object(C.a)(),c=n.taskField,o=(n.edittask,n.loadTaskDetail),s=Object(x.a)(),u=s.Colour,q=s.colourObj,U=(s.setcolourObj,s.setColour,s.loadColour),M=Object(k.a)(),z=M.isGantt,B=M.loadGanttDetail,G=Object(I.a)(),L=G.company,H=(G.setcompany,G.loadcompany),J=Object(D.a)(),W=J.branch,$=(J.setbranch,J.loadbranch),K=Object(R.a)(),Y=K.projectField,Q=(K.setprojectField,K.loadProjectsDetail),V=K.editproject,X=Object(v.f)(),Z=F(Object(i.useState)(!0),2),ee=Z[0],te=Z[1],ne=F(Object(i.useState)([]),2),ae=(ne[0],ne[1]),re=F(Object(i.useState)(!1),2),ie=re[0],le=re[1],ce=F(Object(i.useState)(!1),2),oe=ce[0],se=ce[1],ue=F(Object(i.useState)(!1),2),me=ue[0],de=ue[1],pe=F(Object(i.useState)(""),2),ve=(pe[0],pe[1]),fe=F(Object(i.useState)(""),2),_e=fe[0],be=fe[1],ge=F(Object(i.useState)(""),2),ye=ge[0],he=ge[1],Ee=F(Object(i.useState)(!1),2),je=Ee[0],Ne=Ee[1],xe=F(Object(i.useState)([]),2),we=(xe[0],xe[1],F(Object(i.useState)(!1),2)),Oe=(we[0],we[1],F(Object(i.useState)(!0),2)),Se=Oe[0],ke=Oe[1],Ce=F(Object(i.useState)(""),2),Te=Ce[0],Ae=(Ce[1],F(Object(i.useState)({}),2)),Ie=(Ae[0],Ae[1]),De=F(Object(i.useState)(""),2),Re=De[0],Pe=De[1],Fe=F(Object(i.useState)(!1),2),qe=Fe[0],Ue=Fe[1],Me=F(Object(i.useState)(!1),2),ze=Me[0],Be=Me[1],Ge=F(Object(i.useState)({}),2),Le=Ge[0],He=Ge[1],Je=F(Object(i.useState)({}),2),We=Je[0],$e=Je[1],Ke=F(Object(i.useState)(""),2),Ye=Ke[0],Qe=Ke[1],Ve=F(Object(i.useState)(""),2),Xe=(Ve[0],Ve[1]),Ze=F(Object(i.useState)(""),2),et=(Ze[0],Ze[1]),tt=F(Object(i.useState)(""),2),nt=tt[0],at=tt[1],rt=F(Object(i.useState)(""),2),it=rt[0],lt=rt[1],ct=F(Object(i.useState)(""),2),ot=ct[0],st=ct[1],ut=F(Object(i.useState)(""),2),mt=ut[0],dt=ut[1],pt=F(Object(i.useState)(""),2),vt=pt[0],ft=pt[1],_t=F(Object(i.useState)(""),2),bt=_t[0],gt=_t[1],yt=F(Object(i.useState)(""),2),ht=yt[0],Et=yt[1],jt=F(Object(i.useState)(""),2),Nt=jt[0],xt=jt[1],wt=F(Object(i.useState)(""),2),Ot=wt[0],St=wt[1];Object(i.useEffect)((function(){e.setheader_options(At),te(!0),u||U(),L||H(),z||B(),c||o(),W||Q(),Y||$(),Object(p.a)({path:"tasks/project/?user=".concat(Te),method:"get",auth:t||!1},function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:200===t.status?(te(!1),ae(t.data.results)):(te(!1),console.log("error "+JSON.stringify(t)),console.log("error "+JSON.stringify(n)));case 1:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function l(e){P(i,a,r,l,c,"next",e)}function c(e){P(i,a,r,l,c,"throw",e)}l(void 0)}))});return function(e,n){return t.apply(this,arguments)}}())}),[]);var kt=function(e){switch(e){case"Low":return"textcolor_yellow";case"Normal":return"textcolor_blue";case"High":return"textcolor_orange";case"Urgent":return"textcolor_red";case"Emergency":return"textcolor_red textcolor_blinking";default:return""}},Ct=function(e,t){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",{key:e.id,className:kt(e.priority),onClick:function(){ve(e.id),X.replace({pathname:"/TaskDetails/".concat(Object(O.a)("project",e.id)),state:e})}},l.a.createElement("td",null,e.domain),l.a.createElement("td",null,e.task_type),l.a.createElement("td",null,e.priority),l.a.createElement("td",null,e.status),l.a.createElement("td",null,e.title),l.a.createElement("td",null,e.assigned_to)))},Tt=function(e){return l.a.createElement("div",{className:"project_tables"},l.a.createElement("div",{className:"internal_table",style:{color:q.color_1}},l.a.createElement("div",{className:"project_table_icons"},l.a.createElement("div",{className:"project_subtitle",style:{color:q.color_1}},"Active Tasks:"),l.a.createElement("div",{className:"project_task_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){X.replace("/TaskList")}},l.a.createElement("img",{className:"header_icon",src:b}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:q.color_1}},"Task History"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){se(!0),be(e.project_data.title)}},l.a.createElement("img",{className:"header_icon",src:h}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:q.color_1}},"Add Tasks"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){be(e.project_data.title),he("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:y}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:q.color_1}}," Request Feature"))),l.a.createElement("div",{className:"visibility_toggle",onClick:function(){be(e.project_data.title),he("BUG")}},l.a.createElement("img",{className:"header_icon",src:g}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:q.color_1}},"Report Bug"))))),l.a.createElement("table",{id:"internal_table",style:{color:q.color_1}},l.a.createElement("thead",null,l.a.createElement("tr",null,["domain","Task Type","priority","status","title","assignee"].map((function(e,t){return l.a.createElement("th",{key:t},l.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),l.a.createElement("div",{className:"orderby_arrow"},l.a.createElement(w.a,{onexpand:function(){}}))))})))),l.a.createElement("tbody",null,e.project_data.ProjectTasks.map(Ct)))))},At=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"screen_header_element",onClick:function(){le(!0)}},l.a.createElement("img",{className:"header_icon",src:h}),l.a.createElement("div",null,"Add Project")))};return l.a.createElement("div",{className:"main"},ie&&l.a.createElement(r.a,{setPopup:function(){le(!1)}}),oe&&l.a.createElement(f.a,{setPopup:function(){se(!1)},projectName:_e,projectTaskType:ye}),me&&l.a.createElement(N.a,{setPopup:function(){de(!1)}}),l.a.createElement("div",{className:"body",style:{backgroundColor:u.primary}},ee?l.a.createElement("div",{className:"spinner_fullscreen_div"},l.a.createElement(a.a,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"welcome-user-wrap"},l.a.createElement("div",{className:"welcome-name",style:{color:q.color_4}},"My Projects")),l.a.createElement(d.a,{classname:"fullwidth",card_title:"Branch: ",card_body:z&&z.map((function(e,t){return l.a.createElement("div",{className:"project_wrapper"},l.a.createElement("div",{className:"project_details"},l.a.createElement("div",{className:"project_left_container"},l.a.createElement("img",{className:"project_image",src:h})),l.a.createElement("div",{className:"project_center_container"},l.a.createElement("div",{className:"project_title",style:{color:q.color_1},onClick:function(){X.replace({pathname:"/TaskDetails/".concat(Object(O.a)("project",e.id)),state:e})}},e.title+": "+function(e){return!0===e.design?"Design":!0===e.development?"Development":!0===e.marketting?"Marketting":void 0}(e)),l.a.createElement("div",{className:"project_description",style:{color:q.color_1}},e.description)),l.a.createElement("div",{className:"project_right_container"},l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_stats visibility_toggle",style:{color:q.color_1}},"Status: ",function(e){return null===e.start_date&&null===e.end_date?"To Be Started":null===e.end_date?"In Progress":"Completed"}(e),l.a.createElement("div",{className:"visibility_container right0"},null!==e.start_date&&l.a.createElement("div",{className:"label right0",style:{color:q.color_1}},"Started: ",e.start_date),null!==e.end_date&&l.a.createElement("div",{className:"label right0",style:{color:q.color_1}},"Completed: ",e.end_date))),l.a.createElement("div",{className:"project_right_subcontainer"},l.a.createElement("div",{className:"project_participants_container"},l.a.createElement("div",{className:"project_participants_subcontainer"},l.a.createElement("div",{className:"project_stats",style:{color:q.color_1}},"Participants:"),l.a.createElement("div",{className:"project_user_options"},l.a.createElement("div",{className:"visibility_toggle",onClick:function(){de(!0),be(e.title),he("FEATURE")}},l.a.createElement("img",{className:"header_icon",src:E}),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("p",{className:"label",style:{color:q.color_1}},"Add User"))))),e.ProjectProfiles.map((function(e){return l.a.createElement("div",{key:e.id,className:"visibility_toggle"},l.a.createElement("div",{className:"project_stats left0",style:{color:q.color_1}},e.user_type+": "+e.firstname+" "+e.lastname),l.a.createElement("div",{className:"visibility_container"},l.a.createElement("div",{className:"label",style:{color:q.color_1}},e.company_name+": "+e.branch_name)))})))))),l.a.createElement("div",{className:"table_edit_delete_main"},l.a.createElement("div",{className:"table_edit_delete"},l.a.createElement(l.a.Fragment,null,l.a.createElement("img",{onClick:function(){console.log("element, indexelement, index,",e),function(e){Y&&Y.map((function(t){e.id===t.id&&(Ie(t),Pe(t.id),He({value:t.company_ref}),$e({value:t.branch_ref}),Qe(t.design),Xe(t.development),et(t.marketting),at(t.title),lt(t.description),st(t.logo),dt(t.start_date),ft(t.end_date),gt(t.status),Et(t.progress),xt(t.frontend_url),St(t.backend_url))}))}(e),Ue(!0)},className:"table_icon",src:j}))))),je&&l.a.createElement(S.a,{project_data:e}),Se&&l.a.createElement(Tt,{project_data:e}),l.a.createElement("button",{className:"chart_button",onClick:function(){Ne(!je),ke(!Se)}},!0===Se?"Chart":"Table"))}))})),qe&&l.a.createElement(A.a,{title:ze?"Edit Game":"Add New Game",popup_body:l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"inputfield_main_container"},l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"COMPANY REF",id:"company_ref_data",required:!0,value:null==Le?void 0:Le.value,onChange:He,options:L&&L.map((function(e){return{key:e.id,value:e.company_title}}))})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{type:"picker",name:"BRANCH REF",id:"branch_ref_data",required:!0,value:null==We?void 0:We.value,onChange:$e,options:W&&W.map((function(e){return{key:e.id,value:e.branch_name}}))})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"DESIGN",id:"design_data",name:"data.design",inputtype:"Text",type:"checkbox",min_length:"3",required:!0,value:Ye,onChange:Qe,options:[{key:"1",value:"design"},{key:"2",value:"development"},{key:"3",value:"marketting"}]})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"TITLE",id:"title_data",name:"data.Title",inputtype:"Text",type:"text",min_length:"3",required:!0,value:nt,onChange:at})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"DESCRIPTION",id:"description_data",name:"data.description",inputtype:"Text",type:"text",min_length:"3",required:!0,value:it,onChange:lt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"LOGO",id:"logo_data",name:"data.logo",inputtype:"file",type:"file",min_length:"3",required:!0,value:ot,onchange:st})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"START DATE",id:"start_date_data",name:"data.start_date",inputtype:"Text",type:"text",min_length:"3",required:!0,value:mt,onChange:dt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"END DATE",id:"end_date_data",name:"data.end_date",inputtype:"Text",type:"text",min_length:"3",required:!0,value:vt,onChange:ft})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"STATUS",id:"status_data",name:"data.status",inputtype:"Text",type:"text",min_length:"3",required:!0,value:bt,onChange:gt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"PROGESS",id:"progress_data",name:"data.progress",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ht,onChange:Et})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"FRONTEND URL",id:"frontend_url_data",name:"data.frontend_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Nt,onChange:xt})),l.a.createElement("div",{className:"inputfield_sub_container"},l.a.createElement(T.a,{label:"BACKEND URL",id:"backend_url_data",name:"data.backend_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Ot,onChange:St})))),confirmClick:function(){var e={company_ref:null==Le?void 0:Le.key,branch_ref:null==We?void 0:We.value,design:!0,title:String(document.getElementById("title_data").value),description:String(document.getElementById("description_data").value),logo:String(document.getElementById("logo_data").value)};V(Re,e),Be(!1),Ue(!1)},cancelClick:function(){Ue(!1),Be(!1)}})),l.a.createElement(_.a,null))}},787:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(10),l=n.n(i),c=n(437),o={insert:"head",singleton:!1},s=(l()(c.a,o),c.a.locals,n(34),n(38)),u=n(46),m=n(108),d=n(25),p=n(21);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){Object(s.f)();var t=Object(d.a)(),n=t.Colour,i=t.colourObj,l=(t.setcolourObj,t.setColour,t.loadColour),c=v(Object(a.useState)(!0),2),o=c[0],f=c[1];return Object(a.useEffect)((function(){f(!1),n||l()}),[]),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"body",style:{backgroundColor:n.primary}},o?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(u.a,null)):r.a.createElement(p.a,{card_title:"Notifications",card_body:r.a.createElement("div",{className:"user_notifications_table",style:{backgroundColor:i.color_12}},r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("img",{className:"header_icon",src:m}),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))),r.a.createElement("div",{className:"user_notification_title_container"},r.a.createElement("div",{className:"user_notification_title_subcontainer1"},r.a.createElement("div",null,"***"),r.a.createElement("div",{className:"user_notification_title"},"Media Cannibal")),r.a.createElement("div",{className:"user_notification_title_subcontainer2"},r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"..."),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"Call Them"),r.a.createElement("div",null,"miss call")),r.a.createElement("div",null,"2 hours ago")),r.a.createElement("div",{className:"user_band"}),r.a.createElement("div",{className:"user_notification_notify"},r.a.createElement("div",null,"!!!"),r.a.createElement("div",null,r.a.createElement("div",{className:"user_notification_title_text"},"What's up"),r.a.createElement("div",null,"hello")),r.a.createElement("div",null,"6 hours ago")))))})))}},789:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(762),l=n.n(i),c=n(445),o=n.n(c),s=n(763),u=n(764),m=n(765),d=n(766),p=n(767),v=n(10),f=n.n(v),_=n(446),b={insert:"head",singleton:!1},g=(f()(_.a,b),_.a.locals,n(38));function y(e){return function(e){if(Array.isArray(e))return j(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(a=n.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var N=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){e.peer.on("stream",(function(e){t.current.srcObject=e}))}),[]),r.a.createElement("video",{className:"videoplayer",playsInline:!0,autoPlay:!0,ref:t})},x={height:window.innerHeight/2,width:window.innerWidth/2};t.a=function(e){var t=h(Object(a.useState)([]),2),n=t[0],i=t[1],c=Object(a.useRef)(),v=Object(a.useRef)(),f=Object(a.useRef)([]),_=Object(g.h)().roomID,b=h(Object(a.useState)(!1),2),E=b[0],j=b[1],w=h(Object(a.useState)(!1),2),O=w[0],S=w[1];Object(a.useEffect)((function(){c.current=l.a.connect("https://apimeet.mediacannibal.co/",{"force new connection":!0,reconnectionAttempts:"Infinity",timeout:1e4,"Access-Control-Allow-Origin":"*"}),navigator.mediaDevices.getUserMedia({video:x,audio:!0}).then((function(e){v.current.srcObject=e,c.current.emit("join room",_),c.current.on("all users",(function(t){var n=[];t.forEach((function(t){var a=k(t,c.current.id,e);f.current.push({peerID:t,peer:a}),n.push(a)})),i(n)})),c.current.on("user joined",(function(t){var n=C(t.signal,t.callerID,e);f.current.push({peerID:t.callerID,peer:n}),i((function(e){return[].concat(y(e),[n])}))})),c.current.on("receiving returned signal",(function(e){f.current.find((function(t){return t.peerID===e.id})).peer.signal(e.signal)}))}))}),[]);var k=function(e,t,n){var a=new o.a({initiator:!0,trickle:!1,stream:n});return a.on("signal",(function(n){c.current.emit("sending signal",{userToSignal:e,callerID:t,signal:n})})),a},C=function(e,t,n){var a=new o.a({initiator:!1,trickle:!1,stream:n});return a.on("signal",(function(e){c.current.emit("returning signal",{signal:e,callerID:t})})),a.signal(e),a};return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"meetingscreen"},r.a.createElement("video",{className:"self-video-strem",muted:!0,ref:v,autoPlay:!0,playsInline:!0}),n.map((function(e,t){return console.log(e),r.a.createElement(N,{className:"video-strem",key:t,peer:e})}))),r.a.createElement("div",{className:"btn-section"},r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("img",{className:E?"microphone-img-off":"microphone-img",src:E?u:s,alt:"microphone icon",onClick:function(){j(!E)}})),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("img",{className:O?"microphone-img-off":"microphone-img",src:O?d:m,alt:"microphone icon",onClick:function(){S(!O)}})),r.a.createElement("div",{className:"btn-wrap"},r.a.createElement("img",{className:"end-call-img",src:p,alt:"microphone icon",onClick:function(){}}))))}}}]);