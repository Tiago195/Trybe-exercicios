const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const speciesId = data.employees.find(({ id: ids }) => ids === id).responsibleFor[0]; // pegando o id do animal
  const animais = data.species.find(({ id: ids }) => ids === speciesId).residents; // pegando os residents da specie
  const animalVelho = (animais.reduce((a, b) => {
    if (a.age > b.age) return a; // verificando qual animal é mais velho
    return b;
  }));
  return Object.values(animalVelho); // tratando os dados para retornar o q a funçao quer
}

module.exports = getOldestFromFirstSpecies;
