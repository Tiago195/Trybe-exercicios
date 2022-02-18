// Criado API para busca geral
export async function getCategories() {
  const apiReq = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const returnApi = await apiReq.json();
  return returnApi;
}

// Criado APi para filtro por Categoria e Query
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const filterApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const returnApi = await filterApi.json();
  return returnApi;
}

// Criado API para filtro por Query
export async function getProductsFromQuery(query) {
  const filterApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const returnApi = await filterApi.json();
  return returnApi;
}

// Criado API para filtro por Category
export async function getProductsFromCategory(categoryId) {
  const filterApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const returnApi = await filterApi.json();
  return returnApi;
}

// Criado API para buscar detalhes de 1 item especifico
export async function getProductsFromProduct(productId) {
  const filterApi = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const returnApi = await filterApi.json();
  return returnApi;
}
