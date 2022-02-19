const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((a, { age }) => { // desistruturando cada elemento pq vou usar so o age
    const result = a; // result = ao parametro "a" para o lint n reclamar
    if (age < 18) result.child += 1; // se a idade for menor q 18 soma +1 em child
    if (age >= 18 && age < 50) result.adult += 1; // se a idade for maior q 18 soma e menor q 50 +1 em adult
    if (age >= 50) result.senior += 1; // se a idade for maior q 50 soma +1 em senior
    return result;
  }, { adult: 0, child: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || JSON.stringify(entrants) === '{}') return 0; // se entrants for undefined ou objeto vazio retorna 0
  // transformando o objeto de retorno da funçao countEntrants(entrants) em um array com as chaves e valores
  const entries = Object.entries(countEntrants(entrants));
  // acumulando o resultado da soma de todas as multiplicaçoes e retornando
  return entries.reduce((acc, valor) => acc + data.prices[valor[0]] * valor[1], 0);
}

module.exports = { calculateEntry, countEntrants };
