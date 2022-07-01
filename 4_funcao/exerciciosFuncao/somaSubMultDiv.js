function calculadora(num1, num2) {
  const valor = {
    soma: num1 + num2,
    sub: num1 - num2,
    mult: num1 * num2,
    div: num1 / num2
  }
  return valor
}
console.log(calculadora(2, 5))