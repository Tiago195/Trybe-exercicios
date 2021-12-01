// const fetch = require('node-fetch');
const url = `https://api.coincap.io/v2/assets`

const teste = () => {
  const data = {
    method: 'GET',
  };
  fetch(url, data)
    .then(response => response.json())
    .then(data => (data.data.filter((e, index) => {
      while (index < 10) {
        return e
      }
    }).forEach(e => {
      const newLi = document.createElement('li')
      newLi.innerHTML = `${e.name} (${e.symbol}): $ ${e.priceUsd}`
      document.getElementById('teste').appendChild(newLi)
    })))
}

// teste()

window.onload = () => teste();