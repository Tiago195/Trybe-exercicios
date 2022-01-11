import React from "react";

class Botao extends React.Component {
  render() {

    const {innerText, onclick} = this.props

    return (
      <button onClick={onclick}>{innerText}</button>
    )
  }
}

export default Botao;