function calcTroco() {
  let produto = window.prompt('Que produto você está Vendendo?')
  let valor = parseFloat(window.prompt(`Qual o valor do ${produto} oferecido?`))
  let dinheiro = parseFloat(window.prompt(`Qual o valor entregue pelo cliente do ${produto}?`))
  window.alert(`
  Você vendeu um ${produto} por R$${valor}.00.
  O cliente deu R${dinheiro}.00 e vai receber R$${dinheiro - valor}.00 de troco.
  Volte Sempre!
  `)
  }