function verificar() {
  let nome = window.prompt('Qual o nome do aluno?')
  let nota1 = parseFloat(window.prompt(`Primeira nota de ${nome}`))
  let nota2 = parseFloat(window.prompt(`Segunda nota de ${nome}`))
  let res = document.querySelector('div#res')


  let media = (nota1 + nota2) / 2;

  if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    text = `
    <h3>[ERROR] Inserido nota inválida!</h3>
    <p> Verificar nota ${nota1} ou ${nota2}.</p
    `;
  } else {
    if (media > 0 && media <= 3) {
      text = `
      <h3>Analisando a situação do aluno ${nome}...</h3>
      <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong></p>
      <p>Com média abaixo de 3.0, você está <strong style='color: red'>REPROVADO!</strong></p>
      `;
    } else if (media > 3 && media <= 6) {
      text = `
      <h3>Analisando a situação do aluno ${nome}...</h3>
      <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong></p>
      <p>Com média entre 3.0 e 6.0, você está em <strong style='color: yellow'>RECUPERAÇÃO!</strong></p>
      `;
    } else if (media > 6 && media <= 10) {
      text = `
      <h3>Analisando a situação do aluno ${nome}...</h3>
      <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}.</strong></p>
      <p>Com média acima de 6.0, você está <strong style='color: green'>APROVADO!</strong></p>
      `;
    }
  }

  res.innerHTML = text
}