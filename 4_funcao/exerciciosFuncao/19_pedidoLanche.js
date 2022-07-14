function pedidoLanche(codigo, quantidade) {
  switch (codigo) {
    case 100:
      console.log(`O seu pedido de ${quantidade} Cachorro Quente deu um total de R$${(quantidade * 3).toFixed(2).replace('.' , ',')}`)
      break;
    case 200:
      console.log(`O seu pedido de ${quantidade} Hambúrguer Simples deu um total de R$${(quantidade * 4).toFixed(2).replace('.' , ',')}`)
      break;
    case 300:
      console.log(`O seu pedido de ${quantidade} Cheeseburguer deu um total de R$${(quantidade * 5.5).toFixed(2).replace('.' , ',')}`)
      break;
    case 400:
      console.log(`O seu pedido de ${quantidade} Bauru deu um total de R$${(quantidade * 7.5).toFixed(2).replace('.' , ',')}`)
      break;
    case 500:
      console.log(`O seu pedido de ${quantidade} Refrigerante deu um total de R$${(quantidade * 3.5).toFixed(2).replace('.' , ',')}`)
      break;
    case 600:
      console.log(`O seu pedido de ${quantidade} Suco deu um total de R$${(quantidade * 2.8).toFixed(2).replace('.' , ',')}`)
      break;
    default:
      console.log('Produto não existe')
  }
}

pedidoLanche(100, 2)
pedidoLanche(200, 3)
pedidoLanche(300, 4)
pedidoLanche(400, 5)
pedidoLanche(500, 6)
pedidoLanche(600, 7)