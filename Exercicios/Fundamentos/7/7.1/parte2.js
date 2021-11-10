// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

// const fatorial = N => {
//   let caunt = N
//   while(N > 1) {
//     caunt*=N - 1
//     N--
//   }
//   return caunt
// }

const fatorial = n => n<=1 ? 1 : n*fatorial(n-1);

console.log(fatorial(4))