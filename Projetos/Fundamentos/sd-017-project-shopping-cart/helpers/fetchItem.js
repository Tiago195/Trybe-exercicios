const fetchItem = async (parametro) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${parametro}`;
  try {
    const data = await (await fetch(url)).json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
