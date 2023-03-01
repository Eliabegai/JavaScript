function calcular() {
  let res = document.querySelector('div#res')
  let produto = window.prompt('Qual o produto que está vendendo?')
  let valor = parseFloat(window.prompt(`Qual o preço do ${produto}? (R$)`))

  res.innerHTML = `<h3>Calculando desconto de 10% para ${produto}...</h3>`
  res.innerHTML += `<p>O preço original era R$${valor}</p>`
  res.innerHTML += `<p>Você acaba de ganhar R$${valor * 0.1} de desconto</p>`
  res.innerHTML += `<p>No fim, você vai pagar R$${valor - (valor * 0.1)} no produto ${produto}</p>`
  }