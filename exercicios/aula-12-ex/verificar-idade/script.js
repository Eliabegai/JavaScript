
function verificar() {
  var time = new Date()
  var ano = time.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERROR] Verique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 15) {
        // Criança
        img.setAttribute('src', 'img/crianca-masc.jpg')
      } else if (idade < 31) {
        //Jovem
        img.setAttribute('src', 'img/homem-jovem.jpg')
      }else if(idade < 50 ){
        //Adulto
        img.setAttribute('src', 'img/homem-adulto.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'img/homem-idoso.jpg')
      }
    } else {
      genero = 'Mulher'
      if (idade >= 0 && idade < 15) {
        // Criança
        img.setAttribute('src', 'img/crianca-fem.jpg')
      } else if (idade < 31) {
        //Jovem
        img.setAttribute('src', 'img/mulher-jovem.jpg')
      }else if(idade < 50 ){
        //Adulto
        img.setAttribute('src', 'img/mulher-adulta.jpg')
      } else {
        //Idoso
        img.setAttribute('src', 'img/mulher-idosa.jpg')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.style.textAlign = 'center'
    res.appendChild(img)

  }


}