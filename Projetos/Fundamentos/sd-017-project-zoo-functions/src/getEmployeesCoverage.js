const data = require('../data/zoo_data');

function getEmployeesCoverage(parametro) {
  // seu código aqui
  const obj = data.employees.map((deus) => { // map percorre o meu employees criando e retornando meu novo objeto
    const teste = data.species.filter(({ id }) => deus.responsibleFor.includes(id)); // filtrando species caso responsibleFor tenha id incluso
    return { // criando meu objeto em cada iteraçao
      id: deus.id, // passando o id como valor
      fullName: `${deus.firstName} ${deus.lastName}`, // criando meu fullName
      species: teste.map((e) => e.name), // passando pelo teste e retornando apenas o name
      locations: teste.map((e) => e.location), // passando pelo teste e retornando apenas o location
    };
  });
  if (parametro) { // se parametro for diferente de undefineed cai nesse if
    if (obj.some(({ fullName, id }) => fullName.includes(parametro.name) || id === parametro.id)) { // se o parametro for encontrado entra neste if
      return obj.find(({ fullName, id }) => fullName // procura meu parametro dentro do obj e retorno ele
        .includes(parametro.name) || id === parametro.id);
    }
    throw new Error('Informações inválidas'); // se n achar o parametro, retorna o erro
  }
  return obj; // se o parametro for undefined retorna todo o obj
}

module.exports = getEmployeesCoverage;
