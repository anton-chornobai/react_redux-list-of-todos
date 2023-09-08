(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),s=c(4),r=c(16),l=c(7),i=c(14),o=c(15),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/REMOVE":return null;case"currentTodo/SET":return t.payload;default:return e}},b=c(5),h=function(e){return{type:"set/query",payload:e}},O=function(e){return{type:"change/status",payload:e}},f=function(){return{type:"clear"}},m={query:"",status:"all"},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set/query":return Object(b.a)(Object(b.a)({},e),{},{query:t.payload});case"change/status":return Object(b.a)(Object(b.a)({},e),{},{status:t.payload});case"clear":return Object(b.a)(Object(b.a)({},e),{},{query:""});default:return e}},p=c(9),v=function(e){return{type:"add/todos",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"add/todos"===t.type?Object(p.a)(t.payload):e},N=Object(l.combineReducers)({currentTodo:j,filter:x,todos:y}),g=Object(l.createStore)(N,Object(i.composeWithDevTools)(Object(l.applyMiddleware)(o.a))),T=c(0),w=(c(24),c(25),c(3));function k(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}s.b;var S=s.c,E=(c(26),c(1)),C=function(){return Object(E.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(E.jsx)("div",{className:"Loader__content"})})},q=function(){var e=Object(s.b)(),t=S((function(e){return e.currentTodo})),c=S((function(e){return e.filter.status})),n=S((function(e){return e.todos})),a=Object(T.useState)(!1),r=Object(w.a)(a,2),l=r[0],i=r[1],o=S((function(e){return e.filter.query})),u=Object(T.useState)(!1),j=Object(w.a)(u,2),b=j[0],h=j[1],O=Object(T.useMemo)((function(){var e=o?Object(p.a)(n).filter((function(e){return e.title.toLowerCase().includes(o)})):Object(p.a)(n);switch(c){case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}}),[o,n,c]);return Object(T.useEffect)((function(){i(!0),k("/todos").then((function(t){e(v(t))})).catch((function(){return h(!0)})).finally((function(){return i(!1)}))}),[]),Object(E.jsxs)(E.Fragment,{children:[!l&&!b&&0===O.length&&Object(E.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),l&&!b&&Object(E.jsx)(C,{}),!l&&!b&&O.length>0&&Object(E.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{children:"#"}),Object(E.jsx)("th",{children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("th",{children:"Title"}),Object(E.jsx)("th",{children:" "})]})}),Object(E.jsx)("tbody",{children:O.map((function(c){return Object(E.jsxs)("tr",{"data-cy":"todo",children:[Object(E.jsx)("td",{className:"is-vcentered",children:c.id}),Object(E.jsx)("td",{className:"is-vcentered",children:c.completed&&Object(E.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(E.jsx)("i",{className:"fas fa-check"})})}),Object(E.jsx)("td",{className:"is-vcentered is-expanded",children:Object(E.jsx)("p",{className:c.completed?"has-text-success":"has-text-danger",children:c.title})}),Object(E.jsx)("td",{className:"has-text-right is-vcentered",children:Object(E.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(d(t))}(c)},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:c.id===(null===t||void 0===t?void 0:t.id)?"far fa-eye-slash":"far fa-eye"})})})})]},c.id)}))})]})]})},_=function(){var e=S((function(e){return e.filter.query})),t=Object(s.b)();return Object(E.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(E.jsx)("p",{className:"control",children:Object(E.jsx)("span",{className:"select",children:Object(E.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){var c=e.currentTarget.value;t(O(c))},children:[Object(E.jsx)("option",{value:"all",children:"All"}),Object(E.jsx)("option",{value:"active",children:"Active"}),Object(E.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(E.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(E.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:e,onChange:function(e){t(h(e.currentTarget.value.toLowerCase()))}}),Object(E.jsx)("span",{className:"icon is-left",children:Object(E.jsx)("i",{className:"fas fa-magnifying-glass"})}),e&&Object(E.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(E.jsx)("button",{"aria-label":"clear","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){t(f())}})})]})]})},L=function(){var e=Object(s.b)(),t=S((function(e){return e.currentTodo})),c=Object(T.useState)(!0),n=Object(w.a)(c,2),a=n[0],r=n[1],l=Object(T.useState)(!1),i=Object(w.a)(l,2),o=i[0],d=i[1],j=Object(T.useState)(null),b=Object(w.a)(j,2),h=b[0],O=b[1];Object(T.useEffect)((function(){var e;r(!0),t&&(e=t.userId,k("/users/".concat(e))).then(O).catch((function(){return d(!0)})).finally((function(){return r(!1)}))}),[]);return Object(E.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(E.jsx)("div",{className:"modal-background"}),a&&!o&&Object(E.jsx)(C,{}),!a&&!o&&t&&Object(E.jsxs)("div",{className:"modal-card",children:[Object(E.jsxs)("header",{className:"modal-card-head",children:[Object(E.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",t.id]}),Object(E.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(u())}})]}),Object(E.jsxs)("div",{className:"modal-card-body",children:[Object(E.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(E.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(E.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(E.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(E.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]})]})},M=function(){var e=S((function(e){return e.currentTodo}));return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"section",children:Object(E.jsx)("div",{className:"container",children:Object(E.jsxs)("div",{className:"box",children:[Object(E.jsx)("h1",{className:"title",children:"Todos:"}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(_,{})}),Object(E.jsx)("div",{className:"block",children:Object(E.jsx)(q,{})})]})})}),e&&Object(E.jsx)(L,{})]})},B=function(){return Object(E.jsx)(s.a,{store:g,children:Object(E.jsx)(r.a,{children:Object(E.jsx)(M,{})})})};a.a.render(Object(E.jsx)(B,{}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.5761fce5.chunk.js.map