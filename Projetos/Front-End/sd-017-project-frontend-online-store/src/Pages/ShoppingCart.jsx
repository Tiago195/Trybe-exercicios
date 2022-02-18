import React, { Component } from 'react';
import { getProductsFromProduct } from '../services/api';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.getCarrinho = this.getCarrinho.bind(this);

    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    this.getCarrinho();
  }

  getCarrinho() {
    const array = JSON.parse(localStorage.getItem('Carrinho-compras')) || [];
    Object.entries(array).forEach((e) => {
      getProductsFromProduct(e[0]).then((result) => {
        this.setState((prevState) => ({
          cartItems: [...prevState.cartItems, { result, quantity: e[1] }],
        }));
      });
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems.length === 0 ? (
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        )
          : (
            <div>
              {cartItems.map(({ result, quantity }) => (
                <div key={ result.id }>
                  <h3 data-testid="shopping-cart-product-name">{result.title}</h3>
                  <p data-testid="shopping-cart-product-quantity">{quantity}</p>
                </div>
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default ShoppingCart;
