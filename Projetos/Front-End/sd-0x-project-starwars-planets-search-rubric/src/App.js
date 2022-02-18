import React from 'react';
import Table from './components/Table';
import StoreGlobbal from './context/StoreGlobbal';
import Search from './components/Search';

import './App.css';

function App() {
  return (
    <StoreGlobbal>
      <Search />
      <Table />
    </StoreGlobbal>
  );
}

export default App;
