const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const quantidadeAnimais = data.species.reduce((a, { name, residents }) => { // todos os animais
    const obj = a; // quardando o "a" em uma variavel por causa do lint
    obj[name] = residents.length; // criando uma chave com o parametro "name" e passando o valor do tamando do array residents
    return obj; // retornando o obj para formar o objeto
  }, {});
  if (!animal) return quantidadeAnimais; // se o parametro "animal" === undefined
  if (animal.sex) { // se animal.sex for true entra dentro do if
    return data.species.find(({ name }) => name === animal.specie).residents // encontrando a specie e depois pegando o residents
      .filter(({ sex }) => sex === animal.sex).length; // filtrando array pelo sex
  }
  return quantidadeAnimais[animal.specie]; // caso sex for false ele cai direto nesse return, retornando apenas a chave q eu quero
}

module.exports = countAnimals;
