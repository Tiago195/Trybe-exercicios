const data = require('../data/zoo_data');
// funçao aceita um parametro
// percorre employess com find verificando firstName ou lastName, se o find n achar nd, retorna objeto vazio
const getEmployeeByName = (employeeName) => data.employees
  .find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName) || {};

module.exports = getEmployeeByName;
