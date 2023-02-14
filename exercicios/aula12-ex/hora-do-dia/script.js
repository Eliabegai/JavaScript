function carregar () {

  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var time = new Date()
  var hora = time.getHours()
  var minute = time.getMinutes()
  var second = time.getSeconds()

  msg.innerHTML = `Hora: ${hora}:${minute}:${second}.`

  if (hora >= 0 && hora < 12) {
    img.src = 'img/nascer-sol.jpg'
    document.body.style.background = '#e2cd9f'
  } else if(hora >= 12 && hora < 17) {
    img.src = 'img/parte-da-tarde.jpg'
    document.body.style.background = '#b2cd9f'
  }else if (hora >= 17 && hora < 18) {
    img.src = 'img/anoitecer.webp'
    document.body.style.background = '#b9846f'
  } else if(hora >= 18 && hora < 19) {
    img.src = 'img/por-do-sol.webp'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'img/noite.webp'
  }
}
