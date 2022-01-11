import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Botao from './Botao';

class App extends React.Component {
  constructor() {
    super()

    this.pokedex = this.pokedex.bind(this)
    this.tutu = this.tutu.bind(this)

    this.state = {
      teste: pokemons,
      index: 0
    }
  }

  pokedex(event) {
    console.log(event.target)
    if (event.target.innerText === 'All') {
      this.setState({teste: pokemons, index:0})
    } else {
      this.setState({teste: pokemons.filter(e => e.type === event.target.innerText), index:0})
    }
  }

   tutu() {
        this.setState((teste, _props) => {
            if((teste.index + 1 ) === this.state.teste.length) return {index: 0}
            return { index: teste.index + 1}
        })
  }

  render () {

    const {teste, index} = this.state

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={teste[index]}/>
        <div>
          <Botao innerText='All' onclick={this.pokedex} />
          <Botao innerText='Electric' onclick={this.pokedex} />
          <Botao innerText='Fire' onclick={this.pokedex} />
          <Botao innerText='Bug' onclick={this.pokedex} />
          <Botao innerText='Poison' onclick={this.pokedex} />
          <Botao innerText='Psychic' onclick={this.pokedex} />
          <Botao innerText='Normal' onclick={this.pokedex} />
          <Botao innerText='Dragon' onclick={this.pokedex} />
        </div>
        <div>
          <Botao innerText='test' onclick={this.tutu}/>
        </div>
      </div>
    );
  }
}

export default App;