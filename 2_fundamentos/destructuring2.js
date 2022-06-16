function rand([min = 0, max = 100]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([20, 10]))
console.log(rand([50]))
console.log(rand([, 30]))
console.log(rand([]))
//console.log(rand())