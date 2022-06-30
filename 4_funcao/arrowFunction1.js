let dobro = function(a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // Return implícito
console.log(dobro(50))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá' // Recomendado usar essa
ola = _ => 'Olá' // Possui um parâmetro
console.log(ola())