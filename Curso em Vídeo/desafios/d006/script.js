function converter() {
    let res = document.querySelector('div#res')
    let temp = parseFloat(window.prompt('Digite a temperatura em °C (Celsius'))

    res.innerHTML = `<h3>A temperatura de ${temp}°C, corresponde à...</h3>`
    res.innerHTML += `<p>${temp + 273.15}°K (Kelvin)</p>`
    res.innerHTML += `<p>${(temp * (9/5)) + 32}°F (Fahrenheit)</p>`
  }