const header = document.querySelector("#header-container");
header.style.backgroundColor = "#00b069"

const esquerda = document.querySelector(".emergency-tasks");
esquerda.style.backgroundColor = "#ff9f84"


const direita = document.querySelector(".no-emergency-tasks");
direita.style.backgroundColor = "#f9db5e"

const fot = document.querySelector("footer");
fot.style.backgroundColor = "#003533"

let titulo = document.querySelectorAll("h3");
for (let i in titulo){
  if (i <2){
    titulo[i].style.backgroundColor = "#a531f3"
  }else {
    titulo[i].style.backgroundColor = "#232525"
  }
}


// titulo[0].style.backgroundColor = "#a531f3"
// titulo[1].style.backgroundColor = "#a531f3"
// titulo[2].style.backgroundColor = "#232525"
// titulo[3].style.backgroundColor = "#232525"


