import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SelectCard extends Component {
  render() {
    const { callback } = this.props;

    return (
      <div>
        <label htmlFor="name-filter">
          <h4>Filtrar por nome</h4>
          <input
            type="text"
            id="name-filter"
            data-testid="name-filter"
            onChange={ callback }
          />
        </label>

        <select data-testid="rare-filter" id="rare-filter" onChange={ callback }>
          <option value="">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <label htmlFor="trunfo-filter">
          <input
            type="checkbox"
            id="trunfo-filter"
            data-testid="trunfo-filter"
            onChange={ callback }
          />
        </label>
      </div>
    );
  }
}

SelectCard.propTypes = {
  callback: PropTypes.func.isRequired,
};
