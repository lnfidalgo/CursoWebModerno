const imprimirResultado = function(nota) {
  if(nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reporvado')
  }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Eai men, o SAM é brabo') // Cuidado!!