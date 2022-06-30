function pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new pessoa

function folha() {
  this.papel = 0

  setInterval(() => {
    this.papel++
    console.log(this.papel)
  }, 1000)
}

new folha