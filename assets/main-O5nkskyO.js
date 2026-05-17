import"./style-Dm6ktkQY.js";var e=document.getElementById(`starsField`);if(e){let t=[.55,.7,.85,1.1,1.4,1.8,2.2],n=[`✦`,`✧`];for(let r=0;r<60;r++){let i=document.createElement(`span`);i.className=`star`,i.textContent=n[Math.floor(Math.random()*n.length)];let a=r<22?Math.random()*18:18+Math.random()*82,o=t[Math.floor(Math.random()*t.length)],s=(2.2+Math.random()*2.8).toFixed(2),c=(Math.random()*5).toFixed(2),l=[`#FACC15`,`#FACC15`,`#FACC15`,`#C084FC`,`#2DD4BF`,`#F97316`],u=l[Math.floor(Math.random()*l.length)];i.style.cssText=`
      left: ${(Math.random()*96+2).toFixed(1)}%;
      top:  ${a.toFixed(1)}%;
      font-size: ${o}rem;
      color: ${u};
      opacity: ${(.4+Math.random()*.55).toFixed(2)};
      --dur: ${s}s;
      --delay: ${c}s;
    `,e.appendChild(i)}}var t=document.getElementById(`scrollHint`);t&&window.addEventListener(`scroll`,()=>{window.scrollY>80?t.classList.add(`hidden`):t.classList.remove(`hidden`)},{passive:!0});var n=document.querySelectorAll(`.item`);n.length&&window.matchMedia(`(pointer: fine)`).matches&&document.addEventListener(`mousemove`,e=>{let t=window.innerWidth/2,r=window.innerHeight/2,i=(e.clientX-t)/t,a=(e.clientY-r)/r;n.forEach((e,t)=>{let n=(t%3+1)*5;e.style.translate=`${i*n}px ${a*n}px`})});