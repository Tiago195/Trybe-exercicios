const tutu = require('../funcoes/encode-decode');

console.log(typeof tutu.decode === 'function')

describe('teste na funçao encode', () => {

  it('teste se encode é funçao', () => {
    expect('function').toBe(typeof tutu.encode);
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect('12345').toBe(tutu.encode('aeiou'));
  });

  it('Teste se as demais letras não são convertidas', () => {
    expect('t31g4').toBe(tutu.encode('tiago'));
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(5).toBe(tutu.encode('tiago').length)
  });

});

describe('teste na funçao decode', () => {

  it('teste se encode é funçao', () => {
    expect('function').toBe(typeof tutu.decode);
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect('aeiou').toBe(tutu.decode('12345'));
  });

  it('Teste se os demais numeros não são convertidos', () => {
    expect('tiago9').toBe(tutu.decode('t31g49'));
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(5).toBe(tutu.decode('t31g4').length)
  });

});