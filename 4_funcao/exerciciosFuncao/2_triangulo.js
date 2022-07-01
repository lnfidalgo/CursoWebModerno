function descobrirTriangulo(lado1, lado2, lado3) {
  if (lado1 == lado2 && lado2 == lado3) {
    return 'Equilátero'
  } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
    return 'Isósceles'
  } else {
    return 'Escaleno'
  }
}
console.log(descobrirTriangulo(2, 2, 2))
console.log(descobrirTriangulo(2, 5, 2))
console.log(descobrirTriangulo(2, 5, 8))