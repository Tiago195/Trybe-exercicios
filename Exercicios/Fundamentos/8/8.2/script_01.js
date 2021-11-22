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
function authorBornIn1947() {
  return books.find(e => e.author.birthYear === 1947)
  // escreva aqui o seu código
}
// console.log(authorBornIn1947(books))

function smallerNamel() {
  // escreva aqui o seu código
  return books.sort((a, b) => a.name.length - b.name.length)[0].name
  //==========================
  // return (books.find(e => {
  //   if (e.name.length === Math.min(...books.map(e => e.name.length)))
  //     return e.name
  // }).name)
  //=========================
  // let nameBook;
  // let tamanho = books[0].name.length
  // books.forEach(e => {
  //   if (e.name.length < tamanho) {
  //     tamanho = e.name.length
  //     nameBook = e.name
  //   }
  // })
  // Variável nameBook que receberá o valor do menor nome;
  // return nameBook
}

function getNamedBook() {
  // escreva seu código aqui
  const tutu = books.find(e => e.name.length === 26)
  // console.log(delete tutu.author)
  const teste = {}
  Object.entries(tutu).sort().forEach((e => {
    1921
    teste[e[0]] = e[1]
  }))
  return tutu
}

console.log(getNamedBook())

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return (books.sort((a, b) => b.releaseYear - a.releaseYear))
}

// console.log(booksOrderedByReleaseYearDesc())

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
  return books.every(e => e.author.birthYear > 1901 && e.author.birthYear < 2000)
}

// console.log(everyoneWasBornOnSecXX())

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
  return books.some(e => e.releaseYear > 1980 && e.releaseYear < 1989)
}

// console.log(someBookWasReleaseOnThe80s())

function authorUnique() {
  // escreva seu código aqui
  return !books.some(deus => books.some(e => {
    if (deus.author !== e.author)
      return e.author.birthYear === deus.author.birthYear
  }))
}

// console.log(authorUnique())