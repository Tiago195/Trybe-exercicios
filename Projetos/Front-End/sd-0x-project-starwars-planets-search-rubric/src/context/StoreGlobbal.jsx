import React, { useState, useEffect } from 'react';
import MyContextGlobal from './MyContextGlobal';
import fetchPlanets from '../helpers';
// import getData from '../hooks';

// eslint-disable-next-line react/prop-types
function StoreGlobal({ children }) {
  const [data, setData] = useState([]);
  const [dataMain, setDataMain] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const getPlanet = async () => {
    const { results } = await fetchPlanets();
    setDataMain(results);
    setData(results);
  };

  useEffect(() => {
    getPlanet();
  }, []);

  const state = {
    nameFilter: (value) => setNameFilter(value),
    columnFilter: (value) => setColumnFilter(value),
    comparisonFilter: (value) => setComparisonFilter(value),
    valueFilter: (value) => setValueFilter(value),
  };

  const constrolInputs = (name, value) => {
    state[name](value);
  };

  const addFilterByNumericValues = () => {
    setFilterByNumericValues([
      ...filterByNumericValues, {
        column: columnFilter,
        comparison: comparisonFilter,
        value: valueFilter,
      },
    ]);
  };

  const selectFilters = {
    'maior que': () => {
      setData(dataMain.filter((planeta) => (
        Number(planeta[columnFilter]) > Number(valueFilter))));
      addFilterByNumericValues();
    },
    'menor que': () => {
      setData(dataMain.filter((planeta) => (
        Number(planeta[columnFilter]) < Number(valueFilter))));
      addFilterByNumericValues();
    },
    'igual a': () => {
      setData(dataMain.filter((planeta) => (
        Number(planeta[columnFilter]) === Number(valueFilter))));
      addFilterByNumericValues();
    },
  };

  const controlComparisonFilter = () => {
    selectFilters[comparisonFilter]();
  };

  const store = {
    data,
    constrolInputs,
    controlComparisonFilter,
    filterByNumericValues,
    setFilterByNumericValues,
    setData,
    dataMain,
    filtros: {
      nameFilter,
      columnFilter,
      comparisonFilter,
      valueFilter,
    },
  };

  return (
    <MyContextGlobal.Provider value={ store }>
      {children}
    </MyContextGlobal.Provider>
  );
}

export default StoreGlobal;
