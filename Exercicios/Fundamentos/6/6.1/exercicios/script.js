const estado = document.getElementById("estado");
const inputData = document.getElementById("data-inicio");
const enviar = document.getElementById("enviar");
const sla = document.getElementsByTagName('input');
const bg = document.querySelectorAll('input[type="radio"]');
const lugar = document.getElementById('lugar');

// const nome = document.getElementById('nome');
// const email = document.getElementById('email');
// const cpf = document.getElementById('cpf');
// const endereco = document.getElementById('endereco');
// const cidade = document.getElementById('cidade');
// const casa = document.getElementById('casa');


const estadosBrasil = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Cear",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

const sigla = [
  "AC",
  "AL",
  "AP",
  "AM",
  "BA",
  "CE",
  "ES",
  "GO",
  "MA",
  "MT",
  "MS",
  "MG",
  "PA",
  "PB",
  "PR",
  "PE",
  "PI",
  "RJ",
  "RN",
  "RS",
  "RO",
  "RR",
  "SC",
  "SP",
  "SE",
  "TO",
  "DF",
];

function estados() {
  for (let i in estadosBrasil) {
    const option = document.createElement("option");
    option.innerText = estadosBrasil[i];
    option.value = sigla[i];
    estado.appendChild(option);
  }
}
estados();

function verificar() {
  let tutu = true;
  const dia = `${inputData.value[0]}${inputData.value[1]}`;
  const mes = `${inputData.value[3]}${inputData.value[4]}`;
  const ano = `${inputData.value[6]}${inputData.value[7]}${inputData.value[8]}${inputData.value[9]}`;
  if (Number(dia) < 0 || Number(dia) > 31) {
    tutu = false;
  } else if (Number(mes) < 0 || Number(mes) > 12) {
    tutu = false;
  } else if (Number(ano) > 2021 || Number(ano) < 0) {
    tutu = false;
  }
  return tutu;
}

inputData.addEventListener("keyup", (e) => {
  e.target.value = e.target.value.replace(/[^0-9,/]/g,'');
  if (e.key !== 'Backspace') {
    if (e.target.value.length === 2) {
      e.target.value += '/'
    }
    if (e.target.value.length === 5) {
      e.target.value += '/'
    }
  }
});


function checked(e) {
    for (let i of bg) {
      i.value = ''
    }
    e.value = e.id;
    console.log(e.value)
}

bg[0].addEventListener('click', (e) => {
  checked(e.target);
});

bg[1].addEventListener('click', (e) => {
  checked(e.target);
});

enviar.addEventListener('click', (e) => {
  e.preventDefault();
  if (verificar()) {
    for (let i of sla) {
      const div = document.createElement('p');
      div.innerText = i.value
      lugar.appendChild(div)
    }
  }
});
