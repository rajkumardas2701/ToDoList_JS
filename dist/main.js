(()=>{"use strict";const e=[{name:"Default"}],t=[{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"}],n=()=>{const n=()=>{const e=document.getElementById("app-body"),t=document.createElement("div");t.setAttribute("id","project-section"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","project-header"),t.appendChild(n);const o=document.createElement("h2");n.appendChild(o),o.innerHTML="Projects";const d=document.createElement("button");n.appendChild(d),d.setAttribute("id","add-project-btn"),d.innerHTML="Add Project";const c=document.createElement("div");return c.setAttribute("id","project-list"),t.appendChild(c),{displayProjects:e=>{for(let t=0;t<e.length;t+=1){const n=document.createElement("li");n.setAttribute("class","project"),n.innerHTML=`${e[t].name}`,c.appendChild(n)}}}},o=e=>{const t=document.getElementById("project-list");if(t){const n=document.createElement("li");n.setAttribute("class","project"),n.innerHTML=`${e}`,t.appendChild(n)}else n().displayProjects(e)},d=()=>{if(document.getElementById("new-project-form"))document.querySelector("#new-project-form").classList.remove("hide-new-project-form");else{const e=document.getElementById("content"),t=document.createElement("form");t.setAttribute("id","new-project-form"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","project-attr"),t.appendChild(n);const o=document.createElement("label");o.setAttribute("class","form-label"),o.innerHTML="Project Name: ",n.appendChild(o);const d=document.createElement("input");d.setAttribute("id","form-input"),n.appendChild(d);const c=document.createElement("button");c.setAttribute("id","project-submit"),c.innerHTML="Submit",t.appendChild(c)}document.getElementById("project-submit")&&document.getElementById("project-submit").addEventListener("click",(t=>{var n;t.preventDefault(),n=document.getElementById("form-input").value,e.push({name:n}),o(document.getElementById("form-input").value),document.getElementById("new-project-form").remove()}))},c=()=>{document.getElementById("todo-submit").addEventListener("click",(e=>{e.preventDefault();const n={title:e.target.form[0].value,description:e.target.form[1].value,dueDate:e.target.form[2].value,priority:e.target.form[3].value,notes:e.target.form[4].value};t.push(n),(e=>{const t=document.getElementById("todos-list"),n=document.createElement("div");n.setAttribute("class","to-do-obj");const o=document.createElement("label");o.innerHTML=`<b>Title: </b>${e.title}`,n.appendChild(o);const d=document.createElement("label");d.innerHTML=`<b>Description: </b>${e.description}`,n.appendChild(d);const c=document.createElement("label");c.innerHTML=`<b>Due Date: </b>${e.dueDate}`,n.appendChild(c);const r=document.createElement("label");r.innerHTML=`<b>Priority: </b>${e.priority}`,r.style.color="High"===e.priority?"red":"Medium"===e.priority?"orange":"rgb(7, 173, 118)",n.appendChild(r);const i=document.createElement("label");i.innerHTML=`<b>Note: </b>${e.notes}`,n.appendChild(i),t.appendChild(n)})(n)}))},r=e=>{e.preventDefault();const t=document.getElementById("app-body"),n=document.createElement("form");n.setAttribute("id","to-do-form-sec"),t.appendChild(n);const o=document.createElement("h4");o.setAttribute("id","todo-header"),o.innerHTML="Create a Task",n.appendChild(o);const d=document.createElement("div");d.setAttribute("class","form-elements"),n.appendChild(d);const r=document.createElement("label");r.setAttribute("class","todo-form-label"),r.innerHTML="Title",d.appendChild(r);const i=document.createElement("input");i.setAttribute("class","form-text"),d.appendChild(i);const l=document.createElement("div");l.setAttribute("class","form-elements"),n.appendChild(l);const a=document.createElement("label");a.setAttribute("class","todo-form-label"),a.innerHTML="Description",l.appendChild(a);const s=document.createElement("textarea");s.setAttribute("class","form-text"),l.appendChild(s);const m=document.createElement("div");m.setAttribute("class","form-elements"),n.appendChild(m);const p=document.createElement("label");p.setAttribute("class","todo-form-label"),p.innerHTML="Due Date",m.appendChild(p);const u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("class","form-text"),m.appendChild(u);const b=document.createElement("div");b.setAttribute("class","form-elements"),n.appendChild(b);const E=document.createElement("label");E.setAttribute("class","todo-form-label"),E.innerHTML="Priority",b.appendChild(E);const h=document.createElement("select");h.setAttribute("class","priority"),b.appendChild(h);const C=document.createElement("option");C.setAttribute("value","High"),h.appendChild(C),C.innerHTML="High";const y=document.createElement("option");y.setAttribute("value","Medium"),h.appendChild(y),y.innerHTML="Medium";const A=document.createElement("option");A.setAttribute("value","Low"),h.appendChild(A),A.innerHTML="Low";const T=document.createElement("div");T.setAttribute("class","form-elements"),n.appendChild(T);const v=document.createElement("label");v.setAttribute("class","todo-form-label"),v.innerHTML="Notes",T.appendChild(v);const f=document.createElement("textarea");f.setAttribute("class","form-text"),T.appendChild(f);const L=document.createElement("button");L.setAttribute("id","todo-submit"),L.innerHTML="Submit",n.appendChild(L),document.querySelector("#todos-section").classList.add("todo-add-border"),c()};return{navbar:()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","navbar"),e.appendChild(t);const n=document.createElement("h1");n.setAttribute("id","nav-text"),t.appendChild(n),n.innerHTML="To-Do List App"},proj:n,addNewProjectForm:()=>{document.getElementById("add-project-btn").addEventListener("click",d)},displayProjects:o,todos:()=>{const e=document.getElementById("app-body"),t=document.createElement("div");t.setAttribute("id","todos-section"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","todos-header"),t.appendChild(n);const o=document.createElement("h2");n.appendChild(o),o.innerHTML="To-Dos";const d=document.createElement("button");n.appendChild(d),d.setAttribute("id","add-todos-btn"),d.innerHTML="Add Task";const c=document.createElement("div");c.setAttribute("id","todos-list"),t.appendChild(c)},createAppBody:()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","app-body"),e.appendChild(t)},addNewToDoForm:()=>{document.getElementById("add-todos-btn").addEventListener("click",r)},todoSubmitBtn:c,displayTodos:()=>{const e=document.getElementById("todos-list");for(let n=0;n<t.length;n+=1){const o=document.createElement("div");o.setAttribute("class","to-do-obj");const d=document.createElement("label");d.innerHTML=`<b>Title: </b>${t[n].title}`,o.appendChild(d);const c=document.createElement("label");c.innerHTML=`<b>Description: </b>${t[n].description}`,o.appendChild(c);const r=document.createElement("label");r.innerHTML=`<b>Due Date: </b>${t[n].dueDate}`,o.appendChild(r);const i=document.createElement("label");i.innerHTML=`<b>Priority: </b>${t[n].priority}`,"High"===t[n].priority?i.style.color="red":"Medium"===t[n].priority?i.style.color="orange":i.style.color="rgb(7, 173, 118)",o.appendChild(i);const l=document.createElement("label");l.innerHTML=`<b>Note: </b>${t[n].notes}`,o.appendChild(l),e.appendChild(o)}}}};n().navbar(),n().createAppBody(),n().displayProjects(e),n().addNewProjectForm(),n().todos(),n().addNewToDoForm(),n().displayTodos()})();