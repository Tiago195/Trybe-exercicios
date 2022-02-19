const data = require('../data/zoo_data');
// passando parametro rest para receber um array e depois passando um filter para verificar os ids
const getSpeciesByIds = (...ids) => data.species.filter(({ id }) => ids.includes(id));

module.exports = getSpeciesByIds;
