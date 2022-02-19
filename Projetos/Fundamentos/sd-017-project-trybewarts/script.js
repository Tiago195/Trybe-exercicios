const btnEntrar = document.getElementById('btn-entrar');
const entradaEmail = document.querySelector('#email');
const entradaSenha = document.querySelector('#password');
const btnEnviar = document.querySelector('#submit-btn');
const agreement = document.querySelector('#agreement');
const entradaNome = document.getElementById('input-name');
const entradaSobrenome = document.getElementById('input-lastname');
const lista = document.getElementById('lista');
const listaDeElementos = {
  Email: document.querySelector('#input-email'),
  Casa: document.querySelector('#house'),
  Família: 'valorUm',
  Matérias: 'valorDois',
  Avaliação: 'valorTres',
  Observações: document.querySelector('#textarea'),
};

btnEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    entradaEmail.value === 'tryber@teste.com' && entradaSenha.value === '123456'
  ) {
    return alert('Olá, Tryber!');
  }
  return alert('Email ou senha inválidos.');
});
const btnTextarea = document.getElementById('textarea');
// Pesquisa realizada no site: https://pt.stackoverflow.com/questions/25753/como-fazer-um-contador-de-caracteres-de-uma-textarea
btnTextarea.addEventListener('keyup', () => {
  const texto = document.querySelector('#textarea').value;
  const quant = 500;
  const total = texto.length;
  const resto = quant - total;
  document.getElementById('counter').innerText = resto;
});
const criarValores = (() => {
  document.getElementsByName('family').forEach((radio) => {
    if (radio.checked) {
      listaDeElementos.Família = radio;
    }
  });
  document.getElementsByName('rate').forEach((radio) => {
    if (radio.checked) {
      listaDeElementos.Avaliação = radio;
    }
  });
  const arrayCheckbox = [];
  document.getElementsByName('materias').forEach((checkebox) => {
    if (checkebox.checked) {
      const valueOfBox = checkebox.value;
      arrayCheckbox.push(valueOfBox);
      listaDeElementos.Matérias = arrayCheckbox.join(', ');
    }
  });
});
btnEnviar.addEventListener('click', (event) => {
  event.preventDefault();
  criarValores();
  console.log(document.getElementsByTagName('materias').value);
  document.getElementById('formulario').style.display = 'inline-block';
  const nome = document.createElement('li');
  lista.appendChild(nome);
  nome.innerText = `Nome: ${entradaNome.value} ${entradaSobrenome.value}`;
  // Feito com ajuda do Santos {
  Object.entries(listaDeElementos).forEach((key) => {
    const elemento = document.createElement('li');
    lista.appendChild(elemento);
    if (key[0] === 'Matérias') {
      console.log('entrou');
      elemento.innerText = `${key[0]}: ${key[1]}`;
    } else {
      elemento.innerText = `${key[0]}: ${key[1].value}`;
    }
  });
});
agreement.addEventListener('click', () => {
  if (agreement.checked) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
});
