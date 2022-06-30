console.log(soma(3, 4)) // Pode ser chamada antes da declaração

// Function declaration
function soma(x, y) {
  return x + y
}

// Function expression
const sub = function(x, y) {
  return x - y
}
console.log(sub(3, 4)) // Só pode ser chamada após a declaração

// Named function expression
const mult = function mult(x, y) {
  return x * y
}
console.log(mult(4, 2)) // Só pode ser chamada após a declaração