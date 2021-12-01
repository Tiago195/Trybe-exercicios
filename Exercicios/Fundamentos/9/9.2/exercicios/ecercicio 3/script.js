// const fetch = require('node-fetch');

const papi = document.getElementById('paizao')

const teste = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=9&offset=0'
  const urls = await (await fetch(url)).json()
  // const datas = await urls.json()
  for (let i of urls.results) {
    const response = await fetch(i.url);
    const data = await response.json()
    const div = document.createElement('div')
    const text = document.createElement('span')
    const img = document.createElement('img')
    div.classList.add('filhos')
    text.innerHTML = data.name
    img.src = data.sprites.front_default
    div.appendChild(text)
    div.appendChild(img)
    papi.appendChild(div)
  }
  // urls.results.forEach(async ({ url }) => {
  //   const response = await fetch(url);
  //   const data = await response.json()
  //   const div = document.createElement('div')
  //   const text = document.createElement('span')
  //   const img = document.createElement('img')
  //   div.classList.add('filhos')
  //   text.innerHTML = data.name
  //   img.src = data.sprites.front_default
  //   div.appendChild(text)
  //   div.appendChild(img)
  //   papi.appendChild(div)
  // })
  // urls.results.forEach(({ url }) => {
  //   fetch(url).then(e => e.json()).then(e => append(e))
  // })
}

// function append(elemento, callback) {
//   const div = document.createElement('div')
//   const text = document.createElement('span')
//   const img = document.createElement('img')
//   div.classList.add('filhos')
//   text.innerHTML = elemento.name
//   img.src = elemento.sprites.front_default
//   div.appendChild(text)
//   div.appendChild(img)
//   papi.appendChild(div)

// }
// const teste2 = async () => {
//   const sla = await fetch(url2)
// }


window.onload = teste;
// teste()
// teste2()