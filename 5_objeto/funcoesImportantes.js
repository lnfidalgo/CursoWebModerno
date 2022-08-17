const pessoa = {
  nome: 'Lucas',
  idade: 21,
  peso: 101
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '04/07/2001'
})

pessoa.dataNascimento = '20/08/1958'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {a: 3, c: 4}
const obj = Object.assign(dest, o1, o2)

console.log(obj)