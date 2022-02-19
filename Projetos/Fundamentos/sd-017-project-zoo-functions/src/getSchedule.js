const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  // transformo data.hours em array com as keys e values
  const horarios = (Object.entries(data.hours).reduce((a, b) => {
    const tutu = a; // criando uma const q vai ser igual ao elemento "a" para o lint n reclamar
    tutu[b[0]] = { // criando uma chave com a key do meu array e atribuindo a ela um objeto
      officeHour: `Open from ${b[1].open}am until ${b[1].close}pm`, // criando minha chave officeHour e passando seu valor
      // criando minha chave exhibition, atribuindo o resultado do filter e do map, como valor
      exhibition: data.species.filter((f) => f.availability.includes(b[0])).map((e) => e.name),
    };
    return tutu; // retornando tutu para povoar o objeto
  }, {}));
  horarios.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' }; // mudando a chave Monday
  if (data.species.some(({ name }) => name === scheduleTarget)) { // verificando se o parametro é igual a name
    return data.species.find(({ name }) => name === scheduleTarget).availability; // retornando a chave availability
  }
  return Object.keys(horarios).includes(scheduleTarget) // verificando se existe alguma chave igual ao parametro
    ? { [scheduleTarget]: horarios[scheduleTarget] } // caso exista chave igual ao parametro
    : horarios; // caso n exista
}

// console.log(getSchedule());

module.exports = getSchedule;
