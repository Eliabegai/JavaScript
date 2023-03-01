function reajuste() {
  let res = document.querySelector('div#res')
  let name = window.prompt('Qual o nome do funcionario?')
  let salario = parseFloat(window.prompt(`Qual o salário de ${name}`))
  let aumento = parseInt(window.prompt(`O salário de ${name} vai ser reajusto em quantos porcento?`))
  let salarioFormated = salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  let aumentoSalario = (salario*(aumento/100)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  let valorFinal = (salario + (salario*(aumento/100))).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  
  res.innerHTML = `<h3>${name} recebeu um aumento de salário!</h3>`
  res.innerHTML += `<p>O salário atual era ${salarioFormated}</p>`
  res.innerHTML += `<p>Com um aumento de ${aumento}%, o salário vai aumentar ${aumentoSalario}</p>`
  res.innerHTML += `<p>E a partir dai, ${name} vai passar a ganhar ${valorFinal}</p>`
  }