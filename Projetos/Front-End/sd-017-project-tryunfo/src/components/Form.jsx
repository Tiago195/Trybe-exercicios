import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const teste = () => (
      <label htmlFor="trunfo-input">
        <input
          type="checkbox"
          name="cardTrunfo"
          id="trunfo-input"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        <h4>Super Trybe Trunfo</h4>
      </label>
    );

    return (
      <form className="forms">
        <h1>Adicionar nova carta</h1>
        <Input
          htmlFor="name-input"
          type="name-input"
          name="cardName"
          id="name-input"
          testId="name-input"
          titulo="Nome"
          value={ cardName }
          onChange={ onInputChange }
        />

        <label htmlFor="description-input">
          <h4>Descrição</h4>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <Input
          htmlFor="attr1-input"
          type="number"
          name="cardAttr1"
          id="attr1-input"
          testId="attr1-input"
          titulo="attr01"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <Input
          htmlFor="attr2-input"
          type="number"
          name="cardAttr2"
          id="attr2-input"
          testId="attr2-input"
          titulo="attr02"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <Input
          htmlFor="attr3-input"
          type="number"
          name="cardAttr3"
          id="attr3-input"
          testId="attr3-input"
          titulo="attr03"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />

        <Input
          htmlFor="image-input"
          type="text"
          name="cardImage"
          id="image-input"
          testId="image-input"
          titulo="Imagem"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <h4>Raridade</h4>
        <select
          name="cardRare"
          id="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>

        {hasTrunfo
          ? (<span>Você já tem um Super Trunfo em seu baralho</span>)
          : (teste())}

        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
