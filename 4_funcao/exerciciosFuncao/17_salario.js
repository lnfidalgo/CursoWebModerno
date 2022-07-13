function aumento(salario, plano) {
  switch (plano) {
    case 'A':
      return salario + (salario * (10/100))
    case 'B':
      return salario + (salario * (15/100))
  }
}

console.log(aumento(1000, 'A'))