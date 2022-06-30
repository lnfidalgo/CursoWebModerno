function cadastro(nome, preco) {
  return {
    nome: nome,
    preco: preco,
    desconto: preco - 5
  }
}

console.log(cadastro('aipim', 10))