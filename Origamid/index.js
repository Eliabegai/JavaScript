const res = document.querySelector('div#res')
const btn = document.getElementById('esconde')
const container = document.querySelector('div#container')


var nome = 'Eliabe'

res.innerHTML = `<h3>${nome}</h3>`
res.innerHTML += `<p>${nome.length}</p>`
res.innerHTML += `<p>${nome.charAt(1)}</p>`
res.innerHTML += `<p>${nome.replace('Eliabe', 'Ebaile')}</p>`

var altura = 1.8
res.innerHTML += `<h3>Números</h3>`
res.innerHTML += `<p>${altura.toString()}</p>`
res.innerHTML += `<p>${altura.toFixed()}</p>`

res.innerHTML += `<h3>Elementos DOM</h3>`

const esconder = function() {
  res.innerHTML = ''
}