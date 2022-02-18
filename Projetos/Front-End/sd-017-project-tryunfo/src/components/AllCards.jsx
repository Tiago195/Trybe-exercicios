import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
// import gerarIds from '../idGenerator';

export default class AllCards extends Component {
  render() {
    const { cartas, callback } = this.props;
    return (
      <div>
        <ul>
          {cartas.map((e) => (
            <li id={ e.id } key={ e.cardName }>
              <Card
                cardName={ e.cardName }
                cardDescription={ e.cardDescription }
                cardAttr1={ e.cardAttr1 }
                cardAttr2={ e.cardAttr2 }
                cardAttr3={ e.cardAttr3 }
                cardImage={ e.cardImage }
                cardRare={ e.cardRare }
                cardTrunfo={ e.cardTrunfo }
              />
              <button
                type="button"
                data-testid="delete-button"
                onClick={ (event) => callback(event.target.parentElement) }
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

AllCards.propTypes = {
  cartas: PropTypes.arrayOf(PropTypes.object).isRequired,
  callback: PropTypes.func.isRequired,
};
