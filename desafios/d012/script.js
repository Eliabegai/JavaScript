function verificar() {

  let valorAntigo = parseFloat(window.prompt('Digite o valor antigo!'))
  let valorNovo = parseFloat(window.prompt('Digite o novo valor!'))
  let res = document.querySelector('div#res')

  let test = valorNovo - valorAntigo; // pq não está deixando salvar com 2 parentes ((b-a)/a) * 100 - 1

  let porcento = (test / valorAntigo) * 100 - 1;

  if (valorNovo > valorAntigo) {
    text = `
      <p>O item custava R$${valorAntigo} e agora está R$${valorNovo}</p>
      <p>Hoje o produto está mais caro</p>
      <p>O produto subiu R$${valorNovo - valorAntigo}</p>
      <p>O valor subiu ${porcento}%</p>
      `;
  } else {
    text = `
      <p>O item custava R$${valorAntigo} e agora está R$${valorNovo}</p>
      <p>Hoje o produto está mais barato!</p>
      <p>O produto abaixou R$${(valorNovo - valorAntigo) * -1}</p>
      <p>O valor diminuiu ${porcento.toFixed(2) * -1}%</p>
      `;
  }

  res.innerHTML = '<h3>Analisando os valores informados...</h3>'
  res.innerHTML += text
}