// Crie uma função para verificar se um valor é Truthy
valorTruthy(true)
function valorTruthy(valor) {
    if (valor === true) {
        console.log('True')
    }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
lado(5)

function lado(lado) {
    let perim = lado * 4
    console.log('A soma dos lados do quadrado é:', perim)
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

nomeCompleto('Ana Letícia', 'Maciel Gai')

function nomeCompleto(nome, sobrenome) {
    let name = nome
    let sobren = sobrenome
    let nomeCompleto = `${name} ${sobren}`

    console.log(nomeCompleto)
}

// Crie uma função que verifica se um número é par

verPar(4)

function verPar(num) {
    let n = num
    if (n % 2 === 0) {
        console.log('É par!')
    } else {
        console.log('Não é par!')
    }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

// Corrija o erro abaixo
/*
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  */