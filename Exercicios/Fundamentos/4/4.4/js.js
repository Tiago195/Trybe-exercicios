// Parte I - Objetos e For/In

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   // recorrente: "Sim"
// };

// console.log(`Bem-vinda, ${info.personagem}`)
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// info["recorrente"] = "Sim"
// console.log(info)
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// for (let i in info) {
//   console.log(i)
// }
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (let i in info) {
//   console.log(info[i])
// }


// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// let info2 = {
//   personagem : "Tio Patinhas",
//   origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//   nota: "O último MacPatinhas",
//   recorrente: "Sim"
// }

// for (let i in info){
//   if (info[i]== "Sim" && info2[i]=="Sim"){
//     // info2.recorrente = "Ambos recorrentes"
//     console.log("Ambos recorrentes")
//   } else {
//     console.log(`${info[i]} e ${info2[i]}`)
//   }
// }

// console.log(info["recorrente"])



//   let tutu ={
//     perimetro: (2*base) + (2*altura),
//     area: base*altura
//   }
  
//   return tutu
// }

// console.log(quadrilatero(2,2))

// function parOuImpar(numero){
//   let tutu = {
//     pares: 0,
//     impares: 0
//   }

//   for (let i of numero){
//     if(i%2==0){
//       tutu.pares++
//     } else {
//       tutu.impares++
//     }
//   }
  
//   console.log(tutu)
// }


// parOuImpar([2,2,3,7,2,])



/**
 * 
 *  Crie uma função que receba uma string word e outra string ending. 
 * Verifique se a string ending é o final da string word . Considere que a string ending 
 * sempre será menor que a string word. 
 * 
 * Valor de teste: 'trybe' e 'be'.
 * Valor esperado no retorno da função: true
 * 
 * verificaFimPalavra('trybe', 'be');
 * Retorno esperado: true
 * 
 * verificaFimPalavra('joaofernando', 'fernan');
 * Retorno esperado: false
 * 
 * 
 * USAR O SPLIT: 
*/



// function slaOq(string,ending){
//   let teste = false;
//   string = string.split("")
//   ending = ending.split("")
//   if(ending[0] === string[string.length-2] && ending[1]===string[string.length-1]){
//     teste = true;
//   }

//   return teste
// }


// console.log(slaOq("tiago","sla"))



// Parte II - Funções

// 1- Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function palindromo(string){
//   let tutu = false
//   let inverso = string.split("").reverse().join("")
//   if(string == inverso){
//     tutu = true
//   }

//   return tutu
// }

// console.log(palindromo("arara"))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//   function mariovalor(numero){
//     let tutu = numero[0]
//     let sla = 0
//     for(let i of numero){
//       if (tutu<i){
//         tutu = i
//         sla = numero.indexOf(i)
//       }
//     }
//     return sla
//   }

// console.log(mariovalor([2, 3, 6, 7, 9, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function menorvalor(numero){
//       let tutu = numero[0]
//       let sla = 0
//       for(let i of numero){
//         if (tutu>i){
//           tutu = i
//           sla = numero.indexOf(i)
//         }
//       }
//       return sla
//     }
  
//   console.log(menorvalor([2, 3, 6, 7, 9, 3]))


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function nomegrande(array){
//   let tutu = array[0]
//   for(let i of array){
//     if(tutu.length<i.length){
//       tutu = i
//     }
//   }
//   return tutu
// }


// console.log(nomegrande(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


// function repete(numeros){
//   let escolhido, tutu, controle, count = 0;
//   for(let i of numeros){
//     escolhido = i
//     for (let d of numeros){
//       if (escolhido == d){
//         count ++
//       }
//     }
//     if (count>tutu){
//       controle = escolhido
//     }
//     tutu = count
//     count = 0
//   }
//   return controle
// }

// console.log(repete([2, 3, 2,2,2,2,2, 5, 8, 2, 3,3,3]))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// function soma(n){
//   let soma =0
//   for (let i = 0; i<=n;i++){
//     soma+=i
//   }

//   return soma
// }


// console.log(soma(5))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

// function strings(word, ending) {
//   let teste = false;
//   word = word.split(word[word.length - ending.length -1]);
//   if (word[1] === ending) {
//     teste = true;
//   }
//   return teste;

// }

// console.log(strings('trybe', 'be'));

//Bonus

// function romanos(n){
//     

//   return
// }

// console.log(romanos("IV"))