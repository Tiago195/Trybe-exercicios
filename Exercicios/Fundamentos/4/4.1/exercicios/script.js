// 1-Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

// let a = 10;
// let b = 5;
// // let result = a + b;
// // let result = a - b;
// // let result = a * b;
// // let result = a / b;
// // let result = a % b;
// console.log(result);


// 2- Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// const n1 = 41;
// const n2 = 43;

// if (n1 > n2){
//     console.log(n1);
// } else {
//     console.log(n2);
// }


// 3- Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// const numeros = [5, 2 ,4];
// let maiorNumero = numeros[0];
// for (var i =0; i<numeros.length;i++) {
//     if(maiorNumero < numeros[i]) {
//         maiorNumero = numeros[i];
//     }
// }
// console.log(maiorNumero);

// OU

// const n1 = 1;
// const n2 = 8;
// const n3 = 6;

// if(n1 > n2 && n1 > n3) {
//     console.log(n1);
// } else if (n2 > n3) {
//     console.log(n2);
// } else console.log(n3);


// 4-Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const numero = 1.2;

// if (numero > 0) {
//     console.log("positive");
// } else if (numero < 0) {
//     console.log("negative");
// } else console.log("zero");


// 5-Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// const n1 = 70;
// const n2 = 30;
// const n3 = 80;
// const triângulo = (n1 + n2 + n3) == 180;

// console.log(triângulo);


// 6-Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

// let peça = "piao"
// switch (peça){
//     case "piao":
//         console.log("vertical");
//     break;
//     case "rainha":
//         console.log("vertical, horizontal e diagonal");
//     break;
//     case "rei":
//         console.log("vertical, horizontal e diagonal, apenas uma casa");
//     break;
//     case "cavalo":
//         console.log("anda em L");
//     break;
//     case "torre":
//         console.log("vertical e horizontal");
//     break;
//     case "bispo":
//         console.log("diagonal");
//     break;
//     default:
//         console.log("dado invalido")
// }

// 7-Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

// const nota = -5;
// let result;
// if(nota >0 && nota <50) {
//     result = "F";
// }else if (nota >= 50 && nota <60){
//     result = "E";
// }else if(nota >= 60 && nota <70){
//     result = "D";
// }else if(nota >= 70 && nota <80){
//     result = "C";
// }else if(nota >=80 && nota <90) {
//     result = "B";
// }else if(nota >= 90 && nota <=100){
//     result = "A";
// } else {result = "numero invalido"}
// console.log(result);

// 8-Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

// const n1 = 8901;
// const n2 = 842;
// const n3 = 48671;

// if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
//   console.log("True");
// } else (console.log("false"));

// OU

// const numeros = [8901, 848, 48671];
// let verificar = [];

// for (let i =0; i<numeros.length;i++) {
//   if(numeros[i] % 2 === 0){
//     verificar.push("True");
//   }else {
//     verificar.push("False");
//   }
// }
// for (let o=0; o<verificar.length;o++){
//   if(verificar[o] == "True"){
//     console.log(`Posição ${o +1}: numero indentificado como Par. resultado é ${verificar[o]}`);
//   }else {
//     console.log(`Posição ${o +1}: numero indentificado como Impar. resultado é ${verificar[o]}`);
//   }
// }


// 9- Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

// const n1 = 8901;
// const n2 = 842;
// const n3 = 48672;

// if (n1 % 2 === 1 || n2 % 2 === 1 || n3 % 2 === 1) {
//   console.log("True");
// } else (console.log("false"));

// OU

// const numeros = [8901, 848, 48671];
// let verificar = [];

// for (let i =0; i<numeros.length;i++) {
//   if(numeros[i] % 2 === 1){
//     verificar.push("True");
//   }else {
//     verificar.push("False");
//   }
// }
// for (let o=0; o<verificar.length;o++){
//   if(verificar[o] == "True"){
//     console.log(`Posição ${o +1}: numero indentificado como Par. resultado é ${verificar[o]}`);
//   }else {
//     console.log(`Posição ${o +1}: numero indentificado como Impar. resultado é ${verificar[o]}`);
//   }
// }

