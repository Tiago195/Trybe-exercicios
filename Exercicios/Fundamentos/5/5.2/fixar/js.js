let pai = document.querySelector("main");
// let newDiv = document.createElement("div")
// newDiv.innerText = "ola eu sou o goku"
// newDiv.id = "SouIrmaoDoElemento"
// pai.appendChild(newDiv);

// let onde = document.querySelector("#elementoOndeVoceEsta")
// let novoEle = document.createElement("p")
// novoEle.innerHTML = "<strong>SOU GRANDAO</strong>"
// onde.appendChild(novoEle)

let fdf = document.querySelector("#primeiroFilhoDoFilho")
let souFilho = document.createElement("div")
souFilho.style.width = "50px"
souFilho.style.height = "50px"
souFilho.style.backgroundColor = "red"
souFilho.id = "souFilhodoFDF"
fdf.appendChild(souFilho)
let teste = fdf.parentElement.parentElement.nextElementSibling
fdf.removeChild(souFilho)

// let removedor = document.querySelectorAll(".remove");
// for (let i of removedor){
//   let elemento = i
//   i.remove()
// }

let slaoq = document.querySelectorAll("section")
for (let i of slaoq){
    if(i.classList.contains("remove")){
      i.remove()
    }

}