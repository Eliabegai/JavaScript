function gerarTabuada() {
  var number = parseInt(document.getElementById('inputNumber').value)
  var res = document.querySelector('div#res')

  if (isNaN(number)) {
    res.innerHTML = '<p>Valor Inválido! Tente novamente</p>'
    res.style.color = 'red'
  }else{
    res.innerHTML =  `
    <div>
    </br>
      <select name="select" size=11>
        <option value="valor1">${number} X 0 = ${0 * number}</option>
        <option value="valor2">${number} X 1 = ${1 * number}</option>
        <option value="valor3">${number} X 2 = ${2 * number}</option>
        <option value="valor4">${number} X 3 = ${3 * number}</option>
        <option value="valor5">${number} X 4 = ${4 * number}</option>
        <option value="valor6">${number} X 5 = ${5 * number}</option>
        <option value="valor7">${number} X 6 = ${6 * number}</option>
        <option value="valor8">${number} X 7 = ${7 * number}</option>
        <option value="valor9">${number} X 8 = ${8 * number}</option>
        <option value="valor10">${number} X 9 = ${9 * number}</option>
        <option value="valor11">${number} X 10 = ${10 * number}</option>
      </select>
    </div>

  `
  res.style.color = 'black'
  res.style.align_items = 'center' 
  }

  
}

        
        
        
        
        
        
        
        
        