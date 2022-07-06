function diaDaSemana(dia) {
  switch (dia) {
    case 01:
    case 07:
    case 08:
    case 14:
    case 15:
    case 21:
    case 22:
    case 28:
    case 29:
      console.log("Fim de semana")  
      break
    case 02:
    case 03:
    case 04:
    case 05:
    case 06:
    case 09:
    case 10:
    case 11:
    case 12:
    case 13:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 30:
      console.log("Dia útil")
      break
    default:
      console.log('Dia inválido')
  }
}

diaDaSemana(01)
diaDaSemana(20)
diaDaSemana(50)
diaDaSemana(07)
diaDaSemana(16)