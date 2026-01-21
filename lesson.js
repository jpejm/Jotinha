// ===== SISTEMA DE PONTOS INTELIGENTE =====

let points = parseInt(localStorage.getItem("points")) || 0;

// remove acentos + corrige espaços + ignora maiúsculas
function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer(correctAnswer) {
  const input = document.getElementById("answer");

  const userAnswer = normalize(input.value);
  const rightAnswer = normalize(correctAnswer);

  if (userAnswer === rightAnswer) {
    points += 10;
    alert("✅ Correto! +10 pontos");
  } else {
    points -= 3;
    if (points < 0) points = 0;
    alert("❌ Errado! -3 pontos");
  }

  localStorage.setItem("points", points);

  const p = document.getElementById("points");
  if (p) p.innerText = points;

  input.value = "";
}

// mostra pontos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const p = document.getElementById("points");
  if (p) p.innerText = points;
});
