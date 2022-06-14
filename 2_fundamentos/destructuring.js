const pessoa = {
  nome: 'Lucas',
  idade: 20,
  peso: 105,
  endereco: {
    rua: 'Aipim Frito',
    numero: 210
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome:n, idade:i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)

// const { conta: { ag, num } } = pessoa
// console.log(ag, num)