function mensagem(param) {
  let btn = param.id
  if (btn == 'btn1'){
    window.alert(`Você clicou no 1° Botão!`)
  } else if (btn == 'btn2'){
    window.alert(`Você clicou no 2° Botão!`)
  } else {
    window.alert(`Você clicou no 3° Botão!`)
  }
}