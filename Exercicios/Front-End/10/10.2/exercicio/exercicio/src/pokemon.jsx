import React, {Component} from "react";
import pokemons from './data'
import './card.css'

class Pokemon extends Component {
  render() {
    return (
      <>
        {pokemons.map(e => {
          return (
          <div className="card">
            <div className="infos">
            <p>{e.name}</p>
            <p>{e.type}</p>
            <p>average weight {e.averageWeight.value} kg</p>
            </div>
            <div className="img">
              <img src={e.image} alt="Pokemon" />
            </div>
          </div>
          )
        })}
      </>
    )
  }
}

export default Pokemon