// 10-Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// const custo = 20;
// const venda = 40;
// const lucroBruto = (venda - custo);
// const imposto = (20/100)*lucroBruto;
// const lucroLiquido = lucroBruto-imposto
// if (custo <= 0 || venda <= 0){
//   console.log("[ERRO] Números invalidos.")
// } else{
//   console.log(lucroLiquido);
// }


// 11-Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// INSS
const salarioBruto = 2500;
let salarioLiquido; // variavel q vai ser o salario liquido
const ali8 = (8/100)*salarioBruto; // INSS de 8%
const ali9 = (9/100)*salarioBruto; // INSS de 9%
const ali11 = (11/100)*salarioBruto; // INSS de 11%
const aliMax = 570.88; // INSS max a ser descontado
let calc; // variavel q vai fazer os calculos

if (salarioBruto <= 0) { // Verificando se o salario é negativo
  console.log("[ERRO] Valor bruto invalido")
} else {    // se n for negativo, cai nessas verificaçoes
  if (salarioBruto <= 1556.94) {                                  // Verificando qual o valor a pagar ao INSS
    console.log(`Salario Bruto: R$${salarioBruto}`);
    salarioLiquido = salarioBruto-ali8;
    console.log(`Salario Bruto - INSS = R$${salarioLiquido}`);
  
  }else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){  // Verificando qual o valor a pagar ao INSS
    console.log(`Salario Bruto: R$${salarioBruto}`);
    salarioLiquido = salarioBruto-ali9;
    console.log(`Salario Bruto - INSS = R$${salarioLiquido}`);
  
  } else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){  // Verificando qual o valor a pagar ao INSS
    console.log(`Salario Bruto: R$${salarioBruto}`);
    salarioLiquido = salarioBruto-ali11;
    console.log(`Salario Bruto - INSS = R$${salarioLiquido}`);

  }else {                                                          // se o salario for maior q 5189.82 ele vai cair aqui, q é o valor maximo
    console.log(`Salario Bruto: R$${salarioBruto}`);
    salarioLiquido = salarioBruto - aliMax;
    console.log(`Salario Bruto - INSS = R$${salarioLiquido}`);

  }
}

//Imposto de Renda
const ali7_5= (7.5/100)*salarioLiquido;  // Imposto de renda de 7,5%
const ali15= (15/100)*salarioLiquido;    // Imposto de renda de 15%
const ali22_5= (22.5/100)*salarioLiquido;// Imposto de renda de 22.5%
const ali27_5= (27.5/100)*salarioLiquido;// Imposto de renda de 27,5%

if (salarioLiquido <= 0 || salarioLiquido == undefined) {  // Verificando se o salario liquido nao é um valor negativo
  console.log("[ERRO] Valor liquido invalido")

} else { // se o salario for positivo, ele cai nessas verificaçoes
  if (salarioLiquido <= 1903.98) { // Verificando se salario liquido tem imposto de renda
    console.log("Isento de imposto de renda");
    console.log(`líquido a ser recebido: ${salarioLiquido.toFixed(2)}`);

  } else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65){ // Verificando qual o imposto de renda
    calc = ali7_5-142.80;
    console.log(`Imposto de renda a pagar: R$${calc.toFixed(2)}`)
    salarioLiquido-=calc;
    console.log(`Liquido a ser recebido: R$${salarioLiquido.toFixed(2)}`)

  } else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05 ){ // Verificando qual o imposto de renda
    calc = ali15-354.80;
    console.log(`Imposto de renda a pagar: R$${calc.toFixed(2)}`)
    salarioLiquido-=calc;
    console.log(`Liquido a ser recebido: R$${salarioLiquido.toFixed(2)}`)

  } else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) { // Verificando qual o imposto de renda
    calc = ali22_5-636.13;
    console.log(`Imposto de renda a pagar: R$${calc.toFixed(2)}`)
    salarioLiquido-=calc;
    console.log(`Liquido a ser recebido: R$${salarioLiquido.toFixed(2)}`)

  } else {                                                             // Se o Imposto de renda for maior q 4664.68, ele cai aqui
    calc = ali27_5-869.36;
    console.log(`Imposto de renda a pagar: R$${calc.toFixed(2)}`)
    salarioLiquido-=calc;
    console.log(`Liquido a ser recebido: R$${salarioLiquido.toFixed(2)}`)

  }
}
