(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{27:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(21),a=n.n(s),i=(n(27),n(12)),o=n(10),l=n(22),j=n.n(l),u={getEmployees:function(){return j.a.get("https://randomuser.me/api/?results=5&nat=us")}},d=n(52),b=n(53),h=n(0),f=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{fluid:!0,children:Object(h.jsx)(b.a,{fluid:!0,children:Object(h.jsx)("h1",{className:"display-3",children:"Employee Directory"})})})})};var m=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(o.a)(s,2),l=a[0],j=a[1],d=Object(c.useState)(!0),b=Object(o.a)(d,2),m=b[0],O=b[1];return Object(c.useEffect)((function(){u.getEmployees().then((function(e){console.log(e.data.results),r(e.data.results)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)(f,{}),Object(h.jsxs)("div",{class:"form-row justify-content-center",children:[Object(h.jsx)("input",{style:{width:"50%",margin:15},value:l,onChange:function(e){return j(e.target.value)},placeholder:"Search for an Employee"}),Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("table",{className:"table",children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Image"}),Object(h.jsx)("th",{onClick:function(){var e=Object(i.a)(n);e.sort((function(e,t){var n=e.name.first.toUpperCase(),c=t.name.first.toUpperCase();return n<c?-1:n>c?1:0})),m?(e.sort((function(e,t){var n=e.name.first.toUpperCase(),c=t.name.first.toUpperCase();return n<c?1:n>c?-1:0})),O(!1)):(e.sort((function(e,t){var n=e.name.first.toUpperCase(),c=t.name.first.toUpperCase();return n<c?-1:n>c?1:0})),O(!0)),r(e)},children:"First Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{onClick:function(){var e=Object(i.a)(n);m?(e.sort((function(e,t){return e.dob.age-t.dob.age})),O(!1)):(e.sort((function(e,t){return t.dob.age-e.dob.age})),O(!0)),r(e)},children:"Age"}),Object(h.jsx)("th",{children:"Phone number"})]}),n.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(l)})).map((function(e,t){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsx)("img",{src:e.picture.medium,alt:"employee portrait"})}),Object(h.jsx)("td",{children:e.name.first}),Object(h.jsx)("td",{children:e.name.last}),Object(h.jsx)("td",{children:e.dob.age}),Object(h.jsx)("td",{children:e.cell})]},t)}))]})})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(49);a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root")),O()}},[[50,1,2]]]);
//# sourceMappingURL=main.686115ab.chunk.js.map