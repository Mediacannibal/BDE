(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{210:function(e,r,n){"use strict";var t=n(0),a=n.n(t),l=n(9),o=n.n(l),c=n(447),i={insert:"head",singleton:!1},s=(o()(c.a,i),c.a.locals,n(40),n(42)),u=n(25),d=n(23),m=n(22),p=n(675);function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return b(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}r.a=function(e){var r=e.setPopup,n=(Object(s.f)(),_(Object(t.useState)("#ff0000"),2)),l=n[0],o=(n[1],_(Object(t.useState)("NORMAL"),2)),c=(o[0],o[1]),i=_(Object(t.useState)(""),2),b=(i[0],i[1]),v=_(Object(t.useState)(""),2),g=(v[0],v[1]),h=Object(m.a)(),f=h.Colour,y=h.colourObj,E=h.setcolourObj,x=h.setColour,N=h.loadColour,w=_(Object(t.useState)(!1),2),S=w[0];w[1];return Object(t.useEffect)((function(){console.log("screenlocation: ",location.pathname);var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var r=e.user_type,n=e.firstname,t=e.photo_url;c(r),b(n),g(t)}f||N()}),[]),a.a.createElement(a.a.Fragment,null,!S&&a.a.createElement(u.a,{title:"Settings",desc1:"Choose the theme color",popup_body:a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{card_title:"Colors",card_body:a.a.createElement("div",{className:"color_container",style:{}},a.a.createElement("div",{className:"color_sub_container"},f&&f.map((function(e){return e.selected?a.a.createElement("div",{className:"color_box",style:{backgroundColor:e.colour},onClick:function(){var r=f;r=r.map((function(r){var n;return e.id===r.id?((n=r).selected=!n.selected,n):function(){var e=r;return e.selected=!0,e}()})),x(r)}}):a.a.createElement("div",{className:"color_box_selected",style:{backgroundColor:e.colour},onClick:function(){var r=f;r=r&&r.map((function(r){var n;return e.id===r.id?((n=r).selected=!n.selected,n):function(){var e=r;return e.selected=!0,e}()})),x(r)}})}))))}),a.a.createElement(d.a,{card_title:"Colors",card_body:a.a.createElement("div",null,a.a.createElement(p.a,{color:l,onChangeComplete:function(e){var n=f,t=y;n=n&&n.map((function(r){return!1===r.selected?function(){var n=r;n.colour=e.hex;var a=String(n.id).substring(2,String(n.id).length);return t[a]=e.hex,n}():r})),x(n),E(t),r()}}))})),actionable:!1,cancelClick:r}))}},445:function(e,r,n){"use strict";var t=n(10),a=n.n(t)()((function(e){return e[1]}));a.push([e.i,".table_edit_delete_main {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.table_edit_delete {\r\n  width: var(--TS3);\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n.table_icon {\r\n  object-fit: contain;\r\n  width: 60%;\r\n  height: 60%;\r\n}\r\n\r\n.main_input_wrap {\r\n  display: flex;\r\n}\r\n\r\n.div_column_wrap {\r\n  padding: calc(0.1vw + 0.3vh + 0.1vmin) calc(0.1vw + 0.3vh + 0.1vmin);\r\n}\r\n\r\n.inputfield_sub_container {\r\n  padding: calc(0.3vw + 0.9vh + 0.3vmin);\r\n}\r\n\r\n.dashboard_list_logo {\r\n  height: 40px;\r\n  margin: 12px;\r\n}\r\n\r\n/*-------Card style-------*/\r\n\r\n.wrapper {\r\n  display: grid;\r\n  width: 100%;\r\n  height: 100vh;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  column-gap: 1rem;\r\n  row-gap: 1rem;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .wrapper {\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100vh;\r\n    grid-template-columns: repeat(4, 1fr);\r\n    column-gap: 1rem;\r\n    row-gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .wrapper {\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100vh;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    column-gap: 1rem;\r\n    row-gap: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 536px) {\r\n  .wrapper {\r\n    display: grid;\r\n    width: 100%;\r\n    height: 100vh;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    column-gap: 1rem;\r\n    row-gap: 1rem;\r\n  }\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  /* max-width: ; */\r\n  /* margin: auto; */\r\n  text-align: center;\r\n}\r\n\r\n.card div {\r\n  /* height: 100%; */\r\n}\r\n\r\n.card-img {\r\n  width: 7vh;\r\n  height: 7vh;\r\n  border-radius: 50%;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.username {\r\n  font-family: 'Google Sans', Roboto, Arial, sans-serif;\r\n  font-size: 1.3rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 2.25rem;\r\n  hyphens: auto;\r\n  word-break: break-word;\r\n  word-wrap: break-word;\r\n  text-transform: capitalize;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.title {\r\n  color: grey;\r\n  font-size: 18px;\r\n}\r\n\r\nbutton {\r\n  border: none;\r\n  outline: 0;\r\n  display: inline-block;\r\n  padding: 8px;\r\n  color: white;\r\n  background-color: #000;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  font-size: 18px;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n/* -------Toggle switch------- */\r\n\r\n/* The switch - the box around the slider */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 60px;\r\n  height: 34px;\r\n}\r\n\r\n/* Hide default HTML checkbox */\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n/* The slider */\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  content: 'GRID';\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: 'GRID';\r\n  height: 26px;\r\n  width: 26px;\r\n  left: 4px;\r\n  bottom: 4px;\r\n  background-color: white;\r\n  -webkit-transition: 0.4s;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: #2196f3;\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(26px);\r\n  -ms-transform: translateX(26px);\r\n  transform: translateX(26px);\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n.button-toggle-wrapper {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  width: 100%;\r\n}\r\n\r\n.button-toggle {\r\n  width: 14vw;\r\n  margin: 5px;\r\n}\r\n\r\n@media (max-width: 320px) {\r\n  .wrapper {\r\n    grid-template-columns: 250px;\r\n  }\r\n  .card {\r\n    margin: 1vh;\r\n  }\r\n}\r\n",""]),r.a=a},447:function(e,r,n){"use strict";var t=n(10),a=n.n(t)()((function(e){return e[1]}));a.push([e.i,".color_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.color_sub_container {\r\n    display: flex;\r\n}\r\n\r\n.color_box {\r\n    width: 2vw;\r\n    height: 3vh;\r\n    margin: 1vh 1vh;\r\n}\r\n\r\n.color_box_selected {\r\n    width: 2vw;\r\n    border-style: solid;\r\n    height: 3vh;\r\n    border-radius: 4px;\r\n}\r\n\r\n.color_1 {\r\n    background-color: var(--color_1);\r\n}\r\n\r\n.color_2 {\r\n    background-color: var(--color_2);\r\n}\r\n\r\n.color_3 {\r\n    background-color: var(--color_3);\r\n}\r\n\r\n.color_4 {\r\n    background-color: var(--color_4);\r\n}\r\n\r\n.color_5 {\r\n    background-color: var(--color_5);\r\n}\r\n\r\n.color_6 {\r\n    background-color: var(--color_6);\r\n}\r\n\r\n.color_7 {\r\n    background-color: var(--color_7);\r\n}\r\n\r\n.color_8 {\r\n    background-color: var(--color_8);\r\n}\r\n\r\n.color_9 {\r\n    background-color: var(--color_9);\r\n}\r\n\r\n.color_10 {\r\n    background-color: var(--color_10);\r\n}\r\n\r\n.color_11 {\r\n    background-color: var(--color_11);\r\n}\r\n\r\n.color_12 {\r\n    background-color: var(--color_12);\r\n}\r\n\r\n.color_13 {\r\n    background-color: var(--color_13);\r\n}\r\n\r\n.color_14 {\r\n    background-color: var(--color_14);\r\n}\r\n\r\n.color_15 {\r\n    background-color: var(--color_15);\r\n}\r\n\r\n.color_16 {\r\n    background-color: var(--color_16);\r\n}\r\n\r\n.color_17 {\r\n    background-color: var(--color_17);\r\n}\r\n\r\n.color_18 {\r\n    background-color: var(--color_18);\r\n}\r\n\r\n.color_19 {\r\n    background-color: var(--color_19);\r\n}\r\n\r\n.color_20 {\r\n    background-color: var(--color_20);\r\n}\r\n\r\n.color_21 {\r\n    background-color: var(--color_21);\r\n}\r\n\r\n.color_22 {\r\n    background-color: var(--color_22);\r\n}\r\n\r\n.color_23 {\r\n    background-color: var(--color_23);\r\n}",""]),r.a=a},459:function(e,r,n){"use strict";var t=n(10),a=n.n(t)()((function(e){return e[1]}));a.push([e.i,".user_main_container {\r\n    /* background-color: var(--color_6); */\r\n    border-radius: 4px;\r\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    width: 80vw;\r\n    height: 90vh;\r\n}\r\n\r\n.user_container {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.user_warp {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.wrap-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user_sub_container1 {\r\n    /* color: var(--color_5); */\r\n    border-radius: 4px;\r\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    width: 52vh;\r\n    height: 80vh;\r\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.user_sub_container2 {\r\n    /* color: var(--color_5); */\r\n    border-radius: 4px;\r\n    margin: calc(0.6vw + 1.8vh + 0.6vmin);\r\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    width: 52vh;\r\n    height: 35vh;\r\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.user_profile_picture {\r\n    height: 25vh;\r\n    border-radius: 100px;\r\n    margin-top: 15px;\r\n}\r\n\r\n.user_profile_text {\r\n    display: flex;\r\n    /* color: var(--color_21); */\r\n    font-size: var(--TS5);\r\n    font-weight: 600;\r\n    width: 18vh;\r\n    justify-content: center;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.user_details_text {\r\n    font-family: 'Barlow';\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    padding: 0 0.6vw;\r\n}\r\n\r\n.user_data {\r\n    font-family: 'Barlow';\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    padding: 0 0.6vw;\r\n}\r\n\r\n.user_sub_details {\r\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    /* color: var(--color_4); */\r\n    font-size: var(--TS5);\r\n    font-weight: 500;\r\n    display: flex;\r\n    grid-template-columns: 1fr 1fr;\r\n}\r\n\r\n.user-profile-name {\r\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    /* color: var(--color_4); */\r\n    font-size: var(--TS5);\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.user_profile-heading {\r\n    display: flex;\r\n    justify-content: center;\r\n    padding: 1vh;\r\n}",""]),r.a=a},682:function(e,r,n){"use strict";var t=n(0),a=n.n(t),l=n(9),o=n.n(l),c=n(445),i={insert:"head",singleton:!1},s=(o()(c.a,i),c.a.locals,n(42)),u=(n(40),n(66)),d=n(167),m=n(106),p=n(54),_=n(47),b=n(20),v=n(21),g=n(22),h=n(209),f=n(210),y=n(76),E=n(5),x=n(25),N=n(71);function w(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return S(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}r.a=function(e){var r=Object(v.a)().auth,n=Object(g.a)(),l=n.Colour,o=n.colourObj,c=(n.setcolourObj,n.setColour,n.loadColour),i=Object(N.a)(),S=i.userDetail,O=(i.setuserDetail,i.loaduserDetail),k=i.edituserDetail,j=(Object(s.f)(),w(Object(t.useState)(!0),2)),A=j[0],I=j[1],C=w(Object(t.useState)(!1),2),T=C[0],B=C[1],M=w(Object(t.useState)(!1),2),R=M[0],P=M[1],D=w(Object(t.useState)(!1),2),U=D[0],L=D[1],q=w(Object(t.useState)({}),2),F=q[0],z=q[1],G=w(Object(t.useState)([]),2),H=G[0],J=G[1],Y=w(Object(t.useState)(!1),2),X=Y[0],$=Y[1],V=w(Object(t.useState)([{id:"",firstname:"",lastname:"",email:"",image:"",photo_url:"",dob:"",gender:"",address:"",dial_code:"",phone:"",company_name:"",branch_name:"",user_type:"",auth_type:""}]),2),W=V[0],K=V[1],Q=w(Object(t.useState)(!1),2),Z=Q[0],ee=Q[1],re=w(Object(t.useState)(""),2),ne=re[0],te=re[1],ae=w(Object(t.useState)(""),2),le=ae[0],oe=ae[1],ce=w(Object(t.useState)(""),2),ie=ce[0],se=ce[1],ue=w(Object(t.useState)(""),2),de=ue[0],me=ue[1],pe=w(Object(t.useState)(""),2),_e=pe[0],be=pe[1],ve=w(Object(t.useState)(""),2),ge=ve[0],he=ve[1],fe=w(Object(t.useState)(""),2),ye=fe[0],Ee=fe[1],xe=w(Object(t.useState)({}),2),Ne=xe[0],we=xe[1],Se=w(Object(t.useState)(""),2),Oe=Se[0],ke=Se[1],je=w(Object(t.useState)(""),2),Ae=je[0],Ie=je[1],Ce=w(Object(t.useState)(""),2),Te=Ce[0],Be=Ce[1],Me=w(Object(t.useState)(""),2),Re=Me[0],Pe=Me[1],De=w(Object(t.useState)(""),2),Ue=De[0],Le=De[1],qe=w(Object(t.useState)({}),2),Fe=qe[0],ze=qe[1],Ge=w(Object(t.useState)({}),2),He=Ge[0],Je=Ge[1];Object(t.useEffect)((function(){S||O(),e.setheader_options(Ye),l&&o||c(),Object(b.a)({path:"/api/user/list/",method:"get",auth:r||!1},(function(e,r){200===e.status?(I(!1),J(e.data.results),console.log("Project Tasks:",e.data),$(!1)):(I(!1),console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(r)),$(!0))}))}),[]);var Ye=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"screen_header_element",onClick:function(){B(!0)}},a.a.createElement("img",{className:"header_icon",src:u}),a.a.createElement("div",null,"Add User")))};return a.a.createElement("div",{className:"main"},T&&a.a.createElement(h.a,{setPopup:function(){B(!1)}}),R&&a.a.createElement(f.a,{setPopup:function(){P(!1)}}),Z&&a.a.createElement(x.a,{title:"Edit User",popup_body:a.a.createElement("div",{className:"main_input_wrap"},a.a.createElement("div",{className:"div_column_wrap"},a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"FIRST NAME",id:"input_firstnametextbox",name:"data.firstname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:le,onchange:oe,description:"Enter user Firstname"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"LAST NAME",id:"input_lastnametextbox",name:"data.lastname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ie,onchange:se,description:"Enter user Lastname"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"EMAIL",id:"input_emailtextbox",name:"data.email",inputtype:"Text",type:"text",min_length:"3",required:!0,value:de,onchange:me,description:"Enter user Email-ID"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"IMAGE",id:"input_imagetextbox",name:"data.image",inputtype:"Text",type:"text",min_length:"3",required:!0,value:_e,onchange:be,description:"Enter user Image"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"PHOTO URL",id:"input_photo_urltextbox",name:"data.photo_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ge,onchange:he,description:"Enter user Photo URL"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"DOB(yyy-mm-dd)",id:"input_dobtextbox",name:"data.dob",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ye,onchange:Ee,description:"Enter user Date of birth"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{type:"picker",id:"input_gendertextbox",name:"GENDER",required:!0,value:null==Ne?void 0:Ne.value,onchange:we,options:[{key:"0",value:"MALE"},{key:"1",value:"FEMALE"},{key:"2",value:"OTHER"}],description:"Enter user Gender"}))),a.a.createElement("div",{className:"div_column_wrap"},a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"ADDRESS",id:"input_addresstextbox",name:"data.address",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Oe,onchange:ke,description:"Enter user Address"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"DIAL CODE",id:"input_dial_codetextbox",name:"data.dial_code",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Ae,onchange:Ie,description:"Enter user Dial Code"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"PHONE NUMBER",id:"input_phonetextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Te,onchange:Be,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"COMPANY NAME",id:"input_company_nametextbox",name:"data.company_name",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Re,onchange:Pe,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{label:"BRANCH NAME",id:"input_branch_nametextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Ue,onchange:Le,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{type:"picker",id:"input_user_typetextbox",name:"USER TYPE",required:!0,value:null==Fe?void 0:Fe.value,onchange:ze,options:[{key:"0",value:"NORMAL"},{key:"1",value:"VIEWER"},{key:"2",value:"PROJECTADMIN"},{key:"3",value:"SUPERUSER"},{key:"2",value:"ADMIN"},{key:"3",value:"SUPER ADMIN"}],description:"Enter user Type"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(E.a,{type:"picker",id:"input_auth_typetextbox",name:"AUTH TYPE",required:!0,value:null==He?void 0:He.value,onchange:Je,options:[{key:"0",value:"FB"},{key:"1",value:"GOOGLE"},{key:"2",value:"MC"},{key:"3",value:"APPLE"},{key:"3",value:"GUEST"}],description:"Enter user Authentication type"})))),confirmClick:function(){K(W.map((function(e){var r;return e.id==F.id?((r=e).firstname=String(document.getElementById("input_firstnametextbox").value),r.lastname=String(document.getElementById("input_lastnametextbox").value),r.email=String(document.getElementById("input_emailtextbox").value),r.image=String(document.getElementById("input_imagetextbox").value),r.photo_url=String(document.getElementById("input_photo_urltextbox").value),r.dob=String(document.getElementById("input_dobtextbox").value),r.gender=null==Ne?void 0:Ne.value,r.address=String(document.getElementById("input_addresstextbox").value),r.dial_code=String(document.getElementById("input_dial_codetextbox").value),r.phone=String(document.getElementById("input_phonetextbox").value),r.company_name=String(document.getElementById("input_company_nametextbox").value),r.branch_name=String(document.getElementById("input_branch_nametextbox").value),r.user_type=null==Fe?void 0:Fe.value,r.auth_type=null==He?void 0:He.value,r):e})));var e={firstname:String(document.getElementById("input_firstnametextbox").value),lastname:String(document.getElementById("input_lastnametextbox").value),email:String(document.getElementById("input_emailtextbox").value),image:String(document.getElementById("input_imagetextbox").value),photo_url:String(document.getElementById("input_photo_urltextbox").value),dob:String(document.getElementById("input_dobtextbox").value),gender:null==Ne?void 0:Ne.value,address:String(document.getElementById("input_addresstextbox").value),dial_code:String(document.getElementById("input_dial_codetextbox").value),phone:String(document.getElementById("input_phonetextbox").value),company_name:String(document.getElementById("input_company_nametextbox").value),branch_name:String(document.getElementById("input_branch_nametextbox").value),user_type:null==Fe?void 0:Fe.value,auth_type:null==He?void 0:He.value};k(ne,e),ee(!1)},cancelClick:function(){ee(!1)}}),a.a.createElement("div",{className:"body"},X?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"error-log-wrap"},a.a.createElement("div",{className:"error-log",style:{color:o.color_3}},"Unable to fetch"))):a.a.createElement(a.a.Fragment,null,A?a.a.createElement("div",{className:"spinner_fullscreen_div"},a.a.createElement(_.a,null)):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"button-toggle-wrapper",onClick:function(){L(!U)}},U?a.a.createElement("button",{className:"button-toggle"},"GRID"):a.a.createElement("button",{className:"button-toggle"},"LIST")),U?a.a.createElement("div",{className:"internal_table user-table",style:{width:"1400px",overflowY:"hidden",color:o.color_1}},a.a.createElement("table",{id:"internal_table"},a.a.createElement("thead",null,["first name","last name","email","image","photo url","dob","gender","address","dial code","phone","Company Name","Branch Name","user type","Login Method"].map((function(e,r){return a.a.createElement("th",{key:r},a.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),a.a.createElement("div",{className:"orderby_arrow"},a.a.createElement(y.a,{onexpand:function(){}}))))}))),a.a.createElement("tbody",null,S&&S.map((function(e,r){return a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.firstname),a.a.createElement("td",null,e.lastname),a.a.createElement("td",null,e.email),a.a.createElement("td",null,e.image),a.a.createElement("td",null," ",a.a.createElement("img",{className:"dashboard_list_logo",src:e.photo_url})),a.a.createElement("td",null,e.dob),a.a.createElement("td",null,e.gender),a.a.createElement("td",null,e.address),a.a.createElement("td",null,e.dial_code),a.a.createElement("td",null,e.phone),a.a.createElement("td",null,e.company_name),a.a.createElement("td",null,e.branch_name),a.a.createElement("td",null,e.user_type),a.a.createElement("td",null,e.auth_type),a.a.createElement("td",null,a.a.createElement("div",{className:"table_edit_delete_main"},a.a.createElement("div",{className:"table_edit_delete"},Z?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{onClick:function(){var e;ee(!0),e=r,S&&S.map((function(r,n){console.log("?????>>><><><> :",n,e),n===e&&(z(r),te(r.id),oe(r.firstname),se(r.lastname),me(r.email),be(r.image),he(r.photo_url),Ee(r.dob),we({value:r.gender}),ke(r.address),Ie(r.dial_code),Be(r.phone),Pe(r.company_name),Le(r.branch_name),ze({value:r.user_type}),Je({value:r.auth_type}))}))},className:"table_icon",src:d})))))))}))))):a.a.createElement("div",{className:"wrapper"},H&&H.map((function(e){return console.log("ele::",e),a.a.createElement("div",{className:"card"},a.a.createElement("div",null,a.a.createElement("img",{className:"card-img",src:null===e.photo_url?m:e.photo_url,alt:"user image"}),a.a.createElement("div",{className:"flex-vh-alignment"},a.a.createElement("div",{className:"username",style:{color:o.color_4}},e.firstname&&null===e.lastname?"NO NAME":e.firstname+" "),a.a.createElement("div",{className:"username",style:{color:o.color_4}},e.firstname&&null===e.lastname?"NO NAME":" "+e.lastname)),a.a.createElement("p",{className:"title"},null===e.company_name?"NO COMPANY NAME":e.company_name),a.a.createElement("p",null,null===e.branch_name?"NO BRANCH NAME":e.branch_name),a.a.createElement("p",null,null===e.dob?"NO DOB":e.dob),a.a.createElement("div",{className:"flex-vh-alignment"},a.a.createElement("p",null,null===e.dial_code?"":e.dial_code+"-"),a.a.createElement("p",null,null===e.phone?"NO PHONE NUMBER":e.phone)),a.a.createElement("p",null,a.a.createElement("button",null,"Send"))))})))))),a.a.createElement(p.a,null))}},686:function(e,r,n){"use strict";var t=n(0),a=n.n(t),l=n(9),o=n.n(l),c=n(459),i={insert:"head",singleton:!1},s=(o()(c.a,i),c.a.locals,n(40),n(42)),u=n(22);function d(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return m(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}r.a=function(){Object(s.f)();var e=Object(u.a)(),r=e.Colour,n=e.colourObj,l=(e.setcolourObj,e.setColour,e.loadColour),o=d(Object(t.useState)("NORMAL"),2),c=o[0],i=o[1],m=d(Object(t.useState)(""),2),p=m[0],_=m[1],b=d(Object(t.useState)(""),2),v=b[0],g=b[1],h=d(Object(t.useState)(""),2),f=h[0],y=h[1],E=d(Object(t.useState)(""),2),x=E[0],N=E[1];return Object(t.useEffect)((function(){var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var n=e.user_type,t=e.photo_url,a=e.firstname,o=e.lastname,c=e.email;i(n),_(t),g(a),y(o),N(c)}r||l()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"user_main_container",style:{backgroundColor:n.color_6}},a.a.createElement("div",{className:"user_container"},a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container1",style:{color:n.color_5}},a.a.createElement("img",{className:"user_profile_picture",src:p}),a.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},v,f)),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"User Type:"),a.a.createElement("div",{className:"user_data",style:{color:n.color_1}},c)),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Name:"),a.a.createElement("div",{className:"user_data",style:{color:n.color_1}},v," ",f)),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"E-mail:"),a.a.createElement("div",{className:"user_data",style:{color:n.color_1}},x)))),a.a.createElement("div",{className:"wrap-flex"},a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container2",style:{color:n.color_5}},a.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},"Company")),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Company Name:")),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Branch Name:")))),a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container2",style:{color:n.color_5}},a.a.createElement("div",{className:"user-profile-name",style:{color:n.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:n.color_21}},"Project")),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:n.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Active Project:")),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Active Task:")),a.a.createElement("div",{className:"user_sub_details",style:{color:n.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:n.color_1}},"Project History:"))))))))))}}}]);