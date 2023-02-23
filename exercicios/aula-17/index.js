let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 86, 
    engordar(p){
        console.log('Engordou')
        this.peso += p
    }
}

console.log(amigo)

amigo.engordar(2)
console.log(amigo)