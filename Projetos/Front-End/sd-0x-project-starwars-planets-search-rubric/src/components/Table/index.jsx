import React, { useContext } from 'react';
import MyContextGlobal from '../../context/MyContextGlobal';
import { HEADER_TABLE } from '../../helpers';

function Table() {
  const { data, filtros, filterByNumericValues,
    setFilterByNumericValues, setData, dataMain } = useContext(MyContextGlobal);
  const newData = data.filter(({ name }) => name.includes(filtros.nameFilter));

  const renderFilter = () => (
    filterByNumericValues.map((e) => (
      <div
        key={ e.column }
        data-testid="filter"
      >
        <span>{`${e.column} ${e.comparison} ${e.value}`}</span>
        <button
          type="button"
          onClick={ () => {
            setData(dataMain);
            setFilterByNumericValues(filterByNumericValues
              .filter(({ column }) => e.column !== column));
          } }
        >
          X
        </button>
      </div>
    ))
  );

  return (
    <>
      {renderFilter()}
      <table>
        <thead>
          <tr>
            {HEADER_TABLE.map((titulo) => (
              <th key={ titulo }>{titulo}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {newData.map((planetas) => {
            delete planetas.residents;
            return (
              <tr key={ planetas.name }>
                {Object.values(planetas).map((infoPlaneta, index) => (
                  <td key={ index }>{infoPlaneta}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;
