function resolver() {
  let a = parseInt(window.prompt(`
    Qual é o valor de a? 
    Equação: ax² + bx + c = 0
    `))
  let b = parseInt(window.prompt(`
    Qual é o valor de b? 
    Equação: ${a}x² + bx + c = 0
    `))
  let c = parseInt(window.prompt(`
    Qual é o valor de c? 
    Equação: ${a}x² + ${b}x + c = 0
    `))
  let res = document.querySelector('div#res')
  
  res.innerHTML = `<h3>Resolvendo Bhaskara</h3>`

  let resolvendo = `
  <p>A equação atual é <strong>Δ = b² - 4ac </strong></p>
  <p>Resolução: <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>
  <p>Resolução: <strong>Δ = ${b**2} - ${4*a*c}</strong></p>
  <p>O valor calculado foi <strong>Δ = ${(b**2) - (4*a*c)}</strong></p>
  `
  res.innerHTML += resolvendo
  }