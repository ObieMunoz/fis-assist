(this.webpackJsonpfisassist=this.webpackJsonpfisassist||[]).push([[0],{102:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(19),i=s.n(c),r=(s(55),s(7)),j=s(6),l=s.p+"static/media/fis_logo.0308996f.svg",o=(s(56),s(4)),u=(s(57),s(0));function b(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)("/fis-assist"),i=Object(o.a)(c,2),r=i[0],l=i[1],b=Object(j.f)();b.listen((function(e){"/fis-assist"!==e.pathname&&"/phase1"!==e.pathname&&"/phase2"!==e.pathname&&"/phase3"!==e.pathname&&"/phase4"!==e.pathname||l(e.pathname)}));return Object(u.jsx)("div",{className:"searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===s?(a(""),b.push(r)):(a(""),b.push("/search?q=".concat(s)))},children:[Object(u.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(u.jsx)("input",{id:"search",type:"text",placeholder:"Search Assignments",onChange:function(e){return a(e.target.value)},value:s})]})})}function d(){return Object(u.jsx)("nav",{className:"navbar",children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:"logo",children:Object(u.jsx)("img",{src:l,alt:"logo"})}),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{}),Object(u.jsx)("li",{children:Object(u.jsx)(r.b,{to:"fis-assist/about",children:"About Us"})})]})]})})}var h=s.p+"static/media/dashboard_icon.bc800f3b.svg",O=function(e){var t=e.courses;return Object(u.jsx)("li",{children:Object(u.jsxs)(r.c,{exact:!0,to:"Prework"===t.title?"/fis-assist":"/fis-assist/phase".concat(t.title.slice(-1)),children:[Object(u.jsx)("img",{src:h,alt:"dashboard icon"}),Object(u.jsx)("span",{children:t.title})]})})},m=s(30),p=s.n(m),f=s(12),x=s(43),g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=Object(n.useState)(null),a=Object(o.a)(s,2),c=a[0],i=a[1],r=Object(n.useState)(!1),j=Object(o.a)(r,2),l=j[0],u=j[1],b=Object(n.useState)(null),d=Object(o.a)(b,2),h=d[0],O=d[1],m=Object(n.useState)(null),g=Object(o.a)(m,2),v=g[0],N=g[1],S=function(e){N({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(n.useEffect)((function(){var s=new AbortController,n=function(){var t=Object(x.a)(p.a.mark((function t(n){var a,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,fetch(e,Object(f.a)(Object(f.a)({},n),{},{signal:s.signal}));case 4:if((a=t.sent).ok){t.next=7;break}throw new Error(a.statusText);case 7:return t.next=9,a.json();case 9:c=t.sent,u(!1),i(c),O(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(u(!1),O("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&n(),"POST"===t&&v&&n(v),function(){s.abort()}}),[e,t,v]),{data:c,isPending:l,error:h,postData:S}},v=(s(68),s.p+"static/media/add_icon.376e9b6a.svg");function N(){var e=g("https://fis-assist.herokuapp.com/courses").data;return Object(u.jsx)("div",{className:"sidebar",children:Object(u.jsxs)("div",{className:"sidebar-content",children:[Object(u.jsx)("div",{className:"user",children:Object(u.jsx)("p",{children:"Hello Student"})}),Object(u.jsx)("nav",{className:"links",children:Object(u.jsxs)("ul",{children:[e&&e.map((function(e){return Object(u.jsx)(O,{courses:e},e.id)})),Object(u.jsx)("li",{children:Object(u.jsxs)(r.c,{to:"/fis-assist/create",children:[Object(u.jsx)("img",{src:v,alt:"add project icon"}),Object(u.jsx)("span",{children:"New Question"})]})})]})})]})})}var S=s(14),k=s(13),w=s.n(k);s(87);function A(){var e=Object(j.f)(),t=Object(n.useState)([]),s=Object(o.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)([]),r=Object(o.a)(i,2),l=r[0],b=r[1];Object(n.useEffect)((function(){!function(){var e=w.a.get("https://fis-assist.herokuapp.com/students"),t=w.a.get("https://fis-assist.herokuapp.com/assignments");w.a.all([e,t]).then(w.a.spread((function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var n=t[0].data,a=t[1].data;c(n),b(a)})))}()}),[]);var d=a.map((function(e){return{value:"".concat(e.id),label:"".concat(e.last_name,", ").concat(e.first_name)}})),h=l.map((function(e){return{value:"".concat(e.id),label:"".concat(e.title)}})),O=g("https://fis-assist.herokuapp.com/questions","POST"),m=O.postData,p=O.data,f=Object(n.useState)(""),x=Object(o.a)(f,2),v=x[0],N=x[1],k=Object(n.useState)(""),A=Object(o.a)(k,2),q=A[0],C=A[1],y=Object(n.useState)(""),P=Object(o.a)(y,2),E=P[0],_=P[1];return Object(n.useEffect)((function(){p&&e.push("/fis-assist")}),[p,e]),Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h2",{className:"page-title",children:"Submit a new Question:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({question:v,answer:null,studentId:q,assignmentId:E})},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Question:"}),Object(u.jsx)("input",{required:!0,name:"question",type:"text",onChange:function(e){return N(e.target.value)},value:v})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Student:"}),Object(u.jsx)(S.a,{className:"select",name:"student_id",onChange:function(e){return C(e)},value:q,options:d})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Assignment:"}),Object(u.jsx)(S.a,{className:"select",name:"assignment_id",onChange:function(e){return _(e)},value:E,options:h})]}),Object(u.jsx)("button",{className:"btn",children:"Add Question"})]}),Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("h2",{className:"page-title",children:"Name not appearing?"}),Object(u.jsx)("button",{className:"new-student",onClick:function(){return e.push("fis-assist/newstudent")},children:"Create New Student"})]})]})}var q=function(e){var t,s,n,a;return Object(u.jsx)("p",{id:"question-count",children:Object(u.jsx)("em",{children:(null===e||void 0===e||null===(t=e.questions)||void 0===t?void 0:t.length)>0?(null===e||void 0===e||null===(s=e.questions)||void 0===s?void 0:s.length)>1?"".concat(null===e||void 0===e||null===(n=e.questions)||void 0===n?void 0:n.length," questions"):"".concat(null===e||void 0===e||null===(a=e.questions)||void 0===a?void 0:a.length," question"):"No questions"})})},C=(s(102),function(e){var t=e.assignments;return Object(u.jsx)("div",{className:"assignment-list",children:t.map((function(e){return Object(u.jsxs)(r.b,{to:"/fis-assist/details/".concat(e.id),children:[Object(u.jsxs)("h4",{className:"page-title",children:[e.title,q(e)]}),Object(u.jsx)("p",{id:"assignment-description",children:e.description})]},e.id)}))})});s(18);function y(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://fis-assist.herokuapp.com/course/1/assignments").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"page-title",children:"Prework Assignments"}),0===s.length?Object(u.jsx)("p",{className:"no-assignments",children:"No Assignments Uploaded - Please Check Again Soon"}):Object(u.jsx)(C,{assignments:s})]})}var P=s(114);function E(e){var t=e.questions.map((function(e){return Object(u.jsxs)("div",{className:"assignment-summary",children:[Object(u.jsx)("h2",{className:"page-title",children:e.question}),null===e.answer?Object(u.jsx)("p",{children:"No answer provided"}):Object(u.jsx)(P.a,{className:"desc",children:e.answer.split("\n").map((function(e){return e.trim()})).join("\n")})]},e.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Assignment Questions"}),0===t.length?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:Object(u.jsx)("em",{children:"No questions have been added to this assignment"})}),Object(u.jsx)(r.b,{to:"/create",className:"question-btn",children:"Ask a Question!"})]}):t]})}s(105);function _(){var e=Object(j.h)().id,t=g("https://fis-assist.herokuapp.com/assignment/".concat(e,"/questions")).data;return Object(u.jsx)("div",{className:"assignment-details",children:t&&Object(u.jsx)(E,{questions:t})})}var D=function(e){var t=e.about;return Object(u.jsx)("div",{className:"assignment-list",children:t.map((function(e){return Object(u.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"contact-card",children:[Object(u.jsx)("h1",{children:e.name}),Object(u.jsx)("h3",{children:e.title}),Object(u.jsx)("p",{children:e.email}),Object(u.jsx)("b",{}),Object(u.jsx)("p",{children:e.bio})]},e.id)}))})},T=(s(106),function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("h3",{children:["The FIS Assistance Program was developed by members of the 101121-East cohort as part of our Phase 3 Project. We wish you luck on your Flatiron Journey - please don't hesitate to reach out to us with questions!"," "]}),Object(u.jsx)(D,{about:[{id:1,name:"Obie Munoz",title:"Software Engineer",email:"obiemunozjr@gmail.com",bio:"code sensei (Obie Wan)",link:"https://www.linkedin.com/in/obedmunozjr/"},{id:2,name:"Rodrigo Alba",title:"Software Engineer",email:"rodrigoqalba@gmail.com",bio:"lifestyle blogger and data wizard",link:"https://www.linkedin.com/in/rodrigoqalba/"},{id:3,name:"Joshua Hawks",title:"Software Engineer",email:"jdhawks@gmail.com",bio:"enjoys making things shiny",link:"https://www.linkedin.com/in/joshuahawks1"}]}),Object(u.jsx)("a",{className:"github-issue",href:"https://github.com/ObieMunoz/fis-assist/issues/new",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)("div",{children:"Report a Problem"})})]})}),Q=(s(107),function(){var e=Object(j.g)().search,t=new URLSearchParams(e).get("q"),s=g("https://fis-assist.herokuapp.com/assignments?q="+t),n=s.error,a=s.isPending,c=s.data;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h2",{className:"page-title",children:['Assignments including "',t,'"']}),n&&Object(u.jsx)("p",{className:"error",children:n}),a&&Object(u.jsx)("p",{className:"loading",children:"Loading... "}),c&&Object(u.jsx)(C,{assignments:c})]})}),U=function(){var e=Object(j.f)(),t=Object(n.useState)(""),s=Object(o.a)(t,2),a=s[0],c=s[1],i=Object(n.useState)(""),r=Object(o.a)(i,2),l=r[0],b=r[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],m=h[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),x=f[0],v=f[1],N=g("https://fis-assist.herokuapp.com/students","POST"),S=N.postData,k=N.data;return Object(n.useEffect)((function(){k&&e.push("/fis-assist/create")}),[k,e]),Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h2",{className:"page-title",children:"Create a new Student:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S({first_name:a,last_name:l,email:O,slack_username:x})},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"First Name:"}),Object(u.jsx)("input",{required:!0,name:"first_name",type:"text",onChange:function(e){return c(e.target.value)},value:a})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Last Name:"}),Object(u.jsx)("input",{required:!0,name:"last_name",type:"text",onChange:function(e){return b(e.target.value)},value:l})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Email:"}),Object(u.jsx)("input",{required:!0,name:"email",type:"email",onChange:function(e){return m(e.target.value)},value:O})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Slack Username:"}),Object(u.jsx)("input",{required:!0,name:"slack_username",type:"text",onChange:function(e){return v(e.target.value)},value:x})]}),Object(u.jsx)("button",{className:"btn",children:"Add Student"})]})]})},J=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://fis-assist.herokuapp.com/course/2/assignments").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"page-title",children:"Phase 1 Assignments"}),0===s.length?Object(u.jsx)("p",{className:"no-assignments",children:"No Assignments Uploaded - Please Check Again Soon"}):Object(u.jsx)(C,{assignments:s})]})},M=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://fis-assist.herokuapp.com/course/3/assignments").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsx)("div",{children:Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"page-title",children:"Phase 2 Assignments"}),0===s.length?Object(u.jsx)("p",{className:"no-assignments",children:"No Assignments Uploaded - Please Check Again Soon"}):Object(u.jsx)(C,{assignments:s})]})})},z=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://fis-assist.herokuapp.com/course/4/assignments").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"page-title",children:"Phase 3 Assignments"}),0===s.length?Object(u.jsx)("p",{className:"no-assignments",children:"No Assignments Uploaded - Please Check Again Soon"}):Object(u.jsx)(C,{assignments:s})]})},F=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("https://fis-assist.herokuapp.com/course/5/assignments").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:"page-title",children:"Phase 4 Assignments"}),0===s.length?Object(u.jsx)("p",{className:"no-assignments",children:"No Assignments Uploaded - Please Check Again Soon"}):Object(u.jsx)(C,{assignments:s})]})},I=function(e){var t=e.mods.map((function(e){return{value:"".concat(e.id),label:"".concat(e.title)}})),s=Object(n.useState)(""),a=Object(o.a)(s,2),c=a[0],i=a[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),l=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],m=h[1],p=g("https://fis-assist.herokuapp.com/assignments","POST"),f=p.postData,x=p.data;return Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h1",{children:"Create a new Assignment:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f({title:c,description:l,mod_id:O}),null!==x&&(i(""),b(""),m(""))},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Title:"}),Object(u.jsx)("input",{required:!0,name:"title",type:"text",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Description:"}),Object(u.jsx)("input",{required:!0,name:"description",type:"text",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Mod:"}),Object(u.jsx)(S.a,{className:"select",name:"mod_id",onChange:function(e){return m(e)},value:O,options:t})]}),Object(u.jsx)("button",{className:"btn",children:"Add Assignment"})]})]})},G=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),r=i[0],j=i[1],l=g("https://fis-assist.herokuapp.com/courses","POST"),b=l.postData,d=l.data;return Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h1",{children:"Create a new Course:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({title:s,description:r}),null!==d&&(a(""),j(""))},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Title:"}),Object(u.jsx)("input",{required:!0,name:"title",type:"text",value:s,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Description:"}),Object(u.jsx)("input",{required:!0,name:"description",type:"text",value:r,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsx)("button",{className:"btn",children:"Add Course"})]})]})},L=function(e){var t=e.courses.map((function(e){return{value:"".concat(e.id),label:"".concat(e.title)}})),s=Object(n.useState)(""),a=Object(o.a)(s,2),c=a[0],i=a[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),l=j[0],b=j[1],d=g("https://fis-assist.herokuapp.com/mods","POST"),h=d.postData,O=d.data;return Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h1",{children:"Create a new Mod:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({title:c,course_id:l}),null!==O&&(i(""),b(""))},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Title:"}),Object(u.jsx)("input",{required:!0,name:"title",type:"text",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Course:"}),Object(u.jsx)(S.a,{className:"select",name:"mod_id",onChange:function(e){return b(e)},value:l,options:t})]}),Object(u.jsx)("button",{className:"btn",children:"Add Mod"})]})]})},R=function(e){var t=e.assignments,s=Object(n.useState)(""),a=Object(o.a)(s,2),c=a[0],i=a[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),l=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),O=h[0],m=h[1],p=t.map((function(e){return{value:"".concat(e.id),label:"".concat(e.title)}})),f=g("https://fis-assist.herokuapp.com/questions","POST"),x=f.postData,v=f.data;return Object(u.jsxs)("div",{className:"create-form",children:[Object(u.jsx)("h1",{children:"Create a new Question:"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x({question:c,answer:l,assignmentId:O}),null!==v&&(i(""),b(""))},children:[Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Question:"}),Object(u.jsx)("input",{required:!0,name:"title",type:"text",value:c,onChange:function(e){return i(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Answer:"}),Object(u.jsx)("textarea",{required:!0,name:"description",type:"text",value:l,onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)("label",{children:[Object(u.jsx)("span",{children:"Assignment:"}),Object(u.jsx)(S.a,{className:"select",name:"assignment_id",onChange:function(e){return m(e)},value:O,options:p})]}),Object(u.jsx)("button",{className:"btn",children:"Add Question"})]})]})},W=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),s=t[0],a=t[1],c=Object(n.useState)([]),i=Object(o.a)(c,2),r=i[0],j=i[1],l=Object(n.useState)([]),b=Object(o.a)(l,2),d=b[0],h=b[1];return Object(n.useEffect)((function(){!function(){var e=w.a.get("https://fis-assist.herokuapp.com/courses"),t=w.a.get("https://fis-assist.herokuapp.com/mods"),s=w.a.get("https://fis-assist.herokuapp.com/assignments");w.a.all([e,t,s]).then(w.a.spread((function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];var n=t[0].data,c=t[1].data,i=t[2].data;a(n),j(c),h(i)})))}()}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Dev Tools"}),Object(u.jsx)(G,{}),Object(u.jsx)(L,{courses:s}),Object(u.jsx)(I,{mods:r}),Object(u.jsx)(R,{assignments:d})]})};s(108);var B=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)(N,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/fis-assist",children:Object(u.jsx)(y,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/phase1",children:Object(u.jsx)(J,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/phase2",children:Object(u.jsx)(M,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/phase3",children:Object(u.jsx)(z,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/phase4",children:Object(u.jsx)(F,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/create",children:Object(u.jsx)(A,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/details/:id",children:Object(u.jsx)(_,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/search",children:Object(u.jsx)(Q,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/about",children:Object(u.jsx)(T,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/newstudent",children:Object(u.jsx)(U,{})}),Object(u.jsx)(j.a,{path:"/fis-assist/flpopo",children:Object(u.jsx)(W,{})})]})]})]})})};s(48).a.initialize("G-JJCB5XWQM3"),i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root"))},18:function(e,t,s){},55:function(e,t,s){},56:function(e,t,s){},57:function(e,t,s){},68:function(e,t,s){},87:function(e,t,s){}},[[109,1,2]]]);
//# sourceMappingURL=main.1be7422f.chunk.js.map