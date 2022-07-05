function resultadoFinal(nota) {
  let notaCorrigida = arredondar(nota)
  if (notaCorrigida >= 40) {
    console.log(`Aprovado com nota ${notaCorrigida}`)
  } else {
    console.log(`Reprovado com nota ${notaCorrigida}`)
  }
}

function arredondar(nota) {
  if (nota % 5 > 2) {
    return nota + (5 - (nota % 5))
  } else {
    return nota
  }
}

resultadoFinal(100)
resultadoFinal(30)
resultadoFinal(38)
resultadoFinal(88)
resultadoFinal(61)