const fetchProducts = async (nomezin) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${nomezin}`;
  try {
    const data = await (await fetch(url)).json();
    return data.results;
  } catch (error) {
    return error;
  }
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
