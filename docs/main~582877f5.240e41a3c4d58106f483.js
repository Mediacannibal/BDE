(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{193:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(10),o=r.n(l),c=r(417),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,r(34),r(37)),s=r(24),d=r(21),m=r(23),_=r(758);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=e.setPopup,r=(Object(u.f)(),p(Object(n.useState)("#ff0000"),2)),l=r[0],o=(r[1],p(Object(n.useState)("NORMAL"),2)),c=(o[0],o[1]),i=p(Object(n.useState)(""),2),v=(i[0],i[1]),b=p(Object(n.useState)(""),2),g=(b[0],b[1]),y=Object(m.a)(),E=y.Colour,f=y.colourObj,h=y.setcolourObj,x=y.setColour,N=y.loadColour,S=p(Object(n.useState)(!1),2),O=S[0];S[1];return Object(n.useEffect)((function(){console.log("screenlocation: ",location.pathname);var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var t=e.user_type,r=e.firstname,n=e.photo_url;c(t),v(r),g(n)}E||N()}),[]),a.a.createElement(a.a.Fragment,null,!O&&a.a.createElement(s.a,{title:"Settings",desc1:"Choose the theme color",popup_body:a.a.createElement(a.a.Fragment,null,a.a.createElement(d.a,{card_title:"Colors",card_body:a.a.createElement("div",{className:"color_container",style:{}},a.a.createElement("div",{className:"color_sub_container"},E&&E.map((function(e){return e.selected?a.a.createElement("div",{className:"color_box",style:{backgroundColor:e.colour},onClick:function(){var t=E;t=t.map((function(t){var r;return e.id===t.id?((r=t).selected=!r.selected,r):function(){var e=t;return e.selected=!0,e}()})),x(t)}}):a.a.createElement("div",{className:"color_box_selected",style:{backgroundColor:e.colour},onClick:function(){var t=E;t=t&&t.map((function(t){var r;return e.id===t.id?((r=t).selected=!r.selected,r):function(){var e=t;return e.selected=!0,e}()})),x(t)}})}))))}),a.a.createElement(d.a,{card_title:"Colors",card_body:a.a.createElement("div",null,a.a.createElement(_.a,{color:l,onChangeComplete:function(e){var r=E,n=f;r=r&&r.map((function(t){return!1===t.selected?function(){var r=t;r.colour=e.hex;var a=String(r.id).substring(2,String(r.id).length);return n[a]=e.hex,r}():t})),x(r),h(n),t()}}))})),actionable:!1,cancelClick:t}))}},415:function(e,t,r){"use strict";var n=r(11),a=r.n(n)()((function(e){return e[1]}));a.push([e.i,".table_edit_delete_main {\r\n    display: flex;\r\n    text-align-last: center;\r\n}\r\n\r\n.table_edit_delete {\r\n    width: var(--TS3);\r\n    height: 100%;\r\n    cursor: pointer;\r\n}\r\n\r\n.table_icon {\r\n    object-fit: contain;\r\n    width: 60%;\r\n    height: 60%;\r\n}\r\n\r\n.main_input_wrap {\r\n    display: flex;\r\n}\r\n\r\n.div_column_wrap {\r\n    padding: calc(0.1vw + 0.3vh + 0.1vmin) calc(0.1vw + 0.3vh + 0.1vmin)\r\n}\r\n\r\n.inputfield_sub_container {\r\n    padding: calc(0.3vw + 0.9vh + 0.3vmin);\r\n}\r\n\r\n.dashboard_list_logo {\r\n    height: 40px;\r\n    margin: 12px;\r\n}",""]),t.a=a},417:function(e,t,r){"use strict";var n=r(11),a=r.n(n)()((function(e){return e[1]}));a.push([e.i,".color_container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.color_sub_container {\r\n    display: flex;\r\n}\r\n\r\n.color_box {\r\n    width: 2vw;\r\n    height: 3vh;\r\n    margin: 1vh 1vh;\r\n}\r\n\r\n.color_box_selected {\r\n    width: 2vw;\r\n    border-style: solid;\r\n    height: 3vh;\r\n    border-radius: 4px;\r\n}\r\n\r\n.color_1 {\r\n    background-color: var(--color_1);\r\n}\r\n\r\n.color_2 {\r\n    background-color: var(--color_2);\r\n}\r\n\r\n.color_3 {\r\n    background-color: var(--color_3);\r\n}\r\n\r\n.color_4 {\r\n    background-color: var(--color_4);\r\n}\r\n\r\n.color_5 {\r\n    background-color: var(--color_5);\r\n}\r\n\r\n.color_6 {\r\n    background-color: var(--color_6);\r\n}\r\n\r\n.color_7 {\r\n    background-color: var(--color_7);\r\n}\r\n\r\n.color_8 {\r\n    background-color: var(--color_8);\r\n}\r\n\r\n.color_9 {\r\n    background-color: var(--color_9);\r\n}\r\n\r\n.color_10 {\r\n    background-color: var(--color_10);\r\n}\r\n\r\n.color_11 {\r\n    background-color: var(--color_11);\r\n}\r\n\r\n.color_12 {\r\n    background-color: var(--color_12);\r\n}\r\n\r\n.color_13 {\r\n    background-color: var(--color_13);\r\n}\r\n\r\n.color_14 {\r\n    background-color: var(--color_14);\r\n}\r\n\r\n.color_15 {\r\n    background-color: var(--color_15);\r\n}\r\n\r\n.color_16 {\r\n    background-color: var(--color_16);\r\n}\r\n\r\n.color_17 {\r\n    background-color: var(--color_17);\r\n}\r\n\r\n.color_18 {\r\n    background-color: var(--color_18);\r\n}\r\n\r\n.color_19 {\r\n    background-color: var(--color_19);\r\n}\r\n\r\n.color_20 {\r\n    background-color: var(--color_20);\r\n}\r\n\r\n.color_21 {\r\n    background-color: var(--color_21);\r\n}\r\n\r\n.color_22 {\r\n    background-color: var(--color_22);\r\n}\r\n\r\n.color_23 {\r\n    background-color: var(--color_23);\r\n}",""]),t.a=a},427:function(e,t,r){"use strict";var n=r(11),a=r.n(n)()((function(e){return e[1]}));a.push([e.i,".user_main_container {\r\n    /* background-color: var(--color_6); */\r\n    border-radius: 4px;\r\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    width: 80vw;\r\n    height: 90vh;\r\n}\r\n\r\n.user_container {\r\n    display: flex;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-content: center;\r\n}\r\n\r\n.user_warp {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.wrap-flex {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.user_sub_container1 {\r\n    /* color: var(--color_5); */\r\n    border-radius: 4px;\r\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    width: 52vh;\r\n    height: 80vh;\r\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.user_sub_container2 {\r\n    /* color: var(--color_5); */\r\n    border-radius: 4px;\r\n    margin: calc(0.6vw + 1.8vh + 0.6vmin);\r\n    padding: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    width: 52vh;\r\n    height: 35vh;\r\n    -webkit-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    -moz-box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.user_profile_picture {\r\n    height: 25vh;\r\n}\r\n\r\n.user_profile_text {\r\n    /* color: var(--color_21); */\r\n    font-size: var(--TS4);\r\n    font-weight: 600;\r\n    width: 18vh;\r\n}\r\n\r\n.user_details_text {\r\n    font-family: 'Barlow';\r\n    font-weight: 600;\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    padding: 0 0.6vw;\r\n}\r\n\r\n.user_data {\r\n    font-family: 'Barlow';\r\n    /* color: var(--color_1); */\r\n    font-size: var(--TS7);\r\n    align-self: center;\r\n    padding: 0 0.6vw;\r\n}\r\n\r\n.user_sub_details {\r\n    margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n    /* color: var(--color_4); */\r\n    font-size: var(--TS5);\r\n    font-weight: 500;\r\n    display: flex;\r\n    justify-content: center;\r\n}",""]),t.a=a},765:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(10),o=r.n(l),c=r(415),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,r(37)),s=(r(34),r(53)),d=r(105),m=r(50),_=r(46),p=r(17),v=r(20),b=r(23),g=r(192),y=r(193),E=r(68),f=r(8),h=r(24),x=r(75);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=Object(v.a)().auth,r=Object(b.a)(),l=r.Colour,o=r.colourObj,c=(r.setcolourObj,r.setColour,r.loadColour),i=Object(x.a)(),S=i.userDetail,O=(i.setuserDetail,i.loaduserDetail),w=i.edituserDetail,j=(Object(u.f)(),N(Object(n.useState)(!0),2)),k=j[0],A=j[1],I=N(Object(n.useState)(!1),2),C=I[0],T=I[1],B=N(Object(n.useState)(!1),2),M=B[0],P=B[1],D=N(Object(n.useState)({}),2),U=D[0],R=D[1],q=N(Object(n.useState)([{id:"",firstname:"",lastname:"",email:"",image:"",photo_url:"",dob:"",gender:"",address:"",dial_code:"",phone:"",company_name:"",branch_name:"",user_type:"",auth_type:""}]),2),L=q[0],F=q[1],J=N(Object(n.useState)(!1),2),z=J[0],G=J[1],H=N(Object(n.useState)(""),2),Y=H[0],$=H[1],V=N(Object(n.useState)(""),2),W=V[0],K=V[1],Q=N(Object(n.useState)(""),2),X=Q[0],Z=Q[1],ee=N(Object(n.useState)(""),2),te=ee[0],re=ee[1],ne=N(Object(n.useState)(""),2),ae=ne[0],le=ne[1],oe=N(Object(n.useState)(""),2),ce=oe[0],ie=oe[1],ue=N(Object(n.useState)(""),2),se=ue[0],de=ue[1],me=N(Object(n.useState)({}),2),_e=me[0],pe=me[1],ve=N(Object(n.useState)(""),2),be=ve[0],ge=ve[1],ye=N(Object(n.useState)(""),2),Ee=ye[0],fe=ye[1],he=N(Object(n.useState)(""),2),xe=he[0],Ne=he[1],Se=N(Object(n.useState)(""),2),Oe=Se[0],we=Se[1],je=N(Object(n.useState)(""),2),ke=je[0],Ae=je[1],Ie=N(Object(n.useState)({}),2),Ce=Ie[0],Te=Ie[1],Be=N(Object(n.useState)({}),2),Me=Be[0],Pe=Be[1];Object(n.useEffect)((function(){S||O(),e.setheader_options(De),l&&o||c(),Object(p.a)({path:"/api/user/list/",method:"get",auth:t||!1},(function(e,t){200===e.status?(A(!1),setlist(e.data.results)):(A(!1),console.log("error "+JSON.stringify(e)),console.log("error "+JSON.stringify(t)))}))}),[]);var De=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"screen_header_element",onClick:function(){T(!0)}},a.a.createElement("img",{className:"header_icon",src:s}),a.a.createElement("div",null,"Add User")))};return a.a.createElement("div",{className:"main"},C&&a.a.createElement(g.a,{setPopup:function(){T(!1)}}),M&&a.a.createElement(y.a,{setPopup:function(){P(!1)}}),z&&a.a.createElement(h.a,{title:"Edit User",popup_body:a.a.createElement("div",{className:"main_input_wrap"},a.a.createElement("div",{className:"div_column_wrap"},a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"FIRST NAME",id:"input_firstnametextbox",name:"data.firstname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:W,onchange:K,description:"Enter user Firstname"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"LAST NAME",id:"input_lastnametextbox",name:"data.lastname",inputtype:"Text",type:"text",min_length:"3",required:!0,value:X,onchange:Z,description:"Enter user Lastname"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"EMAIL",id:"input_emailtextbox",name:"data.email",inputtype:"Text",type:"text",min_length:"3",required:!0,value:te,onchange:re,description:"Enter user Email-ID"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"IMAGE",id:"input_imagetextbox",name:"data.image",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ae,onchange:le,description:"Enter user Image"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"PHOTO URL",id:"input_photo_urltextbox",name:"data.photo_url",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ce,onchange:ie,description:"Enter user Photo URL"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"DOB(yyy-mm-dd)",id:"input_dobtextbox",name:"data.dob",inputtype:"Text",type:"text",min_length:"3",required:!0,value:se,onchange:de,description:"Enter user Date of birth"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{type:"picker",id:"input_gendertextbox",name:"GENDER",required:!0,value:null==_e?void 0:_e.value,onchange:pe,options:[{key:"0",value:"MALE"},{key:"1",value:"FEMALE"},{key:"2",value:"OTHER"}],description:"Enter user Gender"}))),a.a.createElement("div",{className:"div_column_wrap"},a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"ADDRESS",id:"input_addresstextbox",name:"data.address",inputtype:"Text",type:"text",min_length:"3",required:!0,value:be,onchange:ge,description:"Enter user Address"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"DIAL CODE",id:"input_dial_codetextbox",name:"data.dial_code",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Ee,onchange:fe,description:"Enter user Dial Code"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"PHONE NUMBER",id:"input_phonetextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:xe,onchange:Ne,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"COMPANY NAME",id:"input_company_nametextbox",name:"data.company_name",inputtype:"Text",type:"text",min_length:"3",required:!0,value:Oe,onchange:we,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{label:"BRANCH NAME",id:"input_branch_nametextbox",name:"data.phone",inputtype:"Text",type:"text",min_length:"3",required:!0,value:ke,onchange:Ae,description:"Enter user Phone Number"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{type:"picker",id:"input_user_typetextbox",name:"USER TYPE",required:!0,value:null==Ce?void 0:Ce.value,onchange:Te,options:[{key:"0",value:"NORMAL"},{key:"1",value:"VIEWER"},{key:"2",value:"PROJECTADMIN"},{key:"3",value:"SUPERUSER"},{key:"2",value:"ADMIN"},{key:"3",value:"SUPER ADMIN"}],description:"Enter user Type"})),a.a.createElement("div",{className:"inputfield_sub_container"},a.a.createElement(f.a,{type:"picker",id:"input_auth_typetextbox",name:"AUTH TYPE",required:!0,value:null==Me?void 0:Me.value,onchange:Pe,options:[{key:"0",value:"FB"},{key:"1",value:"GOOGLE"},{key:"2",value:"MC"},{key:"3",value:"APPLE"},{key:"3",value:"GUEST"}],description:"Enter user Authentication type"})))),confirmClick:function(){F(L.map((function(e){console.log("object===",e.id,U.id);var t;return e.id==U.id?((t=e).firstname=String(document.getElementById("input_firstnametextbox").value),t.lastname=String(document.getElementById("input_lastnametextbox").value),t.email=String(document.getElementById("input_emailtextbox").value),t.image=String(document.getElementById("input_imagetextbox").value),t.photo_url=String(document.getElementById("input_photo_urltextbox").value),t.dob=String(document.getElementById("input_dobtextbox").value),t.gender=null==_e?void 0:_e.value,t.address=String(document.getElementById("input_addresstextbox").value),t.dial_code=String(document.getElementById("input_dial_codetextbox").value),t.phone=String(document.getElementById("input_phonetextbox").value),t.company_name=String(document.getElementById("input_company_nametextbox").value),t.branch_name=String(document.getElementById("input_branch_nametextbox").value),t.user_type=null==Ce?void 0:Ce.value,t.auth_type=null==Me?void 0:Me.value,t):e})));var e={firstname:String(document.getElementById("input_firstnametextbox").value),lastname:String(document.getElementById("input_lastnametextbox").value),email:String(document.getElementById("input_emailtextbox").value),image:String(document.getElementById("input_imagetextbox").value),photo_url:String(document.getElementById("input_photo_urltextbox").value),dob:String(document.getElementById("input_dobtextbox").value),gender:null==_e?void 0:_e.value,address:String(document.getElementById("input_addresstextbox").value),dial_code:String(document.getElementById("input_dial_codetextbox").value),phone:String(document.getElementById("input_phonetextbox").value),company_name:String(document.getElementById("input_company_nametextbox").value),branch_name:String(document.getElementById("input_branch_nametextbox").value),user_type:null==Ce?void 0:Ce.value,auth_type:null==Me?void 0:Me.value};w(Y,e),G(!1)},cancelClick:function(){G(!1)}}),a.a.createElement("div",{className:"body user-scroll"},k?a.a.createElement("div",{className:"spinner_fullscreen_div"},a.a.createElement(_.a,null)):a.a.createElement("div",{className:"internal_table",style:{width:"97%",overflowY:"hidden",color:o.color_1}},a.a.createElement("table",{id:"internal_table"},a.a.createElement("thead",null,["first name","last name","email","image","photo url","dob","gender","address","dial code","phone","Company Name","Branch Name","user type","Login Method"].map((function(e,t){return a.a.createElement("th",{key:t},a.a.createElement("div",{className:"title_wrapper"},e.toUpperCase(),a.a.createElement("div",{className:"orderby_arrow"},a.a.createElement(E.a,{onexpand:function(){}}))))}))),a.a.createElement("tbody",null,S&&S.map((function(e,t){return a.a.createElement(a.a.Fragment,null,a.a.createElement("tr",{key:e.id},a.a.createElement("td",null,e.firstname),a.a.createElement("td",null,e.lastname),a.a.createElement("td",null,e.email),a.a.createElement("td",null,e.image),a.a.createElement("td",null," ",a.a.createElement("img",{className:"dashboard_list_logo",src:e.photo_url})),a.a.createElement("td",null,e.dob),a.a.createElement("td",null,e.gender),a.a.createElement("td",null,e.address),a.a.createElement("td",null,e.dial_code),a.a.createElement("td",null,e.phone),a.a.createElement("td",null,e.company_name),a.a.createElement("td",null,e.branch_name),a.a.createElement("td",null,e.user_type),a.a.createElement("td",null,e.auth_type),a.a.createElement("td",null,a.a.createElement("div",{className:"table_edit_delete_main"},a.a.createElement("div",{className:"table_edit_delete"},z?null:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{onClick:function(){var e;G(!0),e=t,S&&S.map((function(t,r){console.log("?????>>><><><> :",r,e),r===e&&(R(t),$(t.id),K(t.firstname),Z(t.lastname),re(t.email),le(t.image),ie(t.photo_url),de(t.dob),pe({value:t.gender}),ge(t.address),fe(t.dial_code),Ne(t.phone),we(t.company_name),Ae(t.branch_name),Te({value:t.user_type}),Pe({value:t.auth_type}))}))},className:"table_icon",src:d})))))))})))))),a.a.createElement(m.a,null))}},769:function(e,t,r){"use strict";var n=r(0),a=r.n(n),l=r(10),o=r.n(l),c=r(427),i={insert:"head",singleton:!1},u=(o()(c.a,i),c.a.locals,r(34),r(37)),s=r(23);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==r)return;var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(){Object(u.f)();var e=Object(s.a)(),t=e.Colour,r=e.colourObj,l=(e.setcolourObj,e.setColour,e.loadColour),o=d(Object(n.useState)("NORMAL"),2),c=o[0],i=o[1],m=d(Object(n.useState)(""),2),_=m[0],p=m[1],v=d(Object(n.useState)(""),2),b=v[0],g=v[1],y=d(Object(n.useState)(""),2),E=y[0],f=y[1],h=d(Object(n.useState)(""),2),x=h[0],N=h[1];return Object(n.useEffect)((function(){var e=JSON.parse(String(localStorage.getItem("UserDetails")));if(null!==e){var r=e.user_type,n=e.photo_url,a=e.firstname,o=e.lastname,c=e.email;i(r),p(n),g(a),f(o),N(c)}t||l()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"main"},a.a.createElement("div",{className:"body"},a.a.createElement("div",{className:"user_main_container",style:{backgroundColor:r.color_6}},a.a.createElement("div",{className:"user_container"},a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container1",style:{color:r.color_5}},a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:r.color_21}},"My Profile")),a.a.createElement("img",{className:"user_profile_picture",src:_}),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:r.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"User Type:"),a.a.createElement("div",{className:"user_data",style:{color:r.color_1}},c)),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Name:"),a.a.createElement("div",{className:"user_data",style:{color:r.color_1}},b," ",E)),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"E-mail:"),a.a.createElement("div",{className:"user_data",style:{color:r.color_1}},x)))),a.a.createElement("div",{className:"wrap-flex"},a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container2",style:{color:r.color_5}},a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:r.color_21}},"Company")),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:r.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Company Name:")),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Branch Name:")))),a.a.createElement("div",{className:"user_warp"},a.a.createElement("div",{className:"user_sub_container2",style:{color:r.color_5}},a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_profile_text",style:{color:r.color_21}},"Project")),a.a.createElement("div",{className:"user_band band-margin",style:{backgroundColor:r.color_1}}),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Active Project:")),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Active Task:")),a.a.createElement("div",{className:"user_sub_details",style:{color:r.color_4}},a.a.createElement("div",{className:"user_details_text",style:{color:r.color_1}},"Project History:"))))))))))}}}]);