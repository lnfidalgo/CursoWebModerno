// Armazenado uma funcao em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenado uma funcao arrow em uma variável
const soma = (a, b) => {
  return a + b
}

console.log(soma(7, 5))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(5, 4))

const reduzido = a => console.log(a)
reduzido('Uhulll!!')