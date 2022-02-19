const data = require('../data/zoo_data');

function getAnimalMap(options = {}) {
  return data.species.reduce((obj, { location, name, residents }) => { // retorno da funçao e descontruçao da objeto
    if (!Object.keys(options).includes('includeNames')) { // se includeNames for undefined ou false entra nesse if
      obj[location].push(name); // acessando obj[location] para ficar dinamico e dando push no name
      return obj; // retornando obj para povoar meu objeto
    } if (options.sex) { // se option.sex for true entra nesse if
      obj[location].push({ // acessando obj[location] para ficar dinamico e dando push no objeto com a chave name
        [name]: options.sorted // verificando se option.sorted é true
          ? residents.filter(({ sex }) => sex === options.sex).map(((e) => e.name)).sort() // se sorted for true, retorna aqui
          : residents.filter(({ sex }) => sex === options.sex).map((e) => e.name), // se sorted for false, retorna aqui
      });
      return obj; // retornando parametro "obj" para povoar meu objeto
    } obj[location].push({ // acessando obj[location] para ficar dinamico e dando push no objeto com a chave name
      [name]: options.sorted // verificando se option.sorted é true, se for true retorna o map com o sort, se nao, retorna apenas o map
        ? residents.map((e) => e.name).sort() : residents.map((e) => e.name),
    });
    return obj; // retornando parametro "obj" para povoar meu objeto
  }, { NE: [], NW: [], SE: [], SW: [] });
}

module.exports = getAnimalMap;
