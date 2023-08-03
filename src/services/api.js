const CATEGORY_URL = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  const response = fetch(CATEGORY_URL);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
