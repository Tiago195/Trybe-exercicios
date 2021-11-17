// Exercicio 1
// const ob = (nomeCompleto) => ({
//   Nome: nomeCompleto,
//   Email: `${nomeCompleto.replaceAll(' ', '_').toLowerCase()}@trybe.com`
// });

// const newEmployees = (tutu) => {
//   const employees = {
//     id1: tutu('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//     id2: tutu('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//     id3: tutu('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//   }
//   return employees;
// };

// console.log(newEmployees(ob))
//------------------------------//

// Exercicio 2
// const numeroSorteado = () => Math.trunc(Math.random() * 5 + 1)
// const sorteio = (e, func) => e === func ? 'Parabéns você ganhou' : 'Tente novamente';

// console.log(sorteio(2, numeroSorteado()))
//--------------------//

// Exercicio 3
// const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
// const respostaAluno = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const tutu = (gabarito, resposta, func) => {
//   return func(gabarito, resposta)
// };

// const teste = (gab, e) => {
//   let pontos = 0
//   for (let i in gab) {
//     if (e[i] === 'N.A') {
//     } else {
//       gab[i] === e[i] ? pontos += 1 : pontos -= 0.5
//     }
//   }
//   return pontos
// };

// console.log(tutu(gabarito, respostaAluno, teste));
//------------------------------//

// Bonus parte1
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => {
  return Math.round(Math.random() * dragon.strength + 15);
};

const warriorDamage = () => {
  return Math.round(Math.random() * (warrior.strength * warrior.weaponDmg) + warrior.strength);
};

const mageDamage = () => {
  if (mage.mana > 15) {
    mage.mana -= 15;
    return {
      dano: Math.round(Math.random() * (mage.intelligence * 2) + mage.intelligence),
      mana: 15
    }
  } else {
    return { dano: 'Não possui mana suficiente' }
  }

};

console.log(mageDamage())