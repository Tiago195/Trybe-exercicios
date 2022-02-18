import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <span className="material-icons-outlined">&#xe8cc;</span>
        </Link>
      </div>
    );
  }
}

export default CartButton;
