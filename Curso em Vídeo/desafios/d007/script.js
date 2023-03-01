let cotacao = parseFloat(window.prompt('Antes de mais nada. Quanto está a cotação do dólar atual?'))

function converter() {
    let valor = parseFloat(window.prompt('Quantos R$ você tem na carteira?'))
    let res = document.querySelector('div#res')

  
    res.innerHTML = `</br>Valor atual US$${cotacao}.`
    res.innerHTML += `</br>Você pode comprar US$${valor / cotacao} dolars com R$${valor}.`
  }