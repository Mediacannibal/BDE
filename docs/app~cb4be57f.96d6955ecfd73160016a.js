(this.webpackJsonp=this.webpackJsonp||[]).push([[50],{444:function(e,a,n){"use strict";var t=n(8),r=n.n(t)()((function(e){return e[1]}));r.push([e.i,".welcome-user-wrap {\r\n  /* color: var(--color_4); */\r\n  display: flex;\r\n  align-self: flex-start;\r\n  padding: 0 1rem;\r\n  margin: calc(0.4vw + 1.2vh + 0.4vmin);\r\n}\r\n\r\n.welcome-name {\r\n  font-family: 'Google Sans', Roboto, Arial, sans-serif;\r\n  font-size: 2.6rem;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  letter-spacing: 0;\r\n  hyphens: auto;\r\n  word-break: break-word;\r\n  word-wrap: break-word;\r\n  text-transform: capitalize;\r\n}\r\n\r\n.home-welcome-description {\r\n  padding: 2rem;\r\n  display: flex;\r\n  gap: 10vw;\r\n}\r\n\r\n.home-item-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 4vw;\r\n  padding: 1.4rem;\r\n}\r\n\r\n.home-chart-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 8vw;\r\n  padding: 1.4rem;\r\n}\r\n\r\n.home-item {\r\n}\r\n\r\n.home-item-title {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #8493a5;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.home-item-title label {\r\n  margin: 0 0.7rem;\r\n}\r\n\r\n.home-item-title::before {\r\n  content: ' ';\r\n}\r\n\r\n.home-item-title::after {\r\n  content: ' ';\r\n}\r\n\r\n.home-item-title:after,\r\n.home-item-title:before {\r\n  flex: 1 1 auto;\r\n  border-top: 1px solid #dee2e6;\r\n}\r\n\r\n.home-item-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #8493a5;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 10px;\r\n}\r\n\r\n.home-payment-container {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\n\r\n.home-payment-wrap {\r\n  /* width: 100%; */\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n.home-payment-month-day {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.home-payment-color {\r\n  width: 10px;\r\n  height: 10px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.home-payment-h4 {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 7px;\r\n}\r\n\r\n.home-pie-chart {\r\n  width: 100%;\r\n  margin-top: 1rem;\r\n}\r\n\r\n/***********Stats Table************/\r\n\r\n.home-stats-table {\r\n  width: 100%;\r\n  margin-bottom: 1rem;\r\n  color: #8493a5;\r\n  background-color: transparent;\r\n}\r\n\r\n.home-stats-table tr {\r\n  background-color: transparent;\r\n}\r\n\r\n.home-stats-table td {\r\n  /* padding: 0.3rem; */\r\n}\r\n\r\n.home-stats-number {\r\n  width: 25px;\r\n  height: 10px;\r\n  border-radius: 40%;\r\n}\r\n\r\n@media (min-width: 320px) and (max-width: 425px) {\r\n  .welcome-user-wrap {\r\n    padding: 0vh;\r\n    margin: calc(0.2vw + 0.6vh + 0.2vmin);\r\n    align-self: center;\r\n  }\r\n  .welcome-name {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .home-item-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 4vw;\r\n    padding: 1.4rem;\r\n  }\r\n\r\n  .home-chart-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 8vw;\r\n    padding: 1.4rem;\r\n  }\r\n\r\n  .home-welcome-description {\r\n    padding: 2rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 10vw;\r\n  }\r\n}\r\n",""]),a.a=r},816:function(e,a,n){"use strict";var t=n(0),r=n.n(t),l=n(7),m=n.n(l),i=n(444),o={insert:"head",singleton:!1},c=(m()(i.a,o),i.a.locals,n(42),n(23)),s=n(849),d=n(38),p=n(110),h=n(32),u=n(76),v=n(14),E=(n(58),n(69),n(405)),y=n(204),f=n(2),g=(n(17),n(22));function w(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,r,l=[],m=!0,i=!1;try{for(n=n.call(e);!(m=(t=n.next()).done)&&(l.push(t.value),!a||l.length!==a);m=!0);}catch(e){i=!0,r=e}finally{try{m||null==n.return||n.return()}finally{if(i)throw r}}return l}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return N(e,a);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,a){(null==a||a>e.length)&&(a=e.length);for(var n=0,t=new Array(a);n<a;n++)t[n]=e[n];return t}a.a=function(e){var a,n,l=Object(v.a)(),m=l.Colour,i=l.colourObj,o=(l.setcolourObj,l.setColour,l.loadColour),N=Object(E.a)(),b=N.assignprojectField,x=N.loadassignprojectDetail,j=Object(y.a)(),O=j.assigntaskField,S=j.loadassigntaskDetail,A=(Object(c.f)(),w(Object(t.useState)(null===(a=self)||void 0===a?void 0:a.firstname),2)),P=A[0],k=(A[1],w(Object(t.useState)(null===(n=self)||void 0===n?void 0:n.lastname),2)),C=k[0],R=(k[1],w(Object(t.useState)(!1),2)),V=R[0],_=R[1],z=w(Object(t.useState)(!0),2),F=z[0],D=z[1],I=w(Object(t.useState)(!1),2),L=(I[0],I[1],Object(t.useRef)(!0),Object(g.a)().auth,w(Object(t.useState)(),2));L[0],L[1];Object(t.useEffect)((function(){u.a.pageview(window.location.pathname+window.location.search),e.setheader_options(M),m||o(),b||x(),O||S(),D(!1)}),[]);var M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"screen_header_element",onClick:function(){_(!0)}},r.a.createElement("div",null,r.a.createElement(s.a,null)),r.a.createElement("div",null,"Add Project")))};return r.a.createElement("div",{className:"main"},V&&r.a.createElement(p.a,{setPopup:function(){_(!1)}}),r.a.createElement("div",{className:"body"},F?r.a.createElement("div",{className:"spinner_fullscreen_div"},r.a.createElement(d.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"welcome-user-wrap"},r.a.createElement("div",{className:"welcome-name",style:{color:i.color_4}},"Welcome, ",P," ",C)),r.a.createElement("div",{className:"home-welcome-description"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("div",{className:"home-payment-month-day"},r.a.createElement("div",{className:"home-payment-color payment-color-2"}),r.a.createElement("div",null,"Auto Date Range")),r.a.createElement("h4",{className:"home-payment-h4"},"This Month",r.a.createElement("img",{className:"down-arrow-footer",src:f.p}))),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("div",{className:"home-payment-month-day"},r.a.createElement("div",{className:"home-payment-color payment-color-2"}),r.a.createElement("div",null,"Services")),r.a.createElement("h4",{className:"home-payment-h4"},"All",r.a.createElement("img",{className:"down-arrow-footer",src:f.p}))),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("div",{className:"home-payment-month-day"},r.a.createElement("div",{className:"home-payment-color payment-color-2"}),r.a.createElement("div",null,"Posts")),r.a.createElement("h4",{className:"home-payment-h4"},"All",r.a.createElement("img",{className:"down-arrow-footer",src:f.p})))),r.a.createElement("div",{className:"home-item-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"Average Lifetime Value")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h2",null,"$3,267")),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h4",null,"↑ $14"))),r.a.createElement("div",{className:"home-item-footer"},r.a.createElement("label",null,"Vs Previous 30 days")))),r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"Win Rate")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h2",null,"10.2%")),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h4",null,"↓ 0.4%"))),r.a.createElement("div",{className:"home-item-footer"},r.a.createElement("label",null,"Vs Previous 30 days")))),r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"Visitors to Lead Ratio")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h2",null,"92:1")),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h4",null,"↑ 14%"))),r.a.createElement("div",{className:"home-item-footer"},r.a.createElement("label",null,"Vs Previous 30 days")))),r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"Lead to Win Ratio")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h2",null,"5:1")),r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("h4",null,"↓ 2%"))),r.a.createElement("div",{className:"home-item-footer"},r.a.createElement("label",null,"Vs Previous 30 days"))))),r.a.createElement("div",{className:"home-chart-container"},r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"Goal Completion Rate")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("img",{className:"home-pie-chart",src:f.c}))))),r.a.createElement("div",null,r.a.createElement("div",{className:"home-item"},r.a.createElement("div",{className:"home-item-title"},r.a.createElement("label",null,"CPM Vs CPP")),r.a.createElement("div",{className:"home-payment-container"},r.a.createElement("div",{className:"home-payment-wrap"},r.a.createElement("img",{className:"home-pie-chart",src:f.P})))))))),r.a.createElement(h.a,null))}}}]);