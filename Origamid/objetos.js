const res = document.querySelector('div#res')

var pessoa = {
  nome: 'Eliabe',
  idade: 27,
  profissao: 'Desenvolvedor',
  possuiFaculdade: true,
}
res.innerHTML += `
  <p>
    Objetos servem para organizar o código em pequenas partes reutilizáveis
  </p>
  <p>
    Math.PI: ${Math.PI}
    </br>
    Math.random(): ${Math.random()}
  </p>
`

res.innerHTML += `<h4>Objetos</h4>`
res.innerHTML += `<p>${pessoa.nome}</p>`
res.innerHTML += `<p>${pessoa.possuiFaculdade}</p>`

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado
  },
  perimetro: function(lado) {
    return this.lados * lado
  }
}
res.innerHTML += `<h4>Métodos</h4>`
res.innerHTML += `<p>${quadrado.area(5)}</p>`
res.innerHTML += `<p>${quadrado.perimetro(5)}</p>`


var quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado
  },
  perimetro(lado) {
    return this.lados * lado
  },
  cinco() {
    return 5
  }
}
res.innerHTML += `<h4>Métodos2</h4>`
res.innerHTML += `<p>${quadrado.area(5)}</p>`
res.innerHTML += `<p>${quadrado.perimetro(5)}</p>`
res.innerHTML += `<p>${quadrado.cinco(5)}</p>`

// Criar um objeto

var menu = {
  width: 800,
  height: 50,
  backgroudColor: '#84E',
  metadeHeight() {
    return this.height / 2
  },
}

var bg = menu.backgroudColor
menu.backgroudColor = 'blue'

menu.color = '#FFFFFF'

menu.esconder = function() {
  res.innerHTML = ''
}

const btn = document.querySelector('button')
res.innerHTML += 'menu'
res.style.background = menu.backgroudColor
res.style.color = menu.color


res.innerHTML += '<h4>Palavra Chave This</h4>'

var height = 120

res.innerHTML += `<p>${menu.metadeHeight()}</p>`
//sem o 'this.' seria 60

res.innerHTML += '<h4>Protótipo e Herança</h4>'



