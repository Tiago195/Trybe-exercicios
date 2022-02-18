import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemList extends Component {
  render() {
    const { data, callback } = this.props;
    return (
      <section className="list-container">
        {
          data.map((product) => (
            <div data-testid="product" className="list" key={ product.id }>
              <span style={ { display: 'none' } }>{product.id}</span>
              <h2>{product.title}</h2>
              <img className="img-list" src={ product.thumbnail } alt={ product.title } />
              <p>{ `R$ ${(product.price).toFixed(2)}` }</p>
              <button
                data-testid="product-add-to-cart"
                type="button"
                onClick={ callback }
              >
                Adicionar ao carrinho
              </button>
            </div>
          ))
        }
      </section>
    );
  }
}

ItemList.propTypes = {
  data: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default ItemList;
