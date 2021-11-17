const { it } = require('@jest/globals');
const myFizzBuzz = require('../funcoes/myFizzBuzz');

it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é "fizzbuzz"', () => {
  expect('fizzbuzz').toBe(myFizzBuzz(15));
});

it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é "fizz"', () => {
  expect('fizz').toBe(myFizzBuzz(9));
});

it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é "buzz"', () => {
  expect('buzz').toBe(myFizzBuzz(10));
});

it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o proprio numero', () => {
  expect(7).toBe(myFizzBuzz(7));
});

it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(false).toBe(myFizzBuzz('ola'));
});