let points=parseInt(localStorage.getItem('points')||0);
let league='Iniciante';
if(points>=3000) league='Elite';
else if(points>=2000) league='Avançado';
else if(points>=1500) league='Intermediário';
document.addEventListener('DOMContentLoaded',()=>{
const p=document.getElementById('points');
const l=document.getElementById('league');
if(p) p.innerText=points;
if(l) l.innerText=league;
});