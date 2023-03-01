function converter() {
    let res = document.querySelector('div#res')
    let medida = parseFloat(window.prompt('Digite uma distância em metros (m)'))

    res.innerHTML = `<h3>A distância de ${medida} metros, corresponde à... </h3>`
    res.innerHTML += `<p>${medida / 1000} quilômetros (Km) </p>`
    res.innerHTML += `<p>${medida / 100} hectômetros (Hm) </p>`
    res.innerHTML += `<p>${medida / 10} decâmetros (Dam) </p>`
    res.innerHTML += `<p>${medida * 10} decímetros (dm) </p>`
    res.innerHTML += `<p>${medida * 100} centímetros (cm) </p>`
    res.innerHTML += `<p>${medida * 1000} milímetros (mm) </p>`
  }