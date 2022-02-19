const data = require('../data/zoo_data');
// passando pelos employees usando o some para ver se pelo menos um elemento satisfaça minha condiçao
// na condiçao eu verifico se a chave menagers tem o id incluido
const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

function getRelatedEmployees(managerId) {
  // seu código aqui
  // se o isManager retornar false, lança o erro
  if (!isManager(managerId)) throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // fintrando employees verificando se managers tem managersId incluido, depois uso o map para retornar apenas o q eu quero
  return data.employees.filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
