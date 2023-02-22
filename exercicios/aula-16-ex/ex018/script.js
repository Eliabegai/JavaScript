var addNumber = []
var res = document.querySelector('div#res')

function adicionar() {
  let number = parseInt(document.getElementById('inputNumber').value)
  let cadastro = document.getElementById('cadastro')
  
if (number > 1 && number <=100){
  if (addNumber.length === 0) {
    cadastro.innerHTML = ''
  }
    
    addNumber.push(number)
    
    let item = document.createElement('option')
    item.text += `Valor ${number} adicionado!`
    item.value += `tab${number}`
    cadastro.appendChild(item)
  } else {
    window.alert('[ERROR] Valor Inválido!')
  }
}


function finalizar() {
  if (addNumber.length !== 0){
    res.innerHTML = 'Finalizado'
  } else {
    window.alert('[ERROR] Adicione valor para Finalizar!')
  }

}