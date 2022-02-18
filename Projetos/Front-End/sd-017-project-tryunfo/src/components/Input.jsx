import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { htmlFor, type, name, id, testId, titulo, value, onChange } = this.props;

    return (
      <label htmlFor={ htmlFor }>
        <h4>{ titulo }</h4>
        <input
          onChange={ onChange }
          type={ type }
          name={ name }
          id={ id }
          data-testid={ testId }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
