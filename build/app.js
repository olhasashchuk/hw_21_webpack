(()=>{"use strict";var e={654:()=>{function e(){const e=document.querySelector("img");for(let t=1;t<=9;t++){let o=Math.floor(Math.random()*`${t}`+1);e.setAttribute("src",`images/${o}.jpg`)}}document.addEventListener("DOMContentLoaded",(()=>{!function(e){const{form:t,addTaskButton:o,listTasks:s}=e,c="tasks",a=e=>{const{valueTask:t,isChecked:o}=e,c=document.createElement("li");c.classList.add("todo-item"),s.appendChild(c);const a=document.createElement("input");a.type="checkbox",a.checked=o,c.appendChild(a);const r=document.createElement("span");r.classList.add("todo-item__description"),r.innerText=t,c.appendChild(r);const l=document.createElement("button");l.classList.add("todo-item__delete"),l.innerText="Delete",c.appendChild(l),l.addEventListener("click",(()=>{s.removeChild(c),d(e)})),a.addEventListener("change",(()=>{a.checked?r.classList.add("todo-item--checked"):r.classList.remove("todo-item--checked"),n(e,a.checked)}))},n=(e,t)=>{const o=JSON.parse(localStorage.getItem(c)),s=o.findIndex((t=>t.valueTask===e.valueTask));-1!==s&&(o[s].isChecked=t,localStorage.setItem(c,JSON.stringify(o)))},d=e=>{const t=JSON.parse(localStorage.getItem(c)).filter((t=>t.valueTask!==e.valueTask));localStorage.setItem(c,JSON.stringify(t))};o.addEventListener("click",(function(e){e.preventDefault();const o={valueTask:t.elements.value.value,isChecked:!1};a(o),(e=>{const t=localStorage.getItem(c);if(null===t)localStorage.setItem(c,JSON.stringify([e]));else{const o=JSON.parse(t);o.push(e),localStorage.setItem(c,JSON.stringify(o))}})(o)})),(()=>{const e=JSON.parse(localStorage.getItem(c));null!==e&&e.forEach((e=>{a(e);const t=s.lastChild;e.isChecked&&t.querySelector(".todo-item__description").classList.add("todo-item--checked")}))})()}({form:document.querySelector(".js--form"),addTaskButton:document.querySelector(".form__btn"),listTasks:document.querySelector(".js--todos-wrapper")})})),document.addEventListener("DOMContentLoaded",(()=>{document.querySelector(".random").addEventListener("click",e)}))},440:e=>{e.exports="data:text/x-scss;base64,Ly8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luCmV4cG9ydCB7fTs="}},t={};function o(s){var c=t[s];if(void 0!==c)return c.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,o),a.exports}o(654),o(440)})();
//# sourceMappingURL=app.js.map