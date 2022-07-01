// A forma do professor é mais dinâmica, pois retorna apenas números
function jurosSimples (capital, taxa, tempo) {
  return capital + (capital * taxa * tempo)
}

function jurosComposto (capital, taxa, tempo) {
  return capital * (1 + taxa) ** tempo
}

console.log(jurosSimples(1050, 2/100, 2));
console.log(jurosComposto(250, 5/100, 2));