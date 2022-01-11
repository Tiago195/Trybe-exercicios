import React from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
    super()
    this.btn = this.btn.bind(this)
    this.cor = this.cor.bind(this) 
    this.state = {
      numeroClick: 0,
      color: 'blue'
    }
  }

  btn() {
    this.setState((ant, _props) => ({
      numeroClick: ant.numeroClick + 1
    }))
  }
  
  cor(e) {
    this.setState(() => ({
      color: e.target.innerText
    }))
  }

  render(){
    return (
      <div className="App">
        <button style={{background: this.state.color}} onClick={ this.btn } >{this.state.numeroClick}</button>
        <div>
          <button onClick={this.cor}>green</button>
          <button onClick={this.cor}>red</button>
          <button onClick={this.cor}>yellow</button>
        </div>
      </div>
    );
  }
}

export default App;
