const notas = [6.7, 7.4, 9.8, 2, 3]

for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Fidalgo',
  idade: 20,
  peso: 110
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}