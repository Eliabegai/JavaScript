const res = document.querySelector('div#res')
const btn = document.getElementById('esconde')
const container = document.querySelector('div#container')
const resposta = document.createElement('div')
resposta.id = 'resposta'
const visual = document.createElement('div')
visual.id = 'img'




const esconder = function() {
  resposta.innerHTML = ''
  visual.innerHTML = ''
}

const cachorro = {
  tipo: 'Labrador',
  cor: 'Preto',
  idade: 10,
  lateMan: false,
}

cachorro.latindo = function(value) {
  this.lateMan = value
  resposta.innerHTML = ''
  visual.innerHTML = ''
  const mensagem = `
    <div>
      <p>Eu tenho um cachorro do tipo ${cachorro.tipo}, na cor ${cachorro.cor}</p>
      <p>ele tem ${cachorro.idade} anos e ${cachorro.lateMan ? 'late ao ver um Homem' : 'não late ao ver um Homem'}</p>
    </div>
  `
  resposta.innerHTML += mensagem

  const img = document.createElement('img')
  img.src = cachorro.lateMan? 'img/labrador-2.jpg' : 'img/labrador-1.jpg'
  visual.appendChild(img)
}

res.innerHTML += 'Tipos de Cachorro!'
container.innerHTML += '<p>Você é Homem?</p>'

const button1 = document.createElement('button')
button1.id = 'sim'
button1.innerHTML = 'Sim'
container.appendChild(button1)

button1.addEventListener('click',() => cachorro.latindo(true))

const button2 = document.createElement('button')
button2.id = 'nao'
button2.innerHTML = 'Não'
container.appendChild(button2)

button2.addEventListener('click', () => cachorro.latindo(false))


res.appendChild(container)
res.appendChild(resposta)
res.appendChild(visual)
