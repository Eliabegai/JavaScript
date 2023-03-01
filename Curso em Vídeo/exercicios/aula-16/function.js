function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(3, 5))
// no exemplo acima, caso não passar um dos parâmetros, irá quebrar o código, é obrigatório ter os dois


function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(3))

// no exemplo acima, caso não coloquei um dos parâmetros, ele vai interpretar como 0 o outro e assim dar sequência no código.