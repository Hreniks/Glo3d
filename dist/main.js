(()=>{"use strict";(function(e){const t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),r=document.querySelector("#timer-seconds");function o(){const e=function(){const e=(new Date("21 november 2020").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60)%24,minutes:n,seconds:t}}();e.timeRemaining>0?(t.textContent=e.hours<10?"0"+e.hours:e.hours,n.textContent=e.minutes<10?"0"+e.minutes:e.minutes,r.textContent=e.seconds<10?"0"+e.seconds:e.seconds):(clearInterval(o),t.textContent="00",n.textContent="00",r.textContent="00")}o(),setInterval(o,1e3)})(),(()=>{const e=document.querySelector("menu");document.body.addEventListener("click",(t=>{(t.target.closest(".menu")||t.target.closest("menu")||t.target.closest(".close-btn")||!t.target.closest("menu")&&e.classList.contains("active-menu"))&&e.classList.toggle("active-menu")}))})(),(()=>{const e=document.querySelector("menu").querySelectorAll('a[href^="#"]');for(let t=1;t<e.length;t++)e[t].addEventListener("click",(n=>{n.preventDefault();const r=e[t].getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"})}));const t=document.querySelector("body > main > a");t.addEventListener("click",(e=>{e.preventDefault();const n=t.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-close"),r=document.querySelector(".popup-content"),o=document.getElementById("form3").querySelectorAll("input");n.addEventListener("click",(()=>{e.style.display="none",o.forEach((e=>{e.value=""}))}));const a=()=>{if(e.style.display="block",window.innerWidth>768){const e=Date.now(),t=setInterval((()=>{const r=Date.now()-e;r>=800?clearInterval(t):n(r)})),n=e=>{let t=+getComputedStyle(r).width.split("px")[0];t=-t/2+50+"px",r.style.left=e/16+"%",r.style.marginLeft=t}}};t.forEach((e=>{e.addEventListener("click",a)}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let r=e.target;r=r.closest(".service-header-tab"),r&&t.forEach(((e,o)=>{e===r&&(e=>{for(let r=0;r<n.length;r++)e===r?(t[r].classList.add("active"),n[r].classList.remove("d-none")):(t[r].classList.remove("active"),n[r].classList.add("d-none"))})(o)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item").length;for(let t=0;t<e;t++){let e=document.createElement("li");e.classList.add("dot"),document.querySelector(".portfolio-dots").append(e)}})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelectorAll(".dot")),n=document.querySelector(".portfolio-content");let r,o=0;const a=(e,t,n)=>{e[t].classList.remove(n)},l=(e,t,n)=>{e[t].classList.add(n)},s=()=>{a(e,o,"portfolio-item-active"),a(t,o,"dot-active"),o++,o>=e.length&&(o=0),l(e,o,"portfolio-item-active"),l(t,o,"dot-active")},c=(e=3e3)=>{r=setInterval(s,e)};n.addEventListener("click",(n=>{n.preventDefault();let r=n.target;r.matches(".portfolio-btn, .dot")&&(a(e,o,"portfolio-item-active"),a(t,o,"dot-active"),r.matches("#arrow-right")?o++:r.matches("#arrow-left")?o--:r.matches(".dot")&&t.forEach(((e,t)=>{e===r&&(o=t)})),o>=e.length&&(o=0),o<0&&(o=e.length-1),l(e,o,"portfolio-item-active"),l(t,o,"dot-active"))})),n.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(r)})),n.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&c()})),c(1500)})(),(()=>{const e=document.getElementById("command");let t;e.addEventListener("mouseover",(e=>{let n=e.target;n.classList.contains("command__photo")&&(t=n.src,n.src=n.dataset.img)})),e.addEventListener("mouseout",(e=>{let n=e.target;n.classList.contains("command__photo")&&(n.src=t)}))})(),document.querySelector(".calc").addEventListener("input",(e=>{e.target.classList.contains("calc-item")&&!e.target.classList.contains("calc-type")&&(e.target.value=e.target.value.replace(/\D/g,""))})),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),a=document.getElementById("total"),l=document.querySelector(".calc-count");let s,c=0;t.addEventListener("change",(t=>{const i=t.target;(i.matches("select")||i.matches("input"))&&((()=>{let t=1,a=1;const s=n.options[n.selectedIndex].value,i=+r.value;l.value>1&&(t+=(l.value-1)/10),o&&o.value<5?a*=2:o&&o.value<10&&(a*=1.5),s&&i&&(c=Math.ceil(e*s*i*t*a))})(),clearInterval(s),0!==c&&(()=>{let e=0,t=Math.round(3e3/(c/10));s=setInterval((()=>{e+=10,e===c?clearInterval(s):a.innerHTML=e+10}),t)})())}))})(100),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),r=e.querySelectorAll("input"),o=t.querySelectorAll("input"),a=n.querySelectorAll("input"),l=document.createElement("div");function s(e,t){l.classList="sk-rotating-plane",l.style="\n        width: 4em;\n        height: 4em; \n        margin: auto;\n        background-color: #337ab7; \n        -webkit-animation: sk-rotating-plane 1.2s infinite ease-in-out;\n        animation: sk-rotating-plane 1.2s infinite ease-in-out;\n    ";let n=null;n||(n=document.createElement("style"),n.type="text/css",n.classList="dinamic-styles",t.appendChild(n)),n.sheet.insertRule(e,n.length)}const c=()=>{document.querySelector(".dinamic-styles").remove(),l.removeAttribute("style"),l.style.color="#ffff",l.textContent="Спасибо! Мы скоро с вами свяжемся!";let e=setTimeout((()=>{l.classList.remove("sk-rotating-plane"),l.remove(),l.textContent="",clearTimeout(e)}),5e3)};e.addEventListener("submit",(t=>{t.preventDefault(),e.appendChild(l);const n=new FormData(e);let o={};n.forEach(((e,t)=>{o[t]=e})),s("\n    @keyframes sk-rotating-plane {\n    0% {\n      transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    }\n    100% {\n      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n  }\n    ",e),u(o).then((e=>{if(c(),200!==e.status)throw new Error("status network not 200")})).catch((e=>console.error(e))),r.forEach((e=>{e.value=""}))}));const i=e=>{document.getElementById(e).addEventListener("input",(e=>{if(e.target.classList.contains("form-phone"))if(e.target.value=e.target.value.replace(/[^+0-9]/gi,""),/^8/gi.test(e.target.value)){let t=e.target.value.substring(e.target.value.indexOf("8"),e.target.value.length-1);e.target.value.length>11&&(e.target.value=e.target.value.replace(e.target.value,t))}else if(/^\+/gi.test(e.target.value)){let t=e.target.value.substring(e.target.value.indexOf("+"),e.target.value.length-1);e.target.value.length>12&&(e.target.value=e.target.value.replace(e.target.value,t))}if(e.target.classList.contains("form-name")&&(e.target.value=e.target.value.replace(/[^а-яё\s]/gi,"")),e.target.classList.contains("mess")&&(e.target.value=e.target.value.replace(/[^а-яё\s]/gi,"")),e.target.classList.contains("form-email")){let t=e.target.value.substring(e.target.value.indexOf("@"),e.target.value.length-1);/@[\w\-*+*=*#*$*]{10,}/gi.test(e.target.value)&&(e.target.value=e.target.value.replace(/@[\w.\-+=#$*]{10,}/gi,t));let n=e.target.value.substring(e.target.value.lastIndexOf("."),e.target.value.length-1);/\.{1}\w{5,}/.test(e.target.value)&&(e.target.value=e.target.value.replace(/\.{1}\w{6,}/gi,n))}}))};t.addEventListener("submit",(e=>{e.preventDefault(),s("\n    @keyframes sk-rotating-plane {\n    0% {\n      transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    }\n    100% {\n      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n  }\n    ",t),t.appendChild(l);const n=new FormData(t);let r={};n.forEach(((e,t)=>{r[t]=e})),u(r).then((e=>{if(c(),200!==e.status)throw new Error("status network not 200")})).catch((e=>console.error(e))),o.forEach((e=>{e.value=""}))})),n.addEventListener("submit",(e=>{e.preventDefault(),s("\n    @keyframes sk-rotating-plane {\n    0% {\n      transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    }\n    50% {\n      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    }\n    100% {\n      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n  }\n    ",n),n.appendChild(l);const t=new FormData(n);let r={};t.forEach(((e,t)=>{r[t]=e})),u(r).then((e=>{if(c(),200!==e.status)throw new Error("status network not 200")})).catch((e=>console.error(e))),a.forEach((e=>{e.value=""}));let o=setTimeout((()=>{document.querySelector(".popup").style.display="none",l.remove(),clearTimeout(o)}),5e3)})),i("form1"),i("form2"),i("form3");const u=e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)})})()})();