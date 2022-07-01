function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda}${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'PC',
  preco: 20000,
  desc: 0.1,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Chamar a função diretamente
console.log(produto.getPreco()) // Chamar a função a partir de um objeto

const carro = { preco: 50000, desc: 0.1 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))