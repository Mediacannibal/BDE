(this.webpackJsonp=this.webpackJsonp||[]).push([[20],{197:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(423),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,n(34),n(38)),s=n(24),d=n(21),m=n(25),_=n(772);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=e.setPopup,n=(Object(u.f)(),p(Object(a.useState)("#ff0000"),2)),l=n[0],o=(n[1],p(Object(a.useState)("NORMAL"),2)),c=(o[0],o[1]),i=p(Object(a.useState)(""),2),v=(i[0],i[1]),b=p(Object(a.useState)(""),2),y=(b[0],b[1]),g=Object(m.a)(),f=g.Colour,E=g.colourObj,h=g.setcolourObj,x=g.setColour,N=g.loadColour,S=p(Object(a.useState)(!1),2),O=S[0];S[1];return Object(a.useEffect)((function(){console.log("screenlocation: ",location.pathname);var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var t=e.user_type,n=e.firstname,a=e.photo_url;c(t),v(n),y(a)}f||N()}),[]),r.a.createElement(r.a.Fragment,null,!O&&r.a.createElement(s.a,{title:"Settings",desc1:"Choose the theme color",popup_body:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{card_title:"Colors",card_body:r.a.createElement("div",{className:"color_container",style:{}},r.a.createElement("div",{className:"color_sub_container"},f&&f.map((function(e){return e.selected?r.a.createElement("div",{className:"color_box",style:{backgroundColor:e.colour},onClick:function(){var t=f;t=t.map((function(t){var n;return e.id===t.id?((n=t).selected=!n.selected,n):function(){var e=t;return e.selected=!0,e}()})),x(t)}}):r.a.createElement("div",{className:"color_box_selected",style:{backgroundColor:e.colour},onClick:function(){var t=f;t=t&&t.map((function(t){var n;return e.id===t.id?((n=t).selected=!n.selected,n):function(){var e=t;return e.selected=!0,e}()})),x(t)}})}))))}),r.a.createElement(d.a,{card_title:"Colors",card_body:r.a.createElement("div",null,r.a.createElement(_.a,{color:l,onChangeComplete:function(e){var n=f,a=E;n=n&&n.map((function(t){return!1===t.selected?function(){var n=t;n.colour=e.hex;var r=String(n.id).substring(2,String(n.id).length);return a[r]=e.hex,n}():t})),x(n),h(a),t()}}))})),actionable:!1,cancelClick:t}))}},421:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".table_edit_delete_main {\n    display: flex;\n    justify-content: space-between;\n}\n\n.table_edit_delete {\n    width: var(--TS3);\n    height: 100%;\n    cursor: pointer;\n}\n\n.table_icon {\n    object-fit: contain;\n    width: 60%;\n    height: 60%;\n}\n\n.main_input_wrap {\n    display: flex;\n}\n\n.div_column_wrap {\n    padding: calc(0.1vw + 0.3vh + 0.1vmin) calc(0.1vw + 0.3vh + 0.1vmin)\n}\n\n.inputfield_sub_container {\n    padding: calc(0.3vw + 0.9vh + 0.3vmin);\n}\n\n.dashboard_list_logo {\n    height: 40px;\n    margin: 12px;\n}",""]),t.a=r},423:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".color_container {\n    display: flex;\n    flex-direction: column;\n}\n\n.color_sub_container {\n    display: flex;\n}\n\n.color_box {\n    width: 2vw;\n    height: 3vh;\n    margin: 1vh 1vh;\n}\n\n.color_box_selected {\n    width: 2vw;\n    border-style: solid;\n    height: 3vh;\n    border-radius: 4px;\n}\n\n.color_1 {\n    background-color: var(--color_1);\n}\n\n.color_2 {\n    background-color: var(--color_2);\n}\n\n.color_3 {\n    background-color: var(--color_3);\n}\n\n.color_4 {\n    background-color: var(--color_4);\n}\n\n.color_5 {\n    background-color: var(--color_5);\n}\n\n.color_6 {\n    background-color: var(--color_6);\n}\n\n.color_7 {\n    background-color: var(--color_7);\n}\n\n.color_8 {\n    background-color: var(--color_8);\n}\n\n.color_9 {\n    background-color: var(--color_9);\n}\n\n.color_10 {\n    background-color: var(--color_10);\n}\n\n.color_11 {\n    background-color: var(--color_11);\n}\n\n.color_12 {\n    background-color: var(--color_12);\n}\n\n.color_13 {\n    background-color: var(--color_13);\n}\n\n.color_14 {\n    background-color: var(--color_14);\n}\n\n.color_15 {\n    background-color: var(--color_15);\n}\n\n.color_16 {\n    background-color: var(--color_16);\n}\n\n.color_17 {\n    background-color: var(--color_17);\n}\n\n.color_18 {\n    background-color: var(--color_18);\n}\n\n.color_19 {\n    background-color: var(--color_19);\n}\n\n.color_20 {\n    background-color: var(--color_20);\n}\n\n.color_21 {\n    background-color: var(--color_21);\n}\n\n.color_22 {\n    background-color: var(--color_22);\n}\n\n.color_23 {\n    background-color: var(--color_23);\n}",""]),t.a=r},433:function(e,t,n){"use strict";var a=n(11),r=n.n(a)()((function(e){return e[1]}));r.push([e.i,".user_main_container {\n    /* background-color: var(--color_6); */\n    border-radius: 4px;\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\n    width: 80vw;\n    height: 90vh;\n}\n\n.user_container {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    justify-content: center;\n}\n\n.user_warp {\n    display: flex;\n    flex-direction: column;\n}\n\n.wrap-flex {\n    display: flex;\n    flex-direction: column;\n}\n\n.user_sub_container1 {\n    /* color: var(--color_5); */\n    border-radius: 4px;\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\n    width: 52vh;\n    height: 80vh;\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n}\n\n.user_sub_container2 {\n    /* color: var(--color_5); */\n    border-radius: 4px;\n    margin: calc(0.6vw + 1.8vh + 0.6vmin);\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\n    width: 52vh;\n    height: 35vh;\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\n}\n\n.user_profile_picture {\n    height: 25vh;\n    border-radius: 100px;\n    margin-top: 15px;\n}\n\n.user_profile_text {\n    display: flex;\n    /* color: var(--color_21); */\n    font-size: var(--TS5);\n    font-weight: 600;\n    width: 18vh;\n    justify-content: center;\n    text-transform: uppercase;\n}\n\n.user_details_text {\n    font-family: 'Barlow';\n    font-weight: 600;\n    /* color: var(--color_1); */\n    font-size: var(--TS7);\n    align-self: center;\n    padding: 0 0.6vw;\n}\n\n.user_data {\n    font-family: 'Barlow';\n    /* color: var(--color_1); */\n    font-size: var(--TS7);\n    align-self: center;\n    padding: 0 0.6vw;\n}\n\n.user_sub_details {\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\n    /* color: var(--color_4); */\n    font-size: var(--TS5);\n    font-weight: 500;\n    display: flex;\n    grid-template-columns: 1fr 1fr;\n}\n\n.user-profile-name {\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\n    /* color: var(--color_4); */\n    font-size: var(--TS5);\n    font-weight: 500;\n    display: flex;\n    justify-content: center;\n}\n\n.user_profile-heading {\n    display: flex;\n    justify-content: center;\n    padding: 1vh;\n}",""]),t.a=r},779:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(421),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,n(38)),s=(n(34),n(51)),d=n(160),m=n(48),_=n(46),p=n(19),v=n(20),b=n(25),y=n(196),g=n(197),f=n(70),E=n(5),h=n(24),x=n(65);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=Object(v.a)().auth,n=Object(b.a)(),l=n.Colour,o=n.colourObj,c=(n.setcolourObj,n.setColour,n.loadColour),i=Object(x.a)(),S=i.userDetail,O=(i.setuserDetail,i.loaduserDetail),j=i.edituserDetail,w=(Object(u.f)(),N(Object(a.useState)(!0),2)),k=w[0],A=w[1],I=N(Object(a.useState)(!1),2),C=I[0],T=I[1],B=N(Object(a.useState)(!1),2),M=B[0],P=B[1],D=N(Object(a.useState)({}),2),U=D[0],R=D[1],q=N(Object(a.useState)([{id:"",firstname:"",lastname:"",email:"",image:"",photo_url:"",dob:"",gender:"",address:"",dial_code:"",phone:"",company_name:"",branch_name:"",user_type:"",auth_type:""}]),2),L=q[0],F=q[1],z=N(Object(a.useState)(!1),2),J=z[0],G=z[1],H=N(Object(a.useState)(""),2),Y=H[0],$=H[1],V=N(Object(a.useState)(""),2),W=V[0],K=V[1],Q=N(Object(a.useState)(""),2),X=Q[0],Z=Q[1],ee=N(Object(a.useState)(""),2),te=ee[0],ne=ee[1],ae=N(Object(a.useState)(""),2),re=ae[0],le=ae[1],oe=N(Object(a.useState)(""),2),ce=oe[0],ie=oe[1],ue=N(Object(a.useState)(""),2),se=ue[0],de=ue[1],me=N(Object(a.useState)({}),2),_e=me[0],pe=me[1],ve=N(Object(a.useState)(""),2),be=ve[0],ye=ve[1],ge=N(Object(a.useState)(""),2),fe=ge[0],Ee=ge[1],he=N(Object(a.useState)(""),2),xe=he[0],Ne=he[1],Se=N(Object(a.useState)(""),2),Oe=Se[0],je=Se[1],we=N(Object(a.useState)(""),2),ke=we[0],Ae=we[1],Ie=N(Object(a.useState)({}),2),Ce=Ie[0],Te=Ie[1],Be=N(Object(a.useState)({}),2),Me=Be[0],Pe=Be[1];Object(a.useEffect)((function(){S||O(),e.setheader_options(De),l&&o||c(),Object(p.a)({path:"/api/user/list/",method:"get",auth:t||!1},(function(e,t){200===e.status?(A(!1),setlist(e.data.results)):(A(!1),console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(t)))}))}),[]);var De=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"screen_header_element",onClick:function(){T(!0)}},r.a.createElement("img",{className:"header_icon",src:s}),r.a.createElement("div",null,"Add User")))};return r.a.createElement("div",{className:"main"},C&&r.a.createElement(y.a,{setPopup:function(){T(!1)}}),M&&r.a.createElement(g.a,{setPopup:function(){P(!1)}}),J&&r.a.createElement(h.a,{title:"Edit User",popup_body:r.a.createElement("div",{className:"main_input_wrap"},r.a.createElement("div",{className:"div_column_wrap"},r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"FIRST NAME",id:"input_firstnametextbox",name:"data.firstname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:W,onchange:K,description:"Enter user Firstname"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"LAST NAME",id:"input_lastnametextbox",name:"data.lastname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:X,onchange:Z,description:"Enter user Lastname"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"EMAIL",id:"input_emailtextbox",name:"data.email",inputtype:"Text",type:"text",min_length:"3",required:!0,value:te,onchange:ne,description:"Enter user Email-ID"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"IMAGE",id:"input_imagetextbox",name:"data.image",inputtype:"Text",type:"text",min_length:"3",required:!0,value:re,onchange:le,description:"Enter user Image"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"PHOTO URL",id:"input_photo_urltextbox",name:"data.photo_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ce,onchange:ie,description:"Enter user Photo URL"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"DOB(yyy-mm-dd)",id:"input_dobtextbox",name:"data.dob",inputtype:"Text",type:"text",min_length:"3",required:!0,value:se,onchange:de,description:"Enter user Date of birth"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{type:"picker",id:"input_gendertextbox",name:"GENDER",required:!0,value:null==_e?void 0:_e.value,onchange:pe,options:[{key:"0",value:"MALE"},{key:"1",value:"FEMALE"},{key:"2",value:"OTHER"}],description:"Enter user Gender"}))),r.a.createElement("div",{className:"div_column_wrap"},r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"ADDRESS",id:"input_addresstextbox",name:"data.address",inputtype:"Text",type:"text",min_length:"3",required:!0,value:be,onchange:ye,description:"Enter user Address"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"DIAL CODE",id:"input_dial_codetextbox",name:"data.dial_code",inputtype:"Text",type:"text",min_length:"3",required:!0,value:fe,onchange:Ee,description:"Enter user Dial Code"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"PHONE NUMBER",id:"input_phonetextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:xe,onchange:Ne,description:"Enter user Phone Number"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"COMPANY NAME",id:"input_company_nametextbox",name:"data.company_name",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Oe,onchange:je,description:"Enter user Phone Number"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{label:"BRANCH NAME",id:"input_branch_nametextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ke,onchange:Ae,description:"Enter user Phone Number"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{type:"picker",id:"input_user_typetextbox",name:"USER TYPE",required:!0,value:null==Ce?void 0:Ce.value,onchange:Te,options:[{key:"0",value:"NORMAL"},{key:"1",value:"VIEWER"},{key:"2",value:"PROJECTADMIN"},{key:"3",value:"SUPERUSER"},{key:"2",value:"ADMIN"},{key:"3",value:"SUPER ADMIN"}],description:"Enter user Type"})),r.a.createElement("div",{className:"inputfield_sub_container"},r.a.createElement(E.a,{type:"picker",id:"input_auth_typetextbox",name:"AUTH TYPE",required:!0,value:null==Me?void 0:Me.value,onchange:Pe,options:[{key:"0",value:"FB"},{key:"1",value:"GOOGLE"},{key:"2",value:"MC"},{key:"3",value:"APPLE"},{key:"3",value:"GUEST"}],description:"Enter user Authentication type"})))),confirmClick:function(){F(L.map((function(e){var t;return e.id==U.id?((t=e).firstname=String(document.getElementById("input_firstnametextbox").value),t.lastname=String(document.getElementById("input_lastnametextbox").value),t.email=String(document.getElementById("input_emailtextbox").value),t.image=String(document.getElementById("input_imagetextbox").value),t.photo_url=String(document.getElementById("input_photo_urltextbox").value),t.dob=String(document.getElementById("input_dobtextbox").value),t.gender=null==_e?void 0:_e.value,t.address=String(document.getElementById("input_addresstextbox").value),t.dial_code=String(document.getElementById("input_dial_codetextbox").value),t.phone=String(document.getElementById("input_phonetextbox").value),t.company_name=String(document.getElementById("input_company_nametextbox").value),t.branch_name=String(document.getElementById("input_branch_nametextbox").value),t.user_type=null==Ce?void 0:Ce.value,t.auth_type=null==Me?void 0:Me.value,t):e})));var e={firstname:String(document.getElementById("input_firstnametextbox").value),lastname:String(document.getElementById("input_lastnametextbox").value),email:String(document.getElementById("input_emailtextbox").value),image:String(document.getElementById("input_imagetextbox").value),photo_url:String(document.getElementById("input_photo_urltextbox").value),dob:String(document.getElementById("input_dobtextbox").value),gender:null==_e?void 0:_e.value,address:String(document.getElementById("input_addresstextbox").value),dial_code:String(document.getElementById("input_dial_codetextbox").value),phone:String(document.getElementById("input_phonetextbox").value),company_name:String(document.getElementById("input_company_nametextbox").value),branch_name:String(document.getElementById("input_branch_nametextbox").value),user_type:null==Ce?void 0:Ce.value,auth_type:null==Me?void 0:Me.value};j(Y,e),G(!1)},cancelClick:function(){G(!1)}}),r.a.createElement("div",{className:"body"},k?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(_.a,null)):r.a.createElement("div",{className:"internal_table user-table",style:{width:"1400px",overflowY:"hidden",color:o.color_1}},r.a.createElement("table",{id:"internal_table"},r.a.createElement("thead",null,["first name","last name","email","image","photo url","dob","gender","address","dial code","phone","Company Name","Branch Name","user type","Login Method"].map((function(e,t){return r.a.createElement("th",{key:t},r.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),r.a.createElement("div",{className:"orderby_arrow"},r.a.createElement(f.a,{onexpand:function(){}}))))}))),r.a.createElement("tbody",null,S&&S.map((function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.firstname),r.a.createElement("td",null,e.lastname),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.image),r.a.createElement("td",null," ",r.a.createElement("img",{className:"dashboard_list_logo",src:e.photo_url})),r.a.createElement("td",null,e.dob),r.a.createElement("td",null,e.gender),r.a.createElement("td",null,e.address),r.a.createElement("td",null,e.dial_code),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.company_name),r.a.createElement("td",null,e.branch_name),r.a.createElement("td",null,e.user_type),r.a.createElement("td",null,e.auth_type),r.a.createElement("td",null,r.a.createElement("div",{className:"table_edit_delete_main"},r.a.createElement("div",{className:"table_edit_delete"},J?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{onClick:function(){var e;G(!0),e=t,S&&S.map((function(t,n){console.log("?????>>><><><> :",n,e),n===e&&(R(t),$(t.id),K(t.firstname),Z(t.lastname),ne(t.email),le(t.image),ie(t.photo_url),de(t.dob),pe({value:t.gender}),ye(t.address),Ee(t.dial_code),Ne(t.phone),je(t.company_name),Ae(t.branch_name),Te({value:t.user_type}),Pe({value:t.auth_type}))}))},className:"table_icon",src:d})))))))})))))),r.a.createElement(m.a,null))}},783:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(10),o=n.n(l),c=n(433),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,n(34),n(38)),s=n(25);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(){Object(u.f)();var e=Object(s.a)(),t=e.Colour,n=e.colourObj,l=(e.setcolourObj,e.setColour,e.loadColour),o=d(Object(a.useState)("NORMAL"),2),c=o[0],i=o[1],m=d(Object(a.useState)(""),2),_=m[0],p=m[1],v=d(Object(a.useState)(""),2),b=v[0],y=v[1],g=d(Object(a.useState)(""),2),f=g[0],E=g[1],h=d(Object(a.useState)(""),2),x=h[0],N=h[1];return Object(a.useEffect)((function(){var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var n=e.user_type,a=e.photo_url,r=e.firstname,o=e.lastname,c=e.email;i(n),p(a),y(r),E(o),N(c)}t||l()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"user_main_container",style:{backgroundColor:n.color_6}},r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"user_warp"},r.a.createElement("div",{className:"user_sub_container1",style:{color:n.color_5}},r.a.createElement("img",{className:"user_profile_picture",src:_}),r.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},r.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},b,f)),r.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"User Type:"),r.a.createElement("div",{className:"user_data",style:{color:n.color_1}},c)),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Name:"),r.a.createElement("div",{className:"user_data",style:{color:n.color_1}},b," ",f)),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"E-mail:"),r.a.createElement("div",{className:"user_data",style:{color:n.color_1}},x)))),r.a.createElement("div",{className:"wrap-flex"},r.a.createElement("div",{className:"user_warp"},r.a.createElement("div",{className:"user_sub_container2",style:{color:n.color_5}},r.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},r.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},"Company")),r.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Company Name:")),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Branch Name:")))),r.a.createElement("div",{className:"user_warp"},r.a.createElement("div",{className:"user_sub_container2",style:{color:n.color_5}},r.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},r.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},"Project")),r.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Active Project:")),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Active Task:")),r.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},r.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Project History:"))))))))))}}}]);