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

// const fatorial = n => n<=1 ? 1 : n*fatorial(n-1);

// console.log(fatorial(4))

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
//p.split(' ').sort((a, b) => b.length - a.length);
const maiorPalavra = p => p.split(' ').sort((a, b) => b.length - a.length)[0];
//   p = p.split(' ')
//   p = p.sort((a, b) => b.length - a.length);
//   console.log(p[0]);
//
// }

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))