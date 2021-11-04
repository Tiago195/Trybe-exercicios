function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
//EX01
for (let i of dezDaysList) {
  let ul = document.querySelector("#days");
  let li = document.createElement("li");
  li.innerHTML = i;
  li.className = "day";
  ul.appendChild(li);
  if (i === 24 || i === 25 || i === 31) {
    li.classList.add("holiday");
  }
  if (i === 4 || i === 11 || i === 18 || i === 25) {
    li.classList.add("friday");
  }
}

//-----------------------------------------//
//EX02 e EX03
let divPai = document.querySelector(".buttons-container");
let feriado = document.createElement("button");
divPai.appendChild(feriado);
feriado.innerHTML = "Feriado";
feriado.id = "btn-holiday";

feriado.addEventListener("click", function () {
  let f = document.querySelectorAll(".holiday");
  for (let i of f) {
    if (i.style.backgroundColor === "silver") {
      i.style.backgroundColor = "rgb(238,238,238)";
    } else {
      i.style.backgroundColor = "silver";
    }
  }
});
//-----------------------------------------------//
//EX04 e EX05

function cafe() {
  let sexta = document.createElement("button");
  sexta.innerHTML = "Sexta-feira";
  sexta.id = "btn-friday";
  divPai.appendChild(sexta);
  sexta.addEventListener("click", function () {
    let s = document.querySelectorAll(".friday");
    let g = [4, 11, 18, 25];
    for (let i in s) {
      if (s[i].innerHTML === "SEXTOU!") {
        s[i].innerHTML = g[i];
        s[i].style.backgroundColor = "rgb(238,238,238)";
        s[i].style.color = "";
      } else if (typeof parseInt(s[i]) === "number") {
        s[i].innerHTML = "SEXTOU!";
        s[i].style.backgroundColor = "silver";
      }
    }
  });
}

//-----------------------------------------------------//
//EX06
let zom = document.querySelector("#days");
zom.addEventListener("mousemove", function (e) {
  if (e.target.classList.contains("day")) {
    e.target.style.transform = "scale(1.8)";
  }
});
zom.addEventListener("mouseout", function (event) {
  event.target.style.transform = "scale(1.0)";
});
// let zom = document.querySelectorAll(".day");
// for (let i of zom) {
//   i.addEventListener("mousemove", function (e) {
//     e.target.style.transform = "scale(1.8)";
//   });
//   i.addEventListener("mouseout", function (event) {
//     event.target.style.transform = "scale(1.0)";
//   });
// }
//------------------------------------------------------//
//EX07
//-------------------------------------------------//
function tarefa(nomeDaTarefa) {
  let tarefa = document.querySelector(".my-tasks");
  let spn = document.createElement("span");
  spn.innerText = nomeDaTarefa;
  tarefa.appendChild(spn);
}
//------------------------------------------------//
//EX08
function corzinha(cor) {
  let papai = document.querySelector(".my-tasks");
  let core = document.createElement("div");
  core.className = "task";
  core.style.backgroundColor = cor;
  papai.appendChild(core);
}
//------------------------------------------------//
//EX09
cafe();
tarefa("Tarefa:");
corzinha("blue");
let selecionar = document.querySelector(".task");

selecionar.addEventListener("click", function (e) {
  if (selecionar.classList.contains("selected")) {
    e.target.classList.remove("selected");
  } else {
    e.target.classList.add("selected");
  }
});
//-------------------------------------------------//
//EX10
let ul = document.querySelector("#days");
ul.addEventListener("click", function (e) {
  e.preventDefault;
  if (
    selecionar.classList.contains("selected") &&
    e.target.style.color !== "blue"
  ) {
    e.target.style.color = "blue";
  } else {
    e.target.style.color = "#777777";
  }
});
//==---------------------------------------------------//
//EX-Bonus
let text = document.getElementById("task-input");
let botao = document.getElementById("btn-add");

text.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    if (text.value === "") {
      alert("[ERRO] Digite algo no campo");
    } else {
      cLista(text.value);
      text.value = "";
    }
  }
});

botao.addEventListener("click", function (e) {
  if (text.value === "") {
    alert("[ERRO] Digite algo no campo");
  } else {
    e.target = cLista(text.value);
    text.value = "";
  }
});

function cLista(texto) {
  let pai = document.querySelector(".task-list-container");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerText = texto;
  pai.appendChild(ul);
  ul.appendChild(li);
}
