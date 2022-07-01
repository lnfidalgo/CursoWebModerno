function conversorReal(num1) {
  let conversor = num1.toFixed(2)
  let troca = conversor.replace('.' , ',')
  return `O valor é R$${troca}`
}

console.log(conversorReal(0.2 + 0.4))


// Como o curso fez
function formatarValorDecimal(valorDecimal) {
  valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace("." , ",")}`
  console.log(valorEmReais)
}

formatarValorDecimal(0.4 + 0.1)