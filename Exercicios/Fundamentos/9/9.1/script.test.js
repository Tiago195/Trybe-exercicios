const { getPokemonDetails, uppercase } = require('./script');

test('test', (done) => {
  uppercase('teste', (e) => {
    try {
      expect(e).toBe('TESTE')
      done()
    } catch (error) {
      done(error)
    }
  })
})

// Verifique se a importação do arquivo correto está sendo feita.

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {

    function callback(error, result) {
      expect(error).toEqual(new Error('Não temos esse pokémon para você :('));
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {

    function callback(err, result) {
      expect(result).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember');
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});