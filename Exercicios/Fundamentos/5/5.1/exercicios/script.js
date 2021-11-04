function mudarP(texto, cor){
  document.querySelector(".center-content p").innerHTML = texto
  document.querySelector(".center-content").style.backgroundColor = cor
  // document.querySelector(".center-content p").color = cor
}
mudarP("ola eu sou o <strong>goku</strong>, e daqui a 2 anos eu me vejo com 23", "white")

function TrocaCor(newColor){
  document.querySelector("main").style.backgroundColor = newColor
}
TrocaCor("rgb(76,164,109)")

function correcao(texto){
  document.querySelector(".title").innerHTML = texto
}
correcao("Exercício 5.1 - JavaEscript")

function grandao(){
  for (let i of document.querySelectorAll("p")){
    i.style.textTransform = "uppercase"
    console.log(i.innerHTML)
  }
}
grandao()
