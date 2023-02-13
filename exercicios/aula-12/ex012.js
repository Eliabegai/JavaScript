var time = new Date()

var hora = time.getHours()
var minute = time.getMinutes()
var second = time.getSeconds()
console.log(`Agora são exatamente ${hora}:${minute}:${second}`)

if (hora < 12) {
  console.log('Bom dia, Flor do dia!')
} else if (hora <= 18 ) {
  console.log('Boa tarde, Raio de Sol!')
} else if (hora < 24) {
  console.log('Boa noite, Bundão!')
} else {
  console.log('Vai dormir!')
}
