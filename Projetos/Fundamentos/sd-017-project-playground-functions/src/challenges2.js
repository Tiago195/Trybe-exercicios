// Desafio 10
function techList(nomezin, namee) {
  let tutu = [];
  nomezin = nomezin.sort();
  if (nomezin.length < 1) {
    return 'Vazio!';
  }
  for (let i of nomezin) {
    tutu.push({ tech: i, name: namee });
  }

  return tutu;
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber(n) {
  let str = '';
  let caunt = 0;

  if (n.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i in n) {
    for (let d in n) {
      if (n[i] === n[d]) {
        caunt += 1;
      }
      if (caunt >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    caunt = 0;
    if (n[i] < 0 || n[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      if (i === '0') {
        str += `(${n[i]}`;
      } else if (i === '1') {
        str += `${n[i]}) `;
      } else if (i > 1 && i < 7) {
        str += n[i];
      } else if (i <= 7) {
        str += `-${n[i]}`;
      } else if (i >= 8) {
        str += n[i];
      }
    }
  }
  return str;
  // seu código aqui
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

function testador(base, test2, test3) {
  return base < test2 + test3 && base > Math.abs(test2 - test3);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let testeA = testador(lineA, lineB, lineC);
  let testeB = testador(lineB, lineA, lineC);
  let testeC = testador(lineC, lineA, lineB);

  return testeA && testeB && testeC;
}

// fonte https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions#special-negated-character-set
// fonte https://www.ti-enxame.com/pt/javascript/regex-para-remover-letras-simbolos-exceto-numeros/972349311/
// li esses 2 sites para fazer o replace
// g significar q vai percorrer ate a string terminar
// entre as barras estao meus parametros
// ^0-9 significar q eu quero apenas de 0 a 9
// dentro do meu [esta meu conteudo de fato]

// Desafio 13
function hydrate(nomezin) {
  nomezin = nomezin.replace(/[^0-9]/g, '');
  let tutu = 0;
  for (let i of nomezin) {
    tutu += Number(i);
  }
  if (tutu === 1) {
    tutu = `${tutu} copo de água`;
  } else {
    tutu = `${tutu} copos de água`;
  }
  return tutu;
  // seu código aqui
}
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
