function calculoMes (mes, valor) {
  if (mes > 0 && mes < 13) {
    atraso = mes - 1
    return (valor * ((1 + (5/100)) ** atraso)).toFixed(2)
  } else {
    return "Mês inválido"
  }
}

console.log(calculoMes(5, 100))