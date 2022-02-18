import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Home } />
      <Route exact path="/shopping-cart" component={ ShoppingCart } />
    </Router>
  );
}

export default App;
