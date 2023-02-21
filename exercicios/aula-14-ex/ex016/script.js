
function contar() {
  var inicio = parseInt(document.getElementById('inputInicio').value)
  var final = parseInt(document.getElementById('inputFinal').value)
  var passo = parseInt(document.getElementById('inputPasso').value)
  var res = document.querySelector('div#res')

  if (isNaN(passo) || passo <= 0){
    window.alert('O valor do passo deve ser maior que zero')
  } else if (isNaN(inicio) || isNaN(final)) {
      res.innerHTML = '\u{1F4A5} Não pode ser contado! \u{1F4A5}	'
      console.log(res)
      res.style.color = 'red'
  } else {
    // contagem crescente
    if (inicio < final) {
      var text = ''
      for (var c = inicio; c <= final; c += passo) {
        if (c <= (final - passo)){
          text += `${c} → `
        } else {
          text += `${c} \u{1F606}`
        }
      }
    } else {
    // contagem decrescente 
      var text = ''
      for (var c = inicio; c >= final; c -= passo) {
        if (c >= (final + passo)){
          text += `${c} → `
        } else {
          text += `${c} \u{1F606}`
        }
      }
    }
    res.innerHTML = `<strong>Resultado:</strong> ${text}`
    res.style.color = 'green'
  }
    
}
