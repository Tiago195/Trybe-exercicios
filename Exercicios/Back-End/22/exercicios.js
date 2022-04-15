function mlp(n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if([n1,n2,n3].some(e => typeof e !== 'number')) reject('Informe apenas números')
    const result = (n1 + n2) * n3
    if(result < 50) reject('Valor muito baixo')
    resolve(result);
  })
}

console.log(mlp(1,10,5))