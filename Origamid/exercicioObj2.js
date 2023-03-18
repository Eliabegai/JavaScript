// seleciona o elemento 'container'
const res = document.querySelector('div#res')
var btn = document.querySelectorAll('button')

const esconder = function() {
  res.innerHTML = ''
}

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var cadastro = {
  nome: 'Eliabe',
  sobrenome: 'Gai',
}

// Crie um método no objeto anterior, que mostre o seu nome completo

cadastro.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`
}
res.innerHTML += `<p>Olá <strong>${cadastro.nomeCompleto()}</strong>, tudo bem?</p>`

//**************************************************************************************

var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

res.innerHTML += `
  <div>
    <p> O carro da marca ${carro.marca}, custa R$${carro.preco}
  </div>
`


// Modifique o valor da propriedade preco para 3000
carro.novoPreco = function() {
  carro.preco = 3000
  res.innerHTML += `
  <div>
    <p> Agora o carro da marca ${carro.marca}, custa R$${carro.preco}
  </div>
`
}

var container = document.getElementById('container')

var button = document.createElement('button')
button.id = 'atualizar'
button.innerHTML = 'Atualizar'

container.appendChild(button)

res.appendChild(container)

button.addEventListener('click', function() {
  carro.novoPreco()
})
