function divisao(dividendo, divisor) {
  let resultadoDivisao = dividendo / divisor
  let restoDivisao = dividendo % divisor
  let resultado = `O valor da divisão é ${resultadoDivisao.toFixed(2)}, e o resto da divisão é ${restoDivisao}`

  return resultado
}

console.log(divisao(14, 3))


// O do curso ficou assim
function divisao2 (dividendo, divisor) {
  console.log("Resultado: " + Math.floor(dividendo/divisor));
  console.log(`Resto: ${dividendo % divisor}`)
}

divisao2(11, 4)