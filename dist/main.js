(()=>{"use strict";const e=[{name:"Default"}],t=[{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"siudciushdic",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"},{title:"First",description:"Test Desc",dueDate:"2020-12-04",priority:"Low",notes:"Notes"}],n=()=>{const n=()=>{const e=document.getElementById("app-body"),t=document.createElement("div");t.setAttribute("id","project-section"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","project-header"),t.appendChild(n);const o=document.createElement("h2");n.appendChild(o),o.innerHTML="Projects";const d=document.createElement("button");n.appendChild(d),d.setAttribute("id","add-project-btn"),d.innerHTML="Add Project";const i=document.createElement("div");return i.setAttribute("id","project-list"),t.appendChild(i),{displayProjects:e=>{for(let t=0;t<e.length;t+=1){const n=document.createElement("li");n.setAttribute("class","project"),n.innerHTML=`${e[t].name}`,i.appendChild(n)}}}},o=e=>{const t=document.getElementById("project-list");if(t){const n=document.createElement("li");n.setAttribute("class","project"),n.innerHTML=`${e}`,t.appendChild(n)}else n().displayProjects(e)},d=()=>{if(document.getElementById("new-project-form"))document.querySelector("#new-project-form").classList.remove("hide-new-project-form");else{const e=document.getElementById("content"),n=document.createElement("form");n.setAttribute("id","new-project-form"),e.appendChild(n);const o=document.createElement("div");o.setAttribute("class","project-attr"),n.appendChild(o);const d=document.createElement("label");d.setAttribute("class","form-label"),d.innerHTML="Project Name: ",o.appendChild(d);const i=document.createElement("input");i.setAttribute("id","form-input"),o.appendChild(i);const c=document.createElement("div");c.setAttribute("class","todo-sec"),n.appendChild(c);for(let e=0;e<t.length;e+=1){const n=document.createElement("div");n.setAttribute("class","todo-item"),c.appendChild(n);const o=document.createElement("label");o.setAttribute("class","todo-label"),o.innerHTML=`${t[e].title}`,n.appendChild(o);const d=document.createElement("input");d.setAttribute("type","checkbox"),n.appendChild(d)}const r=document.createElement("button");r.setAttribute("id","project-submit"),r.innerHTML="Submit",n.appendChild(r)}document.getElementById("project-submit")&&document.getElementById("project-submit").addEventListener("click",(n=>{n.preventDefault();const d=[];for(let e=0;e<t.length;e+=1)n.target.form[e+1].checked&&d.push(t[e]);((t,n=[])=>{e.push({name:t,todo:n})})(document.getElementById("form-input").value,d),o(document.getElementById("form-input").value),document.getElementById("new-project-form").remove()}))},i=()=>{document.getElementById("todo-submit").addEventListener("click",(e=>{e.preventDefault();const n={title:e.target.form[0].value,description:e.target.form[1].value,dueDate:e.target.form[2].value,priority:e.target.form[3].value,notes:e.target.form[4].value};t.push(n),(e=>{const t=document.getElementById("todos-list"),n=document.createElement("div");n.setAttribute("class","to-do-obj");const o=document.createElement("label");o.innerHTML=`<b>Title: </b>${e.title}`,n.appendChild(o);const d=document.createElement("label");d.innerHTML=`<b>Description: </b>${e.description}`,n.appendChild(d);const i=document.createElement("label");i.innerHTML=`<b>Due Date: </b>${e.dueDate}`,n.appendChild(i);const c=document.createElement("label");c.innerHTML=`<b>Priority: </b>${e.priority}`,c.style.color="High"===e.priority?"red":"Medium"===e.priority?"orange":"rgb(7, 173, 118)",n.appendChild(c);const r=document.createElement("label");r.innerHTML=`<b>Note: </b>${e.notes}`,n.appendChild(r),t.appendChild(n)})(n),document.getElementById("to-do-form-sec").remove()}))},c=e=>{e.preventDefault();const t=document.getElementById("app-body"),n=document.createElement("form");n.setAttribute("id","to-do-form-sec"),t.appendChild(n);const o=document.createElement("h4");o.setAttribute("id","todo-header"),o.innerHTML="Create a Task",n.appendChild(o);const d=document.createElement("div");d.setAttribute("class","form-elements"),n.appendChild(d);const c=document.createElement("label");c.setAttribute("class","todo-form-label"),c.innerHTML="Title",d.appendChild(c);const r=document.createElement("input");r.setAttribute("class","form-text"),d.appendChild(r);const s=document.createElement("div");s.setAttribute("class","form-elements"),n.appendChild(s);const l=document.createElement("label");l.setAttribute("class","todo-form-label"),l.innerHTML="Description",s.appendChild(l);const a=document.createElement("textarea");a.setAttribute("class","form-text"),s.appendChild(a);const m=document.createElement("div");m.setAttribute("class","form-elements"),n.appendChild(m);const p=document.createElement("label");p.setAttribute("class","todo-form-label"),p.innerHTML="Due Date",m.appendChild(p);const u=document.createElement("input");u.setAttribute("type","date"),u.setAttribute("class","form-text"),m.appendChild(u);const b=document.createElement("div");b.setAttribute("class","form-elements"),n.appendChild(b);const E=document.createElement("label");E.setAttribute("class","todo-form-label"),E.innerHTML="Priority",b.appendChild(E);const h=document.createElement("select");h.setAttribute("class","priority"),b.appendChild(h);const C=document.createElement("option");C.setAttribute("value","High"),h.appendChild(C),C.innerHTML="High";const y=document.createElement("option");y.setAttribute("value","Medium"),h.appendChild(y),y.innerHTML="Medium";const A=document.createElement("option");A.setAttribute("value","Low"),h.appendChild(A),A.innerHTML="Low";const T=document.createElement("div");T.setAttribute("class","form-elements"),n.appendChild(T);const L=document.createElement("label");L.setAttribute("class","todo-form-label"),L.innerHTML="Notes",T.appendChild(L);const f=document.createElement("textarea");f.setAttribute("class","form-text"),T.appendChild(f);const v=document.createElement("button");v.setAttribute("id","todo-submit"),v.innerHTML="Submit",n.appendChild(v),document.querySelector("#todos-section").classList.add("todo-add-border"),i()};return{navbar:()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("class","navbar"),e.appendChild(t);const n=document.createElement("h1");n.setAttribute("id","nav-text"),t.appendChild(n),n.innerHTML="To-Do List App"},proj:n,addNewProjectForm:()=>{document.getElementById("add-project-btn").addEventListener("click",d)},displayProjects:o,todos:()=>{const e=document.getElementById("app-body"),t=document.createElement("div");t.setAttribute("id","todos-section"),e.appendChild(t);const n=document.createElement("div");n.setAttribute("class","todos-header"),t.appendChild(n);const o=document.createElement("h2");n.appendChild(o),o.innerHTML="To-Dos";const d=document.createElement("button");n.appendChild(d),d.setAttribute("id","add-todos-btn"),d.innerHTML="Add Task";const i=document.createElement("div");i.setAttribute("id","todos-list"),t.appendChild(i)},createAppBody:()=>{const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","app-body"),e.appendChild(t)},addNewToDoForm:()=>{document.getElementById("add-todos-btn").addEventListener("click",c)},todoSubmitBtn:i,displayTodos:()=>{const e=document.getElementById("todos-list");for(let n=0;n<t.length;n+=1){const o=document.createElement("div");o.setAttribute("class","to-do-obj");const d=document.createElement("label");d.innerHTML=`<b>Title: </b>${t[n].title}`,o.appendChild(d);const i=document.createElement("label");i.innerHTML=`<b>Description: </b>${t[n].description}`,o.appendChild(i);const c=document.createElement("label");c.innerHTML=`<b>Due Date: </b>${t[n].dueDate}`,o.appendChild(c);const r=document.createElement("label");r.innerHTML=`<b>Priority: </b>${t[n].priority}`,"High"===t[n].priority?r.style.color="red":"Medium"===t[n].priority?r.style.color="orange":r.style.color="rgb(7, 173, 118)",o.appendChild(r);const s=document.createElement("label");s.innerHTML=`<b>Note: </b>${t[n].notes}`,o.appendChild(s),e.appendChild(o)}}}};n().navbar(),n().createAppBody(),n().displayProjects(e),n().addNewProjectForm(),n().todos(),n().addNewToDoForm(),n().displayTodos()})();