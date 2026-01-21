document.addEventListener("DOMContentLoaded", () => {

  const points = parseInt(localStorage.getItem("points")) || 0;
  const perfectLessons = parseInt(localStorage.getItem("perfectLessons")) || 0;

  function getLevel(points, perfectLessons) {
    if (points < 500) return "Iniciante";
    if (points >= 1500 && points <= 2000 && perfectLessons >= 10) return "Intermediário";
    if (points >= 2000 && points < 3000) return "Avançado";
    if (points >= 3000) return "Elite";
    return "Iniciante";
  }

  const leaguesByLevel = {
    Iniciante: ["Liga Cidade", "Liga Parque", "Liga Biblioteca", "Liga Café"],
    Intermediário: ["Liga Mercado", "Liga Aeroporto", "Liga Escola", "Liga Cinema"],
    Avançado: ["Liga Escritório", "Liga Entrevista", "Liga Notícia", "Liga Debate"],
    Elite: ["Liga Acadêmica", "Liga Estratégia", "Liga Global"]
  };

  function getLeague(level) {
    const savedLeague = localStorage.getItem("currentLeague");
    const savedLevel = localStorage.getItem("currentLevel");

    if (!savedLeague || savedLevel !== level) {
      const options = leaguesByLevel[level];
      const chosen = options[Math.floor(Math.random() * options.length)];
      localStorage.setItem("currentLeague", chosen);
      localStorage.setItem("currentLevel", level);
      return chosen;
    }
    return savedLeague;
  }

  const level = getLevel(points, perfectLessons);
  const league = getLeague(level);

  const pointsEl = document.getElementById("points");
  const levelEl = document.getElementById("level");
  const leagueEl = document.getElementById("league");

  if (pointsEl) pointsEl.innerText = points;
  if (levelEl) levelEl.innerText = level;
  if (leagueEl) leagueEl.innerText = league;

});
