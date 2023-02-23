var addNumber = []
var res = document.querySelector('div#res')

function adicionar() {
  let number = parseInt(document.getElementById('inputNumber').value)
  let cadastro = document.getElementById('cadastro')
  
  if (res.length !== 0) {
    res.innerHTML = ''
  }

  if (number >= 1 && number <=100){
    if (addNumber.length === 0) {
      cadastro.innerHTML = ''
    }
    if (addNumber.indexOf(number) >= 0 ){
      window.alert('O número já está cadastrado')
    } else {
      addNumber.push(number)
      let item = document.createElement('option')
      item.text += `Valor ${number} adicionado!`
      item.value += `tab${number}`
      cadastro.appendChild(item)
      document.getElementById('inputNumber').value = ''
    }
  } else {
    window.alert('[ERROR] Valor Inválido!')
  }
}

function finalizar() {
  if (addNumber.length !== 0){
    let soma = 0
    res.innerHTML = `<p>Ao todo, temos ${addNumber.length} cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado é:  ${Math.max(...addNumber)}.</p>`
    res.innerHTML += `<p>O menor valor informado é: ${Math.min(...addNumber)}.</p>`

    for(let i = 0; i < addNumber.length; i++){
      soma += addNumber[i]
    }
    res.innerHTML += `<p>Somando todos os valores, temos: ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é: ${soma / addNumber.length}.</p>`
  } else {
    window.alert('[ERROR] Adicione valor para Finalizar!')
  }
}