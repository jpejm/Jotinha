<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Lição 1</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #111;
      color: #fff;
      text-align: center;
      padding: 40px;
    }
    input {
      padding: 10px;
      font-size: 16px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h2>Lição 1</h2>
  <p>Traduza para o inglês: <b>café</b></p>

  <input type="text" id="answer" placeholder="Digite aqui">
  <br><br>
  <button onclick="checkAnswer()">Confirmar</button>

  <p>Pontos: <span id="points">0</span></p>

  <button onclick="location.href='index.html'">⬅ Início</button>

<script>
let points = Number(localStorage.getItem("points")) || 0;

function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function checkAnswer() {
  const input = document.getElementById("answer");
  const user = normalize(input.value);
  const correct = normalize("café");

  if (user === "") {
    alert("Digite alguma coisa.");
    return;
  }

  if (user === correct) {
    points += 10;
    alert("✅ Correto! +10 pontos");
  } else {
    points -= 5;
    if (points < 0) points = 0;
    alert("❌ Errado! -5 pontos");
  }

  localStorage.setItem("points", points);
  document.getElementById("points").innerText = points;
  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("points").innerText = points;
});
</script>

</body>
</html>
