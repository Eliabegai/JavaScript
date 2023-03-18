const res = document.querySelector('div#res')
const btn = document.getElementById('esconde')
const container = document.querySelector('div#container')


var nome = 'Eliabe'

res.innerHTML = `<h3>${nome}</h3>`
res.innerHTML += `<p>${nome.length}</p>`
res.innerHTML += `<p>${nome.charAt(1)}</p>`
res.innerHTML += `<p>${nome.replace('Eliabe', 'Ebaile')}</p>`


const esconder = function() {
  res.innerHTML = ''
}