// Funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(5 ,4)
imprimirSoma(2)
imprimirSoma(2 ,3, 4, 5, 6, 7)
imprimirSoma(5)

// Funcao com retorno
function soma(a, b = 10) {
  return a + b
}

console.log(soma(2, 3))