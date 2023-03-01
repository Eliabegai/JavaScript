function verificar() {
    let ano = parseInt(window.prompt('Qual é o ano que você quer verificar?'))
    let text = ''
    let res = document.querySelector('div#res')

    if (ano % 4 !== 0 && ano % 400 !== 0) {
      text = '<strong style=\'color:#70330A; background:#CC5D12\'>Não é Bissexto!</strong> \u{274C}'
    } else if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      text = '<strong style=\'color:green; background:#6eb96e\'>É Bissexto!</strong> \u{2705}'
    } else {
      text = '<strong style=\'color:#70330A; background:#CC5D12\'>Não é Bissexto!</strong> \u{274C}'
    }

    res.innerHTML = `<h3>Analisando o ano de ${ano}</h3>`
    res.innerHTML += `<p>O ano de ${ano} ${text}</p>`
  }