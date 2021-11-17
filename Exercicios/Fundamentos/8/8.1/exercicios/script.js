const ob = (nomeCompleto) => {
  let email = nomeCompleto.replace(' ', '_');
  return {
    Nome: nomeCompleto,
    Email: `${email}@trybe.com`
  };
};

const newEmployees = () => {
  const employees = {
    id1: ob('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: ob('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: ob('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.log(newEmployees())

const numeroSorteado = () => Math.trunc(Math.random() * 5 + 1)
const sorteio = (e, func) => e === func ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(sorteio(2, numeroSorteado()))