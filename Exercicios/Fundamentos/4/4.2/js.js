// //1 Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// //2 Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// //3 Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// //4 A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// //5 Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// //6 Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// //7 Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// //8 Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// //9 Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
// //10 Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = numbers;
// let soma = 0;
// let count = 0;
// let impares = 0
// let maiorValor = [numbers[0]]
// let menorValor = maiorValor
// let array=[]
// for (let i=1;i<=25;i++){
//   array.push(i)
//   console.log(array[i-1]/2)
// }

// for ( let i of numbers){
//   soma+=i
//   count++
//   if(i%2!==0){
//     impares++
//   }
//   if(maiorValor<i){
//     maiorValor = i
//   }
//   if(menorValor>i){
//     menorValor = i
//   }
// }
// console.log(`Soma : ${soma}`)
// console.log(`Media: ${soma/count}`)
//   if(soma/count>20){
//     console.log("valor maior q 20")
//   } else {
//     console.log("valor menor q 20")
//   }
// console.log(`Mario valor: ${maiorValor}`)
// if(impares>0){
//   console.log(`Impares: ${impares}`)
// } else {
//   console.log("nenhum valor ímpar encontrado")
// }
// console.log(`Menor valor: ${menorValor}`)
// console.log(array)

//Bonus
// Ordene o array numbers em ordem crescente e imprima seus valores;
// Ordene o array numbers em ordem decrescente e imprima seus valores;
// Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

//   for (let i=1; i<numbers.length;i++){
//     for(let n = 0;n<i;n++){
//       if(numbers[i]<numbers[n]){
//         let position = numbers[i]
//         numbers[i] = numbers[n]
//         numbers[n] = position
//       }
//     }
//   }

// console.log(numbers)

// function order(a,b){
//     if(a>b) return 1;
//     if(a<b) return -1;
//     return 0
//   }
  
// let slaoq = numbers.sort(order)
// console.log(slaoq)

// for (let n = 0; n <newArray.length; n++) {
//   if(newArray[n]===newArray[newArray.length-1]){
//     newArray[n]*= 2
//   }else {
//     newArray[n]*= newArray[n+1]
//   }
// }


// console.log(newArray);
