const data = require('../data/zoo_data');
// funçao aceita 2 paramentros
// percorro pelo species com o find, comparando o name com o animal
// depois acesso a chave residents e uso o every para verificar se todos os animais sao mais velhos q a idade minima
const getAnimalsOlderThan = (animal, age) => data.species
  .find(({ name }) => name === animal).residents.every(({ age: idade }) => idade > age);

module.exports = getAnimalsOlderThan;
