import React, { Component } from 'react';
import CartButton from '../Components/CartButton';
import ItemList from '../Components/ItemList';
import { getCategories,
  getProductsFromQuery,
  getProductsFromCategory } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      productList: [],
      categoryList: [],
      carrinho: JSON.parse(localStorage.getItem('Ids')) || [],
      search: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGetCategory = this.handleGetCategory.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
  }

  componentDidMount() {
    this.handleGetCategory();
  }

  handleSearch = ({ target }) => {
    this.setState({
      search: target.value,
    });
  }

  async handleClick() {
    const { search } = this.state;
    const data = await getProductsFromQuery(search);
    this.setState({
      productList: data.results,
    });
  }

  handleGetCategory = async () => {
    const categories = await getCategories();
    this.setState({
      categoryList: categories,
    });
  }

  getProductsByCategory = async ({ target: { value } }) => {
    const apiReq = await getProductsFromCategory(value);
    this.setState({
      productList: apiReq.results,
    });
  }

  addToCart = async ({ target }) => {
    const id = (target.parentElement.children[0].innerText);
    this.setState((prevState) => ({
      carrinho: [...prevState.carrinho, id],
    }), () => {
      const { carrinho } = this.state;
      localStorage.setItem('Ids', JSON.stringify(carrinho));
      localStorage.setItem('Carrinho-compras', JSON.stringify(carrinho.reduce((a, b) => {
        a[b] = carrinho.filter((filterId) => filterId === b).length;
        return a;
      }, {})));
    });
  }

  render() {
    const { productList, categoryList } = this.state;
    const initialMessage = (
      <div data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </div>);

    return (
      <section className="home-container">
        <section>
          <ul className="ul-container">
            <h3>Categorias</h3>
            {categoryList.map(({ id, name }) => (
              <li key={ id }>
                <label htmlFor={ `category ${id}` }>
                  <input
                    type="radio"
                    name="category"
                    id={ `category ${id}` }
                    value={ id }
                    key={ id }
                    data-testid="category"
                    onClick={ this.getProductsByCategory }
                  />
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </section>
        <section className="item-container">
          <section className="search-container">
            <label htmlFor="search">
              <span className="material-icons">&#xe8b6;</span>
              <input
                id="search"
                type="text"
                data-testid="query-input"
                name="search"
                onChange={ this.handleSearch }
              />
            </label>
            <div>
              <button
                data-testid="query-button"
                type="button"
                onClick={ this.handleClick }
              >
                Pesquisa

              </button>
            </div>
            <CartButton />
          </section>
          { productList.length === 0 ? initialMessage : <ItemList
            data={ productList }
            callback={ this.addToCart }
          /> }
        </section>
      </section>

    );
  }
}

export default Home;
