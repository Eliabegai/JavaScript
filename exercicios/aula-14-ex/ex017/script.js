function gerarTabuada() {
  let number = parseInt(document.getElementById('inputNumber').value)
  let res = document.querySelector('div#res')
  let select = document.getElementById('seltab')


  if (isNaN(number)) {
    res.innerHTML = '<p>Valor Inválido! Tente novamente</p>'
    res.style.color = 'red'
  }else{
    let c = 1
    select.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${number} X ${c} = ${number * c}`
      item.value = `tab${c}`
      select.appendChild(item)
      c++
    }
    res.style.color = 'black'
  }

  
}

        
        
        
        
        
        
        
        
        