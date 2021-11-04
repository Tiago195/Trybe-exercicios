//ex1
let body = document.querySelector("body");
let h1 = document.createElement("h1")
h1.innerText = "Exercício 5.2 - JavaScript DOM"
body.appendChild(h1)
//ex2
let main = document.createElement("main")
main.className = "main-content"
body.appendChild(main)
//ex3
let section = document.createElement("section")
section.className = "center-content"
main.appendChild(section)
//ex4
let p = document.createElement("p")
section.appendChild(p)
//ex5
let section2 = document.createElement("section")
section2.className = "left-content"
main.appendChild(section2)
//ex6
let section3 = document.createElement("section")
section3.className = "right-content"
main.appendChild(section3)
//ex7
let img = document.createElement("img")
img.setAttribute("src", "https://picsum.photos/200")
img.className = "small-image"
section2.appendChild(img)
//ex8
let listaNumber = ["um","dois","tres","quatro","cinco","seis","sete","oito","nove","dez"]
let ul = document.createElement("ul")
// let li = document.createElement("li")
// ul.appendChild(li)
section3.appendChild(ul)
for (let i in listaNumber){
  ul.appendChild(document.createElement("li")).innerText = listaNumber[i]
}
//ex9
for (let i=0;i<3;i++){
  main.appendChild(document.createElement("h3")).className = "description"
  
}
// Parte 2
//ex1
h1.className = "title"
//ex3
main.removeChild(section2)
//ex4
section3.style.marginRight = "auto"
//ex5
section.parentElement.style.backgroundColor = "green"
//ex6
ul.children[9].remove()
ul.children[8].remove()