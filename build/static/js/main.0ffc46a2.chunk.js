(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var s=c(1),l=c(7),i=c.n(l),a=c(0);var n=function(){return Object(a.jsxs)("header",{className:"fx fx_sb fx_m",children:[Object(a.jsx)("a",{href:"#",className:"logo_app",children:"AB Test Real"}),Object(a.jsx)("i",{className:"material-icons logout",title:"Exit to App",children:"exit_to_app"})]})};var j=function(){return Object(a.jsxs)("aside",{children:[Object(a.jsxs)("div",{className:"form_group",children:[Object(a.jsx)("h1",{className:"list_title",children:"list1 title"}),Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"})]})]}),Object(a.jsxs)("div",{className:"form_group",children:[Object(a.jsx)("h1",{className:"list_title",children:"list2 title"}),Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"})]})]}),Object(a.jsxs)("div",{className:"form_group",children:[Object(a.jsx)("h1",{className:"list_title",children:"list3 title"}),Object(a.jsxs)("ul",{className:"list",children:[Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"}),Object(a.jsx)("li",{children:"item link"})]})]})]})},r=c(8),b=c(5),d=c(2);var O=function(e){var t=Object(s.useState)({userID:Date.now(),reg_date:(new Date).toISOString().slice(0,10),last_activity:(new Date).toISOString().slice(0,10)}),c=Object(b.a)(t,2),l=c[0],i=c[1];return Object(s.useEffect)((function(){console.log(l)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{children:"Add new user"}),Object(a.jsxs)("form",{className:"col4",onSubmit:function(t){t.preventDefault(),e.save(Object(d.a)({},l))},children:[Object(a.jsx)("div",{className:"form_group",children:Object(a.jsxs)("label",{children:["User ID:",Object(a.jsx)("input",{type:"text",className:"form_input",defaultValue:Date.now(),onChange:function(e){return i(Object(d.a)(Object(d.a)({},l),{},{userID:e.target.value}))}})]})}),Object(a.jsx)("div",{className:"form_group",children:Object(a.jsxs)("label",{children:["Date Registration:",Object(a.jsx)("input",{type:"date",className:"form_input",defaultValue:(new Date).toISOString().slice(0,10),onChange:function(e){return i(Object(d.a)(Object(d.a)({},l),{},{reg_date:e.target.value}))}})]})}),Object(a.jsx)("div",{className:"form_group",children:Object(a.jsxs)("label",{children:["Date Last Activity:",Object(a.jsx)("input",{type:"date",className:"form_input",defaultValue:(new Date).toISOString().slice(0,10),onChange:function(e){return i(Object(d.a)(Object(d.a)({},l),{},{last_activity:e.target.value}))}})]})}),Object(a.jsx)("div",{className:"form_group",children:Object(a.jsx)("button",{className:"btn btn_blue",children:"Save"})})]})]})};var o=function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"table col6",children:[Object(a.jsxs)("div",{className:"t_row fx",children:[Object(a.jsx)("div",{className:"cell col2",children:Object(a.jsx)("strong",{children:"User ID"})}),Object(a.jsx)("div",{className:"cell col4",children:Object(a.jsx)("strong",{children:"Date Registration"})}),Object(a.jsx)("div",{className:"cell col4",children:Object(a.jsx)("strong",{children:"Date Last Activity"})})]}),e.data.map((function(e,t){return Object(a.jsxs)("div",{className:"t_row fx",children:[Object(a.jsx)("div",{className:"cell col2",children:Object(a.jsx)("p",{children:e.userID})}),Object(a.jsx)("div",{className:"cell col4",children:Object(a.jsx)("p",{children:e.reg_date})}),Object(a.jsx)("div",{className:"cell col4",children:Object(a.jsx)("p",{children:e.last_activity})})]},t)}))]})})};var x=function(){var e=Object(s.useState)([]),t=Object(b.a)(e,2),c=t[0],l=t[1];return Object(s.useEffect)((function(){console.log(c)})),Object(a.jsx)("main",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(O,{save:function(e){l([].concat(Object(r.a)(c),[e]))}}),Object(a.jsx)(o,{data:c})]})})};var h=function(){return Object(a.jsxs)("div",{className:"app_layout",children:[Object(a.jsx)(n,{}),Object(a.jsx)(j,{}),Object(a.jsx)(x,{})]})};i.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0ffc46a2.chunk.js.map