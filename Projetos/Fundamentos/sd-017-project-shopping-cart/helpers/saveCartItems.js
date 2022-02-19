const saveCartItems = (elemento) => {
  // seu código aqui
  const obj = [...elemento].reduce((a, b, i) => {
    const tutu = a;
    tutu[i] = b.innerHTML || b;
    return tutu;
  }, {});
  localStorage.setItem('cartItems', JSON.stringify(obj));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
