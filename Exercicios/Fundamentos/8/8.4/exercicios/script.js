//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  // return arrays.flat()
  // return arrays.reduce((a, b) => {
  //   return a = [...a, ...b]
  // }, [])
  return arrays.reduce((a, b) => {
    return a.concat(b)
  })
}
// console.log(flatten())

//Para os exercícios 2, 3 e 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
  // escreva seu código aqui
  return books.reduce((a, b) => a + `${b.author.name}, `, '')
}
console.log(reduceNames())

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
function averageAge() {
  // escreva seu código aqui
  return books.reduce((a, b) => {
    return (a + (b.releaseYear - b.author.birthYear))
  }, 0) / books.length
}
// console.log(averageAge())

//4 - Encontre o livro com o maior nome.
function longestNamedBook() {
  // escreva seu código aqui
  return books.reduce((a, b) => a < b.name.length ? b : a, 0)
}

// console.log(longestNamedBook())

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   // escreva seu código aqui
//   return names.reduce((a, b) => a + (b.replace(/[b-z]/gi, '').length), 0)
// }
const containsA = () => names.reduce((a, b) => a + (b.replace(/[b-z]/gi, '').length), 0)
// console.log(containsA())

// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  return students.map((e, i) => ({
    name: e,
    average: grades[i].reduce((a, b) => a + b) / grades[i].length
  }))
}

// console.log(studentAverage())
