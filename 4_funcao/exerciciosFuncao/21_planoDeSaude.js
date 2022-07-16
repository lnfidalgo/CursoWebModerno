function precoPlanoSaude (idade) {
  if (idade < 10) {
    return 180
  } else if (idade < 30) {
    return  150
  } else if (idade < 60) {
    return 195
  } else if (idade > 60) {
    return 230
  }
}

console.log(precoPlanoSaude(2))
console.log(precoPlanoSaude(12))
console.log(precoPlanoSaude(45))
console.log(precoPlanoSaude(75))