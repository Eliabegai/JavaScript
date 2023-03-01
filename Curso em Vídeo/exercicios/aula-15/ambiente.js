/*
let num = [4, 3, 2, 8, 5]

num[5] = 6 // acrescenta um valor na posição desejada
num.push(7) // acresnta um valor na última posição
num.push(9) // acresnta um valor na última posição
console.log(num)
console.log(num.length) // conta quantos vetores existe
console.log(num.sort()) // organiza os valores

for (let pos=0; pos < num.length; pos++) {
  console.log(num[pos])
}

*/
// tradicional
let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
console.log(valores)
/*
for (let pos=0; pos<valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
// modo simplificado

for ( let pos in valores) { // na pos em valores, execute 
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('buscar o valor 7 em valores', valores.indexOf(7))
console.log('buscar o valor 3 em valores', valores.indexOf(3)) // não encontrou o valor desejado