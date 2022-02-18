import React, { useContext, useEffect } from 'react';
import MyContextGlobal from '../../context/MyContextGlobal';
import { COLUMN_FILTER, COMPARSUIN_FILTER } from '../../helpers';

function Index() {
  const { constrolInputs, filtros, controlComparisonFilter,
    filterByNumericValues } = useContext(MyContextGlobal);

  const filtoColumn = filterByNumericValues.map((e) => e.column);

  const NEW_COLUMN_FILTER = COLUMN_FILTER.filter((e) => !filtoColumn.includes(e));

  useEffect(() => {
    constrolInputs('columnFilter', NEW_COLUMN_FILTER[0]);
  }, [filterByNumericValues]);

  return (
    <form onSubmit={ (e) => e.preventDefault() }>
      <input
        type="text"
        data-testid="name-filter"
        name="nameFilter"
        onChange={ ({ target }) => constrolInputs(target.name, target.value) }
        value={ filtros.nameFilter }
      />
      <select
        data-testid="column-filter"
        name="columnFilter"
        onChange={ ({ target }) => constrolInputs(target.name, target.value) }
        value={ filtros.columnFilter }
      >
        {NEW_COLUMN_FILTER.map((coluna) => (
          <option key={ coluna }>{coluna}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparisonFilter"
        onChange={ ({ target }) => constrolInputs(target.name, target.value) }
        value={ filtros.comparisonFilter }
      >
        {COMPARSUIN_FILTER.map((comparador) => (
          <option key={ comparador }>{comparador}</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="valueFilter"
        onChange={ ({ target }) => constrolInputs(target.name, target.value) }
        value={ filtros.valueFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => { controlComparisonFilter(); } }
      >
        Pesquisar
      </button>
    </form>
  );
}

export default Index;
