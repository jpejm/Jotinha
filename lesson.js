function check(){
const ans=document.getElementById('answer').value.trim().toLowerCase();
const res=document.getElementById('result');
if(ans==='café'){
res.innerText='✅ Correto! +5 pontos';
let p=parseInt(localStorage.getItem('points')||0)+5;
localStorage.setItem('points',p);
}else{
res.innerText='❌ Errado, tente novamente';
}}