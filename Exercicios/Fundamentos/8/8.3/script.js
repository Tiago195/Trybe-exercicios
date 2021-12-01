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

function formatedBookNames() {
  // escreva seu código aqui
  return books.map(e => `${e.name} - ${e.genre} - ${e.author.name}`)
}

// console.log(formatedBookNames())

function nameAndAge() {
  // escreva seu código aqui
  return books.map(e => {
    return { age: e.releaseYear - e.author.birthYear, author: e.author.name }
  }).sort((a, b) => a.age - b.age)
}

// console.log(nameAndAge())

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter(e => e.genre === 'Ficção Científica' || e.genre === 'Fantasia');
}

// console.log(fantasyOrScienceFiction())

function oldBooksOrdered() {
  // escreva seu código aqui
  return books.filter(e => {
    return (2020 - e.releaseYear > 60)
  }).sort((a, b) => a.releaseYear - b.releaseYear)
}

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return books.filter(e => e.genre === 'Ficção Científica' || e.genre === 'Fantasia')
    .map(e => e.author.name).sort()
}

// console.log(fantasyOrScienceFictionAuthors())

function oldBooks() {
  // escreva seu código aqui
  return books.filter(e => 2020 - e.releaseYear > 60).map(e => e.name)
}

// console.log(oldBooks())

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.find(e => {
    const tutu = e.author.name.split(' ')
    return tutu[0].length === 2 && tutu[1].length === 2 && tutu[2].length === 2
  }).name
}

// console.log(authorWith3DotsOnName())