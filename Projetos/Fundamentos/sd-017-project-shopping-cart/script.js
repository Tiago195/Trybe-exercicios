const papi = document.querySelector('.items');
const papiOl = document.querySelector('.cart__items');
const total = document.querySelector('.total-price');
const limpa = document.querySelector('.empty-cart');
const loading = document.querySelector('.loading');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function createCartItemElement(p) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  if (typeof p === 'object') {
    li.innerText = `SKU: ${p.id} | NAME: ${p.title} | PRICE: $${p.price}`;
    return li;
  }
  li.innerText = p;
  papiOl.appendChild(li);
}

async function selectItem(id) {
  const item = await fetchItem(id);
  papiOl.appendChild(createCartItemElement(item));
} 

function sumNumber() {
  return [...papiOl.children].reduce((a, { innerHTML }) => {
    let sum = a;
    sum += (Number(innerHTML.substring((innerHTML.indexOf('$')) + 1)));
    return sum;
  }, 0);
}

papi.addEventListener('click', async (e) => {
  if (e.target.classList.contains('item__add')) {
    const id = e.path[1].children[0].innerText;
    await selectItem(id);
    saveCartItems(papiOl.children);
    total.innerHTML = sumNumber();
  }
});

papiOl.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart__item')) {
    e.target.remove();
    saveCartItems(papiOl.children);
    total.innerHTML = sumNumber();
  }
});

function reloadPage() {
  const test = Object.keys(JSON.parse(getSavedCartItems()));
  test.forEach((e) => createCartItemElement(JSON.parse(getSavedCartItems())[e]));
}

limpa.addEventListener('click', () => {
  papiOl.innerHTML = '';
  saveCartItems(papiOl.children);
  total.innerHTML = sumNumber();
});
window.onload = async () => {
  const itens = await fetchProducts('computador');
  if (itens) {
    loading.remove();
  }
  itens.forEach((elemento) => {
    papi.appendChild(createProductItemElement(elemento));
  });
  reloadPage();
  total.innerHTML = sumNumber();
};
