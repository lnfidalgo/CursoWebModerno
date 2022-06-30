const notas = [4, 5, 6, 7, 8, 4.7, 2.4, 9.8]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})

console.log(notasBaixas2)

// Arrow
const notasMenorQue7 = nota => nota < 7 // Como posso fazer uma função para usar em qualquer lugar do sistema
const notasBaixas3 = notas.filter(notasMenorQue7) // nota => nota < 7  posso colocar essa arrow dentro dos ().
console.log(notasBaixas3)