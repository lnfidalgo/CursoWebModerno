function Cliente(nome) {
  this.nome = nome

  this.getPessoa = function() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const cadastro = new Cliente('Lucas')
cadastro.getPessoa()
console.log(cadastro.nome)