document.querySelectorAll('[link-brabo]').forEach(link => {
  const conteudo = document.getElementById('conteudo')

  link.onclick = function (e) {
    e.preventDefault()
    fetch(link.getAttribute('link-brabo'))
      .then(resp => resp.text())
      .then(html => (conteudo.innerHTML = html))
  }
})
