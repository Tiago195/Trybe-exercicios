// const fetch = require('node-fetch');

const papi = document.getElementById('paizao')

const teste = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=81&offset=809'
  const urls = await (await fetch(url)).json()
  for (let i of urls.results) {
    const response = await (await fetch(i.url)).json();
    append(response)
  }
}

function append({ name, sprites }) {
  const div = document.createElement('div')
  const text = document.createElement('span')
  const img = document.createElement('img')
  div.classList.add('filhos')
  text.innerHTML = name
  img.src = sprites.front_default
  div.appendChild(text)
  div.appendChild(img)
  papi.appendChild(div)
}

window.onload = teste;
