// Desafio 1
function compareTrue(a, b) {
  return a && b;
  // seu código aqui
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;

  // seu código aqui
}

// Desafio 3
function splitSentence(strings) {
  let array = [];
  let str = '';
  for (let i = 0; i <= strings.length; i += 1) {
    if (i === strings.length || strings[i] === ' ') {
      array.push(str);
      str = '';
    } else if (strings[i] !== ' ') {
      str += strings[i];
    }
  }
  return array;
  // seu código aqui
}

// Desafio 4
function concatName(nomezin) {
  return `${nomezin[nomezin.length - 1]}, ${nomezin[0]}`;
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
  // seu código aqui
}

// Desafio 6
function highestCount(n) {
  let tutu = n[0];
  let count = 0;
  for (let i of n) {
    if (i > tutu) {
      tutu = i;
      count = 1;
    } else if (tutu === i) {
      count += 1;
    }
  }
  return count;
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let tutu;
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    tutu = 'os gatos trombam e o rato foge';
  } else if (cat1 > cat2) {
    tutu = 'cat2';
  } else {
    tutu = 'cat1';
  }
  return tutu;
  // seu código aqui
}

function assist(sla) {
  if (sla % 15 === 0) {
    return 'fizzBuzz';
  }
  if (sla % 3 === 0) {
    return 'fizz';
  }
  if (sla % 5 === 0) {
    return 'buzz';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let tutu = [];
  for (let i of array) {
    if (assist(i)) {
      tutu.push(assist(i));
    } else {
      tutu.push('bug!');
    }
  }
  return tutu;
  // seu código aqui
}

// Desafio 9
function encode(nomezin) {
  nomezin = nomezin.replace(/a/g, '1');
  nomezin = nomezin.replace(/e/g, '2');
  nomezin = nomezin.replace(/i/g, '3');
  nomezin = nomezin.replace(/o/g, '4');
  nomezin = nomezin.replace(/u/g, '5');
  return nomezin;
  // seu código aqui
}

function decode(nomezin) {
  nomezin = nomezin.replace(/1/g, 'a');
  nomezin = nomezin.replace(/2/g, 'e');
  nomezin = nomezin.replace(/3/g, 'i');
  nomezin = nomezin.replace(/4/g, 'o');
  nomezin = nomezin.replace(/5/g, 'u');
  return nomezin;
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
